import { describe, it, expect } from 'vitest';
import { insidePool } from '../src/experiments/buoyancy-play';
import { FLOAT_OBJECTS, buoyancy } from '../src/experiments/models';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
describe('picture-card buoyancy playground', () => {
  it('only accepts drops inside the visible tank', () => {
    expect(insidePool(.5,.5)).toBe(true);
    expect(insidePool(.14,.26)).toBe(true);
    for (const [x,y] of [[.01,.5],[.99,.5],[.5,.02],[.5,.95]]) expect(insidePool(x,y)).toBe(false);
  });
  it('uses the shared eight samples and expected float/sink outcomes', () => {
    expect(FLOAT_OBJECTS.filter(o=>buoyancy(o.mass,o.volume).floats).map(o=>o.id)).toEqual(['boat','ball','wood','cork']);
    expect(FLOAT_OBJECTS).toHaveLength(8);
  });
  it('offers picture buttons, predictions and a keyboard alternative without selects', () => {
    const code=readFileSync('src/experiments/buoyancy-play.ts','utf8');
    expect(code).not.toContain('<select');
    for (const marker of ['data-object','data-predict="float"','data-predict="sink"','data-drop','pointercancel','insidePool(x,y)','this.prediction === null','clearTimeout(this.timer)']) expect(code).toContain(marker);
  });
  it('ships a separate transparent PNG for each item', () => {
    const hashes = new Set<string>();
    for (const o of FLOAT_OBJECTS) {
      const data=readFileSync(`images/experiments/buoyancy-v3/${o.id}.png`);
      expect(data.subarray(1,4).toString()).toBe('PNG'); expect(data[25]).toBe(6);
      hashes.add(createHash('sha256').update(data).digest('hex'));
    }
    expect(hashes.size).toBe(8);
    expect(readFileSync('images/experiments/buoyancy-v3/pool.png').length).toBeGreaterThan(1000);
  });
});
