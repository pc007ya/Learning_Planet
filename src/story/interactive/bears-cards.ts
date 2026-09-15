export function bearsCard(word:string):HTMLElement{
 const n=document.createElement('span');n.className='concept-card';
 const pic=(name:string,x=35,y=3,w=110,h=107,extra='')=>`<image href="images/story/bears-v1/${name}.png" x="${x}" y="${y}" width="${w}" height="${h}" ${extra}/>`;
 const arrow=(x:number,y:number,u:number,v:number)=>`<path d="M${x} ${y}L${u} ${v}" fill="none" stroke="#d88432" stroke-width="4" marker-end="url(#bears-${word})"/>`;
 const txt=(t:string,x=90,y=103)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="17" fill="#695138">${t}</text>`;
 let b='';
 if(['flashlight','branch','curtain'].includes(word))b=pic(word);
 else if(word==='shadow')b=pic('branch',8,20,67,90)+pic('branch',90,0,86,100,'style="filter:brightness(0);opacity:.45"')+arrow(70,35,99,35);
 else if(word==='noise'||word==='creak')b=pic('chair',15,8,105,96)+'<path d="M125 28Q144 46 125 64M137 18Q162 46 137 74" fill="none" stroke="#c99c50" stroke-width="4"/>'+txt(word==='creak'?'creak':'♪',148,99);
 else if(word==='shape'||word==='round'){b='<circle cx="'+(word==='round'?90:42)+'" cy="52" r="30" fill="#cbaa76" stroke="#8b704d" stroke-width="3"/>';if(word==='shape')b+='<rect x="93" y="22" width="55" height="60" rx="3" fill="#91b4a0"/><path d="M110 92L136 51L161 92Z" fill="#d5a173"/>';}
 else if(word==='straight')b='<path d="M20 42H159" stroke="#56847b" stroke-width="6"/>'+arrow(90,101,90,46);
 else if(word==='short')b='<path d="M25 28H158M25 79H76" stroke="#9f7e54" stroke-width="9"/>'+arrow(128,92,77,79);
 else if(word==='behind')b=pic('tiny',67,0,63,103)+pic('chair',33,28,122,86)+arrow(155,7,108,22);
 else if(word==='beside')b=pic('chair',5,8,98,101)+pic('tiny',111,24,56,84)+arrow(144,2,140,27);
 else if(word==='inside'||word==='outside'){b='<path d="M15 44L68 5L122 44V108H15Z" fill="#edd7b0" stroke="#aa8752" stroke-width="3"/>';b+=pic('tiny',word==='inside'?44:125,42,41,64)+arrow(word==='inside'?152:153,20,word==='inside'?72:147,50);}
 else if(word==='wall'||word==='floor')b='<path d="M16 15H154V78H16Z" fill="#e5c6a2"/><path d="M16 78H154L174 109H2Z" fill="#b98d5e"/>'+arrow(100,word==='wall'?107:15,80,word==='wall'?48:94);
 else if(word==='dark')b='<rect x="10" y="5" width="160" height="100" rx="12" fill="#25344d"/><circle cx="139" cy="27" r="12" fill="#f8e5ab"/>'+pic('tiny',61,33,56,71,'style="filter:brightness(.5)"');
 else if(word==='guess')b=pic('tiny',24,6,73,103)+txt('?',130,50);
 else if(word==='explain')b=pic('tiny',0,14,64,96)+'<rect x="77" y="3" width="95" height="71" rx="16" fill="#fff4d7" stroke="#c7a16c"/>'+pic('branch',88,9,69,60);
 else if(word==='brave')b=pic('tall',13,2,81,108)+pic('tiny',97,38,56,71)+'<path d="M94 23C80 8 77 32 94 43C113 31 108 8 94 23" fill="#d59a8d"/>';
 n.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 115" aria-hidden="true"><defs><marker id="bears-${word}" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#d88432"/></marker></defs>${b}</svg>`;return n;
}
