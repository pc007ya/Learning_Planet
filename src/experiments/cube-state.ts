/** Exact 3×3 state. Camera rotation is deliberately not a puzzle move. */
export type CubeVector = readonly [number, number, number];
export type CubeFace = 'R' | 'L' | 'U' | 'D' | 'F' | 'B';
export type CubeSlice = 'M' | 'E' | 'S';
export type CubeColor = 'red' | 'orange' | 'white' | 'yellow' | 'green' | 'blue';
export interface CubeSticker { color: CubeColor; normal: CubeVector }
export interface Cubie { id: string; position: CubeVector; stickers: CubeSticker[] }
export type CubeState = Cubie[];

const FACES: Record<CubeFace, { axis: 0|1|2; side: 1|-1; color: CubeColor }> = {
  R: { axis:0, side:1, color:'red' }, L: { axis:0, side:-1, color:'orange' },
  U: { axis:1, side:1, color:'white' }, D: { axis:1, side:-1, color:'yellow' },
  F: { axis:2, side:1, color:'green' }, B: { axis:2, side:-1, color:'blue' },
};
const SLICES: Record<CubeSlice,{axis:0|1|2;directionSide:1|-1}> = {
  // Singmaster convention: M turns like L, E like D, S like F.
  M:{axis:0,directionSide:-1}, E:{axis:1,directionSide:-1}, S:{axis:2,directionSide:1},
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
export function cubeMoveSpec(move:string){
  if(!/^[RLUDFBMES](?:2|')?$/.test(move))throw new Error(`Unsupported cube move: ${move}`);
  const key=move[0] as CubeFace|CubeSlice;
  const outer=FACES[key as CubeFace],slice=SLICES[key as CubeSlice];
  const turns=move.endsWith('2')?2:move.endsWith("'")?-1:1;
  if(outer)return {axis:outer.axis,layer:outer.side,directionSide:outer.side,turns,isSlice:false};
  return {axis:slice.axis,layer:0,directionSide:slice.directionSide,turns,isSlice:true};
}
function quarter(v: CubeVector,axis:number): CubeVector {
  const [x,y,z]=v;
  const out=axis===0?[x,-z,y]:axis===1?[z,y,-x]:[-y,x,z];
  return out.map(n=>n===0?0:n) as unknown as CubeVector;
}
export function turnCube(state: CubeState, move: string): CubeState {
  const {axis,layer,directionSide,turns}=cubeMoveSpec(move);
  // Clockwise is viewed from outside the reference face. M/E/S follow L/D/F.
  const count=((-directionSide*turns)%4+4)%4;
  const rotate=(v:CubeVector)=>{let next=v;for(let i=0;i<count;i++)next=quarter(next,axis);return [...next] as unknown as CubeVector;};
  return state.map(piece=>{
    const active=piece.position[axis]===layer;
    return {id:piece.id,position:active?rotate(piece.position):[...piece.position] as unknown as CubeVector,
      stickers:piece.stickers.map(s=>({color:s.color,normal:active?rotate(s.normal):[...s.normal] as unknown as CubeVector}))};
  });
}
export function applyCubeMoves(state:CubeState,moves:readonly string[]):CubeState { return moves.reduce(turnCube,state); }
/** Restores a known move history; works for outer and M/E/S slice turns. */
export function inverseCubeMoves(moves:readonly string[]):string[] {
  return [...moves].reverse().map(move=>{cubeMoveSpec(move);return move.endsWith('2')?move:move.endsWith("'")?move[0]:`${move}'`;});
}
export function centerNormalByColor(state:CubeState,color:CubeColor):CubeVector|undefined{
  return state.find(p=>p.stickers.length===1&&p.stickers[0].color===color)?.stickers[0].normal;
}
export function cubeSolved(state:CubeState):boolean {
  if(state.length!==26)return false;
  const centers=new Map<CubeColor,CubeVector>();
  for(const p of state.filter(p=>p.stickers.length===1))centers.set(p.stickers[0].color,p.stickers[0].normal);
  if(centers.size!==6)return false;
  return state.every(p=>p.stickers.every(s=>same(s.normal,centers.get(s.color)!)));
}
/** A white facelet beside the white center alone is insufficient: its side color must match its own center. */
export function matchedWhiteCrossEdges(state:CubeState):number {
  const centers=new Map<CubeColor,CubeVector>();
  for(const p of state.filter(p=>p.stickers.length===1))centers.set(p.stickers[0].color,p.stickers[0].normal);
  return state.filter(p=>p.stickers.length===2&&p.stickers.some(s=>s.color==='white')&&p.stickers.every(s=>same(s.normal,centers.get(s.color)!))).length;
}
