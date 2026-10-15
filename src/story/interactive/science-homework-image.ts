import {scienceImage} from './science-homework';
import './science-homework.css';

export function fitScienceImage(width:number,height:number,ratio=16/9){
 const w=Math.min(Math.max(0,width),Math.max(0,height)*ratio);return {width:w,height:w/ratio};
}

/** One selected page, one image src. Resize fitting never creates another request. */
export function mountScienceImage(world:HTMLElement,page:number,explore:()=>void){
 const art=scienceImage(page);world.classList.add('science-full-image-world');
 const frame=document.createElement('div');frame.className='science-full-image-frame';
 const image=document.createElement('img');image.className='science-full-image';image.alt=art.alt;image.width=art.width;image.height=art.height;image.decoding='async';image.loading='lazy';
 const tap=document.createElement('button');tap.type='button';tap.className='science-picture-tap';tap.dataset.object='illustration';tap.setAttribute('aria-label',`探索 ${art.alt}`);tap.onclick=explore;
 const star=document.createElement('span');star.className='hotspot-spark';star.textContent='✦';star.setAttribute('aria-hidden','true');tap.append(star);
 const focus=document.createElement('span');focus.className='science-image-focus';focus.dataset.scienceFocus='';focus.setAttribute('aria-hidden','true');
 const anchors:[number,number][]=[[75,38],[48,85],[31,62],[55,55],[78,20],[78,42],[47,75],[37,80],[79,75],[80,62],[84,84],[26,78],[76,50],[63,74],[51,71],[82,50],[73,81],[58,82],[62,74],[61,55]];
 const anchor=anchors[page];
 focus.style.left=anchor[0]+'%';focus.style.top=anchor[1]+'%';
 star.style.left=anchor[0]+'%';star.style.top=anchor[1]+'%';
 const status=document.createElement('div');status.className='science-image-status';status.setAttribute('role','status');status.hidden=true;
 const retry=document.createElement('button');retry.type='button';retry.textContent='再試一次';
 let disposed=false;
 const fit=()=>{if(disposed)return;const rect=world.getBoundingClientRect();const size=fitScienceImage(rect.width,rect.height,art.width/art.height);frame.style.width=size.width+'px';frame.style.height=size.height+'px';};
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
