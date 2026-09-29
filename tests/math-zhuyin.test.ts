import {it,expect} from 'vitest';
// @ts-ignore Browser utility
import {readingTokens} from '../modules/math-foundations/zhuyin.mjs';
it('preserves symbols and distinguishes polyphones by phrase',()=>{
 expect(readingTokens('32 − 17').map((t:any)=>t.char).join('')).toBe('32 − 17');
 expect(readingTokens('重量')[0].reading).toBe('ㄓㄨㄥˋ');
 expect(readingTokens('重疊')[0].reading).toBe('ㄔㄨㄥˊ');
 expect(readingTokens('量長度')[0].reading).toBe('ㄌㄧㄤˊ');
 expect(readingTokens('再數')[1].reading).toBe('ㄕㄨˇ');
 expect(readingTokens('數字')[0].reading).toBe('ㄕㄨˋ');
});
it('covers picture labels and the reused apple/star story vocabulary',()=>{
 for(const text of ['原有','再得到','送出','合起來','每盒','蘋果','星星'])expect(readingTokens(text).every((t:any)=>t.reading)).toBe(true);
});
it('covers all second-batch lesson text and SVG labels across question variants',async()=>{
 const {readFileSync}=await import('node:fs');const vm=await import('node:vm');const context:any={};vm.createContext(context);vm.runInContext(readFileSync('modules/math-concepts/model.js','utf8'),context);const C=context.MathConcepts;
 for(const unit of C.units)for(let i=0;i<30;i++){
  const q=C.question(unit.id,i);const labels=[...C.picture(q,q.steps).matchAll(/<text[^>]*>(.*?)<\/text>/g)].map((m:any)=>m[1]);
  const content=[unit.title,q.stem,q.explain,...q.opts,...q.stages.flatMap((s:any)=>[s.prompt,...s.choices]),...labels].join(' ');
  const missing=readingTokens(content).filter((t:any)=>/[\u3400-\u9fff]/.test(t.char)&&!t.reading).map((t:any)=>t.char);
  expect(missing,unit.id).toEqual([]);
 }
});
