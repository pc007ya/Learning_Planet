import {potionImage} from './magic-potion';
import './magic-potion.css';

export function fitPotionImage(width:number,height:number){
 const w=Math.min(Math.max(0,width),Math.max(0,height)*1.5);return {width:w,height:w/1.5};
}

/** One selected page, one image src. Resize fitting never creates another request. */
export function mountPotionImage(world:HTMLElement,page:number,explore:()=>void){
 const art=potionImage(page);world.classList.add('potion-full-image-world');
 const frame=document.createElement('div');frame.className='potion-full-image-frame';
 const image=document.createElement('img');image.className='potion-full-image';image.alt=art.alt;image.width=art.width;image.height=art.height;image.decoding='async';
 const tap=document.createElement('button');tap.type='button';tap.className='potion-picture-tap';tap.dataset.object='illustration';tap.setAttribute('aria-label',`探索 ${art.alt}`);tap.onclick=explore;
 const star=document.createElement('span');star.className='hotspot-spark';star.textContent='✦';star.setAttribute('aria-hidden','true');tap.append(star);
 const focus=document.createElement('span');focus.className='potion-image-focus';focus.dataset.potionFocus='';focus.setAttribute('aria-hidden','true');
 const anchors:[number,number][]=[[56,80],[46,80],[57,55],[40,44],[52,57],[50,63],[24,85],[51,63],[43,54],[72,62],[61,56],[37,47],[48,53],[54,71],[48,68],[65,77],[51,78],[62,77],[18,64],[54,81]];
 const anchor=anchors[page];
 focus.style.left=anchor[0]+'%';focus.style.top=anchor[1]+'%';
 star.style.left=(page<2?anchor[0]:95)+'%';star.style.top=(page<2?anchor[1]:92)+'%';
 const status=document.createElement('div');status.className='potion-image-status';status.setAttribute('role','status');status.hidden=true;
 const retry=document.createElement('button');retry.type='button';retry.textContent='再試一次';
 let disposed=false;
 const fit=()=>{if(disposed)return;const rect=world.getBoundingClientRect();const size=fitPotionImage(rect.width,rect.height);frame.style.width=size.width+'px';frame.style.height=size.height+'px';};
 image.onload=()=>{if(disposed)return;status.hidden=true;fit();};
 image.onerror=()=>{if(disposed)return;status.hidden=false;status.replaceChildren(document.createTextNode('圖片暫時無法載入。'),retry);};
 retry.onclick=()=>{if(!disposed){status.hidden=true;image.src=art.image;}};
 frame.append(image,tap,focus,status);world.append(frame);
 // Set src only after mounting this selected page. No neighboring-page preload.
 image.src=art.image;
 const observer=typeof ResizeObserver==='undefined'?undefined:new ResizeObserver(fit);observer?.observe(world);
 window.addEventListener('resize',fit);const raf=requestAnimationFrame(fit);
 return ()=>{disposed=true;observer?.disconnect();window.removeEventListener('resize',fit);cancelAnimationFrame(raf);image.onload=null;image.onerror=null;retry.onclick=null;tap.onclick=null;frame.remove();};
}
