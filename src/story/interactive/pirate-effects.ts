/** Per-scene effects: no global animation loops or audio survives disposal. */
export function createPirateEffects(world:HTMLElement,page:number,soundEnabled:boolean){
 const asset='images/story/pirate-v1/';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const animations=new Set<Animation>(),nodes=new Set<HTMLElement>();
 const sounds=new Map<string,HTMLAudioElement>();
 let disposed=false,manualTimer:ReturnType<typeof setTimeout>|undefined;
 const sea=page>=12&&page<=16;
 world.dataset.piratePage=String(page);
 function node(tag:string,cls:string){const n=document.createElement(tag);n.className=cls;n.setAttribute('aria-hidden','true');nodes.add(n);return n;}
 function animate(n:HTMLElement,frames:Keyframe[],duration:number,iterations=1,delay=0){
  const a=n.animate(frames,{duration:reduced?250:duration,iterations:reduced?1:iterations,delay:reduced?0:delay,easing:'ease-in-out',fill:'forwards'});animations.add(a);return a;
 }
 function sound(name:string){if(!soundEnabled||disposed)return;let audio=sounds.get(name);if(!audio){audio=new Audio(asset+name+'.wav');audio.volume=name==='waves'?.12:.2;audio.hidden=true;audio.setAttribute('aria-hidden','true');world.append(audio);sounds.set(name,audio);}audio.currentTime=0;void audio.play().catch(()=>{});}
 function active(value:boolean){world.classList.toggle('pirate-active',value);}
 if(sea){
  const vessel=node('div','pirate-vessel');vessel.removeAttribute('aria-hidden');
  for(const id of ['sail','sailor','pirate','gail','friend','hull','oar','telescope','rope','lifejacket']){const o=world.querySelector<HTMLElement>(`[data-object=${id}]`);if(o)vessel.append(o);}
  world.append(vessel);
  const oar=world.querySelector<HTMLElement>('[data-object=oar]');if(oar)oar.style.transform='translate(-50%,-50%) rotate(-35deg)';
  const rigging=document.createElementNS('http://www.w3.org/2000/svg','svg');rigging.setAttribute('viewBox','0 0 1000 1000');rigging.setAttribute('preserveAspectRatio','none');rigging.setAttribute('aria-hidden','true');rigging.classList.add('pirate-rigging');const line=document.createElementNS(rigging.namespaceURI,'path');line.setAttribute('d','M 385 550 Q 610 570 830 690');line.setAttribute('fill','none');line.setAttribute('stroke','#b38b53');line.setAttribute('stroke-width','3');rigging.append(line);vessel.prepend(rigging);
  const foam=node('div','pirate-foam');for(let i=0;i<18;i++){const drop=node('i','foam-drop');drop.style.setProperty('--x',(8+i*4.9)+'%');drop.style.setProperty('--delay',(-i*.17)+'s');drop.style.setProperty('--size',(7+i%4*4)+'px');foam.append(drop);}world.append(foam);
 }
 if(page>=3&&page<=11){const oar=world.querySelector<HTMLElement>('[data-object=oar]');if(oar)oar.style.transform='translate(-50%,-50%) rotate(-75deg)';}
 function magic(){
  for(const a of [...animations]){const target=(a.effect as KeyframeEffect)?.target as HTMLElement|undefined;if(target?.closest('.pirate-magic,.pirate-arrival')){a.cancel();animations.delete(a);}}
  for(const n of [...nodes])if(n.classList.contains('pirate-magic')||n.classList.contains('pirate-arrival')){n.remove();nodes.delete(n);}
  const boat=world.querySelector<HTMLElement>('[data-object=paperboat]');if(!boat)return;
  active(true);world.classList.remove('pirate-paused');
  const cloud=node('div','pirate-magic');cloud.style.left=boat.style.left;cloud.style.top=boat.style.top;world.append(cloud);
  for(let i=0;i<22;i++){
   const puff=node('i',i%3===0?'gold-spark':'gold-smoke');cloud.append(puff);
   const x=(i%2?-1:1)*(35+(i*29)%250),y=-60-(i*37)%300;
   animate(puff,[{opacity:0,transform:'translate(-50%,-50%) scale(.15)'},{opacity:i%3===0?1:.6,offset:.25},{opacity:0,transform:`translate(${x}px,${y}px) scale(${i%3===0?1:3.5})`}],3500,1,i*60);
  }
  if(page===1){const arrival=node('img','pirate-arrival') as HTMLImageElement;arrival.src=asset+'dock.png';arrival.alt='';world.prepend(arrival);const fade=animate(arrival,[{opacity:0},{opacity:0,offset:.45},{opacity:1}],4200);void fade.finished.then(()=>{if(disposed)return;const girl=world.querySelector<HTMLElement>('[data-object=gail]');const img=girl?.querySelector('img');if(girl&&img){img.src='images/story/shared-gail-v1/standing.png';girl.style.height='55%';girl.style.width='23%';girl.style.top='67%';}}).catch(()=>{});}
 }
 function pulse(id:string){const actor=world.querySelector<HTMLElement>(`[data-object=${id}] img`);if(actor)animate(actor,[{rotate:'0deg'},{rotate:'-4deg',offset:.3},{rotate:'3deg',offset:.65},{rotate:'0deg'}],1000);}
 function interact(id:string){
  if((id==='paperboat'||id==='boat'||id==='smoke')&&page<2)magic();
  if(id==='seagull'){sound('seagull');pulse('seagull');}
  if(sea&&['oar','wave','sail','rope'].includes(id)){active(true);world.classList.remove('pirate-paused');sound('waves');pulse(id);if(manualTimer)clearTimeout(manualTimer);manualTimer=setTimeout(()=>active(false),5000);}
 }
 return {
  interact,
  sentence(index:number,text:string){if(page<2&&index===0)magic();if(page===2&&/seagull/i.test(text)){sound('seagull');pulse('seagull');}if(sea&&index===0){active(true);sound('waves');}},
  playback(running:boolean,paused:boolean){
   const play=running&&!paused;active(play);world.classList.toggle('pirate-paused',!play);
   animations.forEach(a=>{if(a.playState==='finished')return;if(play)a.play();else a.pause();});
   sounds.forEach(a=>{if(!play)a.pause();else if(a.currentTime>0&&a.currentTime<a.duration)void a.play().catch(()=>{});});
  },
  sound(enabled:boolean){soundEnabled=enabled;if(!enabled)sounds.forEach(a=>a.pause());},
  dispose(){disposed=true;if(manualTimer)clearTimeout(manualTimer);animations.forEach(a=>a.cancel());sounds.forEach(a=>{a.pause();a.removeAttribute('src');a.load();a.remove();});nodes.forEach(n=>n.remove());animations.clear();sounds.clear();nodes.clear();}
 };
}
