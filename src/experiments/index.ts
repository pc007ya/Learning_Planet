import type { LabKind } from './models';

export async function mountInteractiveLab(host: HTMLElement): Promise<{ destroy(): void } | null> {
  const kind = host.dataset.interactiveLab;
  if (!['buoyancy', 'clock', 'car', 'cube', 'mini4wd', 'phonics'].includes(kind || '')) return null;
  const create = kind === 'phonics'
    ? await import('../english/phonics').then(({ PhonicsLab }) => () => new PhonicsLab(host))
    : kind === 'mini4wd'
      ? await import('./mini4wd-lab').then(({ Mini4wdLab }) => () => new Mini4wdLab(host))
      : kind === 'cube'
        ? await import('./cube-lab').then(({ CubeLab }) => () => new CubeLab(host))
        : kind === 'buoyancy'
          ? await import('./buoyancy-play').then(({ BuoyancyPlay }) => () => new BuoyancyPlay(host))
          : await import('./lab').then(({ InteractiveLab }) => () => new InteractiveLab(host, kind as LabKind));
  // A rapid back/switch while import is pending must not create a detached scene.
  return host.isConnected ? create() : null;
}

if (!document.querySelector('x-dc,#dc-root')) {
  document.querySelectorAll<HTMLElement>('[data-interactive-lab]').forEach(host => {
    void mountInteractiveLab(host).catch(error => {
      console.error('Interactive lab failed', error);
      host.textContent = '實驗載入失敗，請返回後重試。';
    });
  });
}
