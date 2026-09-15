export function mermaidCard(word:string):HTMLElement{
 const n=document.createElement('span');n.className='concept-card';
 const pic=(name:string,x=35,y=3,w=110,h=107)=>`<image href="images/story/mermaid-v1/${name}.png" x="${x}" y="${y}" width="${w}" height="${h}"/>`;
 const arrow=(x:number,y:number,u:number,v:number)=>`<path d="M${x} ${y}L${u} ${v}" fill="none" stroke="#d88432" stroke-width="4" marker-end="url(#mermaid-${word})"/>`;
 const sand='<path d="M5 78Q45 64 90 79T175 78V111H5Z" fill="#e9ce94"/>';
 let b='';
 if(['coral','seaweed','shell','crab','turtle','litter'].includes(word))b=pic(word);
 else if(word==='mermaid')b=pic('mira-happy');
 else if(word==='reef'||word==='habitat')b=sand+pic('coral',100,17,75,86)+pic('seaweed',4,25,52,81)+pic('fish',78,5,52,36)+pic('crab',51,70,44,38)+(word==='habitat'?'<path d="M18 63Q10 4 85 3T169 64" stroke="#cf9852" stroke-width="3" fill="none"/>':'');
 else if(word==='sand')b=sand+arrow(91,8,91,89)+'<g fill="#c4a064"><circle cx="35" cy="95" r="2"/><circle cx="125" cy="92" r="2"/><circle cx="140" cy="100" r="2"/></g>';
 else if(word==='shelter')b=pic('rock',18,0,144,109)+pic('crab',64,67,51,39)+arrow(172,21,103,65);
 else if(word==='tidy'||word==='messy'){for(let i=0;i<3;i++)b+=pic('shell',8+i*55,word==='tidy'?38:[7,51,25][i],49,54);}
 else if(word==='clean'||word==='dirty'||word==='spotless'){b='<rect x="15" y="10" width="150" height="93" rx="12" fill="#e1ece6" stroke="#c0ad83"/>';if(word==='dirty')b+='<g fill="#93734e"><ellipse cx="55" cy="47" rx="15" ry="10"/><circle cx="111" cy="76" r="10"/><ellipse cx="126" cy="33" rx="12" ry="7"/></g>';else b+='<path d="M92 22L98 42L118 48L98 54L92 74L86 54L66 48L86 42Z" fill="#e6b554"/>'+(word==='spotless'?'<path d="M140 73L144 84L155 88L144 92L140 103L136 92L125 88L136 84Z" fill="#e6b554"/>':'');}
 else if(word==='scrub')b='<rect x="8" y="73" width="163" height="30" fill="#cfad7a"/>'+pic('brush',48,27,86,61)+arrow(35,15,143,15);
 else if(word==='natural')b=pic('seaweed',6,8,71,101)+pic('shell',83,32,86,68);
 else if(word==='protect')b=pic('coral',54,20,70,80)+'<path d="M90 4L153 23V59Q145 92 90 112Q35 92 27 59V23Z" fill="none" stroke="#5c9b93" stroke-width="5"/>';
 else if(word==='belong')b=pic('rock',81,17,91,91)+pic('crab',1,66,49,43)+arrow(47,70,119,70);
 n.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 115" aria-hidden="true"><defs><marker id="mermaid-${word}" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#d88432"/></marker></defs>${b}</svg>`;return n;
}
