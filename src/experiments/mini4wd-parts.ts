import type {Setup} from './mini4wd-physics';
export type PartSpec={id:string;name:string;count:number;needs:string[];voice:string};
const wheels=['fl','fr','rl','rr'];
const names=['左前','右前','左後','右後'];
export const PARTS:PartSpec[]=[
  {id:'chassis',name:'底盤',count:1,needs:[],voice:'底盤固定所有零件，是四驅車的骨架。'},
  {id:'motor',name:'馬達',count:1,needs:['chassis'],voice:'電流經過馬達，電能轉成轉動。它不需要先往後拉。'},
  {id:'gears',name:'減速齒輪組',count:1,needs:['motor'],voice:'小齒輪帶動較大的齒輪，轉得比較慢，輪端扭力比較大。'},
  {id:'shaft',name:'傳動軸',count:1,needs:['gears'],voice:'中間的長軸把馬達動力傳到前輪，是四輪驅動的重要連接。'},
  {id:'axles',name:'前後輪軸',count:2,needs:['shaft'],voice:'兩根輪軸連接左右輪圈，齒輪把動力送到前後輪軸。'},
  ...wheels.map((w,i)=>({id:'rim-'+w,name:names[i]+'輪圈',count:1,needs:['axles'],voice:names[i]+'輪圈套在輪軸上，輪胎再套在輪圈外面。'})),
  ...wheels.map((w,i)=>({id:'tire-'+w,name:names[i]+'輪胎',count:1,needs:['rim-'+w],voice:names[i]+'輪胎接觸地面。摩擦讓輪子的轉動變成前進。'})),
  {id:'rollers',name:'導輪',count:4,needs:['chassis'],voice:'四個小導輪接觸軌道護欄，幫忙引導車頭轉彎。'},
  {id:'switch',name:'開關與接點',count:1,needs:['motor'],voice:'開關閉合，電池、馬達與導線形成完整迴路；打開開關，馬達就不再得到電力。'},
  {id:'battery-a',name:'電池 A',count:1,needs:['switch'],voice:'這兩顆電池串聯。依正負標記安裝，接點會把它們接成供電迴路。'},
  {id:'battery-b',name:'電池 B',count:1,needs:['battery-a'],voice:'第二顆電池依相反方向放置，底盤接點將兩顆串聯。'},
  {id:'shell',name:'車殼',count:1,needs:['rollers','battery-b',...wheels.map(w=>'tire-'+w)],voice:'最後扣上車殼。外觀與配重不同，試跑結果也可能不同。'}
];
export const completeParts=()=>new Set(PARTS.map(p=>p.id));
export function canInstall(id:string,installed:Set<string>){return PARTS.find(p=>p.id===id)?.needs.every(n=>installed.has(n))??false;}
export function removePart(id:string,installed:Set<string>){
  if(id==='chassis')return false;
  if(PARTS.some(p=>installed.has(p.id)&&p.needs.includes(id)))return false;
  return installed.delete(id);
}
export function setupLabel(s:Setup){return `${s.gear}:1・${s.tire==='grip'?'抓地胎':'硬胎'} ${s.diameter} mm・${s.shell==='arrow'?'箭羽':'尾翼'}・${s.ballast==='center'?'中央':'後方'}配重`;}
