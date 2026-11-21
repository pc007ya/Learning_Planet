/** Title-only map projection. Run from repository root. */
import fs from 'node:fs';
export function build({read=p=>JSON.parse(fs.readFileSync(p,'utf8'))}={}){
 return ['src/chinese-practice/lessons-115-upper.json','src/chinese-practice/lessons-115-upper-grades45.json']
  .flatMap(read).map(({id,grade,year,semester,publisher,number,title,displayTitle,vocabulary})=>({
   id,grade,year,semester,publisher,number,title,...(displayTitle?{displayTitle}:{}),vocabularyCount:vocabulary.length
  }));
}
const path='modules/chinese-planet/course-titles-r9.json';
if(process.argv[1]?.endsWith('build-chinese-planet-r9.mjs')){
 const output=JSON.stringify(build())+'\n';
 if(process.argv.includes('--check')){if(fs.readFileSync(path,'utf8')!==output)throw Error('Chinese map titles out of date');}
 else fs.writeFileSync(path,output);
}
