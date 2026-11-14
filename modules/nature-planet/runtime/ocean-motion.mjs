import {createParkedEquipmentIdle} from './parked-equipment-idle.mjs?v=20261111-v23-cockpit';
/** Deterministic, bounded offshore decoration. Units/axes in evaluators are Blender XYZ.
 * Rendering converts XYZ -> XZ-Y. No geometry, physics or random numbers are created by a tick.
 * Parked window emissive values are updated on private material clones. The same evaluator is used by offline evidence.
 */
const profile=(offset,tilt,speed)=>Object.freeze({offset:Object.freeze(offset),tilt:Object.freeze(tilt),speed});
export const OCEAN_MOTION_PROFILES=Object.freeze({
  ground:profile([0,0,0],[0,0,0],1),
  inner:profile([.12,.10,.08],[.018,.018,.035],.5),
  hover:profile([.34,.24,.28],[.035,.045,.10],.68),
  glide:profile([.72,.32,.13],[.035,.045,.09],.43),
  rock:profile([.18,.14,.12],[.05,.045,.055],.58),
});
export const OCEAN_MOTION_MODES=Object.freeze(['auto','low','static']);
const motionProfile=motion=>Object.hasOwn(OCEAN_MOTION_PROFILES,motion?.profile)?OCEAN_MOTION_PROFILES[motion.profile]:null;
export function createOceanPose(){return {offset:[0,0,0],quaternion:[0,0,0,1]};}
// Metadata is immutable after binding. Preparing copies spline coefficients so all
// tick-time work is scalar arithmetic and writes to caller-owned arrays.
const routeCache=new WeakMap(),preparedRoutes=new WeakMap();
/** Closed uniform Catmull–Rom. Coordinates are relative world Blender XY.
 * phase is a fraction of one loop; period is active seconds, not wall time.
 * Invalid/degenerate routes fail closed to the original bounded idle motion.
 */
