import {describe,it,expect} from 'vitest';
import {advanceCart,cartForces,initialCart,fairComparison,updateComparisonProgress,FORCE_GRAVITY,type ForceSettings,type CartState} from '../src/experiment-planets/force-model';
const smooth:ForceSettings={force:3,mass:1,surface:'smooth'};
function simulate(settings:ForceSettings,seconds:number,state:CartState=initialCart()){for(let t=0;t<seconds;t+=1/120)state=advanceCart(state,settings,Math.min(1/120,seconds-t));return state;}
describe('force cart: friction, motion and fair comparisons',()=>{
 it('obeys the static threshold rather than displaying motion under insufficient force',()=>{
  const settings:ForceSettings={force:3,mass:2,surface:'rough'};
  expect(cartForces(settings,0)).toMatchObject({stuck:true,acceleration:0,friction:-3});expect(simulate(settings,3).x).toBe(0);
 });
 it('matches x=at²/2 and v=at for constant force without an arbitrary speed ceiling',()=>{
  const state=simulate(smooth,1);const a=3-.08*FORCE_GRAVITY;expect(state.x).toBeCloseTo(.5*a,8);expect(state.v).toBeCloseTo(a,8);expect(state.a).toBeCloseTo(a,8);
  expect(simulate({force:8,mass:1,surface:'smooth'},1.2).v).toBeGreaterThan(8);
 });
 it('keeps moving after release and stops from friction without reversing',()=>{
  const released=simulate({force:0,mass:1,surface:'rough'},.25,{...initialCart(),v:1});expect(released.v).toBeGreaterThan(0);expect(released.x).toBeGreaterThan(0);
  const stopped=simulate({force:0,mass:1,surface:'rough'},2,{...initialCart(),v:1});expect(stopped.v).toBe(0);expect(stopped.x).toBeCloseTo(1/(2*.22*FORCE_GRAVITY),6);expect(stopped.a).toBe(0);
 });
 it('opposes leftward motion and can reverse only if an applied force exceeds static friction',()=>{
  expect(cartForces({...smooth,force:0},-1).friction).toBeGreaterThan(0);
  const state=simulate({...smooth,force:-3},1,{...initialCart(2),v:.5});expect(state.v).toBeLessThan(0);
 });
 it('records a 4m crossing separately from the clearly marked end buffer',()=>{
  const state=simulate({force:8,mass:1,surface:'smooth'},2);expect(state.finishTime).not.toBeNull();expect(state.finishTime!).toBeCloseTo(Math.sqrt(8/(8-.08*FORCE_GRAVITY)),2);expect(state.hitBuffer).toBe(true);expect(state.x).toBe(6.7);
 });
 it('requires valid single-variable measurements, excluding changed or unfinished runs',()=>{
  const a={...smooth,time:1.9,acceleration:2.2152,fair:true},b={...smooth,force:8,time:1.05,acceleration:7.2152,fair:true};
  expect(fairComparison([a,b],'force')).toBe(true);expect(fairComparison([a,{...b,mass:2}],'force')).toBe(false);expect(fairComparison([a,{...b,fair:false}],'force')).toBe(false);
 });
 it('obtains controlled-variable comparisons from completed simulated measurements',()=>{
  const settings:ForceSettings[]=[smooth,{...smooth,force:8},{...smooth,force:8,mass:2},{...smooth,force:8,surface:'rough'}];
  const trials=settings.map(config=>{const state=simulate(config,2);return {...config,time:state.finishTime!,acceleration:cartForces(config,0).acceleration,fair:true};});
  expect(trials.every(t=>t.time>0)).toBe(true);expect(fairComparison(trials,'force')).toBe(true);expect(fairComparison(trials,'mass')).toBe(true);expect(fairComparison(trials,'surface')).toBe(true);
 });
 it('keeps constant-force measurements stable across different frame durations',()=>{
  let state=initialCart();for(let n=0;n<20;n++)state=advanceCart(state,smooth,.05);
  expect(state.x).toBeCloseTo(simulate(smooth,1).x,8);expect(state.v).toBeCloseTo(simulate(smooth,1).v,8);
 });
 it('keeps earned comparisons after the ninth measurement evicts the original baseline',()=>{
  const weak={...smooth,time:1.90,acceleration:2.2152,fair:true},strong={...smooth,force:8,time:1.05,acceleration:7.2152,fair:true};
  let history=[weak,strong],earned=updateComparisonProgress(history);
  for(let n=0;n<7;n++){history.push({...strong});earned=updateComparisonProgress(history,earned);history=history.slice(-8);}
  expect(history).toHaveLength(8);expect(fairComparison(history,'force')).toBe(false);expect(earned.force).toBe(true);
  expect(updateComparisonProgress(history,JSON.parse(JSON.stringify(earned))).force).toBe(true);
  expect(updateComparisonProgress([weak,strong]).force).toBe(true);
  expect(updateComparisonProgress([{...weak,fair:false},{...strong,fair:false}]).force).toBe(false);
 });
 it('rejects nonphysical mass and elapsed time',()=>{expect(()=>cartForces({...smooth,mass:0},0)).toThrow();expect(()=>advanceCart(initialCart(),smooth,-1)).toThrow();});
});
