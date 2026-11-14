import { createYuyu as createOriginalYuyu } from '../math-mission-map/v11/planet-yuyu.mjs';

// Candidate only: nothing imports this module from a production entrypoint.
// Every bind-pose vertex/material comes from the established Yuyu factory.
export const YUYU_RIG_VERSION = 'yuyu-exact-shape-rig-v1';
export const YUYU_BODY_YAW = .54;
export const YUYU_SOLE_OFFSET = .038;
export const YUYU_WALK_STRIDE = 1.2;
export const YUYU_BOARDING_STRIDE = .72;
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const ease=v=>{v=clamp(v);return v*v*(3-2*v);};
export const YUYU_STATES=Object.freeze(['rest','idle','blink','look','walk','wave','sit','sit-to-stand','stand-to-sit']);

export function createYuyuRig(T, { groundSoles=true, onState=()=>{} }={}) {
  const source=createOriginalYuyu(T,{own:x=>x,color:(c,o)=>new T.MeshStandardMaterial({color:c,...o}),mesh:(p,g,m,pos=[0,0,0])=>{const o=new T.Mesh(g,m);o.position.set(...pos);p.add(o);return o;}});
  const {root,body}=source; root.name='yuyu-character'; body.name='yuyu-rig';
  root.updateMatrixWorld(true);
  const inverseBody=body.matrixWorld.clone().invert(), originalMeshes=[];
  root.traverse(o=>{if(o.isMesh)originalMeshes.push(o);});
  const boneRoot=new T.Bone();boneRoot.name='Yuyu_Root';body.add(boneRoot);
  const bones=[boneRoot],byName={Root:boneRoot};
  function bone(name,parent,world){const b=new T.Bone();b.name='Yuyu_'+name;const p=byName[parent];p.add(b);const parentPos=p.userData.rest||[0,0,0];b.position.set(...world.map((v,i)=>v-parentPos[i]));b.userData.rest=[...world];bones.push(b);byName[name]=b;return b;}
  bone('Hips','Root',[0,.73,0]);bone('Spine','Hips',[0,.92,0]);bone('Chest','Spine',[0,1.14,0]);bone('Neck','Chest',[0,1.31,0]);bone('Head','Neck',[0,1.62,0]);
  bone('Hair','Head',[0,1.39,-.17]);bone('HairTip','Hair',[0,1.01,-.22]);
  for(const [side,s] of [['Left',-1],['Right',1]]){
    bone(side+'Thigh','Hips',[s*.128,.73,0]);bone(side+'Shin',side+'Thigh',[s*.128,.40,.0385]);bone(side+'Ankle',side+'Shin',[s*.128,.13,.07]);bone(side+'Toe',side+'Ankle',[s*.128,.085,.19]);
    bone(side+'UpperArm','Chest',[s*.255,1.20,0]);bone(side+'Forearm',side+'UpperArm',[s*.294,.965,.013]);bone(side+'Hand',side+'Forearm',[s*.31,.79,.017]);
    bone(side+'Eye','Head',[s*.116,1.60,.282]);
  }
  root.updateMatrixWorld(true);const skeleton=new T.Skeleton(bones);skeleton.calculateInverses();
  const index=new Map(bones.map((b,i)=>[b,i])),batches=new Map(),sources=[];
  const rigid=name=>[[index.get(byName[name]),1]];
  const blend=(a,b,t)=>{t=clamp(t);return[[index.get(byName[a]),1-t],[index.get(byName[b]),t]];};
  function weights(mesh,p){
    const leg=source.legs.indexOf(mesh.parent),arm=source.arms.indexOf(mesh.parent),side=p.x<0?'Left':'Right';
    if(leg!==-1){const s=leg?'Right':'Left';if(/slipper/.test(mesh.name)||mesh===source.feet[leg])return rigid(s+'Ankle');return blend(s+'Shin',s+'Thigh',(p.y-.32)/.16);}
    if(arm!==-1){const s=arm?'Right':'Left';if(mesh.name==='yuyu-hand'||mesh.geometry.parameters?.radius===1&&mesh.position.y<-.39)return rigid(s+'Hand');return blend(s+'Forearm',s+'UpperArm',(p.y-.91)/.12);}
    if(mesh.parent===source.head){
      // Include the small secondary catchlight, but never cheek/nose/hair/brow vertices.
      if(/eye-white|amber-iris|pupil|eye-catchlight|eyelash/.test(mesh.name)||(!mesh.name&&mesh.material.color?.getHex()===0xfff9ed&&mesh.position.z>.29))return rigid(side+'Eye');
      return rigid('Head');
    }
    if(/long-hair|back-lock/.test(mesh.name))return p.y>1.35?blend('Hair','Head',(p.y-1.35)/.23):blend('HairTip','Hair',(p.y-.96)/.39);
    if(p.y>1.29)return rigid('Neck');
    if(p.y>1.03)return blend('Spine','Chest',(p.y-1.03)/.18);
    return blend('Hips','Spine',(p.y-.77)/.25);
  }
  for(const mesh of originalMeshes){
    const g=mesh.geometry.clone().applyMatrix4(inverseBody.clone().multiply(mesh.matrixWorld)),positions=g.attributes.position,normals=g.attributes.normal;
    if(!batches.has(mesh.material))batches.set(mesh.material,{position:[],normal:[],uv:[],color:[],skinIndex:[],skinWeight:[],indices:[]});
    const b=batches.get(mesh.material),offset=b.position.length/3,point=new T.Vector3();
    for(let i=0;i<positions.count;i++){
      point.fromBufferAttribute(positions,i);b.position.push(...point.toArray());b.normal.push(normals.getX(i),normals.getY(i),normals.getZ(i));
      b.uv.push(g.attributes.uv?.getX(i)||0,g.attributes.uv?.getY(i)||0);
      b.color.push(g.attributes.color?.getX(i)??1,g.attributes.color?.getY(i)??1,g.attributes.color?.getZ(i)??1);
      const w=weights(mesh,point);for(let j=0;j<4;j++){b.skinIndex.push(w[j]?.[0]??0);b.skinWeight.push(w[j]?.[1]??0);}
    }
    const count=g.index?.count??positions.count;for(let i=0;i<count;i++)b.indices.push(offset+(g.index?g.index.getX(i):i));
    sources.push({name:mesh.name,material:mesh.material.uuid,batchOffset:offset,vertices:positions.count,triangles:count/3});g.dispose();
  }
  // Remove only our source instance. No world object, route or borrowed resource is touched.
  for(const child of [...body.children])if(child!==boneRoot)body.remove(child);
  const meshes=[];let materialIndex=0;
  for(const [material,b] of batches){
    const g=new T.BufferGeometry();for(const [name,size] of [['position',3],['normal',3],['uv',2],['color',3],['skinWeight',4]])g.setAttribute(name,new T.Float32BufferAttribute(b[name],size));
    g.setAttribute('skinIndex',new T.Uint16BufferAttribute(b.skinIndex,4));g.setIndex(b.indices);
    const mesh=new T.SkinnedMesh(g,material);mesh.name='Yuyu_Material_'+materialIndex++;body.add(mesh);mesh.updateMatrixWorld(true);mesh.bind(skeleton);mesh.castShadow=true;mesh.receiveShadow=true;mesh.frustumCulled=false;meshes.push(mesh);
  }
  const soleAnchors={};for(const side of ['Left','Right']){const sole=new T.Object3D();sole.name='Yuyu_'+side+'Sole';sole.position.set(0,-.092,0);byName[side+'Ankle'].add(sole);soleAnchors[side.toLowerCase()]=sole;}
  const oldGeometry=new Set(originalMeshes.map(o=>o.geometry));oldGeometry.forEach(g=>g.dispose());
  // Kept as an explicit constant, not bounds-measurement at load time.
  body.position.y=groundSoles?-YUYU_SOLE_OFFSET:0;
  const rest=new Map(bones.map(b=>[b,{position:b.position.clone(),quaternion:b.quaternion.clone(),scale:b.scale.clone()}]));
  let state='idle',seconds=0,distance=0,locomotion=0,dead=false,lastTime=null,lastPosition=root.position.clone(),paused=false;
  const snapshot=()=>({version:YUYU_RIG_VERSION,state,seconds,distance,locomotion,paused,disposed:dead,bones:bones.length,meshes:meshes.length,groundSoles,bodyYaw:YUYU_BODY_YAW});
  function restore(){for(const b of bones){const s=rest.get(b);b.position.copy(s.position);b.quaternion.copy(s.quaternion);b.scale.copy(s.scale);}}
  function solveLeg(side,z,lift,amount){
    const hip=byName[side+'Thigh'],knee=byName[side+'Shin'],ankle=byName[side+'Ankle'];
    // The ankle's original +Z offset is included in the exact two-link solution.
    const upper=Math.hypot(.33,.0385),lower=Math.hypot(.27,.0315),restAngle=Math.atan2(.07,.60),dy=.13+lift*amount-(.73-.075*amount),dz=.07+z*amount;
    const d=Math.min(upper+lower-1e-6,Math.hypot(dy,dz)),flex=Math.acos(clamp((d*d-upper*upper-lower*lower)/(2*upper*lower),-1,1));
    const a=Math.atan2(-dz,-dy)-Math.atan2(lower*Math.sin(flex),upper+lower*Math.cos(flex));
    hip.rotation.x=a+restAngle;knee.rotation.x=flex;ankle.rotation.x=-(hip.rotation.x+knee.rotation.x);
  }
  function pose({reduced=false,stride=YUYU_BOARDING_STRIDE,phase=distance/stride,blend=locomotion}={}){
    restore();if(reduced)return;
    const t=seconds;
    if(state==='sit'||state==='stand-to-sit'||state==='sit-to-stand'){
      const sit=state==='sit'?1:state==='sit-to-stand'?1-ease(t/1.2):ease(t/1.2);
      byName.Hips.position.y-=.33*(1-Math.cos(Math.PI/2*sit))+.0385*Math.sin(Math.PI/2*sit);byName.Chest.rotation.x=.04*sit;
      for(const side of ['Left','Right']){byName[side+'Thigh'].rotation.x=-Math.PI/2*sit;byName[side+'Shin'].rotation.x=Math.PI/2*sit;byName[side+'UpperArm'].rotation.x=-.6*sit;byName[side+'Forearm'].rotation.x=-.5*sit;}
    }else if(blend>0){
      byName.Hips.position.y-=.075*blend;
      for(const [side,offset] of [['Left',0],['Right',.5]]){
        const p=(phase+offset)%1,stance=.62,half=.72*stance/2,swing=clamp((p-stance)/(1-stance));
        const z=p<stance?half-.72*p:-half+2*half*ease(swing),lift=p<stance?0:.10*Math.sin(Math.PI*swing);
        solveLeg(side,z,lift,blend);byName[side+'UpperArm'].rotation.x=(side==='Left'?1:-1)*.20*Math.sin(phase*Math.PI*2)*blend;
      }
    }
    if(state==='wave'){byName.RightUpperArm.rotation.z=1.1*ease(t/.3);byName.RightUpperArm.rotation.x=-.25*ease(t/.3);byName.RightForearm.rotation.z=1.35*ease(t/.3);byName.RightForearm.rotation.x=-.2*ease(t/.3);byName.RightHand.rotation.z=Math.sin(t*9)*.22;}
    if(state==='look')byName.Head.rotation.y=Math.sin(t*1.1)*.28;
    if(state==='idle')byName.Chest.rotation.x=Math.sin(t*1.7)*.008;
    byName.Hair.rotation.z=Math.sin(t*2)*.012*blend;byName.HairTip.rotation.x=Math.sin(t*2+.6)*.025*blend;
    const blinkTime=state==='blink'?t%1:t%4.6,blink=state==='blink'?(blinkTime<.22?Math.sin(blinkTime/.22*Math.PI):0):(blinkTime>4.35?Math.sin((blinkTime-4.35)/.25*Math.PI):0);
    byName.LeftEye.scale.y=byName.RightEye.scale.y=1-.94*Math.max(0,blink);
  }
  function setState(next){if(dead||!YUYU_STATES.includes(next))return false;if(next===state)return true;state=next;seconds=0;onState(snapshot());return true;}
  function update(delta,speed=0,{travel=null,reduced=false,stride=YUYU_BOARDING_STRIDE}={}){
    if(dead||paused)return false;const dt=clamp(Number.isFinite(delta)?delta:0,0,.1);seconds+=dt;
    const step=travel!==null?Math.max(0,Number.isFinite(travel)?travel:0):Math.abs(Number.isFinite(speed)?speed:0)*dt;
    distance+=reduced?0:step;const target=!reduced&&(state==='walk'||step>1e-6)?1:0;locomotion+=(target-locomotion)*(1-Math.exp(-dt*14));if(Math.abs(target-locomotion)<.001)locomotion=target;
    pose({reduced,stride});root.updateMatrixWorld(true);skeleton.update();return true;
  }
  function animate(now,walking,reduced=false,{stride=YUYU_WALK_STRIDE}={}){const dt=lastTime===null?0:Math.max(0,(now-lastTime)/1000),travel=walking?Math.hypot(root.position.x-lastPosition.x,root.position.z-lastPosition.z)/(root.scale.x||1):0;lastTime=now;lastPosition.copy(root.position);if(state==='idle'||state==='walk')setState(walking?'walk':'idle');return update(dt,0,{travel,reduced,stride});}
  function seek(next,time,{travel=0,walking=next==='walk',reduced=false}={}){if(dead||!YUYU_STATES.includes(next))return false;state=next;seconds=Math.max(0,time);distance=Math.max(0,travel);locomotion=walking?1:0;pose({reduced});root.updateMatrixWorld(true);skeleton.update();return true;}
  function dispose(){if(dead)return;dead=true;const geometries=new Set(meshes.map(m=>m.geometry)),materials=new Set(meshes.map(m=>m.material));geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());skeleton.dispose();root.removeFromParent();}
  return {root,body,soleAnchors,bones:byName,skeleton,meshes,sources,setState,update,animate,seek,getState:snapshot,pause(value=true){paused=Boolean(value);lastTime=null;lastPosition.copy(root.position);},dispose};
}

