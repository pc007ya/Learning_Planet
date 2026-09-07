import type { LabKind } from './models';
const mounted = new Map<HTMLElement, { destroy(): void }>();
const pending = new WeakSet<HTMLElement>();
function sync() {
  for (const [host, lab] of mounted) if (!host.isConnected) { lab.destroy(); mounted.delete(host); }
  document.querySelectorAll<HTMLElement>('[data-interactive-lab]').forEach(host => {
    if (mounted.has(host) || pending.has(host)) return;
    const kind = host.dataset.interactiveLab;
    if (!['buoyancy', 'clock', 'car'].includes(kind || '')) return;
    pending.add(host);
    const loader = kind === 'buoyancy' ? import('./buoyancy-play').then(({ BuoyancyPlay }) => () => new BuoyancyPlay(host)) : import('./lab').then(({ InteractiveLab }) => () => new InteractiveLab(host, kind as LabKind));
    void loader.then(create => {
      if (host.isConnected) mounted.set(host, create());
      pending.delete(host);
    }).catch(error => { console.error('Interactive lab failed', error); host.textContent = '實驗載入失敗，請返回後重試。'; pending.delete(host); });
  });
}
new MutationObserver(sync).observe(document.documentElement, { childList: true, subtree: true });
sync();
