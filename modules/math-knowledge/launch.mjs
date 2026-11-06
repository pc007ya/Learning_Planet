import { catalog, mapPath, shortNames } from './catalog.mjs';

// Keep the learner mounted. Only the visible grade's course metadata and practice flags cross the frame.
export function openKnowledgeMap({ grade = 1, courses, records, onAction, forGrade }) {
  if (!catalog[grade] || document.querySelector('[data-knowledge-dialog]')) return;
  const opener = document.activeElement;
  const dialog = document.createElement('dialog');
  dialog.style.cssText = 'width:100vw;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0;background:#080d24;';
  const frame = document.createElement('iframe');
  frame.style.cssText = 'width:100%;height:100%;border:0;display:block';
  let activeGrade = grade;
  let payload;
  let allowed;
  function show(nextGrade, node) {
    const data = nextGrade === grade ? { courses, records } : forGrade?.(nextGrade);
    if (!data) return;
    activeGrade = nextGrade;
    const currentCourses = data.courses.filter(course => String(course.code).startsWith(nextGrade + '-'));
    allowed = new Map(currentCourses.map(course => [course.id, course]));
    payload = { type: 'lp-knowledge-init', courses: currentCourses,
      records: Object.fromEntries(currentCourses.map(course => [course.id, data.records[course.id]])) };
    dialog.dataset.knowledgeDialog = `grade${nextGrade}`;
    frame.title = `${shortNames[nextGrade]}數學知識星圖`;
    dialog.setAttribute('aria-label', frame.title);
    const url = new URL(`../../${mapPath(nextGrade, node)}`, import.meta.url).href;
    if (frame.isConnected) frame.contentWindow.location.replace(url);
    else frame.src = url;
  }
  function close() {
    window.removeEventListener('message', message);
    dialog.close();
    dialog.remove();
    opener?.focus();
  }
  function message(event) {
    if (event.origin !== location.origin || event.source !== frame.contentWindow) return;
    const data = event.data;
    if (!data || (data.grade ?? grade) !== activeGrade) return;
    if (data.type === 'lp-knowledge-ready') {
      frame.contentWindow.postMessage(payload, location.origin);
    } else if (data.type === 'lp-knowledge-jump') {
      const target = catalog[data.targetGrade];
      if (!Number.isInteger(data.targetGrade) || !target?.nodes.some(node => node.id === data.node && node.scope === 'core')) return;
      show(data.targetGrade, data.node);
    } else if (data.type === 'lp-knowledge-close') {
      close();
    } else if (data.type === 'lp-knowledge-action' && ['practice', 'video', 'teaching'].includes(data.action)) {
      const course = allowed.get(data.unitId);
      if (!course || data.action === 'video' && !course.hasVideo || data.action === 'teaching' && !course.hasTeaching) return;
      close();
      onAction(data.action, course);
    }
  }
  show(grade);
  dialog.append(frame);
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  window.addEventListener('message', message);
  document.body.append(dialog);
  dialog.showModal();
  return close;
}
