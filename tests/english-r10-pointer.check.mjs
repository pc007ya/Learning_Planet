import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as T from '../modules/math-knowledge/vendor/three-r187/three.module.js';
import {gardenLayout,gardenCameraFit,englishLabelLayout,gardenStationSignPosition,pickGardenGround,advance} from '../modules/english-original/english-exploration-r10.mjs';
import {buildGarden,gardenRoadPaths,createGardenNavigation} from '../modules/english-original/english-garden-world-r10.mjs';
const source=readFileSync(new URL('../base/modules/english-original/index.html',import.meta.url),'utf8');
const data=JSON.parse(source.match(/^const DATA=(.*);$/m)[1]);
function makeScene(units){
 const nodes=gardenLayout(units),nav=createGardenNavigation(nodes),scene=new T.Scene();
 const own=x=>x,color=(x,e)=>new T.MeshStandardMaterial({color:x,...e});
 function mesh(parent,geometry,material,pos=[0,0,0]){
  const m=new T.Mesh(geometry,material);m.position.set(...pos);parent.add(m);return m;
 }
 const garden=buildGarden(T,{scene,nodes,mesh,color,own,nav,roads:gardenRoadPaths(nodes,nav)});
 scene.updateMatrixWorld(true);
 return {nodes,nav,garden};
}
function camera(width,height){
 const {aspect,overview:r}=gardenCameraFit(width,height);
 const theta=.08,phi=.63,c=new T.PerspectiveCamera(43,aspect,.1,100);
 c.position.set(r*Math.sin(phi)*Math.sin(theta),r*Math.cos(phi),r*Math.sin(phi)*Math.cos(theta));
 c.lookAt(0,0,0);c.updateMatrixWorld(true);return c;
}
test('actual rendered meadow, bridge and roads are pickable in 6 grades and 3 screen sizes; sea, pond and buildings are not',()=>{
 for(const grade of [1,2,3,4,5,6]){
  const {nodes,nav,garden}=makeScene(data.units.filter(u=>u.grade===grade));
  for(const [w,h] of [[1100,500],[620,460],[320,390]]){
   const c=camera(w,h),ray=new T.Raycaster(),projected=(x,y,z)=>new T.Vector3(x,y,z).project(c);
   for(const [x,y,z] of [[-1.1,.07,-3.05],[0,.211,0],[1.1,.07,3.05]]){
    const p=projected(x,y,z);ray.setFromCamera(new T.Vector2(p.x,p.y),c);
    const got=pickGardenGround(ray,garden.walkMeshes,nav);
    assert.ok(got&&Math.hypot(got.x-x,got.z-z)<.1,JSON.stringify({grade,w,x,y,z,got}));
    const from={x:nodes[0].x,z:nodes[0].z+.5};
    const path=nav.path(from,got);
    assert.ok(path&&path.length);
    for(let i=0;i<2000&&path.length;i++)advance(from,path,.05,nav);
    assert.ok(Math.hypot(from.x-got.x,from.z-got.z)<.013);
   }
   for(const [x,y,z] of [[2,.07,0],[nodes[0].x,.07,nodes[0].z-.6],[20,0,0]]){
    const p=projected(x,y,z);ray.setFromCamera(new T.Vector2(p.x,p.y),c);
    assert.equal(pickGardenGround(ray,garden.walkMeshes,nav),null);
   }
  }
 }
});
test('at overview all eight title plaques pack without overlap for one narrow phone, tablet and desktop',()=>{
 for(const grade of [1,2,3,4,5,6]){
  const nodes=gardenLayout(data.units.filter(u=>u.grade===grade));
  for(const [w,h] of [[1100,500],[620,460],[320,390],[284,285]]){
   const c=camera(w,h);
   const pts=nodes.map(n=>{
     const at=gardenStationSignPosition(n),p=new T.Vector3(n.x,at.y,n.z-.6).project(c);
     return {x:(1+p.x)*w/2,y:(1-p.y)*h/2,z:p.z,ndcX:p.x,ndcY:p.y};
   });
   const rects=englishLabelLayout(pts,w,h);
   assert.ok(rects.every(Boolean),JSON.stringify({grade,w,h,rects}));
   for(const [i,a] of rects.entries()){
    assert.ok(a.x>=3&&a.y>=54&&a.x+a.w<=w&&a.y+a.h<h);
    for(const b of rects.slice(i+1))assert.ok(a.x+a.w<=b.x||b.x+b.w<=a.x||a.y+a.h<=b.y||b.y+b.h<=a.y,JSON.stringify({w,h,i,a,b}));
   }
  }
 }
});
