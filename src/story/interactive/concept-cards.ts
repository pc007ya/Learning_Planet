/** Small semantic diagrams: shared art is given a distinct teaching cue for each word. */
export function conceptCard(book:'fairy'|'knight',word:string,art:string):HTMLElement {
 const root=document.createElement('span');root.className='concept-card';
 const base=`images/story/${book}-v1/`;
 const pic=(name:string,x=45,y=0,w=90,h=108)=>`<image href="${base+name}.png" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet"/>`;
 const arrow=(x:number,y:number,xx:number,yy:number)=>`<path d="M${x} ${y}L${xx} ${yy}" stroke="#db623f" stroke-width="5" stroke-linecap="round" marker-end="url(#tip)"/>`;
 const label=(t:string,x=90,y=22)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="bold" fill="#35645b">${t}</text>`;
 let content=pic(art);
 if(word==='helmet')content=pic('knight',32,0,100,110)+arrow(162,20,105,22);
 if(word==='push'||word==='pull')content=pic('knight-hold',9,18,83,92)+'<rect x="111" y="50" width="43" height="45" rx="4" fill="#c28b50" stroke="#87572e" stroke-width="3"/>'+(word==='pull'?'<path d="M75 62L111 65" stroke="#8e6c48" stroke-width="3"/>':'')+arrow(word==='push'?88:162,13,word==='push'?163:88,13);
 if(word==='fast')content=pic('knight',65,4,105,103)+'<path d="M10 34H69M22 51H59M6 70H60" stroke="#d4a447" stroke-width="5" stroke-linecap="round"/>'+arrow(30,99,90,99);
 if(word==='race')content=pic('knight',46,2,77,103)+pic('helper-boy',0,27,61,77)+'<path d="M144 8V106" stroke="#735839" stroke-width="3"/><path d="M133 25H176V12H133Z" fill="#fff" stroke="#735839"/>'+[0,1,2,3].map(i=>`<rect x="${135+i*10}" y="${i%2?18:12}" width="10" height="6" fill="#354a53"/>`).join('')+'<path d="M5 108H177" stroke="#bfb397" stroke-width="2"/>';
 if(word==='balance')content='<path d="M90 20V95M51 100H129M33 34H147M35 35L15 74H55ZM145 35L125 74H165Z" fill="#f6d981" stroke="#947244" stroke-width="4" stroke-linejoin="round"/><circle cx="90" cy="32" r="7" fill="#dbaa45"/><rect x="24" y="58" width="21" height="14" fill="#6faba5"/><rect x="135" y="58" width="21" height="14" fill="#6faba5"/>';
 if(word==='steady')content='<path d="M20 105H160" stroke="#9b8263" stroke-width="4"/>'+[[40,75,50,28,'#86b5ac'],[91,75,50,28,'#d6ac65'],[56,46,68,28,'#a1bad2'],[70,17,40,28,'#dc9281']].map(([x,y,w,h,c])=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${c}" stroke="#8c765e" stroke-width="2"/>`).join('');
 if(word==='team'||word==='partner')content=pic('helper-boy',12,10,70,99)+pic('helper-girl',96,10,70,99)+(word==='team'?'<path d="M13 105Q90 120 168 105" fill="none" stroke="#76a997" stroke-width="4"/>':'<path d="M78 54H101" stroke="#d4a447" stroke-width="5"/>');
 if(word==='win')content=pic('knight',22,0,83,110)+label('1',143,47)+'<path d="M123 61H164V105H123Z" fill="#e5bd60"/>';
 if(word==='cheer')content=pic('helper-boy',48,14,87,96)+'<path d="M30 18L40 33M90 0V17M151 17L140 32" stroke="#d4a447" stroke-width="4"/>'+label('!',156,66);
 if(word==='check')content=pic('adult',5,12,112,94)+'<rect x="123" y="20" width="45" height="71" rx="4" fill="#fff4d6" stroke="#aa8c5b"/>'+label('✓',145,52)+label('✓',145,81);
 if(word==='ready')content=pic('knight-hold',32,8,91,102)+label('✓',150,47);
 if(book==='fairy'){
  if(word==='bucket')content=pic('bucket',40,7,96,100)+arrow(167,73,124,73);
  if(word==='full')content=pic('bucket',45,10,90,98)+arrow(164,9,111,28);
  if(word==='empty')content='<path d="M49 28H131L119 103H61Z" fill="#a8b8bf" stroke="#5c737f" stroke-width="3"/><ellipse cx="90" cy="28" rx="41" ry="10" fill="#647b87" stroke="#405e6d" stroke-width="3"/><path d="M52 27Q90 -5 129 27" fill="none" stroke="#5c737f" stroke-width="4"/>'+arrow(164,9,105,28);
  if(word==='yes'||word==='no')content=pic(word==='no'?'fairy-no':'fairy',17,5,94,103)+label(word==='yes'?'✓':'✕',149,48);
  if(word==='please')content=pic('hedgehog',7,17,80,90)+pic('parcel',103,42,61,58)+label('?',146,28);
  if(word==='carry')content=pic('squirrel',16,4,100,104)+pic('bucket',83,40,53,60)+arrow(114,17,164,17);
  if(word==='heavy')content=pic('loaded-cart',13,7,122,99)+arrow(155,31,155,88);
  if(word==='rest')content=pic('fairy-tired',15,21,130,88)+label('Z z',143,23);
  if(word==='tired')content=pic('fairy-tired',25,12,130,97)+arrow(170,8,94,31);
  if(word==='busy')content=pic('loaded-cart',67,0,109,104)+pic('fairy',0,12,72,97);
  if(word==='choose')content=pic('bucket',3,36,50,63)+pic('parcel',65,40,50,55)+pic('ribbon',122,31,52,70)+arrow(154,0,150,26);
  if(word==='enough')content=pic('fairy',9,4,82,105)+pic('ribbon',103,24,52,72)+label('1',144,20);
  if(word==='promise')content=pic('fairy',8,4,75,103)+pic('hedgehog',96,35,70,73)+label('✓',119,24);
  if(word==='kind')content=pic('fairy',12,2,83,108)+pic('hedgehog',106,31,67,75)+label('♥',112,24);
 }
 root.innerHTML=`<svg viewBox="0 0 180 115" role="img" aria-label="${word} 圖解"><defs><marker id="tip" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0 0L5 2.5L0 5Z" fill="#db623f"/></marker></defs>${content}</svg>`;
 // Unique IDs avoid cross-card marker references when the dialog contains many diagrams.
 const marker=root.querySelector('marker')!;marker.id=`tip-${book}-${word}`;root.querySelectorAll('[marker-end]').forEach(n=>n.setAttribute('marker-end',`url(#${marker.id})`));
 return root;
}
