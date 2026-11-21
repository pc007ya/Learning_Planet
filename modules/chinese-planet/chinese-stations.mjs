// Map station projection only; supply the host's existing catalog at runtime.
// No URL guessing, new lesson banks, Firebase calls, or account data.
const LABELS={literacy:'生字詞練習',outline:'僅課次索引',original:'原創能力練習'};
const keyOf=({year,grade,semester,publisher,number})=>JSON.stringify([year,grade,semester,publisher,number]);
function atScope(x,f){return x.year===f.year&&x.grade===f.grade&&x.semester===f.semester&&x.publisher===f.publisher;}
function station(o,seen){
 if(typeof o.id!=='string'||!o.id.trim()||typeof o.title!=='string'||!o.title.trim()||seen.has(o.id))throw Error('Invalid or duplicate station identity');
 seen.add(o.id); return Object.freeze({...o,label:LABELS[o.kind]});
}
export function chineseStations({lessons,lessonDisplayTitle,midgrade,originalUnits},filter){
 if(!Number.isInteger(filter?.grade)||filter.grade<1||filter.grade>6)throw Error('Invalid grade');
 const seen=new Set(),out=[];
 if(filter.track==='original'){
  return filter.grade!==6?[]:originalUnits.filter(u=>u.grade===6&&u.publisher===null&&u.semester===null&&u.contentKind==='original_skill_practice'&&u.learningObjectiveAlignment==='general_skill_only'&&(u.questions?.length??u.questionCount)===10)
    .map(u=>station({id:u.id,kind:'original',title:u.title,grade:6},seen));
 }
 if(filter.track!=='publisher'||!Number.isInteger(filter.year)||!['上','下'].includes(filter.semester)||typeof filter.publisher!=='string')throw Error('Invalid publisher scope');
 const vocabulary=new Map();
 for(const lesson of lessons.filter(x=>atScope(x,filter)).sort((a,b)=>a.number-b.number)){
  if(!(lesson.vocabulary?.length??lesson.vocabularyCount))continue;
  const k=keyOf(lesson);
  if(vocabulary.has(k))throw Error('Ambiguous publisher lesson number');
  const node=station({id:lesson.id,kind:'literacy',title:lessonDisplayTitle(lesson),number:lesson.number,grade:lesson.grade},seen);
  vocabulary.set(k,node);out.push(node);
 }
 if(midgrade?.year===filter.year&&midgrade.publisher===filter.publisher&&midgrade.practiceAvailable===false&&midgrade.contentImported===false){
  for(const book of midgrade.books.filter(b=>b.grade===filter.grade&&b.semester===filter.semester)){
   for(const [items,series]of[[book.lessons,'lesson'],[book.readingLadders,'reading']]){
    for(const item of items){
     if(series==='lesson'&&vocabulary.has(keyOf({...filter,number:item.number})))continue;
     const id='catalog:'+JSON.stringify([filter.year,filter.publisher,book.grade,book.semester,series,item.number]);
     out.push(station({id,kind:'outline',title:item.title,number:item.number,series,grade:book.grade},seen));
    }
   }
  }
 }
 return out;
}
export function activateChineseStation(stations,id,host){
 const s=stations.find(p=>p.id===id);
 if(!s)return false; // Includes stale selection after grade/publisher change.
 if(s.kind==='literacy'&&typeof host.openLiteracy==='function'){host.openLiteracy(s.id);return true;}
 if(s.kind==='original'&&typeof host.openOriginal==='function'){host.openOriginal(s.id);return true;}
 if(s.kind==='outline'&&typeof host.showCatalogDetails==='function'){host.showCatalogDetails(s);return true;}
 return false;
}
