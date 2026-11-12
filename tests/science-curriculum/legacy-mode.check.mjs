import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseHTML } from 'linkedom';
import { legacyFixture, syntheticContent } from './legacy-fixtures.mjs';
import { openScienceCurriculum } from '../../modules/science-curriculum/launch.mjs';
import { acquireProgressLease } from '../../modules/science-curriculum/session-lock.mjs';
import { PREFIX } from '../../modules/science-curriculum/store.mjs';

const publisherCatalog = JSON.parse(readFileSync(new URL('../../data/science-curriculum/catalog.json',import.meta.url)));
const publisherContent = syntheticContent(publisherCatalog);
const tick = () => new Promise(r => setTimeout(r,5));
function setup() {
  const { window:base }=parseHTML('<html><head></head><body><button id="entry">Entry</button></body></html>');
  const held=new Set(),locks={async request(key,_options,callback){await Promise.resolve();if(held.has(key))return callback(null);held.add(key);try{return await callback({name:key});}finally{held.delete(key);}}};
  const window=new Proxy(base,{get:(target,key)=>key==='navigator'?{locks}:Reflect.get(target,key)});
  globalThis.window=window;globalThis.document=window.document;globalThis.location=new URL('http://localhost/?scienceCandidate=1');
  const stack=[{host:'original'}];let index=0;
  globalThis.history={get state(){return stack[index]},get index(){return index},pushState(s){stack.splice(++index);stack.push(s);},replaceState(s){stack[index]=s;},back(){const target=Math.max(0,index-1);setTimeout(()=>{index=target;window.dispatchEvent(new window.Event('popstate'));},0);}};
  const storage=new Map([['lp-profiles',JSON.stringify({student:{stars:9,dailyMastery:{date:'kept',units:{s1:3}},masteryHistory:{old:['s1']},cleared:['s1'],xp:42}})],['unrelated-key','unchanged']]);
  const writes=[];globalThis.localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>{writes.push(k);storage.set(k,v);}};
  window.HTMLElement.prototype.showModal=function(){this.open=true;};window.HTMLElement.prototype.close=function(){this.open=false;};window.HTMLElement.prototype.focus=function(){Object.defineProperty(document,'activeElement',{configurable:true,value:this});};document.querySelector('#entry').focus();
  window.speechSynthesis={cancel(){},speak(){},getVoices:()=>[]};window.SpeechSynthesisUtterance=function(t){this.text=t;};
  const fixture=legacyFixture(),requests=[];
  globalThis.fetch=async url=>{const path=String(url);requests.push(path);const legacy=path.includes('/legacy/');const value=path.endsWith('catalog.json')?(legacy?fixture.catalog:publisherCatalog):(legacy?fixture.content:publisherContent);return new Response(JSON.stringify(value),{status:200});};
  return {fixture,storage,writes,requests,held,locks,stack};
}
const buttons=()=>[...document.querySelectorAll('button')];
function clickText(text){const b=buttons().find(b=>b.textContent===text);assert.ok(b,text);assert.equal(b.disabled,false);b.click();return b;}
function click(selector){const b=document.querySelector(selector);assert.ok(b,selector);assert.equal(b.disabled,false);b.click();return b;}
function state(env,id='learner'){return JSON.parse(env.storage.get(PREFIX+id));}
function submit(){click('[data-option-index="0"]');click('.sc-submit');}
function finish(){while(document.querySelector('.sc-question')){if(document.querySelector('[data-option-index]:not([disabled])'))submit();click('.sc-next');}}

for (const id of legacyFixture().catalog.units.map(u=>u.id)) test(`legacy direct entry ${id} opens exact original ID, fixed ten questions, no invented semester and no profile writes`,async t=>{
  const env=setup(),formal=env.storage.get('lp-profiles'),unit=env.fixture.catalog.units.find(u=>u.id===id);
  const close=await openScienceCurriculum({curriculum:'legacy',unitId:id,learnerId:'learner'});t.after(close);
  assert.equal(document.querySelector('dialog').dataset.curriculum,'legacy');assert.ok(document.querySelector('.sc-math-master'));
  assert.deepEqual(Object.keys(state(env).units),[id]);assert.equal(state(env).units[id].active.questions.length,10);
  assert.ok(state(env).units[id].active.questions.every(q=>q.unitId===id));
  assert.equal(document.querySelector('.sc-question>.sc-label').textContent,`原主題 · ${unit.grade}年級 · 自然科學`);
  assert.doesNotMatch(document.body.textContent,/康軒|南一|上學期|下學期|年級上|年級下/);
  submit();finish();assert.match(document.querySelector('.sc-score').textContent,/\/ 10 題/);
  assert.equal(buttons().some(b=>b.textContent==='實作與反思'),false);
  assert.equal(env.storage.get('lp-profiles'),formal);assert.deepEqual([...new Set(env.writes)],[PREFIX+'learner']);
  assert.ok(env.requests.every(url=>url.includes('/data/science-curriculum/legacy/')));
});

