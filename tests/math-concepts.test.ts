import {it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const ctx:any={};vm.createContext(ctx);vm.runInContext(readFileSync('modules/math-foundations/model.js','utf8'),ctx);vm.runInContext(readFileSync('modules/math-concepts/model.js','utf8'),ctx);const C=ctx.MathConcepts;
function rng(){let s=78921;return ()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296;};}
it('delivers every batch-two roadmap item with 20 distinct questions, reachable choices and complete diagrams',()=>{
 const planned=JSON.parse(readFileSync('modules/math-teaching/curriculum-roadmap.json','utf8')).filter((x:any)=>x.batch===2);
 expect(C.units.map((x:any)=>x.plan)).toEqual(planned.map((x:any)=>x.id));
 for(const u of C.units){const qs=C.session(u.id,20,rng());expect(qs, u.title).toHaveLength(20);expect(new Set(qs.map((q:any)=>q.stem+JSON.stringify(q.counts))).size).toBe(20);
 for(const q of qs){expect(q.opts.includes(q.ans),u.title).toBe(true);expect(q.opts.length).toBeGreaterThanOrEqual(3);expect(new Set(q.opts).size).toBe(q.opts.length);expect(q.steps).toBeGreaterThanOrEqual(2);for(const s of q.stages){expect(s.choices.includes(s.answer)).toBe(true);expect(s.explain.length).toBeGreaterThan(0);}for(let i=0;i<=q.steps;i++){expect(C.picture(q,i)).not.toMatch(/NaN|undefined/);}expect(q.picture).toContain('data:image/svg+xml');}}
});
it('calculates every variant independently using integer arithmetic',()=>{
 const random=rng();for(const u of C.units)for(let i=0;i<180;i++){
 const q=C.question(u.id,i,random);let ans:any;
 switch(q.kind){
 case 'story':ans=(q.variant===2?q.a*q.b:q.a+q.b)-q.c;break;
 case 'pattern':ans=q.variant===2?q.values[3]*2:q.variant===1?q.values[3]-q.d:q.values[3]+q.d;break;
 case 'mass':case 'distance':ans=q.variant===1?`${q.major} ${q.big} ${q.minor} ${q.small}`:q.major*1000+q.minor;break;
 case 'circle':ans=q.variant===2?'圓心':q.variant===0?q.radius*2:q.radius;break;
 case 'clock':ans=q.variant===1?q.end-q.start:`${q.end>=1440?'次日 ':''}${String(Math.floor(q.end/60)%24).padStart(2,'0')}:${String(q.end%60).padStart(2,'0')}`;break;
 case 'table':case 'chart':ans=q.variant===0?q.counts[q.pick]:q.variant===1?q.counts.reduce((s:number,n:number)=>s+n,0):Math.abs(q.counts[q.pick]-q.counts[q.other]);break;
 case 'large':ans=q.variant===0?Math.floor(q.n/10**q.power)%10:q.variant===1?(Math.floor(q.n/10**q.power)%10)*10**q.power:100000000;expect(q.n).toBeLessThanOrEqual(100000000);break;
 case 'arithmetic':ans=q.op==='×'?q.a*q.b:`${Math.floor(q.a/q.b)} 餘 ${q.a%q.b}`;break;
 case 'triangle':if(q.sides){expect(q.sides[0]+q.sides[1]).toBeGreaterThan(q.sides[2]);const n=new Set(q.sides).size;ans=n===1?'正三角形':n===2?'等腰三角形':'不等邊三角形';}else{expect(q.angles.reduce((s:number,n:number)=>s+n,0)).toBe(180);ans=Math.max(...q.angles)===90?'直角三角形':Math.max(...q.angles)>90?'鈍角三角形':'銳角三角形';}break;
 case 'decimal':ans=q.variant===1?q.n===q.m?'一樣大':(Math.max(q.n,q.m)/1000).toFixed(3):Math.floor(q.n/10**(3-q.power))%10;break;
 case 'order':ans=q.variant===0?(q.a+q.b)*q.c:q.variant===1?q.a+q.b*q.c:q.a;break;
 case 'round':ans=Math.floor((q.n+q.place/2)/q.place)*q.place;expect(q.ans%q.place).toBe(0);break;
 case 'relation':ans=q.rate*q.n+q.offset;break;
 case 'decimalMul':ans=q.base*q.factor/10**q.precision;break;
 case 'quad':ans=['正方形','長方形','平行四邊形','菱形','梯形'][q.type];break;
 case 'equivalent':ans=q.variant===1?q.n:q.n*q.k;expect(q.n*q.d2).toBe(q.n2*q.d);break;
 case 'simplify':ans=q.variant===2?q.a*25*q.c:q.a*q.b;break;
 case 'duration':{const minutes=q.a*60+q.b+(q.variant===1?q.c*60+q.d:0);ans=q.variant===1?`${Math.floor(minutes/60)} 時 ${minutes%60} 分`:minutes;break;}
 default:throw Error('untested '+q.kind);
 }expect(q.ans,`${u.id} ${q.stem}`).toBe(ans);
 }
});
it('keeps first-batch dispatch and all new quiz entries compatible',()=>{
 expect(ctx.MathFoundations.units).toHaveLength(29);
 for(const id of ['u109','u110','u117','u118','u125','u137']){expect(ctx.MathFoundations.byId(id)).toBeTruthy();expect(ctx.MathFoundations.session(id,10,rng())).toHaveLength(10);}
 const html=readFileSync('index.html','utf8');expect(html.indexOf('math-foundations/model.js')).toBeLessThan(html.indexOf('math-concepts/model.js'));expect(html).toContain('u.concept ? ["concept-" + u.id]');expect(readFileSync('modules/math-teaching/launch.mjs','utf8')).toContain("lesson?.startsWith('concept-')?'../../math-concepts.html'");
});
it('supports midnight and exact carrying boundaries without decimal time',()=>{expect(C.time(1440)).toBe('次日 00:00');expect(C.time(1505)).toBe('次日 01:05');expect(C.duration(120)).toBe('2 時 0 分');expect(C.duration(60,'秒')).toBe('1 分 0 秒');});
it('uses one existing object per quantity and conserves objects after giving some away',()=>{
 vm.runInContext(readFileSync('modules/math-concepts/objects.js','utf8'),ctx);
 for(let i=0;i<30;i++){
  const q=C.question('u118',i,rng());const initial=C.picture(q,0),final=C.picture(q,q.steps);
  expect(initial).toContain('data:image/png;base64,');
  expect((initial.match(/<use /g)||[]).length).toBe((q.variant===2?q.a*q.b:q.a+q.b)+q.c);
  expect((final.match(/<use /g)||[]).length).toBe(q.ans+q.c);
  expect(final).not.toContain('opacity="0.22"');
  expect(q.stem).toContain(q.objectName);expect(q.objectName).toBe(q.object==='star'?'星星':'蘋果');
 }
});
