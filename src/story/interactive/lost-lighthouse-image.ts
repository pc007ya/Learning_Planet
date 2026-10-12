import {lighthouseImage} from './lost-lighthouse';
import './lost-lighthouse.css';

export function fitLighthouseImage(width:number,height:number){
 const w=Math.min(Math.max(0,width),Math.max(0,height)*1.5);return {width:w,height:w/1.5};
}

/** One selected page, one image src. Resize fitting never creates another request. */
export function mountLighthouseImage(world:HTMLElement,page:number,explore:()=>void){
 const art=lighthouseImage(page);world.classList.add('lighthouse-full-image-world');
 const frame=document.createElement('div');frame.className='lighthouse-full-image-frame';
 const image=document.createElement('img');image.className='lighthouse-full-image';image.alt=art.alt;image.width=art.width;image.height=art.height;image.decoding='async';
 const tap=document.createElement('button');tap.type='button';tap.className='lighthouse-picture-tap';tap.dataset.object='illustration';tap.setAttribute('aria-label',`探索 ${art.alt}`);tap.onclick=explore;
 const star=document.createElement('span');star.className='hotspot-spark';star.textContent='✦';star.setAttribute('aria-hidden','true');tap.append(star);
 const focus=document.createElement('span');focus.className='lighthouse-image-focus';focus.dataset.lighthouseFocus='';focus.setAttribute('aria-hidden','true');
 const anchors:[number,number][]=[[59,48],[65,57],[60,68],[80,34],[69,70],[32,47],[73,38],[77,42],[63,57],[83,58],[68,62],[78,63],[85,67],[55,58],[82,60],[70,37],[74,63],[52,75],[72,66],[59,48]];
 const anchor=anchors[page];
 focus.style.left=anchor[0]+'%';focus.style.top=anchor[1]+'%';
 star.style.left=(page<2?anchor[0]:95)+'%';star.style.top=(page<2?anchor[1]:92)+'%';
 const status=document.createElement('div');status.className='lighthouse-image-status';status.setAttribute('role','status');status.hidden=true;
 const retry=document.createElement('button');retry.type='button';retry.textContent='再試一次';
 let disposed=false;
 const fit=()=>{if(disposed)return;const rect=world.getBoundingClientRect();const size=fitLighthouseImage(rect.width,rect.height);frame.style.width=size.width+'px';frame.style.height=size.height+'px';};
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
