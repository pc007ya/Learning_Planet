import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {registerHooks} from 'node:module';
import {parseHTML} from 'linkedom';
// Real map launcher and real practice panel; only the GPU renderer is mocked.
registerHooks({load(url,context,next){if(url.endsWith('/nature-planet/runtime/planet-v11.mjs'))return{format:'module',shortCircuit:true,source:`export const WORLD_VERSION='nature-planet-world-v1';export function createNaturePlanetScene(container,o){let dead=false;let s={worldVersion:WORLD_VERSION,grade:o.grade,position:o.initialState?.position||[0,0,4],ready:true,rocketReady:true,landed:o.initialState?.landed||false,moving:false,remainingWaypoints:0,mode:'overview'};const emit=()=>{if(!dead)o.onState({...s});};globalThis.bridgeScenes.mounted++;globalThis.bridgeScenes.positions.push([...s.position]);const api={ready:globalThis.bridgeSceneReady||Promise.resolve(true),beginLanding(){s.landed=true;emit();return true},navigate(id){const n=o.sceneData.stationsData.find(n=>n.id===id);s.position=[n.entry[0],n.entry[2],-n.entry[1]];emit();return true},getState(){return structuredClone(s)},dispose(){if(!dead)globalThis.bridgeScenes.disposed++;dead=true},setMode(){},reset(){},cancelLanding(){},setMovement(){},setDayNightPreview(){},moveTo(){}};queueMicrotask(emit);return api}`};return next(url,context)}});
const {openNaturePracticePlanet}=await import('../../modules/science-curriculum/nature-entry.mjs');
const {openScienceCurriculum}=await import('../../modules/science-curriculum/launch.mjs?v=20261112-v3');
const catalog=JSON.parse(readFileSync(new URL('../../data/science-curriculum/catalog.json',import.meta.url)));
const content=JSON.parse(readFileSync(new URL('../../data/science-curriculum/exercises.json',import.meta.url)));
// Full authored candidate data; only GPU rendering is mocked.
const tick=()=>new Promise(r=>setTimeout(r,10));
async function until(predicate){for(let i=0;i<100;i++){if(predicate())return;await tick()}throw Error('Expected bridge state not reached')}
function environment(){
 const {window:base}=parseHTML('<html><head></head><body><button id="opener">Open</button></body></html>');const held=new Set();const locks={async request(key,_options,callback){await Promise.resolve();if(held.has(key))return callback(null);held.add(key);try{return await callback({name:key})}finally{held.delete(key)}}};
 const w=new Proxy(base,{get(target,key){return key==='navigator'?{locks}:Reflect.get(target,key)}});globalThis.window=w;globalThis.document=w.document;globalThis.location=new URL('http://localhost:8877/nature-planet-preview.html');globalThis.bridgeScenes={mounted:0,disposed:0,positions:[]};globalThis.bridgeSceneReady=null;
 const storage=new Map();globalThis.localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)};
 const stack=[{host:'unaltered'}];let index=0,backs=0;globalThis.history={get state(){return stack[index]},get index(){return index},get backs(){return backs},pushState(s){stack.splice(++index);stack.push(s)},replaceState(s){stack[index]=s},back(){backs++;const target=Math.max(0,index-1);setTimeout(()=>{index=target;w.dispatchEvent(new w.Event('popstate'))},10)},forward(){const target=Math.min(stack.length-1,index+1);setTimeout(()=>{index=target;w.dispatchEvent(new w.Event('popstate'))},10)}};
 w.HTMLElement.prototype.showModal=function(){this.open=true};w.HTMLElement.prototype.close=function(){this.open=false};w.HTMLElement.prototype.focus=function(){Object.defineProperty(document,'activeElement',{configurable:true,value:this})};document.querySelector('#opener').focus();
 w.speechSynthesis={cancel(){},getVoices(){return[]},speak(){}};w.SpeechSynthesisUtterance=function(text){this.text=text};
 globalThis.fetch=async url=>new Response(String(url).includes('/exercises.json')?JSON.stringify(content):readFileSync(new URL(url)),{status:200});
 return {window:w,stack,storage,held};
}
const click=(selector)=>{const b=document.querySelector(selector);assert.ok(b,selector);assert.notEqual(b.disabled,true);b.click()};
function textButton(text){const b=[...document.querySelectorAll('button')].find(b=>b.textContent===text);assert.ok(b,text);assert.notEqual(b.disabled,true);b.click()}
async function enter(){textButton('↓ 降落自然星球');textButton('前往單元');textButton('進入單元練習');await until(()=>document.querySelector('.sc-question'))}
function state(storage,id){return JSON.parse(storage.get('lp-science-curriculum-candidate-v2:'+id))}

