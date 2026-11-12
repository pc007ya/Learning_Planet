import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import * as T from '../../modules/math-knowledge/vendor/three-r187/three.module.js';
import {GLTFLoader} from '../../modules/nature-planet/runtime/vendor/GLTFLoader.js';
import {createWalking,isWalkSurface} from '../../modules/nature-planet/runtime/walking.mjs';
import {dijkstra,toWorld} from '../../modules/nature-planet/runtime/nav.mjs';
import {createDayNight,samplePlanetDay,EARTH_DAY_MS} from '../../modules/nature-planet/runtime/day-night.mjs';
import {validateNatureMetadata,restoreNatureState,canEnterNatureUnit,natureUnits} from '../../modules/nature-planet/state.mjs';
import {createOceanMotion} from '../../modules/nature-planet/runtime/ocean-motion.mjs';
const catalog=JSON.parse(await fs.readFile(new URL('../../data/science-curriculum/catalog.json',import.meta.url))),reports=[];
for(let grade=1;grade<=6;grade++){
 const base=new URL('../../modules/nature-planet/assets/',import.meta.url);let b,data;
 try{b=await fs.readFile(new URL(`grade${grade}-terrain.glb`,base));data=JSON.parse(await fs.readFile(new URL(`grade${grade}-scene.json`,base)));}catch(e){console.log('WAITING',grade);continue;}
 const root=(await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;root.updateMatrixWorld(true);const meshes=[];let triangles=0,draws=0;root.traverse(o=>{if(o.isMesh){draws++;triangles+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3;}if(isWalkSurface(o)){meshes.push(o);for(const m of Array.isArray(o.material)?o.material:[o.material])m.side=T.DoubleSide;}});
 validateNatureMetadata(data,grade,catalog);const walking=createWalking(T,()=>data,()=>meshes),by=new Map(data.nodes.map(n=>[n.id,n])),errors=[];
 for(const [a,b]of data.edges){const A=new T.Vector3(...toWorld(by.get(a).p)),B=new T.Vector3(...toWorld(by.get(b).p));const y=walking.floor(A.x,A.z);if(y===null){errors.push({edge:[a,b],reason:'missing start floor'});continue;}A.y=y;B.y=walking.floor(B.x,B.z)??B.y;if(!walking.lineSafe(A,B)||!walking.lineSafe(B,A))errors.push({edge:[a,b],reason:'unsafe edge',from:A.toArray(),to:B.toArray()});}
 for(const s of data.stationsData){const p=toWorld(s.entry),y=walking.floor(p[0],p[2]);if(y===null||!walking.valid(p[0],p[2],y).ok)errors.push({unit:s.id,reason:'invalid door'});if(dijkstra(data.nodes,data.edges,0,s.navNode).length===0)errors.push({unit:s.id,reason:'disconnected'});assert.equal(canEnterNatureUnit({ready:true,landed:true,moving:false,position:p,remainingWaypoints:0},s.id,data),true);}
 assert.equal(walking.floor(80,80),null);for(const s of data.stationsData)assert.equal(walking.valid(s.p[0],-s.p[1],s.p[2]).ok,false);
 const effectsScene=new T.Scene();effectsScene.add(root);const renderer={toneMappingExposure:1,domElement:{height:768}};const day=createDayNight(T,effectsScene,renderer,{now:()=>0});day.bindTerrain(root,data,{floor:(x,z)=>walking.floor(x,z)});assert.equal(day.getState().unitHalos,data.stationsData.length);assert.ok(day.getState().streetAndEntryBulbs>=data.stationsData.length*2);assert.equal(day.getState().effectDrawCalls,3);day.setPreview(12);assert.equal(day.getState().period,'day');day.setPreview(0);assert.equal(day.getState().period,'night');const nightCounts=day.getState();day.dispose();
 const life=createOceanMotion(T,root,{grade,actors:data.ambientLife.actors,mode:'auto'});assert.equal(life.actorCount,4);assert.equal(life.partCount,20);const joints=[];root.traverse(o=>{if(o.userData.oceanMotionPart)joints.push(o);});const before=joints.map(o=>o.quaternion.toArray());life.update(1000);life.update(2000);const after=joints.map(o=>o.quaternion.toArray());assert.notDeepEqual(before,after);life.dispose();
 for(const publisher of ['康軒','南一'])for(const semester of [1,2])assert.ok(natureUnits(catalog,{grade,publisher,semester}).length>=3);
 assert.equal(restoreNatureState({worldVersion:'planet-v11-world-v1',grade,position:[1,2,3]},grade,data),null);
 assert.deepEqual(samplePlanetDay(123456).phase,samplePlanetDay(123456+EARTH_DAY_MS).phase);
 reports.push({grade,units:data.stationsData.length,nodes:data.nodes.length,edges:data.edges.length,walkMeshes:meshes.length,triangles,draws,bytes:b.length,nightLights:nightCounts.streetAndEntryBulbs,unitHalos:nightCounts.unitHalos,animalActors:4,animatedParts:20,errors:errors.slice(0,30),unsafeEdges:errors.length});console.log(JSON.stringify(reports.at(-1)));root.traverse(o=>{o.geometry?.dispose();});
}
assert.equal(reports.length,6,'All six grade GLBs must be present');assert.equal(reports.reduce((n,r)=>n+r.units,0),110,'All 110 exact units must be present');
if(reports.some(r=>r.unsafeEdges))process.exitCode=1;
