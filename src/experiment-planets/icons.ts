import {phasePath} from '../tides/model';
const shell=(content:string)=>`<svg viewBox="0 0 100 64" aria-hidden="true">${content}</svg>`;
export function choiceIcon(group:string,id:string,index=0){
 if(group==='phase'){const a=({new:0,quarter:90,full:180,last:270} as Record<string,number>)[id]??0;return shell(`<g transform="translate(50 32)"><circle r="25" fill="#142e45" stroke="#a8bdcd"/><path d="${phasePath(a)}" fill="#f2e5bc"/></g>`);}
 if(group==='object')return shell(id==='wood'?'<rect x="24" y="12" width="52" height="40" rx="5" fill="#d9a568"/><path d="M27 20q30 12 46 0M27 31q30-12 46 0M27 43q30 12 46 0" stroke="#936438" fill="none"/>':id==='stone'?'<path d="m22 43 7-25 30-8 22 25-11 18H35Z" fill="#a4b5c4"/><path d="m29 18 21 17 20 18M50 35l31 0" stroke="#697f90"/>':id==='submarine'?'<rect x="15" y="23" width="66" height="28" rx="14" fill="#f4c859"/><rect x="38" y="13" width="20" height="14" rx="4" fill="#dca841"/><circle cx="59" cy="36" r="9" fill="#80d6f4" stroke="#946d37" stroke-width="3"/><path d="M10 24v26M10 37H2" stroke="#b2d8e6" stroke-width="5"/>':id==='boat'?'<path d="M13 31h74L72 51H28Z" fill="#c89a60"/><path d="M24 31h52L65 40H35Z" fill="#63432a"/><path d="M9 53q14-7 28 0t28 0t27 0" stroke="#64d6e7" fill="none"/>':'<circle cx="50" cy="32" r="24" fill="'+(id==='ball'?'#ee898a':'#aa9bdc')+'"/><path d="M30 17q28 8 40 31M30 47q22-22 39-31" stroke="#f7e7bf" fill="none" stroke-width="3"/>');
 if(group==='pole')return shell(`<rect x="10" y="23" width="36" height="22" rx="3" fill="#ee6a6e"/><rect x="54" y="23" width="36" height="22" rx="3" fill="${id==='same'?'#ee6a6e':'#71a7f6'}"/><text x="28" y="39" text-anchor="middle" fill="white" font-size="16">N</text><text x="72" y="39" text-anchor="middle" fill="white" font-size="16">${id==='same'?'N':'S'}</text>`);
 if(group==='material')return shell(id==='iron'?'<path d="M30 13h40M50 13v37l-4 5" stroke="#c7d4df" stroke-width="8"/>':'<rect x="26" y="15" width="48" height="36" rx="9" fill="#f6b385"/><circle cx="50" cy="33" r="10" fill="#f3cfb4"/>');
 if(group==='force')return shell(`<rect x="56" y="19" width="27" height="28" rx="5" fill="#edba70"/><path d="M10 33H${id==='strong'?53:38}m-9-8 9 8-9 8" stroke="#83e9c6" stroke-width="${id==='strong'?7:4}" fill="none"/>`);
 if(group==='water'||group==='humidity')return shell(`<path d="M50 7Q16 43 33 54q17 14 34 0T50 7" fill="${id==='dry'?'#a5b2bd':'#61c8f3'}"/><path d="M41 47q-9-9 1-21" stroke="#e1f8ff" stroke-width="4" fill="none"/>`);
 if(group==='light'||group==='sun')return shell('<circle cx="50" cy="31" r="15" fill="#ffd776"/><path d="M50 5v7M50 50v9M23 31h-9M77 31h9M31 12l-6-6M70 51l6 6M30 51l-6 6M70 12l6-6" stroke="#ffe0a0" stroke-width="4"/>'+(id==='shade'||id==='weak'?'<path d="M15 54 85 8" stroke="#71849a" stroke-width="9"/>':''));
 if(group==='days')return shell(`<rect x="22" y="10" width="56" height="46" rx="7" fill="#d4e4ee"/><path d="M23 23h54" stroke="#6397b6" stroke-width="5"/><text x="50" y="47" text-anchor="middle" font-size="25" fill="#173548">${id==='seven'?'7':'1'}</text>`);
 return shell(`<path d="M16 48h68" stroke="#607e96" stroke-width="4"/><rect x="${25+index*3}" y="${id==='heavy'||id==='strong'?12:27}" width="${id==='heavy'||id==='strong'?50:35}" height="${id==='heavy'||id==='strong'?35:20}" rx="6" fill="${['#8ad8c9','#e5c580','#91b9ef'][index%3]}"/><path d="M47 13v25m-8-8 8 8 8-8" stroke="#f8f6df" stroke-width="3" fill="none"/>`);
}