export function prepareOceanRoute(route){
  if(!route||typeof route!=='object')return null;
  if(preparedRoutes.has(route))return route;
  if(routeCache.has(route))return routeCache.get(route);
  routeCache.set(route,null);
  const points=route.points,n=points?.length,period=route.period,phase=route.phase??0;
  if(route.version!==1||(route.space!==undefined&&route.space!=='blender-xy-relative')||!Array.isArray(points)||n<4||n>32||!Number.isFinite(period)||period<12||period>600||!Number.isFinite(phase)||Math.abs(phase)>1e6||(route.heading!==undefined&&typeof route.heading!=='boolean'))return null;
  for(let i=0;i<n;i++){const p=points[i];if(!Array.isArray(p)||p.length!==2||!Number.isFinite(p[0])||!Number.isFinite(p[1])||Math.abs(p[0])>200||Math.abs(p[1])>200)return null;}
  const coefficients=new Float64Array(n*8),rate=n/period;
  let shift=0,maxSpeed=0,minSpeed=Infinity;
  for(let i=0;i<n;i++){
    const p0=points[(i+n-1)%n],p1=points[i],p2=points[(i+1)%n],p3=points[(i+2)%n],j=i*8;
    if(Math.hypot(p2[0]-p1[0],p2[1]-p1[1])<.01)return null;
    for(let axis=0;axis<2;axis++){
      const k=j+axis*4;
      coefficients[k]=(-p0[axis]+3*p1[axis]-3*p2[axis]+p3[axis])*.5;
      coefficients[k+1]=(2*p0[axis]-5*p1[axis]+4*p2[axis]-p3[axis])*.5;
      coefficients[k+2]=(-p0[axis]+p2[axis])*.5;
      coefficients[k+3]=p1[axis];
    }
    const ax=coefficients[j],bx=coefficients[j+1],cx=coefficients[j+2],dx=coefficients[j+3];
    const ay=coefficients[j+4],by=coefficients[j+5],cy=coefficients[j+6],dy=coefficients[j+7];
    // Cubic Bezier convex hull encloses the whole curve, including Catmull overshoot.
    shift=Math.max(shift,Math.hypot(dx,dy),Math.hypot(dx+cx/3,dy+cy/3),Math.hypot(p2[0]-(p3[0]-p1[0])/6,p2[1]-(p3[1]-p1[1])/6));
    // The derivative is quadratic Bezier. Its control-vector norms bound speed.
    const velocityBound=Math.max(Math.hypot(cx,cy),Math.hypot(cx+bx,cy+by),Math.hypot(cx+2*bx+3*ax,cy+2*by+3*ay));
    maxSpeed=Math.max(maxSpeed,velocityBound*rate);
    // A derivative Lipschitz bound makes this a continuous nonzero-speed check,
    // not just finite sample testing. Heading cannot encounter a hidden cusp.
    const accelerationBound=Math.max(Math.hypot(2*bx,2*by),Math.hypot(6*ax+2*bx,6*ay+2*by));
    let sampledMinimum=Infinity;
    for(let k=0;k<=64;k++){
      const u=k/64;
      sampledMinimum=Math.min(sampledMinimum,Math.hypot((3*ax*u+2*bx)*u+cx,(3*ay*u+2*by)*u+cy));
    }
    const continuousMinimum=sampledMinimum-accelerationBound/128;
    if(continuousMinimum<=.001)return null;
    minSpeed=Math.min(minSpeed,continuousMinimum*rate);
  }
  if(maxSpeed>12||maxSpeed<.01)return null;
  const result=Object.freeze({version:1,count:n,period,phase:((phase%1)+1)%1,heading:route.heading!==false,planarShift:shift,maxSpeed,minSpeed});
  preparedRoutes.set(result,coefficients);routeCache.set(route,result);return result;
}
function resetPose(out){out.offset[0]=out.offset[1]=out.offset[2]=0;out.quaternion[0]=out.quaternion[1]=out.quaternion[2]=0;out.quaternion[3]=1;return out;}
/** Route-only pose. Yaw is a delta from the model's authored Blender rotationZ.
 * A model faces Blender -Y; qBase * qRoute therefore faces the exact tangent.
 * Quaternion signs may differ across atan2's branch cut, but rotations do not.
 */
export function evaluateOceanRoute(route,seconds,out=createOceanPose(),rotationZ=0){
  const r=prepareOceanRoute(route);resetPose(out);
  if(!r||!Number.isFinite(seconds))return out;
  const cycle=((seconds%r.period)/r.period+r.phase+1)%1,t=cycle*r.count;
  const segment=Math.min(r.count-1,Math.floor(t)),u=t-segment,j=segment*8,c=preparedRoutes.get(r);
  out.offset[0]=((c[j]*u+c[j+1])*u+c[j+2])*u+c[j+3];
  out.offset[1]=((c[j+4]*u+c[j+5])*u+c[j+6])*u+c[j+7];
  if(r.heading){
    const vx=(3*c[j]*u+2*c[j+1])*u+c[j+2],vy=(3*c[j+4]*u+2*c[j+5])*u+c[j+6];
    const yaw=(Math.atan2(vy,vx)+Math.PI/2-(Number.isFinite(rotationZ)?rotationZ:0))/2;
    out.quaternion[2]=Math.sin(yaw);out.quaternion[3]=Math.cos(yaw);
  }
  return out;
}
/** radius is the full root-origin 3D vertex radius, not a fixed-yaw XY box.
 * Optional articulated parts add conservative pivot sweeps. Thus heading may
 * rotate through 360 degrees without invalidating the returned sphere bound.
 */
