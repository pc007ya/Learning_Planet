import {createOceanClock,createOceanPose,parseOceanMotionPart,evaluateOceanPart,OCEAN_MOTION_MODES} from './ocean-motion.mjs?v=20261111-v23-cockpit';
/** Flight routes use Blender XYZ relative to the authored anchor. All tick buffers
 * are allocated once. radiusBound includes the full articulated, rotated model. */
const cache=new WeakMap(),coefficients=new WeakMap();
export function prepareAerialRoute(route){
  if(!route||typeof route!=='object')return null;
  if(coefficients.has(route))return route;
  if(cache.has(route))return cache.get(route);
  cache.set(route,null);
  const points=route.points,n=points?.length,period=route.period,phase=route.phase??0,bank=route.bank??.08;
  if(route.version!==1||route.space!=='blender-xyz-relative'||!Array.isArray(points)||n<4||n>32||!Number.isFinite(period)||period<12||period>600||!Number.isFinite(phase)||Math.abs(phase)>1e6||!Number.isFinite(bank)||Math.abs(bank)>.18||(route.heading!==undefined&&route.heading!==true))return null;
  for(const p of points)if(!Array.isArray(p)||p.length!==3||!p.every(v=>Number.isFinite(v)&&Math.abs(v)<=200))return null;
  const c=new Float64Array(n*12),rate=n/period;
  let minAltitude=Infinity,maxAltitude=-Infinity,planarShift=0,spatialShift=0,maxSpeed=0,minSpeed=Infinity,maxPitch=0;
  for(let i=0;i<n;i++){
    const a=points[(i+n-1)%n],b=points[i],d=points[(i+1)%n],e=points[(i+2)%n],j=i*12;
    if(Math.hypot(d[0]-b[0],d[1]-b[1])<.01)return null;
    for(let k=0;k<3;k++){const o=j+k*4;c[o]=(-a[k]+3*b[k]-3*d[k]+e[k])/2;c[o+1]=(2*a[k]-5*b[k]+4*d[k]-e[k])/2;c[o+2]=(-a[k]+d[k])/2;c[o+3]=b[k];}
    for(let k=0;k<4;k++){
      const v=[0,0,0];for(let axis=0;axis<3;axis++){const o=j+axis*4;v[axis]=k===0?b[axis]:k===1?b[axis]+c[o+2]/3:k===2?d[axis]-(e[axis]-b[axis])/6:d[axis];}
      minAltitude=Math.min(minAltitude,v[2]);maxAltitude=Math.max(maxAltitude,v[2]);planarShift=Math.max(planarShift,Math.hypot(v[0],v[1]));spatialShift=Math.max(spatialShift,Math.hypot(...v));
    }
    for(let k=0;k<3;k++){const v=[0,0,0];for(let axis=0;axis<3;axis++){const o=j+axis*4;v[axis]=c[o+2]+(k===0?0:k===1?c[o+1]:2*c[o+1]+3*c[o]);}maxSpeed=Math.max(maxSpeed,Math.hypot(...v)*rate);}
    const acceleration=Math.max(Math.hypot(2*c[j+1],2*c[j+5]),Math.hypot(6*c[j]+2*c[j+1],6*c[j+4]+2*c[j+5]));
    let minimum=Infinity;
    for(let k=0;k<=64;k++){const u=k/64;minimum=Math.min(minimum,Math.hypot((3*c[j]*u+2*c[j+1])*u+c[j+2],(3*c[j+4]*u+2*c[j+5])*u+c[j+6]));}
    minimum-=acceleration/128;if(minimum<=.001)return null;minSpeed=Math.min(minSpeed,minimum*rate);
    const verticalSpeed=Math.max(Math.abs(c[j+10]),Math.abs(c[j+10]+c[j+9]),Math.abs(c[j+10]+2*c[j+9]+3*c[j+8]));
    maxPitch=Math.max(maxPitch,Math.atan2(verticalSpeed,minimum));if(maxPitch>.35)return null;
  }
  if(maxSpeed>12||maxSpeed<.01)return null;
  const result=Object.freeze({version:1,count:n,period,phase:((phase%1)+1)%1,bank,minAltitude,maxAltitude,planarShift,spatialShift,maxSpeed,minSpeed,maxPitch});
  coefficients.set(result,c);cache.set(route,result);return result;
}
export function evaluateAerialRoute(route,seconds,out=createOceanPose(),rotationZ=0){
  out.offset.fill(0);out.quaternion.fill(0);out.quaternion[3]=1;
  const r=prepareAerialRoute(route);if(!r||!Number.isFinite(seconds))return out;
  const t=(((seconds%r.period)/r.period+r.phase+1)%1)*r.count,i=Math.min(r.count-1,Math.floor(t)),u=t-i,j=i*12,c=coefficients.get(r);
  for(let axis=0;axis<3;axis++){const k=j+axis*4;out.offset[axis]=((c[k]*u+c[k+1])*u+c[k+2])*u+c[k+3];}
  const vx=(3*c[j]*u+2*c[j+1])*u+c[j+2],vy=(3*c[j+4]*u+2*c[j+5])*u+c[j+6],vz=(3*c[j+8]*u+2*c[j+9])*u+c[j+10];
  const yaw=(Math.atan2(vy,vx)+Math.PI/2-(Number.isFinite(rotationZ)?rotationZ:0))/2;
  // Local -Y is forward. Pitch about X follows the full 3D tangent; bank about
  // local -Y leaves that exact forward vector unchanged.
  const pitch=-Math.atan2(vz,Math.hypot(vx,vy))/2;
  const turn=(vx*(6*c[j+4]*u+2*c[j+5])-vy*(6*c[j]*u+2*c[j+1]))/(vx*vx+vy*vy);
  const roll=-r.bank*Math.tanh(turn)/2;
  const sx=Math.sin(pitch),cx=Math.cos(pitch),sy=Math.sin(roll),cy=Math.cos(roll),sz=Math.sin(yaw),cz=Math.cos(yaw);
  out.quaternion[0]=cz*sx*cy-sz*cx*sy;out.quaternion[1]=cz*cx*sy+sz*sx*cy;
  out.quaternion[2]=cz*sx*sy+sz*cx*cy;out.quaternion[3]=cz*cx*cy-sz*sx*sy;
  return out;
}
/** Bounds are camera-space projected rectangles. Any nearer aircraft touching
 * the protected avatar rectangle is fully invisible; a surrounding NDC halo
 * fades smoothly before contact. No time lag can leave an opaque obstruction. */
