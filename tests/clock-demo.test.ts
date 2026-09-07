import { describe,it,expect } from 'vitest';
import { clockDemo,clockTrain } from '../src/experiments/clock-demo';
import { readFileSync } from 'node:fs';
describe('one minute clock demonstration',()=>{
  it('refreshes the shader when switching transparent clock materials',()=>{
    const source=readFileSync('src/experiments/mechanism.ts','utf8');expect(source).toContain('needsUpdate=true');expect(source).toContain('setClockPeek(on:boolean)');
    const lab=readFileSync('src/experiments/lab.ts','utf8');expect(lab).toContain("insertAdjacentHTML('afterend','<button data-action=\"peek\"");
  });
  it('advances exactly one hour in sixty seconds and stops',()=>{
    expect(clockDemo(30).minutes).toBe(30);expect(clockDemo(59.99).done).toBe(false);
    const end=clockDemo(65);expect(end.minutes).toBe(60);expect(end.done).toBe(true);
    expect(end.minuteAngle).toBeCloseTo(-2*Math.PI);expect(end.hourAngle).toBeCloseTo(-Math.PI/6);
  });
  it('uses tooth counts and coaxial compound gears, not independent animations',()=>{
    for(const time of [1,15,30,60]){const [a,b,c,d]=clockTrain(time);expect(a*12+b*36).toBeCloseTo(0);expect(b).toBe(c);expect(c*10+d*40).toBeCloseTo(0);expect(a/d).toBeCloseTo(12);}
  });
});
