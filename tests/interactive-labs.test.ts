import { describe, expect, it } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { FLOAT_OBJECTS, buoyancy, clockAngles, carDistance, LAB_SPECS } from '../src/experiments/models';
describe('interactive experiment models', () => {
  it('provides eight distinct and explicit samples', () => {
    expect(FLOAT_OBJECTS).toHaveLength(8);
    expect(new Set(FLOAT_OBJECTS.map(o => o.id)).size).toBe(8);
    for (const o of FLOAT_OBJECTS) expect(o.note.length).toBeGreaterThan(8);
  });
  it('floats four air-containing or lower-density samples and sinks four denser ones', () => {
    expect(FLOAT_OBJECTS.filter(o => buoyancy(o.mass, o.volume).floats).map(o => o.id)).toEqual(['boat', 'ball', 'wood', 'cork']);
    for (const o of FLOAT_OBJECTS) { const r = buoyancy(o.mass, o.volume); expect(r.maxBuoyancy).toBeGreaterThan(0); expect(r.fraction).toBeGreaterThan(0); expect(r.fraction).toBeLessThanOrEqual(1); }
  });
  it('uses displaced water weight, not object weight alone', () => {
    expect(buoyancy(80, 4000).floats).toBe(true);
    expect(buoyancy(6, .7).floats).toBe(false);
    expect(buoyancy(10, 20).fraction).toBe(.5);
    expect(buoyancy(10, 20).maxBuoyancy).toBeCloseTo(.1962);
    expect(() => buoyancy(0, 1)).toThrow(); expect(() => buoyancy(1, NaN)).toThrow();
  });
  it('couples minute and hour hands 12:1 from the same center', () => {
    expect(clockAngles(60).minute).toBeCloseTo(-2 * Math.PI);
    expect(clockAngles(60).hour).toBeCloseTo(-Math.PI / 6);
    expect(clockAngles(720).hour).toBeCloseTo(-2 * Math.PI);
  });
  it('compares pull energy and surface friction with bounded input', () => {
    expect(carDistance(1, false)).toBe(3.6);
    expect(carDistance(.5, false)).toBe(.9);
    expect(carDistance(.5, true)).toBe(.45);
    expect(carDistance(-1, false)).toBe(0); expect(carDistance(2, false)).toBe(3.6);
  });
  it('provides a valid assessment for every module', () => {
    for (const spec of Object.values(LAB_SPECS)) expect(spec.choices[spec.answer]).toBeTruthy();
  });
});
describe('integration regressions', () => {
  const html = readFileSync('index.html', 'utf8');
  it('retains all six legacy labs and adds independent entries', () => {
    for (const id of ['exp-dissolve', 'exp-magnet', 'exp-magnet-ii', 'exp-plant-water', 'exp-day-night', 'exp-earth-orbit', 'exp-buoyancy', 'exp-clock-mechanism', 'exp-pullback-car']) expect(html).toContain(`id: "${id}"`);
    for (const icon of ['buoyancy', 'clock', 'car']) expect(existsSync(`images/experiments/${icon}.svg`)).toBe(true);
  });
  it('does not classify clouds as gas or require a correct prediction for magnet completion', () => {
    expect(html).not.toContain('label: "雲", en: "Cloud", hub: "gas"');
    expect(html).not.toContain('const success = predictionCorrect && missionCorrect');
  });
  it('loads paired dark surfaces and white text', () => {
    expect(html).toContain('./styles/interactive-labs.css');
    const css = readFileSync('styles/interactive-labs.css', 'utf8');
    expect(css).toContain('--planet-text: #fff'); expect(css).toContain('background:var(--planet-panel)!important;color:#fff!important');
  });
});
