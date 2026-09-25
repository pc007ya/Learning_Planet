/** Every animation and sound belongs to one page and is disposed when the page changes. */
export function createUnicornEffects(world:HTMLElement,page:number,soundEnabled:boolean){
 let disposed=false,paused=false,manual=false,ctx:AudioContext|undefined;
 const animations=new Set<Animation>(),tones=new Set<OscillatorNode>(),nodes:HTMLElement[]=[];
 type Task={fn:()=>void;left:number;start:number;id?:ReturnType<typeof setTimeout>};const tasks=new Set<Task>();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const get=(id:string)=>world.querySelector<HTMLElement>(`[data-object="${id}"]`);
 function schedule(t:Task){t.start=Date.now();t.id=setTimeout(()=>{tasks.delete(t);if(!disposed&&!paused)t.fn();},t.left);}
 function later(fn:()=>void,left:number){const t={fn,left,start:0};tasks.add(t);if(!paused)schedule(t);}
 function animate(id:string,frames:Keyframe[],duration=1300){const node=get(id);if(!node||disposed)return;const animation=node.animate(reduced?[{opacity:.7},{opacity:1}]:frames,{duration:reduced?180:duration,fill:'forwards',easing:'ease-in-out'});animations.add(animation);if(paused)animation.pause();}
 function sound(freq=700){if(!soundEnabled||disposed||paused)return;ctx??=new AudioContext();void ctx.resume();const o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime;o.type='sine';o.frequency.setValueAtTime(freq,t);o.frequency.exponentialRampToValueAtTime(freq*1.35,t+.22);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.007,t+.025);g.gain.exponentialRampToValueAtTime(.0001,t+.32);o.connect(g).connect(ctx.destination);tones.add(o);o.onended=()=>tones.delete(o);o.start();o.stop(t+.34);}
 function clear(){tasks.forEach(t=>clearTimeout(t.id));tasks.clear();animations.forEach(a=>a.cancel());animations.clear();nodes.splice(0).forEach(n=>n.remove());tones.forEach(o=>{try{o.stop();}catch{}});tones.clear();}
 function shine(id:string){animate(id,[{filter:'drop-shadow(0 0 0px #fff)'},{filter:'drop-shadow(0 0 14px #e2d3ff)'},{filter:'drop-shadow(0 0 3px #fff)'}]);}
 function sparkle(id:string){const host=get(id);if(!host)return;for(let i=0;i<6;i++){const star=document.createElement('span');star.className='elf-spark';star.textContent='✦';star.style.left='50%';star.style.top='40%';star.setAttribute('aria-hidden','true');host.append(star);nodes.push(star);const a=star.animate(reduced?[{opacity:0},{opacity:.8},{opacity:0}]:[{opacity:0,translate:'0 0'},{opacity:1,offset:.35},{opacity:0,translate:`${(i-2.5)*15}px ${-25-i*7}px`}],{duration:950+i*100});animations.add(a);if(paused)a.pause();}}
 function move(id:string,dx:number,dy:number,duration=1400){animate(id,[{translate:'0 0'},{translate:`${dx}px ${dy}px`}],duration);}
 function act(line:number,target=''){
  if(disposed)return;clear();
  const focus=target||(['glow','lumi','lumi','lumi','signpost','lumi','map','mark','mark','rabbit','lumi','glow','lumi','gail','map','rabbit','flower','mother','lumi','flower'][page]);
  if(page===0){move('glow',-11,7,850);later(()=>{shine('glow');sparkle('glow');sound(780);},420);return;}
  if(page===1){move('lumi',-28,0,1350);later(()=>shine('lumi'),500);return;}
  if([4,6].includes(page)){shine(page===4?'signpost':'map');if(line>0)move('lumi',-19,0);return;}
  if(page===7||page===8){shine('mark');if(line>0)animate('lumi',[{rotate:'0deg'},{rotate:'-5deg'},{rotate:'0deg'}],1250);return;}
  if(page===9||page===15){move('rabbit',-16,0);later(()=>{shine('rabbit');sound(540);},450);return;}
  if(page===11){shine('glow');sound(490);return;}
  if(page===14){shine('map');sparkle('map');return;}
  if(page===16||page===19){shine('flower');sparkle('flower');sound(820);return;}
  if(page===17||page===18){move('lumi',12,-3);shine('mother');if(page===18)sound(650);return;}
  shine(focus);if(line>0&&get('lumi'))animate('lumi',[{rotate:'0deg'},{rotate:'2deg'},{rotate:'0deg'}],900);
 }
 return {interact(id:string){manual=true;paused=false;act(1,id);},sentence(index:number,_text:string){manual=false;paused=false;act(index);},playback(running:boolean,isPaused:boolean){const next=isPaused||(!running&&!manual);if(next!==paused){paused=next;tasks.forEach(t=>{if(paused){clearTimeout(t.id);t.left=Math.max(0,t.left-(Date.now()-t.start));}else schedule(t);});}animations.forEach(a=>paused?a.pause():a.play());if(ctx){if(paused)void ctx.suspend();else if(soundEnabled)void ctx.resume();}},sound(on:boolean){soundEnabled=on;if(!on){tones.forEach(o=>{try{o.stop();}catch{}});tones.clear();void ctx?.suspend();}},dispose(){disposed=true;clear();void ctx?.close();}};
}
