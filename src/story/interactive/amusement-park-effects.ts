import data from '../amusement-park/data.json';
import {amusementId} from './amusement-park';
export function createAmusementEffects(world:HTMLElement,page:number,soundEnabled:boolean){
 let disposed=false,manual=false,ctx:AudioContext|undefined;const animations=new Set<Animation>(),nodes:HTMLElement[]=[],voices=new Set<OscillatorNode>();const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const get=(id:string)=>world.querySelector<HTMLElement>(`[data-object="${amusementId(id)}"]`);
 function animate(n:HTMLElement|null,frames:Keyframe[],duration=1400,delay=0){if(!n||disposed)return;const a=n.animate(reduced?[{opacity:.7},{opacity:1}]:frames,{duration:reduced?160:duration,delay:reduced?0:delay,fill:'forwards',easing:'ease-in-out'});animations.add(a);return a;}
 function clear(){animations.forEach(a=>a.cancel());animations.clear();nodes.splice(0).forEach(n=>n.remove());voices.forEach(v=>{try{v.stop();}catch{}});voices.clear();}
 function chime(){if(!soundEnabled||disposed)return;ctx??=new AudioContext();void ctx.resume();const o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime;o.frequency.value=740;g.gain.setValueAtTime(.008,t);g.gain.exponentialRampToValueAtTime(.0001,t+.35);o.connect(g).connect(ctx.destination);voices.add(o);o.onended=()=>voices.delete(o);o.start();o.stop(t+.4);}
 function action(id=data.scenes[page].focus){if(disposed)return;clear();const target=get(id);animate(target,[{filter:'brightness(1)'},{filter:'brightness(1.2) drop-shadow(0 0 12px #ddfaff)',offset:.4},{filter:'brightness(1)'}]);

 const art=target?.querySelector<HTMLElement>('.amusement-art')||null;
 if([0,1,19].includes(page)&&id==='ticket'){
 animate(art,[{scale:1,filter:'brightness(1)'},{scale:1.12,filter:'brightness(1.7)'},{scale:1,filter:'brightness(1)'}],2400);
 for(let i=0;i<8;i++){const spark=document.createElement('span');spark.className='amusement-firework';spark.style.left='72%';spark.style.top='31%';world.querySelector('.amusement-stage')?.append(spark);nodes.push(spark);animate(spark,[{opacity:0,translate:'0 0'},{opacity:1,offset:.2},{opacity:0,translate:`${(i-4)*15}px ${-35-i*7}px`}],1800,i*70);}
 if(page===1){const arrival=document.createElement('img');arrival.className='amusement-portal';arrival.src='images/story/amusement-park-v1/entrance.png';arrival.alt='';world.querySelector('.amusement-stage')?.append(arrival);nodes.push(arrival);animate(arrival,[{opacity:0,clipPath:'circle(0% at 72% 31%)'},{opacity:1,clipPath:'circle(110% at 72% 31%)'}],2600,900);}
 chime();return;
 }
 if(page===17||page===18){const stage=world.querySelector('.amusement-stage');for(let group=0;group<3;group++)for(let i=0;i<16;i++){const dot=document.createElement('span');dot.className='amusement-firework';dot.style.left=(28+group*26)+'%';dot.style.top=(20+group%2*9)+'%';stage?.append(dot);nodes.push(dot);const angle=i*Math.PI/8;animate(dot,[{opacity:0,translate:'0 0',scale:.2},{opacity:1,offset:.2},{opacity:0,translate:`${Math.cos(angle)*65}px ${Math.sin(angle)*65}px`,scale:.6}],1800,group*350);}chime();return;}
 const action=data.scenes[page].objects.find(o=>o.id===id)?.action;
 if(action==='pirate')animate(art,[{rotate:'0deg'},{rotate:'-7deg'},{rotate:'7deg'},{rotate:'0deg'}],4000);
 else if(action==='carousel')animate(art,[{translate:'0 0'},{translate:'0 -7px'},{translate:'0 0'}],2600);
 else if(action==='coaster')animate(art,[{translate:'0 0',rotate:'0deg'},{translate:'8px -3px',rotate:'-1deg'},{translate:'0 0',rotate:'0deg'}],2000);
 else if(action==='teacups')animate(art,[{rotate:'0deg'},{rotate:'-2deg'},{rotate:'2deg'},{rotate:'0deg'}],3000);
 else if(action==='cabin')animate(art,[{translate:'0 0'},{translate:'0 -5px'},{translate:'0 0'}],3200);
 else animate(art,[{scale:1},{scale:1.025},{scale:1}],1800);
 chime();
 }
 return {interact(id:string){manual=true;action(id);},sentence(index:number,_text:string){if(index===0){manual=false;action();}},playback(running:boolean,paused:boolean){const play=!paused&&(running||manual);animations.forEach(a=>play?a.play():a.pause());if(ctx){if(!play)void ctx.suspend();else if(soundEnabled)void ctx.resume();}},sound(on:boolean){soundEnabled=on;if(!on){voices.forEach(v=>{try{v.stop();}catch{}});voices.clear();void ctx?.suspend();}},dispose(){disposed=true;clear();void ctx?.close();}};
}
