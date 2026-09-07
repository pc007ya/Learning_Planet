import { it,expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { clockRPM,clockRPMLabels,clockTransmission } from '../src/experiments/clock-transmission';
it('matches the animated 12:1 hand relationship at both reference speeds',()=>{
  for(const speed of [1,60] as const){const rpm=clockRPM(speed);expect(rpm.minute/rpm.compound).toBeCloseTo(3);expect(rpm.compound/rpm.hour).toBeCloseTo(4);expect(rpm.minute/rpm.hour).toBeCloseTo(12);}
  expect(clockRPMLabels(1)).toEqual(['1/60','1/180','1/720']);
  expect(clockRPMLabels(60)).toEqual(['1','1/3','1/12']);
});
it('keeps icon tabs in one toolbar without panel resizing',()=>{
  const html=clockTransmission();for(const token of ['details','data-rpm-read','非品牌機芯','data-drive-section','data-demo-seconds','aria-label="馬達輪系"','aria-label="指針輪系"'])expect(html).toContain(token);
  expect(html).not.toContain('data-rpm-size');expect(html).not.toContain('ct-tabs');
});
it('does not close the transmission explanation when demonstration starts',()=>{
  const code=readFileSync('src/experiments/mechanism.ts','utf8');expect(code).toContain("querySelector<HTMLDetailsElement>('.mech-bom')");expect(code).not.toContain("const bom=this.stage.querySelector('details')");
});
