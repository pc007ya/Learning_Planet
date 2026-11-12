import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as THREE from '../../modules/math-knowledge/vendor/three-r187/three.module.js';
import {GRADE_ECOLOGY,planEcology,makeClearance,evaluateForaging} from '../../modules/nature-planet/runtime/ecology-plan.mjs';
import {createEcologyArt} from '../../modules/nature-planet/runtime/ecology-art.mjs';
const read=g=>JSON.parse(readFileSync(new URL(`../../modules/nature-planet/assets/grade${g}-scene.json`,import.meta.url)));
for(let grade=1;grade<=6;grade++){
  test(`grade ${grade}: deterministic additive art preserves data, roads, buildings and prior actors`,()=>{
    const data=read(grade),before=JSON.stringify(data),plan=planEcology(data),regions=new Map(data.regions.map(r=>[r.id,r])),clear=makeClearance(data);
    assert.equal(JSON.stringify(data),before);assert.deepEqual(planEcology(data),plan);
    assert.equal(plan.patches.filter(p=>p.kind==='landmark').length,4);assert.equal(plan.patches.filter(p=>p.kind==='knoll').length,4);
    assert.ok(plan.patches.length>=60);assert.ok(plan.actors.length>=8);assert.ok(new Set(plan.actors.map(a=>a.kind)).size>=4);
    for(const p of plan.patches){assert.ok(clear.free(p.p.slice(0,2),p.radius,regions.get(p.regionId)),p.id);clear.reserve(p.p,p.radius);}
    for(const a of plan.actors){assert.ok(a.route.length>=3);const region=regions.get(a.regionId);
      for(let i=0;i<a.route.length-1;i++)assert.ok(clear.segmentFree(a.route[i],a.route[i+1],a.radius,region),a.id);
      for(let t=0;t<180;t+=.4){const pose=evaluateForaging(a,t);assert.ok(clear.free(pose.p.slice(0,2),a.radius,region),`${a.id} @ ${t}`);assert.ok(Number.isFinite(pose.heading));}
      for(let i=0;i<a.route.length-1;i++){const p=a.route[i],q=a.route[i+1],n=Math.ceil(Math.hypot(q[0]-p[0],q[1]-p[1])/.35);for(let j=0;j<=n;j++)clear.reserve([p[0]+(q[0]-p[0])*j/n,p[1]+(q[1]-p[1])*j/n],a.radius+.12);}
    }
  });
  test(`grade ${grade}: real Three geometry, footprint envelope, reduced motion and idempotent disposal`,()=>{
    const data=read(grade),scene=new THREE.Scene(),art=createEcologyArt(THREE,scene,data);assert.equal(scene.children.length,1);
    for(const footprint of art.getFootprints())assert.ok(footprint.radius<=footprint.reserved,footprint.id);
    const geometries=new Set(),materials=new Set();art.root.traverse(o=>{if(!o.isMesh)return;geometries.add(o.geometry);materials.add(o.material);for(const name of ['position','normal','color']){const values=o.geometry.getAttribute(name).array;assert.ok(values.length>0);for(const n of values)assert.ok(Number.isFinite(n));}});
    assert.ok(art.getStats().drawCalls<90);assert.equal(art.getStats().actors,art.plan.actors.length);
    const animal=art.root.getObjectByName(art.plan.actors[0].id);art.setReducedMotion(true);art.update(1);const first=animal.position.clone();art.update(2);assert.ok(first.distanceTo(animal.position)<1e-8);art.setReducedMotion(false);for(let t=3;t<30;t+=.1)art.update(t);assert.ok(first.distanceTo(animal.position)>.05);
    art.pause();const paused=animal.position.clone();art.update(300);assert.ok(paused.distanceTo(animal.position)<1e-8);
    let disposed=0;for(const g of geometries)g.addEventListener('dispose',()=>disposed++);art.dispose();art.dispose();assert.equal(disposed,geometries.size);assert.equal(scene.children.length,0);assert.equal(art.update(400),false);
  });
}
test('six grade identities differ by silhouette, flora, architecture and fauna, not tint only',()=>{
  assert.equal(new Set(Object.values(GRADE_ECOLOGY).map(p=>JSON.stringify([p.trees,p.landmarks,p.fauna]))).size,6);
  const kinds=new Set(Object.values(GRADE_ECOLOGY).flatMap(p=>p.fauna));assert.equal(kinds.size,15);
});
test('low-power variant is smaller and malformed/no ground never invents terrain placement',()=>{
  const data=read(3),normal=planEcology(data),low=planEcology(data,{quality:'low'});assert.ok(low.patches.length<normal.patches.length);assert.ok(low.actors.length<normal.actors.length);
  const scene=new THREE.Scene(),art=createEcologyArt(THREE,scene,data,{floor:()=>null});assert.equal(art.getStats().patches,0);assert.equal(art.getStats().actors,0);art.dispose();
  assert.throws(()=>planEcology(data,{grade:7}),RangeError);
});