export function aerialGuardOpacity(air,avatar,margin=.18){
  if(!air.valid||!avatar.valid||air.near>=avatar.far)return 1;
  const gap=Math.max(avatar.left-air.right,air.left-avatar.right,avatar.bottom-air.top,air.bottom-avatar.top,0);
  const x=Math.min(1,gap/margin);return x*x*(3-2*x);
}
function rect(){return {left:Infinity,right:-Infinity,bottom:Infinity,top:-Infinity,near:Infinity,far:-Infinity,valid:false};}
function projectBox(box,camera,out,v){
  out.left=out.bottom=out.near=Infinity;out.right=out.top=out.far=-Infinity;out.valid=!box.isEmpty();
  if(!out.valid)return;
  for(let i=0;i<8;i++){
    v.set(i&1?box.max.x:box.min.x,i&2?box.max.y:box.min.y,i&4?box.max.z:box.min.z).applyMatrix4(camera.matrixWorldInverse);
    out.near=Math.min(out.near,-v.z);out.far=Math.max(out.far,-v.z);
    if(-v.z<=camera.near){out.left=out.bottom=-Infinity;out.right=out.top=Infinity;}else{
      v.applyMatrix4(camera.projectionMatrix);out.left=Math.min(out.left,v.x);out.right=Math.max(out.right,v.x);out.bottom=Math.min(out.bottom,v.y);out.top=Math.max(out.top,v.y);
    }
  }
  if(out.far<=camera.near)out.valid=false;
}
export function createAerialMotion(THREE,terrain,{grade,actors=[],mode='auto',lowPower=false,reduced=false,clock:sharedClock}={}){
  let currentMode=OCEAN_MOTION_MODES.includes(mode)?mode:'auto',isReduced=reduced===true,disposed=false,adaptiveLow=false,samples=0,mean=0;
  const clock=sharedClock??createOceanClock(),pauseClock=()=>{if(!sharedClock)clock.pause();},bindings=[],seen=new Set(),pose=createOceanPose(),delta=new THREE.Quaternion(),shift=new THREE.Vector3(),v=new THREE.Vector3(),center=new THREE.Vector3(),scale=new THREE.Vector3(),airBox=new THREE.Box3(),avatarBox=new THREE.Box3(),airRect=rect(),avatarRect=rect();
  for(const actor of actors){
    const route=prepareAerialRoute(actor?.motion?.route);
    if(!actor?.id?.startsWith(`G${grade}_AirV18_`)||actor.grade!==grade||!Array.isArray(actor.p)||actor.p.length!==3||!actor.p.every(Number.isFinite)||!Number.isFinite(actor.rotationZ)||actor.motion?.version!==1||!route||seen.has(actor.id)||!Number.isFinite(actor.radiusBound)||actor.radiusBound<=0||actor.radiusBound>3)continue;
    const root=terrain.getObjectByName(actor.id);if(!root||root.userData?.walkable!==false)continue;seen.add(actor.id);
    root.parent?.updateMatrixWorld(true);
    const b={root,route,radius:actor.radiusBound,rotationZ:actor.rotationZ||0,position:root.position.clone(),quaternion:root.quaternion.clone(),visible:root.visible,inverseParent:new THREE.Matrix3().setFromMatrix4(root.parent?.matrixWorld||new THREE.Matrix4()).invert(),parts:[],meshes:[],materials:[]};
    const clones=new Map();
    root.traverse(node=>{
      if(node!==root&&b.parts.length<8){const part=parseOceanMotionPart(node.userData?.oceanMotionPart);if(part)b.parts.push({node,part,quaternion:node.quaternion.clone(),axis:new THREE.Vector3(part.axis[0],part.axis[2],-part.axis[1])});}
      if(!node.material)return;
      const clone=original=>{if(!clones.has(original)){const material=original.clone();material.transparent=true;material.depthWrite=original.depthWrite;clones.set(original,material);b.materials.push({material,opacity:original.opacity,depthWrite:original.depthWrite});}return clones.get(original);};
      b.meshes.push({node,material:node.material});node.material=Array.isArray(node.material)?node.material.map(clone):clone(node.material);
    });bindings.push(b);
  }
  const active=()=>!disposed&&bindings.length>0&&!isReduced&&currentMode!=='static';
  function apply(seconds){for(const b of bindings){
    evaluateAerialRoute(b.route,seconds,pose,b.rotationZ);shift.set(pose.offset[0],pose.offset[2],-pose.offset[1]).applyMatrix3(b.inverseParent);b.root.position.copy(b.position).add(shift);
    delta.set(pose.quaternion[0],pose.quaternion[2],-pose.quaternion[1],pose.quaternion[3]);b.root.quaternion.copy(b.quaternion).multiply(delta);
    for(const p of b.parts){delta.setFromAxisAngle(p.axis,evaluateOceanPart(p.part,seconds));p.node.quaternion.copy(p.quaternion).multiply(delta);}
  }}
  apply(0);
  return {
    get active(){return active();},get seconds(){return clock.seconds;},get actorCount(){return bindings.length;},get partCount(){let n=0;for(const b of bindings)n+=b.parts.length;return n;},
    get interval(){return currentMode==='low'||lowPower||adaptiveLow?1000/15:1000/30;},get quality(){return !active()?'static':currentMode==='low'||lowPower||adaptiveLow?'low':'normal';},
    pause(){pauseClock();},setMode(value){if(disposed||!OCEAN_MOTION_MODES.includes(value))return false;currentMode=value;pauseClock();return true;},setReduced(value){isReduced=value===true;pauseClock();},
    recordFrameCost(ms){if(disposed||currentMode!=='auto'||adaptiveLow||!Number.isFinite(ms))return;mean=samples?mean*.9+ms*.1:ms;if(++samples>=30&&mean>18)adaptiveLow=true;},
    update(now,camera,avatar){
      if(disposed)return false;
      if(active())apply(clock.advance(now));else pauseClock();
      // Guard also runs while motion is frozen, since the camera/player can move.
      if(camera&&avatar&&avatar.visible){camera.updateMatrixWorld(true);avatar.updateWorldMatrix(true,true);avatarBox.setFromObject(avatar);projectBox(avatarBox,camera,avatarRect,v);}else avatarRect.valid=false;
      for(const b of bindings){let opacity=1;if(avatarRect.valid){b.root.updateWorldMatrix(true,false);b.root.getWorldPosition(center);b.root.getWorldScale(scale);const r=b.radius*Math.max(Math.abs(scale.x),Math.abs(scale.y),Math.abs(scale.z));airBox.min.copy(center).addScalar(-r);airBox.max.copy(center).addScalar(r);projectBox(airBox,camera,airRect,v);opacity=aerialGuardOpacity(airRect,avatarRect);}
        b.root.visible=b.visible&&opacity>0;for(const m of b.materials){m.material.opacity=m.opacity*opacity;m.material.depthWrite=opacity>=.999999?m.depthWrite:false;}
      }return active();
    },
    dispose(){if(disposed)return;disposed=true;pauseClock();for(const b of bindings){b.root.position.copy(b.position);b.root.quaternion.copy(b.quaternion);b.root.visible=b.visible;for(const p of b.parts)p.node.quaternion.copy(p.quaternion);for(const m of b.meshes)m.node.material=m.material;for(const m of b.materials)m.material.dispose();}bindings.length=0;},
  };
}
