// Called only after the shared Firebase role gate authorizes this page.
// Deferred classic scripts must execute in their original dependency order.
export async function loadPageScripts(doc = document) {
  const descriptors = [...doc.querySelectorAll('script[data-auth-script]')];
  for (const descriptor of descriptors) {
    const script = doc.createElement('script');
    for (const attr of descriptor.attributes) {
      if (!['type', 'data-auth-script', 'src', 'async', 'defer'].includes(attr.name)) script.setAttribute(attr.name, attr.value);
    }
    script.type = descriptor.dataset.authScript;
    if (descriptor.hasAttribute('src')) script.src = new URL(descriptor.getAttribute('src'), doc.baseURI).href;
    else script.textContent = descriptor.textContent;
    const asynchronous = script.type === 'module' || descriptor.hasAttribute('src');
    const loaded = asynchronous ? new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = () => reject(new Error('Authorized page script failed to load'));
    }) : Promise.resolve();
    descriptor.replaceWith(script);
    await loaded;
  }
}
if (typeof document !== 'undefined') await loadPageScripts();
