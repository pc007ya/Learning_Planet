/** Market effects follow the existing token/card story and share the voice lifecycle. */
export function createMarketEffects(world:HTMLElement,page:number,soundEnabled:boolean){
 let disposed=false,paused=false,manual=false,ctx:AudioContext|undefined;
 const animations=new Set<Animation>(),particles=new Set<HTMLElement>(),tones=new Set<OscillatorNode>();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const get=(id:string)=>world.querySelector<HTMLElement>(`[data-object="${id}"]`);
 if(page===1||page===18){const portal=get('portal');if(portal)portal.style.opacity='0';}
 const animate=(id:string,frames:Keyframe[],duration=1200,delay=0)=>{
  const node=get(id);if(!node||disposed)return;
  const animation=node.animate(reduced?[{opacity:.8},{opacity:1}]:frames,{duration:reduced?180:duration,delay:reduced?0:delay,easing:'ease-in-out',fill:'both'});
  animations.add(animation);if(paused)animation.pause();return animation;
 };
 const glow=(id:string)=>animate(id,[{filter:'drop-shadow(0 0 0px #fff2b2)'},{filter:'drop-shadow(0 0 12px #ffde73)'},{filter:'drop-shadow(0 0 2px #fff2b2)'}],1500);
 const stop=()=>{animations.forEach(a=>a.cancel());animations.clear();particles.forEach(n=>n.remove());particles.clear();tones.forEach(t=>{try{t.stop();}catch{}});tones.clear();};
 const sound=(frequency=620)=>{
  if(!soundEnabled||paused||disposed)return;ctx??=new AudioContext();void ctx.resume();
  const tone=ctx.createOscillator(),gain=ctx.createGain(),now=ctx.currentTime;tone.type='sine';tone.frequency.setValueAtTime(frequency,now);tone.frequency.linearRampToValueAtTime(frequency*1.12,now+.15);
  gain.gain.setValueAtTime(.0001,now);gain.gain.linearRampToValueAtTime(.008,now+.025);gain.gain.exponentialRampToValueAtTime(.0001,now+.3);tone.connect(gain).connect(ctx.destination);tones.add(tone);tone.onended=()=>tones.delete(tone);tone.start();tone.stop(now+.32);
 };
 const sparks=()=>{
  const anchor=get('guide');if(!anchor||reduced)return;
  for(let i=0;i<8;i++){
   const dot=document.createElement('i');dot.className='market-token-spark';dot.setAttribute('aria-hidden','true');
   Object.assign(dot.style,{position:'absolute',pointerEvents:'none',left:anchor.style.left,top:anchor.style.top,width:'6px',height:'6px',borderRadius:'50%',background:'#ffe7a0',boxShadow:'0 0 8px #ffd76e',zIndex:'8'});world.append(dot);particles.add(dot);
   const a=dot.animate([{translate:'0 0',opacity:0},{translate:`${(i-3.5)*10}px -20px`,opacity:.85,offset:.45},{translate:`${(i-3.5)*18}px -45px`,opacity:0}],{duration:1100,delay:i*50});animations.add(a);a.onfinish=()=>{dot.remove();particles.delete(dot);animations.delete(a);};if(paused)a.pause();
  }
 };
 function act(line:number,id=''){
  if(disposed)return;stop();
  if(page===0){if(line===0)animate('guide',[{translate:'-36px 0',rotate:'-22deg'},{translate:'0 0',rotate:'0deg'}],700);else glow('guide');return;}
  if(page===1){glow('guide');sparks();animate('portal',[{opacity:0,scale:.3},{opacity:1,scale:1}],1000,650);sound(720);return;}
  if(page===3||page===7){['card','card2'].forEach((name,i)=>animate(name,[{translate:'0 0',rotate:'0deg'},{translate:`${i?20:-20}px -10px`,rotate:i?'10deg':'-10deg'},{translate:'0 0',rotate:'0deg'}],1300));return;}
  if([8,9,11,12,13,14,15].includes(page)){glow(page===9||page===11?'order':'card');if(get('card2'))glow('card2');return;}
  if(page===16){animate('coin',[{translate:'-20px -12px'},{translate:'0 0'}],900);glow('basket');sound(540);return;}
  if(page===18){glow('guide');sparks();animate('portal',[{opacity:0,scale:.3},{opacity:1,scale:1}],1000,600);sound(720);return;}
  glow(id||(['beef','basket','tray','order','guide','worker'].find(name=>get(name))||'gail'));
  if(line>0&&get('gail'))animate('gail',[{rotate:'0deg'},{rotate:'1deg'},{rotate:'0deg'}],1000);
 }
 return {interact(id:string){manual=true;paused=false;act(1,id);},sentence(index:number,_text:string){manual=false;paused=false;act(index);},playback(running:boolean,isPaused:boolean){paused=isPaused||(!running&&!manual);animations.forEach(a=>paused?a.pause():a.play());if(ctx)void(paused?ctx.suspend():ctx.resume());},sound(on:boolean){soundEnabled=on;if(!on)void ctx?.suspend();},dispose(){disposed=true;stop();void ctx?.close();}};
}
