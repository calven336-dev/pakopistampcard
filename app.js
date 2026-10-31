'use strict';
const translations = {
  en: {
    brandSub:'Digital loyalty console', admin:'Admin settings', eyebrow:'YOUR LOYALTY PROGRAM', heroTitle:'Every cup brings a reward.', heroText:'A simpler way to reward returning customers — no plastic cards needed.',
    stepOne:'STEP 01 · MEMBER LOOKUP', lookupTitle:'Find a member', phoneLabel:'Customer phone number', findMember:'Find / create', lookupHint:'New numbers are saved securely to the shared cloud database.',
    stepTwo:'STEP 02 · MEMBER CARD', memberTitle:'Member rewards', switchMember:'Switch member ↗', loyaltyCard:'LOYALTY CARD', freeCups:'Free drinks', readyToClaim:'Ready to redeem', availableStamps:'Available stamps', yourProgress:'YOUR PROGRESS', thanks:'THANKS FOR YOUR SUPPORT ✦',
    addStamp:'Add 1 stamp', redeemDrink:'Redeem free drink', undoStamp:'↶ Undo last stamp (PIN required)', management:'MANAGEMENT', adminTitle:'Store dashboard', closeAdmin:'Close admin ✕',
    totalMembers:'Total members', allStamps:'Active stamps', totalRedeemed:'Drinks redeemed', settingsTitle:'Store settings', shopName:'Store name', stampsRequired:'Stamps per reward', shopAddress:'Store address (optional)', staffPin:'Staff PIN (4 digits)', saveSettings:'Save settings', activityTitle:'Activity log',
    filterPhone:'Phone filter', filterAction:'Action', allActions:'All actions', stampAdded:'Stamp added', redeemed:'Redeemed', stampUndone:'Stamp undone', startDate:'Start date', endDate:'End date', today:'Today', thisWeek:'This week', thisMonth:'This month', allTime:'All time', logPhoneCol:'Phone', logActionCol:'Action', logDateCol:'Date / time', logDetailCol:'Details', exportCSV:'↓ Export filtered CSV',
    dataTools:'Data and backups', localNotice:'Member and stamp records are synced to the cloud. Use JSON backup to migrate previous device-only records.', exportBackup:'↓ Download JSON backup', importBackup:'↑ Restore JSON backup', resetAll:'Reset all data', footerLine:'Built for everyday loyalty.', deviceOnly:'Cloud database', install:'Install app ↓',
    invalidPhone:'Enter a valid Malaysian mobile number (e.g. 01123456789).', memberReady:'Member ready', remaining:'{n} more stamp(s) until the next free drink.', claimReady:'{n} free drink(s) ready to redeem.', saved:'Settings saved', saveFailed:'Browser storage unavailable. Changes may not persist.',
    nextTitle:'Stamp added!', nextQuestion:'Would you like to serve the next customer?', continueMember:'Stay with member', nextMember:'Next customer',
    pinTitle:'Staff PIN required', pinDesc:'Enter the 4-digit store PIN to continue.', pinPlaceholder:'4-digit PIN', cancel:'Cancel', confirm:'Confirm', wrongPin:'Incorrect PIN',
    redeemTitle:'Redeem one free drink?', redeemQuestion:'This will deduct {n} stamps from {p}.', redeemConfirm:'Redeem drink', receiptTitle:'Redemption successful!', receiptDetail:'Code: {c}. You can print an 80 mm receipt.', print:'Print receipt', done:'Done', undoTitle:'Undo last stamp?', undoQuestion:'A reason is required for the audit log.', reason:'Reason', reasonPlaceholder:'e.g. Duplicate entry', undoConfirm:'Undo stamp', noUndo:'No unredeemed stamp can be undone.', missingReason:'Please provide a reason.',
    resetTitle:'Erase all store data?', resetQuestion:'This permanently deletes all members and activity stored in this browser. Download a backup first.', resetConfirm:'Erase everything', resetDone:'Local data reset', exportDone:'Backup downloaded', importTitle:'Restore backup?', importQuestion:'Restoring a backup replaces all current browser records. This cannot be undone.', importConfirm:'Replace records', importDone:'Backup restored', importInvalid:'Invalid or unsupported backup.', importTooLarge:'Backup must be smaller than 5 MB.',
    noLogs:'No activity matches these filters.', storageWarning:'Local browser storage is blocked or full.', pinInvalid:'Enter exactly 4 PIN digits.', stampsInvalid:'Stamps per reward must be 1–30.', dateInvalid:'Start date cannot be after end date.', receiptPhone:'Phone', receiptCode:'Code', receiptThanks:'Thank you! Please enjoy your reward.', anonymousShop:'YOUR CAFE', rewardCount:'{n} reward(s) available',
      padReady:'NUMPAD READY · ENTER PHONE NUMBER',padClear:'CLEAR',padHint:'Tap numbers above or type using your keyboard.',
  installUnsupported:'Use your browser menu to install the app.', csvDone:'CSV downloaded', logReset:'All data reset', close:'Close'
  },
  zh: {
    brandSub:'电子集章管理平台', admin:'后台设置', eyebrow:'您的会员奖励计划', heroTitle:'每一杯，都离奖励更近。', heroText:'让回头客集章更简单，不必再携带实体会员卡。',
    stepOne:'第一步 · 查找会员', lookupTitle:'查找会员', phoneLabel:'顾客手机号码', findMember:'查找 / 创建', lookupHint:'新手机号码将直接保存至云端会员数据库。',
    stepTwo:'第二步 · 会员集章卡', memberTitle:'会员奖励', switchMember:'切换会员 ↗', loyaltyCard:'电子会员卡', freeCups:'免费饮料', readyToClaim:'可立即兑换', availableStamps:'现有印章', yourProgress:'集章进度', thanks:'感谢您的支持 ✦',
    addStamp:'增加 1 枚印章', redeemDrink:'兑换免费饮料', undoStamp:'↶ 撤销最近印章（需 PIN）', management:'后台管理', adminTitle:'店铺管理中心', closeAdmin:'关闭后台 ✕',
    totalMembers:'会员总数', allStamps:'有效印章', totalRedeemed:'已兑换饮料', settingsTitle:'店铺设置', shopName:'店铺名称', stampsRequired:'兑换所需印章数', shopAddress:'店铺地址（可选）', staffPin:'员工 PIN（4位数字）', saveSettings:'保存设置', activityTitle:'操作日志',
    filterPhone:'手机号筛选', filterAction:'操作类型', allActions:'全部操作', stampAdded:'增加印章', redeemed:'兑换饮料', stampUndone:'撤销印章', startDate:'开始日期', endDate:'结束日期', today:'今天', thisWeek:'本周', thisMonth:'本月', allTime:'所有日期', logPhoneCol:'手机号', logActionCol:'操作', logDateCol:'日期与时间', logDetailCol:'详情', exportCSV:'↓ 导出筛选 CSV',
    dataTools:'数据与备份', localNotice:'所有会员与集章记录实时储存到云端。您可以导入旧设备的 JSON 备份。', exportBackup:'↓ 下载 JSON 备份', importBackup:'↑ 导入 JSON 备份', resetAll:'清空全部数据', footerLine:'让忠诚奖励更简单。', deviceOnly:'云端数据库', install:'安装应用 ↓',
    invalidPhone:'请输入有效的马来西亚手机号码，例如 01123456789。', memberReady:'会员记录已打开', remaining:'距离下次兑换还差 {n} 枚印章。', claimReady:'目前有 {n} 杯免费饮料可兑换。', saved:'设置已保存', saveFailed:'浏览器储存不可用，修改可能无法保留。',
    nextTitle:'印章已增加！', nextQuestion:'是否为下一位顾客服务？', continueMember:'继续当前顾客', nextMember:'下一位顾客',
    pinTitle:'需要员工 PIN', pinDesc:'请输入店铺 4 位员工 PIN 以继续。', pinPlaceholder:'4位 PIN', cancel:'取消', confirm:'确定', wrongPin:'PIN 错误',
    redeemTitle:'确定兑换一杯免费饮料？', redeemQuestion:'这将从 {p} 扣除 {n} 枚印章。', redeemConfirm:'确认兑换', receiptTitle:'兑换成功！', receiptDetail:'兑换编号：{c}。可打印 80mm 小票。', print:'打印小票', done:'完成', undoTitle:'撤销最近印章？', undoQuestion:'必须填写原因以便操作记录追踪。', reason:'撤销原因', reasonPlaceholder:'例如：重复输入', undoConfirm:'撤销印章', noUndo:'没有可撤销的未兑换印章。', missingReason:'请填写撤销原因。',
    resetTitle:'清空本店全部数据？', resetQuestion:'此操作会删除当前浏览器的所有会员及日志，且无法恢复。请先下载备份。', resetConfirm:'确定清空', resetDone:'本地数据已清空', exportDone:'备份已下载', importTitle:'恢复备份？', importQuestion:'导入备份将取代当前浏览器的全部记录，无法撤销。', importConfirm:'取代记录', importDone:'备份已恢复', importInvalid:'备份格式无效或不受支持。', importTooLarge:'备份文件不得超过 5MB。',
    noLogs:'没有符合筛选条件的记录。', storageWarning:'浏览器储存已满或被禁用。', pinInvalid:'PIN 必须是 4 位数字。', stampsInvalid:'兑换门槛必须介于 1 至 30 枚印章。', dateInvalid:'开始日期不可迟于结束日期。', receiptPhone:'手机号码', receiptCode:'兑换码', receiptThanks:'谢谢支持，请享用您的免费饮料。', anonymousShop:'您的咖啡店', rewardCount:'{n} 杯可兑换',
      padReady:'数字键盘已就绪 · 输入手机号码',padClear:'清除',padHint:'点击上方数字键，或使用键盘输入。',
  installUnsupported:'请在浏览器菜单中选择安装应用。', csvDone:'CSV 已下载', logReset:'全部数据已清空', close:'关闭'
  },
  ms: {
    brandSub:'Konsol kesetiaan digital', admin:'Tetapan admin', eyebrow:'PROGRAM KESETIAAN ANDA', heroTitle:'Setiap cawan, makin dekat dengan ganjaran.', heroText:'Ganjar pelanggan setia dengan mudah, tanpa kad fizikal.',
    stepOne:'LANGKAH 01 · CARI AHLI', lookupTitle:'Cari ahli', phoneLabel:'Nombor telefon pelanggan', findMember:'Cari / daftar', lookupHint:'Nombor baharu disimpan terus dalam pangkalan data awan.',
    stepTwo:'LANGKAH 02 · KAD AHLI', memberTitle:'Ganjaran ahli', switchMember:'Tukar ahli ↗', loyaltyCard:'KAD KESETIAAN', freeCups:'Minuman percuma', readyToClaim:'Sedia ditebus', availableStamps:'Cop terkumpul', yourProgress:'KEMAJUAN ANDA', thanks:'TERIMA KASIH ATAS SOKONGAN ✦',
    addStamp:'Tambah 1 cop', redeemDrink:'Tebus minuman percuma', undoStamp:'↶ Batalkan cop terakhir (perlu PIN)', management:'PENGURUSAN', adminTitle:'Papan pemuka kedai', closeAdmin:'Tutup admin ✕',
    totalMembers:'Jumlah ahli', allStamps:'Cop aktif', totalRedeemed:'Minuman ditebus', settingsTitle:'Tetapan kedai', shopName:'Nama kedai', stampsRequired:'Cop bagi setiap ganjaran', shopAddress:'Alamat kedai (pilihan)', staffPin:'PIN pekerja (4 digit)', saveSettings:'Simpan tetapan', activityTitle:'Log aktiviti',
    filterPhone:'Tapis telefon', filterAction:'Tindakan', allActions:'Semua tindakan', stampAdded:'Cop ditambah', redeemed:'Ditebus', stampUndone:'Cop dibatalkan', startDate:'Tarikh mula', endDate:'Tarikh akhir', today:'Hari ini', thisWeek:'Minggu ini', thisMonth:'Bulan ini', allTime:'Sepanjang masa', logPhoneCol:'Telefon', logActionCol:'Tindakan', logDateCol:'Tarikh / masa', logDetailCol:'Butiran', exportCSV:'↓ Eksport CSV ditapis',
    dataTools:'Data dan sandaran', localNotice:'Rekod ahli dan cop disimpan dalam awan. Import sandaran JSON daripada peranti lama jika perlu.', exportBackup:'↓ Muat turun sandaran JSON', importBackup:'↑ Pulihkan sandaran JSON', resetAll:'Padam semua data', footerLine:'Ganjaran setia setiap hari.', deviceOnly:'Pangkalan data awan', install:'Pasang aplikasi ↓',
    invalidPhone:'Masukkan nombor bimbit Malaysia yang sah, contohnya 01123456789.', memberReady:'Rekod ahli dibuka', remaining:'Perlu {n} cop lagi untuk minuman percuma seterusnya.', claimReady:'{n} minuman percuma sedia ditebus.', saved:'Tetapan disimpan', saveFailed:'Storan pelayar tidak tersedia. Perubahan mungkin tidak kekal.',
    nextTitle:'Cop ditambah!', nextQuestion:'Teruskan dengan pelanggan seterusnya?', continueMember:'Kekal dengan ahli ini', nextMember:'Pelanggan seterusnya',
    pinTitle:'PIN pekerja diperlukan', pinDesc:'Masukkan PIN kedai 4 digit untuk teruskan.', pinPlaceholder:'PIN 4 digit', cancel:'Batal', confirm:'Sahkan', wrongPin:'PIN tidak betul',
    redeemTitle:'Tebus satu minuman percuma?', redeemQuestion:'Sebanyak {n} cop akan ditolak daripada {p}.', redeemConfirm:'Tebus minuman', receiptTitle:'Penebusan berjaya!', receiptDetail:'Kod: {c}. Anda boleh cetak resit 80mm.', print:'Cetak resit', done:'Selesai', undoTitle:'Batalkan cop terakhir?', undoQuestion:'Sebab diperlukan untuk log audit.', reason:'Sebab', reasonPlaceholder:'Contoh: Entri berganda', undoConfirm:'Batalkan cop', noUndo:'Tiada cop belum tebus yang boleh dibatalkan.', missingReason:'Sila nyatakan sebab.',
    resetTitle:'Padam semua data kedai?', resetQuestion:'Semua ahli dan aktiviti dalam pelayar ini akan dipadam secara kekal. Muat turun sandaran dahulu.', resetConfirm:'Padam semuanya', resetDone:'Data setempat dipadam', exportDone:'Sandaran dimuat turun', importTitle:'Pulihkan sandaran?', importQuestion:'Pemulihan akan menggantikan semua rekod semasa dan tidak boleh dibatalkan.', importConfirm:'Ganti rekod', importDone:'Sandaran dipulihkan', importInvalid:'Sandaran tidak sah atau tidak disokong.', importTooLarge:'Fail sandaran mesti kurang daripada 5 MB.',
    noLogs:'Tiada aktiviti sepadan dengan penapis.', storageWarning:'Storan pelayar disekat atau penuh.', pinInvalid:'Masukkan tepat 4 digit PIN.', stampsInvalid:'Cop bagi ganjaran mesti 1–30.', dateInvalid:'Tarikh mula tidak boleh selepas tarikh akhir.', receiptPhone:'Telefon', receiptCode:'Kod', receiptThanks:'Terima kasih! Nikmati ganjaran anda.', anonymousShop:'KAFE ANDA', rewardCount:'{n} ganjaran tersedia',
      padReady:'PAD NOMBOR SEDIA · MASUKKAN TELEFON',padClear:'PADAM',padHint:'Tekan nombor di atas atau gunakan papan kekunci.',
  installUnsupported:'Gunakan menu pelayar untuk memasang aplikasi.', csvDone:'CSV dimuat turun', logReset:'Semua data dipadam', close:'Tutup'
  }
};