test('map launches exact unit in math-style practice and returns to original position after history settles',async t=>{
 const env=environment(),close=await openNaturePracticePlanet({catalog,grade:1,publisher:'南一',learnerId:'bridge-exact'});t.after(close);await enter();assert.equal(document.querySelectorAll('dialog').length,2);assert.equal(history.index,2);const q=document.querySelector('.sc-question').dataset.questionId;assert.ok(q.startsWith('s-na-g1-t1-u01-'));assert.ok(document.querySelector('.sc-math-master'));assert.equal(bridgeScenes.disposed,1);click('[data-option-index="0"]');assert.equal(Object.keys(state(env.storage,'bridge-exact').units['s-na-g1-t1-u01'].active.answers).length,0);click('.sc-submit');const before=env.storage.get('lp-science-curriculum-candidate-v2:bridge-exact');click('.sc-quiz-back');await until(()=>bridgeScenes.mounted===2);assert.equal(history.index,1);assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(env.storage.get('lp-science-curriculum-candidate-v2:bridge-exact'),before);assert.deepEqual(bridgeScenes.positions[1],(()=>{const u=JSON.parse(readFileSync(new URL('../../modules/nature-planet/assets/grade1-scene.json',import.meta.url))).stationsData.find(x=>x.id==='s-na-g1-t1-u01');return [u.entry[0],u.entry[2],-u.entry[1]]})());await close();assert.equal(history.index,0);assert.deepEqual(env.stack[0],{host:'unaltered'});assert.equal(bridgeScenes.mounted,bridgeScenes.disposed);
});
test('logout while practice is open stops writes then closes both owned entries without a ghost map',async()=>{
 const env=environment();let active=true;const close=await openNaturePracticePlanet({catalog,learnerId:'bridge-logout',isActive:()=>active});await enter();const key='lp-science-curriculum-candidate-v2:bridge-logout',before=env.storage.get(key);active=false;click('[data-option-index="0"]');await until(()=>document.querySelectorAll('dialog').length===0&&history.index===0);assert.equal(env.storage.get(key),before);assert.equal(history.backs,2);assert.equal(bridgeScenes.mounted,1);assert.equal(bridgeScenes.disposed,1);assert.deepEqual(env.stack[0],{host:'unaltered'});assert.equal(env.held.size,0);await close();
});
test('programmatic close is idempotent and settles child before parent',async()=>{
 const env=environment(),close=await openNaturePracticePlanet({catalog,learnerId:'bridge-close'});await enter();await Promise.all([close(),close()]);await until(()=>history.index===0);assert.equal(history.backs,2);assert.equal(document.querySelectorAll('dialog').length,0);assert.equal(bridgeScenes.mounted,1);assert.equal(bridgeScenes.disposed,1);assert.deepEqual(env.stack[0],{host:'unaltered'});
});
test('browser Back exits child only, then exits map; Forward cannot recreate either',async()=>{
 environment();const close=await openNaturePracticePlanet({catalog,learnerId:'bridge-back'});await enter();history.back();await until(()=>document.querySelectorAll('dialog').length===1&&bridgeScenes.mounted===2);assert.equal(history.index,1);history.back();await until(()=>document.querySelectorAll('dialog').length===0);assert.equal(history.index,0);history.forward();await tick();await tick();assert.equal(document.querySelectorAll('dialog').length,0);await close();
});
test('immediate close then reopen waits for old traversal and keeps fresh map alive',async()=>{
 environment();const first=await openNaturePracticePlanet({catalog,learnerId:'bridge-fast'});const closing=first(),reopening=openNaturePracticePlanet({catalog,learnerId:'bridge-fast'});await closing;const second=await reopening;assert.equal(document.querySelectorAll('.nature-dialog').length,1);assert.equal(history.index,1);await tick();assert.equal(document.querySelectorAll('.nature-dialog').length,1);await second();assert.equal(history.index,0);
});