// Original vector diagrams: each picture depicts its answer's claim, including
// misconceptions. No checkmarks/crosses or colour coding disclose correctness.
const ink='#eaf5fb',water='#66cde8',mint='#86e4cb',orange='#f3ae77';
const arrow=(x1:number,y1:number,x2:number,y2:number,color=mint,width=4)=>{const a=Math.atan2(y2-y1,x2-x1),s=7;return `<path d="M${x1} ${y1}L${x2} ${y2}m${-s*Math.cos(a-.55)} ${-s*Math.sin(a-.55)}L${x2} ${y2}l${-s*Math.cos(a+.55)} ${-s*Math.sin(a+.55)}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;};
const caption=(x:number,y:number,text:string,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="${ink}" font-family="system-ui,sans-serif" font-size="${size}">${text}</text>`;
const magnetBar=(x:number,y:number,reverse=false)=>`<rect x="${x}" y="${y}" width="42" height="23" rx="4" fill="${reverse?'#ef747e':'#72aef5'}"/><path d="M${x+21} ${y}h17q4 0 4 4v15q0 4-4 4h-17Z" fill="${reverse?'#72aef5':'#ef747e'}"/>${caption(x+10,y+17,reverse?'N':'S',18)}${caption(x+31,y+17,reverse?'S':'N',18)}`;
const basin=(level=48)=>`<path d="M14 25v62h132V25" fill="#102e45" stroke="#b4dae9" stroke-width="3"/><path d="M16 ${level}q13-4 26 0t26 0t26 0t26 0t24 0V85H16Z" fill="${water}" opacity=".32"/><path d="M16 ${level}q13-4 26 0t26 0t26 0t26 0t24 0" fill="none" stroke="${water}" stroke-width="2"/>`;
const plant=(x:number,y:number,droop=false)=>`<path d="M${x-14} ${y+20}h28l-4 23h-20Z" fill="#bd815a"/><path d="M${x} ${y+20}v-35" stroke="#5eaf78" stroke-width="4"/><path d="M${x} ${y+2}q${droop?-20:-28} ${droop?-5:-26} -24 ${droop?10:-12}q18 4 24 2M${x} ${y-8}q${droop?20:27} ${droop?-6:-24} 24 ${droop?10:-10}q-17 3-24 1" fill="#72bb77" stroke="#3b895c" stroke-width="1.5"/>`;
const drop=(x:number,y:number,r=5)=>`<path d="M${x} ${y-r}q${-r*1.6} ${r*1.7} ${-r*.75} ${r*2.2}q${r*.75} ${r*.8} ${r*1.5} 0q${r*.85} ${-r*.5} ${-r*.75} ${-r*2.2}" fill="${water}"/>`;
const cloud=(x=80,y=27)=>`<path d="M${x-35} ${y+13}a12 12 0 0 1 1-24 16 16 0 0 1 28-8 18 18 0 0 1 31 10 12 12 0 0 1 1 24Z" fill="#d7eaf1" stroke="#b7d3e1" stroke-width="1.5"/>`;
const cart=(x=50,y=55)=>`<rect x="${x-22}" y="${y-19}" width="44" height="23" rx="5" fill="#e5b579"/><rect x="${x-8}" y="${y-28}" width="18" height="9" rx="2" fill="#b7c9d7"/><circle cx="${x-13}" cy="${y+5}" r="7" fill="#44566e" stroke="#a0b4c4" stroke-width="2"/><circle cx="${x+14}" cy="${y+5}" r="7" fill="#44566e" stroke="#a0b4c4" stroke-width="2"/>`;
const road='<path d="M8 77H151" stroke="#abc1d0" stroke-width="4"/><path d="M10 83h8m8 0h8m8 0h8m8 0h8m8 0h8m8 0h8m8 0h8m8 0h8m8 0h8" stroke="#657f96" stroke-width="2"/>';
const sceneTitles:Record<string,readonly string[]>={
 ocean:['只改球的顏色','變大球排開更多水','沉水石頭只有向下箭頭的說法','秤上的重量變成零的說法'],
 magnet:['同高度的異極相對','同高度的同極相對','只改磁鐵高低','磁鐵與塑膠的組合'],
 plants:['未檢查土壤而持續大量澆水','先觀察再適量澆水並等待','把植物直接向上拉高','將二氧化碳移開'],
 weather:['雲出現後所有水滴立即落下的說法','小雲滴逐步合併成雨滴','把可見藍點叫作水氣的說法','只有強陽光也會下雨的說法'],
 'earth-moon':['日月位於地球同一方向','日月位於地球相反兩側','月球自己向外發光的說法','地球影子每天造成月相的說法'],
 'force-motion':['加大推力後較快通過同一光電門','小車質量變成零的說法','有推力就沒有摩擦的說法','放手後速度立即歸零的說法'],
};
function quizScene(moduleId:string,index:number){
 if(moduleId==='earth-moon')return [
  `<circle cx="29" cy="49" r="19" fill="#77b8df"/><path d="m19 42 8-8 10 4 1 10-8 8-11-5Z" fill="#80b994"/><circle cx="88" cy="49" r="11" fill="#7b869d"/><circle cx="136" cy="49" r="17" fill="#ffda7e"/>`+arrow(53,49,69,49,ink,3)+caption(83,85,'→',22),
  `<circle cx="22" cy="49" r="17" fill="#ffda7e"/><circle cx="80" cy="49" r="19" fill="#77b8df"/><path d="m70 42 8-8 10 4 1 10-8 8-11-5Z" fill="#80b994"/><circle cx="137" cy="49" r="11" fill="#e4e9eb"/>`+arrow(55,81,39,81,ink,3)+arrow(104,81,121,81,ink,3),
  `<circle cx="80" cy="49" r="22" fill="#f0e3b4"/><circle cx="72" cy="42" r="4" fill="#c4bda5"/><circle cx="88" cy="57" r="6" fill="#c4bda5"/><path d="M80 8v12M80 78v12M39 49h12M109 49h12M51 20l9 9M101 69l9 9M51 78l9-9M101 29l9-9" stroke="#ffe5a2" stroke-width="4" stroke-linecap="round"/>`,
  `<circle cx="18" cy="49" r="11" fill="#ffda7e"/><path d="m77 39 73-28v76L77 59Z" fill="#06101c" stroke="#6e879f" stroke-width="1.5"/><circle cx="62" cy="49" r="18" fill="#77b8df"/>${[23,49,75].map((y,i)=>`<circle cx="120" cy="${y}" r="10" fill="#d4dce1"/><path d="M120 ${y-10}a10 10 0 0 1 0 20q${[-14,0,13][i]}-10 0-20" fill="#45556c"/>`).join('')}`+caption(95,98,'1 · 2 · 3',10),
 ][index];
 if(moduleId==='magnet')return [
  magnetBar(13,43)+magnetBar(105,43)+arrow(58,54,70,54)+arrow(101,54,89,54)+caption(80,22,'N · S',16),
  magnetBar(13,43)+magnetBar(105,43,true)+arrow(73,54,57,54)+arrow(87,54,103,54)+caption(80,22,'N · N',16),
  magnetBar(13,57)+magnetBar(105,17)+arrow(125,85,125,51,ink)+`<path d="M8 87h143" stroke="#68859c" stroke-dasharray="4 4"/>`,
  magnetBar(12,40)+`<rect x="109" y="35" width="35" height="35" rx="8" fill="#ecb280"/><circle cx="126" cy="52" r="9" fill="#f9d8b8"/>`+arrow(62,45,96,45,mint,5)+arrow(62,58,96,58,mint,5),
 ][index];
 if(moduleId==='ocean')return [
  basin(61)+`<circle cx="46" cy="46" r="17" fill="#a89cdb"/><circle cx="112" cy="46" r="17" fill="#f1b8e3"/>`+arrow(69,44,88,44,ink,3),
  basin(51)+`<circle cx="55" cy="45" r="23" fill="#a99cdf"/><path d="M29 52h53M31 57h49M38 62h34" stroke="#d5f9ff" stroke-width="2"/>`+arrow(104,72,104,29)+caption(126,43,'F',13),
  basin(37)+`<path d="m45 56 10-16 26 3 12 21-17 12H51Z" fill="#a4b3c2"/>`+arrow(71,65,71,86,orange),
  `<path d="M40 40h80l-8 10H48Z" fill="#a9c2cf"/><path d="M80 50v21M60 71h40" stroke="#a9c2cf" stroke-width="5"/><rect x="46" y="72" width="68" height="22" rx="6" fill="#315368"/>`+caption(80,88,'0 g',16)+`<circle cx="80" cy="23" r="16" fill="#a99cdf"/>`+arrow(113,28,113,8,ink,3),
 ][index];
 if(moduleId==='plants')return [
  plant(85,48,true)+`<path d="M17 70q27 10 55 1t60 0" fill="none" stroke="${water}" stroke-width="6"/>`+drop(54,18,7)+drop(38,35,6)+drop(53,50,6)+drop(24,16,5),
  plant(44,50,true)+`<circle cx="105" cy="39" r="20" fill="none" stroke="#bed3df" stroke-width="2"/><path d="M105 25v15l9 5" stroke="#bed3df" stroke-width="3" fill="none"/>`+drop(59,16,5)+arrow(76,69,123,69,ink,3)+`<g transform="translate(134 54) scale(.68)">${plant(0,0,false)}</g>`,
  plant(78,49,true)+arrow(110,61,110,11,ink,4)+`<path d="M70 26q6-8 12-3l8 10" fill="none" stroke="#edc09d" stroke-width="7" stroke-linecap="round"/>`,
  plant(52,48,true)+caption(112,33,'CO₂',20)+arrow(96,51,145,51,ink,3),
 ][index];
 if(moduleId==='weather')return [
  cloud()+[42,58,74,90,106,122].map(x=>drop(x,64,7)).join('')+arrow(18,43,18,78,ink,4),
  `<circle cx="21" cy="31" r="3" fill="${water}"/><circle cx="33" cy="25" r="3" fill="${water}"/><circle cx="31" cy="39" r="3" fill="${water}"/>`+arrow(46,33,65,33,ink,3)+`<circle cx="81" cy="32" r="8" fill="${water}"/>`+arrow(95,33,114,33,ink,3)+drop(132,32,13)+`<path d="M12 82h136" stroke="#6c889d" stroke-width="2"/>`+caption(80,71,'t',15),
  `<g fill="${water}" stroke="#daf8ff" stroke-width="1.5">${[[37,28],[58,21],[81,29],[101,22],[124,31],[49,49],[74,48],[104,49],[63,67],[90,68]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7"/>`).join('')}</g>`,
  `<circle cx="40" cy="30" r="17" fill="#ffdc7a"/><path d="M40 5v6M40 49v7M14 30h7M60 30h7M20 10l5 5M56 46l5 5" stroke="#ffdc7a" stroke-width="3"/>`+[102,121,140].map(x=>drop(x,66,7)).join('')+arrow(67,31,99,43,ink,3),
 ][index];
 if(moduleId==='force-motion')return [
  road+cart(61,62)+arrow(10,47,38,47,mint,5)+`<path d="M125 76V29h23v47M135 29V76" stroke="#91dbe5" stroke-width="3" fill="none"/>`+caption(137,21,'4 m',12)+`<path d="M13 23h12m4 0h16m4 0h22" stroke="#b8f1df" stroke-width="3"/>`,
  road+cart(77,63)+`<rect x="47" y="7" width="61" height="23" rx="6" fill="#244b61" stroke="#96b8cb"/>`+caption(77,23,'0 kg',16),
  road+cart(79,62)+arrow(20,45,53,45,mint,5)+caption(87,20,'F',17)+`<circle cx="128" cy="60" r="11" fill="none" stroke="#bfd4df" stroke-width="2"/>`+caption(128,65,'0',14),
  road+cart(71,63)+`<path d="M16 39q6-9 13-4l6 5M19 40l-1 10" fill="none" stroke="#edc09d" stroke-width="6" stroke-linecap="round"/>`+caption(111,23,'v = 0',16)+`<path d="M40 52h10m-15 8h10" stroke="#afcbd9" stroke-width="2"/>`,
 ][index];
 throw new RangeError('未知的圖片題模組');
}
export function quizIcon(moduleId:string,index:number){
 if(!Number.isInteger(index)||index<0||index>3||!sceneTitles[moduleId])throw new RangeError('圖片題必須指定已配對模組與0–3選項');
 const title=sceneTitles[moduleId][index];return `<svg viewBox="0 0 160 100" aria-hidden="true" data-quiz-scene="${moduleId}-${index}"><title>${title}</title>${quizScene(moduleId,index)}</svg>`;
}
