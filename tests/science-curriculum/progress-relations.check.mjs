import test from 'node:test';
import assert from 'node:assert/strict';
import { parseHTML } from 'linkedom';
import { createCurriculumEngine } from '../../modules/science-curriculum/engine.mjs';
import { openScienceCurriculum } from '../../modules/science-curriculum/launch.mjs';
import { drawQuestionIds, validQuestionPool } from '../../modules/science-curriculum/rotation.mjs';
import { createProgressStore, validProgress, PREFIX } from '../../modules/science-curriculum/store.mjs';

// Deliberately synthetic, single-unit fixtures for persistence invariants only.
// They do not stand in for authoring or acceptance of the real question bank.
const catalog = { sources: {}, units: [{ id: 'u', grade: 3, publisher: '康軒', semester: 1, subject: '自然科學', title: 'Test unit', activities: [{ id: 'a', scope: 'current_publisher_activity' }] }] };
const question = id => ({ id, stem: `Fixture ${id}`, ans: 'A', opts: ['A','B','C','D'], explain: `Fixture explanation ${id}` });
const ids = n => Array.from({ length: n }, (_,i) => 'q'+i);
const content = { version: 'synthetic-test', questions: ids(35).map(id => ({ id, unit_id: 'u', activity_id: 'a', stem: `Fixture ${id}`, explanation: `Fixture explanation ${id}`, options: ['A','B','C','D'], answer_index: 0, skill: 'observe', difficulty: 1, original: true, review_status: 'candidate', core_practice_eligible: true })), tasks: [] };
const makeRun = (questionIds, id = 'run') => ({ id, unitId: 'u', version: 'old', started: 1, questions: questionIds.map(question), answers: {}, index: 0, warnings: [], finished: false });
const state = unit => ({ schemaVersion: 1, units: { u: { attempts: [], seen: [], ...unit } }, tasks: {}, settings: {} });
const answered = q => ({ questionId: q.id, selected: q.ans, correct: true, time: 2 });
const memory = () => { const map = new Map(); return { getItem: key => map.get(key) ?? null, setItem: (key,value) => map.set(key,value) }; };
const clone = value => JSON.parse(JSON.stringify(value));
const roundRun = draw => ({ ...makeRun(draw.ids), version: 'v3', poolCycleStart: draw.startCycle, poolCycleEnd: draw.endCycle, poolSize: draw.pool.bankIds.length, questionCycles: draw.questionCycles });
function assertPreservedReadonly(data) {
  const storage = memory(), raw = JSON.stringify(data); storage.setItem(PREFIX+'corrupt',raw);
  const store = createProgressStore(storage,'corrupt');
  assert.equal(store.readonly(),true); assert.equal(store.update(s => { s.settings.zhuyin = true; }),false); assert.equal(storage.getItem(PREFIX+'corrupt'),raw);
}

test('legacy 3/5/10 runs preserve valid answer prefixes and completed snapshots', () => {
  for (const count of [3,5,10]) for (const finished of [false,true]) {
    const active = makeRun(ids(count)); active.index = count-1;
    for (const q of active.questions.slice(0,finished ? count : count-1)) active.answers[q.id] = answered(q);
    active.finished = finished;
    const data = state({active,interrupted:[clone(active)]});
    assert.equal(validProgress(data),true); const storage = memory(); storage.setItem(PREFIX+'old',JSON.stringify(data));
    const store = createProgressStore(storage,'old'); assert.equal(store.readonly(),false); assert.deepEqual(store.read(),data);
  }
});

test('malformed answer ordering, options, correctness and finished status stay read-only', () => {
  for (const mutate of [
    r => { r.index = 9; },
    r => { r.answers.q1 = answered(r.questions[1]); },
    r => { r.answers.q0 = { ...answered(r.questions[0]), selected: 'missing' }; },
    r => { r.answers.q0 = { ...answered(r.questions[0]), correct: false }; },
    r => { r.questions[0].opts = ['A','A','C','D']; },
    r => { r.finished = true; },
    r => { r.questionCycles = [1]; }
  ]) { const active = makeRun(ids(10)); mutate(active); assertPreservedReadonly(state({active})); }
});