// Explicit export bake for offline/authoring tools. Runtime does not run a second mixer.
export function createYuyuAnimationClips(T,rig,{fps=30}={}){
  const specs=[['rest',1],['idle',4.6],['blink',1],['look',4],['walk',1],['wave',2],['sit',1],['sit-to-stand',1.2],['stand-to-sit',1.2]],clips=[];
  for(const [name,duration] of specs){const tracks=[],frames=Math.ceil(duration*fps),times=Array.from({length:frames+1},(_,i)=>duration*i/frames),samples=new Map(Object.values(rig.bones).map(b=>[b,{p:[],q:[],s:[]}]));
    for(const t of times){rig.seek(name,t,{travel:name==='walk'?.72*t/duration:0});for(const [b,v]of samples){v.p.push(...b.position.toArray());v.q.push(...b.quaternion.toArray());v.s.push(...b.scale.toArray());}}
    for(const[b,v]of samples){tracks.push(new T.VectorKeyframeTrack(b.name+'.position',times,v.p),new T.QuaternionKeyframeTrack(b.name+'.quaternion',times,v.q),new T.VectorKeyframeTrack(b.name+'.scale',times,v.s));}
    clips.push(new T.AnimationClip('Yuyu_'+name,duration,tracks));
  }
  rig.seek('idle',0,{reduced:true});return clips;
}
