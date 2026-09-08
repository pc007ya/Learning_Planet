import {describe,it,expect} from 'vitest';
import * as T from 'three';
import {makeSportsShell,shellSurface} from '../src/experiments/mini4wd-shell';
import {MiniCarModel} from '../src/experiments/mini4wd-model';
import {DEFAULT_SETUP} from '../src/experiments/mini4wd-physics';
import {completeParts} from '../src/experiments/mini4wd-parts';

describe('original sports shell',()=>{
  it('has finite symmetric surfaces with continuous cabin and clearance for 30 mm wheels',()=>{
    for(let i=0;i<=100;i++)for(let j=0;j<=20;j++){
      const x=-1.43+i*2.86/100,u=j/20,p=shellSurface(x,u),q=shellSurface(x,-u);
      expect(p.toArray().every(Number.isFinite)).toBe(true);expect(p.y).toBe(q.y);expect(p.z).toBeCloseTo(-q.z,12);
      // Largest tire inner face is z=.76-.12*(30/26), body is inside it.
      if(Math.abs(Math.abs(x)-.96)<.30)expect(Math.abs(p.z)).toBeLessThan(.76-.12*30/26);
    }
    const body=makeSportsShell();body.root.traverse(o=>{if(o instanceof T.Mesh){expect([...o.geometry.attributes.position.array].every(Number.isFinite)).toBe(true);expect([...o.geometry.attributes.normal.array].every(Number.isFinite)).toBe(true);}});
  });
  it('retains 18 BOM parts and restores every shell material after xray',()=>{
    const car=new MiniCarModel();expect(car.parts.size).toBe(18);
    for(const color of ['#29c9ff','#ff9266','#a78bfa'])for(const diameter of [26,30] as const){
      car.configure({...DEFAULT_SETUP,color,diameter});
      for(const xray of [true,false]){car.layout(completeParts(),0,xray,'shell');car.parts.get('shell')!.traverse(o=>{if(o instanceof T.Mesh){expect(o.material.transparent).toBe(xray);expect(o.material.opacity).toBe(xray?.12:1);}});}
    }
    car.layout(completeParts(),1,false,'shell');expect(car.parts.get('shell')!.position.y).toBeGreaterThan(0);
    car.layout(completeParts(),0,false,'shell');expect(car.parts.get('shell')!.position.y).toBe(0);car.dispose();
  });
});
