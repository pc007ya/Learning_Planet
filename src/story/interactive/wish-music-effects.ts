/** Per-page finite effects, owned by the reader and cancelled when it leaves the page. */
export function createWishMusicEffects(world:HTMLElement,book:'genie'|'music',page:number,soundEnabled:boolean){
 let disposed=false,manual=false,ctx:AudioContext|undefined;
 const animations=new Set<Animation>(),nodes:HTMLElement[]=[],voices=new Set<AudioScheduledSourceNode>();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const get=(id:string)=>world.querySelector<HTMLElement>(`[data-object="${id}"]`);
 function animate(n:HTMLElement|null,frames:Keyframe[],ms=850,delay=0){if(!n)return;const a=n.animate(frames,{duration:reduced?120:ms,delay:reduced?0:delay,fill:'forwards',easing:'ease-in-out'});animations.add(a);return a;}
 function later(ms:number,fn:()=>void){const a=world.animate([{},{}],{duration:ms});animations.add(a);a.onfinish=()=>{if(!disposed)fn();};}
 function clear(){for(const a of animations){a.onfinish=null;a.cancel();}animations.clear();nodes.splice(0).forEach(n=>n.remove());for(const v of voices){try{v.stop();}catch{}}voices.clear();}
 function tone(f:number,t=.18,type:OscillatorType='sine',delay=0){if(!soundEnabled||disposed)return;ctx??=new AudioContext();void ctx.resume();const o=ctx.createOscillator(),g=ctx.createGain(),start=ctx.currentTime+delay;o.type=type;o.frequency.setValueAtTime(f,start);g.gain.setValueAtTime(.0001,start);g.gain.exponentialRampToValueAtTime(.018,start+.02);g.gain.exponentialRampToValueAtTime(.0001,start+t);o.connect(g).connect(ctx.destination);voices.add(o);o.onended=()=>voices.delete(o);o.start(start);o.stop(start+t+.01);}
 function rock(id:string,angle=3,delay=0){animate(get(id),[{rotate:'0deg'},{rotate:angle+'deg',offset:.5},{rotate:'0deg'}],850,delay);}
 function spark(id:string,music=false){const host=get(id);if(!host)return;for(let i=0;i<6;i++){const n=document.createElement('span');n.className='wish-note';n.textContent=music?'♪':'✦';host.append(n);nodes.push(n);animate(n,[{opacity:0,translate:'0 0',scale:'.5'},{opacity:.9,offset:.25},{opacity:0,translate:`${(i%3-1)*45}px ${-55-i*9}px`,scale:'1.4'}],1400,i*90);}}
 function portal(){spark(book==='genie'?'lamp':'box',book==='music');tone(660,.5);tone(880,.6,'sine',.18);if(page!==0)return;const n=document.createElement('img');n.alt='';n.src=`images/story/${book}-v1/${book==='genie'?'bazaar':'stage'}.png`;n.className='together-arrival';world.append(n);nodes.push(n);animate(n,[{opacity:0},{opacity:1}],900,1500);}
 function show(id:string,on:boolean){const n=get(id);if(n){n.style.visibility=on?'visible':'hidden';n.setAttribute('aria-hidden',String(!on));if(n instanceof HTMLButtonElement)n.disabled=!on;}}
 function beat(id:string,delay=0,f=130){rock(id,2,delay);tone(f,.15,'triangle',delay/1000);}
 function genie(){
  if(page===0||page===19){portal();return;}
  if(page===14){['castle','gold','silver','blocks'].forEach(id=>show(id,true));['castle','gold','silver','blocks'].forEach((id,i)=>later(i*300,()=>{spark(id);show(id,false);}));return;}
  if(page===17){const n=get('train');animate(n,[{translate:'0 0'},{translate:`${world.clientWidth*.12}px 0`,offset:.4},{translate:'0 0'}],2500);tone(660,.45);return;}
  const id=page===3?'train':page===4?'balloon':page===5?'gold':page===6?'silver':page===7?'castle':page===8?'blocks':'';
  if(id){spark(id);animate(get(id),[{opacity:0,scale:'.7'},{opacity:1,scale:'1'}],800);tone(740,.25);}
  else if(page===10){rock('castle',1);rock('train',1,500);}
  else if(page===15||page===16){rock('girl',2);rock('boy',-2,300);rock('gail',1,150);}
  else rock('genie',2);
 }
 function music(){
  if(page===0||page===19){portal();return;}
  if(page===7){const n=document.createElement('span');n.className='silent-cue';n.textContent='♪';n.setAttribute('aria-label','音樂停止');world.append(n);nodes.push(n);animate(n,[{opacity:.8},{opacity:.15}],900);return;}
  if(page===18){['rabbit','fox','bear','gail','owl'].forEach(id=>animate(get(id),[{rotate:'0deg'},{rotate:'8deg',offset:.55},{rotate:'0deg'}],1400));return;}
  if(page===8||page===10){for(let i=0;i<3;i++){beat('gail',i*450,230);later(i*450,()=>spark('gail',true));}return;}
  if(page===11){rock('shakers',18);tone(480,.12,'triangle');tone(520,.12,'triangle',.35);return;}
  if(page===2||page===9){beat('rabbit');beat('drum',400);spark('drum',true);return;}
  if(page===3||page===13){rock('fox');spark('fox',true);[523,587,659].forEach((f,i)=>tone(f,.3,'sine',i*.3));return;}
  if(page===4||page===14){rock('bear');spark('bear',true);[392,440,494].forEach((f,i)=>tone(f,.35,'triangle',i*.32));return;}
  if(page===5||page===15){spark('piano',true);[523,659,784].forEach((f,i)=>tone(f,.3,'triangle',i*.22));return;}
  if(page===12){rock('owl',5);return;}
  if(page===16||page===17){['rabbit','fox','bear','gail'].forEach((id,i)=>{rock(id,i%2?2:-2,i*160);later(i*160,()=>spark(id,true));});[523,587,659,523].forEach((f,i)=>tone(f,.28,'sine',i*.4));return;}
  rock('rabbit');rock('fox',-2,200);rock('bear',2,350);
 }
 function action(){if(disposed)return;clear();if(book==='genie')genie();else music();}
 return {interact(_id:string){manual=true;action();},sentence(index:number,_text:string){if(index===0){manual=false;action();}},playback(running:boolean,paused:boolean){animations.forEach(a=>{if(paused||(!running&&!manual))a.pause();else a.play();});if(ctx){if(paused||!running)void ctx.suspend();else if(soundEnabled)void ctx.resume();}},sound(on:boolean){soundEnabled=on;if(!on){for(const v of voices){try{v.stop();}catch{}}voices.clear();void ctx?.suspend();}},dispose(){disposed=true;clear();void ctx?.close();}};
}
