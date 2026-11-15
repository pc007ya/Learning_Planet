import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import * as THREE from '../../math-knowledge/vendor/three-r187/three.module.js';
import {GLTFLoader} from './vendor/GLTFLoader.js';import {createWalking,isWalkSurface} from './walking.mjs';import {groundNavigation} from './ground-navigation.mjs';import {toWorld,dijkstra} from './nav.mjs';
test('actual GLB road graphs use grounded heights, preserve all safe routes, reject buildings/water',async()=>{
 let count=0;
 for(const grade of [1,2,3]){
 const data=JSON.parse(fs.readFileSync(new URL(`./assets/grade${grade}-scene.json`,import.meta.url))),raw=JSON.stringify(data),b=fs.readFileSync(new URL(`./assets/grade${grade}-terrain.glb`,import.meta.url));
 const g=await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');g.scene.updateMatrixWorld(true);const meshes=[];g.scene.traverse(o=>{if(isWalkSurface(o)){meshes.push(o);for(const m of Array.isArray(o.material)?o.material:[o.material])m.side=THREE.DoubleSide;}});
 const physics=createWalking(THREE,()=>data,()=>meshes),grounded=groundNavigation(THREE,data,physics),by=new Map(grounded.nodes.map(n=>[n.id,new THREE.Vector3(...toWorld(n.p))]));
 assert.equal(JSON.stringify(data),raw);assert.equal(grounded.edges.length,data.edges.length);
 for(const [a,b]of grounded.edges)assert.ok(physics.lineSafe(by.get(a),by.get(b)),`g${grade} ${a}-${b}`);
 for(const s of data.stationsData){assert.ok(dijkstra(grounded.nodes,grounded.edges,grounded.nodes[0].id,s.navNode).length);count++;}
 const o=data.obstacles.find(o=>o.type==='station');assert.equal(physics.valid(o.x,-o.y,physics.floor(o.x,-o.y)||0).reason,'obstacle');assert.equal(physics.valid(999,999,0).ok,false);
 }
 assert.equal(count,78);
});
