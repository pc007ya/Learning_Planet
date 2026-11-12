import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseHTML } from 'linkedom';
import { quizUnits } from './legacy-fixtures.mjs';
import { validateCandidateData, createCurriculumEngine } from '../../modules/science-curriculum/engine.mjs';
import { openScienceCurriculum } from '../../modules/science-curriculum/launch.mjs';
import { PREFIX } from '../../modules/science-curriculum/store.mjs';

// Mandatory real-file gate. Missing author output fails: no synthetic fallback,
// runtime padding, or skipped test can claim the actual bank meets the minimum.
// Structural/rotation checks do not certify scientific or pedagogical quality.
const catalog=JSON.parse(readFileSync(new URL('../../data/science-curriculum/legacy/catalog.json',import.meta.url)));
const content=JSON.parse(readFileSync(new URL('../../data/science-curriculum/legacy/exercises.json',import.meta.url)));
const publisherContent=JSON.parse(readFileSync(new URL('../../data/science-curriculum/exercises.json',import.meta.url)));

test('actual legacy bank has every original quiz ID, grade and title without mapping the five nonquiz entries',()=>{
  assert.equal(catalog.kind,'legacy_topic_catalog');assert.equal(catalog.units.length,18);
  assert.deepEqual(catalog.units.map(u=>u.id).sort(),quizUnits.map(u=>u.id).sort());
  for(const unit of catalog.units){const host=quizUnits.find(u=>u.id===unit.id);assert.equal(unit.grade,host.grade);assert.equal(unit.title,host.title);assert.equal(unit.subject,'自然科學');assert.equal(unit.publisher,'原主題');assert.equal(unit.semester,0);assert.equal(unit.school_year,null);assert.equal(unit.source_id,'legacy-topic-'+unit.id);assert.ok(unit.activities.length);assert.ok(unit.activities.every(a=>a.scope==='legacy_topic'));}
  const report=validateCandidateData(catalog,content);assert.equal(report.valid,true,report.errors.join('\n'));
});

test('actual legacy bank has30+ eligible unique questions per topic and globally distinct IDs across publisher and legacy banks',()=>{
  const all=[...publisherContent.questions,...content.questions],ids=all.map(q=>q.id);assert.equal(new Set(ids).size,ids.length);
  const engine=createCurriculumEngine(catalog,content);
  for(const unit of engine.listUnits()){
    assert.ok(unit.candidateQuestionCount>=30,`${unit.id} has only ${unit.candidateQuestionCount}`);
    const bank=content.questions.filter(q=>q.unit_id===unit.id&&engine.isCoreQuestion(q.id));
    const normalized=bank.map(q=>engine.getQuestion(q.id).stem.replace(/\s+/g,'').replace(/[，。！？；：、,.!?;:「」『』（）()]/g,''));
    assert.equal(new Set(normalized).size,bank.length,unit.id+' duplicate stems');
    assert.ok(bank.every(q=>!/-runtime-fixture|-bridge-fixture|runtime-only/.test(q.id)),'runtime fixtures cannot be author output');
  }
});

test('every actual legacy topic gives fixed ten, three disjoint rounds and exhausts its finite pool before reset',()=>{
  const engine=createCurriculumEngine(catalog,content),before=JSON.stringify({catalog,content});
  for(const unit of engine.listUnits()){
    let pool=null;const firstCycle=new Set(),firstThree=[];
    for(let round=0;round<=Math.ceil(unit.candidateQuestionCount/10);round++){
      const result=engine.createCycleRound(unit.id,{pool,allowCandidate:true,rng:()=>0.371});pool=result.pool;
      assert.equal(result.questions.length,10);assert.equal(new Set(result.questions.map(q=>q.id)).size,10);if(round<3)firstThree.push(...result.questions.map(q=>q.id));
      result.questions.forEach((q,i)=>{assert.equal(q.unitId,unit.id);assert.equal(q.opts.filter(o=>o===q.ans).length,1);if(result.questionCycles[i]===1){assert.equal(firstCycle.has(q.id),false,unit.id+' repeated before exhaustion');firstCycle.add(q.id);}else assert.equal(firstCycle.size,unit.candidateQuestionCount,unit.id+' reset too early');});
    }
    assert.equal(new Set(firstThree).size,30);assert.equal(firstCycle.size,unit.candidateQuestionCount);assert.ok(pool.cycle>=2);
  }
  assert.equal(JSON.stringify({catalog,content}),before);
});

test('real legacy files launch all18 exact topics in the math-style panel without changing formal profiles',async()=>{
  const {window:base}=parseHTML('<html><head></head><body></body></html>');const held=new Set(),locks={async request(key,_o,callback){if(held.has(key))return callback(null);held.add(key);try{return await callback({name:key});}finally{held.delete(key);}}};
  const window=new Proxy(base,{get:(t,k)=>k==='navigator'?{locks}:Reflect.get(t,k)});globalThis.window=window;globalThis.document=window.document;globalThis.location=new URL('http://localhost/?scienceCandidate=1');
  globalThis.history={state:{host:'unaltered'},pushState(s){this.state=s;},replaceState(s){this.state=s;},back(){this.state={host:'unaltered'};window.dispatchEvent(new window.Event('popstate'));}};
  const storage=new Map([['lp-profiles','FORMAL-PROFILE-UNCHANGED']]);globalThis.localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>{assert.equal(k,PREFIX+'real-legacy');storage.set(k,v);}};
  window.HTMLElement.prototype.showModal=function(){this.open=true;};window.HTMLElement.prototype.close=function(){this.open=false;};window.HTMLElement.prototype.focus=function(){};window.speechSynthesis={cancel(){}};
  globalThis.fetch=async url=>new Response(readFileSync(new URL(url)),{status:200});
  const questionIds=new Set(content.questions.map(q=>q.id));
  for(const unit of catalog.units){
    const close=await openScienceCurriculum({curriculum:'legacy',unitId:unit.id,learnerId:'real-legacy'});
    try{assert.ok(document.querySelector('.sc-math-master'),unit.id);assert.equal(document.querySelector('dialog').dataset.curriculum,'legacy');const saved=JSON.parse(storage.get(PREFIX+'real-legacy')).units[unit.id];assert.equal(saved.active.questions.length,10);assert.ok(saved.active.questions.every(q=>q.unitId===unit.id&&questionIds.has(q.id)));assert.match(document.querySelector('.sc-question>.sc-label').textContent,/原主題/);assert.doesNotMatch(document.querySelector('.sc-question>.sc-label').textContent,/康軒|南一|年級下|年級上/);}finally{await close();}
  }
  assert.equal(Object.keys(JSON.parse(storage.get(PREFIX+'real-legacy')).units).length,18);assert.equal(storage.get('lp-profiles'),'FORMAL-PROFILE-UNCHANGED');assert.equal(held.size,0);assert.equal(document.querySelectorAll('dialog').length,0);
});
