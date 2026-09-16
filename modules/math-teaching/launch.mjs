// Modal keeps the existing student page and its login state mounted.
document.addEventListener('click',e=>{
  if(!e.target.closest('[data-math-teaching-open]'))return;
  if(document.querySelector('dialog[data-math-teaching-dialog]'))return;
  const opener=e.target.closest('button');const dialog=document.createElement('dialog');dialog.dataset.mathTeachingDialog='true';
  dialog.style.cssText='width:100vw;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0;background:#09152c;';
  const frame=document.createElement('iframe');const lesson=opener?.dataset.mathTeachingOpen;const url=new URL(lesson==='mul'?'../../math-multiplication.html':'../../math-teaching.html',import.meta.url);if(['ten','add','sub'].includes(lesson))url.searchParams.set('lesson',lesson);if(opener?.dataset.mathTeachingMax==='50')url.searchParams.set('max','50');frame.src=url.href;frame.title='數學互動教學桌';frame.style.cssText='width:100%;height:100%;border:0;display:block';dialog.append(frame);
  const close=()=>{dialog.close();dialog.remove();window.removeEventListener('message',message);opener?.focus();};
  const message=event=>{if(event.origin===location.origin&&event.source===frame.contentWindow&&event.data?.type==='math-teaching-close')close();};
  window.addEventListener('message',message);dialog.addEventListener('cancel',e=>{e.preventDefault();close();});document.body.append(dialog);dialog.showModal();
});
