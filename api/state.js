import crypto from 'node:crypto';
import {json,method,sameOrigin,getPool,setupDatabase,authenticated,requirePin,hashNewPin,validPhone,respondError} from './_shared.js';
const bad=(message,status=400)=>{throw Object.assign(new Error(message),{status});};
const text=(v,n)=>String(v??'').slice(0,n);
const TYPES=new Set(['add','undo','redeem']);
async function snapshot(db) {
  const [settings,members,events]=await Promise.all([
    db.query('SELECT shop_name,shop_addr,stamps_needed FROM loyalty_settings WHERE id=1'),
    db.query('SELECT phone,stamps FROM loyalty_members ORDER BY created_at DESC'),
    db.query('SELECT phone,action,created_at,code,reason FROM loyalty_events ORDER BY id DESC')
  ]);
  const s=settings.rows[0]||{};
  const users={};for(const m of members.rows)users[m.phone]={phone:m.phone,stamps:m.stamps,history:[]};
  for(const e of events.rows)if(users[e.phone])users[e.phone].history.push({type:e.action,ts:new Date(e.created_at).getTime(),...(e.code?{code:e.code}:{}),...(e.reason?{reason:e.reason}:{})});
  return {version:2,settings:{shopName:s.shop_name||'',shopAddr:s.shop_addr||'',stampsNeeded:s.stamps_needed||10},users};
}
async function mutate(client,body) {
  const action=String(body?.action||'');
  if(action==='verifyPin') {await requirePin(body.pin,client);return {ok:true};}
  if(action==='lookup') {
    if(!validPhone(body.phone))bad('Invalid Malaysian phone number');
    await client.query('INSERT INTO loyalty_members (phone) VALUES ($1) ON CONFLICT DO NOTHING',[body.phone]);
    return {ok:true};
  }
  if(action==='add'||action==='redeem'||action==='undo') {
    if(!validPhone(body.phone))bad('Invalid Malaysian phone number');
    const row=(await client.query('SELECT phone,stamps FROM loyalty_members WHERE phone=$1 FOR UPDATE',[body.phone])).rows[0];
    if(!row)bad('Member not found',404);
    if(action==='add') {
      if(row.stamps>=10000000)bad('Stamp limit reached');
      await client.query('UPDATE loyalty_members SET stamps=stamps+1 WHERE phone=$1',[body.phone]);
      await client.query("INSERT INTO loyalty_events(phone,action) VALUES ($1,'add')",[body.phone]);
      return {ok:true};
    }
    if(action==='redeem') {
      const need=(await client.query('SELECT stamps_needed FROM loyalty_settings WHERE id=1')).rows[0].stamps_needed;
      if(row.stamps<need)bad('Insufficient stamps');
      const code=crypto.randomBytes(5).toString('hex').toUpperCase();
      await client.query('UPDATE loyalty_members SET stamps=stamps-$2 WHERE phone=$1',[body.phone,need]);
      await client.query("INSERT INTO loyalty_events(phone,action,code) VALUES ($1,'redeem',$2)",[body.phone,code]);
      return {ok:true,code};
    }
    await requirePin(body.pin,client);
    const reason=text(body.reason,200).trim();if(!reason)bad('Undo reason is required');
    if(row.stamps===0)bad('No stamps available to undo');
    const rows=(await client.query('SELECT action FROM loyalty_events WHERE phone=$1 ORDER BY id DESC',[body.phone])).rows;
    let unmatched=0;
    for(const e of rows) {if(e.action==='redeem')break;if(e.action==='undo')unmatched++;else if(e.action==='add'){if(unmatched)unmatched--;else {unmatched=-1;break;}}}
    if(unmatched!==-1)bad('No unredeemed stamp can be undone');
    await client.query('UPDATE loyalty_members SET stamps=stamps-1 WHERE phone=$1',[body.phone]);
    await client.query("INSERT INTO loyalty_events(phone,action,reason) VALUES ($1,'undo',$2)",[body.phone,reason]);
    return {ok:true};
  }
  if(action==='settings') {
    await requirePin(body.pin,client);
    const need=Number(body.stampsNeeded);if(!Number.isInteger(need)||need<1||need>30)bad('Stamps per reward must be 1–30');
    const shopName=text(body.shopName,80).trim(),shopAddr=text(body.shopAddr,160).trim();
    if(body.newPin) {
      const {salt,hash}=hashNewPin(String(body.newPin));
      await client.query('UPDATE loyalty_settings SET shop_name=$1,shop_addr=$2,stamps_needed=$3,pin_salt=$4,pin_hash=$5 WHERE id=1',[shopName,shopAddr,need,salt,hash]);
    }else await client.query('UPDATE loyalty_settings SET shop_name=$1,shop_addr=$2,stamps_needed=$3 WHERE id=1',[shopName,shopAddr,need]);
    return {ok:true};
  }
  if(action==='reset') {
    await requirePin(body.pin,client);
    await client.query('TRUNCATE loyalty_events,loyalty_members RESTART IDENTITY');
    return {ok:true};
  }
  if(action==='import') {
    await requirePin(body.pin,client);
    const backup=body.backup;
    if(!backup||typeof backup!=='object'||!backup.users||typeof backup.users!=='object'||Array.isArray(backup.users))bad('Invalid backup');
    const members=[],events=[];
    const entries=Object.entries(backup.users);if(entries.length>10000)bad('Backup has too many members');
    for(const [phone,u]of entries) {
      if(!validPhone(phone)||!u||!Number.isInteger(u.stamps)||u.stamps<0||u.stamps>10000000)bad('Invalid member data');
      members.push({phone,stamps:u.stamps});
      if(!Array.isArray(u.history)||u.history.length>10000)bad('Invalid activity history');
      for(const e of u.history){if(!TYPES.has(e.type)||!Number.isFinite(e.ts)||e.ts<1)bad('Invalid history entry');events.push({phone,action:e.type,ts:e.ts,code:text(e.code||'',40),reason:text(e.reason||'',200)});}
    }
    if(events.length>100000)bad('Backup has too many events');
    const settings=backup.settings||{},need=Number(settings.stampsNeeded||10);
    if(!Number.isInteger(need)||need<1||need>30)bad('Invalid reward threshold');
    await client.query('TRUNCATE loyalty_events,loyalty_members RESTART IDENTITY');
    if(members.length)await client.query(`INSERT INTO loyalty_members(phone,stamps) SELECT phone,stamps FROM jsonb_to_recordset($1::jsonb) AS t(phone text,stamps integer)`,[JSON.stringify(members)]);
    if(events.length)await client.query(`INSERT INTO loyalty_events(phone,action,created_at,code,reason) SELECT phone,action,to_timestamp(ts/1000.0),NULLIF(code,''),NULLIF(reason,'') FROM jsonb_to_recordset($1::jsonb) AS t(phone text,action text,ts double precision,code text,reason text) ORDER BY ts ASC`,[JSON.stringify(events)]);
    await client.query('UPDATE loyalty_settings SET shop_name=$1,shop_addr=$2,stamps_needed=$3 WHERE id=1',[text(settings.shopName,80),text(settings.shopAddr,160),need]);
    return {ok:true,imported:members.length};
  }
  bad('Unknown action');
}
export default async function handler(req,res) {
  if(!method(req,res,['GET','POST']))return;
  if(!authenticated(req))return json(res,401,{error:'Store session expired. Sign in again.'});
  if(req.method==='POST'&&!sameOrigin(req))return json(res,403,{error:'Invalid request origin'});
  try {
    await setupDatabase();const pool=getPool();
    if(req.method==='GET')return json(res,200,await snapshot(pool));
    if(JSON.stringify(req.body||{}).length>5*1024*1024) return json(res,413,{error:'Request too large'});
    const client=await pool.connect();
    try {await client.query('BEGIN');const result=await mutate(client,req.body);await client.query('COMMIT');return json(res,200,result);}
    catch(error){await client.query('ROLLBACK');throw error;}finally{client.release();}
  }catch(error){return respondError(res,error);}
}