test('immediate learner replacement closes old child and parent before opening the new map',async()=>{
 const env=environment();let active=true;await openNaturePracticePlanet({catalog,learnerId:'bridge-old',isActive:()=>active});await enter();const key='lp-science-curriculum-candidate-v2:bridge-old',before=env.storage.get(key);active=false;const close=await openNaturePracticePlanet({catalog,learnerId:'bridge-new'});assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(history.index,1);await enter();click('[data-option-index="0"]');click('.sc-submit');assert.equal(env.storage.get(key),before);assert.ok(env.storage.has('lp-science-curriculum-candidate-v2:bridge-new'));await close();assert.equal(history.index,0);
});


test('practice to map handoff closes the unrelated root and opens the exact child on top',async()=>{
 const env=environment();let practiceClosed=0,mapClosed=0;
 await openScienceCurriculum({learnerId:'cross-root',onClose:()=>practiceClosed++});
 const close=await openNaturePracticePlanet({catalog,learnerId:'cross-root',publisher:'南一',onClose:()=>mapClosed++});
 assert.equal(practiceClosed,1);assert.equal(document.querySelectorAll('dialog').length,1);assert.ok(document.querySelector('.nature-dialog'));
 await enter();assert.ok(document.querySelector('.sc-question').dataset.questionId.startsWith('s-na-g1-t1-u01-'));
 assert.equal(document.querySelectorAll('dialog')[1].className,'sc-dialog');assert.equal(mapClosed,0);
 click('.sc-quiz-back');await until(()=>bridgeScenes.mounted===2);assert.equal(document.querySelectorAll('dialog').length,1);
 await close();assert.equal(mapClosed,1);assert.equal(env.held.size,0);assert.equal(history.index,0);
});

test('map and its child hand off to standalone practice without reusing child callbacks',async()=>{
 const env=environment();let mapClosed=0,practiceClosed=0;
 await openNaturePracticePlanet({catalog,learnerId:'map-to-practice',onClose:()=>mapClosed++});await enter();
 const before=env.storage.get('lp-science-curriculum-candidate-v2:map-to-practice');
 const close=await openScienceCurriculum({learnerId:'map-to-practice',onClose:()=>practiceClosed++});
 assert.equal(document.querySelectorAll('dialog').length,1);assert.ok(document.querySelector('.sc-grid'));assert.equal(mapClosed,1);assert.equal(practiceClosed,0);
 assert.equal(bridgeScenes.mounted,1);assert.equal(bridgeScenes.disposed,1);assert.equal(history.index,1);
 assert.equal(env.storage.get('lp-science-curriculum-candidate-v2:map-to-practice'),before);
 await close();assert.equal(practiceClosed,1);assert.equal(history.index,0);
});

test('logout immediately after requesting a child leaves neither a suspended map nor an owner',async()=>{
 const env=environment();let active=true;
 const old=await openNaturePracticePlanet({catalog,learnerId:'instant-logout',isActive:()=>active});
 textButton('↓ 降落自然星球');textButton('前往單元');textButton('進入單元練習');active=false;
 await until(()=>document.querySelectorAll('dialog').length===0&&history.index===0);assert.equal(env.held.size,0);assert.equal(env.storage.size,0);
 const close=await openScienceCurriculum({learnerId:'after-instant-logout'});assert.ok(document.querySelector('.sc-grid'));await close();await old();
});

function delayNextExercises(){const original=fetch;let pending=false,aborted=false;globalThis.fetch=(url,options)=>{
 if(!pending&&String(url).includes('/exercises.json')){pending=true;return new Promise((resolve,reject)=>{options.signal.addEventListener('abort',()=>{aborted=true;reject(new DOMException('aborted','AbortError'));},{once:true});});}return original(url,options);
};return {get pending(){return pending},get aborted(){return aborted}};}

test('pending practice data is aborted before map handoff, without waiting for loading',async()=>{
 environment();const delayed=delayNextExercises();let notices=0;
 const old=openScienceCurriculum({learnerId:'pending-practice',onClose:()=>notices++});await until(()=>delayed.pending);
 const close=await openNaturePracticePlanet({catalog,learnerId:'pending-practice'});await old;
 assert.equal(delayed.aborted,true);assert.equal(notices,1);assert.equal(document.querySelectorAll('dialog').length,1);assert.ok(document.querySelector('.nature-dialog'));await close();assert.equal(history.index,0);
});

