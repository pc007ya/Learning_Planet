import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { hostSource, scienceUnits, quizUnits, legacyFixture } from './legacy-fixtures.mjs';
import { validateCandidateData, createCurriculumEngine } from '../../modules/science-curriculum/engine.mjs';

const predicate = hostSource.match(/  isLegacyScienceCandidate\(id\) \{[\s\S]*?\n  \}/)[0];
const start = hostSource.slice(hostSource.indexOf('  async startUnit(id) {'), hostSource.indexOf('\n  newPlantLabState()'));
const gateway = hostSource.slice(hostSource.indexOf('  async openScienceCurriculumCandidate('), hostSource.indexOf('\n  async openNaturePlanetCandidate()')).replace('await import("./modules/science-curriculum/launch.mjs?v=20261112-v3")', 'await importCandidate()');
function host({ hostname = 'localhost', search = '?scienceCandidate=1', subject = 'science', currentId = 'learner', enabled = true } = {}, additions = {}) {
  const context = vm.createContext({ window: { LPScienceRollout: { enabled } }, SCI_UNITS: scienceUnits, URLSearchParams, location: { hostname, search }, MATH_UNITS: [], EN_UNITS: [], clearTimeout,
    dailyMasteryRound: () => { throw Error('Legacy daily gate must not run'); }, ...additions });
  const app = vm.runInContext('({' + predicate + ',' + start + ',' + gateway + '})', context);
  app.state = { subject, currentId, grade: 3 }; app.sessionGeneration = 1;
  return app;
}

test('all 18 released quiz routes bypass the old daily cap and generator on the public host without a query', async () => {
  const app = host({ hostname: 'learnplanet.win', search: '' }), calls = [];
  app.openScienceCurriculumCandidate = async id => calls.push(id);
  app.prof = () => { throw Error('Formal profile must not be accessed'); };
  app.buildScience = () => { throw Error('Old generator must not run'); };
  for (const unit of quizUnits) { assert.equal(app.isLegacyScienceCandidate(unit.id), true); await app.startUnit(unit.id); }
  assert.equal(calls.length, 18); assert.deepEqual(calls, quizUnits.map(u => u.id));
});

test('released predicate excludes five nonquiz entries, false IDs, wrong subjects, missing learner and a disabled rollout', () => {
  for (const id of ['s6','s7','s8','s20','s21','s0','s24','s01','s1-other','s-kh-g3-t1-u01','__proto__',null,undefined,1]) assert.equal(host().isLegacyScienceCandidate(id), false, String(id));
  for (const options of [{ subject: 'math' }, { currentId: null }, { enabled: false }]) for (const u of quizUnits) assert.equal(host(options).isLegacyScienceCandidate(u.id), false, JSON.stringify(options));
  for (const hostname of ['localhost', '127.0.0.1', '[::1]', 'learnplanet.win', 'preview.web.app']) for (const search of ['', '?scienceCandidate=0', '?scienceCandidate=1']) assert.equal(host({ hostname, search }).isLegacyScienceCandidate('s1'), true);
});

test('memory and mind maps retain their existing handlers and IDs', async () => {
  const app = host(), calls = [];
  app.startMemory = id => calls.push(['memory', id]); app.startMindmap = id => calls.push(['mindmap', id]);
  for (const id of ['s6','s7','s8','s20','s21']) await app.startUnit(id);
  assert.deepEqual(calls, [['memory','s6'],['mindmap','s7'],['mindmap','s8'],['mindmap','s20'],['mindmap','s21']]);
  assert.equal(scienceUnits.length, 23); assert.equal(scienceUnits.filter(u => u.kind === 'mindmap').length, 4);
});

test('shared host gateway passes exact legacy ID and mode; publisher entry remains default', async () => {
  const calls = [], app = host({}, { importCandidate: async () => ({ openScienceCurriculum: async options => { calls.push(options); return async () => {}; } }) });
  app.flash = () => { throw Error('No error expected'); };
  for (const u of quizUnits) { app.state.grade = u.grade; await app.openScienceCurriculumCandidate(u.id); }
  await app.openScienceCurriculumCandidate();
  assert.deepEqual(calls.slice(0,18).map(c => [c.curriculum,c.unitId,c.grade]), quizUnits.map(u => ['legacy',u.id,u.grade]));
  assert.equal(calls[18].curriculum, 'publisher'); assert.equal(calls[18].unitId, null);
  for (const id of ['s6','s7','s24','../catalog']) await app.openScienceCurriculumCandidate(id);
  assert.equal(calls.length,19);
});

