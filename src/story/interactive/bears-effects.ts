export function createBearsEffects(world:HTMLElement,page:number,soundEnabled:boolean){
 let disposed=false,manual=false,ctx:AudioContext|undefined;
 const animations=new Set<Animation>(),nodes:HTMLElement[]=[],voices=new Set<AudioScheduledSourceNode>();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const get=(id:string)=>world.querySelector<HTMLElement>(`[data-object="${id}"]`);
 function animate(n:HTMLElement|null,frames:Keyframe[],ms=1200,delay=0){if(!n)return;const a=n.animate(frames,{duration:reduced?120:ms,delay:reduced?0:delay,fill:'forwards',easing:'ease-in-out'});animations.add(a);return a;}
 function clear(){for(const a of animations)a.cancel();animations.clear();nodes.splice(0).forEach(n=>n.remove());for(const v of voices){try{v.stop();}catch{}}voices.clear();}
 function sound(creak=false){if(!soundEnabled||disposed)return;ctx??=new AudioContext();void ctx.resume();const o=ctx.createOscillator(),g=ctx.createGain(),s=ctx.currentTime;o.type=creak?'triangle':'sine';o.frequency.setValueAtTime(creak?180:660,s);o.frequency.exponentialRampToValueAtTime(creak?100:880,s+.3);g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(creak?.01:.017,s+.04);g.gain.exponentialRampToValueAtTime(.0001,s+.5);o.connect(g).connect(ctx.destination);voices.add(o);o.onended=()=>voices.delete(o);o.start(s);o.stop(s+.55);}
 function beam(){const host=get('flashlight');if(!host)return;const n=document.createElement('span');n.className='bears-beam';host.append(n);nodes.push(n);animate(n,[{opacity:0},{opacity:.65},{opacity:.25}],2000);}
 function action(){if(disposed)return;clear();beam();
 if(page===0){animate(get('flashlight'),[{translate:'100px 0',opacity:0},{translate:'0 0',opacity:1}],750);sound();const n=document.createElement('img');n.src='images/story/bears-v1/cottage.png';n.alt='';n.className='together-arrival';world.append(n);nodes.push(n);animate(n,[{opacity:0},{opacity:1}],1200,1600);}
 else if(page===2||page===10){sound(true);animate(get('chair'),[{rotate:'-3deg'},{rotate:'3deg'},{rotate:'-2deg'},{rotate:'0deg'}],1800);}
 else if(page>=3&&page<=7||page===15||page===16){animate(get('branch'),[{rotate:'-3deg'},{rotate:'3deg'},{rotate:'0deg'}],1800);animate(get('shadow'),[{rotate:'-3deg'},{rotate:'3deg'},{rotate:'0deg'}],1800);}
 else if(page===8||page===9){animate(get('curtain'),[{translate:'0 0'},{translate:'105% 0'}],1200);sound();}
 else if(page===11){animate(get('flashlight'),[{rotate:'0deg'},{rotate:'20deg'}]);animate(get('shadow'),[{translate:'-15px -5px'},{translate:'15px 0'}]);}
 else if(page===12||page===14){animate(get('flashlight'),[{translate:'0 0'},{translate:'-35px 0'}],1600);animate(get('round'),[{scale:page===14?'1.5':'1.1'},{scale:page===14?'.65':'1'}],1600);}
 else if(page===13){const host=get('chair');if(host){const n=document.createElement('span');n.className='bears-straight';host.append(n);nodes.push(n);}}
 else if(page===17){['tall','middle','tiny'].forEach(id=>animate(get(id),[{rotate:'0deg'},{rotate:'2deg'},{rotate:'0deg'}]));}
 else if(page===18){const n=document.createElement('span');n.className='bears-dim';world.append(n);nodes.push(n);animate(n,[{opacity:0},{opacity:.25}],2200);}
 }
 return {interact(_id:string){manual=true;action();},sentence(index:number,_text:string){if(index===0){manual=false;action();}},playback(running:boolean,paused:boolean){animations.forEach(a=>{if(paused||(!running&&!manual))a.pause();else a.play();});if(ctx){if(paused||!running)void ctx.suspend();else if(soundEnabled)void ctx.resume();}},sound(on:boolean){soundEnabled=on;if(!on){for(const v of voices){try{v.stop();}catch{}}voices.clear();void ctx?.suspend();}},dispose(){disposed=true;clear();void ctx?.close();}};
}
