import solve from 'rubiks-cube-solver';
import {applyCubeMoves,cubeSolved,solvedCube,type CubeState,type CubeVector,type Cubie} from './cube-state';
export const FACE_NORMALS:Record<string,CubeVector>={F:[0,0,1],R:[1,0,0],U:[0,1,0],D:[0,-1,0],L:[-1,0,0],B:[0,0,-1]};
export const COLOR_FACE:Record<string,string>={green:'F',red:'R',white:'U',yellow:'D',orange:'L',blue:'B'};
const orders:Record<string,number[]>={F:[1,0,-1,1],R:[1,2,-1,-1],U:[2,0,1,1],D:[2,0,-1,1],L:[1,2,-1,1],B:[1,0,-1,-1]};
export function facePieces(state:CubeState,face:string){const n=FACE_NORMALS[face],axis=n.findIndex(v=>v!==0),[row,col,rs,cs]=orders[face];return state.filter(p=>p.position[axis]===n[axis]).sort((a,b)=>(a.position[row]-b.position[row])*rs||(a.position[col]-b.position[col])*cs);}
export function faceletString(state:CubeState){return Object.keys(orders).map(f=>facePieces(state,f).map(p=>{const sticker=p.stickers.find(s=>s.normal.every((v,i)=>v===FACE_NORMALS[f][i]));if(!sticker)throw Error('Missing sticker');return COLOR_FACE[sticker.color].toLowerCase();}).join('')).join('');}
export function pieceSolved(piece:Cubie){return piece.stickers.every(s=>s.normal.every((v,i)=>v===FACE_NORMALS[COLOR_FACE[s.color]][i]));}
export interface TeachingChapter{phase:'cross'|'f2l'|'oll'|'pll';moves:string[];targets:string[];end:string;checkedState:CubeState;}
// Track a virtual whole-cube frame: wide/slice turns become outer turns plus
// a frame change. The child's fixed-center model never needs a slice move.
export function outerTranslator(){let frame=Object.fromEntries(Object.entries(FACE_NORMALS).map(([k,v])=>[k,[...v]]));
 const mapped=(face:string)=>Object.keys(frame).find(f=>frame[f].every((v,i)=>v===FACE_NORMALS[face][i]))!;
 return (algorithm:string)=>{const result:string[]=[];
  for(const token of algorithm.trim().split(/\s+/).filter(Boolean)){
   if(!/^[FRUDLBMES](?:prime|2|'|2prime|prime2)?$/i.test(token))throw Error(`Unsupported solver notation: ${token}`);
   let face=token[0];const suffix=token.includes('2')?'2':token.toLowerCase().includes('prime')||token.includes("'")?"'":'';
   const slice='MESmes'.includes(face);if(slice)face=({m:'l',e:'d',s:'f'} as Record<string,string>)[face.toLowerCase()];
   if(face===face.toUpperCase()){result.push(mapped(face)+suffix);continue;}
   const n=FACE_NORMALS[face.toUpperCase()],axis=n.findIndex(v=>v!==0),side=n[axis],opposite=Object.keys(FACE_NORMALS).find(f=>FACE_NORMALS[f][axis]===-side)!;
   result.push(mapped(opposite)+suffix);
   const turns=suffix==='2'?2:suffix==="'"?-1:1,count=((-side*turns)%4+4)%4;
   for(let k=0;k<count;k++)frame=Object.fromEntries(Object.entries(frame).map(([f,[x,y,z]])=>[f,axis===0?[x,-z,y]:axis===1?[z,y,-x]:[-y,x,z]]));
   if(slice)result.push(mapped(face.toUpperCase())+(suffix==='2'?'2':suffix==="'"?'':"'"));
  }
  // Two quarter turns keep every child-facing arrow a single, clear action.
  return result.flatMap(m=>m.endsWith('2')?[m[0],m[0]]:[m]);
 };
}
/** Sole input is the visible state. No scramble or undo history is accepted. */
export function teachingPlan(input:CubeState):TeachingChapter[]{
 if(cubeSolved(input))return [];
 const partitions=solve(faceletString(input),{partitioned:true}),translate=outerTranslator();let state=input;const chapters:TeachingChapter[]=[];
 for(const phase of ['cross','f2l','oll','pll'] as const){
  for(const raw of [partitions[phase]].flat()){
   const moves=translate(raw);if(!moves.length)continue;const next=applyCubeMoves(state,moves);
   let targets=next.filter(p=>pieceSolved(p)&&!pieceSolved(state.find(q=>q.id===p.id)!)).map(p=>p.id);
   if(phase==='cross')targets=targets.filter(id=>{const p=next.find(p=>p.id===id)!;return p.stickers.length===2&&p.stickers.some(s=>s.color==='white');});
   if(phase==='f2l')targets=targets.filter(id=>!next.find(p=>p.id===id)!.stickers.some(s=>s.color==='yellow'));
   if(phase==='oll')targets=state.filter(p=>p.stickers.some(s=>s.color==='yellow'&&s.normal[1]!==-1)).map(p=>p.id);
   if(phase==='pll')targets=state.filter(p=>p.stickers.some(s=>s.color==='yellow')&&!pieceSolved(p)).map(p=>p.id);
   chapters.push({phase,moves,targets,end:faceletString(next),checkedState:next});state=next;
  }
 }
 if(!cubeSolved(state)||faceletString(state)!==faceletString(solvedCube()))throw Error('Solution verification failed');
 return chapters;
}
