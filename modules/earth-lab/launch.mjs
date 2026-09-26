// Keep the authenticated host mounted; no identity is copied into storage or URLs.
export function openEarthLab() {
  if (document.querySelector('dialog[data-earth-lab-dialog]')) return;
  const opener = document.activeElement;
  const dialog = document.createElement('dialog');
  dialog.dataset.earthLabDialog = 'true';
  dialog.setAttribute('aria-label', '地球與月球觀測台');
  dialog.style.cssText = 'width:100vw;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0;background:#060f1e;';
  const frame = document.createElement('iframe');
  frame.src = new URL('../../science-earth-lab.html', import.meta.url).href;
  frame.title = '地球與月球觀測台';
  frame.style.cssText = 'width:100%;height:100%;border:0;display:block';
  const close = () => {
    window.removeEventListener('message', message);
    dialog.close();
    frame.remove();
    dialog.remove();
    if (opener?.isConnected) opener.focus();
  };
  const message = event => {
    if (event.origin === location.origin && event.source === frame.contentWindow && event.data?.type === 'earth-lab-close') close();
  };
  window.addEventListener('message', message);
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  dialog.append(frame);
  document.body.append(dialog);
  dialog.showModal();
}
window.LearningPlanetEarthLab = { open: openEarthLab };
