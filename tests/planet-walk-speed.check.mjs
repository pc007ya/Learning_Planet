import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../modules/math-knowledge/vendor/three-r187/three.module.js';
import * as math from '../modules/math-mission-map/v11/ground-motion.mjs';
import * as nature from '../modules/nature-planet/runtime/ground-motion.mjs';
import {createWalking as mathWalking} from '../modules/math-mission-map/v11/walking.mjs';
import {createWalking as natureWalking} from '../modules/nature-planet/runtime/walking.mjs';
function world(make,obstacles=[]){
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(100,100),new THREE.MeshBasicMaterial({side:THREE.DoubleSide}));
 mesh.rotation.x=-Math.PI/2;mesh.updateMatrixWorld(true);const meshes=[mesh];
 return make(THREE,()=>({obstacles}),()=>meshes);
}
for(const [name,motion,make]of [['math123',math,mathWalking],['nature',nature,natureWalking]]){
 test(`${name}: real physics travels 4.2 units per second at 20/30/60/120fps, keyboard and path`,()=>{
  assert.equal(motion.GROUND_WALK_SPEED,4.2);
  for(const fps of [20,30,60,120])for(const mode of ['keyboard','path']){
   const physics=world(make),p=new THREE.Vector3(),path=[{x:20,z:0}];
   for(let i=0;i<fps*2;i++){
    if(mode==='keyboard')assert.ok(physics.step(p,motion.GROUND_WALK_SPEED/fps,0).moved);
    else assert.ok(motion.advanceGroundPath({position:p,path,distanceBudget:motion.GROUND_WALK_SPEED/fps,step:(x,z)=>physics.step(p,x,z)}).moved);
   }
   assert.ok(Math.abs(p.x-8.4)<1e-9,`${fps}fps ${mode}: ${p.x}`);
  }
 });
 test(`${name}: faster travel still stops before obstacles and island edges, including oversized step`,()=>{
  for(const fps of [20,60]){
   const physics=world(make,[{x:2,y:0,r:.2}]),p=new THREE.Vector3(),path=[{x:8,z:0}];let result;
   for(let i=0;i<fps&&path.length;i++)result=motion.advanceGroundPath({position:p,path,distanceBudget:4.2/fps,step:(x,z)=>physics.step(p,x,z)});
   assert.equal(result.blockReason,'obstacle');assert.ok(p.x<=1.42&&p.x>1.29);assert.equal(path.length,0);
  }
  const physics=world(make,[{x:2,y:0,r:.2}]),p=new THREE.Vector3();
  assert.equal(physics.step(p,4.2,0).blocked,'obstacle');assert.ok(p.x<=1.42);
  const edge=new THREE.Vector3(49.5,0,0);assert.equal(world(make).step(edge,4.2,0).blocked,'edge-or-water');assert.ok(edge.x<49.73);
 });
 test(`${name}: turns remain bounded and converge without overshoot`,()=>{
  let yaw=0;for(let i=0;i<10;i++){const next=motion.stepGroundYaw(yaw,Math.PI/2,.05);assert.ok(Math.abs(motion.shortestAngleDelta(yaw,next))<=.30000001);yaw=next;}
  assert.ok(Math.abs(yaw-Math.PI/2)<1e-9);
 });
}
test('both rigs use distance-locked stride: equal distance equal pose, idle/teleport no false step',()=>{
 for(const motion of [math,nature]){
  const samples=[];
  for(const fps of [20,60,120]){
   const stride=motion.createGroundStride(),p={x:0,z:0};stride(p,false);let value;
   for(let i=0;i<fps;i++){p.x+=4.2/fps;value=stride(p,true);}
   samples.push(value);assert.equal(stride(p,false),0);assert.equal(stride(p,true,true),0);
   const before=stride(p,true);p.x+=20;assert.equal(stride(p,true),before);
  }
  for(const value of samples)assert.ok(Math.abs(value-samples[0])<1e-10);
 }
});
