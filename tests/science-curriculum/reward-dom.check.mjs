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
test('reward callback occurs only after a completed round is durably saved; replaying the result never grants twice',async()=>{
 setup();storageMap.clear();let calls=0;const learnerId='reward-dom',unitId='s-kh-g1-t1-u01';
 const close=await openScienceCurriculum({learnerId,unitId,onReward:async info=>{calls++;const saved=JSON.parse(localStorage.getItem('lp-science-curriculum-candidate-v2:'+learnerId)).units[unitId];assert.equal(saved.active.finished,true);assert.equal(saved.attempts.length,1);assert.equal(info.runId,saved.active.id);return {status:'awarded',xp:8,coins:3,beforeXp:92,totalXp:100};}});
 try {for(let i=0;i<10;i++){chooseAndSubmit('[data-option-index="0"]');click('.sc-next');}await tick();assert.equal(calls,1);assert.match(document.body.textContent,/獎勵已入帳/);assert.match(document.body.textContent,/8 XP/);assert.match(document.body.textContent,/3 星星幣/);document.querySelector('.sc-shell').dispatchEvent(new window.Event('change'));await tick();assert.equal(calls,1);}finally{await close();}
});
test('failed reward callback never claims credited balances and supports a safe retry',async()=>{
 setup();storageMap.clear();let calls=0;const close=await openScienceCurriculum({learnerId:'reward-fail',unitId:'s-kh-g1-t1-u01',onReward:async()=>{calls++;if(calls===1)throw Error('offline');return {status:'already-awarded',xp:0,coins:0,beforeXp:10,totalXp:10};}});
 try {for(let i=0;i<10;i++){chooseAndSubmit('[data-option-index="0"]');click('.sc-next');}await tick();assert.match(document.body.textContent,/未確認入帳/);clickText('重新確認獎勵入帳');await tick();assert.equal(calls,2);assert.match(document.body.textContent,/不會重複入帳/);}finally{await close();}
});
