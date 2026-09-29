export const SHAPES = {
  cube: {name:'正方體',faces:6,roll:false,stack:true,note:'六個面都是一樣大的正方形。'},
  cuboid: {name:'長方體',faces:6,roll:false,stack:true,note:'有六個平面，相對的面一樣大。'},
  cylinder: {name:'圓柱',faces:2,roll:true,stack:true,note:'兩個平的圓形底面，還有一個曲面。平放底面可堆疊，側放可滾動。'},
  sphere: {name:'球',faces:0,roll:true,stack:false,note:'表面是曲面，容易滾動，不能穩定地上下堆疊。'},
  cone: {name:'圓錐',faces:1,roll:true,stack:false,note:'有一個平的圓形底面與曲面。側放會繞圈滾，上方尖尖的不適合堆疊。'}
};
export function cubeDimensions(l,w,h){
 if(![l,w,h].every(n=>Number.isInteger(n)&&n>=1&&n<=5))throw Error('長、寬、高請輸入 1～5。');
 return {l,w,h};
}
export function cubeLayout(kind='count',dimensions=null,pattern='full',random=Math.random) {
 if(dimensions){const {l,w,h}=cubeDimensions(dimensions.l,dimensions.w,dimensions.h);const cells=[];
  for(let z=0;z<w;z++)for(let x=0;x<l;x++){const height=pattern==='random'?1+Math.floor(random()*h):pattern==='full'||(x===0&&z===0)?h:1+(x+z)%h;
   for(let y=0;y<height;y++)cells.push({id:`cube-${x}-${y}-${z}`,x,y,z});
  }if(pattern==='random'&&h>1&&cells.length===l*w*h)cells.splice(cells.findIndex(c=>c.x===l-1&&c.z===w-1&&c.y===h-1),1);return cells;
 }

 const heights=kind==='space'?[3,1,2,2]:[1,2,3];
 return heights.flatMap((h,i)=>Array.from({length:h},(_,y)=>({id:`${i}-${y}`,x:kind==='space'?i%2:i,y,z:kind==='space'?Math.floor(i/2):0})));
}
export function missingCubes(cubes,l=2,w=2,h=3) {
 const occupied=new Set(cubes.map(c=>`${c.x},${c.y},${c.z}`));const missing=[];
 for(let y=0;y<h;y++)for(let z=0;z<w;z++)for(let x=0;x<l;x++)if(!occupied.has(`${x},${y},${z}`))missing.push({id:`gap-${x}-${y}-${z}`,x,y,z});
 return missing;
}
export function capacityValues(ml) {
 if(!Number.isInteger(ml)||ml<0||ml>1000)throw Error('水量必須在 0～1000 毫升之間。');
 return {ml,litres:ml/1000,cm3:ml,heightCm:ml/100,fraction:ml/1000};
}
