import {it,expect} from 'vitest';
import * as T from 'three';
// @ts-ignore browser view methods tested without a WebGL context
import {GeometryView} from '../modules/math-teaching/geometry-view.js';
it('top projection keeps equal cubes equal in screen size at every stack height and viewport aspect',()=>{
 const view=Object.create(GeometryView.prototype);view.camera=new T.PerspectiveCamera(35,1,.1,500);const original=view.camera;view.controls={object:original};
 view.setProjection(true,12);view.camera.position.set(0,12,0);view.camera.up.set(0,0,-1);view.camera.lookAt(0,0,0);view.camera.updateMatrixWorld();
 for(const aspect of [.6,1,1.8]){view.resizeCamera(aspect);
  const widths=[-1,0,1,4].map(y=>{const a=new T.Vector3(-.46,y,-.46).project(view.camera),b=new T.Vector3(.46,y,.46).project(view.camera);expect((b.x-a.x)*aspect).toBeCloseTo(Math.abs(b.y-a.y),10);return b.x-a.x;});
  widths.forEach(w=>expect(w).toBeCloseTo(widths[0],10));
 }
 view.setProjection(false,12);expect(view.camera).toBe(original);expect(view.controls.object).toBe(original);expect(view.camera.isPerspectiveCamera).toBe(true);
});
