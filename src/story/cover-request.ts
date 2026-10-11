type CoverHooks = {
  start?: () => void;
  loaded: (image: HTMLImageElement) => void;
  failed?: () => void;
};

/** Closed book spines need no cover request. A pending preview belongs to its shelf. */
export function createDeferredCover(url: string, hooks: CoverHooks) {
  let image: HTMLImageElement | null = null;
  let ready = false;
  let disposed = false;
  const cancel = () => {
    const pending = image;
    image = null;
    if (!pending) return;
    pending.onload = pending.onerror = null;
    pending.removeAttribute('src');
  };
  return {
    load() {
      if (disposed || ready || image) return;
      const pending = new Image();
      image = pending;
      pending.decoding = 'async';
      pending.fetchPriority = 'low';
      pending.onload = () => {
        if (disposed || image !== pending) return;
        image = null;
        ready = true;
        pending.onload = pending.onerror = null;
        hooks.loaded(pending);
      };
      pending.onerror = () => {
        if (disposed || image !== pending) return;
        image = null;
        pending.onload = pending.onerror = null;
        hooks.failed?.();
      };
      hooks.start?.();
      pending.src = url;
    },
    cancel,
    dispose() { disposed = true; cancel(); },
  };
}
