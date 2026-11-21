import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Vector3} from '../modules/math-knowledge/vendor/three-r187/three.module.js';
import {buildDistricts,triangleY} from '../modules/chinese-planet/district-layout-r7.mjs';
import {canWalk,polar,stationsOnRing} from '../modules/chinese-planet/paths.mjs';
import {districtGroundRoute,ringGroundRoute,placementForLessonLabels} from '../modules/chinese-planet/map-navigation-r10.mjs';
import {mountWorld} from '../modules/chinese-planet/world-r9.mjs';
const lessons=stationsOnRing(['魔法文字與小小練習','小船','印手印','吹泡泡','你好我的好朋友','外星人','小金魚','紅紅的春'].map((title,i)=>({title,id:'u'+i})));
const layout=buildDistricts(lessons);
const d=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
const fixture=(grade,width=1200,height=740)=>{
 class E extends EventTarget {
  constructor(){super();this.style={};this.children=[];this.offsetWidth=120;this.offsetHeight=28;}
  append(...nodes){this.children.push(...nodes);}
  remove(){}
 }
 const doc=new EventTarget(),canvas=new E(),frames=new Map(),root=new E();
 root.clientWidth=width;root.clientHeight=height;
 doc.createElement=()=>new E();doc.hidden=false;
 canvas.getBoundingClientRect=()=>({left:0,top:0,width,height});
 let fid=0,scene,cam,clock=1000,unavailable;
 const win={devicePixelRatio:1,requestAnimationFrame(fn){frames.set(++fid,fn);return fid;},cancelAnimationFrame(id){frames.delete(id);},ResizeObserver:class{observe(){}disconnect(){}},matchMedia:()=>({matches:true})};
 const picks=[],arrivals=[],grounds=[];
 const world=mountWorld(root,lessons,grade,{onPick:id=>picks.push(id),onArrive:id=>arrivals.push(id),onGround:()=>grounds.push(true),onUnavailable:x=>{unavailable=x;}},
  {win,doc,makeRenderer:()=>({domElement:canvas,setPixelRatio(){},setSize(){},dispose(){},forceContextLoss(){},render(s,c){scene=s;cam=c;scene.updateMatrixWorld(true);cam.updateMatrixWorld(true);}})});
 function step(count=1){for(let n=0;n<count;n++){const next=frames.entries().next().value;assert.ok(next,unavailable||'RAF missing');frames.delete(next[0]);next[1](clock);clock+=33;}}
 step();
 function click(point,drag=0){
  const p=new Vector3(point.x,point.y,point.z).project(cam);
  const x=(p.x+1)*width/2,y=(1-p.y)*height/2;
  for(const [type,dx] of [['pointerdown',0],['pointermove',drag],['pointerup',0]]){
   const e=new Event(type);Object.assign(e,{pointerId:1,button:0,clientX:x+dx,clientY:y,isPrimary:true});canvas.dispatchEvent(e);
  }
 }
 return {root,world,picks,arrivals,grounds,click,step,scene,frames};
};
const mid=e=>e.samples[Math.floor(e.samples.length*.56)];

