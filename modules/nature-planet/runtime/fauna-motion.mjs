/** Articulated, deterministic fauna. Caller owns scheduling and safety-checked paths.
 * Paths are straight segments with eased acceleration; no spline overshoot and no generated circles.
 * Blender models face -Y, which exports to Three.js +Z. World paths use Three.js XYZ.
 */
export function createFaunaMotion(THREE, records, {sampleFloor, reducedMotion=false}={}) {
 const supportWarnings=[];
 const states=records.map((r,i)=>{
  if(!r.root||!Array.isArray(r.path)||r.path.length<2||r.path.some(p=>p.length!==3||p.some(v=>!Number.isFinite(v))))throw new Error('Fauna requires a root and at least two finite authored path points');
  const parts=[];r.root.traverse(o=>{if(/Fauna_(head|leg_|wing_|tail|claw_)/.test(o.name))parts.push({o,rot:o.rotation.clone(),pos:o.position.clone()});});
  // Cache actual child-geometry bounds in each support pivot's coordinates once (legs and the otter tail).
  // A conservative corner envelope avoids per-frame vertex scans and never lifts the whole animal.
  r.root.updateWorldMatrix(true,true);
  const rootInverse=r.root.matrixWorld.clone().invert();
  for(const p of parts){if(!p.o.name.includes('leg_')&&!(r.species==='otter'&&p.o.name.includes('tail')))continue;p.footCorners=[];const inverse=p.o.matrixWorld.clone().invert();p.o.traverse(child=>{if(!child.isMesh)return;const g=child.geometry;if(!g.boundingBox)g.computeBoundingBox();const b=g.boundingBox,m=inverse.clone().multiply(child.matrixWorld);for(const x of [b.min.x,b.max.x])for(const y of [b.min.y,b.max.y])for(const z of [b.min.z,b.max.z])p.footCorners.push(new THREE.Vector3(x,y,z).applyMatrix4(m));});
   const parentToRoot=rootInverse.clone().multiply(p.o.parent?.matrixWorld??new THREE.Matrix4());p.parentToRoot=parentToRoot;p.upInParent=new THREE.Vector3().setFromMatrixColumn(parentToRoot.clone().invert(),1);p.footMatrix=new THREE.Matrix4();p.worldFootPoint=new THREE.Vector3();p.footPoint=new THREE.Vector3();
  }
  // Ping-pong traversal returns along precisely the same checked segments, never an unchecked closing chord.
  const route=[...r.path,...r.path.slice(0,-1).reverse()],speed=Math.max(.03,r.speed??({deer:.35,frog:.12,songbird:.5,otter:.28,squirrel:.30,crab:.14,dragonfly:.55,butterfly:.25}[r.species]??.25));
  let total=0;const segments=[];
  for(let j=0;j<route.length-1;j++){const a=route[j],b=route[j+1],length=Math.hypot(b[0]-a[0],b[1]-a[1],b[2]-a[2]);if(length<.001)continue;const duration=length/speed,dwell=(j%2?2.4:1.4);segments.push({a,b,start:total,duration,dwell,end:total+duration+dwell});total+=duration+dwell;}
  if(!segments.length)throw new Error('Fauna path must contain distinct points');
  return {r,parts,segments,total,phase:r.phase??i*1.71,initial:{pos:r.root.position.clone(),rot:r.root.rotation.clone()},heading:r.root.rotation.y,frozen:[...r.path[0]]};
 });
 let disposed=false;
 const smooth=t=>t*t*(3-2*t),lerpAngle=(a,b,t)=>a+Math.atan2(Math.sin(b-a),Math.cos(b-a))*t;
 function update(elapsed,dt=1/60){
  if(disposed||!Number.isFinite(elapsed))return;dt=Math.max(0,Math.min(.1,Number.isFinite(dt)?dt:0));
  for(const s of states){const {r}=s,t=((elapsed+s.phase)%s.total+s.total)%s.total,seg=s.segments.find(a=>t<a.end)||s.segments.at(-1),u=Math.min(1,(t-seg.start)/seg.duration),travel=u<1&&!reducedMotion,e=smooth(u),a=seg.a,b=seg.b;
   let x=a[0]+(b[0]-a[0])*e,y=a[1]+(b[1]-a[1])*e,z=a[2]+(b[2]-a[2])*e;const flying=r.mode==='fly'||['songbird','butterfly','dragonfly'].includes(r.species)&&r.mode!=='walk';
   if(reducedMotion){[x,y,z]=s.frozen;}
   else if(flying)y+=Math.sin(elapsed*2+s.phase)*.035;
   else if(sampleFloor){const floor=sampleFloor(x,z);if(Number.isFinite(floor))y=floor;}
   if(flying&&sampleFloor){const floor=sampleFloor(x,z),clearance=r.flightClearance??((r.radius??FAUNA_CLEARANCE[r.species]??.3)+.25);if(Number.isFinite(floor)){y=Math.max(y,floor+Math.max(0,Number.isFinite(clearance)?clearance:.55));if(reducedMotion)s.frozen[1]=y;}}
   const gaitWeight=travel?smooth(Math.min(1,u/.08,(1-u)/.08)):0;
   if(!flying&&r.species==='frog'&&travel)y+=Math.max(0,Math.sin(elapsed*5+s.phase))*.055*gaitWeight;
   r.root.position.set(x,y,z);
   if(travel){const target=Math.atan2(b[0]-a[0],b[2]-a[2]);s.heading=lerpAngle(s.heading,target,Math.min(1,dt*5));r.root.rotation.y=s.heading;}
   r.root.updateWorldMatrix(true,false);
   for(let i=0;i<s.parts.length;i++){const p=s.parts[i],name=p.o.name;p.o.rotation.copy(p.rot);p.o.position.copy(p.pos);if(!reducedMotion){
    if(name.includes('leg_')&&travel){const side=name.includes('L')?-1:1,back=/back|leg_1|leg_3/.test(name)?-1:1;p.o.rotation.x+=Math.sin(elapsed*(r.species==='deer'?5:8)+s.phase)*side*back*(r.species==='crab'?.13:.22)*gaitWeight;}
    if(name.includes('wing_')){const side=name.includes('L')?-1:1;p.o.rotation.z+=side*(flying?.12+Math.sin(elapsed*(r.species==='dragonfly'?42:19)+s.phase)*.5:.025*Math.sin(elapsed*1.2));}
    if(name.includes('head')){p.o.rotation.x+=travel?.025*Math.sin(elapsed*3):.09+.07*Math.sin(elapsed*.9+s.phase);p.o.rotation.y+=!travel?.10*Math.sin(elapsed*.7+s.phase):0;}
    if(name.includes('tail'))p.o.rotation.y+=Math.sin(elapsed*(travel?3:1.2)+s.phase)*.10;
    if(name.includes('claw_'))p.o.rotation.x+=.08*Math.sin(elapsed*1.4+s.phase+i);
    }
    if(p.footCorners?.length){p.o.updateMatrix();p.footMatrix.multiplyMatrices(p.parentToRoot,p.o.matrix);let lowest=Infinity,worldDeficit=0;const upY=r.root.matrixWorld.elements[5];
     for(const corner of p.footCorners){p.footPoint.copy(corner).applyMatrix4(p.footMatrix);lowest=Math.min(lowest,p.footPoint.y);if(!flying&&sampleFloor){p.worldFootPoint.copy(p.footPoint).applyMatrix4(r.root.matrixWorld);const floor=sampleFloor(p.worldFootPoint.x,p.worldFootPoint.z);if(Number.isFinite(floor))worldDeficit=Math.max(worldDeficit,floor+.002-p.worldFootPoint.y);}}
     const required=Math.max(0,.002-lowest,upY>1e-8?worldDeficit/upY:0),worldRequired=required*upY;
     if(worldRequired>.12){if(!p.supportWarning){p.supportWarning={actorId:r.id??r.species,species:r.species,part:name,requiredLift:worldRequired,limit:.12,elapsed,worldPosition:r.root.position.toArray()};supportWarnings.push(p.supportWarning);}else if(worldRequired>p.supportWarning.requiredLift)Object.assign(p.supportWarning,{requiredLift:worldRequired,elapsed,worldPosition:r.root.position.toArray()});}
     if(upY>1e-8)p.o.position.addScaledVector(p.upInParent,Math.min(required,.12/upY));
    }

   }
  }
 }
 return {update,supportWarnings,setReduced(value){const next=Boolean(value);if(next&&!reducedMotion)for(const s of states)s.frozen=s.r.root.position.toArray();reducedMotion=next;},dispose(){if(disposed)return;disposed=true;for(const s of states){s.r.root.position.copy(s.initial.pos);s.r.root.rotation.copy(s.initial.rot);for(const p of s.parts){p.o.rotation.copy(p.rot);p.o.position.copy(p.pos);}}}};
}
export const FAUNA_CLEARANCE=Object.freeze({songbird:.36,butterfly:.34,dragonfly:.36,frog:.27,squirrel:.57,deer:.95,otter:.75,crab:.48});

export const FAUNA_SPEED=Object.freeze({songbird:.5,butterfly:.25,dragonfly:.55,frog:.12,squirrel:.30,deer:.35,otter:.28,crab:.14});

export const FAUNA_MOTION_VERSION='v3.2-world-slope-foot-support';
