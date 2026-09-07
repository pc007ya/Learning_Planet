import {describe,it,expect} from 'vitest';
import {applyCubeMoves,solvedCube,cubeSolved,matchedWhiteCrossEdges} from '../src/experiments/cube-state';
import {teachingPlan,faceletString,pieceSolved} from '../src/experiments/cube-teaching-plan';
describe('state-based cube teacher',()=>{
 it('serializes centers and solved face order',()=>expect(faceletString(solvedCube())).toBe('fffffffffrrrrrrrrruuuuuuuuudddddddddlllllllllbbbbbbbbb'));
 it('does not invent steps for a solved cube',()=>expect(teachingPlan(solvedCube())).toEqual([]));
 for(let seed=1;seed<=300;seed++)it(`solves independently of history, seed ${seed}`,()=>{
  let r=seed;const moves=Array.from({length:30},()=>{r=(r*1664525+1013904223)>>>0;return 'FRUDLB'[r%6]+['',"'",'2'][(r>>>8)%3];});
  let state=applyCubeMoves(solvedCube(),moves);const plan=teachingPlan(JSON.parse(JSON.stringify(state)));
  for(let i=0;i<plan.length;i++){const chapter=plan[i];expect(chapter.targets.length).toBeGreaterThan(0);
   if(chapter.phase==='f2l')for(const id of chapter.targets)expect(state.find(p=>p.id===id)!.stickers.some(s=>s.color==='yellow')).toBe(false);
   if(chapter.phase==='oll')for(const id of chapter.targets)expect(state.find(p=>p.id===id)!.stickers.find(s=>s.color==='yellow')!.normal[1]).not.toBe(-1);
   state=applyCubeMoves(state,chapter.moves);expect(faceletString(state)).toBe(chapter.end);expect(state).toEqual(chapter.checkedState);
   if(chapter.phase==='cross')for(const id of chapter.targets)expect(state.find(p=>p.id===id)!.stickers).toHaveLength(2);
   if(plan[i+1]?.phase!==chapter.phase){if(chapter.phase==='cross')expect(matchedWhiteCrossEdges(state)).toBe(4);
    if(chapter.phase==='f2l')expect(state.filter(p=>!p.stickers.some(s=>s.color==='yellow')).every(pieceSolved)).toBe(true);
    if(chapter.phase==='oll')expect(state.filter(p=>p.stickers.some(s=>s.color==='yellow')).every(p=>p.stickers.find(s=>s.color==='yellow')!.normal[1]===-1)).toBe(true);}
  }expect(cubeSolved(state)).toBe(true);
 });
});
