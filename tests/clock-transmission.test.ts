import { it,expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { clockRPM,clockRPMLabels,clockTransmission } from '../src/experiments/clock-transmission';
it('matches the animated 12:1 hand relationship at both reference speeds',()=>{
  for(const speed of [1,60] as const){const rpm=clockRPM(speed);expect(rpm.minute/rpm.compound).toBeCloseTo(3);expect(rpm.compound/rpm.hour).toBeCloseTo(4);expect(rpm.minute/rpm.hour).toBeCloseTo(12);}
  expect(clockRPMLabels(1)).toEqual(['1/60','1/180','1/720']);
  expect(clockRPMLabels(60)).toEqual(['1','1/3','1/12']);
});
it('labels the omitted motor reduction and exposes collapse, resize and narration',()=>{
  const html=clockTransmission();for(const token of ['details','data-rpm-size','data-rpm-read','依機芯而定','前段減速省略','data-demo-seconds'])expect(html).toContain(token);
});
it('does not close the transmission explanation when demonstration starts',()=>{
  const code=readFileSync('src/experiments/mechanism.ts','utf8');expect(code).toContain("querySelector<HTMLDetailsElement>('.mech-bom')");expect(code).not.toContain("const bom=this.stage.querySelector('details')");
});
