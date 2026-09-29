import {it,expect} from 'vitest';
// @ts-ignore Shared browser lesson model
import {cubeLayout,missingCubes,capacityValues,SHAPES} from '../modules/math-teaching/spatial-model.mjs';
it('counts each occupied cell once and identifies four missing cubes',()=>{
 const cubes=cubeLayout('space');expect(cubes).toHaveLength(8);const gaps=missingCubes(cubes);expect(gaps).toHaveLength(4);
 expect(new Set([...cubes,...gaps].map((c:{x:number,y:number,z:number})=>`${c.x},${c.y},${c.z}`)).size).toBe(12);
 expect(missingCubes([...cubes,...gaps])).toEqual([]);
 expect(cubeLayout('count').filter((c:{x:number,y:number,z:number})=>c.y===0)).toHaveLength(3);
 expect(cubeLayout('count').filter((c:{x:number,y:number,z:number})=>c.y===1)).toHaveLength(2);
 expect(cubeLayout('count').filter((c:{x:number,y:number,z:number})=>c.y===2)).toHaveLength(1);
});
it('conserves volume across water height, millilitres and litres',()=>{
 for(let ml=0;ml<=1000;ml+=100){const v=capacityValues(ml);expect(v.cm3).toBe(v.heightCm*10*10);expect(v.litres*1000).toBe(ml);expect(v.fraction).toBe(ml/1000);}
 for(const n of [-1,1001,NaN,Infinity,1.5])expect(()=>capacityValues(n)).toThrow();
});
it('distinguishes round surfaces from stable stacking surfaces',()=>{
 expect(SHAPES.cylinder).toMatchObject({roll:true,stack:true,faces:2});expect(SHAPES.sphere).toMatchObject({roll:true,stack:false,faces:0});expect(SHAPES.cube).toMatchObject({roll:false,stack:true,faces:6});
});
it('supports all dimensions through 5 cubed, with supported columns and exact missing totals',()=>{
 for(let l=1;l<=5;l++)for(let w=1;w<=5;w++)for(let h=1;h<=5;h++)for(const pattern of ['full','stepped']){
  const cubes=cubeLayout('space',{l,w,h},pattern);const gaps=missingCubes(cubes,l,w,h);
  expect(cubes.length+gaps.length).toBe(l*w*h);
  expect(new Set(cubes.map((c:{x:number,y:number,z:number})=>`${c.x},${c.y},${c.z}`)).size).toBe(cubes.length);
  for(const c of cubes)if(c.y>0)expect(cubes.some((b:{x:number,y:number,z:number})=>b.x===c.x&&b.z===c.z&&b.y===c.y-1)).toBe(true);
  if(pattern==='full')expect(cubes).toHaveLength(l*w*h);
 }
 expect(cubeLayout('count',{l:5,w:5,h:5})).toHaveLength(125);
 for(const bad of [0,6,1.5,NaN,Infinity])expect(()=>cubeLayout('count',{l:bad,w:2,h:3})).toThrow();
});
it('random single rows stay supported and may stop below the height limit',()=>{
 for(let l=1;l<=5;l++)for(let h=1;h<=5;h++)for(const value of [0,.4,.999]){
  const cubes=cubeLayout('space',{l,w:1,h},'random',()=>value);
  expect(cubes.length).toBeGreaterThanOrEqual(l);
  expect(cubes.length).toBeLessThanOrEqual(l*h);
  if(h>1)expect(cubes.length).toBeLessThan(l*h);
  for(const cube of cubes){expect(cube.z).toBe(0);if(cube.y>0)expect(cubes.some((c:{x:number,y:number,z:number})=>c.x===cube.x&&c.y===cube.y-1)).toBe(true);}
 }
});