test('legacy catalog exposes only grades3–6 and real topic counts without publisher/semester controls or empty tasks',async t=>{
  const env=setup(),close=await openScienceCurriculum({curriculum:'legacy',learnerId:'catalog'});t.after(close);
  assert.deepEqual([...document.querySelectorAll('.sc-filters legend')].map(e=>e.textContent),['年級']);
  assert.deepEqual([...document.querySelectorAll('.sc-filters button')].map(e=>e.textContent),['3年級','4年級','5年級','6年級']);
  for(const grade of [3,4,5,6]){clickText(grade+'年級');assert.equal(document.querySelectorAll('.sc-card').length,env.fixture.catalog.units.filter(u=>u.grade===grade).length);assert.equal(buttons().some(b=>b.textContent==='實作與反思'),false);}
  assert.match(document.body.textContent,/未宣稱出版社或學期對應/);assert.equal(env.writes.length,0);
});

test('legacy three-round pool is disjoint, fourth declares reset, and existing candidate records stay intact',async t=>{
  const env=setup(),key=PREFIX+'cycles',prior={attempts:[{id:'historic-attempt',answers:[],total:0,correct:0}],seen:['historic-q']};
  env.storage.set(key,JSON.stringify({schemaVersion:1,units:{'s-kh-g1-t1-u01':prior},tasks:{'historic-note':{note:'保留觀察',checks:[true]}},settings:{roundCount:5}}));
  const close=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'cycles'});t.after(close);const rounds=[];
  for(let i=0;i<4;i++){const s=state(env,'cycles');rounds.push(s.units.s1.active.questions.map(q=>q.id));assert.equal(rounds[i].length,10);assert.equal(new Set(rounds[i]).size,10);if(i===3)assert.match(document.body.textContent,/第 2 輪題池/);finish();if(i<3)clickText('再練一回');}
  assert.equal(new Set(rounds.slice(0,3).flat()).size,30);const s=state(env,'cycles');assert.equal(s.units.s1.attempts.length,4);assert.equal(s.units.s1.questionPool.cycle,2);assert.deepEqual(s.units['s-kh-g1-t1-u01'],prior);assert.deepEqual(s.tasks['historic-note'],{note:'保留觀察',checks:[true]});assert.equal(s.settings.roundCount,5);
});

test('legacy exact active snapshot and pool resume without allocating again, and another unit is independent',async t=>{
  const env=setup();const first=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'resume'});submit();const before=state(env,'resume').units.s1;await first();
  const second=await openScienceCurriculum({curriculum:'legacy',unitId:'s2',learnerId:'resume'});assert.deepEqual(state(env,'resume').units.s1,before);await second();
  const close=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'resume'});t.after(close);assert.deepEqual(state(env,'resume').units.s1,before);assert.equal(document.querySelectorAll('[data-option-index][disabled]').length,4);finish();clickText('再練一回');assert.equal(new Set([...before.active.questions,...state(env,'resume').units.s1.active.questions].map(q=>q.id)).size,20);
});

test('legacy and publisher are distinct singleton owners even when other arguments match',async t=>{
  const env=setup(),old=await openScienceCurriculum({learnerId:'mode-switch'}),newClose=await openScienceCurriculum({curriculum:'legacy',learnerId:'mode-switch'});t.after(newClose);
  assert.notEqual(old,newClose);assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(document.querySelector('dialog').dataset.curriculum,'legacy');assert.equal(history.index,1);
  await old();assert.equal(document.querySelectorAll('dialog').length,1);
  assert.equal(await openScienceCurriculum({curriculum:'legacy',learnerId:'mode-switch'}),newClose);
  assert.equal(env.requests.filter(s=>s.endsWith('catalog.json')).length,2);
});

test('legacy tab shares learner lease with publisher mode and only draws after release',async t=>{
  const env=setup(),other=await acquireProgressLease(env.locks,PREFIX+'cross-tab');
  const first=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'cross-tab'});
  assert.match(document.body.textContent,/另一個分頁/);assert.equal(document.querySelector('.sc-question'),null);assert.equal(env.writes.length,0);await first();other.release();await tick();
  const close=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'cross-tab'});t.after(close);assert.equal(state(env,'cross-tab').units.s1.questionPool.usedIds.length,10);
});

test('legacy logout and browser Back close immediately, retain history and stop stale answer writes',async()=>{
  const env=setup();let active=true;const close=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'logout',isActive:()=>active});const stale=document.querySelector('[data-option-index]'),before=env.storage.get(PREFIX+'logout');active=false;stale.click();await close();assert.equal(document.querySelectorAll('dialog').length,0);assert.equal(history.index,0);assert.equal(env.storage.get(PREFIX+'logout'),before);assert.equal(env.held.size,0);
  const next=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'logout'});history.back();await tick();assert.equal(document.querySelectorAll('dialog').length,0);assert.equal(history.index,0);stale.click();assert.equal(env.storage.get(PREFIX+'logout'),before);await next();
});

