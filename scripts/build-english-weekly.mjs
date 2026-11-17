// Derived exclusively from Learning Planet's existing original enrichment vocabulary.
import fs from 'node:fs';
const curriculum = JSON.parse(fs.readFileSync('modules/english-original/curriculum.json', 'utf8'));
const units = curriculum.units.map(u => ({id:'weekly-'+u.id,sourceUnitId:u.id,grade:u.grade,title:'原創英文 · '+u.title,icon:'🇬🇧',difficulty:1,kind:'english-weekly', vocabulary:u.vocabulary.map(v=>({word:v.word,meaning:v.meaning})),curriculumTrack:'original_enrichment',publisherAlignment:'not_verified'}));
if(units.length!==48) throw new Error('Expected 48 original units');
const body = `(function(root){'use strict';
const units=${JSON.stringify(units)};
for(const u of units) u.maxQuestions=u.vocabulary.length;
function build(id,count,random=Math.random){
 const unit=units.find(u=>u.id===id); if(!unit) throw new Error('Unknown English weekly unit');
 const n=Number(count); if(!Number.isInteger(n)||n<0||n>unit.maxQuestions) throw new Error('Invalid English question count');
 const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
 return shuffle(unit.vocabulary.slice()).slice(0,n).map(v=>{
 const alternatives=[...new Set(unit.vocabulary.map(w=>w.meaning))].filter(m=>m!==v.meaning);
 if(alternatives.length<2) throw new Error('Insufficient distinct answers');
 return {stem:'原創英文詞義：本課「'+v.word+'」的意思是？',ans:v.meaning,opts:shuffle([v.meaning,...shuffle(alternatives).slice(0,2)]),explain:v.word+'：'+v.meaning+'（學習星球原創補充，非出版社試題）',unitId:unit.id,unitTitle:unit.title,sourceUnitId:unit.sourceUnitId,curriculumTrack:'original_enrichment',difficulty:1};
 });
}
root.LPEnglishWeekly={units,build};
})(typeof window!=='undefined'?window:globalThis);\n`;
const path='modules/english-original/weekly-bank.js';
if(process.argv.includes('--check')) {if(fs.readFileSync(path,'utf8')!==body) throw new Error('English weekly bank is stale');}
else fs.writeFileSync(path,body);
