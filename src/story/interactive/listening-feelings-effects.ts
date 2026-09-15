/** Sentence-bound effects shared by the listening/body-signal stories. */
export function createListeningFeelingsEffects(world:HTMLElement,book:'parrot'|'volcano',page:number,soundEnabled:boolean){
 let disposed=false,paused=false,manual=false,ctx:AudioContext|undefined;
 const animations=new Set<Animation>(),nodes:HTMLElement[]=[],originals=new Map<HTMLImageElement,string>(),voices=new Set<OscillatorNode>();
 type Task={fn:()=>void,left:number,start:number,id?:ReturnType<typeof setTimeout>};const tasks=new Set<Task>();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const get=(id:string)=>world.querySelector<HTMLElement>(`[data-object="${id}"]`);
 const art=(id:string)=>get(id)?.querySelector<HTMLImageElement>('img');
 function schedule(t:Task){t.start=Date.now();t.id=setTimeout(()=>{tasks.delete(t);if(!disposed)t.fn();},t.left);}
 function later(fn:()=>void,ms:number){const t={fn,left:ms,start:0};tasks.add(t);if(!paused)schedule(t);}
 function animate(n:HTMLElement|null|undefined,frames:Keyframe[],ms=1600,delay=0){if(!n||disposed)return;const a=n.animate(frames,{duration:reduced?100:ms,delay:reduced?0:delay,fill:'forwards',easing:'ease-in-out'});animations.add(a);if(paused)a.pause();}
 function tone(kind:'magic'|'step'|'paper'='magic'){if(!soundEnabled||disposed)return;ctx??=new AudioContext();void ctx.resume();const o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime;o.type='sine';o.frequency.setValueAtTime(kind==='step'?110:kind==='paper'?340:660,t);o.frequency.exponentialRampToValueAtTime(kind==='step'?65:kind==='paper'?210:990,t+.23);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.012,t+.025);g.gain.exponentialRampToValueAtTime(.0001,t+.3);o.connect(g).connect(ctx.destination);voices.add(o);o.onended=()=>voices.delete(o);o.start();o.stop(t+.32);}
 function clear(){tasks.forEach(t=>clearTimeout(t.id));tasks.clear();animations.forEach(a=>a.cancel());animations.clear();nodes.splice(0).forEach(n=>n.remove());originals.forEach((src,img)=>{img.src=src;img.style.visibility='';});originals.clear();voices.forEach(v=>{try{v.stop();}catch{}});voices.clear();}
 function glow(id:string,color='#ffe3a0'){animate(get(id),[{filter:'drop-shadow(0 0 0px '+color+')'},{filter:'drop-shadow(0 0 13px '+color+')'},{filter:'drop-shadow(0 0 2px '+color+')'}]);}
 function swap(id:string,file:string){const img=art(id);if(!img)return;if(!originals.has(img))originals.set(img,img.src);img.style.visibility='hidden';later(()=>{img.src=`images/story/${book}-v1/${file}.png`;img.style.visibility='';},200);}
 function particles(id:string,smoke=false){const host=get(id);if(!host)return;for(let i=0;i<6;i++){const n=document.createElement('span');n.className=smoke?'feelings-puff':'elf-spark';n.textContent=smoke?'':'✦';n.style.left=(35+i*5)+'%';n.style.top=smoke?'2%':'40%';n.setAttribute('aria-hidden','true');host.append(n);nodes.push(n);animate(n,[{opacity:0,translate:'0 0',scale:.4},{opacity:.7,offset:.25},{opacity:0,translate:`${(i-2)*8}px -65px`,scale:1.5}],1800,i*140);}}
 function speech(id:string,text:string){const host=get(id);if(!host)return;const n=document.createElement('span');n.className='listening-bubble';n.textContent=text;n.setAttribute('aria-hidden','true');host.append(n);nodes.push(n);animate(n,[{opacity:0,scale:.8},{opacity:1,scale:1}],500);}
 function act(line:number,id=''){
  if(disposed)return;clear();
  if(page===0||page===19){const source=book==='parrot'?'stamp':'stone';glow(source);particles(source);tone();if(page===0&&line===1){const n=document.createElement('img');n.src=`images/story/${book}-v1/${book==='parrot'?'office':'square'}.png`;n.alt='';n.className='together-arrival';world.append(n);nodes.push(n);animate(n,[{opacity:0,clipPath:'circle(0% at 52% 82%)'},{opacity:1,clipPath:'circle(100% at 52% 82%)'}],1800,900);}return;}
  if(book==='parrot'){
   if(page===4){if(line===0){speech('hedgehog','Rabbit, at the…');swap('pippa','pippa-talk');}else{swap('pippa','pippa-fly');animate(get('pippa'),[{translate:'0 0'},{translate:'120px -45px'}],2300);speech('pippa','I know!');}tone('paper');}
   else if([6,8,14].includes(page)){glow('envelope');glow(page===14?'moon':'door');if(page===8)speech('pippa','?');}
   else if(page===7){animate(get('squirrel'),[{rotate:'0deg'},{rotate:'-3deg'},{rotate:'3deg'},{rotate:'0deg'}],1400);speech('squirrel','Not here.');}
   else if([3,9,10,12,13].includes(page)){swap('pippa','pippa');glow('hedgehog');speech('hedgehog',page===10?'Rabbit · blue door · ☾':page===13?'Past the flowers.':'…');if(page===12&&line===0){swap('pippa','pippa-talk');speech('pippa','Which path?');}}
   else if(page===11){swap('pippa','pippa-talk');speech('pippa','Rabbit · blue door · ☾');tone('paper');}
   else if(page===15){animate(get('envelope'),[{translate:'0 0'},{translate:'55px -10px'}],1800);tone('paper');}
   else if(page===16||page===17){swap('pippa','pippa');speech('rabbit','Thank you!');glow('rabbit');}
   else if(page===18){speech('pippa','The whole reply.');animate(get('envelope'),[{translate:'0 0'},{translate:'40px -8px'}]);}
   else {glow(id||(page===1?'envelope':'pippa'));if(page===5)speech('pippa','Which home?');if(page===2)animate(get('pippa'),[{translate:'0 0'},{translate:'0 -5px'},{translate:'0 0'}],1200);}
  }else{
   if(page===1)glow('mountain');
   else if(page===3){animate(get('squirrel'),[{translate:'0 0'},{translate:'45px -6px'}],2300);glow('squirrel');}
   else if(page===4||page===5){glow('tobi','#ed9677');speech('tobi',page===5?'Hot cheeks':'I wanted to play.');}
   else if(page===6){swap('tobi','tobi-angry');glow('tobi','#efa06e');speech('tobi','Tight hands');}
   else if(page===7){animate(get('tobi'),[{translate:'0 0'},{translate:'0 -7px',offset:.35},{translate:'0 2px',offset:.55},{translate:'0 0'}],800);tone('step');}
   else if(page===8){particles('tobi',true);tone('paper');}
   else if(page===9){swap('tobi','tobi-notice');speech('tobi','Cheeks · hands · shoulders');}
   else if(page===10){animate(get('tobi'),[{translate:'15px 0'},{translate:'0 0'}]);}
   else if(page===11||page===12){swap('tobi','tobi-calm');animate(get('tobi'),[{translate:'0 -3px'},{translate:'0 2px'},{translate:'0 0'}],1900);speech('tobi',page===11?'Open hands':'Shoulders down');}
   else if(page===13){speech('tobi','I felt left out.');glow('tobi');}
   else if(page===14){speech('squirrel','The parcel first.');glow('squirrel');}
   else if(page===15||page===17){animate(get('ball'),[{translate:'0 0',scale:1},{translate:'42px -16px',scale:.65}],2200);tone('step');}
   else if(page===16){swap('tobi','tobi-notice');speech('tobi','My hand feels tight.');glow('tobi');}
   else if(page===18){glow('cup');}
   else {glow(id||'tobi');speech('tobi','A game together?');}
  }
 }
 return {interact(id:string){manual=true;paused=false;act(1,id);},sentence(index:number,_text:string){manual=false;paused=false;act(index);},playback(running:boolean,isPaused:boolean){const next=isPaused||(!running&&!manual);if(next!==paused){paused=next;tasks.forEach(t=>{if(paused){clearTimeout(t.id);t.left=Math.max(0,t.left-(Date.now()-t.start));}else schedule(t);});}animations.forEach(a=>paused?a.pause():a.play());if(ctx){if(paused)void ctx.suspend();else if(soundEnabled)void ctx.resume();}},sound(on:boolean){soundEnabled=on;if(!on){voices.forEach(v=>{try{v.stop();}catch{}});voices.clear();void ctx?.suspend();}},dispose(){disposed=true;clear();void ctx?.close();}};
}
