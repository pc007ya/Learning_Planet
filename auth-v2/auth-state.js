// auth-v2/auth-state.js
import { auth, db, currentRole, signOut, onAuthStateChanged } from './firebase-client.js';
import { doc, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

let state = {
  user: null,
  role: null, // 'admin' | 'teacher' | 'student' | null
  claims: {},
  profile: null,
  isFirstLogin: false,
  loading: true
};

const listeners = new Set();

function notify() {
  listeners.forEach((listener) => {
    try {
      listener({ ...state });
    } catch (e) {
      console.error('[AuthState] Listener error:', e);
    }
  });
}

let profileUnsub = null;

onAuthStateChanged(auth, async (firebaseUser) => {
  if (profileUnsub) {
    profileUnsub();
    profileUnsub = null;
  }

  if (!firebaseUser) {
    state = {
      user: null,
      role: null,
      claims: {},
      profile: null,
      isFirstLogin: false,
      loading: false
    };
    notify();
    return;
  }

  try {
    const role = await currentRole(true);
    const idToken = await firebaseUser.getIdTokenResult();
    state.user = firebaseUser;
    state.role = role;
    state.claims = idToken.claims || {};

    if (role === 'teacher' || role === 'admin') {
      const col = role === 'admin' ? 'admins' : 'teachers';
      profileUnsub = onSnapshot(doc(db, col, firebaseUser.uid), (snap) => {
        const data = snap.data() || {};
        state.profile = { id: firebaseUser.uid, ...data, role };
        state.isFirstLogin = role === 'teacher' && data.firstLoginCompleted !== true;
        state.loading = false;
        notify();
      });
    } else {
      state.profile = { id: firebaseUser.uid, email: firebaseUser.email, role };
      state.loading = false;
      notify();
    }
  } catch (err) {
    console.error('[AuthState] Failed to resolve auth claims:', err);
    state.loading = false;
    notify();
  }
});

export function getAuthState() {
  return { ...state };
}

export function subscribeAuthState(listener) {
  listeners.add(listener);
  listener({ ...state });
  return () => listeners.delete(listener);
}

export async function authLogout() {
  if (profileUnsub) {
    profileUnsub();
    profileUnsub = null;
  }
  await signOut(auth);
}

window.LearningPlanetAuthState = {
  getState: getAuthState,
  subscribe: subscribeAuthState,
  logout: authLogout
};