for(const id of ['s6','s7','s8','s20','s21','s24','s-kh-g1-t1-u01'])test(`legacy unknown or nonquiz ${id} fails closed without a fallback or profile write`,async t=>{
  const env=setup(),close=await openScienceCurriculum({curriculum:'legacy',unitId:id,learnerId:'missing'});t.after(close);assert.match(document.body.textContent,/指定.*單元不存在/);assert.equal(document.querySelector('.sc-question'),null);assert.equal(env.writes.length,0);
});
test('invalid curriculum mode rejects before mounting, while released legacy mode opens publicly without query flags',async()=>{
  const env=setup();await assert.rejects(openScienceCurriculum({curriculum:'../legacy'}),/不支援/);assert.equal(env.requests.length,0);assert.equal(document.querySelectorAll('dialog').length,0);
  globalThis.location=new URL('https://learnplanet.win/science/');const formal=env.storage.get('lp-profiles');
  const close=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'public-release'});
  try{assert.ok(document.querySelector('.sc-math-master'));assert.equal(document.querySelector('dialog').dataset.curriculum,'legacy');assert.deepEqual(Object.keys(state(env,'public-release').units),['s1']);assert.equal(state(env,'public-release').units.s1.active.questions.length,10);assert.equal(env.storage.get('lp-profiles'),formal);assert.doesNotMatch(document.body.textContent,/候選|本機預覽/);assert.equal(env.requests.length,2);}finally{await close();}
});
test('wrong-mode catalog and fewer than30 questions fail closed without any record changes',async()=>{
  const env=setup();env.fixture.catalog.kind='wrong';const wrong=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'wrong'});assert.match(document.body.textContent,/資料與開啟模式不符/);assert.equal(env.writes.length,0);await wrong();
  env.fixture.catalog.kind='legacy_topic_catalog';env.fixture.content.questions=env.fixture.content.questions.filter(q=>q.id!=='legacy-runtime-only-s1-q30');const short=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'short'});assert.match(document.body.textContent,/至少30題/);assert.equal(env.writes.length,0);assert.equal(document.querySelector('.sc-question'),null);await short();
});

test('alternating live publisher and legacy sessions preserve both active snapshots and pools byte-for-byte',async()=>{
  const env=setup(),id='alternating-modes',publisherId=publisherCatalog.units[0].id,formal=env.storage.get('lp-profiles');
  let close=await openScienceCurriculum({learnerId:id,unitId:publisherId});submit();
  const publisher=structuredClone(state(env,id).units[publisherId]);
  close=await openScienceCurriculum({curriculum:'legacy',learnerId:id,unitId:'s1'});submit();
  const legacy=structuredClone(state(env,id).units.s1);assert.deepEqual(state(env,id).units[publisherId],publisher);
  close=await openScienceCurriculum({learnerId:id,unitId:publisherId});
  assert.deepEqual(state(env,id).units[publisherId],publisher);assert.deepEqual(state(env,id).units.s1,legacy);
  assert.equal(document.querySelectorAll('[data-option-index][disabled]').length,4);assert.equal(env.held.size,1);
  close=await openScienceCurriculum({curriculum:'legacy',learnerId:id,unitId:'s1'});
  assert.deepEqual(state(env,id).units[publisherId],publisher);assert.deepEqual(state(env,id).units.s1,legacy);
  assert.equal(document.querySelectorAll('[data-option-index][disabled]').length,4);assert.equal(env.held.size,1);
  assert.equal(env.storage.get('lp-profiles'),formal);assert.deepEqual([...new Set(env.writes)],[PREFIX+id]);
  await close();assert.equal(env.held.size,0);assert.equal(history.index,0);
});

test('pending legacy load hands off to publisher mode and cannot later overwrite either bank',async()=>{
  const env=setup(),normalFetch=fetch;let pending=false,aborted=false;
  globalThis.fetch=(url,options)=>{if(String(url).includes('/legacy/exercises.json')){pending=true;return new Promise((_,reject)=>options.signal.addEventListener('abort',()=>{aborted=true;reject(new DOMException('aborted','AbortError'));},{once:true}));}return normalFetch(url,options);};
  const old=openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'pending-mode'});
  for(let i=0;i<100&&!pending;i++)await tick();assert.equal(pending,true);
  const close=await openScienceCurriculum({unitId:publisherCatalog.units[0].id,learnerId:'pending-mode'});const stale=await old;
  assert.equal(aborted,true);assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(document.querySelector('dialog').dataset.curriculum,'publisher');
  assert.deepEqual(Object.keys(state(env,'pending-mode').units),[publisherCatalog.units[0].id]);const before=env.storage.get(PREFIX+'pending-mode');
  await stale();assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(env.storage.get(PREFIX+'pending-mode'),before);assert.equal(history.index,1);await close();assert.equal(env.held.size,0);
});