test('pending GPU readiness cannot retain map ownership or close a newer practice panel',async()=>{
 environment();let release;bridgeSceneReady=new Promise(resolve=>release=resolve);let notices=0;
 const old=openNaturePracticePlanet({catalog,learnerId:'pending-gpu',onClose:()=>notices++});await until(()=>bridgeScenes.mounted===1);
 const close=await openScienceCurriculum({learnerId:'pending-gpu'});
 assert.equal(notices,1);assert.equal(bridgeScenes.disposed,1);assert.equal(document.querySelectorAll('dialog').length,1);assert.ok(document.querySelector('.sc-grid'));
 release(true);await old;await tick();assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(history.index,1);await close();
});

test('pending child data is aborted and both owned history entries settle before standalone practice',async()=>{
 const env=environment();const map=await openNaturePracticePlanet({catalog,learnerId:'pending-child'}),delayed=delayNextExercises();
 textButton('↓ 降落自然星球');textButton('前往單元');textButton('進入單元練習');await until(()=>delayed.pending);
 const close=await openScienceCurriculum({learnerId:'pending-child'});assert.equal(delayed.aborted,true);assert.equal(document.querySelectorAll('dialog').length,1);assert.ok(document.querySelector('.sc-grid'));
 assert.equal(history.index,1);assert.equal(env.storage.size,0);assert.equal(bridgeScenes.disposed,1);await close();await map();assert.equal(history.index,0);
});

test('root owner handoff survives throwing close callbacks and subsequent rapid reopen',async()=>{
 environment();await openScienceCurriculum({learnerId:'callback-error',onClose:()=>{throw Error('consumer callback')}});
 const map=await openNaturePracticePlanet({catalog,learnerId:'callback-error',onClose:()=>{throw Error('consumer callback')}});
 const close=await openScienceCurriculum({learnerId:'callback-error'});assert.equal(document.querySelectorAll('dialog').length,1);await map();
 const closing=close(),opening=openNaturePracticePlanet({catalog,learnerId:'callback-error'});await closing;const final=await opening;
 assert.equal(document.querySelectorAll('dialog').length,1);assert.ok(document.querySelector('.nature-dialog'));await final();assert.equal(history.index,0);
});

test('simultaneous direct entry requests have one root and stale returned handles cannot close it',async()=>{
 environment();let calls=await Promise.all([openScienceCurriculum({learnerId:'simultaneous'}),openNaturePracticePlanet({catalog,learnerId:'simultaneous'})]);
 assert.equal(document.querySelectorAll('dialog').length,1);assert.ok(document.querySelector('.nature-dialog'));await calls[0]();assert.equal(document.querySelectorAll('dialog').length,1);await calls[1]();
 calls=await Promise.all([openNaturePracticePlanet({catalog,learnerId:'simultaneous'}),openScienceCurriculum({learnerId:'simultaneous'})]);
 assert.equal(document.querySelectorAll('dialog').length,1);assert.ok(document.querySelector('.sc-grid'));await calls[0]();assert.equal(document.querySelectorAll('dialog').length,1);await calls[1]();assert.equal(history.index,0);
});

test('cancel during child loading aborts its data and resumes the same map only once',async()=>{
 const env=environment(),close=await openNaturePracticePlanet({catalog,learnerId:'cancel-pending'}),delayed=delayNextExercises();
 textButton('↓ 降落自然星球');textButton('前往單元');textButton('進入單元練習');await until(()=>delayed.pending);
 document.querySelector('.sc-dialog').dispatchEvent(new window.Event('cancel',{cancelable:true}));
 await until(()=>bridgeScenes.mounted===2&&history.index===1);assert.equal(delayed.aborted,true);assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(env.storage.size,0);
 await tick();assert.equal(bridgeScenes.mounted,2);await close();assert.equal(history.index,0);
});

test('failed history pushes remove unmounted dialogs and release ownership for the next entry',async()=>{
 environment();const push=history.pushState;history.pushState=()=>{throw Error('history push failed')};
 await assert.rejects(openScienceCurriculum({learnerId:'failed-push'}),/history push failed/);assert.equal(document.querySelectorAll('dialog').length,0);
 await assert.rejects(openNaturePracticePlanet({catalog,learnerId:'failed-push'}),/history push failed/);assert.equal(document.querySelectorAll('dialog').length,0);
 history.pushState=push;const close=await openScienceCurriculum({learnerId:'failed-push'});assert.ok(document.querySelector('.sc-grid'));await close();assert.equal(history.index,0);
});

