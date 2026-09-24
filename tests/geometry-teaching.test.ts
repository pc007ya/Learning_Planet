import {it,expect} from 'vitest';
// @ts-ignore JavaScript lesson model
import {geometryValues} from '../modules/math-teaching/geometry-model.mjs';
it('computes rectangle and cuboid quantities across supported dimensions',()=>{for(let l=1;l<=20;l++)for(let w=1;w<=20;w++)for(let h=1;h<=20;h++){const s=geometryValues(l,w,h);expect(s.volume).toBe(l*w*h);expect(s.surface).toBe(s.faces.reduce((a:number,b:number)=>a+b,0));expect(s.area).toBe(l*w);expect(s.perimeter).toBe(l+w+l+w);}});
it('rejects dimensions outside whole-number teaching range',()=>{for(const v of [0,-1,21,1.5,NaN,Infinity])expect(()=>geometryValues(v,3,2)).toThrow();});
