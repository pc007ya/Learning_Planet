export const NATURE_WORLD_VERSION='nature-planet-world-v1';
export function normalizeNatureFilters({grade=1,publisher='康軒',semester=1}={}) {
 return {grade:[1,2,3,4,5,6].includes(Number(grade))?Number(grade):1,publisher:['康軒','南一'].includes(publisher)?publisher:'康軒',semester:Number(semester)===2?2:1};
}
export function natureUnits(catalog,filters) {const f=normalizeNatureFilters(filters);return (catalog?.units||[]).filter(u=>u.grade===f.grade&&u.publisher===f.publisher&&u.semester===f.semester);}
export function restoreNatureState(value,grade,metadata) {
 const valid=value?.worldVersion===NATURE_WORLD_VERSION&&value.grade===grade&&Array.isArray(value.position)&&value.position.length===3&&value.position.every(Number.isFinite);
 return valid?{worldVersion:NATURE_WORLD_VERSION,grade,position:[...value.position],mode:value.mode==='follow'?'follow':'overview',landed:value.landed===true}:null;
}
export function canEnterNatureUnit(state,unitId,metadata) {
 const s=metadata?.stationsData?.find(x=>x.id===unitId);
 if(!s||!state?.ready||!state.landed||state.contextLost||state.flight?.active||state.boarding?.active||state.boarding?.approaching||state.boarding?.occupancy==='aboard'||state.moving||state.remainingWaypoints>0)return false;
 const p=state.position;if(!Array.isArray(p)||p.length!==3)return false;
 return Math.hypot(p[0]-s.entry[0],p[2]+s.entry[1])<1.8-1e-9;
}
export function validateNatureMetadata(data,grade,catalog){
 const units=(catalog?.units||[]).filter(u=>u.grade===grade),ids=units.map(u=>u.id),stations=data?.stationsData||[];
 if(data?.grade!==grade||data.worldVersion!==NATURE_WORLD_VERSION||data.layoutVersion!=='nature-gardens-v1')throw Error('自然星球版本不一致');
 if(new Set(stations.map(x=>x.id)).size!==stations.length||stations.length!==ids.length||ids.some(id=>!stations.some(x=>x.id===id)))throw Error('自然星球課程入口不完整');
 return true;
}
