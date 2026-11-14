import { createYuyuRig } from './yuyu-rig.mjs';
const active=new WeakSet();
/** Reversible character-only swap. Deliberately not a boarding adapter. */
export function mountYuyuRig(T,{characterRoot,onState=()=>{}}={}){
  if(!characterRoot?.isObject3D||!characterRoot.parent)throw Error('An attached authoritative characterRoot is required');
  if(active.has(characterRoot))throw Error('A Yuyu rig is already mounted for this character');
  const original={root:characterRoot,parent:characterRoot.parent,visible:characterRoot.visible};
  const rig=createYuyuRig(T,{groundSoles:true,onState});let disposed=false;
  try{rig.root.position.copy(characterRoot.position);rig.root.quaternion.copy(characterRoot.quaternion);rig.root.scale.copy(characterRoot.scale);rig.root.visible=characterRoot.visible;original.parent.add(rig.root);characterRoot.visible=false;active.add(characterRoot);}catch(error){rig.dispose();throw error;}
  return {characterRoot:rig.root,rig,anchors:{leftSole:rig.soleAnchors.left,rightSole:rig.soleAnchors.right},walkMeshes:[],temporaryColliders:[],borrowedResources:[characterRoot],
    getState(){return {...rig.getState(),disposed,boardingImplemented:false,occupancy:'outside',safeToFly:false,blockedReason:'AUTHORED_CABIN_TOO_NARROW_UNVERIFIED_HATCH'};},
    setState:rig.setState,update:rig.update,animate:rig.animate,pause:rig.pause,
    cancel(){if(disposed)return false;rig.seek('rest',0,{reduced:true});rig.pause(false);return true;},
    dispose(){if(disposed)return;disposed=true;rig.dispose();original.root.visible=original.visible;active.delete(characterRoot);}
  };
}
