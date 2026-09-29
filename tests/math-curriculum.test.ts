import {it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
const source=readFileSync('index.html','utf8');
const read=(name:string)=>Function(`return ${source.split(`const ${name} = `)[1].split('\n];')[0]}\n];`)();
const units=read('MATH_UNITS'),explore=read('MATH_EXPLORE_UNITS');
it('preserves all original quiz IDs and assigns unique consecutive grade codes',()=>{
 expect(units.map((u:any)=>u.id).sort()).toEqual([...Array.from({length:62},(_,i)=>`u${i+1}`),...Array.from({length:37},(_,i)=>`u${101+i}`)].sort());
 const counts=[27,28,24,18,3,1];
 for(let grade=1;grade<=6;grade++){
 const rows=[...units,...explore].filter((u:any)=>u.grade===grade).sort((a:any,b:any)=>a.displayOrder-b.displayOrder);
 expect(rows).toHaveLength(counts[grade-1]);
 expect(rows.map((u:any)=>u.displayCode)).toEqual(rows.map((_:any,i:number)=>`${grade}-${String(i+1).padStart(2,'0')}`));
 }
});
it('keeps exploration out of quiz records and preserves lesson destinations',()=>{
 expect(explore.map((u:any)=>u.teaching)).toEqual(['geo-area','geo-volume']);
 expect(explore.every((u:any)=>u.kind==='math-explore')).toBe(true);
 expect(source).toContain('showStart: u.kind !== "math-explore"');
 expect(source).toContain('showGeoExplore: false');
});
