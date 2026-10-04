// Version 1 remains deterministic so a saved attempt keeps its original diagrams.
export const generatedForm={id:'visual-variable',title:'圖形推理變化卷',subtitle:'積木・補滿・面積・周長，每次換題',minutes:25,source:'generated',generatedVersion:1,questionIds:Array.from({length:16},(_,i)=>`gv1-${i+1}`)};
export function cellPerimeter(cells){const set=new Set(cells.map(([x,y])=>`${x},${y}`));return cells.reduce((n,[x,y])=>n+[[1,0],[-1,0],[0,1],[0,-1]].filter(([dx,dy])=>!set.has(`${x+dx},${y+dy}`)).length,0);}
export function generatedQuestions(seed){
 let state=seed>>>0;const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;},integer=(min,max)=>min+Math.floor(random()*(max-min+1));
 const questions=[];
 const add=(stem,answer,category,visual,explain,check)=>{const values=[answer,answer+1,Math.max(0,answer-1),answer+integer(2,5)];for(let i=3;i>0;i--){const j=integer(0,i);[values[i],values[j]]=[values[j],values[i]];}questions.push({id:`gv1-${questions.length+1}`,stem,options:values.map(String),correct:values.indexOf(answer),category,visual,explain,check,source:'generated',level:'圖形推理'});};
 for(let i=0;i<4;i++){
  const l=integer(2,5),w=[1,2,3,5][i],h=integer(2,5),heights=Array.from({length:w},()=>Array.from({length:l},()=>integer(1,h)));heights[0][0]=h;
  const cubes=[];heights.forEach((row,z)=>row.forEach((n,x)=>{for(let y=0;y<n;y++)cubes.push({id:`${x}:${y}:${z}`,x,y,z});}));
  add('積木由底往上堆，沒有懸空。轉動看一看，共有幾塊？',cubes.length,'space',{kind:'cubes3d',dimensions:{l,w,h},cubes},`逐柱的高度為 ${heights.flat().join('、')}，相加共 ${cubes.length} 塊。看不到的底層也要算。`,'先數每一柱，再換視角核對；面數不等於積木數。');
 }
 for(let i=0;i<4;i++){
  const l=integer(2,5),w=integer(2,5),h=integer(2,5),cubes=[];
  for(let z=0;z<w;z++)for(let x=0;x<l;x++){const n=integer(1,h-1);for(let y=0;y<n;y++)cubes.push({id:`${x}:${y}:${z}`,x,y,z});}
  add(`要排滿長 ${l} 塊、寬 ${w} 塊、高 ${h} 塊的長方體，還要補幾塊？`,l*w*h-cubes.length,'space',{kind:'cubes3d',dimensions:{l,w,h},cubes,target:true},`排滿共有 ${l} × ${w} × ${h} ＝ ${l*w*h} 塊。圖中已放 ${cubes.length} 塊，還要 ${l*w*h} − ${cubes.length} ＝ ${l*w*h-cubes.length} 塊。`,'先算排滿的數量，再扣掉已放的；不要只數上面看得到的空格。');
 }
 const turn=(cells)=>cells.map(([x,y])=>[-y,x]);
 for(let i=0;i<4;i++){
  const w=integer(4,8),h=integer(3,6),cutW=integer(1,w-2),cutH=integer(1,h-1);let cells=[];
  for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(!(x>=w-cutW&&y>=h-cutH))cells.push([x,y]);
  for(let t=0;t<i;t++)cells=turn(cells);
  add('每個小方格是 1 cm²。色塊的面積是多少 cm²？',cells.length,'area',{kind:'cell-area',cells},`補成長方形是 ${w} × ${h} ＝ ${w*h} 格，缺角 ${cutW} × ${cutH} ＝ ${cutW*cutH} 格。色塊面積 ${w*h} − ${cutW*cutH} ＝ ${cells.length} cm²。`,'可以逐排數，也可以補滿再減；只算色塊，不算白色格。');
 }
 for(let i=0;i<4;i++){
  const n=integer(3,6),rectangle=(w,h)=>Array.from({length:w*h},(_,k)=>[k%w,Math.floor(k/w)]);let a=rectangle(n*2,2),b=rectangle(n,4);
  if(i%2){[a,b]=[b,a];}if(i>=2){a=turn(a);b=turn(b);}
  const pa=cellPerimeter(a),pb=cellPerimeter(b);
  add('甲、乙的面積一樣，每格邊長 1 cm。兩個圖形的周長相差幾 cm？',Math.abs(pa-pb),'area',{kind:'cell-compare',a,b},`甲、乙都是 ${a.length} cm²。沿外框數邊，甲的周長 ${pa} cm，乙的周長 ${pb} cm，相差 ${Math.abs(pa-pb)} cm。`,'面積一樣，周長不一定一樣；內部共用的邊不算外框。');
 }
 return questions;
}
