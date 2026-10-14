import {protectStoryEntry, hasStoryParentSession} from './story-access.mjs?v=story-login-20261012-r1';

const host = document.querySelector('#little-star, #story-app');
const status = document.createElement('p');
status.setAttribute('role', 'status');
status.textContent = '正在確認登入…';
host?.replaceChildren(status);
const home = new URL('stories/', document.baseURI);
const deny = () => {
  window.speechSynthesis?.cancel();
  if (host) host.replaceChildren(document.createTextNode('請先登入學習星球。'));
  location.replace(home.href);
};

try {
  const source = document.querySelector('script[data-story-reader]')?.dataset.storyReader;
  if (!source) throw new Error('Missing reader');
  const reader = new URL(source, document.baseURI);
  const allowed = ['modules/little-star/little-star.js', 'modules/story-planet/story-planet.js']
    .map(path => new URL(path, document.baseURI).pathname);
  // Book49 has a dedicated bundle; admit it only from its own guarded entry.
  if (location.pathname === new URL('princess-weekend-storybook.html', document.baseURI).pathname) {
    allowed.push(new URL('modules/book-49/reader.js', document.baseURI).pathname);
  }
  if (reader.origin !== location.origin || !allowed.includes(reader.pathname)) throw new Error('Invalid reader');
  if (hasStoryParentSession(window)) {
    await import(reader.href);
  } else {
    const {auth, currentRole, onAuthStateChanged} = await import('../auth-v2/firebase-client.js');
    const dispose = protectStoryEntry({
      subscribe: (success, failure) => onAuthStateChanged(auth, success, failure),
      role: () => currentRole(),
      load: async () => { await import(reader.href); },
      deny
    });
    addEventListener('pagehide', dispose, {once: true});
  }
} catch (_) { deny(); }
