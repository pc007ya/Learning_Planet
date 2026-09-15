/** Explicit educational diagrams distinguish time concepts from shared prop art. */
export function timeCard(word:string):HTMLElement{
 const node=document.createElement('span');node.className='concept-card';
 const pic=(name:string,x=35,y=5,w=110,h=105)=>`<image href="images/story/time-v1/${name}" x="${x}" y="${y}" width="${w}" height="${h}"/>`;
 const label=(text:string,x=90,y=103)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#695237">${text}</text>`;
 const arrow=(x:number,y:number,u:number,v:number)=>`<path d="M${x} ${y} L${u} ${v}" stroke="#db7f2a" stroke-width="4" fill="none" marker-end="url(#time-${word})"/>`;
 let body='';
 if(word==='clock')body=pic('clock.svg');
 else if(word==='watch')body=pic('watch.png');
 else if(word==='hand')body=pic('clock.svg',20,0,110,110)+arrow(166,24,80,43);
 else if(word==='tick')body=pic('watch.png',20,9,88,90)+label('tick',141,41)+label('tick',146,78)+arrow(112,40,122,40);
 else if(['second','minute','hour'].includes(word)){body=pic('clock.svg',8,2,91,91);const unit=word==='second'?'1 s':word==='minute'?'60 s':'60 min';body+=label(unit,138,42)+label('= 1 '+(word==='hour'?'h':word==='minute'?'min':'second'),133,70);if(word==='second')body+=arrow(61,12,70,15);}
 else if(['today','tomorrow','yesterday'].includes(word))body=pic((word==='today'?'calendar':word)+'.svg',0,4,180,108);
 else if(word==='early'||word==='late'){body=pic('ticket.png',56,0,65,40)+'<path d="M15 72H165" stroke="#bba476" stroke-width="3"/><path d="M90 43V87" stroke="#695237" stroke-width="3"/>'+label('9:00',90,107)+`<circle cx="${word==='early'?37:144}" cy="72" r="10" fill="#77a89c"/>`+label(word==='early'?'8:50':'9:10',word==='early'?37:144,55);}
 else if(word==='morning'||word==='evening'){body=`<rect x="10" y="5" width="160" height="95" rx="12" fill="${word==='morning'?'#ccecf5':'#d4a4b4'}"/><circle cx="90" cy="${word==='morning'?35:75}" r="19" fill="#ffd374"/><path d="M10 82 Q50 62 90 82 T170 82V100H10Z" fill="#829c78"/>`+label(word==='morning'?'7:00 AM':'6:00 PM',90,111);}
 else if(word==='photo')body=pic('memories.png',12,0,132,108)+arrow(169,18,90,47);
 else if(word==='enjoy')body=pic('friend.png',52,0,77,110)+'<path d="M136 27C121 12 117 39 136 48C156 36 151 12 136 27" fill="#de948b"/>';
 else body=pic(({breakfast:'breakfast',lunch:'lunch',ticket:'ticket',suitcase:'suitcase'} as Record<string,string>)[word]+'.png');
 node.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 115" aria-hidden="true"><defs><marker id="time-${word}" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#db7f2a"/></marker></defs>${body}</svg>`;return node;
}
