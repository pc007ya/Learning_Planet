import { EarthOrbitModule } from './EarthOrbitModule';

// The DC home owns screen mount/unmount; there is no whole-document observer.
export function mountEarthOrbit(host: HTMLElement): EarthOrbitModule {
  const module = new EarthOrbitModule(host);
  void module.init().catch((error: unknown) => {
    module.destroy();
    if (!host.isConnected) return;
    console.error('Earth Orbit failed to initialize.', error);
    host.dispatchEvent(new CustomEvent('lp-module-error', { detail: error }));
  });
  return module;
}

// Preserve the independent acceptance page with its explicit visible host.
if (!document.querySelector('x-dc,#dc-root')) {
  document.querySelectorAll<HTMLElement>('[data-earth-orbit-v01]').forEach(mountEarthOrbit);
}
