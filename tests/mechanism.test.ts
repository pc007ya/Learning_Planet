import { describe, it, expect } from 'vitest';
import { PARTS } from '../src/experiments/mechanism';
import { readFileSync, existsSync } from 'node:fs';
describe('child-friendly mechanical exhibits',()=>{
  it('names and explains all eight assemblies for each exhibit',()=>{
    for(const parts of Object.values(PARTS)){
      expect(parts).toHaveLength(8);expect(new Set(parts.map(p=>p[0])).size).toBe(8);
      for(const p of parts){expect(p[1].length).toBeGreaterThan(1);expect(p[2].length).toBeGreaterThan(8);expect(p[3].length).toBeGreaterThan(8);}
    }
  });
  it('distinguishes battery quartz clock from spring-powered car',()=>{
    expect(PARTS.clock.some(p=>p[0]==='battery')).toBe(true);
    expect(PARTS.clock.some(p=>p[0]==='quartz')).toBe(true);
    expect(PARTS.car.some(p=>p[0]==='spring')).toBe(true);
    expect(PARTS.car.some(p=>p[0]==='clutch')).toBe(true);
  });
  it('keeps backdrop separate and supplies alternate part buttons',()=>{
    expect(existsSync('images/experiments/v2/museum-stage.png')).toBe(true);
    const code=readFileSync('src/experiments/mechanism.ts','utf8');
    for(const mode of ['whole','xray','explode'])expect(code).toContain(`data-view="${mode}"`);
    expect(code).toContain('data-part');expect(code).toContain('aria-pressed');
    expect(code).toContain('this.abort.abort()');expect(code).toContain('this.env?.dispose()');
  });
});
