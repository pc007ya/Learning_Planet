import {describe,it,expect} from 'vitest';
import {createState,currentStep,act,value,answer,recap,lessons} from '../modules/math-teaching/model.mjs';
describe('interactive math teaching',()=>{
  it('preserves quantity and reaches correct results for all two-digit pairs',()=>{
    for(const kind of ['add','sub'])for(let a=10;a<=99;a++)for(let b=10;b<=99;b++){
      if(kind==='sub'&&b>a)continue;
      let s=createState(kind,a,b),count=0;const total=value(s);
      while(currentStep(s)){s=act(s,currentStep(s)!.action);expect(value(s)).toBe(total);expect(s.t).toBeGreaterThanOrEqual(0);expect(s.u).toBeGreaterThanOrEqual(0);if(++count>40)throw Error('Nonterminating lesson');}
      expect(s.t*10+s.u).toBe(answer(s));expect(s.u).toBeLessThan(10);
    }
  },30000);
  it('fills ten exactly and preserves the remainder',()=>{
    for(let a=2;a<10;a++)for(let b=11-a;b<10;b++){let s=createState('ten',a,b);while(currentStep(s))s=act(s,'unit');expect(s.u).toBe(10);expect(s.ru).toBe(a+b-10);expect(value(s)).toBe(a+b);}
  });
  it('rejects wrong action and does not mutate state',()=>{const s=createState('sub',32,17);expect(act(s,'unit')).toBe(s);const n=act(s,'exchange');expect(s.u).toBe(2);expect(n.u).toBe(12);expect(n.t).toBe(2);expect(value(n)).toBe(32);});
  it('includes both regrouping and no-regrouping examples',()=>{expect(lessons.add.examples).toContainEqual([24,13]);expect(lessons.sub.examples).toContainEqual([46,23]);expect(recap(createState('sub',32,17))[0]).toContain('2 個十和 12 個一');});
  it('validates unsupported inputs',()=>{expect(()=>createState('ten',10,1)).toThrow();expect(()=>createState('sub',10,20)).toThrow();});
});
