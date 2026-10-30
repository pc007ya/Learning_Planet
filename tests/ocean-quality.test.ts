import {describe,it,expect} from 'vitest';
import {immersedVolumeFraction,oceanForces,equilibriumDepth,shapeFractionAt,judgeOceanChallenge,advanceOceanBody,oceanRestCondition,type OceanTrial} from '../src/experiment-planets/ocean-model';
describe('ocean exterior volumes and measured forces',()=>{
 it('uses spherical cap volume, not a linear height proxy',()=>{
  expect(immersedVolumeFraction('sphere',.25)).toBeCloseTo(.15625,12);
  expect(immersedVolumeFraction('sphere',.5)).toBeCloseTo(.5,12);
  expect(immersedVolumeFraction('sphere',.75)).toBeCloseTo(.84375,12);
 });
 it('integrates every supported exterior, with continuous monotonic immersion',()=>{
  for(const shape of ['box','sphere','capsule','boat'] as const){let prev=0;expect(immersedVolumeFraction(shape,0)).toBe(0);expect(immersedVolumeFraction(shape,1)).toBeCloseTo(1,12);for(let i=0;i<=100;i++){const f=immersedVolumeFraction(shape,i/100);expect(f).toBeGreaterThanOrEqual(prev-1e-12);prev=f;}for(const ratio of [.15,.35,.5,.8,1])expect(immersedVolumeFraction(shape,equilibriumDepth(shape,ratio))).toBeCloseTo(ratio,10);}
 });
 it('sinks after reducing volume and floats after enlarging the same mass',()=>{
  expect(oceanForces(100,70,1,1).tendency).toBe('sink');expect(oceanForces(100,130,1,1).tendency).toBe('float');expect(oceanForces(100,100,1,1).netN).toBeCloseTo(0,12);
  const fraction=100/130;expect(oceanForces(100,130,1,fraction).buoyantN).toBeCloseTo(.981,12);
 });
 it('changes submerged volume with fluid density and counts buoyancy on sunk bodies',()=>{
  expect(oceanForces(270,100,1,1).buoyantN).toBeCloseTo(.981,12);expect(oceanForces(270,100,1,1).netN).toBeLessThan(0);
  expect(oceanForces(100,100,1.025,1).tendency).toBe('float');expect(equilibriumDepth('sphere',1/1.025)).toBeLessThan(1);
  expect(shapeFractionAt('sphere',4,1)).toBe(0);expect(shapeFractionAt('sphere',-1,1)).toBe(1);
 });
 it('settles freely released bodies with the geometry-dependent force balance',()=>{
  for(const shape of ['box','sphere','capsule','boat'] as const){for(const volume of [70,130]){let body={shape,mass:100,volume,fluid:1,height:1,y:2.1,velocity:0};for(let i=0;i<900;i++)body={...body,...advanceOceanBody(body,1/60)};const f=oceanForces(100,volume,1,shapeFractionAt(shape,body.y,1));if(volume===70){expect(body.y).toBeCloseTo(-1.55,6);expect(f.netN).toBeLessThan(0);}else{expect(Math.abs(f.netN)).toBeLessThan(.001);expect(Math.abs(body.velocity)).toBeLessThan(.001);expect(f.displacedCm3).toBeCloseTo(100,2);}}}
 });
 it('does not mistake an oscillation turning point for a settled measurement',()=>{expect(oceanRestCondition(.062,0,false)).toBe(false);expect(oceanRestCondition(.001,.005,false)).toBe(true);expect(oceanRestCondition(-1.2,0,true)).toBe(true);expect(oceanRestCondition(0,.2,false)).toBe(false);});
 it('requires observed controlled comparison and settled real forces for the challenge',()=>{
  const current:OceanTrial={object:'neutral',water:'fresh',mass:'normal',volume:'heavy',fraction:100/130,weightN:.981,buoyantN:.981,tendency:'float'};
  const sunk:OceanTrial={...current,volume:'light',fraction:1,buoyantN:.6867,tendency:'sink'};
  expect(judgeOceanChallenge([],current,true).passed).toBe(false);expect(judgeOceanChallenge([sunk],current,false).passed).toBe(false);expect(judgeOceanChallenge([sunk],current,true).passed).toBe(true);expect(judgeOceanChallenge([sunk],{...current,mass:'heavy'},true).passed).toBe(false);
 });
});
