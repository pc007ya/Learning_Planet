import {createOceanClock,createOceanPose,OCEAN_MOTION_MODES} from './ocean-motion.mjs?v=20261111-v23-cockpit';
import {prepareAerialRoute,evaluateAerialRoute,aerialGuardOpacity} from './aerial-motion.mjs?v=20261111-v23-cockpit';
import {GAIT,prepareMechPatrol,createPatrolState,evaluateMechPatrol,createNativePose,evaluateMechPose,evaluateRotorPose,createPilotedArmPose,evaluatePilotedArmPose} from './exploration-pose.mjs?v=20261111-v23-cockpit';
export const EXPLORATION_VERSION=1;
const MECH_PARTS=Object.freeze(['BodyPivot','HipL','KneeL','AnkleL','HipR','KneeR','AnkleR','ArmL','ArmR','Scanner']);
const PILOTED_PARTS=Object.freeze([...MECH_PARTS,'ElbowL','WristL','ElbowR','WristR']);
const ARM_INDEX=Object.freeze({ArmL:0,ElbowL:1,WristL:2,ArmR:3,ElbowR:4,WristR:5});
export const PILOTED_MECH_ARTICULATION='piloted-mech-v2';
const ROTOR_PARTS=Object.freeze(['RotorL','RotorR','Scanner','TailRudder']);
const JOINT_INDEX=Object.freeze({HipL:0,KneeL:1,AnkleL:2,HipR:3,KneeR:4,AnkleR:5,ArmL:6,ArmR:7,Scanner:8,TailRudder:9,RotorL:0,RotorR:1});
function rect(){return {left:Infinity,right:-Infinity,bottom:Infinity,top:-Infinity,near:Infinity,far:-Infinity,valid:false};}
function projectBox(box,camera,out,v){
  out.left=out.bottom=out.near=Infinity;out.right=out.top=out.far=-Infinity;out.valid=!box.isEmpty();if(!out.valid)return;
  for(let i=0;i<8;i++){
    v.set(i&1?box.max.x:box.min.x,i&2?box.max.y:box.min.y,i&4?box.max.z:box.min.z).applyMatrix4(camera.matrixWorldInverse);out.near=Math.min(out.near,-v.z);out.far=Math.max(out.far,-v.z);
    if(-v.z<=camera.near){out.left=out.bottom=-Infinity;out.right=out.top=Infinity;}else{v.applyMatrix4(camera.projectionMatrix);out.left=Math.min(out.left,v.x);out.right=Math.max(out.right,v.x);out.bottom=Math.min(out.bottom,v.y);out.top=Math.max(out.top,v.y);}
  }
  if(out.far<=camera.near)out.valid=false;
}
const finitePoint=p=>Array.isArray(p)&&p.length===3&&p.every(x=>Number.isFinite(x)&&Math.abs(x)<=500);
const approx=(a,b,e=1e-5)=>Math.abs(a-b)<=e;
export function validateExplorationActor(actor,grade){
  const kind=actor?.kind;if(!['mech','rotorcraft'].includes(kind)||actor.id!==`G${grade}_ExploreV22_${kind}`||actor.grade!==grade||actor.version!==1||actor.walkable!==false||actor.motion?.version!==1||!finitePoint(actor.p)||!Number.isFinite(actor.rotationZ))return null;
  if(kind==='rotorcraft'){
    const route=prepareAerialRoute(actor.motion.route);
    if(!route||!Number.isFinite(actor.radiusBound)||actor.radiusBound<2.279||actor.radiusBound>2.5||actor.p[2]+route.minAltitude-actor.radiusBound<12)return null;
    return {kind,route,radius:actor.radiusBound};
  }
  const route=prepareMechPatrol(actor.motion.route),articulation=actor.motion.articulation;
  if(articulation!==undefined&&articulation!==PILOTED_MECH_ARTICULATION)return null;
  const piloted=articulation===PILOTED_MECH_ARTICULATION;
  // Piloted values are certified in release metadata, not inferred from mesh names.
  if(piloted?(!Number.isFinite(actor.heightBound)||actor.heightBound<3||actor.heightBound>3.5):actor.heightBound!==2.75)return null;
  if(!route||!approx(actor.p[0],route.x)||!approx(actor.p[1],route.y)||!approx(actor.p[2],route.z)||Math.abs(Math.sin((actor.rotationZ-route.yaw)/2))>1e-6||actor.horizontalRadius!==1.5)return null;
  return piloted?{kind,route,radius:1.5,height:actor.heightBound,piloted:true}:{kind,route,radius:1.5};
}
/** Externally supplied clock is owned by the host. Controllers must not pause
 * it independently: the host pauses once for visibility/mode/reduced changes.
 * Terrain parents and roots must be unit scale, as certified clearance is in
 * map units. Invalid actors are skipped before changing any mesh or material.
 */
