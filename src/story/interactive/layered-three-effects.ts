import type {LayeredBook} from './layered-three';
/** Page-local effects: no timers or sounds survive leaving the page. */
export function createLayeredEffects(world:HTMLElement,book:LayeredBook,page:number,soundEnabled:boolean){
 let disposed=false,paused=false,manual=false,ctx:AudioContext|undefined;
 const animations=new Set<Animation>(),nodes:HTMLElement[]=[],tones=new Set<OscillatorNode>();
 type Task={fn:()=>void,left:number,start:number,id?:ReturnType<typeof setTimeout>};const tasks=new Set<Task>();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const get=(id:string)=>world.querySelector<HTMLElement>(`[data-object="${id}"]`);
 function schedule(t:Task){t.start=Date.now();t.id=setTimeout(()=>{tasks.delete(t);if(!disposed&&!paused)t.fn();},t.left);}
 function later(fn:()=>void,left:number){const t={fn,left,start:0};tasks.add(t);if(!paused)schedule(t);}
 function animate(n:HTMLElement|null|undefined,frames:Keyframe[],duration=1500){if(!n||disposed)return;const a=n.animate(reduced?[{opacity:.65},{opacity:1}]:frames,{duration:reduced?200:duration,fill:'forwards',easing:'ease-in-out'});animations.add(a);if(paused)a.pause();}
 function tone(freq=660){if(!soundEnabled||paused||disposed)return;ctx??=new AudioContext();void ctx.resume();const o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime;o.frequency.setValueAtTime(freq,t);o.frequency.exponentialRampToValueAtTime(freq*1.35,t+.25);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.008,t+.025);g.gain.exponentialRampToValueAtTime(.0001,t+.32);o.connect(g).connect(ctx.destination);tones.add(o);o.onended=()=>tones.delete(o);o.start();o.stop(t+.34);}
 function clear(){tasks.forEach(t=>clearTimeout(t.id));tasks.clear();animations.forEach(a=>a.cancel());animations.clear();nodes.splice(0).forEach(n=>n.remove());tones.forEach(o=>{try{o.stop();}catch{}});tones.clear();}
 function glow(id:string){animate(get(id),[{filter:'drop-shadow(0 0 0px #ffe3a0)'},{filter:'drop-shadow(0 0 12px #ffe3a0)'},{filter:'drop-shadow(0 0 2px #ffe3a0)'}]);}
 function move(id:string,x:number,y:number,duration=1600){animate(get(id),[{translate:'0 0'},{translate:`${x}px ${y}px`}],duration);}
 function spark(id:string){const host=get(id);if(!host)return;for(let i=0;i<7;i++){const n=document.createElement('span');n.className='elf-spark';n.textContent='✦';n.setAttribute('aria-hidden','true');n.style.left='50%';n.style.top='45%';host.append(n);nodes.push(n);animate(n,[{opacity:0,translate:'0 0'},{opacity:1,offset:.25},{opacity:0,translate:`${(i-3)*14}px ${-25-i*8}px`}],1500+i*90);}}
 function flight(dx:number,dy:number){['mira','broom'].forEach(id=>move(id,dx,dy,2300));}
 function act(line:number,id=''){
  if(disposed)return;if(page===1&&line>0&&!id)return;clear();
  const source=book==='star-library'?'bookmark':'guide';
  if(page===0){move(source,14,0,650);later(()=>{glow(source);tone();},800);return;}
  if(page===1){
   // The guide stops first; magic emanates from it before revealing the destination.
   const portal=get('portal');if(portal)animate(portal,[{opacity:0},{opacity:0}],700);
   move(source,7,-3,550);later(()=>{glow(source);spark(source);tone();},750);
   later(()=>{if(portal)animate(portal,[{opacity:0,scale:.4},{opacity:.9,scale:1}],1100);},1100);
   later(()=>{const image=document.createElement('img');image.src=`images/story/${book}-v1/${book==='witch'?'rooftop':book==='mirror'?'carnival':'library'}.png`;image.alt='';image.className='together-arrival';image.style.pointerEvents='none';world.append(image);nodes.push(image);animate(image,[{opacity:0,clipPath:'circle(0% at 58% 60%)'},{opacity:1,clipPath:'circle(110% at 58% 60%)'}],1600);},1800);return;
  }
  if(page===19){glow(source);later(()=>animate(get(source),[{filter:'brightness(1.3)'},{filter:'none'}]),1000);return;}
  if(book==='witch'){
   if([5,10,11].includes(page)){if(page===5)['mira','broom'].forEach(k=>animate(get(k),[{translate:'0 0',rotate:'0deg'},{translate:'0 -10px',rotate:'-3deg'},{translate:'0 -7px',rotate:'3deg'},{translate:'0 0',rotate:'0deg'}],2400));else flight(0,-10-(page===11?5:0));tone(430);}
   else if([13,14,16].includes(page)){flight(page===13?-35:28,-8);glow(page===13?'hoop1':'hoop2');tone(480);}
   else if(page===15){flight(0,14);glow('cushion');tone(280);}
   else if(page===17){glow('cushion');spark('mira');tone(720);}
   else if([8,9,12].includes(page)){glow(['card-grip','card-hover','card-turn','card-land'][line%4]);move('teacher',-4,0);}
   else if(page===18){move('card-grip',30,-5);glow('beginner');}
   else{glow(id||(page===4?'teacher':'mira'));if(page===7)spark('mira');}
  }else if(book==='mirror'){
   if(page===3){move('rabbit',35,0,1600);tone(280);}
   else if(page===4){animate(get('swan'),[{rotate:'0deg'},{rotate:'-7deg'},{rotate:'7deg'},{rotate:'0deg'}],2400);tone(570);}
   else if(page===7||page===8){glow('mirror');['medal-red','medal-blue','medal-gold'].forEach(k=>animate(get(k),[{scale:1},{scale:1.22}],1200));}
   else if(page===9||page===10){for(let i=1;i<=9;i++)move('tile-'+i,(i%3-1)*16,(i%2?8:-8));tone(340);}
   else if(page===12){move('rabbit',18,0);move('tile-1',8,0);}
   else if(page===13){glow('swan');glow('tile-3');glow('tile-6');}
   else if(page===14){glow('owl');glow('tile-9');}
   else if(page===15||page===16){for(let i=1;i<=9;i++)later(()=>glow('tile-'+i),i*110);tone(720);}
   else if(page===17||page===18){glow('mirror');['reflection-rabbit','reflection-swan','reflection-owl','reflection-gail'].forEach(glow);}
   else glow(id||(page===5?'owl':'gail'));
  }else{
   if(page===4||page===5){animate(get('book'),[{scale:'1 1'},{scale:'.9 1'},{scale:'1 1'},{scale:'.9 1'},{scale:'1 1'}],1800);tone(330);}
   else if([11,15].includes(page)){['card-beginning','card-middle','card-ending'].forEach((k,i)=>later(()=>{glow(k);},i*600));tone(420);}
   else if([12,13,14].includes(page)){glow(page===14?'card-ending':'card-middle');glow('book');}
   else if(page>=16){for(let i=0;i<9;i++)if(get('star'+i))later(()=>{glow('star'+i);},i*150);glow(page===17?'rabbit':'book');tone(820);}
   else glow(id||(page===2?'librarian':page===6?'gail':'book'));
  }
 }
 return {interact(id:string){manual=true;paused=false;act(1,id);},sentence(index:number,_text:string){manual=false;paused=false;act(index);},playback(running:boolean,isPaused:boolean){const next=isPaused||(!running&&!manual);if(next!==paused){paused=next;tasks.forEach(t=>{if(paused){clearTimeout(t.id);t.left=Math.max(0,t.left-(Date.now()-t.start));}else schedule(t);});}animations.forEach(a=>paused?a.pause():a.play());if(ctx){if(paused)void ctx.suspend();else if(soundEnabled)void ctx.resume();}},sound(on:boolean){soundEnabled=on;if(!on){tones.forEach(o=>{try{o.stop();}catch{}});tones.clear();void ctx?.suspend();}},dispose(){disposed=true;clear();void ctx?.close();}};
}
