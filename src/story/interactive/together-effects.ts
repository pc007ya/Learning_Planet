/** Effects for the approved fairy and knight books. All timers are owned Web Animations. */
export function createTogetherEffects(world:HTMLElement,book:'fairy'|'knight',page:number,soundEnabled:boolean){
let manual=false,disposed=false,context:AudioContext|undefined;
const animations=new Set<Animation>(),nodes:HTMLElement[]=[],sources=new Set<AudioScheduledSourceNode>();
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const obj=(id:string)=>world.querySelector<HTMLElement>(`[data-object="${id}"]`);
function show(id:string,on:boolean){const n=obj(id);if(n){n.style.visibility=on?'visible':'hidden';n.setAttribute('aria-hidden',String(!on));if(n instanceof HTMLButtonElement)n.disabled=!on;}}
function anim(n:HTMLElement|undefined|null,frames:Keyframe[],ms=900,delay=0){if(!n)return;const a=n.animate(frames,{duration:reduced?100:ms,delay:reduced?0:delay,fill:'forwards',easing:'ease-in-out'});animations.add(a);return a;}
function after(ms:number,fn:()=>void){const a=world.animate([{},{}],{duration:ms});animations.add(a);a.onfinish=()=>{if(!disposed)fn();};}
function clear(){animations.forEach(a=>{a.onfinish=null;a.cancel();});animations.clear();nodes.splice(0).forEach(n=>n.remove());sources.forEach(s=>{try{s.stop();}catch{}});sources.clear();}
function tone(frequency=620,duration=.25,gain=.02){if(!soundEnabled||disposed)return;context??=new AudioContext();void context.resume();const o=context.createOscillator(),g=context.createGain(),t=context.currentTime;o.type='sine';o.frequency.value=frequency;g.gain.setValueAtTime(gain,t);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g).connect(context.destination);sources.add(o);o.onended=()=>sources.delete(o);o.start();o.stop(t+duration);}
function gesture(id:string,angle=3){anim(obj(id),[{rotate:'0deg'},{rotate:angle+'deg',offset:.45},{rotate:'0deg'}],950);}
function move(id:string,x:number,y:number,ms=1000){anim(obj(id),[{translate:'0 0'},{translate:`${x}px ${y}px`}],ms);}
function portal(arrive:boolean){const n=obj(book==='fairy'?'wand':'shield');if(!n)return;tone(880,.9,.025);for(let i=0;i<8;i++){const p=document.createElement('i');p.className='together-portal '+book;p.setAttribute('aria-hidden','true');n.append(p);nodes.push(p);anim(p,[{opacity:0,scale:'.2',translate:'0 0'},{opacity:.9,offset:.25},{opacity:0,scale:'3',translate:`${(i%3-1)*50}px ${-40-i*12}px`}],1700,i*100);}if(arrive){const a=document.createElement('img');a.src=`images/story/${book}-v1/${book==='fairy'?'meadow':'festival'}.png`;a.alt='';a.className='together-arrival';world.append(a);nodes.push(a);anim(a,[{opacity:0},{opacity:1}],900,1300);}}
function replace(oldId:string,newId:string){show(oldId,false);show(newId,false);after(200,()=>{show(newId,true);});}
function fairy(){
if(page<2||page===19){portal(page===1);return;}
if(page===2){move('bucket',40,-20);gesture('fairy');}
else if(page===3){move('parcel',35,-15);gesture('fairy');}
else if(page===4){move('parcel',-20,-25);gesture('fairy');}
else if(page===5){anim(obj('cart'),[{translate:'0 0'},{translate:'5px 0',offset:.45},{translate:'0 0'}],1100);gesture('fairy',-4);tone(160,.2,.009);}
else if(page===6||page===7){gesture('cart',1);}
else if(page===8||page===9){anim(obj('fairy'),[{translate:'0 0'},{translate:'0 3px',offset:.5},{translate:'0 0'}],2000);}
else if(page===12){gesture('fairy',-2);}
else if(page===15){move('bucket',world.clientWidth*(-.27),world.clientHeight*.01);move('parcel',world.clientWidth*.27,world.clientHeight*.04);gesture('squirrel');gesture('hedgehog',-3);}
else if(page===14){gesture('ribbon',12);}
else if(page>=16){gesture('fairy');gesture('squirrel',-2);gesture('hedgehog');if(page===17)tone(660,.4,.012);}
else gesture('fairy');
}
function knight(){
if(page===0||page===19){portal(page===0);return;}
if(page===1||page===2||page===3){move('knight',-70,0,1300);gesture('flag',2);tone(280,.09,.009);}
else if(page===5||page===6){anim(obj('flat'),[{scale:'1',rotate:'0deg'},{scale:'1 .94',rotate:'-2deg',offset:.4},{scale:'1',rotate:'0deg'}],900);gesture('knight',-4);}
else if(page===11){show('flat',true);show('tent',false);gesture('boy');gesture('girl',-2);after(reduced?100:700,()=>replace('flat','tent'));}
else if(page===12){move('peg',0,4);gesture('adult',1);}
else if(page===13){gesture('adult',2);tone(180,.12,.018);after(400,()=>tone(160,.12,.015));}
else if(page===14){gesture('knight',-2);gesture('girl',2);gesture('boy',-2);}
else if(page===15){gesture('adult',1);gesture('tent',.3);}
else if(page===16){move('flag',0,-18);tone(720,.4,.012);}
else if(page===17||page===18){['gail','knight','girl','boy'].forEach((id,i)=>gesture(id,i%2?2:-2));}
else gesture('knight',2);
}
function action(){if(disposed)return;clear();if(book==='fairy')fairy();else knight();}
if(book==='knight'&&page===11)show('tent',false);
return {interact(_id:string){manual=true;action();},sentence(index:number,_text:string){if(index===0){manual=false;action();}},playback(running:boolean,paused:boolean){animations.forEach(a=>{if(paused||(!running&&!manual))a.pause();else a.play();});if(context){if(paused||!running)void context.suspend();else if(soundEnabled)void context.resume();}},sound(enabled:boolean){soundEnabled=enabled;if(!enabled){sources.forEach(s=>{try{s.stop();}catch{}});sources.clear();void context?.suspend();}},dispose(){disposed=true;clear();void context?.close();}};
}

