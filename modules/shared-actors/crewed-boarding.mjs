import {createYuyuSurfaceSupport} from './yuyu-surface-support.mjs';
/** Candidate controller: borrowing explicit roots; caller owns assets, RAF, world collision and flight. */
export function mountCrewedBoarding(T,{rig,craft,groundPath,floorAt,isMotionSafe,isPoseSafe,isMechanismSafe,validatedAssets=false,initialOccupancy='outside'}={}){
 if(!rig?.root?.parent||!craft?.root?.parent||!Array.isArray(groundPath)||groundPath.length<2||groundPath.some(p=>!Array.isArray(p)||p.length!==3||!p.every(Number.isFinite)))throw Error('Attached rig/craft and validated approach path required');
 if(!['outside','aboard'].includes(initialOccupancy))throw Error('Invalid initial occupancy');
 if([floorAt,isMotionSafe,isPoseSafe,isMechanismSafe].some(f=>typeof f!=='function'))throw Error('Explicit ground and safety gates required');
 const character=rig.root,root=craft.root,parent=character.parent,scale=character.scale.clone(),mountedCharacter={parent:character.parent,pos:character.position.clone(),q:character.quaternion.clone(),visible:character.visible},initialCraft={parent:root.parent,pos:root.position.clone(),q:root.quaternion.clone(),scale:root.scale.clone()},support=createYuyuSurfaceSupport(T,rig,{floorAt});
 let dead=false,active=false,phase='outside',occupancy='outside',door=0,ramp=0,elapsed=0,progress=0,direction=null,blockedReason=null,snapshot=null,phaseIndex=0,phases=[],path=[],segment=0,travel=0,turnStart=0,turnDelta=0;
 const point=p=>new T.Vector3(...p),anchor=name=>{root.updateWorldMatrix(true,true);const a=craft.anchors[name];if(!a)throw Error('Missing craft anchor '+name);return a.isObject3D?a.getWorldPosition(new T.Vector3()):root.localToWorld(point(a));};
 const route=()=>[...groundPath.map(p=>point(p)),anchor('rampBottom'),anchor('rampTop'),anchor('innerThreshold'),anchor('cabinStand')].filter((p,i,a)=>!i||p.distanceTo(a[i-1])>1e-5);
 function facingYaw(dx,dz){const relative=character.getWorldQuaternion(new T.Quaternion()).invert().multiply(rig.body.getWorldQuaternion(new T.Quaternion())),face=new T.Vector3(0,0,1).applyQuaternion(relative),parentFace=new T.Vector3(0,0,1).applyQuaternion(character.parent.getWorldQuaternion(new T.Quaternion()));return Math.atan2(dx,dz)-Math.atan2(face.x,face.z)-Math.atan2(parentFace.x,parentFace.z);}
 function canFly(){if(dead||active||occupancy!=='aboard'||door!==0||ramp!==0||validatedAssets!==true)return false;try{return isPoseSafe({characterRoot:character,craftRoot:root,occupancy:'aboard'})===true;}catch(error){blockedReason='occupancy-validation-failed';return false;}}
 const state=()=>({active,phase,progress,occupancy,door:door===0?'closed':door===1?'open':direction==='board'?'opening':'moving',doorProgress:door,ramp:ramp===0?'stowed':ramp===1?'deployed':'moving',rampProgress:ramp,stowed:ramp===0,safeToFly:canFly(),blockedReason,boardingImplemented:true,disposed:dead,footSupport:support.getState()});
 function updateMechanisms(){craft.setDoor(door);craft.setRamp(ramp);root.updateMatrixWorld(true);}
 function capture(){return{parent:character.parent,pos:character.position.clone(),q:character.quaternion.clone(),scale:character.scale.clone(),visible:character.visible,door,ramp,occupancy};}
 function restore(reason){if(!snapshot)return;const s=snapshot;s.parent.attach(character);character.position.copy(s.pos);character.quaternion.copy(s.q);character.scale.copy(s.scale);character.visible=s.visible;door=s.door;ramp=s.ramp;occupancy=s.occupancy;active=false;phase=occupancy;direction=null;progress=0;blockedReason=reason;rig.seek('rest',0,{reduced:true});updateMechanisms();snapshot=null;}
 function next(){elapsed=0;phaseIndex++;if(phaseIndex>=phases.length){active=false;phase=occupancy;direction=null;progress=1;snapshot=null;rig.setState('idle');if(occupancy==='aboard')root.attach(character);return;}phase=phases[phaseIndex].name;if(phase==='walk'){path=direction==='board'?route():route().reverse();segment=1;travel=0;if(character.parent!==parent)parent.attach(character);rig.setState('walk');}if(phase==='turn'){const localForward=new T.Vector3(0,0,1).applyQuaternion(character.quaternion);turnStart=Math.atan2(localForward.x,localForward.z);const points=direction==='board'?route():route().reverse(),from=character.getWorldPosition(new T.Vector3()),to=points.find(p=>Math.hypot(p.x-from.x,p.z-from.z)>.01);turnDelta=to?Math.atan2(Math.sin(facingYaw(to.x-from.x,to.z-from.z)-turnStart),Math.cos(facingYaw(to.x-from.x,to.z-from.z)-turnStart)):0;rig.setState('idle');}}
 function start(which){if(dead||active||!['board','disembark'].includes(which))return false;if(which==='board'&&occupancy!=='outside'||which==='disembark'&&occupancy!=='aboard')return false;if(which==='disembark'&&(root.position.distanceTo(initialCraft.pos)>1e-5||root.quaternion.angleTo(initialCraft.q)>1e-5)){blockedReason='craft-not-landed-at-authoritative-anchor';return false;}
  const start=which==='board'?point(groundPath[0]):anchor('cabinStand');if(character.getWorldPosition(new T.Vector3()).distanceTo(start)>.12){blockedReason='character-not-at-authorized-start';return false;}
  if(!isMotionSafe({kind:'start',from:start.clone(),to:start.clone(),occupancy})){blockedReason='route-blocked';return false;}
  snapshot=capture();direction=which;blockedReason=null;progress=0;active=true;phaseIndex=-1;phases=[{name:'open',seconds:1.1},{name:'deploy',seconds:1.1},{name:'turn',seconds:1.2},{name:'walk',seconds:0},{name:'retract',seconds:1.1},{name:'close',seconds:1.1}];next();return true;
 }
 function update(delta,{ready=true,paused=false,reduced=false}={}){if(dead||!active)return false;if(!ready||paused){blockedReason=!ready?'waiting-for-resources':'paused';return false;}if(reduced){restore('reduced-motion-safe-rollback');return false;}const dt=Math.max(0,Math.min(.05,Number.isFinite(delta)?delta:0));if(!dt)return false;blockedReason=null;const step=phases[phaseIndex];
  try{
   if(phase==='walk'){
    const from=character.getWorldPosition(new T.Vector3()),dest=path[segment];if(!dest){occupancy=direction==='board'?'aboard':'outside';rig.setState('idle');next();return true;}
    const distance=Math.hypot(dest.x-from.x,dest.z-from.z),amount=Math.min(distance,dt*1.1),to=from.clone();if(distance>1e-7){to.x+=(dest.x-from.x)/distance*amount;to.z+=(dest.z-from.z)/distance*amount;}const floor=floorAt(to.x,to.z);if(!Number.isFinite(floor)){blockedReason='missing-path-floor';return false;}to.y=floor;
    if(!isMotionSafe({kind:'walk',from,to,occupancy,delta:dt})){blockedReason='route-blocked';return false;}
    if(character.parent!==parent)parent.attach(character);character.position.copy(parent.worldToLocal(to.clone()));if(distance>1e-7)character.quaternion.setFromAxisAngle(new T.Vector3(0,1,0),facingYaw(dest.x-from.x,dest.z-from.z));travel+=amount/scale.x;rig.update(dt,0,{travel:amount/scale.x});const supported=support.update();
    if(!supported.safe||isPoseSafe({characterRoot:character,craftRoot:root,occupancy:'threshold'})!==true){restore(supported.reason||'actual-pose-collision');return false;}
    occupancy=to.distanceTo(anchor('cabinStand'))<.1?'aboard':to.distanceTo(anchor('outerThreshold'))<1.5?'threshold':'outside';if(distance<=amount+.001)segment++;progress=.22+.55*Math.min(1,(segment-1)/Math.max(1,path.length-1));return true;
   }
   const t=Math.min(1,(elapsed+dt)/step.seconds),e=t*t*(3-2*t);
   if(phase==='open'||phase==='close'||phase==='deploy'||phase==='retract'){
    const nextDoor=phase==='open'?e:phase==='close'?1-e:door,nextRamp=phase==='deploy'?e:phase==='retract'?1-e:ramp;
    if((phase==='deploy'||phase==='retract')&&door<1){blockedReason='door-not-clear';return false;}
    if(!isMechanismSafe({phase,fromDoor:door,toDoor:nextDoor,fromRamp:ramp,toRamp:nextRamp,characterRoot:character,craftRoot:root})){blockedReason='mechanism-sweep-blocked';return false;}
    door=nextDoor;ramp=nextRamp;updateMechanisms();
   }else if(phase==='turn'){
    character.quaternion.setFromAxisAngle(new T.Vector3(0,1,0),turnStart+turnDelta*e);rig.update(dt,0,{travel:0});if(!support.update().safe||isPoseSafe({characterRoot:character,craftRoot:root,occupancy})!==true){restore('aboard-turn-blocked');return false;}
   }
   if(phase!=='turn'){rig.update(dt,0,{travel:0});const foot=support.update();if(!foot.safe){restore(foot.reason);return false;}}
   elapsed+=dt;progress=Math.max(progress,(phaseIndex+t)/phases.length);if(t===1)next();return true;
  }catch(error){restore('safety-check-failed: '+error.message);return false;}
 }
 if(initialOccupancy==='aboard'){if(character.getWorldPosition(new T.Vector3()).distanceTo(anchor('cabinStand'))>.12||isPoseSafe({characterRoot:character,craftRoot:root,occupancy:'aboard'})!==true)throw Error('Initial aboard actor must actually be safely inside the cabin');root.attach(character);occupancy='aboard';phase='aboard';}
 return{characterRoot:character,craftRoot:root,anchors:craft.anchors,walkMeshes:craft.walkMeshes,temporaryColliders:[],start,update,getState:state,cancel(reason='cancelled'){if(!active)return false;restore(reason);return true;},dispose(){if(dead)return;if(active)restore('disposed');mountedCharacter.parent.attach(character);character.position.copy(mountedCharacter.pos);character.quaternion.copy(mountedCharacter.q);character.scale.copy(scale);character.visible=mountedCharacter.visible;rig.seek('rest',0,{reduced:true});door=ramp=0;occupancy='outside';phase='outside';updateMechanisms();dead=true;},};
}
