/** Native diagrams add precise pointers to the story's illustrated assets. */
export function listeningFeelingsCard(book:'parrot'|'volcano',word:string):HTMLElement{
 const n=document.createElement('span');n.className='concept-card';
 const pic=(name:string,x=35,y=3,w=110,h=107)=>`<image href="images/story/${book}-v1/${name}.png" x="${x}" y="${y}" width="${w}" height="${h}"/>`;
 const arrow=(x:number,y:number,u:number,v:number)=>`<path d="M${x} ${y}L${u} ${v}" fill="none" stroke="#c77729" stroke-width="4" marker-end="url(#lf-${book}-${word})"/>`;
 const label=(text:string,x=90,y=105)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#416861">${text}</text>`;
 const bubble=(x:number,y:number,w:number,text:string)=>`<rect x="${x}" y="${y}" width="${w}" height="27" rx="8" fill="#fff5d9" stroke="#9c8458" stroke-width="2"/>${label(text,x+w/2,y+18)}`;
 const door=(x:number,moonDoor:boolean)=>`<rect x="${x}" y="24" width="47" height="75" rx="15" fill="${moonDoor?'#668bb1':'#aa774a'}" stroke="#73573d" stroke-width="3"/><circle cx="${x+37}" cy="68" r="3" fill="#eecb78"/>`+(moonDoor?`<path d="M${x+26} 32a10 10 0 1 0 10 14a9 9 0 0 1-10-14Z" fill="#f3d99d"/>`:`<circle cx="${x+24}" cy="45" r="10" fill="#c86145"/><path d="M${x+25} 35l4-6" stroke="#56874c" stroke-width="4"/>`);
 let b='';
 if(book==='parrot'){
  if(['feather','perch','envelope','stamp'].includes(word))b=pic(word);
  else if(word==='parrot')b=pic('pippa');
  else if(word==='beak')b=pic('pippa')+arrow(168,8,130,33);
  else if(word==='address')b=door(112,true)+pic('envelope',4,35,71,51)+arrow(77,62,107,62);
  else if(word==='deliver')b=pic('pippa',0,25,66,80)+pic('envelope',73,39,45,38)+pic('rabbit',126,19,49,89)+arrow(70,89,128,89);
  else if(word==='wrong'||word==='correct')b=pic('envelope',3,34,72,52)+door(113,word==='correct')+label(word==='correct'?'✓':'×',92,65);
  else if(word==='detail')b=pic('envelope',20,16,138,85)+'<circle cx="90" cy="61" r="18" stroke="#cf8639" stroke-width="3" fill="none"/>'+arrow(173,9,105,46);
  else if(word==='message')b=pic('letter',29,20,116,88)+bubble(62,39,58,'Hello!');
  else if(word==='sentence')b=bubble(9,28,162,'Rabbit has a letter.')+label('A whole thought.',90,94);
  else if(word==='question'||word==='answer')b=pic(word==='question'?'pippa-talk':'hedgehog',8,30,65,76)+bubble(62,11,109,word==='question'?'Which door?':'The blue door.');
  else if(word==='interrupt')b=pic('hedgehog',4,39,70,75)+pic('pippa-talk',109,38,68,76)+bubble(4,4,96,'Take it to…')+bubble(84,27,92,'I know!');
  else if(word==='finish')b=bubble(6,10,168,'Rabbit · blue door · ☾')+pic('pippa',68,40,65,65)+label('✓',150,85);
  else if(word==='repeat')b=bubble(4,7,112,'The blue door.')+arrow(55,41,99,65)+bubble(64,75,112,'The blue door.');
  else if(word==='clear')b=door(103,true)+label('BLUE',47,43)+label('MOON',47,71)+arrow(66,82,107,82);
  else if(word==='attention')b=pic('pippa',5,27,69,83)+pic('hedgehog',115,22,64,88)+arrow(64,32,124,32)+bubble(69,58,36,'…');
 }else{
  if(word==='monster')b=pic('tobi-calm');
  else if(word==='volcano')b='<path d="M12 105L66 17L114 17L169 105Z" fill="#82985b"/><ellipse cx="90" cy="19" rx="25" ry="8" fill="#93684c"/><path d="M68 21L60 51M107 22L125 62" stroke="#c8a16e" stroke-width="5"/>';
  else if(word==='steam')b=pic('cup',35,39,110,74)+'<path d="M70 43C55 32 83 24 69 10M91 42C77 30 104 23 90 7M112 43C98 32 124 25 111 12" fill="none" stroke="#8fa7ad" stroke-width="4" stroke-linecap="round"/>'+arrow(172,8,119,27);
  else if(word==='heat'||word==='warm'||word==='hot'||word==='cool'){
   const h=word==='cool'?21:word==='warm'?46:76,c=word==='cool'?'#71abc3':word==='warm'?'#e7b656':'#d76b4e';
   b='<rect x="67" y="4" width="30" height="84" rx="15" fill="#fff4d7" stroke="#8a7d65" stroke-width="3"/>'+`<rect x="76" y="${87-h}" width="12" height="${h}" rx="6" fill="${c}"/><circle cx="82" cy="94" r="15" fill="${c}"/>`+label(word==='heat'?'↑':word.toUpperCase(),137,60);}
  else if(word==='cheek')b=pic('tobi-angry')+arrow(16,15,66,56);
  else if(word==='fist'||word==='tight')b=pic('tobi-angry')+arrow(6,14,54,45)+label('CLOSED',140,105);
  else if(word==='shoulder')b=pic('tobi-angry')+arrow(173,5,127,47);
  else if(word==='loose')b=pic('tobi-calm')+arrow(8,9,51,61)+label('OPEN',140,105);
  else if(word==='tense')b=pic('tobi-angry')+arrow(10,87,44,57)+arrow(169,87,136,57);
  else if(word==='relax')b=pic('tobi-angry',1,33,62,71)+arrow(71,61,108,61)+pic('tobi-calm',113,30,65,74);
  else if(word==='stomp')b=pic('tobi-angry',30,2,110,91)+arrow(146,47,146,98)+'<path d="M28 107H164M80 98L72 92M106 98L117 91" stroke="#a17a4e" stroke-width="3"/>';
  else if(word==='smoke'||word==='burst')b=pic('tobi-angry',40,37,94,77)+'<g fill="#a9a59e"><circle cx="90" cy="18" r="12"/><circle cx="77" cy="28" r="10"/><circle cx="103" cy="28" r="10"/></g>'+arrow(164,8,115,24)+(word==='burst'?'<path d="M64 11L56 3M111 10L119 1M119 32L133 29" stroke="#c77729" stroke-width="3"/>':'');
  else if(word==='notice')b=pic('tobi-notice')+'<circle cx="68" cy="60" r="19" fill="none" stroke="#c77729" stroke-width="3"/>'+arrow(5,4,54,43);
  else if(word==='signal')b=pic('tobi-angry',8,7,96,101)+label('!',145,45)+arrow(145,63,100,59);
  else if(word==='calm')b=pic('tobi-calm')+'<path d="M5 73Q15 65 25 73M152 73Q162 65 175 73" fill="none" stroke="#7ba298" stroke-width="3"/>';
 }
 n.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 115" aria-hidden="true"><defs><marker id="lf-${book}-${word}" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#c77729"/></marker></defs>${b}</svg>`;return n;
}
