export function wishMusicCard(book:'genie'|'music',word:string):HTMLElement{
 const root=document.createElement('span');root.className='concept-card';const base=`images/story/${book}-v1/`;
 const img=(f:string,x=34,y=3,w=110,h=106)=>`<image href="${base+f}.png" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet"/>`;
 const text=(s:string,x=140,y=30)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#467365">${s}</text>`;
 const line=(d:string)=>`<path d="${d}" fill="none" stroke="#da9b48" stroke-width="4" stroke-linecap="round"/>`;
 let body='';
 if(book==='genie'){
 const aliases:Record<string,string>={genie:'genie',wish:'lamp',want:'train',more:'blocks',less:'blocks',many:'blocks',few:'blocks',toy:'castle',train:'train',balloon:'balloons',crown:'gold',gold:'gold',silver:'silver',shiny:'gold',huge:'castle',small:'castle',space:'track',compare:'gold',decide:'genie-think',keep:'train'};body=img(aliases[word]);
 if(word==='gold'||word==='silver')body+=`<circle cx="154" cy="70" r="17" fill="${word==='gold'?'#e4b747':'#bfc6cb'}" stroke="#907d60" stroke-width="2"/>`;
 if(word==='shiny')body+=text('✦',152,24)+text('✦',25,66);
 if(word==='wish')body+=line('M75 24Q40 2 58 0')+text('✦',95,14);
 if(word==='want')body=img('girl',0,9,80,99)+img('train',91,49,83,50)+line('M72 47L104 38L94 34M104 38L98 49');
 if(word==='compare')body=img('gold',2,39,75,62)+img('silver',99,39,75,62)+text('↔',90,28);
 if(word==='huge'||word==='small')body=img('castle',3,5,109,104)+img('castle',129,70,42,38)+text('↓',word==='huge'?60:150,word==='huge'?20:63);
 if(['many','few','more','less'].includes(word)){const count=word==='few'||word==='less'?3:9;body='';for(let i=0;i<count;i++)body+=`<rect x="${10+i%5*31}" y="${48+Math.floor(i/5)*29}" width="24" height="24" rx="3" fill="${['#cf8270','#76a5a0','#d4b16a'][i%3]}" stroke="#987652"/>`;if(word==='more'||word==='less')body+=text(word==='more'?'+':'−',90,26);}
 if(word==='space')body=img('track',4,25,172,78)+text('↔',90,63);
 if(word==='decide')body=img('gold',2,46,60,52)+img('train',98,47,75,50)+text('✓',135,30);
 if(word==='keep')body+=text('✓',153,27);
 }else{
 const aliases:Record<string,string>={music:'box',drum:'drum',flute:'flute',violin:'violin',piano:'piano',trumpet:'trumpet',sound:'trumpet',silent:'trumpet',beat:'drum',rhythm:'drum',clap:'rabbit',tap:'drum',shake:'shakers',soft:'flute',volume:'trumpet',tune:'flute',song:'owl',band:'rabbit',conductor:'owl',bow:'owl-bow'};body=img(aliases[word]);
 if(word==='sound'||word==='volume')body+=line('M148 40Q162 54 148 68M158 30Q180 54 158 79');
 if(word==='silent')body+=`<path d="M31 95L151 13" stroke="#bd6c58" stroke-width="5"/>`;
 if(word==='shake')body+=text('↔',90,18);
 if(word==='clap')body='<text x="90" y="84" text-anchor="middle" font-size="73">👏</text>'+line('M29 25L42 38M149 25L136 38M90 4V20');
 if(word==='beat'||word==='tap')body+=line('M57 8L88 46M79 33L88 46L93 32');
 if(word==='rhythm')body=img('drum',4,44,65,62)+text('●  ● ●',115,55)+line('M72 78H165');
 if(word==='soft')body=img('flute',2,22,112,85)+line('M135 48Q145 54 135 61');
 if(word==='tune')body+=text('♪ ♫',122,26);
 if(word==='song')body=img('owl',10,17,80,90)+text('♫',130,47)+text('♪',152,83);
 if(word==='band')body=img('rabbit',2,14,58,94)+img('fox',61,14,58,94)+img('bear',122,14,58,94);
 }
 root.innerHTML=`<svg viewBox="0 0 180 115" role="img" aria-label="${word} 圖解">${body}</svg>`;return root;
}