const STORAGE_KEY='stamp_club_v2', LEGACY_KEY='stamp_app_v1';
const byId=id=>document.getElementById(id);
const safeText=v=>typeof v==='string'?v:'';
const defaults=()=>({version:2,settings:{pin:'8888',stampsNeeded:10,lang:'en',shopName:'',shopAddr:''},users:{}});
function normalizePhone(value){
  let n=String(value??'').replace(/[^\d]/g,'');
  if(/^01\d{8,9}$/.test(n)) n='6'+n;
  if(/^601\d{8,9}$/.test(n)) return n;
  return null;
}
function normalizeStore(data){
  if(!data||typeof data!=='object'||Array.isArray(data)||!data.settings||typeof data.settings!=='object'||!data.users||typeof data.users!=='object'||Array.isArray(data.users))throw new Error('bad data');
  const fresh=defaults();const s=data.settings;
  fresh.settings.lang=['en','zh','ms'].includes(s.lang)?s.lang:'en';
  fresh.settings.shopName=safeText(s.shopName).slice(0,80);
  fresh.settings.shopAddr=safeText(s.shopAddr).slice(0,160);
  fresh.settings.pin=/^\d{4}$/.test(s.pin)?s.pin:'8888';
  fresh.settings.stampsNeeded=Number.isInteger(Number(s.stampsNeeded))?Math.max(1,Math.min(30,Number(s.stampsNeeded))):10;
  const entries=Object.entries(data.users);
  if(entries.length>100000)throw new Error('too many users');
  for(const [key,raw] of entries){
    const p=normalizePhone(key);
    if(!p||!raw||typeof raw!=='object'||Array.isArray(raw))continue;
    const stamps=Number(raw.stamps);
    const history=Array.isArray(raw.history)?raw.history.slice(0,10000).filter(h=>h&&typeof h==='object'&&['add','undo','redeem'].includes(h.type)).map(h=>({type:h.type,ts:Number.isFinite(Number(h.ts))&&Number(h.ts)>0?Number(h.ts):Date.now(),reason:safeText(h.reason).slice(0,200),code:safeText(h.code).slice(0,40)})):[];
    fresh.users[p]={phone:p,stamps:Number.isSafeInteger(stamps)?Math.max(0,Math.min(stamps,10000000)):0,history};
  }
  return fresh;
}
let store=defaults();let currentPhone=null;let modalResolve=null;let toastTimer=null;let deferredInstall=null;
let cloudReady=false,cloudBusy=false,staffPinForAdmin=null,refreshing=false;
try{const lang=localStorage.getItem('stamp_club_lang');if(['en','zh','ms'].includes(lang))store.settings.lang=lang;}catch{}
async function api(path,options={}){
  const response=await fetch(path,{credentials:'same-origin',cache:'no-store',...options});
  let data;try{data=await response.json();}catch{throw new Error('Invalid cloud response');}
  if(!response.ok)throw new Error(data.error||'Cloud request failed');
  return data;
}
async function refreshCloud(){
  if(!cloudReady||refreshing||cloudBusy)return;
  refreshing=true;
  try{
    const data=await api('/api/state');const lang=store.settings.lang;
    store=normalizeStore({...data,settings:{...data.settings,lang}});
    if(currentPhone){if(store.users[currentPhone])renderMember();else resetToLookup();}
    if(!byId('adminPanel').hidden)renderAdmin();
    byId('cloudStatus').textContent='● Cloud connected';
  }catch(error){byId('cloudStatus').textContent='○ Cloud unavailable';notify(error.message,true);}
  finally{refreshing=false;}
}
async function mutateCloud(action,payload={}){
  if(!cloudReady){notify('Sign in to the cloud store first.',true);return null;}
  if(cloudBusy)return null;
  cloudBusy=true;
  try{
    const response=await api('/api/state',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action,...payload})});
    return response;
  }catch(error){notify(error.message,true);return null;}
  finally{cloudBusy=false;await refreshCloud();}
}
async function initializeCloud(){
  try{
    let status=await api('/api/auth');
    if(!status.configured){byId('cloudStatus').textContent='○ Setup required';
      await modal({title:'Cloud setup required',description:'Connect Neon PostgreSQL to Vercel. Set DATABASE_URL and STORE_ACCESS_KEY (12+ characters), then redeploy.',icon:'☁',actions:[{text:'Retry connection',value:'retry',className:'btn-primary'}]});
      return initializeCloud();
    }
    if(!status.authenticated){
      const key=await modal({title:'Store cloud sign-in',description:'Enter your private store access key. All members and stamps are shared across authorized devices.',icon:'☁',input:{label:'Store access key',type:'password',maxLength:128,placeholder:'Enter store access key'},actions:[{text:'Sign in',value:true,className:'btn-primary'}]});
      if(!key)return initializeCloud();
      try{await api('/api/auth',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({accessKey:key})});}catch(error){notify(error.message,true);return initializeCloud();}
    }
    cloudReady=true;byId('cloudStatus').textContent='● Cloud connected';
    await refreshCloud();focusPhone();
    setInterval(()=>{if(document.visibilityState==='visible')refreshCloud();},12000);
    document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')refreshCloud();});
  }catch(error){byId('cloudStatus').textContent='○ Cloud unavailable';
    await modal({title:'Cloud connection unavailable',description:error.message,icon:'!',actions:[{text:'Try again',value:'retry',className:'btn-primary'}]});return initializeCloud();
  }
}
function tr(key,vars={}){const template=translations[store.settings.lang]?.[key]||translations.en[key]||key;return template.replace(/\{(\w+)\}/g,(_,k)=>String(vars[k]??''));}
function notify(message,isError=false){const el=byId('toast');el.textContent=message;el.classList.toggle('error',!!isError);el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),3500);}
function persist(){try{localStorage.setItem('stamp_club_lang',store.settings.lang);return true;}catch{return false;}}
function fmtDate(ts){const l=store.settings.lang==='zh'?'zh-MY':store.settings.lang==='ms'?'ms-MY':'en-MY';return new Date(ts).toLocaleString(l,{year:'numeric',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});}
function applyLanguage(){document.documentElement.lang=store.settings.lang;document.title=tr('lookupTitle')+' · STAMP CLUB';document.querySelectorAll('[data-i18n]').forEach(e=>{e.textContent=tr(e.dataset.i18n)});document.querySelectorAll('[data-i18n-title]').forEach(e=>{e.title=tr(e.dataset.i18nTitle);e.setAttribute('aria-label',tr(e.dataset.i18nTitle))});document.querySelectorAll('[data-lang]').forEach(b=>{const active=b.dataset.lang===store.settings.lang;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});if(currentPhone)renderMember();if(!byId('adminPanel').hidden)renderAdmin();}
function getMember(p){if(!store.users[p])store.users[p]={phone:p,stamps:0,history:[]};return store.users[p];}
function renderMember(){const u=store.users[currentPhone];if(!u)return;const need=store.settings.stampsNeeded,have=u.stamps,rewards=Math.floor(have/need),mod=have%need,progress=have&&mod===0?need:mod;
  byId('memberPanel').hidden=false;byId('memberPhone').textContent=u.phone;byId('rewardCount').textContent=rewards;byId('stampCount').textContent=have;byId('shopLabel').textContent=(store.settings.shopName||tr('anonymousShop')).toUpperCase();byId('progressCaption').textContent=progress+' / '+need;
  byId('progressFill').style.width=(progress/need*100)+'%';const track=byId('progressTrack');track.setAttribute('aria-valuemax',String(need));track.setAttribute('aria-valuenow',String(progress));
  byId('remainingHint').textContent=rewards>0?tr('claimReady',{n:rewards}):tr('remaining',{n:need-mod});byId('redeem').disabled=rewards===0;
  const grid=byId('stampGrid');grid.replaceChildren();for(let i=0;i<need;i++){const element=document.createElement('span');element.className='stamp-dot'+(i<progress?' filled':'');element.textContent=i<progress?'★':String(i+1);element.setAttribute('aria-label',(i+1)+' / '+need);grid.append(element);}
}
function showMember(p){currentPhone=p;byId('phone').value=p;byId('adminPanel').hidden=true;renderMember();byId('memberPanel').scrollIntoView({behavior:'smooth',block:'start'});}
function modal(options){return new Promise(resolve=>{
  if(modalResolve)modalResolve(null);modalResolve=resolve;
  byId('modalHeading').textContent=options.title;byId('modalDescription').textContent=options.description||'';byId('modalIcon').textContent=options.icon||'★';
  const wrap=byId('modalInputWrap'),input=byId('modalInput');wrap.hidden=!options.input;input.value='';
  if(options.input){input.type=options.input.type||'text';input.inputMode=options.input.inputMode||'text';input.maxLength=options.input.maxLength||200;input.placeholder=options.input.placeholder||'';byId('modalInputLabel').textContent=options.input.label||'';}
  const container=byId('modalActions');container.replaceChildren();for(const action of options.actions||[]){const b=document.createElement('button');b.type='button';b.textContent=action.text;b.className='btn '+(action.className||'btn-outline');b.onclick=()=>finishModal(action.value===undefined?null:action.value===true?(options.input?input.value.trim():true):action.value);container.append(b)}
  byId('modal').hidden=false;setTimeout(()=>{if(options.input)input.focus();else container.lastElementChild?.focus()},0);
  input.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();const primary=container.lastElementChild;primary?.click()}};
 });}
