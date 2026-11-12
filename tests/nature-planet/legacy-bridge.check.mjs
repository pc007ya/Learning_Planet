import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {registerHooks} from 'node:module';
import {parseHTML} from 'linkedom';
import {legacyFixture,syntheticContent} from '../science-curriculum/legacy-fixtures.mjs';
// Real map launcher and real practice panel; only the GPU renderer is mocked.
registerHooks({load(url,context,next){if(url.endsWith('/nature-planet/runtime/planet-v11.mjs'))return{format:'module',shortCircuit:true,source:`export const WORLD_VERSION='nature-planet-world-v1';export function createNaturePlanetScene(container,o){let dead=false;let s={worldVersion:WORLD_VERSION,grade:o.grade,position:o.initialState?.position||[0,0,4],ready:true,rocketReady:true,landed:o.initialState?.landed||false,moving:false,remainingWaypoints:0,mode:'overview'};const emit=()=>{if(!dead)o.onState({...s});};globalThis.bridgeScenes.mounted++;globalThis.bridgeScenes.positions.push([...s.position]);const api={ready:globalThis.bridgeSceneReady||Promise.resolve(true),beginLanding(){s.landed=true;emit();return true},navigate(id){const n=o.sceneData.stationsData.find(n=>n.id===id);s.position=[n.entry[0],n.entry[2],-n.entry[1]];emit();return true},getState(){return structuredClone(s)},dispose(){if(!dead)globalThis.bridgeScenes.disposed++;dead=true},setMode(){},reset(){},cancelLanding(){},setMovement(){},setDayNightPreview(){},moveTo(){}};queueMicrotask(emit);return api}`};return next(url,context)}});
const {openNaturePracticePlanet}=await import('../../modules/science-curriculum/nature-entry.mjs');
const {openScienceCurriculum}=await import('../../modules/science-curriculum/launch.mjs?v=20261112-v3');
const catalog=JSON.parse(readFileSync(new URL('../../data/science-curriculum/catalog.json',import.meta.url)));
// This suite tests ownership with synthetic questions, not authored content.
const content=syntheticContent(catalog);
const legacy=legacyFixture();
const tick=()=>new Promise(r=>setTimeout(r,10));
async function until(predicate){for(let i=0;i<100;i++){if(predicate())return;await tick()}throw Error('Expected bridge state not reached')}
function environment(){
 const {window:base}=parseHTML('<html><head></head><body><button id="opener">Open</button></body></html>');const held=new Set();const locks={async request(key,_options,callback){await Promise.resolve();if(held.has(key))return callback(null);held.add(key);try{return await callback({name:key})}finally{held.delete(key)}}};
 const w=new Proxy(base,{get(target,key){return key==='navigator'?{locks}:Reflect.get(target,key)}});globalThis.window=w;globalThis.document=w.document;globalThis.location=new URL('http://localhost:8877/nature-planet-preview.html');globalThis.bridgeScenes={mounted:0,disposed:0,positions:[]};globalThis.bridgeSceneReady=null;
 const storage=new Map();globalThis.localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)};
 const stack=[{host:'unaltered'}];let index=0,backs=0;globalThis.history={get state(){return stack[index]},get index(){return index},get backs(){return backs},pushState(s){stack.splice(++index);stack.push(s)},replaceState(s){stack[index]=s},back(){backs++;const target=Math.max(0,index-1);setTimeout(()=>{index=target;w.dispatchEvent(new w.Event('popstate'))},10)},forward(){const target=Math.min(stack.length-1,index+1);setTimeout(()=>{index=target;w.dispatchEvent(new w.Event('popstate'))},10)}};
 w.HTMLElement.prototype.showModal=function(){this.open=true};w.HTMLElement.prototype.close=function(){this.open=false};w.HTMLElement.prototype.focus=function(){Object.defineProperty(document,'activeElement',{configurable:true,value:this})};document.querySelector('#opener').focus();
 w.speechSynthesis={cancel(){},getVoices(){return[]},speak(){}};w.SpeechSynthesisUtterance=function(text){this.text=text};
 globalThis.fetch=async url=>new Response(String(url).includes('/legacy/')?JSON.stringify(String(url).endsWith('/catalog.json')?legacy.catalog:legacy.content):String(url).includes('/exercises.json')?JSON.stringify(content):readFileSync(new URL(url)),{status:200});
 return {window:w,stack,storage,held};
}
const click=(selector)=>{const b=document.querySelector(selector);assert.ok(b,selector);assert.notEqual(b.disabled,true);b.click()};
function textButton(text){const b=[...document.querySelectorAll('button')].find(b=>b.textContent===text);assert.ok(b,text);assert.notEqual(b.disabled,true);b.click()}
async function enter(){textButton('↓ 降落自然星球');textButton('前往單元');textButton('進入單元練習');await until(()=>document.querySelector('.sc-question'))}
function state(storage,id){return JSON.parse(storage.get('lp-science-curriculum-candidate-v2:'+id))}

