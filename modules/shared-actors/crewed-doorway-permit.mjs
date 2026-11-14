/** Narrow, per-actor exception. Never removes or edits the world's ship collider. */
export function createCrewedDoorwayPermit(T,boarding,{shipCollider,walkMeshes}={}){
 if(!boarding?.characterRoot||!boarding?.craftRoot||!shipCollider)throw Error('Explicit controller and borrowed ship collider required');
 const point=new T.Vector3();return{forActor(actor,worldPosition){const state=boarding.getState();if(actor!==boarding.characterRoot||!state.active||state.phase!=='walk'||state.door!=='open'||state.ramp!=='deployed')return null;point.copy(worldPosition);boarding.craftRoot.worldToLocal(point);if(Math.abs(point.x)>.65||point.z< -2.71||point.z>.71||point.y<-.05||point.y>3.0)return null;return{ignoreCollider:shipCollider,additionalWalkMeshes:walkMeshes||boarding.walkMeshes,onlyForActor:actor,controllerOwned:true};}};
}
