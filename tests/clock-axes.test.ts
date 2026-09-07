import { describe, it, expect } from 'vitest';
import { CLOCK_AXES, DRIVE_AXIS_COLORS } from '../src/experiments/clock-axes';
import { clockTransmission } from '../src/experiments/clock-transmission';
import { readFileSync } from 'node:fs';
describe('clock shaft colors and labels', () => {
  it('keeps compound pinions the same color and independent shafts distinct', () => {
    expect(new Set(Object.values(CLOCK_AXES)).size).toBe(6);
    expect(DRIVE_AXIS_COLORS[1]).toBe(DRIVE_AXIS_COLORS[2]);
    expect(DRIVE_AXIS_COLORS[3]).toBe(DRIVE_AXIS_COLORS[4]);
    expect(DRIVE_AXIS_COLORS[5]).toBe(CLOCK_AXES.minute);
  });
  it('uses the shared colors in the diagram and labels every compound group', () => {
    const panel=clockTransmission();
    for (const color of Object.values(CLOCK_AXES)) expect(panel).toContain(color);
    const model=readFileSync('src/experiments/mechanism.ts','utf8');
    for (const label of ['36T＋12T · 同軸','48T＋12T · 同軸','60T＋12T · 同軸長針','36T＋10T · 同軸','40T · 同軸短針']) expect(model).toContain(label);
    expect(panel).toContain('長短針各有獨立軸');
  });
});
