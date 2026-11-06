import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import { catalog } from '../modules/math-knowledge/catalog.mjs';
import { crossGrade } from '../modules/math-knowledge/cross-grade.mjs';
import { openKnowledgeMap } from '../modules/math-knowledge/launch.mjs';

const read = path => fs.readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const runtime = vm.createContext({});
for (const script of ['math-foundations/model.js', ...['core','grade4','grade5','grade6'].map(name=>`math-concepts/upper/${name}.js`), 'math-concepts/model.js']) {
  vm.runInContext(read('modules/' + script), runtime);
}
function rng() {
  let seed = 127591;
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 2**32;
  };
}

test('grades 4–6 map every curriculum code to a real unit and every new unit to a working practice bank', () => {
  const index = read('index.html');
  for (const [grade, count, codes] of [[4,26,26],[5,27,27],[6,17,19]]) {
    const map = catalog[grade];
    const courses = JSON.parse(read(`modules/math-knowledge/courses-grade${grade}.json`));
    const rows = [...index.matchAll(new RegExp(`id: "(u\\d+)", grade: ${grade}, displayCode: "([^"]+)"[^\\n]+?title: "([^"]+)"`, 'g'))].map(([,id,code,title])=>({id,code,title}));
    assert.equal(courses.length, count);
    assert.deepEqual(courses, rows);
    assert.deepEqual(map.courseOrder, rows.map(row=>row.id));
    assert.deepEqual(new Set(map.nodes.flatMap(n=>n.units)), new Set(map.courseOrder));
    assert.equal(Object.keys(map.curriculum.standards).length,codes);
    assert.deepEqual(new Set(map.nodes.flatMap(n=>n.standards)), new Set(Object.keys(map.curriculum.standards)));
    for (const node of map.nodes) {
      assert.ok(fs.existsSync(new URL('../'+node.visual.art,import.meta.url)), node.visual.art);
      assert.ok(crossGrade.some(([, , g, id])=>g===grade&&id===node.id), node.id);
    }
    for (const edge of map.edges) assert.ok(map.nodes.some(n=>n.id===edge.from) && map.nodes.some(n=>n.id===edge.to), edge.to);
  }
  const upper = runtime.MathUpper.units;
  assert.equal(upper.filter(unit=>Number(unit.id.slice(1))>=138).length,49);
  for (const unit of upper) {
    assert.ok(catalog[unit.grade].courseOrder.includes(unit.id), unit.id);
    assert.equal(runtime.MathFoundations.byId(unit.id).title,unit.title);
    const questions = runtime.MathFoundations.session(unit.id,20,rng());
    assert.equal(questions.length,20,unit.id);
    for (const q of questions) {
      assert.ok(q.opts.includes(q.ans) && q.opts.length>=3, `${unit.id} ${q.stem}`);
      assert.ok(q.stages.length>=2);
      assert.equal(new Set(q.opts.map(String)).size,q.opts.length);
      assert.ok(q.stages.every(stage=>stage.choices.includes(stage.answer) && stage.explain));
      assert.doesNotMatch(q.picture, /NaN|undefined|Infinity/);
      assert.doesNotMatch(runtime.MathFoundations.picture(q,q.steps), /NaN|undefined|Infinity/);
    }
  }
});

test('cross-grade links reference core stars and progress payloads follow the visible grade', () => {
  for (const [from,a,to,b] of crossGrade) {
    assert.ok(from<to);
    assert.ok(catalog[from].nodes.some(node=>node.id===a&&node.scope==='core'),`${from}:${a}`);
    assert.ok(catalog[to].nodes.some(node=>node.id===b&&node.scope==='core'),`${to}:${b}`);
  }
  const saved = {window:globalThis.window,document:globalThis.document,location:globalThis.location};
  const sent = [], actions = [], listeners = new Map();
  const origin = 'https://learnplanet.win';
  const frame = {style:{},src:'',contentWindow:{postMessage:payload=>sent.push(payload),location:{replace:url=>{frame.src=url;}}}};
  const dialog = {dataset:{},style:{},setAttribute(){},append(){},addEventListener(){},showModal(){},close(){},remove(){}};
  globalThis.location = {origin};
  globalThis.window = {addEventListener:(type,fn)=>listeners.set(type,fn),removeEventListener:type=>listeners.delete(type)};
  globalThis.document = {querySelector:()=>null,createElement:tag=>tag==='iframe'?frame:dialog,body:{append(){frame.isConnected=true;}}};
  const start = {id:'u151',code:'5-08'}, prior = {id:'u135',code:'4-15'};
  try {
    openKnowledgeMap({grade:5,courses:[start],records:{u151:{practiced:true}},forGrade:g=>g===4?{courses:[prior],records:{u135:{practiced:true}}}:null,onAction:(action,course)=>actions.push([action,course.id])});
    const dispatch = data => listeners.get('message')({origin,source:frame.contentWindow,data});
    dispatch({type:'lp-knowledge-jump',grade:5,targetGrade:4,node:'missing'});
    assert.match(frame.src,/grade5\.html/);
    dispatch({type:'lp-knowledge-jump',grade:5,targetGrade:4,node:'equivalent'});
    assert.match(frame.src,/grade4\.html.*node=equivalent/);
    dispatch({type:'lp-knowledge-ready',grade:5});
    assert.equal(sent.length,0);
    dispatch({type:'lp-knowledge-ready',grade:4});
    assert.deepEqual(sent[0].courses,[prior]);
    assert.deepEqual(sent[0].records,{u135:{practiced:true}});
    dispatch({type:'lp-knowledge-action',grade:4,action:'practice',unitId:'u151'});
    assert.equal(actions.length,0);
    dispatch({type:'lp-knowledge-action',grade:4,action:'practice',unitId:'u135'});
    assert.deepEqual(actions,[['practice','u135']]);
  } finally { Object.assign(globalThis,saved); }
});

test('fraction practice uses different denominators and quotients round at the requested place', () => {
  const random = rng();
  for (let i=0;i<120;i++) {
    const q = runtime.MathConcepts.question('u151',i,random);
    const [, a, b, op, c, d] = q.stem.match(/(\d+)\/(\d+) ([＋−]) (\d+)\/(\d+)/);
    assert.notEqual(b,d);
    const expected = (+a*+d + (op==='＋'?1:-1)*+c*+b)/(+b*+d);
    const [n,k=1] = String(q.ans).split('/').map(Number);
    assert.equal(n/k,expected);
  }
  assert.equal(runtime.MathUpper.roundRatio(79,80,3),.988);
  assert.equal(runtime.MathUpper.roundRatio(1005,1000,2),1.01);
});