export function oceanMotionBounds(motion,radius=0,parts=[]){
  const p=motionProfile(motion),route=prepareOceanRoute(motion?.route);
  const rootRadius=Number.isFinite(radius)?Math.max(0,radius):0;
  let articulationShift=0;
  for(const part of parts){
    if(!Number.isFinite(part?.pivotRadius)||part.pivotRadius<0)continue;
    articulationShift+=part.mode==='spin'?2*part.pivotRadius:2*part.pivotRadius*Math.sin(Math.min(Math.PI,Math.abs(part.amplitude||0))/2);
  }
  const routeShift=route?.planarShift||0,planarShift=routeShift+(p?Math.hypot(p.offset[0],p.offset[1]):0),verticalShift=p?.offset[2]||0;
  const spatialShift=Math.hypot(planarShift,verticalShift),tilt=p?p.tilt[0]+p.tilt[1]+p.tilt[2]:0;
  return {planarShift,verticalShift,spatialShift,tilt,sphereSweep:rootRadius+articulationShift+spatialShift,routeShift,articulationShift,fullHeading:route?.heading===true,maxRouteSpeed:route?.maxSpeed||0};
}
export function evaluateOceanMotion(motion,seconds,out=createOceanPose(),rotationZ=0){
  const p=motionProfile(motion);
  if(!p||!Number.isFinite(seconds))return resetPose(out);
  evaluateOceanRoute(motion.route,seconds,out,rotationZ);
  const hz=out.quaternion[2],hw=out.quaternion[3];
  const phase=Number.isFinite(motion.phase)?(Math.abs(motion.phase)<1e6?motion.phase:motion.phase%(Math.PI*2)):0,t=seconds*p.speed;
  out.offset[0]+=p.offset[0]*Math.sin(t+phase);
  out.offset[1]+=p.offset[1]*Math.sin(t*.73+phase*1.31);
  out.offset[2]=p.offset[2]*Math.sin(t*1.27+phase+.4);
  // Blender Euler XYZ: qIdle = qz * qy * qx. qBase * qRoute * qIdle
  // preserves authored pivot axes while the model turns along its water route.
  const x=p.tilt[0]*Math.sin(t*.83+phase+.8)/2;
  const y=p.tilt[1]*Math.sin(t*.91+phase+1.6)/2;
  const z=p.tilt[2]*Math.sin(t*.57+phase)/2;
  const sx=Math.sin(x),cx=Math.cos(x),sy=Math.sin(y),cy=Math.cos(y),sz=Math.sin(z),cz=Math.cos(z);
  const ix=sx*cy*cz-cx*sy*sz,iy=cx*sy*cz+sx*cy*sz,iz=cx*cy*sz-sx*sy*cz,iw=cx*cy*cz+sx*sy*sz;
  out.quaternion[0]=hw*ix-hz*iy;out.quaternion[1]=hw*iy+hz*ix;
  out.quaternion[2]=hw*iz+hz*iw;out.quaternion[3]=hw*iw-hz*iz;
  return out;
}
export function parseOceanMotionPart(value){
  try{
    const p=typeof value==='string'?JSON.parse(value):value;
    if(!p||!['sway','spin'].includes(p.mode)||!Array.isArray(p.axis)||p.axis.length!==3||!p.axis.every(Number.isFinite))return null;
    const length=Math.hypot(...p.axis);
    if(length<.999||length>1.001||!Number.isFinite(p.amplitude)||Math.abs(p.amplitude)>(p.mode==='spin'?Math.PI*2:Math.PI)||!Number.isFinite(p.speed)||Math.abs(p.speed)>12||!Number.isFinite(p.phase))return null;
    return {mode:p.mode,axis:p.axis.map(n=>n/length),amplitude:p.amplitude,speed:p.speed,phase:p.phase};
  }catch{return null;}
}
export function evaluateOceanPart(part,seconds){
  if(!Number.isFinite(seconds))return 0;
  return part.mode==='spin'?(seconds*part.speed+part.phase)%(Math.PI*2):part.amplitude*Math.sin(seconds*part.speed+part.phase);
}
export function createOceanClock(){
  let elapsed=0,last=null;
  return {get seconds(){return elapsed;},pause(){last=null;},advance(now){
    if(!Number.isFinite(now))return elapsed;
    if(last!==null)elapsed+=Math.max(0,Math.min((now-last)/1000,.1));
    last=now;return elapsed;
  }};
}
/** Bind only declared roots of the selected grade; all allocations happen here. */
export function createOceanMotion(THREE,terrain,{grade,actors=[],mode='auto',lowPower=false,reduced=false,clock:sharedClock,obstacles=[],getPlayerPosition,sampleGround}={}){
  let currentMode=OCEAN_MOTION_MODES.includes(mode)?mode:'auto',isReduced=reduced===true,disposed=false,adaptiveLow=false,costSamples=0,costMean=0;
  const clock=sharedClock??createOceanClock(),pauseClock=()=>{if(!sharedClock)clock.pause();},bindings=[],pose=createOceanPose(),delta=new THREE.Quaternion(),shift=new THREE.Vector3();
  const seen=new Set();
  for(const actor of actors){
    if(!(actor?.id?.startsWith(`Nature_G${grade}_`))||actor.motion?.version!==1||!motionProfile(actor.motion)||seen.has(actor.id))continue;
    const root=terrain.getObjectByName(actor.id);if(!root||root.userData?.walkable!==false)continue;seen.add(actor.id);
    // Position is world-axis relative. Convert through the parent's linear transform once.
    root.parent?.updateMatrixWorld(true);
    const inverseParent=new THREE.Matrix3().setFromMatrix4(root.parent?.matrixWorld||new THREE.Matrix4()).invert();
    const binding={root,motion:{...actor.motion,route:prepareOceanRoute(actor.motion.route)},rotationZ:Number.isFinite(actor.rotationZ)?actor.rotationZ:0,position:root.position.clone(),quaternion:root.quaternion.clone(),inverseParent,parts:[],actor,routeSeconds:0,lastClock:null,obstacle:obstacles.find(o=>o.actorId===actor.id),yielding:false};
    root.traverse(node=>{
      if(node===root||binding.parts.length>=8)return;
      const part=parseOceanMotionPart(node.userData?.oceanMotionPart);if(!part)return;
      if(binding.motion.route && /(?:Foot|Leg_)/.test(node.name)){part.amplitude=.24;part.speed=actor.species==='turtle'?2.0:3.8;}
      binding.parts.push({node,part,quaternion:node.quaternion.clone(),axis:new THREE.Vector3(part.axis[0],part.axis[2],-part.axis[1])});
    });
    bindings.push(binding);
  }
  const groundWorld=new THREE.Vector3(),groundShift=new THREE.Vector3();
  function groundBinding(b){
    if(typeof sampleGround!=='function')return;
    b.root.updateWorldMatrix(true,false);b.root.getWorldPosition(groundWorld);
    const floor=sampleGround(b.actor,groundWorld.x,groundWorld.z);
    if(!Number.isFinite(floor))return;
    groundShift.set(0,floor-groundWorld.y,0).applyMatrix3(b.inverseParent);b.root.position.add(groundShift);
  }
  const refreshGround=()=>{for(const b of bindings)groundBinding(b);};
  // Establish route-start transforms and matching collision circles before the host
  // validates a restored player position. Reduced/static mode uses the same safe pose.
  for(const b of bindings){if(!b.motion.route)continue;
    evaluateOceanMotion(b.motion,0,pose,b.rotationZ);
    shift.set(pose.offset[0],pose.offset[2],-pose.offset[1]).applyMatrix3(b.inverseParent);
    b.root.position.copy(b.position).add(shift);groundBinding(b);
    delta.set(pose.quaternion[0],pose.quaternion[2],-pose.quaternion[1],pose.quaternion[3]);
    b.root.quaternion.copy(b.quaternion).multiply(delta);
    if(b.obstacle){b.obstacle.x=b.actor.p[0]+pose.offset[0];b.obstacle.y=b.actor.p[1]+pose.offset[1];}
  }
  const equipment=createParkedEquipmentIdle(THREE,terrain);
  const active=()=>!disposed&&(bindings.length>0||equipment.equipmentCount>0)&&!isReduced&&currentMode!=='static';
  function restore(preserveCruise=false){
    if(!preserveCruise)equipment.restore();
    for(const b of bindings){b.lastClock=null;if(preserveCruise&&b.motion.route)continue;if(b.obstacle){b.obstacle.x=b.actor.p[0];b.obstacle.y=b.actor.p[1];}b.root.position.copy(b.position);b.root.quaternion.copy(b.quaternion);for(const p of b.parts)p.node.quaternion.copy(p.quaternion);}
  }
  return {
    refreshGround,
    get active(){return active();},get seconds(){return clock.seconds;},
    get routeCount(){return bindings.filter(b=>b.motion.route).length;},get yieldingCount(){return bindings.filter(b=>b.yielding).length;},
    get interval(){return currentMode==='low'||lowPower||adaptiveLow?1000/15:1000/30;},
    get equipmentCount(){return equipment.equipmentCount;},
    get actorCount(){return bindings.length;},get partCount(){let n=0;for(const b of bindings)n+=b.parts.length;return n;},
    get quality(){return !active()?'static':currentMode==='low'||lowPower||adaptiveLow?'low':'normal';},
    pause(){pauseClock();for(const b of bindings)b.lastClock=null;},
    setMode(value){if(disposed||!OCEAN_MOTION_MODES.includes(value))return false;currentMode=value;pauseClock();if(!active()){restore(true);refreshGround();}return true;},
    setReduced(value){if(disposed)return;isReduced=value===true;pauseClock();if(!active()){restore(true);refreshGround();}},
    recordFrameCost(ms){
      if(disposed||currentMode!=='auto'||adaptiveLow||!Number.isFinite(ms))return;
      costMean=costSamples?costMean*.9+ms*.1:ms;costSamples++;
      // One-way budget downgrade avoids oscillation; a fresh mount re-evaluates hardware.
      if(costSamples>=30&&costMean>18)adaptiveLow=true;
    },
    update(now){
      if(!active()){pauseClock();return false;}
      const seconds=clock.advance(now);
      equipment.update(seconds);
      for(const b of bindings){
        const step=b.lastClock===null?0:Math.max(0,Math.min(seconds-b.lastClock,.1));b.lastClock=seconds;
        let localSeconds=b.motion.route?b.routeSeconds+step:seconds;
        evaluateOceanMotion(b.motion,localSeconds,pose,b.rotationZ);
        const player=getPlayerPosition?.();
        b.yielding=Boolean(b.motion.route&&player&&Math.hypot(b.actor.p[0]+pose.offset[0]-player.x,-b.actor.p[1]-pose.offset[1]-player.z)<(b.obstacle?.r??.9)+.38+.25);
        if(b.yielding){localSeconds=b.routeSeconds;evaluateOceanMotion(b.motion,localSeconds,pose,b.rotationZ);}else if(b.motion.route)b.routeSeconds=localSeconds;
        if(b.obstacle){b.obstacle.x=b.actor.p[0]+pose.offset[0];b.obstacle.y=b.actor.p[1]+pose.offset[1];}
        shift.set(pose.offset[0],pose.offset[2],-pose.offset[1]).applyMatrix3(b.inverseParent);
        b.root.position.copy(b.position).add(shift);groundBinding(b);
        delta.set(pose.quaternion[0],pose.quaternion[2],-pose.quaternion[1],pose.quaternion[3]);
        b.root.quaternion.copy(b.quaternion).multiply(delta);
        for(const p of b.parts){delta.setFromAxisAngle(p.axis,evaluateOceanPart(p.part,localSeconds));p.node.quaternion.copy(p.quaternion).multiply(delta);}
      }
      return true;
    },
    dispose(){if(disposed)return;restore();equipment.dispose();pauseClock();disposed=true;bindings.length=0;},
  };
}
