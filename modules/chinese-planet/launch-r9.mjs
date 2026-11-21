import {mountChinesePlanet} from './map-r9.mjs?v=20261121-r10';

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
 grade,seconds,expectedUid,isActive,watchSession,onClose,doc=document,mount=mountChinesePlanet,load=defaultLoad
}){
 if(typeof expectedUid!=='string'||!expectedUid||typeof isActive!=='function'||!isActive()||typeof watchSession!=='function')return null;
 if(!Number.isInteger(grade)||grade<1||grade>6)return null;
 const dialog=doc.createElement('dialog'),pane=doc.createElement('div'),previous=doc.activeElement;
 const abort=new AbortController();
 dialog.className='han-r9-host';dialog.setAttribute('aria-label','國語星球 3D 探索');
 Object.assign(dialog.style,{position:'fixed',inset:'0',width:'100%',maxWidth:'none',height:'100%',maxHeight:'none',
   margin:'0',padding:'0',border:'0',overflow:'hidden',background:'#11283e',color:'#fff2d7'});
 pane.innerHTML='<button type="button" data-r9-close>← 傳統課程</button><p role="status">正在載入國語星球…</p>';
 dialog.append(pane);
 let active=true,installed=null,stopWatching=null,course=null;
 function clearCourse(restore=false){
  if(!course)return;
  const old=course;course=null;
  old.disconnect?.();doc.defaultView.clearTimeout(old.timeout);
  old.cover.remove();
  if(!restore)return;
  pane.inert=false;pane.removeAttribute('aria-hidden');pane.style.visibility='';
  installed?.setPaused?.(false);
  if(old.previous?.isConnected)old.previous.focus();
 }
 function showCourse(destination){
  if(course||!activeNow())return;
  const cover=doc.createElement('section'),nav=doc.createElement('nav'),button=doc.createElement('button');
  const frame=doc.createElement('iframe'),status=doc.createElement('p');
  const saved={cover,frame,previous:doc.activeElement,timeout:null,disconnect:null};course=saved;
  Object.assign(cover.style,{position:'absolute',inset:'0',display:'flex',flexDirection:'column',
    background:'#0c1830',color:'#ecf2ff',overflow:'hidden',zIndex:'10'});
  Object.assign(nav.style,{padding:'6px 12px',display:'flex',justifyContent:'flex-end',background:'#111d39'});
  Object.assign(button.style,{minHeight:'44px',padding:'4px 14px',borderRadius:'12px',background:'#182a53',
    color:'#fff',border:'1px solid #7397d4',font:'inherit'});
  button.type='button';button.textContent='← 返回國語 3D 地圖';
  button.addEventListener('click',()=>requestCourseReturn());
  nav.append(button);
  status.textContent='正在載入課程…';status.setAttribute('role','status');status.style.padding='16px';
  frame.title='國語星球課程';
  // Same-origin, already-protected course; never allow this frame to replace the parent.
  frame.setAttribute('sandbox','allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox');
  Object.assign(frame.style,{flex:'1 1 0',minHeight:'0',width:'100%',border:'0',visibility:'hidden'});
  frame.inert=true;
  function requestCourseReturn(){
   if(course!==saved||!activeNow())return;
   // The grade-6 writing editor already declares when leaving would discard work.
   if(saved.isWritingPage){
    try{
     const target=frame.contentWindow;
     const leaving=new target.Event('beforeunload',{cancelable:true});
     if(!target.dispatchEvent(leaving)&&!doc.defaultView.confirm('離開會捨棄未儲存的內容，仍要返回 3D 地圖嗎？'))return;
    }catch{}
   }
   clearCourse(true);
  }
  saved.requestReturn=requestCourseReturn;
  function lockFrame(){
   frame.inert=true;frame.style.visibility='hidden';status.hidden=false;
  }
  function fail(){
   if(course!==saved)return;
   lockFrame();status.textContent='課程暫時無法驗證或載入，請返回 3D 地圖重試。';
  }
  frame.addEventListener('load',()=>{
   if(course!==saved||!activeNow())return;
   saved.disconnect?.();lockFrame();saved.isWritingPage=false;
   status.textContent='正在載入課程…';
   try{
    const child=frame.contentDocument,childURL=new URL(child.URL);
    const coursePaths=['chinese-practice.html','chinese-grade6.html','chinese-115-midgrade-catalog.html']
       .map(path=>new URL(path,doc.baseURI).pathname);
    if(childURL.origin!==destination.origin||!coursePaths.includes(childURL.pathname)){fail();return;}
    saved.isWritingPage=childURL.pathname===coursePaths[1];
    const protectedContent=child.querySelector('[data-auth-content]');
    if(!protectedContent){fail();return;}
    const sync=()=>{
     if(course!==saved||!activeNow())return;
     if(protectedContent.hidden||!protectedContent.dataset.authUid){lockFrame();return;}
     if(protectedContent.dataset.authUid!==expectedUid){fail();return;}
     doc.defaultView.clearTimeout(saved.timeout);
     status.hidden=true;frame.inert=false;frame.style.visibility='';
    };
    const observer=new doc.defaultView.MutationObserver(sync);
    observer.observe(protectedContent,{attributes:true,attributeFilter:['hidden','data-auth-uid']});
    // The workbook's existing return button must close this layer, not reload the application.
    // Also catch its and grade 6's links to the shell without intercepting links to study material.
    const returnButton=event=>{
     const control=event.target?.closest?.('header button[data-action=return]');
     if(course!==saved||!control||!activeNow())return;
     event.preventDefault();event.stopImmediatePropagation();requestCourseReturn();
    };
    const returnLink=event=>{
     if(course!==saved||event.defaultPrevented||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.button>0)return;
     const link=event.target?.closest?.('header a[href]');
     if(!link||link.target==='_blank'||!activeNow())return;
     if(new URL(link.href,child.baseURI).href!==new URL('index.html',doc.baseURI).href)return;
     event.preventDefault();clearCourse(true);
    };
    child.addEventListener('click',returnButton,true);child.addEventListener('click',returnLink);
    saved.disconnect=()=>{observer.disconnect();child.removeEventListener('click',returnButton,true);child.removeEventListener('click',returnLink);};
    sync();
   }catch{fail();}
  });
  pane.inert=true;pane.setAttribute('aria-hidden','true');pane.style.visibility='hidden';installed?.setPaused?.(true);
  frame.src=destination.href;cover.append(nav,status,frame);dialog.append(cover);
  saved.timeout=doc.defaultView.setTimeout(fail,15000);
  button.focus();
 }
 function close(restore=true){
  if(!active)return;
  active=false;abort.abort();clearCourse();installed?.destroy();installed=null;stopWatching?.();
  dialog.removeEventListener('cancel',cancel);
  doc.defaultView.removeEventListener('pagehide',hide);
  if(dialog.open)dialog.close();dialog.remove();onClose?.();
  if(restore&&isActive()&&previous?.isConnected)previous.focus();
 }
 function cancel(event){event.preventDefault();if(course)course.requestReturn();else close();}
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
    if(course||!activeNow())return;
    const dest=chineseR9CourseDestination(doc.baseURI,kind,value,{seconds,validLiteracy:id=>ids.has(id)});
    if(!dest||dest.origin!==new URL(doc.baseURI).origin)return;
    showCourse(dest);
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
