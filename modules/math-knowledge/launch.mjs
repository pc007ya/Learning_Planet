// The host keeps login and the active learner mounted. No credentials cross frames.
export function openKnowledgeMap({ courses, records, onAction }) {
  if (document.querySelector('[data-knowledge-dialog]')) return;
  const opener = document.activeElement;
  const dialog = document.createElement('dialog');
  dialog.dataset.knowledgeDialog = 'grade1';
  dialog.setAttribute('aria-label', '小一數學知識星圖');
  dialog.style.cssText = 'width:100vw;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0;background:#080d24;';
  const frame = document.createElement('iframe');
  frame.src = new URL('../../math-knowledge-grade1.html', import.meta.url).href;
  frame.title = '小一數學知識星圖';
  frame.style.cssText = 'width:100%;height:100%;border:0;display:block';
  dialog.append(frame);
  const allowed = new Map(courses.map(course => [course.id, course]));
  function close() {
    window.removeEventListener('message', message);
    dialog.close();
    dialog.remove();
    opener?.focus();
  }
  function message(event) {
    if (event.origin !== location.origin || event.source !== frame.contentWindow) return;
    const data = event.data;
    if (data?.type === 'lp-knowledge-ready') {
      frame.contentWindow.postMessage({ type: 'lp-knowledge-init', courses, records }, location.origin);
    } else if (data?.type === 'lp-knowledge-close') {
      close();
    } else if (data?.type === 'lp-knowledge-action' && ['practice', 'video', 'teaching'].includes(data.action)) {
      const course = allowed.get(data.unitId);
      if (!course || data.action === 'video' && !course.hasVideo || data.action === 'teaching' && !course.hasTeaching) return;
      close();
      onAction(data.action, course);
    }
  }
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  window.addEventListener('message', message);
  document.body.append(dialog);
  dialog.showModal();
  return close;
}