test('active reservations cannot remain available in a structurally valid pool', () => {
  const draw = drawQuestionIds(ids(35),null,{rng:()=>.371}), active = roundRun(draw);
  const bad = clone(draw.pool), id = active.questions[0].id; bad.usedIds = bad.usedIds.filter(q => q !== id); bad.remainingIds.unshift(id);
  assert.equal(validQuestionPool(bad),true); assertPreservedReadonly(state({active,questionPool:bad}));
  const legacy = makeRun(draw.ids); assertPreservedReadonly(state({active:legacy,questionPool:bad}));
  assert.equal(validProgress(state({active:legacy,questionPool:draw.pool})),true);
  assertPreservedReadonly(state({active}));
});

test('every legal boundary round and answered prefix survives validation across larger pools', () => {
  let boundaries = 0;
  for (const n of [30,31,35,39,40,47,53]) {
    let pool = null;
    for (let i=0;i<30;i++) {
      const draw = drawQuestionIds(ids(n),pool,{rng:()=>.371}); pool = draw.pool;
      if (new Set(draw.questionCycles).size > 1) boundaries++;
      for (const index of [0,5,9]) for (const includeCurrent of [false,true]) {
        const active = roundRun(draw); active.index = index;
        for (const q of active.questions.slice(0,index+Number(includeCurrent))) active.answers[q.id] = answered(q);
        assert.equal(validProgress(state({active,questionPool:pool})),true,`size ${n}, round ${i}, index ${index}`);
        if (index === 9 && includeCurrent) { active.finished = true; assert.equal(validProgress(state({active,questionPool:pool})),true); }
      }
      if (new Set(draw.questionCycles).size > 1) {
        const active = roundRun(draw), bad = clone(pool), priorId = active.questions[0].id;
        bad.remainingIds = bad.remainingIds.filter(id => id !== priorId); bad.usedIds.push(priorId);
        assert.equal(validQuestionPool(bad),true); assertPreservedReadonly(state({active,questionPool:bad}));
      }
    }
  }
  assert.ok(boundaries > 20);
});

test('partial, reversed or mismatched cycle metadata stays read-only', () => {
  let pool = null, draw;
  for(let i=0;i<4;i++){ draw = drawQuestionIds(ids(35),pool,{rng:()=>.371}); pool = draw.pool; }
  for(const mutate of [
    r => { delete r.poolSize; },
    r => { r.poolSize = 1; },
    r => { r.questionCycles.reverse(); },
    r => { r.questionCycles[0] = 0; },
    r => { r.questionCycles.pop(); },
    r => { r.poolCycleEnd++; }
  ]) { const active = roundRun(clone(draw)); mutate(active); assertPreservedReadonly(state({active,questionPool:pool})); }
});

function setupDOM() {
  const {window:domWindow} = parseHTML('<html><head></head><body><button id="opener">open</button></body></html>');
  const window = new Proxy(domWindow,{get(target,key){return key === 'navigator' ? globalThis.navigator : Reflect.get(target,key);}});
  globalThis.window = window; globalThis.document = window.document;
  const held = new Set(), locks = { async request(key,options,callback) { await Promise.resolve(); if(held.has(key))return callback(null); held.add(key); try{return await callback({name:key});}finally{held.delete(key);} } };
  Object.defineProperty(globalThis,'navigator',{configurable:true,value:{locks}});
  globalThis.location = {hostname:'localhost',href:'http://localhost/preview'};
  globalThis.history = {state:{host:'original'},pushState(s){this.state=s;},replaceState(s){this.state=s;},back(){this.state={host:'original'};window.dispatchEvent(new window.Event('popstate'));}};
  globalThis.localStorage = memory(); window.speechSynthesis = {cancel(){}};
  window.HTMLElement.prototype.showModal = function(){this.open=true;}; window.HTMLElement.prototype.close = function(){this.open=false;};
  window.HTMLElement.prototype.focus = function(){Object.defineProperty(document,'activeElement',{configurable:true,value:this});};
  globalThis.fetch = async url => new Response(JSON.stringify(String(url).endsWith('catalog.json') ? catalog : content),{status:200});
}
const click = selector => { const node=document.querySelector(selector); assert.ok(node,selector); node.click(); };
const finishRound = () => { while(document.querySelector('.sc-question')) { if(document.querySelector('[data-option-index]:not([disabled])')){click('[data-option-index]');click('.sc-submit');} click('.sc-next'); } };

