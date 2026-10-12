// Wait for Firebase's restored session before loading any story module.
export function protectStoryEntry({subscribe, role, load, deny}) {
  let stopped = false, loaded = false, generation = 0;
  const reject = () => {
    if (stopped) return;
    stopped = true;
    generation++;
    deny();
  };
  const unsubscribe = subscribe(user => {
    const ticket = ++generation;
    Promise.resolve().then(async () => {
      if (stopped || ticket !== generation) return;
      if (!user) { reject(); return; }
      const currentRole = await role();
      if (stopped || ticket !== generation) return;
      if (!['student', 'teacher', 'admin'].includes(currentRole)) { reject(); return; }
      if (!loaded) { loaded = true; await load(); }
    }).catch(reject);
  }, reject);
  return () => { stopped = true; generation++; unsubscribe(); };
}

// The existing local DEMO login has no Firebase account. It can read only
// inside the authenticated home dialog, whose home card is rendered after login.
export function hasStoryParentSession(view) {
  try {
    const top = view.top;
    if (top === view || top.location.origin !== view.location.origin) return false;
    if (top.location.pathname !== new URL('stories/', view.document.baseURI).pathname) return false;
    return !!top.LPHomeRoutes && !!top.document.querySelector('.home-subject-card[data-subject="story"]')
      && !top.document.querySelector('.login-space');
  } catch (_) { return false; }
}
