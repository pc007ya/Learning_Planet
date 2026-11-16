(function(root){'use strict';
const PREFIX='lp-english-original-candidate-v4:';
const clone=x=>JSON.parse(JSON.stringify(x));
function create({storage,learnerId,catalog,canWrite=()=>true,canRead=canWrite,now=()=>Date.now()}){
 if(typeof learnerId!=='string'||!learnerId.trim()||learnerId.length>160)throw Error('Learner scope required');
 const key=PREFIX+encodeURIComponent(learnerId),units=new Map(catalog.map(u=>[u.id,u]));let failure='',closed=false;
 function allowed(){try{return !closed&&canWrite()===true;}catch(_){return false;}}
 function readable(){try{return !closed&&canRead()===true;}catch(_){return false;}}
 const blank=()=>({schema:1,contentVersion:'r29',learnerId,units:{}});
 function read(){if(!readable()){failure='學習者或頁面已切換，停止舊頁讀寫。';return null;}try{const raw=storage.getItem(key);if(raw===null)return blank();const s=JSON.parse(raw);
  if(!s||s.schema!==1||s.contentVersion!=='r29'||s.learnerId!==learnerId||!s.units||typeof s.units!=='object'||Array.isArray(s.units))throw Error('進度格式或版本不相容');
  for(const [id,u]of Object.entries(s.units)){const lesson=units.get(id);if(!lesson||!u||!Array.isArray(u.attempts)||u.attempts.length>20||!u.active||Array.isArray(u.active)||!Number.isFinite(u.active.started)||u.active.started<0||!u.active.answers||typeof u.active.answers!=='object'||Array.isArray(u.active.answers))throw Error('進度格式不完整');
   if(u.attempts.some(a=>!a||!Number.isFinite(a.completed)||!Number.isInteger(a.correct)||a.correct<0||a.total!==lesson.questions.length||a.correct>a.total))throw Error('完成紀錄無效');if(u.spelling&&(typeof u.spelling!=='object'||Object.entries(u.spelling).some(([i,x])=>(!/^(0|[1-9]\d*)$/.test(i)||Number(i)>=lesson.skillExtension.spellingTargets.length)||!x||!Number.isInteger(x.tries)||x.tries<0||typeof x.correct!=='boolean')))throw Error('拼寫紀錄無效');if(u.speaking&&!['not_assessed','self_reported','needs_practice'].includes(u.speaking))throw Error('口說紀錄無效');
   if(u.active.completed!==undefined&&(!Number.isFinite(u.active.completed)||u.active.completed<=0||Object.keys(u.active.answers).length!==lesson.questions.length))throw Error('完成時間或答案不完整');
   if(u.active.completed!==undefined&&!u.attempts.some(a=>a.completed===u.active.completed&&a.correct===lesson.questions.reduce((n,q,i)=>n+(u.active.answers[i]===q.answer),0)))throw Error('完成紀錄缺少對應回合');
   for(const [i,a]of Object.entries(u.active.answers)){const q=lesson.questions[Number(i)];if(! /^(0|[1-9]\d*)$/.test(i)||!q||!Number.isInteger(a)||a<0||a>=q.options.length)throw Error('答案紀錄無效');}
  }return s;
 }catch(e){failure='進度無法讀取；原紀錄保留，暫停寫入。';return null;}}
 function update(fn){if(!allowed()){failure='目前不可保存：學習者已切換或此分頁沒有寫入鎖。';return false;}const s=read();if(!s)return false;try{fn(s);if(!allowed())return false;storage.setItem(key,JSON.stringify(s));failure='';return true;}catch(e){failure='進度未保存：'+e.message;return false;}}
 function entry(s,id){if(!units.has(id))throw Error('Unknown unit');if(!Object.hasOwn(s.units,id))s.units[id]={active:{started:now(),answers:{}},attempts:[],spelling:{},speaking:'not_assessed'};return s.units[id];}
 function finish(u,id){const qs=units.get(id).questions;if(Object.keys(u.active.answers).length===qs.length&&!u.active.completed){const correct=qs.reduce((n,q,i)=>n+(u.active.answers[i]===q.answer),0);u.active.completed=now()||1;u.attempts.push({completed:u.active.completed,correct,total:qs.length});u.attempts=u.attempts.slice(-20);}}
 return {key,read:()=>{const s=read();return s?clone(s):null;},error:()=>failure,close:()=>{closed=true;},
  answer(id,index,choice){const q=units.get(id)?.questions[index];if(!q||!Number.isInteger(index)||!Number.isInteger(choice)||choice<0||choice>=q.options.length)return false;return update(s=>{const u=entry(s,id);if(!Object.hasOwn(u.active.answers,index))u.active.answers[index]=choice;finish(u,id);});},
  restart(id){return update(s=>{entry(s,id).active={started:now(),answers:{}};});},
  spelling(id,index,correct){const u=units.get(id);if(!u||!Number.isInteger(index)||index<0||index>=u.skillExtension.spellingTargets.length||typeof correct!=='boolean')return false;return update(s=>{const e=entry(s,id);e.spelling ||= {};const old=e.spelling[index]||{tries:0,correct:false};e.spelling[index]={tries:old.tries+1,correct:old.correct||correct};});},
  speaking(id,value){if(!['self_reported','needs_practice'].includes(value))return false;return update(s=>{entry(s,id).speaking=value;});},
  summary(id){const s=read(),u=s?.units[id];return {completed:!!u?.attempts?.length,answered:Object.keys(u?.active?.answers||{}).length,total:units.get(id)?.questions.length||0,best:u?.attempts?.length?Math.max(...u.attempts.map(a=>a.correct)):null,attempts:u?.attempts?.length||0,spellingCorrect:Object.values(u?.spelling||{}).filter(x=>x.correct).length,speaking:u?.speaking||'not_assessed',readable:!!s};}
 };
}
const api={PREFIX,create};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.LPEnglishProgress=api;
})(typeof globalThis!=='undefined'?globalThis:this);
