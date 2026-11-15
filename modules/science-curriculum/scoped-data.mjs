export function curriculumScope(filters, unitId = null) {
 const match = unitId == null ? null : /^s-(kh|na)-g([1-6])-t([12])-u\d+$/.exec(unitId);
 const grade = match ? Number(match[2]) : Math.max(1, Math.min(6, Number(filters.grade) || 1));
 const publisher = match ? (match[1] === 'kh' ? '康軒' : '南一') : filters.publisher === '南一' ? '南一' : '康軒';
 const semester = match ? Number(match[3]) : Number(filters.semester) === 2 ? 2 : 1;
 return {grade,publisher,semester,key:`${publisher === '南一' ? 'na' : 'kh'}-g${grade}-t${semester}`};
}
export async function loadScopedCurriculum(filters, {unitId=null, signal, fetcher=fetch, exercises=true}={}) {
 const scope=curriculumScope(filters,unitId);
 const get=async name=>{const response=await fetcher(new URL(`../../data/science-curriculum/scoped/${scope.key}-${name}.json`,import.meta.url),{signal});if(!response.ok)throw Error('課程資料暫時無法讀取');return response.json();};
 const [catalog,content]=await Promise.all([get('catalog'),exercises?get('exercises'):null]);
 if(!catalog.units?.length||catalog.units.some(u=>u.grade!==scope.grade||u.publisher!==scope.publisher||u.semester!==scope.semester))throw Error('課程範圍不一致');
 return {catalog,content,scope};
}
