import {loadIntegratedCurriculum} from './scoped-data.mjs';
import {unitArtURL} from '../nature-planet/unit-art.mjs';
import {createProgressStore} from './store.mjs?v=20261115-quiz-v3';

const TINTS=['#58c7a0','#63b5e5','#9b8ce8','#e7aa61','#73c6b8','#c48dde'];
/** Only the selected grade/semester catalog is needed to draw the classic cards. */
export async function loadClassicCards({grade=1,semester=1,fetcher=fetch,signal}={}) {
 const {catalog}=await loadIntegratedCurriculum({grade,semester},{fetcher,signal,exercises:false});
 return catalog.units.map(unit=>({
  id:unit.id,grade:unit.grade,kind:'curriculum-unit',difficulty:1,icon:'🌱',
  // Resolve availability through the same registry as the 3D map, not a guessed filename.
  art:unitArtURL(unit.id)?`images/science-unit-art/${unit.id}.webp`:null,
  tint:TINTS[unit.grade-1],title:unit.title,
  sub:(unit.activities||[]).map(a=>a.title).slice(0,2).join(' · '),
  semester:unit.semester,source_unit_ids:[...(unit.source_unit_ids||[unit.id])]
 }));
}

/** completed counts unique saved attempts, not mastery or unrelated subject scores. */
export function getClassicProgress(unit,storage,learnerId='preview') {
 const empty={completed:0,totalCorrect:0,totalAnswers:0,hasActive:false};
 try {
  if(!unit?.id||!storage?.getItem)return empty;
  // The existing store owns its key, identity encoding and format validation. Reading never writes.
  const store=createProgressStore(storage,learnerId);
  if(store.readonly())return empty;
  const state=store.read(),ids=[...new Set([unit.id,...(unit.source_unit_ids||[])])];
  const records=ids.map(id=>state.units[id]).filter(Boolean),attempts=new Map();
  for(const record of records)for(const attempt of record.attempts)if(!attempts.has(attempt.id))attempts.set(attempt.id,attempt);
  return {
   completed:attempts.size,
   totalCorrect:[...attempts.values()].reduce((sum,a)=>sum+a.correct,0),
   totalAnswers:[...attempts.values()].reduce((sum,a)=>sum+a.total,0),
   hasActive:records.some(r=>r.active&&!r.active.finished&&!attempts.has(r.active.id))
  };
 } catch {return empty;}
}
