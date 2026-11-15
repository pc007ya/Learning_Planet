/** A viewport fallback also works on iPad browsers without element fullscreen. */
export function createNatureFullscreen({element,button}) {
 const doc=element.ownerDocument,win=doc.defaultView;
 let active=false,placeholder=null,disposed=false,previousOverflow='';
 function exit(){
  if(!active)return;
  active=false;
  element.classList.remove('nature-fullscreen');
  if(placeholder?.parentNode){placeholder.parentNode.insertBefore(element,placeholder);placeholder.remove();}
  placeholder=null;doc.body.style.overflow=previousOverflow;
  button.textContent='⛶';button.setAttribute('aria-label','全畫面探索');button.setAttribute('aria-pressed','false');
  if(doc.fullscreenElement===element)Promise.resolve(doc.exitFullscreen?.()).catch(()=>{});
  win?.dispatchEvent(new win.Event('resize'));
 }
 async function toggle(){
  if(disposed)return;if(active){exit();return;}
  active=true;placeholder=doc.createComment('nature fullscreen return');element.parentNode.insertBefore(placeholder,element);
  previousOverflow=doc.body.style.overflow;doc.body.style.overflow='hidden';doc.body.append(element);
  element.classList.add('nature-fullscreen');button.textContent='✕';button.setAttribute('aria-label','離開全畫面');button.setAttribute('aria-pressed','true');
  // CSS viewport mode is immediate; native fullscreen is an optional enhancement.
  try{await element.requestFullscreen?.();if(!active&&doc.fullscreenElement===element)await doc.exitFullscreen?.();}catch(_){}
  win?.dispatchEvent(new win.Event('resize'));
 }
 function changed(){if(active&&!doc.fullscreenElement&&wasNative){exit();}wasNative=doc.fullscreenElement===element;}
 let wasNative=false;
 const key=e=>{if(e.key==='Escape'&&active){e.preventDefault();exit();}};
 doc.addEventListener('fullscreenchange',changed);doc.addEventListener('keydown',key);
 button.setAttribute('aria-pressed','false');
 return {toggle,exit,dispose(){exit();disposed=true;doc.removeEventListener('fullscreenchange',changed);doc.removeEventListener('keydown',key);}};
}
