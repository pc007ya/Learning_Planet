import {scopedFixture} from './scoped-fixtures.mjs';
import test from 'node:test';import assert from'node:assert/strict';import{readFileSync}from'node:fs';
import{parseHTML}from'linkedom';
import{openScienceCurriculum}from'../../modules/science-curriculum/launch.mjs';
import{acquireProgressLease}from'../../modules/science-curriculum/session-lock.mjs';
import{createCurriculumEngine}from'../../modules/science-curriculum/engine.mjs';
const catalog=JSON.parse(readFileSync(new URL('../../data/science-curriculum/catalog.json',import.meta.url)));const content=JSON.parse(readFileSync(new URL('../../data/science-curriculum/exercises.json',import.meta.url)));
// Full authored candidate data; no synthetic padding of bank counts.
const domContent=content;
const testLocks={held:new Set(),async request(key,options,callback){await Promise.resolve();if(this.held.has(key))return callback(null);this.held.add(key);try{return await callback({name:key});}finally{this.held.delete(key);}}};
const storageMap=new Map();let failFetch=false,historyBacks=0,contentOverride=null;
function setup(){
 const {window:domWindow}=parseHTML('<!doctype html><html><head></head><body><button id="opener">入口</button></body></html>');
 const window=new Proxy(domWindow,{get(target,key){return key==='navigator'?globalThis.navigator:Reflect.get(target,key)}});
 globalThis.window=window;globalThis.document=window.document;Object.defineProperty(globalThis,'navigator',{configurable:true,value:{locks:testLocks}});globalThis.location={hostname:'localhost',href:'http://localhost/science-curriculum-preview.html'};
 globalThis.history={state:{host:'original'},pushState(s){this.state=s},replaceState(s){this.state=s},back(){this.state={host:'original'};historyBacks++;window.dispatchEvent(new window.Event('popstate'))}};
 globalThis.localStorage={getItem:k=>storageMap.get(k)||null,setItem:(k,v)=>storageMap.set(k,v)};
 globalThis.speechSynthesis=window.speechSynthesis={cancel(){},getVoices(){return[]},speak(){}};globalThis.SpeechSynthesisUtterance=function(text){this.text=text};window.SpeechSynthesisUtterance=SpeechSynthesisUtterance;
 window.HTMLElement.prototype.showModal=function(){this.open=true};window.HTMLElement.prototype.close=function(){this.open=false};window.HTMLElement.prototype.focus=function(){Object.defineProperty(document,'activeElement',{configurable:true,value:this})};document.querySelector('#opener').focus();
 globalThis.fetch=async url=>{if(failFetch&&String(url).endsWith('exercises.json'))return new Response('',{status:503});if(String(url).endsWith('exercises.json'))return new Response(JSON.stringify(scopedFixture(url,catalog,contentOverride||domContent)),{status:200});return new Response(readFileSync(new URL(url)),{status:200,headers:{'Content-Type':'application/json'}})};
 return window;
}
function buttons(){return [...document.querySelectorAll('button')]}function clickText(text){const b=buttons().find(b=>b.textContent===text);assert.ok(b,'button '+text);b.click();return b}function click(s){const b=document.querySelector(s);assert.ok(b,s);b.click();return b}const tick=()=>new Promise(r=>setTimeout(r,10));
function chooseAndSubmit(selector){const b=click(selector);const submit=document.querySelector('.sc-submit');if(submit&&!submit.disabled)submit.click();return b;}
async function waitFor(selector){for(let i=0;i<50;i++){if(document.querySelector(selector))return;await tick()}throw Error('Not found '+selector)}
const MUTE_KEY='learning-planet.question-speech-muted.v1';
function session(learner){return JSON.parse(localStorage.getItem('lp-science-curriculum-candidate-v2:'+learner));}
function current(learner){return Object.values(session(learner).units).find(u=>u.active)?.active;}
const verbal=text=>String(text).replace(/＋/g,'加').replace(/－/g,'減').replace(/×/g,'乘以').replace(/÷/g,'除以').replace(/＝/g,'等於');
test('math parity: entry, option, feedback and next each speak only current content',async t=>{
 setup();storageMap.clear();const spoken=[];let cancels=0;window.speechSynthesis.speak=u=>spoken.push(u);window.speechSynthesis.cancel=()=>cancels++;
 const learner='speech-parity';const close=await openScienceCurriculum({learnerId:learner,grade:3});t.after(close);click('[data-unit-id]');
 let run=current(learner),q=run.questions[run.index];assert.equal(spoken.length,1);assert.equal(spoken.at(-1).text,verbal(q.stem+(q.speakText?'。'+q.speakText:'')));assert.equal(spoken.at(-1).rate,.8);assert.equal(spoken.at(-1).lang,'zh-TW');
 click('[data-option-index="0"]');assert.equal(spoken.at(-1).text,verbal(q.opts[0]));click('.sc-submit');assert.match(spoken.at(-1).text,/答對了|再一起想一想/);
 const before=spoken.length;click('.sc-next');run=current(learner);q=run.questions[run.index];assert.equal(spoken.length,before+1);assert.equal(spoken.at(-1).text,verbal(q.stem+(q.speakText?'。'+q.speakText:'')));assert.ok(cancels>=3);
 const beforeClose=cancels;await close();assert.ok(cancels>beforeClose);
});
test('math parity: shared mute preference persists and disables automatic narration',async t=>{
 setup();storageMap.clear();storageMap.set(MUTE_KEY,'1');const spoken=[];window.speechSynthesis.speak=u=>spoken.push(u);
 const close=await openScienceCurriculum({learnerId:'speech-muted'});t.after(close);click('[data-unit-id]');assert.equal(spoken.length,0);assert.equal(document.querySelector('.sc-speech-toggle').getAttribute('aria-pressed'),'true');
 chooseAndSubmit('[data-option-index="0"]');click('.sc-next');assert.equal(spoken.length,0);
 click('.sc-speech-toggle');assert.equal(storageMap.get(MUTE_KEY),'0');assert.equal(document.querySelector('.sc-speech-toggle').getAttribute('aria-pressed'),'false');
 const before=spoken.length;click('[data-option-index="1"]');assert.equal(spoken.length,before+1);click('.sc-speech-toggle');assert.equal(storageMap.get(MUTE_KEY),'1');
});
test('math parity: operator verbalization and repeated manual play cancel old utterance',async t=>{
 setup();storageMap.clear();contentOverride=structuredClone(content);for(const q of contentOverride.questions)q.stem='1＋2－3×4÷5＝多少？';t.after(()=>{contentOverride=null});const spoken=[];let cancels=0;window.speechSynthesis.speak=u=>spoken.push(u);window.speechSynthesis.cancel=()=>cancels++;
 const close=await openScienceCurriculum({learnerId:'speech-symbols'});t.after(close);click('[data-unit-id]');assert.match(spoken.at(-1).text,/1加2減3乘以4除以5等於/);const before=cancels;click('.sc-quiz-sound');click('.sc-quiz-sound');assert.ok(cancels>=before+2);assert.equal(spoken.at(-1).rate,.8);assert.doesNotMatch(spoken.at(-1).text,/選項1/);
});
