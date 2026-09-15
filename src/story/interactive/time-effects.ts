/** Owned, pauseable scene effects; state changes never crossfade incompatible props. */
export function createTimeEffects(world:HTMLElement,page:number,soundEnabled:boolean){
 let disposed=false,manual=false,ctx:AudioContext|undefined;
 const animations=new Set<Animation>(),nodes:HTMLElement[]=[],voices=new Set<AudioScheduledSourceNode>();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const get=(id:string)=>world.querySelector<HTMLElement>(`[data-object="${id}"]`);
 function animate(n:HTMLElement|null,frames:Keyframe[],ms=850,delay=0){if(!n)return;const a=n.animate(frames,{duration:reduced?120:ms,delay:reduced?0:delay,fill:'forwards',easing:'ease-in-out'});animations.add(a);return a;}
 function later(ms:number,fn:()=>void){const a=world.animate([{},{}],{duration:ms});animations.add(a);a.onfinish=()=>{if(!disposed)fn();};}
 function show(id:string,on:boolean){const n=get(id);if(n){n.style.visibility=on?'visible':'hidden';n.setAttribute('aria-hidden',String(!on));if(n instanceof HTMLButtonElement)n.disabled=!on;}}
 function clear(){for(const a of animations){a.onfinish=null;a.cancel();}animations.clear();nodes.splice(0).forEach(n=>n.remove());for(const v of voices){try{v.stop();}catch{}}voices.clear();}
 function tone(f:number,t=.07,delay=0){if(!soundEnabled||disposed)return;ctx??=new AudioContext();void ctx.resume();const o=ctx.createOscillator(),g=ctx.createGain(),start=ctx.currentTime+delay;o.type='sine';o.frequency.setValueAtTime(f,start);g.gain.setValueAtTime(.0001,start);g.gain.exponentialRampToValueAtTime(.018,start+.01);g.gain.exponentialRampToValueAtTime(.0001,start+t);o.connect(g).connect(ctx.destination);voices.add(o);o.onended=()=>voices.delete(o);o.start(start);o.stop(start+t+.01);}
 function ticks(fast=false){for(let i=0;i<6;i++)tone(i%2?880:660,.045,i*(fast?.16:.65));}
 function ring(){const host=get('watch');if(!host)return;for(let i=0;i<3;i++){const n=document.createElement('span');n.className='time-ring';host.append(n);nodes.push(n);animate(n,[{opacity:0,scale:'.3'},{opacity:.85,offset:.35},{opacity:0,scale:'3.5'}],1800,i*220);}tone(660,.45);tone(990,.5,.2);}
 function clockHand(){const host=get('clock');if(!host)return;const n=document.createElement('span');n.className='time-clock-hand';host.append(n);nodes.push(n);animate(n,[{rotate:'0deg'},{rotate:page===4?'6deg':'360deg'}],page===4?1000:3500);}
 function action(){if(disposed)return;clear();
  if(page===0){ring();const n=document.createElement('img');n.className='together-arrival';n.src='images/story/time-v1/castle.png';n.alt='';world.append(n);nodes.push(n);animate(n,[{opacity:0},{opacity:1}],1000,1500);return;}
  if(page===8){show('breakfast',true);show('empty',false);ticks(true);later(650,()=>{show('breakfast',false);show('empty',false);later(200,()=>show('empty',true));});return;}
  if(page===10){ticks(true);const n=document.createElement('span');n.className='time-evening';world.append(n);nodes.push(n);animate(n,[{opacity:0},{opacity:.4},{opacity:0}],2200);return;}
  if(page>=12&&page<=14){const n=get('calendar');if(n){n.style.filter='drop-shadow(0 0 12px #ffde78)';later(1400,()=>{n.style.filter='';});}ticks();return;}
  if(page===17){animate(get('lunch'),[{rotate:'0deg'},{rotate:'1deg'},{rotate:'-1deg'},{rotate:'0deg'}],1800);tone(440,.25);tone(660,.25,.3);return;}
  if(page===18){animate(get('memories'),[{opacity:.5},{opacity:1}],850);tone(660,.3);tone(880,.3,.25);return;}
  if(page===19){ring();ticks();return;}
  if(page>=1&&page<=6){clockHand();ticks();return;}
  const n=get(page===15?'suitcase':page===16?'ticket':'friend');animate(n,[{translate:'0 0'},{translate:'0 -5px'},{translate:'0 0'}]);
 }
 if(page===8)show('empty',false);
 return {interact(_id:string){manual=true;action();},sentence(index:number,_text:string){if(index===0){manual=false;action();}},playback(running:boolean,paused:boolean){animations.forEach(a=>{if(paused||(!running&&!manual))a.pause();else a.play();});if(ctx){if(paused||!running)void ctx.suspend();else if(soundEnabled)void ctx.resume();}},sound(on:boolean){soundEnabled=on;if(!on){for(const v of voices){try{v.stop();}catch{}}voices.clear();void ctx?.suspend();}},dispose(){disposed=true;clear();void ctx?.close();}};
}
