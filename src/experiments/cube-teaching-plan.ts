import solve from 'rubiks-cube-solver';
import {applyCubeMoves,cubeSolved,solvedCube,centerNormalByColor,type CubeColor,type CubeState,type CubeVector,type Cubie} from './cube-state';

export const FACE_NORMALS:Record<string,CubeVector>={F:[0,0,1],R:[1,0,0],U:[0,1,0],D:[0,-1,0],L:[-1,0,0],B:[0,0,-1]};
export const COLOR_FACE:Record<string,string>={green:'F',red:'R',white:'U',yellow:'D',orange:'L',blue:'B'};
const orders:Record<string,number[]>={F:[1,0,-1,1],R:[1,2,-1,-1],U:[2,0,1,1],D:[2,0,-1,1],L:[1,2,-1,1],B:[1,0,-1,-1]};
const same=(a:CubeVector,b:CubeVector)=>a.every((v,i)=>v===b[i]);
const faceForNormal=(n:CubeVector)=>Object.keys(FACE_NORMALS).find(f=>same(n,FACE_NORMALS[f]))!;

export function facePieces(state:CubeState,face:string){
 const n=FACE_NORMALS[face],axis=n.findIndex(v=>v!==0),[row,col,rs,cs]=orders[face];
 return state.filter(p=>p.position[axis]===n[axis]).sort((a,b)=>(a.position[row]-b.position[row])*rs||(a.position[col]-b.position[col])*cs);
}
export function centerFaceMap(state:CubeState){
 const map={} as Record<CubeColor,string>;
 for(const p of state.filter(p=>p.stickers.length===1))map[p.stickers[0].color]=faceForNormal(p.stickers[0].normal);
 return map;
}
/** Serialize relative to the six current centers. This keeps M/E/S states legal input for the solver. */
export function faceletString(state:CubeState){
 const colorFace=centerFaceMap(state);
 return Object.keys(orders).map(f=>facePieces(state,f).map(p=>{
   const sticker=p.stickers.find(s=>same(s.normal,FACE_NORMALS[f]));
   if(!sticker)throw Error('Missing sticker');
   return colorFace[sticker.color].toLowerCase();
 }).join('')).join('');
}
export function pieceSolved(piece:Cubie,state:CubeState=solvedCube()){
 const centers=new Map<string,CubeVector>();
 for(const p of state.filter(p=>p.stickers.length===1))centers.set(p.stickers[0].color,p.stickers[0].normal);
 return piece.stickers.every(s=>same(s.normal,centers.get(s.color)!));
}
export interface TeachingChapter{phase:'cross'|'f2l'|'oll'|'pll';moves:string[];targets:string[];end:string;checkedState:CubeState;usesSlices:boolean;}

