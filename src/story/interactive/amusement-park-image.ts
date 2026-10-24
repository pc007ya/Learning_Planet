import data from '../amusement-park/data.json';
const amusementId=(id:string)=>id.replaceAll(' ','-');
import './amusement-park.css';
export function mountAmusementScene(world:HTMLElement,page:number,explore:(id:string)=>void,interactive=true){
 const scene=data.scenes[page];world.classList.add('amusement-layered-world');const frame=document.createElement('div');frame.className='amusement-stage';
 const bg=document.createElement('img');bg.className='amusement-background';bg.src='images/story/amusement-park-v1/'+scene.background;bg.alt=scene.title;frame.append(bg);
 const ratio=scene.background==='bedroom.png'?752/498:16/9;
 for(const o of scene.objects){const asset=data.assets[o.asset as keyof typeof data.assets];const box=document.createElement('button');box.type='button';box.className='object amusement-object';box.dataset.object=amusementId(o.id);box.dataset.word=o.word;box.setAttribute('aria-label','探索 '+o.word);box.onclick=()=>explore(amusementId(o.id));box.disabled=!interactive;box.style.cssText=`left:${o.x}%;top:${o.y}%;width:${o.w}%;height:${o.h}%;z-index:${'z' in o?o.z:2}`;
 const art=document.createElement('span');art.className='sprite-art amusement-art';const img=document.createElement('img');img.src='images/story/amusement-park-v1/'+asset.image;img.alt='';img.draggable=false;art.append(img);
 box.append(art);const label=document.createElement('span');label.className='object-label';label.textContent=o.word;const star=document.createElement('span');star.className='hotspot-spark';star.textContent='✦';box.append(label,star);frame.append(box);}
 if(page===18){for(let group=0;group<3;group++){const burst=document.createElement('span');burst.className='amusement-resting-firework';burst.style.left=(28+group*27)+'%';burst.style.top=(20+group%2*8)+'%';burst.style.color=['#ffe39c','#ffc3ef','#a0e5ff'][group];burst.setAttribute('aria-hidden','true');for(let ray=0;ray<16;ray++){const line=document.createElement('i');line.style.rotate=(ray*22.5)+'deg';burst.append(line);}frame.append(burst);}}
 world.append(frame);let disposed=false;const fit=()=>{if(disposed)return;const r=world.getBoundingClientRect();const width=Math.min(r.width,r.height*ratio);frame.style.width=width+'px';frame.style.height=width/ratio+'px';};
 const observer=new ResizeObserver(fit);observer.observe(world);const raf=requestAnimationFrame(fit);window.addEventListener('resize',fit);return()=>{disposed=true;observer.disconnect();cancelAnimationFrame(raf);window.removeEventListener('resize',fit);frame.remove();};
}