test('identity invalidated between root reservation and native map mount releases the unmounted session',async()=>{
 environment();let checks=0;const old=await openNaturePracticePlanet({catalog,learnerId:'before-map-mount',isActive:()=>++checks<4});
 assert.equal(document.querySelectorAll('dialog').length,0);assert.equal(history.index,0);
 const close=await openNaturePracticePlanet({catalog,learnerId:'before-map-mount'});assert.equal(document.querySelectorAll('dialog').length,1);await old();assert.equal(document.querySelectorAll('dialog').length,1);await close();
});


test('legacy practice and publisher map child preserve separate pools through both owner handoffs',async()=>{
 const env=environment(),originalFetch=fetch;
 // Both frozen author banks are real; only the GPU renderer is mocked.
 globalThis.fetch=(url,options)=>String(url).includes('/legacy/')?Promise.resolve(new Response(readFileSync(new URL(url)),{status:200})):originalFetch(url,options);
 const learner='legacy-map-owners',legacyClose=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:learner});
 click('[data-option-index="0"]');click('.sc-submit');const legacy=structuredClone(state(env.storage,learner).units.s1);
 const mapClose=await openNaturePracticePlanet({catalog,grade:3,learnerId:learner});assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(env.held.size,0);
 await enter();const publisherId=catalog.units.find(u=>u.grade===3&&u.publisher==='康軒'&&u.semester===1).id;
 assert.equal(document.querySelector('.sc-dialog').dataset.curriculum,'publisher');assert.ok(document.querySelector('.sc-question').dataset.questionId.startsWith(publisherId+'-'));
 click('[data-option-index="0"]');click('.sc-submit');const publisher=structuredClone(state(env.storage,learner).units[publisherId]);assert.deepEqual(state(env.storage,learner).units.s1,legacy);
 const close=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:learner});
 assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(document.querySelector('dialog').dataset.curriculum,'legacy');assert.equal(history.index,1);assert.equal(env.held.size,1);
 assert.deepEqual(state(env.storage,learner).units.s1,legacy);assert.deepEqual(state(env.storage,learner).units[publisherId],publisher);
 assert.equal(bridgeScenes.mounted,1);assert.equal(bridgeScenes.disposed,1);await legacyClose();await mapClose();assert.equal(document.querySelectorAll('dialog').length,1);
 await close();assert.equal(history.index,0);assert.equal(env.held.size,0);assert.deepEqual(env.stack[0],{host:'unaltered'});
});

test('inline map opens the identical practice, returns in place, and closes child history on unmount',async t=>{const env=environment(),host=document.createElement('div');document.body.append(host);let earlyClose;const close=await openNaturePracticePlanet({catalog,grade:1,learnerId:'inline-learner',container:host,onOpen:handle=>earlyClose=handle});t.after(close);assert.equal(earlyClose,close);assert.equal(history.index,0);assert.equal(document.querySelectorAll('dialog').length,0);textButton('↓ 降落生活星球');textButton('前往單元');textButton('進入單元練習');await until(()=>document.querySelector('.sc-question'));assert.equal(history.index,1);assert.equal(document.querySelectorAll('dialog').length,1);click('[data-option-index="0"]');click('.sc-submit');const records=env.storage.get('lp-science-curriculum-candidate-v2:inline-learner');click('.sc-quiz-back');await until(()=>bridgeScenes.mounted===2);assert.equal(history.index,0);assert.ok(host.querySelector('.nature-inline'));assert.equal(document.querySelectorAll('dialog').length,0);assert.equal(env.storage.get('lp-science-curriculum-candidate-v2:inline-learner'),records);await new Promise(r=>setTimeout(r,750));textButton('進入單元練習');await until(()=>document.querySelector('.sc-question'));await close();assert.equal(history.index,0);assert.equal(document.querySelectorAll('dialog').length,0);assert.equal(host.children.length,0);assert.equal(bridgeScenes.mounted,bridgeScenes.disposed);assert.equal(env.storage.get('lp-science-curriculum-candidate-v2:inline-learner'),records);});