test('legacy migration consumes interrupted and completed allocations without rewriting them', async t => {
  setupDOM(); const engine=createCurriculumEngine(catalog,content), questions=engine.createRound('u',{count:35,allowCandidate:true,rng:()=>.371}).questions;
  const prior={...makeRun([],'interrupted10'),questions:questions.slice(0,10)};
  const active={...makeRun([],'active5'),questions:questions.slice(10,15)};
  const attempt={id:'completed5',answers:questions.slice(15,20).map(answered),total:5,correct:5};
  const old=state({active,interrupted:[prior],attempts:[attempt]});
  const key=PREFIX+'legacy-history';localStorage.setItem(key,JSON.stringify(old));
  const close=await openScienceCurriculum({learnerId:'legacy-history',unitId:'u'});t.after(close);
  const next=JSON.parse(localStorage.getItem(key)), unit=next.units.u;
  assert.deepEqual(unit.interrupted,[clone(prior),clone(active)]); assert.deepEqual(unit.attempts,[attempt]);
  assert.ok(unit.active.questions.every(q=>!questions.slice(0,20).some(p=>p.id===q.id)));
  assert.equal(unit.questionPool.cycle,1);assert.equal(unit.questionPool.remainingIds.length,5);
});

test('legacy ten-question resume reserves IDs and next round excludes them', async t => {
  setupDOM();const engine=createCurriculumEngine(catalog,content),round=engine.createRound('u',{count:10,allowCandidate:true,rng:()=>.371});
  const active={...makeRun([]),questions:round.questions};active.answers[active.questions[0].id]=answered(active.questions[0]);
  const key=PREFIX+'legacy-ten';localStorage.setItem(key,JSON.stringify(state({active})));
  const close=await openScienceCurriculum({learnerId:'legacy-ten',unitId:'u'});t.after(close);
  assert.deepEqual(JSON.parse(localStorage.getItem(key)).units.u.active,clone(active));finishRound();
  [...document.querySelectorAll('button')].find(b=>b.textContent==='再練一回').click();
  const next=JSON.parse(localStorage.getItem(key)).units.u;assert.ok(next.active.questions.every(q=>!active.questions.some(prior=>prior.id===q.id)));
});

test('close callback identifies a requested history traversal, but not host-driven dismissal', async () => {
  setupDOM();let result;let close=await openScienceCurriculum({learnerId:'history-close',onClose:value=>result=value});await close();assert.equal(result.historyBackRequested,true);
  setupDOM();close=await openScienceCurriculum({learnerId:'history-close',onClose:value=>result=value});close(true,'map-closed');assert.equal(result.historyBackRequested,false);assert.equal(result.reason,'map-closed');
});

test('quick close and reopen waits for old asynchronous popstate before mounting the new dialog',async t=>{
  setupDOM();const queue=[];history.back=()=>queue.push(()=>{history.state={host:'original'};window.dispatchEvent(new window.Event('popstate'));});
  let notified=0;const first=await openScienceCurriculum({learnerId:'quick-reopen',onClose:()=>notified++});
  const closed=first();assert.equal(document.querySelector('dialog'),null);assert.equal(notified,0);
  const opening=openScienceCurriculum({learnerId:'quick-reopen'});await new Promise(resolve=>setTimeout(resolve,0));
  assert.equal(document.querySelector('dialog'),null);assert.equal(queue.length,1);
  queue.shift()();await closed;const second=await opening;t.after(()=>second(true));
  assert.equal(notified,1);assert.ok(document.querySelector('dialog'));assert.equal(queue.length,0);
});

test('history API failure still cleans the session and lease, reports bounded metadata and permits reopening',async t=>{
  setupDOM();const notices=[];
  const close=await openScienceCurriculum({learnerId:'history-failed',onClose:value=>notices.push(value)});
  history.back=()=>{throw Error('private native history details');};
  await close();assert.equal(document.querySelector('dialog'),null);assert.equal(notices.length,1);
  assert.deepEqual(notices[0],{fromHistory:false,reason:'close',historyBackRequested:false,historyError:true});
  assert.equal(JSON.stringify(notices).includes('private'),false);await close();assert.equal(notices.length,1);
  const reopened=await openScienceCurriculum({learnerId:'history-failed',unitId:'u'});t.after(()=>reopened(true));
  assert.ok(document.querySelector('.sc-question'),'the same learner must reacquire the released lease');
  assert.doesNotMatch(document.body.textContent,/另一個分頁|private native/);
});
