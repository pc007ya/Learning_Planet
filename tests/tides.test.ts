import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { phase, tideAmplitude, tideHeight, phasePath, wrap } from '../src/tides/model';
describe('ideal tide science, never a coastal prediction',()=>{
  it('has larger equal ranges at new/full moon and smaller nonzero ranges at quarters',()=>{
    for(const a of [0,180])expect(2*tideAmplitude(a)).toBeCloseTo(2.92,8);
    for(const a of [90,270])expect(2*tideAmplitude(a)).toBeCloseTo(1.08,8);
    expect(2*tideAmplitude(45)).toBeCloseTo(2.201454065,7);
  });
  it('is symmetric on opposite sides, conserves the mean and matches its analytic amplitude',()=>{
    for(const a of [0,23,45,90,135,180,271]){
      let sum=0,max=-Infinity,min=Infinity;
      for(let t=0;t<360;t+=.1){const h=tideHeight(t,a);sum+=h;max=Math.max(max,h);min=Math.min(min,h);expect(h).toBeCloseTo(tideHeight(t+180,a),10);expect(h).toBeCloseTo(tideHeight(t,a+180),10);}
      expect(sum/3600).toBeCloseTo(0,8);
      expect(max-min).toBeCloseTo(2*tideAmplitude(a),4);
    }
    // The combined bulge at 45° must not simply point toward the Moon.
    expect(tideHeight(32.6488,45)).toBeGreaterThan(tideHeight(45,45));
  });
  it('shows the Earth-view phases with correct illumination fractions',()=>{
    expect(phase(0)).toEqual({name:'新月',lit:0});
    expect(phase(90).name).toBe('上弦月');expect(phase(90).lit).toBeCloseTo(.5);
    expect(phase(180)).toEqual({name:'滿月',lit:1});
    expect(phase(270).name).toBe('下弦月');expect(phase(270).lit).toBeCloseTo(.5);
    expect(wrap(-5)).toBe(355);expect(phasePath(90)).not.toContain('NaN');
  });
});
describe('tide lesson isolation and scientific caveats',()=>{
  const html=readFileSync('experiments/3d/earth-moon/tides/index.html','utf8');
  const source=readFileSync('src/tides/app.ts','utf8');
  it('is linked from Earth-Moon and loads only its own small module',()=>{
    expect(readFileSync('experiments/3d/earth-moon/index.html','utf8')).toContain('href="./tides/"');
    expect(html).toContain('../../../../modules/tides/tides.js');
    expect(readFileSync('index.html','utf8')).not.toContain('modules/tides/');
    expect(source).not.toMatch(/from ['"]three/);
    expect(source).toContain("../experiments/narration");
  });
  it('keeps visible limits, official sources, pointer and keyboard access',()=>{
    for(const text of ['不是月球把遠側海水推開','小潮仍有潮汐','不是海水流向','不能說所有海岸一天固定兩次滿潮','不代表當地正好滿潮','沒有載入即時潮時','繞地球的位置','不是兩者總引力的比例'])expect(source).toContain(text);
    expect(html).toContain('非潮時預報');expect(html).not.toContain('<select');
    expect(source).toContain('setPointerCapture');expect(source).toContain('ArrowRight');
    expect(source).toContain('visibilitychange');expect(source).toContain('pagehide');
  });
});
