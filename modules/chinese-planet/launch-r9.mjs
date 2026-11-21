import {mountChinesePlanet} from './map-r9.mjs';

const url=(base,path)=>new URL(path,base);
export function chineseR9CourseDestination(base,kind,value,{validLiteracy,seconds=null}={}){
 if(kind==='literacy'){
  if(typeof validLiteracy!=='function'||!validLiteracy(value)||!/^\d{12,15}$/.test(value))return null;
  const dest=url(base,'chinese-practice.html');dest.searchParams.set('lesson',value);return dest;
 }
 if(kind==='original'){
  if(typeof value!=='string'||!/^zh-original-g6-[a-z][a-z0-9-]{1,49}$/.test(value))return null;
  const dest=url(base,'chinese-grade6.html');dest.searchParams.set('unit',value);
  if(Number.isInteger(seconds))dest.searchParams.set('seconds',String(Math.min(120,Math.max(5,seconds))));
  return dest;
 }
 if(kind==='outline'&&value?.kind==='outline'){
  const {grade,number,series}=value;
  if(![3,4].includes(grade)||!['lesson','reading'].includes(series)||
     !Number.isInteger(number)||number<1||number>(series==='lesson'?12:2))return null;
  let key;try{key=JSON.parse(String(value.id).slice(8));}catch{return null;}
  if(!String(value.id).startsWith('catalog:')||!Array.isArray(key)||key.length!==6||key[0]!==115||key[1]!=='康軒'||
     key[2]!==grade||!['上','下'].includes(key[3])||key[4]!==series||key[5]!==number)return null;
  const dest=url(base,'chinese-115-midgrade-catalog.html');
  dest.hash='catalog-'+grade+'-'+(key[3]==='上'?'upper':'lower')+'-'+series+'-'+number;
  return dest;
 }
 return null;
}

const defaultLoad=async signal=>{
 const res=await fetch(new URL('./course-titles-r9.json',import.meta.url),{signal});
 if(!res.ok)throw Error('Chinese course labels unavailable');
 return res.json();
};

export function openChineseR9({
 grade,seconds,isActive,watchSession,onClose,navigate,doc=document,mount=mountChinesePlanet,load=defaultLoad
}){
 if(typeof isActive!=='function'||!isActive()||typeof watchSession!=='function')return null;
 if(!Number.isInteger(grade)||grade<1||grade>6)return null;
 const dialog=doc.createElement('dialog'),pane=doc.createElement('div'),previous=doc.activeElement;
 const abort=new AbortController();
 dialog.className='han-r9-host';dialog.setAttribute('aria-label','國語星球 3D 探索');
 Object.assign(dialog.style,{position:'fixed',inset:'0',width:'100%',maxWidth:'none',height:'100%',maxHeight:'none',
   margin:'0',padding:'0',border:'0',overflow:'hidden',background:'#11283e',color:'#fff2d7'});
 pane.innerHTML='<button type="button" data-r9-close>← 傳統課程</button><p role="status">正在載入國語星球…</p>';
 dialog.append(pane);
 let active=true,installed=null,stopWatching=null,navigated=false;
 function close(restore=true){
  if(!active)return;
  active=false;abort.abort();installed?.destroy();installed=null;stopWatching?.();
  dialog.removeEventListener('cancel',cancel);
  doc.defaultView.removeEventListener('pagehide',hide);
  if(dialog.open)dialog.close();dialog.remove();onClose?.();
  if(restore&&isActive()&&previous?.isConnected)previous.focus();
 }
 function cancel(event){event.preventDefault();close();}
 function hide(){close(false);}
 function activeNow(){if(!active)return false;if(!isActive()){close(false);return false;}return true;}
 pane.querySelector('[data-r9-close]').addEventListener('click',()=>close());
 try{
  // Require subscription to the same signed-in session before showing the modal.
  const unsub=watchSession(()=>{if(!isActive())close(false);});
  if(typeof unsub!=='function')throw Error('Auth observer unavailable');
  if(!active){unsub();return null;}
  stopWatching=unsub;
  if(!activeNow())return null;
  doc.body.append(dialog);dialog.addEventListener('cancel',cancel);dialog.showModal();
  doc.defaultView.addEventListener('pagehide',hide);
  Promise.resolve().then(()=>activeNow()?load(abort.signal):null).then(lessons=>{
   if(!activeNow())return;
   if(!Array.isArray(lessons)||!lessons.length)throw Error('Chinese course labels invalid');
   const ids=new Set(lessons.map(x=>x.id));
   function launch(kind,value){
    if(navigated||!activeNow())return;
    const dest=chineseR9CourseDestination(doc.baseURI,kind,value,{seconds,validLiteracy:id=>ids.has(id)});
    if(!dest||dest.origin!==new URL(doc.baseURI).origin)return;
    navigated=true;close(false);
    if(isActive())(navigate??(destination=>doc.defaultView.location.assign(destination.href)))(dest);
   }
   installed=mount(pane,{lessons,lessonDisplayTitle:lesson=>lesson.displayTitle??lesson.title,initialGrade:grade,onClose:()=>close(),
    openLiteracy:id=>launch('literacy',id),openOriginal:id=>launch('original',id),showCatalogDetails:entry=>launch('outline',entry)});
  }).catch(()=>{
   if(!activeNow())return;
   const status=pane.querySelector('[role=status]');if(status)status.textContent='3D 地圖暫時無法載入，請回到傳統課程重試。';
  });
  return close;
 }catch(error){close(false);throw error;}
}
