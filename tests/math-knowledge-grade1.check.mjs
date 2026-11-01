import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { nodes, edges, groups, curriculum, courseOrder, practiceStatus } from '../modules/math-knowledge/grade1.mjs';
import { openKnowledgeMap } from '../modules/math-knowledge/launch.mjs';
import { REVISION, OrthographicCamera, Vector3 } from '../modules/math-knowledge/vendor/three-r187/three.core.js';
import { visuals, routeVisuals, actionIcon } from '../modules/math-knowledge/visuals.mjs';

const index = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const courses = JSON.parse(fs.readFileSync(new URL('../modules/math-knowledge/courses.json', import.meta.url)));

test('all existing grade-one units retain their codes and appear in the knowledge graph', () => {
  const actual = index.split('\n').filter(line => /\{ id: "u\d+", grade: 1, displayCode:/.test(line)).map(line => Object.fromEntries([['id','id'],['code','displayCode'],['title','title']].map(([key,field])=>[key,line.match(new RegExp(field+': "([^"]+)"'))[1]])));
  assert.equal(actual.length, 27);
  assert.deepEqual(courses, actual);
  assert.deepEqual(courseOrder, actual.map(c=>c.id));
  assert.deepEqual(new Set(nodes.flatMap(n=>n.units)), new Set(actual.map(c=>c.id)));
});

test('core concepts cover all Grade 1 content codes, and extensions remain optional', () => {
  const core=nodes.filter(n=>n.scope==='core');
  assert.equal(core.length,22);
  assert.equal(groups.length,7);
  assert.deepEqual(new Set(core.flatMap(n=>n.standards)),new Set(Object.keys(curriculum.standards)));
  for(const n of nodes){assert.ok(groups.some(g=>g.id===n.group));for(const id of n.units)assert.ok(courseOrder.includes(id));}
  const columns=nodes.find(n=>n.id==='columns');
  assert.equal(columns.scope,'extension');
  assert.deepEqual(columns.units,['u14','u15','u20','u21']);
  assert.ok(columns.note.includes('N-2-2'));
  assert.ok(nodes.find(n=>n.id==='calendar').note.includes('延伸'));
});

test('teaching suggestions form an acyclic graph with no missing endpoints or unexplained edges', () => {
  const seen=new Set(),stack=new Set(),ids=new Set(nodes.map(n=>n.id));
  function visit(id){if(stack.has(id))assert.fail('Cycle at '+id);if(seen.has(id))return;stack.add(id);for(const e of edges.filter(e=>e.from===id))visit(e.to);stack.delete(id);seen.add(id);}
  for(const e of edges){assert.ok(ids.has(e.from)&&ids.has(e.to));assert.ok(e.reason.length>8);assert.notEqual(e.from,e.to);}
  nodes.forEach(n=>visit(n.id));
  assert.equal(seen.size,nodes.length);
});

test('practice evidence does not become inferred mastery or leak into another learner', () => {
  const topic=nodes.find(n=>n.id==='make10');
  const first={u108:{practiced:true}};
  assert.equal(practiceStatus(topic,first).practiced,true);
  assert.equal(practiceStatus(topic,{}).practiced,false);
  assert.equal(practiceStatus(nodes.find(n=>n.id==='bonds'),first).practiced,false);
  assert.equal('mastered' in practiceStatus(topic,first),false);
});

test('the pinned r187 camera places every core node inside the tablet map', () => {
  assert.equal(REVISION,'187');
  const width=700,height=550,view=Math.max(89,119/(width/height));
  const camera=new OrthographicCamera(-view*width/height/2,view*width/height/2,view/2,-view/2,.1,500);
  camera.position.set(0,-3,150);camera.lookAt(0,-3,0);camera.updateMatrixWorld();
  for(const n of nodes.filter(n=>n.scope==='core')){const p=new Vector3(...n.position).project(camera);assert.ok(Math.abs(p.x)<1&&Math.abs(p.y)<1,n.id);}
});

test('the first Grade 1 entry precedes the unit grid and is scoped to math/grade 1', () => {
  assert.ok(index.indexOf('data-grade1-knowledge-open')<index.indexOf('<sc-for list="{{ units }}"'));
  assert.ok(index.includes('showGradeOneKnowledge: s.subject === "math" && s.grade === 1'));
  assert.ok(index.includes('this.state.currentId !== learnerId'));
});

test('frame actions require both same origin and exact frame, and reject unknown units', () => {
  const previous={document:globalThis.document,window:globalThis.window,location:globalThis.location};
  const listeners=new Map(),actions=[];
  let dialog,frame;
  const element=tag=>({tag,dataset:{},style:{},setAttribute(){},append(){},addEventListener(){},showModal(){},close(){},remove(){}});
  globalThis.location={origin:'https://learnplanet.win'};
  globalThis.window={addEventListener:(key,fn)=>listeners.set(key,fn),removeEventListener:(key)=>listeners.delete(key)};
  globalThis.document={activeElement:{focus(){}},querySelector:()=>null,body:{append(){}},createElement(tag){const e=element(tag);if(tag==='dialog')dialog=e;if(tag==='iframe'){frame=e;e.contentWindow={postMessage(){}};}return e;}};
  try{
    openKnowledgeMap({courses:[{id:'u108',hasVideo:false,hasTeaching:true}],records:{},onAction:(...args)=>actions.push(args)});
    const listener=listeners.get('message');
    const event=(origin,source,unitId,action='practice')=>({origin,source,data:{type:'lp-knowledge-action',unitId,action}});
    listener(event('https://other.example',frame.contentWindow,'u108'));
    listener(event(location.origin,{},'u108'));
    listener(event(location.origin,frame.contentWindow,'u999'));
    listener(event(location.origin,frame.contentWindow,'u108','video'));
    assert.equal(actions.length,0);
    listener(event(location.origin,frame.contentWindow,'u108'));
    assert.deepEqual(actions,[['practice',{id:'u108',hasVideo:false,hasTeaching:true}]]);
    assert.equal(listeners.has('message'),false);
  }finally{Object.assign(globalThis,previous);}
});

test('standalone links resume the chosen first-grade course after login and cannot open other grades', () => {
  const routeCode=fs.readFileSync(new URL('../home-routes.js',import.meta.url),'utf8');
  const actions=[],state={screen:'login',grade:3,teacher:false};
  const context={URL,URLSearchParams,location:{search:'?planet=math&grade=1&knowledgeUnit=u108',href:'https://learnplanet.win/index.html',pathname:'/index.html'},document:{baseURI:'https://learnplanet.win/',querySelector:()=>null,dispatchEvent(){},addEventListener(){}},history:{pushState(){},replaceState(){}},addEventListener(){},Event,requestAnimationFrame:()=>{}};
  context.window=context;
  vm.runInNewContext(routeCode,context);
  const owner={state,setState(patch,done){Object.assign(state,patch);done?.();},startKnowledgeUnit:id=>actions.push(id)};
  context.LPHomeRoutes.sync(owner);assert.equal(actions.length,0);
  state.screen='home';context.LPHomeRoutes.sync(owner);
  assert.equal(state.grade,1);assert.equal(state.subject,'math');assert.deepEqual(actions,['u108']);
  context.LPHomeRoutes.sync(owner);assert.equal(actions.length,1);
  assert.ok(index.includes('MATH_UNITS.some(u => u.id === id && u.grade === 1)'));
});

test('the production host passes only activity flags and dispatches actions for the same learner', async () => {
  const source=index.match(/  async openGradeOneKnowledge\(\) \{[\s\S]*?\n  \}\n\n  startUnit/)[0].replace(/\n\n  startUnit$/,'').replace(/await import\("\.\/modules\/math-knowledge\/launch\.mjs[^"\n]*"\)/,'await suppliedImport()');
  let opened;
  const actions=[];
  const runtime={MATH_UNITS:courses.map(c=>({...c,grade:1,displayCode:c.code})),VIDEO_LIB:{u108:{}},dailyMasteryRound:()=>0,document:{querySelector:selector=>selector.includes('1-16')?{click:()=>actions.push('teaching:u108')}:null},suppliedImport:async()=>({openKnowledgeMap:args=>{opened=args;return()=>{};}}),console};
  const methods=vm.runInNewContext('({'+source+'})',runtime);
  const host={...methods,state:{subject:'math',grade:1,currentId:'learner-A'},prof:()=>({cleared:['u104'],masteryHistory:{'2026-10-31':['u108']},mathQuestionHistory:{},name:'Do not transmit'}),loadLearningData:async()=>{},startUnit:id=>actions.push('practice:'+id),startVideo:id=>actions.push('video:'+id),flash:message=>assert.fail(message)};
  await host.openGradeOneKnowledge();
  assert.equal(opened.courses.length,27);
  assert.equal(opened.records.u104.practiced,true);
  assert.equal(opened.records.u108.practiced,true);
  assert.equal(JSON.stringify(opened).includes('Do not transmit'),false);
  const target=opened.courses.find(c=>c.id==='u108');
  await opened.onAction('practice',target);await opened.onAction('video',target);await opened.onAction('teaching',target);
  assert.deepEqual(actions,['practice:u108','video:u108','teaching:u108']);
  host.state.currentId='learner-B';await opened.onAction('practice',target);
  assert.equal(actions.length,3);
});

test('every concept has an existing short-caption illustration and exact quantity diagrams', () => {
  for(const topic of nodes){const visual=visuals[topic.id];assert.ok(visual,topic.id);assert.ok([...visual.caption].length<=8,topic.id);assert.ok(fs.existsSync(new URL('../'+visual.art,import.meta.url)),visual.art);}
  for(const group of groups)assert.ok(visuals[routeVisuals[group.id].topic]);
  const frame=fs.readFileSync(new URL('../modules/math-knowledge/icons/ten-frame.svg',import.meta.url),'utf8');
  assert.equal((frame.match(/<circle /g)||[]).length,10);
  const place=fs.readFileSync(new URL('../modules/math-knowledge/icons/place-value.svg',import.meta.url),'utf8');
  assert.equal((place.match(/fill="url\(#b\)"/g)||[]).length,10);
  for(const action of ['video','teaching','practice'])assert.ok(actionIcon(action).includes('<svg'));
  const app=fs.readFileSync(new URL('../modules/math-knowledge/app.mjs',import.meta.url),'utf8');
  assert.ok(app.includes('id="current-standard"'));
  assert.ok(!app.includes('<p class="goal">${node.goal}'));
});
