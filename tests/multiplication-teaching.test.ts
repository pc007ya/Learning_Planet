import {it,expect} from 'vitest';
import {createMultiplication,placeOne,multiplicationRecap} from '../modules/math-teaching/multiplication-model.mjs';
import {readFileSync} from 'node:fs';
it('all 81 custom lessons finish with equal groups and exact totals',()=>{for(let a=1;a<=9;a++)for(let b=1;b<=9;b++){let s=createMultiplication(a,b);for(let i=0;i<a*b;i++){expect(placeOne(s,b)).toBe(s);s=placeOne(s,Math.floor(i/a));expect(s.placed).toBe(i+1);}expect(placeOne(s,0)).toBe(s);expect(multiplicationRecap(s)[2]).toContain(String(a*b));}});
it('rejects invalid custom numbers',()=>{for(const a of [0,10,NaN,1.5,Infinity])expect(()=>createMultiplication(a,3)).toThrow();});
it('links the beginner and times-table cards to multiplication',()=>{const html=readFileSync('index.html','utf8');expect(html).toContain('u16: ["mul"], u6: ["mul"]');expect(readFileSync('modules/math-teaching/launch.mjs','utf8')).toContain('../../math-multiplication.html');});
