/** Exact 3×3 outer-face state. Camera rotation is deliberately not a puzzle move. */
export type CubeVector = readonly [number, number, number];
export type CubeFace = 'R' | 'L' | 'U' | 'D' | 'F' | 'B';
export type CubeColor = 'red' | 'orange' | 'white' | 'yellow' | 'green' | 'blue';
export interface CubeSticker { color: CubeColor; normal: CubeVector }
export interface Cubie { id: string; position: CubeVector; stickers: CubeSticker[] }
export type CubeState = Cubie[];
const FACES: Record<CubeFace, { axis: 0|1|2; side: 1|-1; color: CubeColor }> = {
  R: { axis:0, side:1, color:'red' }, L: { axis:0, side:-1, color:'orange' },
  U: { axis:1, side:1, color:'white' }, D: { axis:1, side:-1, color:'yellow' },
  F: { axis:2, side:1, color:'green' }, B: { axis:2, side:-1, color:'blue' },
};
const normalFor = (axis: number, side: number): CubeVector => [axis===0?side:0,axis===1?side:0,axis===2?side:0];
const same = (a: CubeVector,b: CubeVector) => a.every((n,i)=>n===b[i]);
export function solvedCube(): CubeState {
  const state: CubeState=[];
  for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++) {
    if(x===0&&y===0&&z===0)continue;
    const position: CubeVector=[x,y,z];
    const stickers=Object.values(FACES).filter(f=>position[f.axis]===f.side).map(f=>({color:f.color,normal:normalFor(f.axis,f.side)}));
    state.push({id:`${x},${y},${z}`,position,stickers});
  }
  return state;
}
function parse(move: string) {
  if(!/^[RLUDFB](?:2|')?$/.test(move))throw new Error(`Unsupported cube move: ${move}`);
  return { ...FACES[move[0] as CubeFace], turns:move.endsWith('2')?2:move.endsWith("'")?-1:1 };
}
function quarter(v: CubeVector,axis:number): CubeVector {
  const [x,y,z]=v;
  const out=axis===0?[x,-z,y]:axis===1?[z,y,-x]:[-y,x,z];
  return out.map(n=>n===0?0:n) as unknown as CubeVector;
}
export function turnCube(state: CubeState, move: string): CubeState {
  const {axis,side,turns}=parse(move);
  // Clockwise is viewed from outside the selected face toward the core.
  const count=((-side*turns)%4+4)%4;
  const rotate=(v:CubeVector)=>{let next=v;for(let i=0;i<count;i++)next=quarter(next,axis);return [...next] as unknown as CubeVector;};
  return state.map(piece=>({id:piece.id,position:piece.position[axis]===side?rotate(piece.position):[...piece.position] as unknown as CubeVector,
    stickers:piece.stickers.map(s=>({color:s.color,normal:piece.position[axis]===side?rotate(s.normal):[...s.normal] as unknown as CubeVector}))}));
}
export function applyCubeMoves(state:CubeState,moves:readonly string[]):CubeState { return moves.reduce(turnCube,state); }
/** Restores a known move history; NOT an optimal or general imported-state solver. */
export function inverseCubeMoves(moves:readonly string[]):string[] {
  return [...moves].reverse().map(move=>{parse(move);return move.endsWith('2')?move:move.endsWith("'")?move[0]:`${move}'`;});
}
export function cubeSolved(state:CubeState):boolean {
  return state.length===26 && state.every(p=>p.stickers.every(s=>{
    const face=Object.values(FACES).find(f=>f.color===s.color)!;
    return same(s.normal,normalFor(face.axis,face.side));
  }));
}
/** A white facelet on top alone is insufficient: its side color must match its center. */
export function matchedWhiteCrossEdges(state:CubeState):number {
  return state.filter(p=>p.stickers.length===2&&p.stickers.some(s=>s.color==='white')&&p.stickers.every(s=>{
    const f=Object.values(FACES).find(f=>f.color===s.color)!;
    return same(s.normal,normalFor(f.axis,f.side));
  })).length;
}
