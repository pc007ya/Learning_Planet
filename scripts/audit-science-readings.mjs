import {readFileSync,writeFileSync} from 'node:fs';
import {load,tokens} from '../modules/science-curriculum/readings.mjs';
const read=p=>JSON.parse(readFileSync(new URL('../'+p,import.meta.url)));
await load({fetcher:async url=>({ok:true,json:async()=>JSON.parse(readFileSync(url))})});
const report={method:'Automated Han-character coverage, not human full-context pronunciation certification',scopes:[],missing:[]};
for(const scope of ['','legacy/']){
 const content=read(`data/science-curriculum/${scope}exercises.json`),catalog=read(`data/science-curriculum/${scope}catalog.json`),rows=[];
 for(const q of content.questions){rows.push([q.id,'stem',q.stem],[q.id,'explanation',q.explanation]);q.options.forEach((t,i)=>rows.push([q.id,'option'+i,t]));}
 for(const u of catalog.units){rows.push([u.id,'title',u.title]);for(const a of u.activities||[])rows.push([a.id,'title',a.title]);}
 for(const text of ['你的答案：','正確答案：','時間到了，這題未作答'])rows.push(['ui',text,text]);
 let han=0,covered=0;const complete=new Set();
 for(const [id,field,text] of rows){const missing=[];for(const t of tokens(text)){if(!/\p{Script=Han}/u.test(t.char))continue;han++;if(t.reading)covered++;else missing.push(t.char);}if(missing.length)report.missing.push({scope:scope||'integrated',id,field,text,missing});else complete.add(id+':'+field);}
 report.scopes.push({scope:scope||'integrated',questions:content.questions.length,units:catalog.units.length,textFields:rows.length,fullyCoveredFields:complete.size,han,covered,percent:Number((covered/han*100).toFixed(4))});
}
writeFileSync(new URL('../modules/science-curriculum/readings/coverage.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report.scopes));console.log('Missing',report.missing.length, [...new Set(report.missing.flatMap(x=>x.missing))].join(''));
