/** Disposable scene effects. State replacements have a 200 ms empty interval. */
export function createElfEffects(world:HTMLElement,page:number,soundEnabled:boolean){
 let disposed=false,manual=false,paused=false,ctx:AudioContext|undefined;
 const animations=new Set<Animation>(),nodes:HTMLElement[]=[],voices=new Set<AudioScheduledSourceNode>();
 type Task={fn:()=>void,left:number,start:number,id?:ReturnType<typeof setTimeout>};
 const tasks=new Set<Task>();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const get=(id:string)=>world.querySelector<HTMLElement>(`[data-object="${id}"]`);
 function visible(id:string,on:boolean){const n=get(id);if(n){n.style.visibility=on?'visible':'hidden';n.style.pointerEvents=on?'':'none';n.setAttribute('aria-hidden',String(!on));n.tabIndex=on?0:-1;}}
 function schedule(t:Task){t.start=Date.now();t.id=setTimeout(()=>{tasks.delete(t);if(!disposed)t.fn();},t.left);}
 function later(fn:()=>void,ms:number){const t:Task={fn,left:ms,start:0};tasks.add(t);if(!paused)schedule(t);}
 function animate(n:HTMLElement|null,frames:Keyframe[],ms=1600,delay=0){if(!n||disposed)return;const a=n.animate(frames,{duration:reduced?120:ms,delay:reduced?0:delay,fill:'forwards',easing:'ease-in-out'});animations.add(a);if(paused)a.pause();return a;}
 function initial(){if(page===11||page===16){visible('bud',true);visible('bloom',false);}if(page===17){visible('unripe',true);visible('ripe',false);}}
 function clear(){tasks.forEach(t=>clearTimeout(t.id));tasks.clear();animations.forEach(a=>a.cancel());animations.clear();nodes.splice(0).forEach(n=>n.remove());for(const v of voices){try{v.stop();}catch{}}voices.clear();}
 function chime(){if(!soundEnabled||disposed)return;ctx??=new AudioContext();void ctx.resume();for(let i=0;i<3;i++){const o=ctx.createOscillator(),g=ctx.createGain(),s=ctx.currentTime+i*.18;o.frequency.setValueAtTime(440+i*110,s);g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(.012,s+.03);g.gain.exponentialRampToValueAtTime(.0001,s+.45);o.connect(g).connect(ctx.destination);voices.add(o);o.onended=()=>voices.delete(o);o.start(s);o.stop(s+.5);}}
 function glow(id:string){animate(get(id),[{filter:'drop-shadow(0 0 0px #ffe39b)'},{filter:'drop-shadow(0 0 16px #ffe39b)'},{filter:'drop-shadow(0 0 2px #ffe39b)'}],1800);}
 function sparks(){const host=get('acorn');if(!host)return;for(let i=0;i<7;i++){const n=document.createElement('span');n.className='elf-spark';n.textContent='✦';n.style.left=(i*13)+'%';host.append(n);nodes.push(n);animate(n,[{opacity:0,translate:'0 0',scale:.5},{opacity:1,offset:.25},{opacity:0,translate:`${(i-3)*20}px -100px`,scale:1.4}],1800,i*100);}glow('acorn');chime();}
 function replace(from:string,to:string){visible(from,true);visible(to,false);later(()=>{visible(from,false);later(()=>{visible(to,true);glow(to);},200);},reduced?350:1500);}
 function action(id=''){if(disposed)return;clear();initial();
 if(page===0){sparks();const n=document.createElement('img');n.src='images/story/elf-v1/forest.png';n.alt='';n.className='together-arrival';world.append(n);nodes.push(n);animate(n,[{opacity:0},{opacity:1}],1400,1700);return;}
 if(page===19){sparks();return;}
 if(page===5){sparks();return;}
 if(page===11||page===16){if(page===16)sparks();replace('bud','bloom');return;}
 if(page===17){replace('unripe','ripe');return;}
 if(page===15){animate(get('winter'),[{opacity:1,scale:1},{opacity:0,scale:.15,translate:'0 28px'}],2200);return;}
 if(page===13){animate(get('autumn'),[{translate:'0 -20px',rotate:'-10deg'},{translate:'12px 40px',rotate:'22deg'}],2400);return;}
 if(page===14){animate(get('winter'),[{translate:'0 -12px',rotate:'0deg'},{translate:'0 12px',rotate:'20deg'}],2400);return;}
 if(page===18){animate(get('grown'),[{translate:'0 0'},{translate:'-80px -50px'}],2800);chime();return;}
 if([2,8,9].includes(page)){if(page===2)animate(get('young'),[{translate:'0 0'},{translate:'0 -7px'},{translate:'0 0'}],1600);else glow('young');}
 else glow(id||({3:'home',4:'acorn',6:'bud',7:'unripe',10:'autumn',12:'canopy'} as Record<number,string>)[page]||'nori');
 }
 if(page>=10&&page<=15){const vision=document.createElement('div');vision.className='elf-vision';vision.setAttribute('aria-hidden','true');world.prepend(vision);}
 initial();
 return {interact(id:string){manual=true;paused=false;action(id);},sentence(index:number,_text:string){if(index===0){manual=false;paused=false;action();}},playback(running:boolean,isPaused:boolean){const next=isPaused||(!running&&!manual);if(next!==paused){paused=next;for(const t of tasks){if(paused){clearTimeout(t.id);t.left=Math.max(0,t.left-(Date.now()-t.start));}else schedule(t);}}animations.forEach(a=>paused?a.pause():a.play());if(ctx){if(paused)void ctx.suspend();else if(soundEnabled)void ctx.resume();}},sound(on:boolean){soundEnabled=on;if(!on){for(const v of voices){try{v.stop();}catch{}}voices.clear();void ctx?.suspend();}},dispose(){disposed=true;clear();void ctx?.close();}};
}