test('host import guard retains both entry guards and abandons stale learner before opening', async () => {
  let release, called = false;
  const loaded = new Promise(r => release = r), app = host({}, { importCandidate: () => loaded });
  app.flash = () => {};
  const opening = app.openScienceCurriculumCandidate('s1'); app.state.currentId = null;
  release({ openScienceCurriculum: async () => { called = true; } }); await opening;
  assert.equal(called,false); assert.equal(app.scienceCurriculumOpening,false);
  assert.match(gateway,/this\.scienceCurriculumOpening \|\| this\.naturePlanetOpening/);
  assert.ok(start.indexOf('isLegacyScienceCandidate') < start.indexOf('dailyMasteryRound'));
  assert.ok(start.indexOf('isLegacyScienceCandidate') < start.indexOf('this.buildScience'));
});

const cards = hostSource.slice(hostSource.indexOf('    const worldUnits ='), hostSource.indexOf('    const showMathMissionMap ='));
function renderCards(enabled, hostname='learnplanet.win') {
  const app = host({ hostname, search:'', enabled });
  const profile = { dailyMastery: { date: 'kept', units: Object.fromEntries(scienceUnits.map(u => [u.id,3])) }, cleared: ['s1'], stars: { s1: 9 } };
  const before = JSON.stringify(profile), context = vm.createContext({ subjectUnits: scienceUnits, s: { subject: 'science', grade:3 }, p: profile, gradeWords: [], SCI_ICON_EL: x => x, VIDEO_LIB:{}, dailyMasteryRound: (p,id) => p.dailyMastery.units[id], masteryRoman: n => ['','I','II','III','IV'][n], app });
  const result = vm.runInContext('(function(){' + cards + ';return worldUnits;}).call(app)',context);
  assert.equal(JSON.stringify(profile),before);
  return result;
}
test('released host cards preserve historical stars/round/progress and label separate practice without disabling the entry', () => {
  const local = renderCards(true), production = renderCards(false);
  assert.deepEqual(JSON.parse(JSON.stringify(local)),JSON.parse(JSON.stringify(renderCards(true,'localhost'))));
  for (const card of local) {
    const old = production.find(u => u.id === card.id);
    assert.equal(card.round,old.round); assert.equal(card.pct,old.pct); assert.deepEqual(JSON.parse(JSON.stringify(card.stars)), JSON.parse(JSON.stringify(old.stars)));
    if (quizUnits.some(u => u.id === card.id)) { assert.equal(card.atLimit,false); assert.equal(card.btnLabel,'開始10題練習'); assert.match(card.stateLabel,/原版今日完成 III · 練習另存/); assert.equal(old.atLimit,true); }
    else { assert.equal(card.atLimit,old.atLimit); assert.equal(card.btnLabel,old.btnLabel); }
  }
});

test('legacy mode validates neutral metadata and synthetic finite pool without changing source content', () => {
  const { catalog, content } = legacyFixture(), before = JSON.stringify({ catalog, content });
  const report = validateCandidateData(catalog,content); assert.equal(report.valid,true,report.errors.join('\n')); assert.equal(report.units,18); assert.equal(report.tasks,0);
  const engine = createCurriculumEngine(catalog,content);
  for (const u of catalog.units) {
    const a=engine.createCycleRound(u.id,{allowCandidate:true}),b=engine.createCycleRound(u.id,{pool:a.pool,allowCandidate:true}),c=engine.createCycleRound(u.id,{pool:b.pool,allowCandidate:true});
    assert.equal(new Set([...a.questions,...b.questions,...c.questions].map(q => q.id)).size,30);
    assert.equal(engine.getTasks(u.id,{allowCandidate:true}).length,0);
  }
  assert.equal(JSON.stringify({ catalog, content }),before);
});
for (const [key,value] of [['grade',1],['grade',2],['subject','生活'],['publisher','康軒'],['semester',1],['school_year',115],['source_id','publisher-plan'],['id','s6'],['id','s7'],['id','s24']]) test(`legacy schema rejects fictional or excluded ${key}=${value}`, () => {
  const {catalog,content}=legacyFixture();catalog.units[0][key]=value;assert.equal(validateCandidateData(catalog,content).valid,false);
});
test('legacy schema cannot smuggle publisher activities and publisher data keeps existing validation', () => {
  const {catalog,content}=legacyFixture();catalog.units[0].activities[0].scope='current_publisher_activity';assert.equal(validateCandidateData(catalog,content).valid,false);
  delete catalog.kind;assert.equal(validateCandidateData(catalog,content).valid,false);
});