const suffixOf=(token:string)=>token.includes('2')?'2':token.toLowerCase().includes('prime')||token.includes("'")?"'":'';
const withSuffix=(move:string,suffix:string)=>{
 if(suffix==='2')return move[0]+'2';
 const prime=move.endsWith("'");
 const base=move[0];
 if(suffix==="'")return prime?base:base+"'";
 return move;
};
export function sliceTranslator(algorithm:string){
 const result:string[]=[];
 for(const token of algorithm.trim().split(/\s+/).filter(Boolean)){
  if(!/^[FRUDLBMES](?:prime|2|'|2prime|prime2)?$/i.test(token))throw Error(`Unsupported solver notation: ${token}`);
  const raw=token[0],suffix=suffixOf(token),lower=raw===raw.toLowerCase(),face=raw.toUpperCase();
  if('MES'.includes(face)){result.push(withSuffix(face,suffix));continue;}
  if(!lower){result.push(withSuffix(face,suffix));continue;}
  const wide:Record<string,string[]>={R:['R',"M'"],L:['L','M'],U:['U',"E'"],D:['D','E'],F:['F','S'],B:['B',"S'"]};
  for(const m of wide[face])result.push(withSuffix(m,suffix));
 }
 return result;
}

// Compatibility fallback: absorb wide/slice notation into outer turns plus a virtual frame.
// It is retained for solver sequences whose notation cannot be represented slice-for-slice
// while preserving the library's expected final frame.
export function outerTranslator(){let frame=Object.fromEntries(Object.entries(FACE_NORMALS).map(([k,v])=>[k,[...v]]));
 const mapped=(face:string)=>Object.keys(frame).find(f=>frame[f].every((v,i)=>v===FACE_NORMALS[face][i]))!;
 return (algorithm:string)=>{const result:string[]=[];
  for(const token of algorithm.trim().split(/\s+/).filter(Boolean)){
   if(!/^[FRUDLBMES](?:prime|2|'|2prime|prime2)?$/i.test(token))throw Error(`Unsupported solver notation: ${token}`);
   let face=token[0];const suffix=suffixOf(token);
   const slice='MESmes'.includes(face);if(slice)face=({m:'l',e:'d',s:'f'} as Record<string,string>)[face.toLowerCase()];
   if(face===face.toUpperCase()){result.push(mapped(face)+suffix);continue;}
   const n=FACE_NORMALS[face.toUpperCase()],axis=n.findIndex(v=>v!==0),side=n[axis],opposite=Object.keys(FACE_NORMALS).find(f=>FACE_NORMALS[f][axis]===-side)!;
   result.push(mapped(opposite)+suffix);
   const turns=suffix==='2'?2:suffix==="'"?-1:1,count=((-side*turns)%4+4)%4;
   for(let k=0;k<count;k++)frame=Object.fromEntries(Object.entries(frame).map(([f,[x,y,z]])=>[f,axis===0?[x,-z,y]:axis===1?[z,y,-x]:[-y,x,z]]));
   if(slice)result.push(mapped(face.toUpperCase())+(suffix==='2'?'2':suffix==="'"?'':"'"));
  }
  return result.flatMap(m=>m.endsWith('2')?[m[0],m[0]]:[m]);
 };
}

/** Sole input is the visible state. No scramble or undo history is accepted. */
export function teachingPlan(input:CubeState):TeachingChapter[]{
 if(cubeSolved(input))return [];
 const partitions=solve(faceletString(input),{partitioned:true});
 const rawByPhase=(['cross','f2l','oll','pll'] as const).map(phase=>({phase,raws:[partitions[phase]].flat().filter(Boolean) as string[]}));
 const exactMoves=rawByPhase.flatMap(p=>p.raws.flatMap(sliceTranslator));
 const useSlices=cubeSolved(applyCubeMoves(input,exactMoves));
 const fallback=outerTranslator();
 let state=input;const chapters:TeachingChapter[]=[];
 for(const {phase,raws} of rawByPhase){
  for(const raw of raws){
   const moves=useSlices?sliceTranslator(raw):fallback(raw);
   if(!moves.length)continue;
   const next=applyCubeMoves(state,moves);
   let targets=next.filter(p=>pieceSolved(p,next)&&!pieceSolved(state.find(q=>q.id===p.id)!,state)).map(p=>p.id);
   if(phase==='cross')targets=targets.filter(id=>{const p=next.find(p=>p.id===id)!;return p.stickers.length===2&&p.stickers.some(s=>s.color==='white');});
   if(phase==='f2l')targets=targets.filter(id=>!next.find(p=>p.id===id)!.stickers.some(s=>s.color==='yellow'));
   if(phase==='oll'){
    const yellow=centerNormalByColor(state,'yellow')!;
    targets=state.filter(p=>p.stickers.some(s=>s.color==='yellow'&&!same(s.normal,yellow))).map(p=>p.id);
   }
   if(phase==='pll')targets=state.filter(p=>p.stickers.some(s=>s.color==='yellow')&&!pieceSolved(p,state)).map(p=>p.id);
   if(!targets.length){
    // A slice/frame action may improve orientation without immediately solving one cubie.
    // Keep the lesson visible by highlighting the pieces actually moved.
    const before=new Map(state.map(p=>[p.id,p.position.join(',')]));
    targets=next.filter(p=>before.get(p.id)!==p.position.join(',')).map(p=>p.id).slice(0,8);
   }
   chapters.push({phase,moves,targets,end:faceletString(next),checkedState:next,usesSlices:moves.some(m=>'MES'.includes(m[0]))});
   state=next;
  }
 }
 if(!cubeSolved(state))throw Error('Solution verification failed');
 return chapters;
}
