import {readFileSync} from 'node:fs';
const groups=JSON.parse(readFileSync(new URL('../../data/science-curriculum/integration-map.json',import.meta.url))).groups;
const canonical=Object.fromEntries(groups.flatMap(g=>g.source_unit_ids.map(id=>[id,g.canonical_id])));
// Keep fault-injection fixtures aligned with the same selected transport slice.
export function scopedFixture(url,catalog,content){
 const match=/\/(kh|na|all)-g([1-6])-t([12])-(catalog|exercises)\.json$/.exec(String(url));
 if(!match)return String(url).endsWith('catalog.json')?catalog:content;
 const units=catalog.units.filter(u=>(match[1]==='all'||u.publisher===(match[1]==='kh'?'康軒':'南一'))&&u.grade===+match[2]&&u.semester===+match[3]);
 if(match[4]==='catalog'){if(match[1]!=='all')return {...catalog,units};const merged=groups.filter(g=>g.grade===+match[2]&&g.semester===+match[3]).map(g=>({...units.find(u=>u.id===g.canonical_id),source_unit_ids:g.source_unit_ids,activities:units.filter(u=>g.source_unit_ids.includes(u.id)).flatMap(u=>u.activities)}));return {...catalog,integrated:true,units:merged};}
 const ids=new Set(units.map(u=>u.id)),questions=content.questions.filter(q=>ids.has(q.unit_id)),qids=new Set(questions.map(q=>q.id));
 const result={...content,questions,tasks:(content.tasks||[]).filter(t=>ids.has(t.unit_id)).map(t=>({...t,...(t.applicable_unit_ids?{applicable_unit_ids:t.applicable_unit_ids.filter(id=>ids.has(id))}:{})}))};
 if(content.question_policy)result.question_policy={...content.question_policy,...Object.fromEntries(['corrections','excluded_from_core'].map(k=>[k,content.question_policy[k].filter(q=>qids.has(q.question_id))]))};
 if(match[1]==='all'){result.questions=result.questions.map(q=>({...q,unit_id:canonical[q.unit_id]}));result.tasks=result.tasks.map(t=>({...t,unit_id:canonical[t.unit_id],...(t.applicable_unit_ids?{applicable_unit_ids:[...new Set(t.applicable_unit_ids.map(id=>canonical[id]))]}:{})}));}
 return result;
}
