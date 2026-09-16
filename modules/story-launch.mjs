// Keep the authenticated home mounted while navigating the story library/books.
document.addEventListener('click', event => {
  const link = event.target.closest('a[data-subject="story"]');
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  if (document.querySelector('dialog[data-story-dialog]')) return;
  const dialog = document.createElement('dialog');
  dialog.dataset.storyDialog = 'true';
  dialog.style.cssText = 'width:100vw;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0;background:#071025';
  const frame = document.createElement('iframe');
  frame.src = link.href;
  frame.title = '故事星球';
  frame.style.cssText = 'width:100%;height:100%;border:0;display:block';
  const close = () => { dialog.close(); dialog.remove(); window.removeEventListener('message', receive); link.focus(); };
  const receive = event => {
    if (event.origin === location.origin && event.source === frame.contentWindow && event.data?.type === 'story-home') close();
  };
  window.addEventListener('message', receive);
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  dialog.append(frame);
  document.body.append(dialog);
  dialog.showModal();
});
