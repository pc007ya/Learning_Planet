'use strict';
const assert=require('node:assert/strict'),test=require('node:test'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const source=fs.readFileSync(path.join(__dirname,'../../modules/english-original/index.html'),'utf8');
const launcher=fs.readFileSync(path.join(__dirname,'../../modules/english-original/launch.mjs'),'utf8');
const lines=source.slice(source.indexOf('function gardenProgress'),source.indexOf('function initializeNavigation'));
const defs=lines.replaceAll("import('./english-exploration-r9.mjs')","load('map')").replaceAll("import('../math-knowledge/vendor/three-r187/three.module.js')","load('three')");
const runtime=source.match(/<script type="application\/x-lp-deferred" data-auth-script="text\/javascript">([\s\S]*?)<\/script>/)?.[1];
assert.ok(runtime);new vm.Script(runtime);
const unitSet=JSON.parse(runtime.match(/^const DATA=(.*);$/m)[1]).units;
function harness(){
 const events=[],mounts=[],nodes={},resolvers={},gradeButtons=[1,2,3,4,5,6].map(grade=>({
  grade,
  setAttribute(_,v){this.pressed=v;},
  getAttribute(){return String(this.grade);}
 }));
 const T={marker:'actual source dependency is r187'};
 function element(){
  return {hidden:false,value:null,children:[],attrs:{},parentElement:{},focus(){events.push(['focus',this]);},
  setAttribute(k,v){this.attrs[k]=v;},replaceChildren(){this.children=[];}};
 }
 for(const sel of ['grade','content','returnEnglishMap','navigation','gradeTabs','mapStage','mapNotice','lessonList','mapView','classicView'])nodes['#'+sel]=element();
 const api={createExplorer(stage,options){const handle={dispose(){events.push('dispose');},updateProgress(...progress){events.push(progress);}};mounts.push({stage,options});return handle;}};
 const ctx=vm.createContext({
  DATA:{units:unitSet},$:sel=>nodes[sel],document:{querySelectorAll:()=>gradeButtons},
  el(tag,text,parent){const child=element();child.text=text;child.tag=tag;parent.children.push(child);return child;},
  events,mounts,resolvers,api,T,
 });
 vm.runInContext(`
 let unit=DATA.units[0],learner=true,scopeGeneration=123,viewMode='classic',mapLesson=false,mapHandle=null,mapRequest=0;
 const progressStore={summary:id=>id==='en-g1-02'?{completed:true}:{completed:false}};
 const englishSpeech={stop:()=>events.push('stop-speech')};
 const hostActive=()=>learner,progressLabel=id=>id,
 refreshProgress=()=>{},render=()=>events.push(['render',unit.id]);
 const load=kind=>new Promise((resolve,reject)=>{(resolvers[kind]??=[]).push({resolve,reject});});
 ${defs}`,ctx);
 return {
  run:s=>vm.runInContext(s,ctx),events,nodes,mounts,resolvers,api,T,
  resolve(i){resolvers.map[i].resolve(api);resolvers.three[i].resolve(T);},
  async tick(){await new Promise(resolve=>setImmediate(resolve));},
 };
}
test('exact production page remains hosted, gated and speaker/learner progress unchanged',()=>{
 assert.equal(unitSet.length,48);
 assert.deepEqual(new Set(unitSet.map(u=>u.grade)),new Set([1,2,3,4,5,6]));
 assert.match(source,/data-page-access.*page-access.mjs/);
 assert.match(source,/if\(!window.LPEnglishCandidateHost\)throw Error/);
 assert.match(source,/progressStore.answer\(renderedUnit.id/);
 assert.match(source,/speech-r33.js/);
 assert.match(source,/hostContract\?\.signal\?\.addEventListener\?\.\('abort',disposeCandidate/);
 assert.match(launcher,/isActive\(\)/);
 assert.match(launcher,/source!==frame.contentWindow\|\|!active\(\)/);
 assert.match(launcher,/v=20261121-english-map-r9/);
 assert.doesNotMatch(source,/english-map-r26\.js/);
});
test('3D is lazy; real lessons and same-grade progress reach the explorer; return preserves selection',async()=>{
 const h=harness();
 await h.run('setEnglishContent();renderNavigation()');
 assert.deepEqual(h.resolvers,{});
 assert.equal(h.nodes['#mapStage'].hidden,true);
 h.run("showEnglishMode('map')");h.resolve(0);await h.tick();
 assert.equal(h.mounts.length,1);
 const mount=h.mounts[0];
 assert.equal(mount.options.THREE,h.T);
 assert.equal(mount.options.units.length,8);
 assert.equal(mount.options.progress['en-g1-02'].completed,true);
 assert.equal(h.nodes['#content'].hidden,true);
 mount.options.onSelect('en-g2-01');assert.equal(h.nodes['#content'].hidden,true);
 mount.options.onSelect('en-g1-02');
 assert.equal(h.nodes['#content'].hidden,false);
 assert.equal(h.nodes['#returnEnglishMap'].hidden,false);
 assert.equal(h.nodes['#navigation'].hidden,true);
 assert.equal(h.events.filter(e=>e==='dispose').length,1);
 assert.ok(h.events.find(e=>e[0]==='render'&&e[1]==='en-g1-02'));
 h.run('returnToEnglishMap()');h.resolve(1);await h.tick();
 assert.equal(h.mounts[1].options.selectedId,'en-g1-02');
 mount.options.onSelect('en-g1-03');
 assert.equal(h.nodes['#content'].hidden,true);
 h.run("showEnglishMode('classic')");
 assert.equal(h.nodes['#content'].hidden,false);
 assert.equal(h.nodes['#returnEnglishMap'].hidden,true);
 assert.equal(h.nodes['#lessonList'].children.length,8);
});
test('grade switch, inactive host, and unavailable WebGL fail closed while list remains usable',async()=>{
 const h=harness();
 h.run("showEnglishMode('map');chooseEnglishGrade(6)");
 h.resolve(0);await h.tick();
 assert.equal(h.mounts.length,0);
 h.resolve(1);await h.tick();
 assert.equal(h.mounts[0].options.units[0].id,'en-g6-01');
 h.mounts[0].options.onError(Error('no WebGL'));
 assert.equal(h.nodes['#mapStage'].hidden,true);
 assert.equal(h.nodes['#lessonList'].children.length,8);
 assert.match(h.nodes['#mapNotice'].textContent,/3D 地圖無法開啟/);
 h.run("learner=false;showEnglishMode('map')");
 assert.equal(h.resolvers.map.length,2);
 h.mounts[0].options.onSelect('en-g6-02');
 assert.equal(h.nodes['#returnEnglishMap'].hidden,true);
});
