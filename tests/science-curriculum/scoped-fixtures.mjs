// Keep fault-injection fixtures aligned with the same selected transport slice.
export function scopedFixture(url,catalog,content){
 const match=/\/(kh|na)-g([1-6])-t([12])-(catalog|exercises)\.json$/.exec(String(url));
 if(!match)return String(url).endsWith('catalog.json')?catalog:content;
 const units=catalog.units.filter(u=>u.publisher===(match[1]==='kh'?'康軒':'南一')&&u.grade===+match[2]&&u.semester===+match[3]);
 if(match[4]==='catalog')return {...catalog,units};
 const ids=new Set(units.map(u=>u.id)),questions=content.questions.filter(q=>ids.has(q.unit_id)),qids=new Set(questions.map(q=>q.id));
 const result={...content,questions,tasks:(content.tasks||[]).filter(t=>ids.has(t.unit_id)).map(t=>({...t,...(t.applicable_unit_ids?{applicable_unit_ids:t.applicable_unit_ids.filter(id=>ids.has(id))}:{})}))};
 if(content.question_policy)result.question_policy={...content.question_policy,...Object.fromEntries(['corrections','excluded_from_core'].map(k=>[k,content.question_policy[k].filter(q=>qids.has(q.question_id))]))};
 return result;
}
