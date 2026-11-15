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
test('timer DOM: rerender preserves deadline, hidden expiry saves only on return and close stops writes',async()=>{
 setup();storageMap.clear();const realNow=Date.now;let now=100000;Date.now=()=>now;
 let close;try{
 close=await openScienceCurriculum({learnerId:'timer-dom'});click('[data-unit-id]');
 const key='lp-science-curriculum-candidate-v2:timer-dom';const read=()=>Object.values(JSON.parse(localStorage.getItem(key)).units).find(u=>u.active).active;
 assert.equal(read().questionDeadline,130000);assert.equal(read().rewardEligible,true);
 now=110000;click('[data-option-index="0"]');assert.equal(read().questionDeadline,130000);assert.equal(document.querySelector('.sc-pace-circle strong').textContent,'20');
 Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new window.Event('visibilitychange'));
 now=140000;assert.equal(Object.keys(read().answers).length,0);
 Object.defineProperty(document,'hidden',{configurable:true,value:false});document.dispatchEvent(new window.Event('visibilitychange'));
 const answer=Object.values(read().answers)[0];assert.equal(answer.timedOut,true);assert.equal(answer.selected,null);assert.match(document.body.textContent,/時間到了/);assert.ok(document.querySelector('.sc-muted'));
 clickText('下一題 →');assert.equal(read().questionDeadline,170000);const snapshot=localStorage.getItem(key);
 await close();now=200000;document.dispatchEvent(new window.Event('visibilitychange'));assert.equal(localStorage.getItem(key),snapshot);
 }finally{await close?.();Date.now=realNow;}
});
