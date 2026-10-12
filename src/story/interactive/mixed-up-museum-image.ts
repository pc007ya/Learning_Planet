import {museumImage} from './mixed-up-museum';
import './mixed-up-museum.css';

export function fitMuseumImage(width:number,height:number){
 const w=Math.min(Math.max(0,width),Math.max(0,height)*1.5);return {width:w,height:w/1.5};
}

/** One selected page, one image src. Resize fitting never creates another request. */
export function mountMuseumImage(world:HTMLElement,page:number,explore:()=>void){
 const art=museumImage(page);world.classList.add('museum-full-image-world');
 const frame=document.createElement('div');frame.className='museum-full-image-frame';
 const image=document.createElement('img');image.className='museum-full-image';image.alt=art.alt;image.width=art.width;image.height=art.height;image.decoding='async';
 const tap=document.createElement('button');tap.type='button';tap.className='museum-picture-tap';tap.dataset.object='illustration';tap.setAttribute('aria-label',`探索 ${art.alt}`);tap.onclick=explore;
 const star=document.createElement('span');star.className='hotspot-spark';star.textContent='✦';star.setAttribute('aria-hidden','true');tap.append(star);
 const focus=document.createElement('span');focus.className='museum-image-focus';focus.dataset.museumFocus='';focus.setAttribute('aria-hidden','true');
 const anchors:[number,number][]=[[63,36],[49,44],[72,46],[58,25],[43,66],[46,50],[38,81],[38,49],[49,56],[54,57],[51,61],[58,56],[57,52],[66,82],[63,60],[45,68],[66,60],[55,82],[52,41],[66,69]];
 const anchor=anchors[page];
 focus.style.left=anchor[0]+'%';focus.style.top=anchor[1]+'%';
 star.style.left=(page<2?anchor[0]:95)+'%';star.style.top=(page<2?anchor[1]:92)+'%';
 const status=document.createElement('div');status.className='museum-image-status';status.setAttribute('role','status');status.hidden=true;
 const retry=document.createElement('button');retry.type='button';retry.textContent='再試一次';
 let disposed=false;
 const fit=()=>{if(disposed)return;const rect=world.getBoundingClientRect();const size=fitMuseumImage(rect.width,rect.height);frame.style.width=size.width+'px';frame.style.height=size.height+'px';};
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
