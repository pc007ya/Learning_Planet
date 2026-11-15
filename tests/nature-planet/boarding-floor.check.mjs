import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import * as T from '../../modules/math-knowledge/vendor/three-r187/three.module.js';
import {GLTFLoader} from '../../modules/nature-planet/runtime/vendor/GLTFLoader.js';
import {createWalking,isWalkSurface} from '../../modules/nature-planet/runtime/walking.mjs';
for(let grade=1;grade<=6;grade++)test('boarding cached floor matches live terrain probes grade '+grade,async()=>{
 const b=fs.readFileSync(new URL(`../../modules/nature-planet/assets/grade${grade}-terrain.glb`,import.meta.url));const root=(await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;root.updateMatrixWorld(true);const meshes=[];root.traverse(o=>{if(isWalkSurface(o)){meshes.push(o);for(const m of Array.isArray(o.material)?o.material:[o.material])m.side=T.DoubleSide;}});
 const fast=createWalking(T,()=>({}),()=>meshes,{minimumFloorNormal:.4}),ray=new T.Raycaster(),normal=new T.Vector3();let probes=0;
 for(let x=-1;x<=1;x+=.2)for(let z=3.5;z<=12;z+=.2){ray.set(new T.Vector3(x,50,z),new T.Vector3(0,-1,0));const expected=ray.intersectObjects(meshes,false).find(h=>h.face&&Math.abs(normal.copy(h.face.normal).transformDirection(h.object.matrixWorld).y)>.4)?.point.y??null,actual=fast.floor(x,z);assert.ok(actual===expected||(actual!=null&&expected!=null&&Math.abs(actual-expected)<1e-7),`${x},${z}: ${actual} vs ${expected}`);probes++;}assert.ok(probes>400);
 // Subsequent support probes use cached triangles, never full-mesh raycasting.
 for(const m of meshes)m.raycast=()=>{throw Error('uncached terrain raycast');};for(let z=4;z<12;z+=.1)fast.floor(0,z);
});
test('second touch is captured before the pinch early return',()=>{const s=fs.readFileSync(new URL('../../modules/nature-planet/runtime/planet-v11.mjs',import.meta.url),'utf8');assert.match(s,/if\(zoomGesture.down\(e\)\)\{pointerStart=null;canvas.setPointerCapture\?\.\(e.pointerId\);return;\}/);});
