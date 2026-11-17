import fs from 'node:fs';
import vm from 'node:vm';
export function mathBankRuntime(seed=17) {
 const html=fs.readFileSync(new URL('../../index.html',import.meta.url),'utf8');
 const math=Object.create(Math);
 math.random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/2**32;};
 const context=vm.createContext({Math:math});context.window=context;
 for(const file of ['math-foundations/model.js',...['core','grade4','grade5','grade6'].map(x=>`math-concepts/upper/${x}.js`),'math-concepts/model.js','math-question-engine/math-question-engine-v1.js']) {
  vm.runInContext(fs.readFileSync(new URL('../../modules/'+file,import.meta.url),'utf8').replace(/export \{[^}]+\};/g,''),context);
 }
 const start=html.indexOf('const MATH_UNITS = [');
 vm.runInContext(html.slice(start,html.indexOf('\n];',start)+3)+';globalThis.units=MATH_UNITS;',context);
 vm.runInContext(html.slice(html.indexOf('function chineseNum('),html.indexOf('function computeGeoLessonScript(')),context);
 const method=html.slice(html.indexOf('  buildMath(unitId,'),html.indexOf('  buildScience(unitId,'));
 vm.runInContext('globalThis.app={total:()=>50,prof:()=>({}),'+method+'}',context);
 return context;
}
export function questionKey(q) {
 if(q.conceptId)return q.questionKey;
 return JSON.stringify([q.stem,q.ans,q.figData,q.n,q.a,q.b,q.y,q.m,q.d,q.counts,q.sides,q.angles,q.kind==='upper'?q.art:null]);
}
export function bankAudit(seed=17){
 const context=mathBankRuntime(seed);
 return context.units.map(unit=>{
  if(unit.kind||['u36','u37'].includes(unit.id))return {id:unit.id,grade:unit.grade,title:unit.title,mode:unit.kind||'junyi',status:'separate-mode'};
  const rounds=[0,1,2].map(round=>context.app.buildMath(unit.id,round));
  const all=rounds.flat();
  return {id:unit.id,grade:unit.grade,title:unit.title,counts:rounds.map(qs=>qs.length),distinctPerRound:rounds.map(qs=>new Set(qs.map(questionKey)).size),distinctAcrossRounds:new Set(all.map(questionKey)).size,invalidChoices:all.filter(q=>!['vertInput','longdivInput'].includes(q.fig)&&(!q.opts?.includes(q.ans)||new Set(q.opts).size!==q.opts.length)).length};
 });
}
