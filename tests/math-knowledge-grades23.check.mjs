import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as second from '../modules/math-knowledge/grade2.mjs';
import * as third from '../modules/math-knowledge/grade3.mjs';
import { practiceStatus } from '../modules/math-knowledge/shared.mjs';
import { labMarkup, changeLab } from '../modules/math-knowledge/labs.mjs';
import { constellationFrame } from '../modules/math-knowledge/layout.mjs';
import { openKnowledgeMap } from '../modules/math-knowledge/launch.mjs';
import { REVISION, OrthographicCamera, Vector3 } from '../modules/math-knowledge/vendor/three-r187/three.core.js';
const index=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
for(const [grade,data,count,coreCount] of [[2,second,28,21],[3,third,23,26]]) {
  const courses=JSON.parse(fs.readFileSync(new URL(`../modules/math-knowledge/courses-grade${grade}.json`,import.meta.url)));
  test(`grade ${grade}: every current course, short illustration and curriculum code is reachable`,()=>{
    const actual=index.split('\n').filter(line=>new RegExp(`\\{ id: "u\\d+", grade: ${grade}, displayCode:`).test(line)).map(line=>Object.fromEntries([['id','id'],['code','displayCode'],['title','title']].map(([key,field])=>[key,line.match(new RegExp(field+': "([^"]+)"'))[1]])));
    assert.equal(actual.length,count);assert.deepEqual(courses,actual);assert.deepEqual(data.courseOrder,actual.map(c=>c.id));
    assert.equal(data.nodes.filter(n=>n.scope==='core').length,coreCount);
    assert.deepEqual(new Set(data.nodes.flatMap(n=>n.units)),new Set(data.courseOrder));
    assert.deepEqual(new Set(data.nodes.filter(n=>n.scope==='core').flatMap(n=>n.standards)),new Set(Object.keys(data.curriculum.standards)));
    assert.equal(new Set(data.nodes.map(n=>n.id)).size,data.nodes.length);
    for(const n of data.nodes){
      assert.ok(data.groups.some(g=>g.id===n.group),n.id);assert.ok([...n.visual.caption].length<=8,n.id);
      assert.ok(fs.existsSync(new URL('../'+n.visual.art,import.meta.url)),n.visual.art);
      assert.ok(n.units.length||n.lab,n.id+' needs an activity');
      if(n.lab)assert.ok(labMarkup(n.lab).includes('<svg'),n.lab);
      for(const id of n.units)assert.ok(data.courseOrder.includes(id));
    }
  });
  test(`grade ${grade}: connected paths are acyclic and visible in the tablet camera`,()=>{
    assert.equal(REVISION,'187');
    const seen=new Set(),stack=new Set();
    function visit(id){assert.ok(!stack.has(id),'cycle '+id);if(seen.has(id))return;stack.add(id);for(const e of data.edges.filter(e=>e.from===id))visit(e.to);stack.delete(id);seen.add(id);}
    for(const e of data.edges){assert.ok(data.nodes.some(n=>n.id===e.from)&&data.nodes.some(n=>n.id===e.to));assert.ok(e.reason.length>8);}
    data.nodes.forEach(n=>visit(n.id));
    for(const extensions of [false,true])for(const [width,height] of [[700,550],[508,550],[362,520]]){
      const topics=data.nodes.filter(n=>extensions||n.scope==='core'),frame=constellationFrame(topics,width,height),view=frame.viewHeight;
      const camera=new OrthographicCamera(-view*width/height/2,view*width/height/2,view/2,-view/2,.1,500);
      camera.position.set(frame.centerX,frame.centerY,150);camera.lookAt(frame.centerX,frame.centerY,0);camera.updateMatrixWorld();
      for(const n of topics){const p=new Vector3(n.position[0],n.position[1]*frame.stretch,n.position[2]).project(camera),y=(-p.y*.5+.5)*height;assert.ok(Math.abs(p.x)<1&&y>40&&y<height-80,`${n.id} at ${width}`);}
    }
  });
  test(`grade ${grade}: standalone links retain grade through login`,()=>{
    const routeCode=fs.readFileSync(new URL('../home-routes.js',import.meta.url),'utf8'),actions=[];
    const state={screen:'login',grade:1,teacher:false};
    const context={URL,URLSearchParams,location:{search:`?planet=math&grade=${grade}&knowledgeUnit=${courses[0].id}`,href:'https://learnplanet.win/index.html',pathname:'/index.html'},document:{baseURI:'https://learnplanet.win/',querySelector:()=>null,dispatchEvent(){},addEventListener(){}},history:{pushState(){},replaceState(){}},addEventListener(){},Event,requestAnimationFrame:()=>{}};context.window=context;
    vm.runInNewContext(routeCode,context);
    const owner={state,setState(patch,done){Object.assign(state,patch);done?.();},startKnowledgeUnit:id=>actions.push(id)};
    context.LPHomeRoutes.sync(owner);assert.equal(actions.length,0);state.screen='home';context.LPHomeRoutes.sync(owner);
    assert.equal(state.grade,grade);assert.deepEqual(actions,[courses[0].id]);context.LPHomeRoutes.sync(owner);assert.equal(actions.length,1);
  });
  test(`grade ${grade}: host action callbacks isolate learner and grade`,async()=>{
    const source=index.match(/  async openMathKnowledge\(\) \{[\s\S]*?\n  \}\n\n  startUnit/)[0].replace(/\n\n  startUnit$/,'').replace(/await import\("\.\/modules\/math-knowledge\/launch\.mjs[^"\n]*"\)/,'await suppliedImport()');
    let opened;const actions=[],target=courses[0];
    const runtime={MATH_UNITS:courses.map(c=>({...c,grade,displayCode:c.code})),VIDEO_LIB:{[target.id]:{}},dailyMasteryRound:()=>0,document:{querySelector:()=>({click:()=>actions.push('teaching')})},suppliedImport:async()=>({openKnowledgeMap:args=>{opened=args;return()=>{};}}),console};
    const methods=vm.runInNewContext('({'+source+'})',runtime);
    const host={...methods,state:{subject:'math',grade,currentId:'learner-A'},prof:()=>({cleared:[target.id],name:'private'}),loadLearningData:async()=>{},startUnit:id=>actions.push('practice:'+id),startVideo:id=>actions.push('video:'+id),flash:message=>assert.fail(message)};
    await host.openMathKnowledge();assert.equal(opened.grade,grade);assert.equal(opened.courses.length,count);assert.ok(opened.records[target.id].practiced);assert.ok(!JSON.stringify(opened).includes('private'));
    const course=opened.courses[0];await opened.onAction('practice',course);await opened.onAction('video',course);await opened.onAction('teaching',course);
    assert.deepEqual(actions,['practice:'+target.id,'video:'+target.id,'teaching']);
    host.state.grade=1;await opened.onAction('practice',course);assert.equal(actions.length,3);
    host.state.grade=grade;host.state.currentId='learner-B';await opened.onAction('practice',course);assert.equal(actions.length,3);
  });
}
test('grade two keeps formal division and non-unit fractions outside core, demo use does not invent progress',()=>{
  for(const id of ['sharing','fraction']){const n=second.nodes.find(n=>n.id===id);assert.equal(n.scope,'core');assert.equal(n.units.length,0);assert.ok(!practiceStatus(n,{u9:{practiced:true},u10:{practiced:true}}).practiced);}
  for(const id of ['division','fractions','cubes'])assert.equal(second.nodes.find(n=>n.id===id).scope,'extension');
  assert.ok(!labMarkup('sharing').includes('÷'));
  changeLab('banknotes','m0');changeLab('banknotes','m0');assert.ok(labMarkup('banknotes').includes('0 元'));
  changeLab('banknotes','p1');assert.ok(labMarkup('banknotes').includes('500 元'));
  changeLab('banknotes','p2');assert.ok(labMarkup('banknotes').includes('1500 元'));
  assert.equal((labMarkup('inverse').match(/<circle /g)||[]).length,8);changeLab('inverse','next');assert.equal((labMarkup('inverse').match(/<circle /g)||[]).length,8);
  for(let i=0;i<2;i++){const net=labMarkup('nets');assert.equal((net.match(/<rect /g)||[]).length,6);for(const m of net.matchAll(/width="(\d+)" height="(\d+)"/g))assert.equal(m[1],m[2]);changeLab('nets','next');}
});
test('all grade pages share a compact return arrow and have no animation button',()=>{
  for(const g of [1,2,3]){const html=fs.readFileSync(new URL(`../math-knowledge-grade${g}.html`,import.meta.url),'utf8');assert.ok(!html.includes('topbar'));assert.ok(!html.includes('id="motion"'));assert.ok(html.includes('<div class="eyebrow"><button id="back"'));assert.ok(html.includes(`data-grade="${g}"`));}
});
