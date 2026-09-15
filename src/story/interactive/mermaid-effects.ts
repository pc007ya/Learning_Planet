export function createMermaidEffects(world:HTMLElement,page:number,soundEnabled:boolean){
 let disposed=false,manual=false,ctx:AudioContext|undefined;
 const animations=new Set<Animation>(),nodes:HTMLElement[]=[],voices=new Set<AudioScheduledSourceNode>();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const get=(id:string)=>world.querySelector<HTMLElement>(`[data-object="${id}"]`);
 function animate(n:HTMLElement|null,frames:Keyframe[],ms=1600,delay=0){if(!n)return;const a=n.animate(frames,{duration:reduced?120:ms,delay:reduced?0:delay,fill:'forwards',easing:'ease-in-out'});animations.add(a);return a;}
 function clear(){for(const a of animations)a.cancel();animations.clear();nodes.splice(0).forEach(n=>n.remove());for(const v of voices){try{v.stop();}catch{}}voices.clear();}
 function chime(){if(!soundEnabled||disposed)return;ctx??=new AudioContext();void ctx.resume();for(let i=0;i<3;i++){const o=ctx.createOscillator(),g=ctx.createGain(),s=ctx.currentTime+i*.15;o.frequency.setValueAtTime(550+i*165,s);g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(.013,s+.03);g.gain.exponentialRampToValueAtTime(.0001,s+.4);o.connect(g).connect(ctx.destination);voices.add(o);o.onended=()=>voices.delete(o);o.start(s);o.stop(s+.45);}}
 function bubbles(id:string){const host=get(id);if(!host)return;for(let i=0;i<5;i++){const n=document.createElement('span');n.className='mermaid-bubble';n.style.left=(15+i*16)+'%';host.append(n);nodes.push(n);animate(n,[{opacity:0,translate:'0 0'},{opacity:.8,offset:.25},{opacity:0,translate:`${i*4-8}px -75px`}],1800,i*160);}}
 function action(){if(disposed)return;clear();
 if(page===0){bubbles('shell');chime();const n=document.createElement('img');n.src='images/story/mermaid-v1/reef.png';n.alt='';n.className='together-arrival';world.append(n);nodes.push(n);animate(n,[{opacity:0},{opacity:1}],1300,1600);return;}
 if(page===19){bubbles('shell');chime();return;}
 if(page===6){['shell','seaweed'].forEach(id=>animate(get(id),[{opacity:1,translate:'0 0'},{opacity:0,translate:'80px 0'}],1300));return;}
 if(page===13){const bottle=get('litter'),basket=get('basket');if(bottle&&basket){const dx=basket.offsetLeft-bottle.offsetLeft,dy=basket.offsetTop-bottle.offsetTop;animate(bottle,[{translate:'0 0',opacity:1},{translate:`${dx}px ${dy-20}px`,opacity:1,offset:.75},{translate:`${dx}px ${dy}px`,opacity:0}],1500);}chime();return;}
 if(page===14){animate(get('brush'),[{rotate:'-15deg'},{rotate:'0deg',translate:'0 6px'}]);return;}
 if(page===16){['seaweed','shell'].forEach(id=>animate(get(id),[{opacity:0},{opacity:1}],1300));}
 animate(get('seaweed'),[{rotate:'-3deg'},{rotate:'3deg'},{rotate:'0deg'}],2300);
 animate(get('fish'),[{translate:'0 0'},{translate:'-25px 0'},{translate:'0 0'}],2400);
 animate(get('turtle'),[{translate:'0 0'},{translate:'-35px 0'}],2500);
 animate(get('crab'),[{translate:'0 0'},{translate:'10px 0'},{translate:'0 0'}],1500);
 bubbles(page===1?'mira':page===10?'gail':'coral');
 }
 return {interact(_id:string){manual=true;action();},sentence(index:number,_text:string){if(index===0){manual=false;action();}},playback(running:boolean,paused:boolean){animations.forEach(a=>{if(paused||(!running&&!manual))a.pause();else a.play();});if(ctx){if(paused||!running)void ctx.suspend();else if(soundEnabled)void ctx.resume();}},sound(on:boolean){soundEnabled=on;if(!on){for(const v of voices){try{v.stop();}catch{}}voices.clear();void ctx?.suspend();}},dispose(){disposed=true;clear();void ctx?.close();}};
}
