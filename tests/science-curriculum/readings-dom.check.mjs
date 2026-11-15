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
test('reading toggle annotates full stems and all options across grades without changing answers or deadline',async()=>{
 for(let grade=1;grade<=6;grade++){
  setup();storageMap.clear();const close=await openScienceCurriculum({grade,learnerId:'ruby-'+grade});
  try{
   click('[data-unit-id]');const id=document.querySelector('.sc-question').dataset.questionId;
   const key='lp-science-curriculum-candidate-v2:ruby-'+grade;
   const before=JSON.parse(localStorage.getItem(key));const uid=Object.keys(before.units)[0],deadline=before.units[uid].active.questionDeadline;
   const targets=()=>[document.querySelector('.sc-stem'),...document.querySelectorAll('.sc-option-text')];
   const original=targets().map(n=>n.textContent);
   clickText('ㄅ 注音');await waitFor('.sc-reading');
   for(const [index,n]of targets().entries()){
    const bases=[...n.querySelectorAll('ruby')].map(r=>r.getAttribute('aria-label')).join('');
    const han=original[index].match(/\p{Script=Han}/gu)||[];
    assert.equal(bases.length,han.length,'full Han coverage grade '+grade+' text '+original[index]);
    assert.ok([...n.querySelectorAll('rt')].every(rt=>rt.querySelector('.sc-reading-sounds')));
   }
   const after=JSON.parse(localStorage.getItem(key));assert.equal(after.units[uid].active.questionDeadline,deadline);assert.deepEqual(after.units[uid].active.answers,{});
   clickText('ㄅ 注音');assert.equal(document.querySelectorAll('.sc-reading').length,0);assert.deepEqual(targets().map(n=>n.textContent),original);assert.equal(document.querySelector('.sc-question').dataset.questionId,id);
  }finally{await close();}
 }
});
