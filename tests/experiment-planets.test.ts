import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { buoyancyModel, density, displacedFraction, motionAcceleration } from '../src/experiment-planets/science';

const root = 'experiments/3d/';
const pages = ['ocean-buoyancy','magnet','earth-moon','plants','weather','force-motion'];
describe('3D experiment planets: independent deployment and regression', () => {
  it('keeps all 14 original entry rows and order, with the new 3D card last',()=>{
    const snapshot=JSON.parse(readFileSync('tests/fixtures/experiment-original-entries.json','utf8'));
    const html=readFileSync('index.html','utf8');
    const rows=html.match(/const EXPERIMENT_UNITS = \[\n([\s\S]*?)\n\];/)![1].split('\n');
    expect(rows.slice(0,14)).toEqual(snapshot.rows);
    expect(rows).toHaveLength(15);
    expect(rows[14]).toContain('id: "exp-3d-new"');
  });
  const index = readFileSync('index.html','utf8');
  it('leaves legacy experiments and their unit routes intact', () => {
    const legacy = ['exp-dissolve','exp-magnet','exp-magnet-ii','exp-plant-water','exp-day-night','exp-earth-orbit','exp-buoyancy','exp-clock-mechanism','exp-pullback-car','exp-mini4wd','exp-cube-mechanism'];
    for(const id of legacy)expect(index).toContain('id: "'+id+'"');
    expect(index).toContain('if (id === "exp-magnet") { this.startMagnetLab();');
    expect(index).toContain('["exp-buoyancy", "exp-clock-mechanism"');
  });
  it('adds only a standalone entry on the old experiment map',()=>{
    expect(index).toContain('id: "exp-3d-new"');
    expect(index).toContain('window.location.assign("./experiments/3d/")');
    expect(existsSync(root+'index.html')).toBe(true);
  });
  it('serves six different HTML shells and a common lazy-loaded engine',()=>{
    for(const page of pages){
      const path=root+page+'/index.html';
      expect(existsSync(path)).toBe(true);
      const html=readFileSync(path,'utf8');
      expect(html).toContain('../../../modules/experiment-planets/planet.js');
      expect(html).toContain('../shared/planet.css');
      expect(html).not.toContain('https://cdn.');
      expect(html).toContain('id="ep-quiz-open"');
      expect(html).toContain('id="ep-scene"');
    }
    expect(readFileSync('src/experiment-planets/app.ts','utf8')).toContain("await import('./ocean')");
    expect(readFileSync('src/experiment-planets/app.ts','utf8')).toContain("await import('./five')");
  });
  it('keeps lesson graphics in the 3D environment instead of loading into main page',()=>{
    const page = readFileSync('index.html','utf8');
    expect(page).not.toContain('modules/experiment-planets/planet.js');
  });
});
describe('scientific checks: Archimedes and dry friction classroom approximations',()=>{
  it('distinguishes object density and fluid density',()=>{
    expect(density(100,100)).toBe(1);
    expect(buoyancyModel(100,100,1).tendency).toBe('neutral');
    expect(buoyancyModel(100,100,1.025).tendency).toBe('float');
    expect(buoyancyModel(270,100,1).tendency).toBe('sink');
    expect(buoyancyModel(50,100,1).tendency).toBe('float');
  });
  it('calculates actual forces for displaced fluid volume, even for sinking objects',()=>{
    const stone=buoyancyModel(270,100,1);
    expect(stone.weightN).toBeCloseTo(2.6487,4);
    expect(stone.buoyantN).toBeCloseTo(.981,4);
    expect(stone.netUpN).toBeLessThan(0);
    const wood=buoyancyModel(50,100,1,.5);
    expect(wood.netUpN).toBeCloseTo(0,5);
  });
  it('uses continuous submerged fraction, not a fixed float-sink animation',()=>{
    expect(displacedFraction(2,1,1)).toBe(0);
    expect(displacedFraction(1,1,1)).toBe(.5);
    expect(displacedFraction(0,1,1)).toBe(1);
  });
  it('reduces net acceleration when mass or friction increases',()=>{
    const light=motionAcceleration(8,1,.09);
    expect(light).toBeGreaterThan(motionAcceleration(8,2,.09));
    expect(light).toBeGreaterThan(motionAcceleration(8,1,.28));
    expect(() => density(0,1)).toThrow();
    expect(() => buoyancyModel(1,1,-1)).toThrow();
  });
});
