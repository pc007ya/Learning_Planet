import {readFileSync,existsSync} from 'node:fs';
import {describe,it,expect} from 'vitest';
const read=(p:string)=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
describe('cube workshop delivery',()=>{
  it('keeps the existing modules and lazy-loads the new cube',()=>{
    const entry=read('src/experiments/index.ts');expect(entry).toContain("import('./cube-lab')");
    const page=read('index.html');for(const id of ['exp-buoyancy','exp-clock-mechanism','exp-pullback-car','exp-cube-mechanism'])expect(page).toContain(id);
  });
  it('uses picture choices and independent background objects without select or sliders',()=>{
    const ui=read('src/experiments/cube-lab.ts');expect(ui).not.toMatch(/<select|type=["']range/);expect(ui).toContain('cube-picture-answers');expect(ui).toContain('aria-label');
    expect(read('src/experiments/cube-view.ts')).toContain('alpha:true');expect(read('styles/interactive-labs.css')).toContain('shared-classroom/v1/classroom.png');
  });
  it('ships reusable media and clearly limits the helper and engineering claims',()=>{
    const spec=JSON.parse(read('data/experiments/cube-mechanism-v1/playback.json'));
    expect(spec.shots).toHaveLength(7);expect(existsSync(new URL('../'+spec.background,import.meta.url))).toBe(true);
    expect(existsSync(new URL('../'+spec.demoVideo,import.meta.url))).toBe(true);
    expect(spec.advanced.hint).toMatch(/not an optimal/);expect(spec.limits.join(' ')).toContain('no accurate collision');
    expect(read('src/experiments/cube-lab.ts')).toContain('this.savedHistory');
  });
});
