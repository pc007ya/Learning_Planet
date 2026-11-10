import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from '../../math-knowledge/vendor/three-r187/three.module.js';
import { GLTFLoader } from './vendor/GLTFLoader.js';
import {createWalking,isWalkSurface} from './walking.mjs';
import {createWalking as createBaseline} from './qa/walking-before.mjs';
import {toWorld} from './nav.mjs';
const results=[];
function plane(x=0,y=0,z=0){const m=new THREE.Mesh(new THREE.PlaneGeometry(4,4),new THREE.MeshBasicMaterial({side:THREE.DoubleSide}));m.rotation.x=-Math.PI/2;m.position.set(x,y,z);m.updateMatrixWorld(true);return m;}
test('bounds preserve stacked/rotated/boundary results and support explicit invalidation',()=>{
 const meshes=[plane(),plane(0,3,0),plane(20,0,20)];const data={obstacles:[]};const fast=createWalking(THREE,()=>data,()=>meshes),slow=createBaseline(THREE,()=>data,()=>meshes);
 for(const [x,z] of [[0,0],[2,2],[-2,-2],[2+1e-8,0],[20,20],[100,100]])assert.equal(fast.floor(x,z),slow.floor(x,z));
 meshes[1].position.x=10;meshes[1].updateMatrixWorld(true);fast.invalidateBounds();assert.equal(fast.floor(0,0),slow.floor(0,0));assert.equal(fast.floor(10,0),slow.floor(10,0));
});
test('new mesh array rebuilds bounds; custom raycast is never pruned',()=>{
 let meshes=[plane()];const fast=createWalking(THREE,()=>({obstacles:[]}),()=>meshes);assert.equal(fast.floor(0,0),0);
 meshes=[plane(10,2,0)];assert.equal(fast.floor(10,0),2);
 const custom=plane(100,0,100);custom.raycast=(ray,hits)=>hits.push({distance:28,point:new THREE.Vector3(0,7,0),object:custom});meshes=[custom];assert.equal(fast.floor(0,0),7);
});
test('actual three-grade GLBs: deterministic floor/valid/lineSafe parity and raycast dispatch reduction',async()=>{
 const originalRaycast=THREE.Mesh.prototype.raycast;let dispatches=0;
 THREE.Mesh.prototype.raycast=function(...args){dispatches++;return originalRaycast.apply(this,args);};
 try{
  for(const grade of [1,2,3]){
   const b=fs.readFileSync(new URL(`./assets/grade${grade}-terrain.glb`,import.meta.url));const data=JSON.parse(fs.readFileSync(new URL(`./assets/grade${grade}-scene.json`,import.meta.url)));
   const gltf=await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');gltf.scene.updateMatrixWorld(true);assert.ok(gltf.scene instanceof THREE.Object3D,'Loader must use the same Three module');
   const meshes=[];gltf.scene.traverse(o=>{if(isWalkSurface(o)){meshes.push(o);for(const m of Array.isArray(o.material)?o.material:[o.material])m.side=THREE.DoubleSide;}});
   const fast=createWalking(THREE,()=>data,()=>meshes),slow=createBaseline(THREE,()=>data,()=>meshes);
   const points=[];
   for(let x=-120;x<=120;x+=12)for(let z=-120;z<=120;z+=12)points.push([x,z]);
   for(const s of data.stationsData){const [x,,z]=toWorld(s.entry);for(const dx of [0,-.28,.28])points.push([x+dx,z]);}
   for(const r of data.regions)for(let i=0;i<r.boundary.length;i+=5)points.push([r.boundary[i][0],-r.boundary[i][1]]);
   dispatches=0;const expected=points.map(([x,z])=>slow.floor(x,z));const before=dispatches;
   dispatches=0;const actual=points.map(([x,z])=>fast.floor(x,z));const after=dispatches;assert.deepEqual(actual,expected);
   for(let i=0;i<points.length;i+=7){const [x,z]=points[i],y=expected[i]??0;assert.deepEqual(fast.valid(x,z,y),slow.valid(x,z,y));}
   for(let i=0;i<Math.min(data.edges.length,30);i++){const [a,b]=data.edges[i],nodes=new Map(data.nodes.map(n=>[n.id,n]));const from=new THREE.Vector3(...toWorld(nodes.get(a).p)),to=new THREE.Vector3(...toWorld(nodes.get(b).p));assert.equal(fast.lineSafe(from,to),slow.lineSafe(from,to));}
   assert.ok(after<before*.35,`G${grade}: expected substantial dispatch reduction`);
   results.push({grade,walkMeshes:meshes.length,walkTriangles:meshes.reduce((sum,m)=>sum+(m.geometry.index?.count ?? m.geometry.attributes.position.count)/3,0),floorSamples:points.length,baselineMeshRaycastDispatches:before,optimizedMeshRaycastDispatches:after,reductionPercent:100*(1-after/before),parity:true});
  }
 }finally{THREE.Mesh.prototype.raycast=originalRaycast;}
 fs.writeFileSync(new URL('./qa/broadphase-parity.json',import.meta.url),JSON.stringify({method:'Deterministic CPU correctness/mesh dispatch counts, not GPU or device performance',results},null,2));
});
