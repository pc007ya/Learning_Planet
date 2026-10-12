/** Story-object glow on every page, entry/return particles and a soft reveal; the complete source illustration stays intact. */
export function createLighthouseEffects(world:HTMLElement,page:number,soundEnabled:boolean){
 let disposed=false,paused=false,manual=false,ctx:AudioContext|undefined;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const animations=new Set<Animation>(),particles=new Set<HTMLElement>(),tones=new Set<OscillatorNode>();
 type Task={fn:()=>void;left:number;start:number;id?:ReturnType<typeof setTimeout>};const tasks=new Set<Task>();
 const focus=()=>world.querySelector<HTMLElement>('[data-lighthouse-focus]');
 const image=()=>world.querySelector<HTMLElement>('.lighthouse-full-image');
 function schedule(t:Task){t.start=Date.now();t.id=setTimeout(()=>{tasks.delete(t);if(!disposed&&!paused)t.fn();},t.left);}
 function later(fn:()=>void,left:number){const t={fn,left,start:0};tasks.add(t);if(!paused)schedule(t);}
 function animate(n:HTMLElement|null,frames:Keyframe[],duration=1000){
  if(!n||disposed)return;const quiet=n===focus()?[{opacity:.25},{opacity:0}]:[{opacity:.8},{opacity:1}];const a=n.animate(reduced?quiet:frames,{duration:reduced?180:duration,fill:'forwards',easing:'ease-in-out'});animations.add(a);if(paused)a.pause();
 }
 function sparkle(){
  const host=world.querySelector<HTMLElement>('.lighthouse-full-image-frame'),anchor=focus();if(!host||!anchor||reduced)return;
  for(let i=0;i<6;i++){const p=document.createElement('span');p.className='lighthouse-image-particle';p.setAttribute('aria-hidden','true');p.style.left=anchor.style.left;p.style.top=anchor.style.top;host.append(p);particles.add(p);
   animate(p,[{opacity:0,translate:'0 0'},{opacity:.8,offset:.25},{opacity:0,translate:`${(i-2.5)*18}px ${-22-i*7}px`}],1400);
  }
 }
 function tone(){if(!soundEnabled||paused||disposed)return;try{
  ctx??=new AudioContext();void ctx.resume();const o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime;
  o.frequency.setValueAtTime(760,t);o.frequency.exponentialRampToValueAtTime(912,t+.25);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.006,t+.025);g.gain.exponentialRampToValueAtTime(.0001,t+.3);
  o.connect(g).connect(ctx.destination);tones.add(o);o.onended=()=>tones.delete(o);o.start();o.stop(t+.32);
 }catch{/* Sound is optional. */}}
 function clear(){tasks.forEach(t=>clearTimeout(t.id));tasks.clear();animations.forEach(a=>a.cancel());animations.clear();particles.forEach(p=>p.remove());particles.clear();tones.forEach(o=>{try{o.stop();}catch{}});tones.clear();}
 function act(){
  if(disposed)return;clear();
  if(page<2||page===18){
   animate(focus(),[{opacity:0},{opacity:.85,offset:.4},{opacity:0}],1200);sparkle();tone();
   if(page===1)later(()=>animate(image(),[{opacity:.65},{opacity:1}],900),reduced?180:700);
  }else{animate(focus(),[{opacity:0},{opacity:.55,offset:.35},{opacity:0}],1000);}
 }
 return {
  interact(_id:string){manual=true;paused=false;act();},
  sentence(index:number,_text:string){manual=false;if(index===0)act();},
  playback(running:boolean,isPaused:boolean){
   const next=isPaused||(!running&&!manual);if(next===paused)return;paused=next;animations.forEach(a=>paused?a.pause():a.play());
   if(paused){tasks.forEach(t=>{clearTimeout(t.id);t.id=undefined;t.left=Math.max(0,t.left-(Date.now()-t.start));});void ctx?.suspend();}
   else{tasks.forEach(schedule);if(soundEnabled)void ctx?.resume();}
  },
  sound(on:boolean){soundEnabled=on;if(!on){tones.forEach(o=>{try{o.stop();}catch{}});tones.clear();void ctx?.suspend();}},
  dispose(){disposed=true;clear();void ctx?.close();}
 };
}
