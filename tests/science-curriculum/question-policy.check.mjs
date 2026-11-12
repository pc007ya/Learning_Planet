import test from 'node:test';
import assert from 'node:assert/strict';
import {parseHTML} from 'linkedom';
import {openScienceCurriculum} from '../../modules/science-curriculum/launch.mjs';
import {PREFIX} from '../../modules/science-curriculum/store.mjs';
// Synthetic policy/migration fixtures only, never content acceptance or counted bank.
const catalog={units:[{id:'u',grade:3,semester:1,publisher:'康軒',subject:'自然科學',title:'Policy fixture',activities:[{id:'a',title:'Fixture',scope:'current_publisher_activity'}]}]};
const baseline={version:'policy-fixture',questions:Array.from({length:35},(_,i)=>({id:'q'+i,unit_id:'u',activity_id:'a',stem:'Fixture '+i,options:['A','B','C','D'],answer_index:0,explanation:'Original '+i,skill:'observe',difficulty:1,original:true,review_status:'candidate'})),tasks:[]};
let supplied;
function setup(){
 const {window:base}=parseHTML('<html><head></head><body><button id="open">Open</button></body></html>');const held=new Set(),locks={async request(key,_options,fn){await Promise.resolve();if(held.has(key))return fn(null);held.add(key);try{return await fn({name:key})}finally{held.delete(key)}}};
 const w=new Proxy(base,{get(t,k){return k==='navigator'?{locks}:Reflect.get(t,k)}});globalThis.window=w;globalThis.document=w.document;globalThis.location=new URL('http://localhost/science-curriculum-preview.html');
 globalThis.history={state:{original:true},pushState(s){this.state=s},replaceState(s){this.state=s},back(){this.state={original:true};w.dispatchEvent(new w.Event('popstate'))}};
 const map=new Map();globalThis.localStorage={getItem:k=>map.get(k)||null,setItem:(k,v)=>map.set(k,v)};w.HTMLElement.prototype.showModal=function(){};w.HTMLElement.prototype.close=function(){};w.HTMLElement.prototype.focus=function(){};w.speechSynthesis={cancel(){},getVoices(){return[]},speak(){}};w.SpeechSynthesisUtterance=function(text){this.text=text};
 globalThis.fetch=async url=>new Response(JSON.stringify(String(url).endsWith('exercises.json')?supplied:catalog),{status:200});return map;
}
const read=id=>JSON.parse(localStorage.getItem(PREFIX+id));
const button=selector=>{const b=document.querySelector(selector);assert.ok(b,selector);b.click();};
test('corrected new snapshots resume against effective text, not obsolete source text',async()=>{
 setup();supplied=structuredClone(baseline);supplied.question_policy={excluded_from_core:[],corrections:supplied.questions.map(q=>({question_id:q.id,reason:'Terminology correction',fields:{stem:q.stem+' corrected',explanation:q.explanation+' corrected'}}))};const raw=JSON.stringify(supplied.questions);
 let close=await openScienceCurriculum({grade:3,learnerId:'policy-resume',unitId:'u'});const before=read('policy-resume').units.u.active;assert.ok(before.questions.every(q=>q.stem.endsWith('corrected')));button('[data-option-index="0"]');button('.sc-submit');await close();close=await openScienceCurriculum({grade:3,learnerId:'policy-resume',unitId:'u'});const resumed=read('policy-resume').units.u;assert.equal(resumed.active.id,before.id);assert.equal(resumed.interrupted,undefined);assert.equal(Object.keys(resumed.active.answers).length,1);assert.equal(JSON.stringify(supplied.questions),raw);await close();
});
test('retiring an allocated question archives the old snapshot and reconciles a still-sufficient core bank',async()=>{
 setup();supplied=structuredClone(baseline);let close=await openScienceCurriculum({grade:3,learnerId:'policy-retire',unitId:'u'});button('[data-option-index="0"]');button('.sc-submit');const previous=read('policy-retire').units.u.active,retired=previous.questions[3].id;await close();
 supplied.question_policy={corrections:[],excluded_from_core:[{question_id:retired,reason:'Substantive duplicate retained for old records'}]};supplied.version+='-revision';close=await openScienceCurriculum({grade:3,learnerId:'policy-retire',unitId:'u'});const next=read('policy-retire').units.u;assert.deepEqual(next.interrupted,[previous]);assert.notEqual(next.active.id,previous.id);assert.equal(next.active.questions.length,10);assert.ok(next.active.questions.every(q=>q.id!==retired));assert.equal(next.questionPool.bankIds.length,34);assert.ok(!next.questionPool.bankIds.includes(retired));assert.deepEqual(supplied.questions,baseline.questions);await close();
});
