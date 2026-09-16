import {it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {fractionLesson} from '../modules/math-teaching/fraction-model.mjs';
const bands=vm.runInNewContext(readFileSync('modules/math-teaching/fraction-colors.mjs','utf8').replace('export function','function')+';resultColorBands');
it('retains both source quantities when reduced',()=>{const s=fractionLesson(1,4,1,4,'add');const b=bands(s);expect(b[0].end-b[0].start).toBe(.25);expect(b[1].end-b[1].start).toBe(.25);expect(b.map((v:any)=>v.color)).toEqual([0,1]);expect(s.reducedDenominator).toBe(2);});
it('subtraction leaves the larger side color',()=>{expect(bands(fractionLesson(3,4,1,4,'sub'))[0]).toEqual({start:0,end:.5,color:0});expect(bands(fractionLesson(1,4,3,4,'sub'))[0]).toEqual({start:0,end:.5,color:1});expect(bands(fractionLesson(1,4,1,4,'sub'))[0].end).toBe(0);});
