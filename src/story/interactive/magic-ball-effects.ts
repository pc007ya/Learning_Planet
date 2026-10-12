/** Book29 uses existing layers; effects are cancelled with their page/voice. */
export function createMagicBallEffects(world:HTMLElement,page:number,soundEnabled:boolean){
 let disposed=false,paused=false,manual=false,ctx:AudioContext|undefined;
 const animations=new Set<Animation>(),tones=new Set<OscillatorNode>(),particles=new Set<HTMLElement>(),restores=new Set<()=>void>();
 const flightPose=page===2?new Image():undefined;if(flightPose)flightPose.src='images/story/magic-ball-v1/mira-riding.webp';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const get=(id:string)=>world.querySelector<HTMLElement>(`[data-object="${id}"]`);
 if(page===1){const portal=get('portal');if(portal)portal.style.opacity='0';}
 const animate=(id:string,frames:Keyframe[],duration=1200,delay=0)=>{
  const node=get(id);if(!node||disposed)return;
  const a=node.animate(reduced?[{opacity:.75},{opacity:1}]:frames,{duration:reduced?180:duration,delay:reduced?0:delay,easing:'ease-in-out',fill:'both'});animations.add(a);if(paused)a.pause();return a;
 };
 const glow=(id:string)=>animate(id,[{filter:'drop-shadow(0 0 0px #bbf4ff)'},{filter:'drop-shadow(0 0 12px #8ee6ff)'},{filter:'drop-shadow(0 0 2px #bbf4ff)'}],1500);
 const sound=(frequency=650)=>{
  if(!soundEnabled||paused||disposed)return;
  ctx??=new AudioContext();void ctx.resume();const tone=ctx.createOscillator(),gain=ctx.createGain(),time=ctx.currentTime;
  tone.type='sine';tone.frequency.setValueAtTime(frequency,time);tone.frequency.linearRampToValueAtTime(frequency*1.12,time+.15);
  gain.gain.setValueAtTime(.0001,time);gain.gain.linearRampToValueAtTime(.008,time+.025);gain.gain.exponentialRampToValueAtTime(.0001,time+.3);
  tone.connect(gain).connect(ctx.destination);tones.add(tone);tone.onended=()=>tones.delete(tone);tone.start();tone.stop(time+.32);
 };
 const stop=()=>{
  animations.forEach(a=>a.cancel());animations.clear();particles.forEach(n=>n.remove());particles.clear();restores.forEach(f=>f());restores.clear();
  tones.forEach(t=>{try{t.stop();}catch{}});tones.clear();
 };
 const sparks=(id:string,color:string)=>{
  if(reduced)return;const anchor=get(id);if(!anchor)return;
  for(let i=0;i<7;i++){
   const dot=document.createElement('i');dot.className='magic-ball-spark';dot.setAttribute('aria-hidden','true');
   Object.assign(dot.style,{position:'absolute',pointerEvents:'none',left:anchor.style.left,top:anchor.style.top,width:'6px',height:'6px',borderRadius:'50%',background:color,boxShadow:`0 0 8px ${color}`,zIndex:'8'});
   world.append(dot);particles.add(dot);const dx=(i-3)*12,dy=-16-Math.abs(i-3)*7;
   const a=dot.animate([{translate:'0 0',opacity:0},{translate:`${dx*.45}px ${dy*.45}px`,opacity:.8,offset:.4},{translate:`${dx}px ${dy}px`,opacity:0}],{duration:1100,delay:i*55,easing:'ease-out'});animations.add(a);a.onfinish=()=>{dot.remove();particles.delete(dot);animations.delete(a);};if(paused)a.pause();
  }
 };
 const pass=(from:string,to:string)=>{
  const ball=get('ball'),a=get(from),b=get(to);if(!ball||!a||!b){glow('ball');return;}
  const width=world.clientWidth,height=world.clientHeight;
  const offset=(n:HTMLElement)=>[(parseFloat(n.style.left)-parseFloat(ball.style.left))*width/100,(parseFloat(n.style.top)-parseFloat(ball.style.top))*height/100-10];
  const start=offset(a),end=offset(b);animate('ball',[{translate:`${start[0]}px ${start[1]}px`},{translate:`${(start[0]+end[0])/2}px ${Math.min(start[1],end[1])-15}px`,offset:.5},{translate:`${end[0]}px ${end[1]}px`}],1300);sound(620);
 };
 function act(line:number,id=''){
  if(disposed)return;stop();
  if(page===0){if(line===0||id==='ball')animate('ball',[{translate:'36px 0',rotate:'24deg'},{translate:'0 0',rotate:'0deg'}],700);else{glow('ball');glow('guide');}return;}
  if(page===1){glow('ball');glow('guide');sparks('ball','#9eeaff');sparks('guide','#ffe38b');animate('portal',[{opacity:0,scale:.3},{opacity:1,scale:1}],900,700);sound(720);return;}
  if(page===2&&(line===0||id==='mira')){
   const image=get('mira')?.querySelector('img');if(image){const old=image.getAttribute('src');const restore=()=>{if(old)image.setAttribute('src',old);};restores.add(restore);image.setAttribute('src','images/story/magic-ball-v1/mira-riding.webp');
    const a=animate('mira',[{translate:'0 0'},{translate:'14px -12px',offset:.35},{translate:'25px -4px',offset:.65},{translate:'0 0'}],1500);
    if(a)a.onfinish=()=>{restore();restores.delete(restore);};else restore();
   }glow('cushion');return;
  }
  if(page===3){animate('ball',[{translate:'0 0'},{translate:'0 -12px'},{translate:'0 0'}],800);return;}
  if(page===4||page===11){glow('ball');return;}
  if(page===5){animate('ball',[{translate:'0 0'},{translate:'-20px 0'},{translate:'20px -7px'},{translate:'0 0'}],1500);sound(430);return;}
  if(page===6){animate('ball',[{translate:'0 0'},{translate:'8px -10px'},{translate:'15px 0'},{translate:'0 0'}],1300);glow('hoop');return;}
  if(page===7){glow('ball');glow('cushion');return;}
  if(page===10||page===16){glow('card');sound(550);return;}
  if(page===12){pass('mira','gail');return;}
  if(page===13){pass('mira','gail');glow('friend');return;}
  if(page===14){glow('hoop');glow('cushion');return;}
  if(page===15||page===17){pass('gail','hoop');glow('hoop');return;}
  glow(id||(['guide','ball','mira','teacher','friend'].find(name=>get(name))||'gail'));
  if(!reduced&&line>0)animate('gail',[{rotate:'0deg'},{rotate:'1deg'},{rotate:'0deg'}],1000);
 }
 return {
  interact(id:string){manual=true;paused=false;act(0,id);},
  sentence(index:number,_text:string){manual=false;paused=false;act(index);},
  playback(running:boolean,isPaused:boolean){paused=isPaused||(!running&&!manual);animations.forEach(a=>paused?a.pause():a.play());if(ctx)void(paused?ctx.suspend():ctx.resume());},
  sound(on:boolean){soundEnabled=on;if(!on)void ctx?.suspend();},
  dispose(){disposed=true;flightPose?.removeAttribute('src');stop();void ctx?.close();}
 };
}
