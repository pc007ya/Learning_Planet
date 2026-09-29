import {it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const ctx:any={};vm.createContext(ctx);vm.runInContext(readFileSync('modules/math-foundations/model.js','utf8'),ctx);const F=ctx.MathFoundations;
function rng(){let s=1234567;return ()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296;};}
it('provides all nine lessons with unique complete quiz sessions and valid choices',()=>{
 expect(F.units).toHaveLength(9);
 for(const u of F.units)for(let run=0;run<4;run++){
 const qs=F.session(u.id,20,rng());expect(qs).toHaveLength(20);
 for(const q of qs){expect(q.opts.includes(q.ans)).toBe(true);expect(new Set(q.opts).size).toBe(q.opts.length);expect(q.opts.length).toBeGreaterThanOrEqual(3);expect(q.picture.startsWith('data:image/svg+xml')).toBe(true);expect(q.explain.length).toBeGreaterThan(10);}
 }
});
it('keeps mathematical models consistent for every lesson variant',()=>{
 const random=rng();for(const u of F.units)for(let i=0;i<300;i++){
 const q=F.question(u.id,i,random);
 if(q.kind==='place'){expect(q.digits.reduce((s:number,n:number)=>s*10+n,0)).toBe(q.n);expect(q.n).toBeLessThanOrEqual(u.max);}
 if(q.kind==='subtract'){expect(q.ans).toBe(q.a-q.b);expect(q.ans).toBeGreaterThanOrEqual(0);expect(q.a).toBeLessThanOrEqual(20);}
 if(q.kind==='area')expect(q.ans).toBe(q.a===q.b?'一樣大':q.a>q.b?'A':'B');
 if(q.kind==='litres'){expect(q.n).toBe(q.l*1000+q.ml);expect(q.ans).toBe(q.variant===1?`${q.l} L ${q.ml} mL`:q.n);}
 if(q.kind==='compare'&&q.a!==q.b)expect(q.ans).toBe(q.a>q.b?'A':'B');
 expect(F.picture(q,0)).not.toContain('NaN');expect(F.picture(q,q.steps)).not.toContain('undefined');
 }
});
it('handles leap years, month lengths and year transitions',()=>{
 expect(F.days(2024,2)).toBe(29);expect(F.days(2026,2)).toBe(28);expect(F.days(2100,2)).toBe(28);expect(F.days(2000,2)).toBe(29);
 expect(F.addDays(2026,12,31,1).toISOString()).toBe('2027-01-01T00:00:00.000Z');
 expect(F.addDays(2024,2,28,2).toISOString()).toBe('2024-03-01T00:00:00.000Z');
});
