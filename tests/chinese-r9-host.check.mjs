import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {pathToFileURL} from 'node:url';
import {parseHTML} from 'linkedom';
import {build} from '../scripts/build-chinese-planet-r9.mjs';
import {chineseR9CourseDestination,openChineseR9} from '../modules/chinese-planet/launch-r9.mjs';
import {mountPractice} from '../modules/chinese-grade6/app.mjs';
import {chineseStations} from '../modules/chinese-planet/chinese-stations.mjs';
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const titleFile='modules/chinese-planet/course-titles-r9.json';
const lessons=json(titleFile),base='https://test.invalid/Learning_Planet/index.html';
const source=json('modules/chinese-grade6/chinese-grade6-source-map.json');
const bank=json('modules/chinese-grade6/chinese-grade6-original-skills.json');
const index=read('index.html');
const sleep=()=>new Promise(r=>setImmediate(r));

test('production title-only metadata derives from exact 165 real entries, no questions or word bodies',()=>{
 assert.deepEqual(lessons,build());assert.equal(lessons.length,165);
 assert.equal(new Set(lessons.map(x=>x.id)).size,165);
 for(const x of lessons){
  assert.equal(typeof x.vocabularyCount,'number');
  assert.deepEqual(Object.keys(x).filter(k=>!/^(?:id|grade|year|semester|publisher|number|title|displayTitle|vocabularyCount)$/.test(k)),[]);
 }
});
test('all true destinations remain relative to formal GitHub Pages base and preserve identifying query',()=>{
 for(const l of lessons){
  const dst=chineseR9CourseDestination(base,'literacy',l.id,{validLiteracy:id=>id===l.id});
  assert.equal(dst.pathname,'/Learning_Planet/chinese-practice.html');
  assert.deepEqual([...dst.searchParams],[['lesson',l.id]]);
 }
 for(const u of bank.units){
  const dst=chineseR9CourseDestination(base,'original',u.id,{seconds:55});
  assert.equal(dst.pathname,'/Learning_Planet/chinese-grade6.html');
  assert.deepEqual([...dst.searchParams],[['unit',u.id],['seconds','55']]);
  const {document}=parseHTML('<main></main>');
  let timer=false;
  const app=mountPractice(document.querySelector('main'),bank,source,{initialUnit:u.id,schedule:()=>timer=true});
  assert.equal(app.getRound().phase,'reading');assert.equal(app.getRound().unit.id,u.id);assert.equal(timer,false);app.destroy();
 }
 assert.equal(chineseR9CourseDestination(base,'literacy','https://danger.invalid/',{validLiteracy:()=>true}),null);
 assert.equal(chineseR9CourseDestination(base,'original','../../secret'),null);
 assert.equal(chineseR9CourseDestination(base,'outline',{kind:'outline',id:'catalog:["x"]',grade:3,series:'lesson',number:2}),null);
});
test('every projected outline opens its exact heading, never a quiz route',()=>{
 const midgrade=json('data/kangxuan-midgrade-115-catalog.json'),markup=read('chinese-115-midgrade-catalog.html');
 const found=[];
 for(const grade of [3,4])for(const semester of ['上','下']){
  const rows=chineseStations({lessons,lessonDisplayTitle:l=>l.title,midgrade,originalUnits:[]},{grade,year:115,semester,publisher:'康軒',track:'publisher'});
  for(const row of rows.filter(r=>r.kind==='outline')){
   const dst=chineseR9CourseDestination(base,'outline',row);
   assert.equal(dst.pathname,'/Learning_Planet/chinese-115-midgrade-catalog.html');
   assert.match(markup,new RegExp('id="'+dst.hash.slice(1)+'"'));found.push(row.id);
  }
 }
 assert.equal(found.length,32);
});
function dom(){
 const {document,window}=parseHTML('<html><body><button>啟動</button><main id="practice-app" data-auth-uid="scope"></main></body></html>');
 Object.defineProperty(document,'baseURI',{value:base,configurable:true});
 const create=document.createElement.bind(document);
 document.createElement=tag=>{const el=create(tag);if(tag==='dialog'){el.showModal=()=>{el.open=true;};el.close=()=>{el.open=false;};}return el;};
 return {document,window};
}
test('modal fails closed without auth, unsubscribes on expiry, and blocks late imports',async()=>{
 const {document}=dom();
 let active=false,notify,unsub=0,started=0,mounts=0,resolveLoad,aborted;
 const options={doc:document,grade:1,isActive:()=>active,watchSession:cb=>{notify=cb;return()=>unsub++;},
  load:signal=>{started++;aborted=signal;return new Promise(done=>resolveLoad=done);},mount:()=>{mounts++;return {destroy(){}};}};
 assert.equal(openChineseR9(options),null);await sleep();assert.equal(started,0);
 active=true;
 const close=openChineseR9(options);assert.equal(typeof close,'function');await sleep();
 assert.equal(started,1);assert.ok(document.querySelector('dialog'));
 active=false;notify();resolveLoad(lessons);await sleep();
 assert.equal(unsub,1);assert.equal(mounts,0);assert.equal(aborted.aborted,true);assert.equal(document.querySelector('dialog'),null);
 close();assert.equal(unsub,1);
});
test('traditional close, account change and course activation do not duplicate navigation',async()=>{
 let {document}=dom(),active=true,mountConfig,disposed=0,unsubscribe=0;const to=[];
 const cfg={doc:document,grade:3,seconds:60,isActive:()=>active,watchSession:()=>()=>unsubscribe++,
  load:async()=>lessons,mount:(_,config)=>{mountConfig=config;return {destroy(){disposed++;}};},navigate:target=>to.push(target.href)};
 openChineseR9(cfg);await sleep();mountConfig.openLiteracy('invalid');assert.equal(to.length,0);
 mountConfig.openLiteracy(lessons[0].id);mountConfig.openOriginal(bank.units[0].id);
 assert.equal(to.length,1);assert.equal(disposed,1);assert.equal(unsubscribe,1);
 openChineseR9(cfg);await sleep();mountConfig.onClose();assert.equal(to.length,1);assert.equal(disposed,2);
 openChineseR9(cfg);await sleep();active=false;mountConfig.openOriginal(bank.units[0].id);
 assert.equal(to.length,1);assert.equal(disposed,3);
});
test('real compiled workbook with targeted location opens exact card while keeping the existing app',async()=>{
 const {document}=dom();
 const lesson=lessons.find(l=>l.grade===5&&l.publisher==='翰林');
 const old=Object.fromEntries(['document','location','window','sessionStorage'].map(k=>[k,Object.getOwnPropertyDescriptor(globalThis,k)]));
 let persisted;
 Object.defineProperties(globalThis,{
  document:{value:document,configurable:true},
  location:{value:new URL('chinese-practice.html?lesson='+lesson.id,base),configurable:true},
  window:{value:{addEventListener(){}},configurable:true},
  sessionStorage:{value:{getItem(){return null;},setItem(_,v){persisted=JSON.parse(v);}},configurable:true}
 });
 try{
  await import(pathToFileURL('modules/chinese-practice/chinese-practice.js').href+'?qa-lesson');
  assert.equal(document.querySelector('[data-map-selected]').dataset.mapLesson,lesson.id);
  assert.equal(persisted.filters.grade,5);assert.equal(persisted.filters.publisher,'翰林');
  assert.ok(document.querySelector('[data-action=return]'));
 }finally{for(const [k,d] of Object.entries(old)){if(d)Object.defineProperty(globalThis,k,d);else delete globalThis[k];}}
});
test('production credentials remain in the existing guards; render paths introduce no account/profile persistence',()=>{
 assert.match(index,/cloudUid===uid/);assert.match(index,/learner==="demo-local"/);
 assert.match(index,/this.closeChineseR9\?\.\(\)/);
 assert.match(index,/chinese-practice\.html\?from=map/);
 for(const page of ['chinese-practice.html','chinese-grade6.html','chinese-115-midgrade-catalog.html']){
  assert.match(read(page),/data-auth-content hidden inert/);
  assert.match(read(page),/src="auth-v2\/page-access\.mjs"/);
 }
 const launch=read('modules/chinese-planet/launch-r9.mjs');
 assert.doesNotMatch(launch,/firebase|firestore|localStorage|sessionStorage|postMessage|password|account/i);
});
