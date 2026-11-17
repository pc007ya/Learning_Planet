import { afterEach, describe, expect, it, vi } from 'vitest';
import * as THREE from 'three';
import { Stage } from '../src/experiment-planets/core';

// Exercise the real drag handlers without constructing a WebGL renderer.
class Canvas extends EventTarget {
  captures = new Set<number>();
  getBoundingClientRect() { return {left:0,top:0,width:200,height:200}; }
  setPointerCapture(id:number) { this.captures.add(id); }
  hasPointerCapture(id:number) { return this.captures.has(id); }
  releasePointerCapture(id:number) { this.captures.delete(id); this.emit('lostpointercapture',id); }
  emit(type:string,pointerId:number,button=0) {
    const event=new Event(type,{cancelable:true});
    Object.assign(event,{pointerId,button,clientX:100,clientY:100}); this.dispatchEvent(event);
  }
}
afterEach(()=>vi.restoreAllMocks());
function setup(){
 const canvas=new Canvas();
 vi.spyOn(THREE.Raycaster.prototype,'intersectObject').mockReturnValue([{} as THREE.Intersection]);
 const orbit={enabled:true};const notify=vi.fn();const abort=new AbortController();
 const stage=Object.assign(Object.create(Stage.prototype),{renderer:{domElement:canvas},camera:new THREE.PerspectiveCamera(),orbit,notify,abort});
 const move=vi.fn();const unbind=stage.bindDrag(new THREE.Object3D(),move);
 return {canvas,orbit,notify,abort,move,unbind};
}
describe('experiment object drag ownership and cleanup',()=>{
 it('ignores a second finger and its release while the first finger owns the object',()=>{
  const f=setup(); f.canvas.emit('pointerdown',1);f.canvas.emit('pointerdown',2);f.canvas.emit('pointerup',2);
  expect(f.canvas.captures).toEqual(new Set([1]));expect(f.orbit.enabled).toBe(false);
  f.canvas.emit('pointerup',1);expect(f.canvas.captures.size).toBe(0);expect(f.orbit.enabled).toBe(true);
 });
 it.each(['pointercancel','lostpointercapture'])('ends the owning drag on %s',reason=>{
  const f=setup();f.canvas.emit('pointerdown',1);f.canvas.emit(reason,1);
  expect(f.canvas.captures.size).toBe(0);expect(f.orbit.enabled).toBe(true);
 });
 it('ignores non-primary mouse buttons',()=>{
  const f=setup();f.canvas.emit('pointerdown',1,2);expect(f.canvas.captures.size).toBe(0);expect(f.orbit.enabled).toBe(true);
 });
 it.each(['unbind','destroy'] as const)('releases capture and restores orbit on %s',reason=>{
  const f=setup();f.canvas.emit('pointerdown',1);if(reason==='unbind')f.unbind();else f.abort.abort();
  expect(f.canvas.captures.size).toBe(0);expect(f.orbit.enabled).toBe(true);
  f.canvas.emit('pointerdown',2);expect(f.canvas.captures.size).toBe(0);
 });
});
