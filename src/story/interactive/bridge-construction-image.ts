import {bridgeImage} from './bridge-construction';
import './bridge-construction.css';

export function fitBridgeImage(width:number,height:number){
 const w=Math.min(Math.max(0,width),Math.max(0,height)*1.5);return {width:w,height:w/1.5};
}

/** One selected page, one image src. Resize fitting never creates another request. */
export function mountBridgeImage(world:HTMLElement,page:number,explore:()=>void){
 const art=bridgeImage(page);world.classList.add('bridge-full-image-world');
 const frame=document.createElement('div');frame.className='bridge-full-image-frame';
 const image=document.createElement('img');image.className='bridge-full-image';image.alt=art.alt;image.width=art.width;image.height=art.height;image.decoding='async';
 const tap=document.createElement('button');tap.type='button';tap.className='bridge-picture-tap';tap.dataset.object='illustration';tap.setAttribute('aria-label',`探索 ${art.alt}`);tap.onclick=explore;
 const star=document.createElement('span');star.className='hotspot-spark';star.textContent='✦';star.setAttribute('aria-hidden','true');tap.append(star);
 const focus=document.createElement('span');focus.className='bridge-image-focus';focus.dataset.bridgeFocus='';focus.setAttribute('aria-hidden','true');
 const anchors:[number,number][]=[[62,78],[54,80],[68,48],[65,61],[37,71],[65,56],[58,62],[51,72],[57,70],[55,64],[49,68],[60,67],[59,67],[73,73],[69,60],[65,59],[64,59],[59,58],[66,81],[65,79]];
 const anchor=anchors[page];
 focus.style.left=anchor[0]+'%';focus.style.top=anchor[1]+'%';
 star.style.left=(page<2?anchor[0]:95)+'%';star.style.top=(page<2?anchor[1]:92)+'%';
 const status=document.createElement('div');status.className='bridge-image-status';status.setAttribute('role','status');status.hidden=true;
 const retry=document.createElement('button');retry.type='button';retry.textContent='再試一次';
 let disposed=false;
 const fit=()=>{if(disposed)return;const rect=world.getBoundingClientRect();const size=fitBridgeImage(rect.width,rect.height);frame.style.width=size.width+'px';frame.style.height=size.height+'px';};
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
