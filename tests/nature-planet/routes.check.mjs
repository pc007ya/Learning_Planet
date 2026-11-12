import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import * as T from '../../modules/math-knowledge/vendor/three-r187/three.module.js';
import {GLTFLoader} from '../../modules/nature-planet/runtime/vendor/GLTFLoader.js';
import {createWalking,isWalkSurface} from '../../modules/nature-planet/runtime/walking.mjs';
import {createOceanMotion,prepareOceanRoute,evaluateOceanRoute,parseOceanMotionPart} from '../../modules/nature-planet/runtime/ocean-motion.mjs';
const reports=[];
const segDist=(p,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy||1)));return Math.hypot(p[0]-a[0]-t*dx,p[1]-a[1]-t*dy);};
const inside=(p,poly)=>{let odd=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])odd=!odd;}return odd;};
for(let grade=1;grade<=6;grade++){
 const base=new URL('../../modules/nature-planet/assets/',import.meta.url),d=JSON.parse(await fs.readFile(new URL(`grade${grade}-scene.json`,base))),bytes=await fs.readFile(new URL(`grade${grade}-terrain.glb`,base));
 const root=(await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'')).scene;root.updateMatrixWorld(true);
 const surfaces=[];root.traverse(o=>{if(isWalkSurface(o)){surfaces.push(o);for(const m of Array.isArray(o.material)?o.material:[o.material])m.side=T.DoubleSide;}});const walk=createWalking(T,()=>d,()=>surfaces),by=new Map(d.nodes.map(n=>[n.id,n.p]));
 const gradeReport={grade,actors:[],errors:[]};
 for(const actor of d.ambientLife.actors){
  const route=prepareOceanRoute(actor.motion.route);assert.ok(route,'valid native route');const region=d.regions.find(r=>r.id===actor.routeReview.habitat),staticObs=d.obstacles.filter(o=>!o.dynamic),samples=[],radius=.9;
  let minBuilding=Infinity,minRoad=Infinity,minBoundary=Infinity,minOther=Infinity;
  const n=720,uncertainty=route.maxSpeed*(route.period/n)/2;
  for(let i=0;i<n;i++){
   const pose=evaluateOceanRoute(actor.motion.route,route.period*i/n,undefined,actor.rotationZ),p=[actor.p[0]+pose.offset[0],actor.p[1]+pose.offset[1]];samples.push([...p,actor.p[2]]);
   assert.ok(inside(p,region.boundary));
   for(const o of staticObs)minBuilding=Math.min(minBuilding,Math.hypot(p[0]-o.x,p[1]-o.y)-o.r-radius);
   for(const [a,b]of d.edges)minRoad=Math.min(minRoad,segDist(p,by.get(a),by.get(b))-radius-1.8); // Conservatively includes the widest 3.6 m path everywhere.
   for(let j=0;j<region.boundary.length;j++)minBoundary=Math.min(minBoundary,segDist(p,region.boundary[j],region.boundary[(j+1)%region.boundary.length])-radius);
   for(const other of d.ambientLife.actors)if(other!==actor)minOther=Math.min(minOther,Math.hypot(p[0]-other.routeReview.center[0],p[1]-other.routeReview.center[1])-other.routeReview.radius-radius*2);
  }
  minBuilding-=uncertainty;minRoad-=uncertainty;minBoundary-=uncertainty;minOther-=uncertainty;
  // Runtime static mesh footprint, independent of navigation edges. 48 phase samples × 9 footprint points.
  for(let i=0;i<48;i++){const p=samples[i*15];for(let k=-1;k<8;k++){const a=k*Math.PI/4,r=k<0?0:radius,floor=walk.floor(p[0]+Math.cos(a)*r,-p[1]-Math.sin(a)*r);assert.ok(floor!==null&&Math.abs(floor-actor.p[2])<.14,`${actor.id} missing flat ground ${floor}`);}}
  // Geometry-based conservative planar articulation envelope. Covers every vertex and maximum sway angles.
  const actorRoot=root.getObjectByName(actor.id),inv=actorRoot.matrixWorld.clone().invert();let bodyBound=0;
  actorRoot.traverse(mesh=>{if(!mesh.isMesh)return;const pos=mesh.geometry.attributes.position;for(let i=0;i<pos.count;i++){
   const v=new T.Vector3().fromBufferAttribute(pos,i).applyMatrix4(mesh.matrixWorld).applyMatrix4(inv);let expansion=0;
   for(let anc=mesh.parent;anc&&anc!==actorRoot;anc=anc.parent){const p=parseOceanMotionPart(anc.userData?.oceanMotionPart);if(!p)continue;if(/(?:Foot|Leg_)/.test(anc.name))p.amplitude=.24;const pivot=anc.getWorldPosition(new T.Vector3()).applyMatrix4(inv);expansion+=2*v.distanceTo(pivot)*Math.sin(Math.abs(p.amplitude)/2);}
   bodyBound=Math.max(bodyBound,Math.hypot(v.x,v.z)+expansion);
  }});
  assert.ok(bodyBound<radius,`${actor.id} body ${bodyBound}`);
  const stat={id:actor.id,species:actor.species,period:route.period,routeLengthApprox:samples.reduce((s,p,i)=>s+Math.hypot(p[0]-samples[(i+1)%n][0],p[1]-samples[(i+1)%n][1]),0),maxSpeed:route.maxSpeed,bodyRadiusBound:bodyBound,continuousMinBuildingClearance:minBuilding,continuousMinWidestPlayerPathClearance:minRoad,continuousMinHabitatEdgeClearance:minBoundary,continuousMinAnimalClearance:minOther,continuousSamplingErrorBound:uncertainty,route:samples.filter((_,i)=>i%6===0)};
  assert.ok(minBuilding>0&&minRoad>0&&minBoundary>0&&minOther>0,JSON.stringify(stat));gradeReport.actors.push(stat);
 }
 // Initial route/collision placement is coherent even before the first tick, in static/reduced mode.
 for(const options of [{mode:'static'},{reduced:true}]){
  const frozenLife=createOceanMotion(T,root,{grade,actors:d.ambientLife.actors,obstacles:d.obstacles,...options});
  const first=d.ambientLife.actors[0],actorRoot=root.getObjectByName(first.id),obstacle=d.obstacles.find(o=>o.actorId===first.id),position=actorRoot.getWorldPosition(new T.Vector3());
  assert.ok(Math.hypot(position.x-obstacle.x,position.z+obstacle.y)<1e-5);
  assert.equal(walk.valid(obstacle.x,-obstacle.y,first.p[2]).ok,false,'restored player cannot overlap route-start body');
  const frozen=actorRoot.position.clone();frozenLife.update(0);frozenLife.update(1000);assert.ok(actorRoot.position.distanceTo(frozen)<1e-9);frozenLife.dispose();
 }
 // Exercise actual runtime movement and obstacle synchronization; then test player-yield/resume, pause, static and cleanup.
 let player=null;const initial=d.obstacles.filter(o=>o.dynamic).map(o=>({o,x:o.x,y:o.y})),life=createOceanMotion(T,root,{grade,actors:d.ambientLife.actors,obstacles:d.obstacles,getPlayerPosition:()=>player});assert.equal(life.routeCount,4);life.update(0);
 const actor=d.ambientLife.actors[0],ob=d.obstacles.find(o=>o.actorId===actor.id),actorRoot=root.getObjectByName(actor.id),start=actorRoot.position.clone();
 for(let t=100;t<=10000;t+=100)life.update(t);assert.ok(actorRoot.position.distanceTo(start)>1);
 const pos=actorRoot.getWorldPosition(new T.Vector3());assert.ok(Math.hypot(pos.x-ob.x,pos.z+ob.y)<1e-5);
 player={x:ob.x,z:-ob.y};const freeze=actorRoot.position.clone();for(let t=10100;t<=11100;t+=100)life.update(t);assert.equal(life.yieldingCount,1);assert.ok(actorRoot.position.distanceTo(freeze)<1e-9);
 player=null;life.update(11200);assert.ok(actorRoot.position.distanceTo(freeze)>0);life.setMode('static');const frozen=actorRoot.position.clone();life.update(20000);assert.ok(actorRoot.position.distanceTo(frozen)<1e-9);life.setMode('auto');life.update(20100);assert.ok(actorRoot.position.distanceTo(frozen)<1e-9);life.update(20200);assert.ok(actorRoot.position.distanceTo(frozen)>0);life.pause();const paused=actorRoot.position.clone();life.update(50000);assert.ok(actorRoot.position.distanceTo(paused)<1e-9);
 life.dispose();for(const e of initial){assert.equal(e.o.x,e.x);assert.equal(e.o.y,e.y);}assert.equal(life.actorCount,0);
 gradeReport.runtime={moves:true,dynamicCollisionCentersFollow:true,playerYields:true,resumes:true,staticFreezes:true,pauseNoJump:true,disposeRestores:true};reports.push(gradeReport);console.log(JSON.stringify({grade,actors:4,minRoad:Math.min(...gradeReport.actors.map(a=>a.continuousMinWidestPlayerPathClearance)),minBuilding:Math.min(...gradeReport.actors.map(a=>a.continuousMinBuildingClearance))}));
}
console.log('PASS: 24 actual actor routes, continuous clearance bounds, geometry footprints and runtime yield/collision tests.');