test('legacy root, publisher map child, legacy root and publisher catalog hand off with one root and exact unit IDs',async()=>{
 const env=environment();let legacyClosed=0,mapClosed=0;
 env.storage.set('lp-profiles',JSON.stringify({dailyMastery:{s1:3},stars:9}));const formal=env.storage.get('lp-profiles');
 const first=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'legacy-bridge',onClose:()=>legacyClosed++});
 const saved=state(env.storage,'legacy-bridge').units.s1;
 const map=await openNaturePracticePlanet({catalog,learnerId:'legacy-bridge',onClose:()=>mapClosed++});
 assert.equal(legacyClosed,1);assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(history.index,1);await enter();
 assert.equal(document.querySelector('dialog.sc-dialog').dataset.curriculum,'publisher');assert.ok(document.querySelector('.sc-question').dataset.questionId.includes('s-kh-g1-t1-u01'));assert.equal(history.index,2);
 const second=await openScienceCurriculum({curriculum:'legacy',unitId:'s2',learnerId:'legacy-bridge'});
 assert.equal(mapClosed,1);assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(document.querySelector('dialog').dataset.curriculum,'legacy');assert.equal(history.index,1);assert.equal(bridgeScenes.mounted,bridgeScenes.disposed);
 assert.deepEqual(state(env.storage,'legacy-bridge').units.s1,saved);assert.ok(state(env.storage,'legacy-bridge').units.s2);assert.ok(state(env.storage,'legacy-bridge').units['s-kh-g1-t1-u01']);
 await first();await map();assert.equal(document.querySelectorAll('dialog').length,1);
 const publisher=await openScienceCurriculum({learnerId:'legacy-bridge'});assert.equal(document.querySelector('dialog').dataset.curriculum,'publisher');assert.ok(document.querySelector('.sc-grid'));await second();assert.equal(document.querySelectorAll('dialog').length,1);await publisher();
 assert.equal(env.storage.get('lp-profiles'),formal);assert.equal(history.index,0);assert.equal(env.held.size,0);
});

test('legacy-to-map switch preserves nested Back behavior and cannot revive stale legacy UI',async()=>{
 const env=environment();const old=await openScienceCurriculum({curriculum:'legacy',unitId:'s19',learnerId:'legacy-back'});const before=env.storage.get('lp-science-curriculum-candidate-v2:legacy-back');
 const map=await openNaturePracticePlanet({catalog,learnerId:'legacy-back'});await enter();history.back();await until(()=>document.querySelectorAll('dialog').length===1&&bridgeScenes.mounted===2);
 assert.equal(document.querySelectorAll('.sc-dialog').length,0);history.back();await until(()=>document.querySelectorAll('dialog').length===0);assert.equal(history.index,0);history.forward();await tick();await tick();assert.equal(document.querySelectorAll('dialog').length,0);
 const saved=JSON.parse(before);assert.deepEqual(state(env.storage,'legacy-back').units.s19,saved.units.s19);await old();await map();assert.equal(env.held.size,0);
});

test('legacy root closes on logout after leaving a map child and no old handle can close the new learner',async()=>{
 const env=environment();let active=true;const map=await openNaturePracticePlanet({catalog,learnerId:'legacy-logout',isActive:()=>active});await enter();
 const old=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'legacy-logout',isActive:()=>active});const key='lp-science-curriculum-candidate-v2:legacy-logout',before=env.storage.get(key),stale=document.querySelector('[data-option-index]');active=false;stale.click();await until(()=>document.querySelectorAll('dialog').length===0&&history.index===0);
 const next=await openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'new-learner'});await old();await map();assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(env.storage.get(key),before);assert.ok(state(env.storage,'new-learner').units.s1);await next();assert.equal(env.held.size,0);
});

test('pending legacy fetch is aborted on root handoff and cannot write after a newer map opens',async()=>{
 const env=environment(),original=fetch;let pending=false,aborted=false;
 globalThis.fetch=(url,options)=>{if(String(url).includes('/legacy/exercises.json')){pending=true;return new Promise((_resolve,reject)=>options.signal.addEventListener('abort',()=>{aborted=true;reject(new DOMException('aborted','AbortError'));},{once:true}));}return original(url,options);};
 const opening=openScienceCurriculum({curriculum:'legacy',unitId:'s1',learnerId:'pending-legacy'});await until(()=>pending);
 const map=await openNaturePracticePlanet({catalog,learnerId:'pending-legacy'});const old=await opening;assert.equal(aborted,true);assert.equal(env.storage.size,0);assert.equal(document.querySelectorAll('dialog').length,1);assert.ok(document.querySelector('.nature-dialog'));assert.equal(history.index,1);await old();assert.equal(document.querySelectorAll('dialog').length,1);await map();
});

test('simultaneous publisher and legacy roots select one owner and stale close handles cannot dismiss it',async()=>{
 environment();let calls=await Promise.all([openScienceCurriculum({learnerId:'parallel-modes'}),openScienceCurriculum({curriculum:'legacy',learnerId:'parallel-modes'})]);
 assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(document.querySelector('dialog').dataset.curriculum,'legacy');await calls[0]();assert.equal(document.querySelectorAll('dialog').length,1);await calls[1]();
 calls=await Promise.all([openScienceCurriculum({curriculum:'legacy',learnerId:'parallel-modes'}),openScienceCurriculum({learnerId:'parallel-modes'})]);assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(document.querySelector('dialog').dataset.curriculum,'publisher');await calls[0]();assert.equal(document.querySelectorAll('dialog').length,1);await calls[1]();assert.equal(history.index,0);
});
