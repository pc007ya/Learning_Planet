/** Real floor support for the exact rig, including a bounded pelvis adjustment on slopes. */
export function createYuyuSurfaceSupport(T,rig,{floorAt,probe=.08,maxPitch=.24}={}){
 if(!rig?.bones||typeof floorAt!=='function')throw Error('Rig and explicit floor sampler required');
 const point=new T.Vector3(),world=new T.Vector3(),forward=new T.Vector3(),sideways=new T.Vector3(),inverse=new T.Matrix4(),soleWorld=new T.Vector3(),hipPoint=new T.Vector3();let last={safe:true,feet:[]};
 return{update(){
  const root=rig.root,scale=root.getWorldScale(point).x;if(!(scale>0))throw Error('Invalid rig world scale');root.updateMatrixWorld(true);inverse.copy(rig.body.matrixWorld).invert();forward.set(0,0,1).transformDirection(rig.body.matrixWorld);sideways.set(1,0,0).transformDirection(rig.body.matrixWorld);const rootY=root.getWorldPosition(world).y,feet=[],targets=[],upper=Math.hypot(.33,.0385),lower=Math.hypot(.27,.0315),limit=upper+lower-.001;let pelvisDrop=0;
  for(const side of ['Left','Right']){
   rig.soleAnchors[side.toLowerCase()].getWorldPosition(soleWorld);const lift=Math.max(0,soleWorld.y-rootY),f=floorAt(soleWorld.x,soleWorld.z),a=floorAt(soleWorld.x+forward.x*probe,soleWorld.z+forward.z*probe),b=floorAt(soleWorld.x-forward.x*probe,soleWorld.z-forward.z*probe);
   if(![f,a,b].every(Number.isFinite)){last={safe:false,reason:'missing-foot-support',feet};return last;}const pitch=Math.max(-maxPitch,Math.min(maxPitch,Math.atan2(a-b,probe*2))),slope=Math.tan(pitch);let support=f;
   for(const dz of [-.19*scale,0,.19*scale])for(const dx of [-.125*scale,0,.125*scale]){const h=floorAt(soleWorld.x+forward.x*dz+sideways.x*dx,soleWorld.z+forward.z*dz+sideways.z*dx);if(!Number.isFinite(h)){last={safe:false,reason:'unsupported-slipper-footprint',feet};return last;}support=Math.max(support,h-slope*dz);}
   soleWorld.y=support+lift+.001*scale;const target=soleWorld.clone().applyMatrix4(inverse);target.y+=.092*Math.cos(pitch);target.z-=.092*Math.sin(pitch);rig.bones[side+'Thigh'].getWorldPosition(hipPoint).applyMatrix4(inverse);const dy=target.y-hipPoint.y,dz=target.z-hipPoint.z;
   // A forward descending step can put the ankle below a fully extended leg. Lower the
   // pelvis just enough for both real two-link chains; never stretch or ignore a reject.
   if(Math.hypot(dy,dz)>limit&&dy<0&&Math.abs(dz)<limit)pelvisDrop=Math.max(pelvisDrop,-dy-Math.sqrt(limit*limit-dz*dz));
   targets.push({side,target,pitch,support,lift,world:soleWorld.toArray()});
  }
  if(pelvisDrop>.08){last={safe:false,reason:'pelvis-adjustment-limit',feet,pelvisDrop};return last;}rig.bones.Hips.position.y-=pelvisDrop;root.updateMatrixWorld(true);
  for(const {side,target,pitch,support,lift,world:targetWorld}of targets){const hip=rig.bones[side+'Thigh'],knee=rig.bones[side+'Shin'],ankle=rig.bones[side+'Ankle'];hip.getWorldPosition(hipPoint).applyMatrix4(inverse);const dy=target.y-hipPoint.y,dz=target.z-hipPoint.z,d=Math.hypot(dy,dz);if(d>upper+lower+1e-5||d<Math.abs(upper-lower)+.001){last={safe:false,reason:'foot-target-unreachable',feet,targetDistance:d,pelvisDrop};return last;}const flex=Math.acos(Math.max(-1,Math.min(1,(d*d-upper*upper-lower*lower)/(2*upper*lower)))),angle=Math.atan2(-dz,-dy)-Math.atan2(lower*Math.sin(flex),upper+lower*Math.cos(flex));hip.rotation.x=angle+Math.atan2(.07,.6);knee.rotation.x=flex;ankle.rotation.x=-pitch-hip.rotation.x-knee.rotation.x;feet.push({side,ground:support,lift,pitch,target:targetWorld});}
  root.updateMatrixWorld(true);rig.skeleton.update();last={safe:true,feet,pelvisDrop,soleClearance:.001*scale};return last;
 },getState(){return structuredClone(last);}};
}
