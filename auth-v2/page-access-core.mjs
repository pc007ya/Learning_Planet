// UI access boundary only. Static HTML/JS are still public hosting assets.
export const LEARNING_ROLES = ['student', 'teacher', 'admin'];
export function createPageAccess({ authorize, unlock, lock, redirect, fail }) {
  let revision = 0;
  let activeUid = null;
  return async function update(user) {
    const current = ++revision;
    lock();
    if (!user || (activeUid && activeUid !== user.uid)) { redirect(); return; }
    try {
      const token = await authorize(user);
      if (current !== revision) return;
      if (!LEARNING_ROLES.includes(token?.claims?.role)) { redirect(); return; }
      activeUid = user.uid;
      await unlock(user);
      // A sign-out may have arrived while the app module was loading.
      if (current !== revision) lock();
    } catch (error) {
      if (current !== revision) return;
      lock();
      fail(error);
    }
  };
}
