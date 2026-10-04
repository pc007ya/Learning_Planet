import {SpatialView} from '../math-teaching/three-view.js';
export function attachThreeDiagram(host,visual){
 const view=new SpatialView(host,()=>{});
 let spread=0;
 const drawModel=()=>{
 view.updateSpatial({mode:'space',dimensions:visual.dimensions,cubes:visual.cubes,gaps:[],layers:visual.dimensions.h,spread,counted:new Set(),showGaps:false,reveal:false});
 if(visual.target&&!spread){const {l,w,h}=visual.dimensions;for(const z of [-w/2,w/2]){view.line([[-l/2,-h/2,z],[-l/2,h/2,z],[l/2,h/2,z],[l/2,-h/2,z],[-l/2,-h/2,z]],0x537d92);}for(const x of [-l/2,l/2])for(const y of [-h/2,h/2])view.line([[x,y,-w/2],[x,y,w/2]],0x537d92);}
 view.draw();
 };
 drawModel();
 // Orthographic projection keeps equally sized cubes equal in every view.
 const angle=kind=>{view.angle(kind);const position=view.camera.position.clone(),quaternion=view.camera.quaternion.clone();if(kind==='front'||kind==='side')position.y=0;view.setProjection(true,position.length());view.camera.position.copy(position);view.camera.quaternion.copy(quaternion);view.controls.update();view.draw();};
 angle('home');
 return {host,angle,get split(){return Boolean(spread);},toggleLayers(){spread=spread?0:.8;drawModel();return Boolean(spread);},destroy(){view.destroy();view.renderer.forceContextLoss();}};
}
