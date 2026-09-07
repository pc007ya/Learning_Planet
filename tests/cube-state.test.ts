import { describe,it,expect } from 'vitest';
import { solvedCube,turnCube,applyCubeMoves,inverseCubeMoves,cubeSolved,matchedWhiteCrossEdges } from '../src/experiments/cube-state';
describe('exact classic 3×3 cube moves',()=>{
  it('has 6 centers, 12 edges, 8 corners and 54 facelets',()=>{
    const s=solvedCube();expect([1,2,3].map(n=>s.filter(p=>p.stickers.length===n).length)).toEqual([6,12,8]);
    expect(s.flatMap(p=>p.stickers)).toHaveLength(54);expect(cubeSolved(s)).toBe(true);
  });
  for(const face of ['R','L','U','D','F','B'])it(`${face} has exact inverse and four-quarter-turn identity`,()=>{
    const s=solvedCube();expect(applyCubeMoves(s,[face,`${face}'`])).toEqual(s);
    expect(applyCubeMoves(s,[face,face,face,face])).toEqual(s);
    expect(applyCubeMoves(s,[`${face}2`,`${face}2`])).toEqual(s);
    expect(cubeSolved(turnCube(s,face))).toBe(false);
  });
  it('uses outside-face clockwise directions rather than camera-relative directions',()=>{
    const moved=turnCube(solvedCube(),'R').find(p=>p.id==='1,1,1')!;
    expect(moved.position).toEqual([1,1,-1]);
    expect(moved.stickers.find(s=>s.color==='green')?.normal).toEqual([0,1,0]);
    expect(moved.stickers.find(s=>s.color==='white')?.normal).toEqual([0,0,-1]);
  });
  it('preserves centers, color totals, distinct integer positions and reversible histories',()=>{
    const original=solvedCube(),moves=['R','U',"F'",'L2','B','D2',"R'",'F','U2'];
    const scrambled=applyCubeMoves(original,moves);
    expect(original).toEqual(solvedCube());expect(new Set(scrambled.map(p=>p.position.join(','))).size).toBe(26);
    for(const p of scrambled){expect(p.position.every(n=>Number.isInteger(n)&&Math.abs(n)<=1)).toBe(true);for(const s of p.stickers)expect(s.normal.reduce((sum,n)=>sum+Math.abs(n),0)).toBe(1);}
    for(const color of ['red','orange','white','yellow','green','blue'])expect(scrambled.flatMap(p=>p.stickers).filter(s=>s.color===color)).toHaveLength(9);
    expect(scrambled.filter(p=>p.stickers.length===1)).toEqual(original.filter(p=>p.stickers.length===1));
    expect(applyCubeMoves(scrambled,inverseCubeMoves(moves))).toEqual(original);
  });
  it('does not mistake four white edge stickers for a color-matched cross',()=>{
    expect(matchedWhiteCrossEdges(solvedCube())).toBe(4);
    expect(matchedWhiteCrossEdges(turnCube(solvedCube(),'U'))).toBe(0);
  });
  it('shows move order matters and validates the demonstration loop',()=>{
    expect(applyCubeMoves(solvedCube(),['R','U'])).not.toEqual(applyCubeMoves(solvedCube(),['U','R']));
    const demo=['R','U',"R'","U'"];
    expect(cubeSolved(applyCubeMoves(solvedCube(),demo))).toBe(false);
    expect(applyCubeMoves(solvedCube(),Array.from({length:6},()=>demo).flat())).toEqual(solvedCube());
  });
  it('rejects unsupported notation instead of silently corrupting a state',()=>{
    for(const move of ['x','Rw','M','R3','F<script>',''])expect(()=>turnCube(solvedCube(),move)).toThrow();
  });
});