function finishModal(value){byId('modal').hidden=true;const done=modalResolve;modalResolve=null;if(done)done(value);}
async function confirmAction(title,description,confirmText,icon='✦'){return await modal({title,description,icon,actions:[{text:tr('cancel'),value:false},{text:confirmText,value:true,className:'btn-primary'}]})===true;}
async function verifyPIN(){const input=await modal({title:tr('pinTitle'),description:tr('pinDesc'),icon:'♢',input:{label:tr('staffPin'),type:'password',inputMode:'numeric',maxLength:4,placeholder:tr('pinPlaceholder')},actions:[{text:tr('cancel'),value:null},{text:tr('confirm'),value:true,className:'btn-primary'}]});
  if(input===null)return false;
  const verified=await mutateCloud('verifyPin',{pin:input});
  if(!verified){notify(tr('wrongPin'),true);return false;}
  staffPinForAdmin=input;return true;
}
async function nextCustomerPrompt(){const selected=await modal({title:tr('nextTitle'),description:tr('nextQuestion'),icon:'★',actions:[{text:tr('continueMember'),value:'stay'},{text:tr('nextMember'),value:'next',className:'btn-primary'}]});if(selected==='next')resetToLookup();}
function focusPhone(){const input=byId('phone');input.focus({preventScroll:true});input.setSelectionRange?.(input.value.length,input.value.length);}
function resetToLookup(){currentPhone=null;byId('memberPanel').hidden=true;byId('phone').value='';byId('lookupCard').scrollIntoView({behavior:'smooth',block:'start'});focusPhone();}
function idCode(){if(globalThis.crypto?.getRandomValues){const bytes=new Uint8Array(5);crypto.getRandomValues(bytes);return Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('').toUpperCase();}return Math.random().toString(36).slice(2,12).toUpperCase();}
function logEvent(u,type,extra={}){u.history.unshift({type,ts:Date.now(),...extra});}
async function addStamp(){if(!currentPhone)return;
  const saved=await mutateCloud('add',{phone:currentPhone});if(saved)await nextCustomerPrompt();}
