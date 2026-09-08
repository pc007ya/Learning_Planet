import type { LabKind } from './models';
const mounted = new Map<HTMLElement, { destroy(): void }>();
const failed = new WeakSet<HTMLElement>();
const pending = new WeakSet<HTMLElement>();
function sync() {
  for (const [host, lab] of mounted) if (!host.isConnected) { lab.destroy(); mounted.delete(host); }
  document.querySelectorAll<HTMLElement>('[data-interactive-lab]').forEach(host => {
    if (mounted.has(host) || pending.has(host) || failed.has(host)) return;
    const kind = host.dataset.interactiveLab;
    if (!['buoyancy', 'clock', 'car', 'cube', 'mini4wd', 'phonics'].includes(kind || '')) return;
    pending.add(host);
    const loader = kind === 'phonics' ? import('../english/phonics').then(({PhonicsLab})=>()=>new PhonicsLab(host)) : kind === 'mini4wd' ? import('./mini4wd-lab').then(({Mini4wdLab})=>()=>new Mini4wdLab(host)) : kind === 'cube' ? import('./cube-lab').then(({CubeLab})=>()=>new CubeLab(host)) : kind === 'buoyancy' ? import('./buoyancy-play').then(({ BuoyancyPlay }) => () => new BuoyancyPlay(host)) : import('./lab').then(({ InteractiveLab }) => () => new InteractiveLab(host, kind as LabKind));
    void loader.then(create => {
      if (host.isConnected) mounted.set(host, create());
      pending.delete(host);
    }).catch(error => { failed.add(host); console.error('Interactive lab failed', error); host.textContent = '實驗載入失敗，請返回後重試。'; pending.delete(host); });
  });
}
new MutationObserver(records=>{if(records.some(r=>[...r.addedNodes,...r.removedNodes].some(n=>n instanceof Element&&(n.matches('[data-interactive-lab]')||n.querySelector('[data-interactive-lab]')))))sync();}).observe(document.documentElement, { childList: true, subtree: true });
sync();