export function createExplorationMotion(THREE,terrain,{grade,actors=[],mode='auto',lowPower=false,reduced=false,clock:sharedClock}={}){
  const clock=sharedClock??createOceanClock(),ownsClock=!sharedClock;
  if(!clock||typeof clock.advance!=='function'||typeof clock.pause!=='function'||!Number.isFinite(clock.seconds))throw new TypeError('Invalid active clock');
  let currentMode=OCEAN_MOTION_MODES.includes(mode)?mode:'auto',isReduced=reduced===true,disposed=false,adaptiveLow=false,samples=0,mean=0;
  const bindings=[],seen=new Set(),pose=createNativePose(),armPose=createPilotedArmPose(),flight=createOceanPose(),patrol=createPatrolState(),delta=new THREE.Quaternion(),parentQ=new THREE.Quaternion(),shift=new THREE.Vector3(),v=new THREE.Vector3(),center=new THREE.Vector3(),scale=new THREE.Vector3(),box=new THREE.Box3(),avatarBox=new THREE.Box3(),actorRect=rect(),avatarRect=rect();
  const pause=()=>{if(ownsClock)clock.pause();};
  for(const actor of Array.isArray(actors)?actors:[]){
    const valid=validateExplorationActor(actor,grade);if(!valid||seen.has(actor.id))continue;
    const matches=[];terrain.traverse(n=>{if(n.name===actor.id)matches.push(n);});const root=matches.length===1?matches[0]:null;
    if(!root||root.userData.walkable!==false||root.userData.explorationKind!==valid.kind)continue;
    root.updateWorldMatrix(true,true);root.getWorldPosition(center);root.getWorldScale(scale);
    if(!approx(center.x,actor.p[0])||!approx(center.y,actor.p[2])||!approx(center.z,-actor.p[1])||![scale.x,scale.y,scale.z].every(x=>approx(x,1,1e-6)))continue;
    const nodes=new Map(),duplicates=new Set();root.traverse(n=>{if(n===root)return;const suffix=n.name.startsWith(actor.id+'__')?n.name.slice(actor.id.length+2):'';if(nodes.has(suffix))duplicates.add(suffix);nodes.set(suffix,n);});
    const names=valid.kind==='mech'?(valid.piloted?PILOTED_PARTS:MECH_PARTS):ROTOR_PARTS;if(names.some(name=>!nodes.has(name)||duplicates.has(name)))continue;
    let hierarchy=true;
    for(const name of names){const node=nodes.get(name),expected=valid.kind==='rotorcraft'?root:name==='BodyPivot'?root:name.startsWith('Knee')?nodes.get('Hip'+name.at(-1)):name.startsWith('Ankle')?nodes.get('Knee'+name.at(-1)):name.startsWith('Elbow')?nodes.get('Arm'+name.at(-1)):name.startsWith('Wrist')?nodes.get('Elbow'+name.at(-1)):nodes.get('BodyPivot');if(node.parent!==expected)hierarchy=false;if(![node.scale.x,node.scale.y,node.scale.z].every(x=>approx(x,1,1e-6)))hierarchy=false;}
    if(valid.kind==='mech')for(const side of ['L','R']){
      const h=nodes.get('Hip'+side),k=nodes.get('Knee'+side),a=nodes.get('Ankle'+side);
      if(!approx(h.position.x,side==='L'?-.46:.46)||!approx(h.position.y,0)||!approx(h.position.z,0)||!approx(k.position.x,0)||!approx(k.position.y,-.60)||!approx(k.position.z,0)||!approx(a.position.x,0)||!approx(a.position.y,-.65)||!approx(a.position.z,0))hierarchy=false;
    }
    if(valid.kind==='mech'){
      // A partial or unadvertised articulated hierarchy must not silently freeze.
      if(!valid.piloted&&['ElbowL','ElbowR','WristL','WristR'].some(name=>nodes.has(name)))hierarchy=false;
      if(valid.piloted)for(const side of ['L','R']){
        const arm=nodes.get('Arm'+side),elbow=nodes.get('Elbow'+side),wrist=nodes.get('Wrist'+side);
        if(!approx(arm.position.x,side==='L'?-.84:.84)||!approx(arm.position.y,.89)||!approx(arm.position.z,-.04)||!approx(elbow.position.x,0)||!approx(elbow.position.y,-.54)||!approx(elbow.position.z,0)||!approx(wrist.position.x,0)||!approx(wrist.position.y,-.52)||!approx(wrist.position.z,0))hierarchy=false;
      }
    }
    if(!hierarchy)continue;
    const parent=root.parent;parent?.updateWorldMatrix(true,false);parent?.getWorldQuaternion(parentQ);if(!parent)parentQ.identity();
    const b={root,...valid,actor,position:root.position.clone(),quaternion:root.quaternion.clone(),visible:root.visible,inverseParent:new THREE.Matrix3().setFromMatrix4(parent?.matrixWorld||new THREE.Matrix4()).invert(),inverseParentQ:parentQ.clone().invert(),parts:[],meshes:[],materials:[]};
    for(const name of names)b.parts.push({name,node:nodes.get(name),position:nodes.get(name).position.clone(),quaternion:nodes.get(name).quaternion.clone()});
    const clones=new Map();root.traverse(node=>{
      if(!node.material)return;
      const clone=original=>{if(!clones.has(original)){const material=original.clone();material.transparent=true;material.depthWrite=original.depthWrite;clones.set(original,material);b.materials.push({material,opacity:original.opacity,depthWrite:original.depthWrite});}return clones.get(original);};
      b.meshes.push({node,material:node.material});node.material=Array.isArray(node.material)?node.material.map(clone):clone(node.material);
    });bindings.push(b);seen.add(actor.id);
  }
  const active=()=>!disposed&&bindings.length>0&&!isReduced&&currentMode!=='static';
  function apply(seconds){for(const b of bindings){
    if(b.kind==='mech'){
      evaluateMechPatrol(b.route,seconds,patrol);evaluateMechPose(patrol.parameter,seconds,pose);if(b.piloted)evaluatePilotedArmPose(patrol.parameter,seconds,armPose);shift.set(patrol.offset[0],0,-patrol.offset[1]);delta.set(0,Math.sin(b.route.yaw/2),0,Math.cos(b.route.yaw/2));
    }else{
      evaluateAerialRoute(b.route,seconds,flight,0);evaluateRotorPose(seconds,pose);shift.set(flight.offset[0],flight.offset[2]+pose.rootBob,-flight.offset[1]);delta.set(flight.quaternion[0],flight.quaternion[2],-flight.quaternion[1],flight.quaternion[3]);
    }
    b.root.position.copy(b.position).add(shift.applyMatrix3(b.inverseParent));b.root.quaternion.copy(b.inverseParentQ).multiply(delta);
    for(const p of b.parts){
      if(p.name==='BodyPivot'){p.node.position.set(0,pose.bodyZ,0);p.node.quaternion.identity();continue;}
      const a=(b.piloted&&Object.hasOwn(ARM_INDEX,p.name)?armPose[ARM_INDEX[p.name]]:pose.angles[JOINT_INDEX[p.name]])/2,s=Math.sin(a),c=Math.cos(a),zAxis=p.name==='Scanner'||p.name==='TailRudder'||p.name.startsWith('Rotor');p.node.quaternion.set(zAxis?0:s,zAxis?s:0,0,c);
    }
  }}
  apply(clock.seconds);
  return {
    get active(){return active();},get seconds(){return clock.seconds;},get actorCount(){return bindings.length;},get partCount(){let n=0;for(const b of bindings)n+=b.parts.length;return n;},
    get interval(){return currentMode==='low'||lowPower||adaptiveLow?1000/15:1000/30;},get quality(){return !active()?'static':currentMode==='low'||lowPower||adaptiveLow?'low':'normal';},
    pause,setMode(value){if(disposed||!OCEAN_MOTION_MODES.includes(value))return false;currentMode=value;pause();return true;},setReduced(value){if(disposed)return;isReduced=value===true;pause();},
    recordFrameCost(ms){if(disposed||currentMode!=='auto'||adaptiveLow||!Number.isFinite(ms)||ms<0)return;mean=samples?mean*.9+ms*.1:ms;if(++samples>=30&&mean>18)adaptiveLow=true;},
    update(now,camera,avatar){
      if(disposed)return false;if(active())apply(clock.advance(now));else pause();
      if(camera&&avatar&&avatar.visible){camera.updateMatrixWorld(true);avatar.updateWorldMatrix(true,true);avatarBox.setFromObject(avatar);projectBox(avatarBox,camera,avatarRect,v);}else avatarRect.valid=false;
      for(const b of bindings){let opacity=1;if(avatarRect.valid){b.root.updateWorldMatrix(true,false);b.root.getWorldPosition(center);
        if(b.kind==='mech'){box.min.set(center.x-1.5,center.y,center.z-1.5);box.max.set(center.x+1.5,center.y+(b.height??2.75),center.z+1.5);}else{box.min.copy(center).addScalar(-b.radius);box.max.copy(center).addScalar(b.radius);}
        projectBox(box,camera,actorRect,v);opacity=aerialGuardOpacity(actorRect,avatarRect);
        // Player contact is visual-only. Do not steer, block or relocate Yuyu.
        if(b.kind==='mech'&&box.intersectsBox(avatarBox))opacity=0;
      }
        b.root.visible=b.visible&&opacity>0;for(const m of b.materials){m.material.opacity=m.opacity*opacity;m.material.depthWrite=opacity>=.999999?m.depthWrite:false;}
      }return active();
    },
    dispose(){if(disposed)return;disposed=true;pause();for(const b of bindings){b.root.position.copy(b.position);b.root.quaternion.copy(b.quaternion);b.root.visible=b.visible;for(const p of b.parts){p.node.position.copy(p.position);p.node.quaternion.copy(p.quaternion);}for(const m of b.meshes)m.node.material=m.material;for(const m of b.materials)m.material.dispose();}bindings.length=0;},
  };
}
