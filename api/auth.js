import {configured, json, method, sameOrigin, getPool, setupDatabase, createSession, clearSession, authenticated, accessMatches, fingerprint, respondError} from './_shared.js';
export default async function handler(req,res) {
  if (!method(req,res,['GET','POST','DELETE'])) return;
  try {
    if (req.method==='GET') return json(res,200,{configured,authenticated:authenticated(req)});
    if (!sameOrigin(req)) return json(res,403,{error:'Invalid request origin'});
    if (req.method==='DELETE') {clearSession(res);return json(res,200,{ok:true});}
    if (!configured) return json(res,503,{error:'Cloud database not configured',configured:false});
    await setupDatabase();
    const db=getPool(), id=fingerprint(req);
    const block=(await db.query(`SELECT attempts FROM loyalty_login_attempts WHERE fingerprint=$1 AND window_start > now() - interval '15 minutes'`,[id])).rows[0];
    if (block?.attempts >= 10) return json(res,429,{error:'Too many attempts. Try again in 15 minutes.'});
    if (!accessMatches(req.body?.accessKey)) {
      await db.query(`INSERT INTO loyalty_login_attempts (fingerprint,attempts,window_start) VALUES ($1,1,now()) ON CONFLICT(fingerprint) DO UPDATE SET attempts=CASE WHEN loyalty_login_attempts.window_start < now() - interval '15 minutes' THEN 1 ELSE loyalty_login_attempts.attempts+1 END,window_start=CASE WHEN loyalty_login_attempts.window_start < now() - interval '15 minutes' THEN now() ELSE loyalty_login_attempts.window_start END`,[id]);
      return json(res,401,{error:'Incorrect store access key'});
    }
    await db.query('DELETE FROM loyalty_login_attempts WHERE fingerprint=$1',[id]);
    createSession(res);
    return json(res,200,{ok:true});
  } catch(error) { return respondError(res,error); }
}
