import {describe,it,expect} from 'vitest';
import {advancePlantHydration,plantBalance,plantRecoveryGoal,PLANT_DEFAULTS,type PlantConditions} from '../src/experiment-planets/plants-model';
const c=(extra:Partial<PlantConditions>={}):PlantConditions=>({...PLANT_DEFAULTS,...extra});
describe('plant transport classroom model',()=>{
 it('isolates light comparisons while retaining identical water, nutrient and gas settings',()=>{const normal=plantBalance(c()),shade=plantBalance(c({light:'shade'}));expect(shade.photosynthesis).toBeLessThan(normal.photosynthesis);expect(shade.soilWater).toBe(normal.soilWater);expect(shade.nutrition).toBe(normal.nutrition);expect(shade.carbonDioxide).toBe(normal.carbonDioxide);});
 it('limits photosynthesis by water or carbon dioxide even when there is enough light',()=>{const good=plantBalance(c());expect(plantBalance(c({water:'dry'})).photosynthesis).toBeLessThan(good.photosynthesis/2);expect(plantBalance(c({air:'low'})).photosynthesis).toBeLessThan(good.photosynthesis/2);});
 it('does not teach that more light or more water always produces healthier plants',()=>{const good=plantBalance(c());expect(plantBalance(c({light:'strong'})).turgor).toBeLessThan(good.turgor);const flood=plantBalance(c({water:'flood'}));expect(flood.soilWater).toBeGreaterThan(good.soilWater);expect(flood.rootOxygen).toBeLessThan(good.rootOxygen);expect(flood.turgor).toBeLessThan(good.turgor);});
 it('makes drought and recovery gradual, bounded and independent of frame subdivision',()=>{const dry=c({water:'dry'}),wet=c();const start=plantBalance(wet).turgor;const wilted=advancePlantHydration(start,dry,8);expect(wilted).toBeLessThan(.2);const recovered=advancePlantHydration(wilted,wet,8);expect(recovered).toBeGreaterThan(.7);const half=advancePlantHydration(advancePlantHydration(wilted,wet,4),wet,4);expect(half).toBeCloseTo(recovered,12);expect(recovered).toBeLessThanOrEqual(1);expect(()=>advancePlantHydration(start,wet,-1)).toThrow();});
 it('requires actual observed drought and present recovered conditions for the goal',()=>{expect(plantRecoveryGoal(c(),.8,false).passed).toBe(false);expect(plantRecoveryGoal(c({water:'dry'}),.2,true).passed).toBe(false);expect(plantRecoveryGoal(c({water:'flood'}),.8,true).passed).toBe(false);expect(plantRecoveryGoal(c({light:'strong'}),.8,true).passed).toBe(false);expect(plantRecoveryGoal(c(),.4,true).passed).toBe(false);expect(plantRecoveryGoal(c(),.74,true).passed).toBe(true);});
 it('uses qualitative day comparison without changing water-flow physics or claiming measured growth',()=>{const one=plantBalance(c()),seven=plantBalance(c({days:'seven'}));expect(seven.growth).toBeGreaterThan(one.growth);expect(seven.uptake).toBe(one.uptake);expect(seven.transpiration).toBe(one.transpiration);});
});

import * as T from 'three';
import {vi} from 'vitest';
import type {Stage} from '../src/experiment-planets/core';
import {createPlants} from '../src/experiment-planets/plants';
function headlessPlant(){
 const context={fillStyle:'',fillRect(){},beginPath(){},ellipse(){},fill(){}};
 vi.stubGlobal('document',{createElement:()=>({width:0,height:0,getContext:()=>context})});
 const stage={worldRoot:new T.Group(),scene:new T.Scene(),camera:new T.PerspectiveCamera(),renderer:null,host:{dataset:{}},orbit:{target:new T.Vector3(),update(){}},label:()=>({style:{},hidden:false,dataset:{}}),bindDrag:()=>()=>{},notify(){}} as unknown as Stage;
 try{return createPlants(stage);}finally{vi.unstubAllGlobals();}
}
describe('plant learning state integration',()=>{
 it('requires a watched drought and real recovery, while demo and pause cannot grant the goal',()=>{
  const w=headlessPlant();w.demo!();w.tick(10);expect(w.checkChallenge!().passed).toBe(false);w.reset();
  w.choose('water','dry');w.observe();w.setPlaying!(false);w.tick(8);expect(Number(w.metrics!()[0].value)).toBeGreaterThan(70);expect(w.completed()[1]).toBe(false);
  w.setPlaying!(true);w.tick(8);expect(w.completed()[1]).toBe(true);expect(w.checkChallenge!().passed).toBe(false);w.choose('water','enough');w.tick(8);expect(w.checkChallenge!().passed).toBe(true);w.dispose();
 });
 it('only awards the light comparison with other conditions fixed and restores measured evidence',()=>{
  const w=headlessPlant();w.choose('days','seven');w.observe();w.choose('light','shade');w.choose('water','dry');w.observe();expect(w.completed()[2]).toBe(false);
  w.choose('water','enough');w.observe();expect(w.completed()[2]).toBe(true);const saved=w.snapshot!();const restored=headlessPlant();restored.restore!(saved);expect(restored.selected('light')).toBe('shade');expect(restored.completed()).toEqual(w.completed());expect(restored.snapshot!().observations).toEqual(saved.observations);w.dispose();restored.dispose();
 });
});
