import test from 'node:test';import assert from 'node:assert/strict';
import {integrateProgress} from '../../modules/science-curriculum/integration-progress.mjs';
import {validProgress} from '../../modules/science-curriculum/store.mjs';
import {reconcileQuestionPool} from '../../modules/science-curriculum/rotation.mjs';
test('merged source current-cycle used IDs remain used; original records unchanged',()=>{
 const pool=(a,b)=>({schemaVersion:1,cycle:2,bankIds:[a,b],usedIds:[a],remainingIds:[b]});
 const state={schemaVersion:1,settings:{},tasks:{},units:{kh:{attempts:[],seen:['k1'],questionPool:pool('k1','k2')},na:{attempts:[],seen:['n1'],questionPool:pool('n1','n2')}}};
 const original=structuredClone(state.units.na);integrateProgress(state,{units:[{id:'kh',source_unit_ids:['kh','na']}]});
 assert.equal(validProgress(state),true);assert.deepEqual(state.units.na,original);
 const p=reconcileQuestionPool(['k1','k2','n1','n2'],state.units.kh.questionPool);assert.deepEqual(p.usedIds,['k1','n1']);assert.deepEqual(p.remainingIds,['k2','n2']);assert.equal(p.cycle,2);
});
