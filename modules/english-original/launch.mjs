import {waitForOverlayHistory,leaveOverlayHistory} from '../science-curriculum/overlay-history.mjs';
let session=null,openingGeneration=0;
export async function openEnglishOriginal({learnerId,grade=1,isActive=()=>false,onClose=()=>{}}={}){
 if(typeof learnerId!=='string'||!learnerId.trim()||learnerId.length>160||!isActive())throw Error('Active learner required');
 const request=++openingGeneration;if(session)await session();await waitForOverlayHistory();if(request!==openingGeneration||!isActive())return()=>{};
 const controller=new AbortController(),token=crypto.randomUUID(),marker='lpEnglishOriginal',priorState=history.state,previousFocus=document.activeElement;
 let closed=false,closing=null,pushed=false,timer=null;const dialog=document.createElement('dialog'),frame=document.createElement('iframe');
 dialog.setAttribute('aria-label','英文原創延伸課程');dialog.style.cssText='width:min(1100px,96vw);height:94dvh;max-width:96vw;max-height:96dvh;padding:0;border:1px solid #91b6e5;border-radius:16px;background:#101a37;color:#eaf3ff;';
 const bar=document.createElement('div'),title=document.createElement('strong'),button=document.createElement('button');bar.style.cssText='display:flex;align-items:center;gap:12px;padding:10px 16px';title.textContent='英文原創延伸｜本機進度，非出版社同步';button.textContent='返回英文星球';button.type='button';button.style.cssText='margin-left:auto;font:inherit;padding:8px;cursor:pointer';bar.append(title,button);
 frame.title='英文課文、傳統列表與3D課程地圖';frame.style.cssText='display:block;width:100%;height:calc(100% - 64px);border:0';frame.name=token;frame.src=new URL('./index.html?v=20261117-r33',import.meta.url).href;
 const active=()=>{try{return !closed&&!controller.signal.aborted&&isActive()===true;}catch(_){return false;}};
 const registry=window.__LPEnglishOriginalHosts ||= new Map();registry.set(token,source=>{if(source!==frame.contentWindow||!active())return null;registry.delete(token);return{learnerId,grade,isActive:active,signal:controller.signal};});
 async function close(fromHistory=false){if(closing)return closing;if(closed)return;closed=true;registry.delete(token);controller.abort();try{frame.contentWindow?.LPEnglishCandidate?.dispose();}catch(_){}clearInterval(timer);window.removeEventListener('popstate',pop);window.removeEventListener('pagehide',pagehide);dialog.removeEventListener('cancel',cancel);try{dialog.close();}catch(_){}dialog.remove();if(session===close)session=null;
 closing=(async()=>{try{if(!fromHistory&&pushed)await leaveOverlayHistory({marker,token,restoreState:priorState});}finally{if(previousFocus?.isConnected)previousFocus.focus?.();onClose();}})();return closing;}
 function pop(){if(history.state?.[marker]!==token)void close(true);}function cancel(e){e.preventDefault();void close();}function pagehide(){void close(true);}
 button.onclick=()=>void close();dialog.addEventListener('cancel',cancel);window.addEventListener('popstate',pop);window.addEventListener('pagehide',pagehide);dialog.append(bar,frame);document.body.append(dialog);session=close;
 try{dialog.showModal();if(!active()){await close(true);return close;}history.pushState({...priorState,[marker]:token},'');pushed=true;timer=setInterval(()=>{if(!active())void close();},200);button.focus();}catch(e){await close();throw e;}return close;
}
