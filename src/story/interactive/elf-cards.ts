export function elfCard(word:string):HTMLElement{
 const n=document.createElement('span');n.className='concept-card';
 const pic=(name:string,x=35,y=3,w=110,h=107)=>`<image href="images/story/elf-v1/${name}.png" x="${x}" y="${y}" width="${w}" height="${h}"/>`;
 const arrow=(x:number,y:number,u:number,v:number)=>`<path d="M${x} ${y}L${u} ${v}" fill="none" stroke="#c88030" stroke-width="4" marker-end="url(#elf-${word})"/>`;
 const sun='<circle cx="91" cy="31" r="20" fill="#eec451"/><g stroke="#eec451" stroke-width="4"><path d="M91 1V7M91 55V64M60 31H52M122 31H131M69 9L64 4M113 53L120 60"/></g>';
 const tree='<path d="M85 60H99V110H85Z" fill="#90623f"/><circle cx="91" cy="55" r="34" fill="#6e9859"/><circle cx="66" cy="67" r="25" fill="#77a360"/><circle cx="118" cy="66" r="25" fill="#629052"/>';
 let b='';
 if(['acorn','bud','bloom','autumn','winter'].includes(word))b=pic(word);
 else if(word==='elf')b=pic('nori-happy');
 else if(word==='ripe'||word==='unripe')b=pic(word,48,23,86,86)+arrow(15,13,69,48);
 else if(word==='young')b=pic('young');
 else if(word==='grow')b=pic('young',2,52,63,57)+pic('grown',103,9,73,92)+arrow(65,59,108,38);
 else if(word==='change')b=pic('bud',1,9,65,95)+arrow(72,56,106,56)+pic('bloom',112,9,65,95);
 else if(word==='learn')b='<rect x="15" y="18" width="151" height="88" rx="7" fill="#f4e7c4" stroke="#a5814d"/><path d="M90 18V106" stroke="#a5814d"/><path d="M28 45H68M28 60H68M28 75H58M107 46L122 62L151 33" stroke="#628b5b" stroke-width="5" fill="none"/>';
 else if(word==='old'||word==='new'){b='<rect x="39" y="15" width="100" height="89" rx="6" fill="#b18458" stroke="#805739" stroke-width="3"/>';b+=word==='old'?'<path d="M45 20L51 28L44 38M129 90L120 96M56 75L73 62" fill="none" stroke="#684c35" stroke-width="3"/>':'<path d="M153 3L157 16L170 20L157 24L153 37L149 24L136 20L149 16Z" fill="#e4bc54"/>';b+='<path d="M51 15V104" stroke="#dfc9a0" stroke-width="3"/>';}
 else if(word==='spring')b=pic('bloom',35,12,100,101)+pic('bud',122,48,45,61);
 else if(word==='summer')b=sun+tree;
 else if(word==='season')b='<circle cx="90" cy="58" r="52" fill="#faf1d8" stroke="#ba9257" stroke-width="2"/>'+pic('bloom',43,12,38,42)+pic('autumn',101,58,39,42)+pic('winter',43,61,39,42)+'<circle cx="120" cy="33" r="17" fill="#edc053"/><path d="M90 7V110M39 57H142" stroke="#ba9257" stroke-width="2"/>';
 else if(word==='melt')b=pic('winter',1,8,67,74)+arrow(68,54,109,71)+'<ellipse cx="140" cy="93" rx="32" ry="10" fill="#abd8df"/><path d="M140 47Q111 79 140 84Q167 79 140 47Z" fill="#80c2d2"/>';
 else if(word==='frozen')b=pic('bud',1,5,81,103)+'<rect x="103" y="25" width="17" height="62" rx="4" fill="#6e817e"/><rect x="134" y="25" width="17" height="62" rx="4" fill="#6e817e"/>';
 else if(word==='allow')b='<path d="M20 96V22H91V96M27 25L71 9V104L27 92Z" fill="#d3b685" stroke="#916d42" stroke-width="3"/>'+arrow(82,58,157,58);
 n.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 115" aria-hidden="true"><defs><marker id="elf-${word}" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#c88030"/></marker></defs>${b}</svg>`;return n;
}
