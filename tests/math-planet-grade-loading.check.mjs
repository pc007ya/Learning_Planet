import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createGradeResources } from '../modules/math-grade-resources.mjs';
const read = path => fs.readFileSync(new URL('../' + path, import.meta.url), 'utf8');
function harness(fail = () => false) {
  const context = vm.createContext({});
  const requests = [];
  const loader = createGradeResources(async path => {
    requests.push(path);
    if (fail(path)) throw Error('Offline');
    vm.runInContext(read(path.split('?')[0]), context);
  }, context);
  return { ...loader, context, requests };
}
test('no initial loads, grade one fetches only its foundations engine', async () => {
  const h = harness();
  assert.deepEqual(h.requests, []);
  await h.ensureGrade(1);
  assert.deepEqual(h.requests, ['modules/math-foundations/model.js']);
  assert.equal(h.context.MathFoundations.session('u109', 3).length, 3);
});
test('all grades work in nonsequential order without fetching other upper grades', async () => {
  const h = harness();
  for (const grade of [6,2,4,1,5,3]) {
    await h.ensureGrade(grade);
    assert.ok(h.context.MathFoundations);
    if (grade >= 4) {
      const units = h.context.MathUpper.units.filter(u => u.grade === grade);
      assert.ok(units.length);
      for (const unit of units) assert.equal(h.context.MathFoundations.session(unit.id, 2).length, 2, unit.id);
    }
    if (grade === 6) assert.ok(!h.requests.some(p => /grade[45]\.js/.test(p)));
  }
  assert.equal(new Set(h.requests).size, h.requests.length);
  assert.equal(new Set(h.context.MathFoundations.units.map(u => u.id)).size, h.context.MathFoundations.units.length);
});
test('failed grade request can retry, concurrent callers share requests', async () => {
  let failed = false;
  const h = harness(path => /grade5/.test(path) && !failed && (failed = true));
  await assert.rejects(h.ensureGrade(5), /Offline/);
  await Promise.all([h.ensureGrade(5), h.ensureGrade(5), h.ensureGrade(4)]);
  assert.equal(h.requests.filter(p => /grade5/.test(p)).length, 2);
  assert.equal(h.requests.filter(p => /core/.test(p)).length, 1);
  assert.equal(h.context.MathFoundations.session('u147', 2).length, 2);
});
test('navigation and session changes invalidate pending course actions', () => {
  const owner = { state: {screen:'map',subject:'math',grade:4,currentId:'student'}, sessionGeneration:1 };
  const methods = read('index.html').match(/  captureMathNavigation\(\) \{[\s\S]*?(?=\n  setMathMapView)/)[0];
  const guard = new Function('return class {' + methods + '}')();
  Object.setPrototypeOf(owner,guard.prototype);
  const snapshot = owner.captureMathNavigation();
  assert.equal(owner.matchesMathNavigation(snapshot),true);
  owner.state.grade = 5;
  assert.equal(owner.matchesMathNavigation(snapshot),false);
  owner.state.grade = 4;
  owner.mathResourceNavigation = 1;
  assert.equal(owner.matchesMathNavigation(snapshot),false);
});

test('entry and inactive views contain no eager grade engine or embedded picture requests', () => {
  assert.doesNotMatch(read('index.html'), /<script[^>]+src="[^"\n]*modules\/math-(?:foundations\/model|concepts\/(?:model|upper\/))/);
  assert.doesNotMatch(read('modules/math-mission-map/view.mjs'), /^import .*planet-(?:art-v2-)?view/m);
  assert.doesNotMatch(read('home-resources.js'), /ensureMathObjects\(\)\.then/);
  assert.doesNotMatch(read('math-concepts.html'), /upper\/grade[456]\.js/);
  assert.match(read('index.html'), /request !== this.mathCourseRequest/);
});

test('production course launcher suppresses stale, duplicate, and failed completions', async () => {
  const source = read('index.html');
  const methods = source.match(/  captureMathNavigation\(\) \{[\s\S]*?(?=\n  setMathMapView)/)[0];
  const start = source.match(/  async startUnit\(id\) \{[\s\S]*?(?=    clearTimeout\(this.autoNextTimer\))/)[0]
    .replace(/await import\("\.\/modules\/math-grade-resources.mjs"\)/, 'await suppliedImport()') + 'this.launched.push(id);\n}';
  const gates = [];
  const suppliedImport = async () => ({ensureGrade:() => new Promise((resolve,reject) => gates.push({resolve,reject}))});
  const Host = new Function('suppliedImport','MATH_UNITS','window','return class {'+methods+start+'}')
    (suppliedImport,[{id:'u109',grade:1,foundation:true}],{});
  const h = new Host();
  h.state = {screen:'map',subject:'math',grade:1,currentId:'student'};
  h.launched = []; h.messages = []; h.flash = message => h.messages.push(message);
  const flush = async () => { await Promise.resolve(); await Promise.resolve(); };
  const first = h.startUnit('u109'); await flush();
  h.state.grade = 2; gates.shift().resolve(); await first;
  assert.deepEqual(h.launched,[]);
  h.state.grade = 1;
  const second = h.startUnit('u109'), third = h.startUnit('u109'); await flush();
  gates.shift().resolve(); gates.shift().resolve(); await Promise.all([second,third]);
  assert.deepEqual(h.launched,['u109']);
  const fourth = h.startUnit('u109'); await flush();
  gates.shift().reject(Error('Offline')); await fourth;
  assert.match(h.messages.at(-1),/重試/);
  assert.deepEqual(h.launched,['u109']);
});

for (const [grade, broken] of [[1,'math-foundations/model'],[2,'upper/core'],[3,'math-concepts/model'],[4,'upper/grade4']]) {
  test(`HTTP-success without ${broken} exports rejects and can retry`, async () => {
    const context=vm.createContext({}); let omit=true;
    const loader=createGradeResources(async path => {
      if (omit && path.includes(broken)) return; // script.onload, but no execution/API
      vm.runInContext(read(path.split('?')[0]),context);
    },context);
    await assert.rejects(loader.ensureGrade(grade),/did not initialize/);
    omit=false;
    await loader.ensureGrade(grade);
    assert.equal(context.MathFoundations.session(grade===1?'u109':grade===4?'u125':'u118',2).length,2);
  });
}
test('partially executed upper script cannot leave duplicate units after retry', async () => {
  const context=vm.createContext({});let partial=true;
  const loader=createGradeResources(async path=>{
    if(partial && path.includes('upper/grade5')){
      context.MathUpper.define(147,5,'Partial',()=>({}));return;
    }
    vm.runInContext(read(path.split('?')[0]),context);
  },context);
  await assert.rejects(loader.ensureGrade(5),/did not initialize/);
  assert.equal(context.MathUpper.units.filter(u=>u.grade===5).length,0);
  partial=false;await loader.ensureGrade(5);
  assert.equal(context.MathUpper.units.filter(u=>u.grade===5).length,24);
  assert.equal(new Set(context.MathFoundations.units.map(u=>u.id)).size,context.MathFoundations.units.length);
});
