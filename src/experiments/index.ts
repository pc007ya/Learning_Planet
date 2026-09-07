import type { InteractiveLab } from './lab';
import type { LabKind } from './models';
const mounted = new Map<HTMLElement, InteractiveLab>();
const pending = new WeakSet<HTMLElement>();
function sync() {
  for (const [host, lab] of mounted) if (!host.isConnected) { lab.destroy(); mounted.delete(host); }
  document.querySelectorAll<HTMLElement>('[data-interactive-lab]').forEach(host => {
    if (mounted.has(host) || pending.has(host)) return;
    const kind = host.dataset.interactiveLab;
    if (!['buoyancy', 'clock', 'car'].includes(kind || '')) return;
    pending.add(host);
    void import('./lab').then(({ InteractiveLab }) => {
      if (host.isConnected) mounted.set(host, new InteractiveLab(host, kind as LabKind));
      pending.delete(host);
    }).catch(error => { console.error('Interactive lab failed', error); host.textContent = '實驗載入失敗，請返回後重試。'; pending.delete(host); });
  });
}
new MutationObserver(sync).observe(document.documentElement, { childList: true, subtree: true });
sync();