async function redeem(){if(!currentPhone)return;
  const u=store.users[currentPhone],need=store.settings.stampsNeeded;if(!u||u.stamps<need)return;
  const yes=await confirmAction(tr('redeemTitle'),tr('redeemQuestion',{n:need,p:u.phone}),tr('redeemConfirm'));if(!yes)return;
  const saved=await mutateCloud('redeem',{phone:currentPhone});if(!saved)return;
  const code=saved.code;prepareReceipt(u.phone,code);
  const choice=await modal({title:tr('receiptTitle'),description:tr('receiptDetail',{c:code}),icon:'✓',actions:[{text:tr('done'),value:'done'},{text:tr('print'),value:'print',className:'btn-primary'}]});if(choice==='print')window.print();
}
function findUndoableAdd(u){let undone=0;for(const e of u.history){if(e.type==='redeem')break;if(e.type==='undo')undone++;else if(e.type==='add'){if(undone>0)undone--;else return e;}}return null;}
async function undoStamp(){if(!currentPhone)return;
  const u=store.users[currentPhone];if(!u||u.stamps<=0||!findUndoableAdd(u)){notify(tr('noUndo'),true);return;}
  if(!await verifyPIN())return;
  const reason=await modal({title:tr('undoTitle'),description:tr('undoQuestion'),icon:'↶',input:{label:tr('reason'),type:'text',maxLength:200,placeholder:tr('reasonPlaceholder')},actions:[{text:tr('cancel'),value:null},{text:tr('undoConfirm'),value:true,className:'btn-primary'}]});if(reason===null)return;
  if(!reason){notify(tr('missingReason'),true);return;}
  await mutateCloud('undo',{phone:currentPhone,reason,pin:staffPinForAdmin});
}
function prepareReceipt(phone,code){byId('printShop').textContent=store.settings.shopName||tr('anonymousShop');byId('printAddress').textContent=store.settings.shopAddr||'';byId('printTitle').textContent=tr('receiptTitle');byId('printTime').textContent=fmtDate(Date.now());byId('receiptPhoneLabel').textContent=tr('receiptPhone');byId('receiptCodeLabel').textContent=tr('receiptCode');byId('printPhone').textContent=phone;byId('printCode').textContent=code;byId('printThanks').textContent=tr('receiptThanks');}
async function openAdmin(){if(!await verifyPIN())return;byId('memberPanel').hidden=true;byId('adminPanel').hidden=false;byId('shopName').value=store.settings.shopName;byId('shopAddress').value=store.settings.shopAddr;byId('need').value=store.settings.stampsNeeded;byId('pin').value='';renderAdmin();byId('adminPanel').scrollIntoView({behavior:'smooth',block:'start'});}
function allEvents(){const result=[];for(const [phone,u]of Object.entries(store.users)){for(const h of u.history){if(!['add','redeem','undo'].includes(h.type))continue;result.push({phone,...h});}}result.sort((a,b)=>b.ts-a.ts);return result;}
let filteredEvents=[];
function renderAdmin(){const members=Object.values(store.users);byId('totalMembers').textContent=members.length;byId('totalStamps').textContent=members.reduce((n,u)=>n+u.stamps,0).toLocaleString();byId('totalRedemptions').textContent=members.reduce((n,u)=>n+u.history.filter(h=>h.type==='redeem').length,0).toLocaleString();
  const q=byId('logPhone').value.replace(/[^\d]/g,''),type=byId('logAction').value,start=byId('startDate').value,end=byId('endDate').value;
  const startTime=start?new Date(start+'T00:00:00').getTime():-Infinity,endTime=end?new Date(end+'T23:59:59.999').getTime():Infinity;
  filteredEvents=allEvents().filter(h=>(!q||h.phone.includes(q))&&(type==='all'||h.type===type)&&h.ts>=startTime&&h.ts<=endTime);
  const tbody=byId('logRows');tbody.replaceChildren();if(!filteredEvents.length){const tr=document.createElement('tr'),td=document.createElement('td');td.colSpan=4;td.textContent=trText('noLogs');tr.append(td);tbody.append(tr);return;}
  // Render the most recent 300 in the table; CSV export still includes all filtered rows.
  for(const h of filteredEvents.slice(0,300)){const row=document.createElement('tr');for(const value of [h.phone,tr(h.type==='add'?'stampAdded':h.type==='redeem'?'redeemed':'stampUndone'),fmtDate(h.ts),h.reason||h.code||'—']){const cell=document.createElement('td');cell.textContent=value;row.append(cell);}tbody.append(row);}
}
function trText(k){return tr(k)}
async function saveSettings(){const need=Number(byId('need').value);if(!Number.isInteger(need)||need<1||need>30){notify(tr('stampsInvalid'),true);return;}
  const newPin=byId('pin').value.trim();if(newPin&&!/^\d{4}$/.test(newPin)){notify(tr('pinInvalid'),true);return;}
  const saved=await mutateCloud('settings',{pin:staffPinForAdmin,newPin,shopName:byId('shopName').value.trim(),shopAddr:byId('shopAddress').value.trim(),stampsNeeded:need});
  if(saved){byId('pin').value='';if(newPin)staffPinForAdmin=newPin;notify(tr('saved'));}
}
function downloadFile(name,content,mime){const url=URL.createObjectURL(new Blob([content],{type:mime}));const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);}
function exportBackup(){const data={...store,settings:{...store.settings}};delete data.settings.pin;downloadFile('stamp-club-backup-'+new Date().toISOString().slice(0,10)+'.json',JSON.stringify(data,null,2),'application/json;charset=utf-8');notify(tr('exportDone'));}
function safeCSV(value){let v=String(value??'');if(/^\s*[=+\-@\t\r]/.test(v))v="'"+v;return '"'+v.replace(/"/g,'""')+'"';}
function exportCSV(){const cols=[tr('logPhoneCol'),tr('logActionCol'),tr('logDateCol'),tr('logDetailCol')];const lines=[cols.map(safeCSV).join(',')];for(const h of filteredEvents)lines.push([h.phone,tr(h.type==='add'?'stampAdded':h.type==='redeem'?'redeemed':'stampUndone'),fmtDate(h.ts),h.reason||h.code||''].map(safeCSV).join(','));downloadFile('stamp-club-logs-'+new Date().toISOString().slice(0,10)+'.csv','\ufeff'+lines.join('\r\n'),'text/csv;charset=utf-8');notify(tr('csvDone'));}
async function importBackup(event){const file=event.target.files?.[0];event.target.value='';if(!file)return;
  if(file.size>5*1024*1024){notify(tr('importTooLarge'),true);return;}
  let parsed;try{parsed=normalizeStore(JSON.parse(await file.text()));}catch{notify(tr('importInvalid'),true);return;}
  if(!await confirmAction(tr('importTitle'),tr('importQuestion'),tr('importConfirm'),'↑'))return;
  if(!staffPinForAdmin&&!await verifyPIN())return;
  const saved=await mutateCloud('import',{backup:parsed,pin:staffPinForAdmin});
  if(saved){currentPhone=null;byId('memberPanel').hidden=true;renderAdmin();notify(tr('importDone'));}
}
async function resetAll(){if(!await confirmAction(tr('resetTitle'),tr('resetQuestion'),tr('resetConfirm'),'!'))return;
  if(!staffPinForAdmin&&!await verifyPIN())return;
  const saved=await mutateCloud('reset',{pin:staffPinForAdmin});
  if(saved){currentPhone=null;byId('memberPanel').hidden=true;byId('adminPanel').hidden=true;resetToLookup();notify(tr('resetDone'));}
}
function setRange(range){const d=new Date(),localISO=x=>[x.getFullYear(),String(x.getMonth()+1).padStart(2,'0'),String(x.getDate()).padStart(2,'0')].join('-');let start='';let end='';if(range!=='all'){end=localISO(d);const s=new Date(d);if(range==='week')s.setDate(d.getDate()-((d.getDay()+6)%7));else if(range==='month')s.setDate(1);start=localISO(s);}byId('startDate').value=start;byId('endDate').value=end;renderAdmin();}
function bind(){byId('lookupForm').addEventListener('submit',async e=>{e.preventDefault();const p=normalizePhone(byId('phone').value);if(!p){notify(tr('invalidPhone'),true);focusPhone();return;}const saved=await mutateCloud('lookup',{phone:p});if(!saved)return;showMember(p);notify(tr('memberReady'));});
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{store.settings.lang=b.dataset.lang;persist();applyLanguage();}));
  document.querySelectorAll('[data-digit]').forEach(b=>b.addEventListener('click',()=>{const input=byId('phone');if(input.value.replace(/\D/g,'').length>=13)return;input.value+=b.dataset.digit;focusPhone();}));
  byId('padBackspace').addEventListener('click',()=>{const input=byId('phone');input.value=input.value.slice(0,-1);focusPhone();});
  byId('padClear').addEventListener('click',()=>{byId('phone').value='';focusPhone();});byId('changeMember').addEventListener('click',resetToLookup);
  byId('headerAdmin').addEventListener('click',openAdmin);byId('closeAdmin').addEventListener('click',()=>{byId('adminPanel').hidden=true;staffPinForAdmin=null;if(currentPhone)renderMember();else byId('lookupCard').scrollIntoView({behavior:'smooth'});});byId('saveSettings').addEventListener('click',saveSettings);
  byId('addStamp').addEventListener('click',addStamp);byId('redeem').addEventListener('click',redeem);byId('undo').addEventListener('click',undoStamp);
  for(const id of ['logPhone','logAction','startDate','endDate'])byId(id).addEventListener(id==='logPhone'?'input':'change',renderAdmin);
  document.querySelectorAll('[data-range]').forEach(b=>b.addEventListener('click',()=>setRange(b.dataset.range)));byId('exportCSV').addEventListener('click',exportCSV);byId('exportBackup').addEventListener('click',exportBackup);byId('importBackup').addEventListener('change',importBackup);byId('resetAll').addEventListener('click',resetAll);
  byId('dismissModal').onclick=()=>finishModal(null);byId('modal').addEventListener('click',e=>{if(e.target===byId('modal'))finishModal(null)});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!byId('modal').hidden)finishModal(null)});
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e;byId('installApp').hidden=false});byId('installApp').addEventListener('click',async()=>{if(deferredInstall){deferredInstall.prompt();await deferredInstall.userChoice;deferredInstall=null;byId('installApp').hidden=true;}else notify(tr('installUnsupported'));});window.addEventListener('appinstalled',()=>byId('installApp').hidden=true);
  applyLanguage();initializeCloud();focusPhone();
  if('serviceWorker'in navigator&&['https:','http:'].includes(location.protocol))window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
}
bind();