test('district path moves across both banks using actual safe deck samples, then navigates back to a lesson',()=>{
 const a=layout.nodes.get(layout.spawnAt),bridge=layout.edges.find(e=>e.kind==='bridge'),t=mid(bridge);
 const p=districtGroundRoute(layout,a,t,{sourceNode:layout.spawnAt});
 assert.ok(p?.length>15);assert.ok(d(p.at(-1),t)<.04);assert.ok(p.at(-1).y>0);
 const next=layout.stations.at(-1);
 const q=districtGroundRoute(layout,p.at(-1),next.porch,{stationId:next.id});
 assert.ok(q?.length>15);assert.ok(d(q.at(-1),next.porch)<.001);
 for(const path of [p,q])for(const [i,v] of path.entries()){
  if(i)assert.ok(d(v,path[i-1])<.8,'no shortcut outside safe road');
  assert.ok(layout.edges.some(e=>triangleY(v,e.deck)!==undefined||[e.a,e.b].some(id=>d(v,layout.nodes.get(id))<.67)));
 }
 assert.equal(districtGroundRoute(layout,a,{x:0,z:0},{sourceNode:layout.spawnAt}),null);
 assert.equal(districtGroundRoute(layout,a,{x:28,z:28},{sourceNode:layout.spawnAt}),null);
});
test('ring ground movement follows only the painted arc or spoke, rejecting lawn, decorative pier and water',()=>{
 const xyz=(a,r)=>{const [x,z]=polar(a,r);return {x,z,y:0};};
 const start=xyz(-.65,10),end=xyz(lessons[4].angle+.022,12.18);
 const p=ringGroundRoute(lessons,start,end);assert.ok(p?.length>30);
 assert.ok(d(p.at(-1),end)<.001);
 for(const [i,v] of p.entries()){
  assert.ok(canWalk(v.x,v.z,lessons));
  if(i){const w=p[i-1];for(let j=0;j<=8;j++)assert.ok(canWalk(w.x+(v.x-w.x)*j/8,w.z+(v.z-w.z)*j/8,lessons));}
 }
 for(const r of [0,4,14,17,24])assert.equal(ringGroundRoute(lessons,start,xyz(1,r)),null);
});
test('exact renderer camera ray: drag ignored; valid bridge click moves player; lesson clicks still arrive; pause is reversible',()=>{
 const f=fixture(1),start=layout.nodes.get(layout.spawnAt),bridge=layout.edges.find(e=>e.kind==='bridge');
 const midBridge=mid(bridge);
 f.click({x:0,y:-1.34,z:12});assert.equal(f.grounds.length,0);
 f.click(midBridge,22);assert.equal(f.grounds.length,0);
 f.click(midBridge);assert.equal(f.grounds.length,1);assert.equal(f.picks.length,0);
 f.step(180);
 assert.equal(f.arrivals.length,0,'floor move cannot unlock a lesson');
 const station=layout.stations.at(-1);
 assert.ok(f.world.select(station.course));f.step(240);
 assert.deepEqual(f.arrivals,[station.course.id]);
 assert.equal(f.root.children[1].children.length,lessons.length);
 assert.deepEqual(f.root.children[1].children.map(x=>x.textContent),lessons.map(s=>s.title));
 assert.ok(f.root.children[1].children.every(x=>x.style.visibility==='visible'));
 f.root.children[1].children[0].dispatchEvent(new Event('click'));
 assert.deepEqual(f.picks,[lessons[0].id]);
 f.world.setPaused(true);assert.equal(f.frames.size,0);f.world.setPaused(false);assert.equal(f.frames.size,1);f.world.dispose();
});
test('labels preserve all overview stations and stay inset in a mobile-sized canvas',()=>{
 const items=lessons.map((s,i)=>({title:s.title,x:92+i%2*188,y:52+Math.floor(i/2)*73,width:120,height:34,visible:true}));
 const labels=placementForLessonLabels(items,390,335);
 assert.equal(labels.length,items.length);
 assert.ok(labels.every(l=>l.display&&l.left>=5&&l.top>=5&&l.left+l.w<=385&&l.top+l.h<=330));
 assert.deepEqual(labels.map(l=>l.title),lessons.map(s=>s.title));
 for(const [i,a] of labels.entries())for(const b of labels.slice(0,i))assert.ok(a.left+a.w<=b.left||b.left+b.w<=a.left||a.top+a.h<=b.top||b.top+b.h<=a.top);
});

test('ring-map ray follows a tapped road after rejecting water and the unpainted hill',()=>{
 const f=fixture(2), point=(a,r,y=0)=>{const [x,z]=polar(a,r);return{x,y,z};};
 f.click(point(1.35,4,.1));f.click(point(1.05,23,-1.34));
 assert.deepEqual(f.grounds,[]);
 const destination=point(1.8,10,.014);
 f.click(destination);assert.equal(f.grounds.length,1);f.step(135);
 assert.deepEqual(f.arrivals,[]);
 assert.ok(f.world.select(lessons[1]));f.step(240);
 assert.deepEqual(f.arrivals,[lessons[1].id]);f.world.dispose();
});
