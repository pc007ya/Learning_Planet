/** Learning Planet - Firebase integration + global mobile viewport guard. */
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,
  browserLocalPersistence, setPersistence
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCVXHP1mgnD3WOtxGBnHW3dHa1PH3F8g-k",
  authDomain: "learnplanet-cce52.firebaseapp.com",
  projectId: "learnplanet-cce52",
  storageBucket: "learnplanet-cce52.firebasestorage.app",
  messagingSenderId: "1068189320501",
  appId: "1:1068189320501:web:ed64ec200f6eb853cbf87c",
  measurementId: "G-TNCBCHSRMW"
};
const CONFIG_STORAGE_KEY = "LEARNING_PLANET_FIREBASE_CONFIG";
let app = null, auth = null, db = null, googleProvider = null;

function loadConfig() {
  try {
    const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed?.apiKey) return parsed;
    }
  } catch (e) { console.warn("Failed to load Firebase config from storage:", e); }
  return DEFAULT_FIREBASE_CONFIG;
}

export function initFirebase(config) {
  try {
    const activeConfig = config || loadConfig();
    if (!activeConfig?.apiKey) return false;
    app = getApps().length === 0 ? initializeApp(activeConfig) : getApp();
    auth = getAuth(app);
    setPersistence(auth, browserLocalPersistence).catch(console.error);
    googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
    try { db = getFirestore(app); } catch (e) { console.warn("[Firebase] Firestore initialization skipped:", e); }
    console.log("[Firebase] Learning Planet Firebase initialized successfully for project:", activeConfig.projectId);
    return true;
  } catch (err) {
    console.error("[Firebase] Initialization error:", err);
    return false;
  }
}

export async function signInWithGoogle() {
  if (!auth || !googleProvider) {
    if (!initFirebase()) throw new Error("Firebase 尚未完成金鑰配置。請在設定中填入 Firebase Config，或登入 Firebase 控制台取得 API Key。");
  }
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return {
      uid: user.uid,
      displayName: user.displayName || (user.email ? user.email.split("@")[0] : "探險家"),
      email: user.email,
      photoURL: user.photoURL,
      idToken: await user.getIdToken()
    };
  } catch (error) {
    if (error.code === "auth/popup-closed-by-user") throw new Error("已取消 Google 登入。");
    if (error.code === "auth/unauthorized-domain") throw new Error("此網域尚未加入 Firebase 授權網域，請至 Firebase Console -> Authentication -> Settings 加入目前網址或 localhost。");
    if (error.code === "auth/configuration-not-found" || error.code === "auth/invalid-api-key") throw new Error("Firebase 專案尚未開啟 Google 登入提供者，或 API Key 不正確。");
    throw error;
  }
}

export async function logoutUser() { if (auth) await signOut(auth); }
export function onAuthUserChanged(callback) {
  if (!auth) initFirebase();
  if (!auth) return () => {};
  return onAuthStateChanged(auth, user => callback(user ? {
    uid: user.uid,
    displayName: user.displayName || (user.email ? user.email.split("@")[0] : "探險家"),
    email: user.email,
    photoURL: user.photoURL
  } : null));
}

export async function saveProfileToFirestore(uid, profileData) {
  if (!db || !uid) return false;
  try {
    await setDoc(doc(db, "students", uid), { ...profileData, updatedAt: new Date().toISOString() }, { merge: true });
    return true;
  } catch (e) { console.warn("[Firestore] Failed to save profile:", e); return false; }
}
export async function loadProfileFromFirestore(uid) {
  if (!db || !uid) return null;
  try { const snap = await getDoc(doc(db, "students", uid)); return snap.exists() ? snap.data() : null; }
  catch (e) { console.warn("[Firestore] Failed to load profile:", e); return null; }
}

const ROSTER_DOCUMENT = ["system", "roster"];
export async function saveRosterToFirestore(rosterData) {
  if (!db || !auth?.currentUser) return false;
  try {
    await setDoc(doc(db, ...ROSTER_DOCUMENT), { ...rosterData, updatedAt: new Date().toISOString(), updatedBy: auth.currentUser.uid }, { merge: true });
    return true;
  } catch (e) { console.warn("[Firestore] Failed to save roster:", e); return false; }
}
export async function loadRosterFromFirestore() {
  if (!db || !auth?.currentUser) return null;
  try { const snap = await getDoc(doc(db, ...ROSTER_DOCUMENT)); return snap.exists() ? snap.data() : null; }
  catch (e) { console.warn("[Firestore] Failed to load roster:", e); return null; }
}
export function watchRosterFromFirestore(callback) {
  if (!db || !auth) return () => {};
  let stopSnapshot = null;
  const stopAuth = onAuthStateChanged(auth, user => {
    if (stopSnapshot) { stopSnapshot(); stopSnapshot = null; }
    if (!user) return;
    stopSnapshot = onSnapshot(doc(db, ...ROSTER_DOCUMENT), snap => callback(snap.exists() ? snap.data() : null), e => console.warn("[Firestore] Failed to watch roster:", e));
  });
  return () => { if (stopSnapshot) stopSnapshot(); stopAuth(); };
}

export function saveCustomConfig(config) {
  try { localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config)); return initFirebase(config); }
  catch (e) { console.error("Failed to save config:", e); return false; }
}
export function getStoredConfig() { return loadConfig(); }
export function isFirebaseReady() { return !!auth; }

function installMobileViewportGuard() {
  if (typeof document === "undefined" || document.getElementById("learning-planet-mobile-guard")) return;
  const style = document.createElement("style");
  style.id = "learning-planet-mobile-guard";
  style.textContent = `
    html,body{width:100%;max-width:100%;overflow-x:hidden!important;overscroll-behavior-x:none;-webkit-text-size-adjust:100%;text-size-adjust:100%}
    body,#dc-root,#dc-root>.sc-host{max-width:100vw;min-width:0}
    .app-shell,.home-focus,.profile-focus,.admin-focus,.subject-focus,.cosmos-focus,.module-focus,.lab-focus,.gacha-focus{width:100%;max-width:100vw!important;min-width:0!important;box-sizing:border-box;overflow-x:hidden!important}
    input,select,textarea{font-size:16px!important}
    img,svg,canvas,video{max-width:100%}
    .app-header,.player-actions,.user-identity,.student-xp,[data-screen-label],section,article{min-width:0}
    @media(max-width:760px){
      .app-header{max-width:100%!important;min-width:0!important;gap:3px!important}
      .profile-focus .app-header,.admin-focus .app-header,.gacha-focus .app-header{flex-wrap:wrap!important;padding-left:8px!important;padding-right:8px!important}
      .profile-focus .user-identity,.admin-focus .user-identity,.gacha-focus .user-identity{min-width:0!important;flex:0 1 auto!important}
      .profile-focus .student-xp,.admin-focus .student-xp,.gacha-focus .student-xp{min-width:0!important;max-width:112px!important;flex:1 1 68px!important}
      .profile-focus .player-actions,.admin-focus .player-actions,.gacha-focus .player-actions{min-width:0!important;gap:0!important;flex:0 1 auto!important}
      .profile-focus .home-utility,.profile-focus .speech-toggle,.admin-focus .home-utility,.admin-focus .speech-toggle,.gacha-focus .home-utility,.gacha-focus .speech-toggle{width:34px!important;height:34px!important}
      .profile-focus .logout-control,.admin-focus .logout-control,.gacha-focus .logout-control{width:42px!important;height:40px!important}
      .profile-focus .logout-spaceship,.admin-focus .logout-spaceship,.gacha-focus .logout-spaceship{width:50px!important;height:44px!important}
      .admin-focus [style*="grid-template-columns:minmax(180px,1fr) 130px 140px"]{grid-template-columns:1fr!important;gap:8px!important}
      .admin-focus [style*="grid-template-columns:minmax(180px,1fr) 130px 140px"] label{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:8px!important}
      .admin-focus [style*="grid-template-columns:minmax(180px,1fr) 130px 140px"] select{width:min(180px,52vw)!important;max-width:100%!important}
      .admin-focus .teacher-settings-shell,.admin-focus [data-screen-label="教師後台"]{max-width:100%!important;overflow-x:hidden!important}
      .admin-focus .teacher-student-row,.admin-focus .teacher-student-head{min-width:0}
      .module-focus .quiz-card,.module-focus .quiz-visual,.module-focus .result-summary,.lab-focus>*,.gacha-focus [data-screen-label]{max-width:100%!important;min-width:0!important}
      .gacha-focus{padding-left:10px!important;padding-right:10px!important}
      .gacha-focus .gacha-machine-stage{width:100%!important;max-width:100%!important;min-width:0!important}

      /* Student header: one compact identity row + one XP row on phones only. */
      .home-focus .app-header,.subject-focus .app-header,.profile-focus .app-header,.gacha-focus .app-header{
        width:100%!important;max-width:100%!important;min-height:0!important;height:auto!important;
        display:flex!important;flex-wrap:wrap!important;align-items:center!important;
        column-gap:5px!important;row-gap:5px!important;padding:7px 8px 8px!important;overflow:hidden!important;
      }
      .home-focus .app-home-btn,.subject-focus .app-home-btn,.profile-focus .app-home-btn,.gacha-focus .app-home-btn{
        display:grid!important;place-items:center!important;order:1!important;flex:0 0 48px!important;
        width:48px!important;height:48px!important;min-width:48px!important;padding:0!important;border:0!important;background:transparent!important;
      }
      .home-focus .app-home-btn img,.subject-focus .app-home-btn img,.profile-focus .app-home-btn img,.gacha-focus .app-home-btn img{
        width:48px!important;height:48px!important;object-fit:contain!important;
      }
      .home-focus .user-avatar,.subject-focus .user-avatar,.profile-focus .user-avatar,.gacha-focus .user-avatar{
        display:block!important;order:2!important;flex:0 0 48px!important;width:48px!important;height:48px!important;min-width:48px!important;
      }
      .home-focus .user-identity,.subject-focus .user-identity,.profile-focus .user-identity,.gacha-focus .user-identity{
        order:3!important;flex:1 1 78px!important;min-width:0!important;max-width:none!important;line-height:1.12!important;
      }
      .home-focus .user-identity strong,.subject-focus .user-identity strong,.profile-focus .user-identity strong,.gacha-focus .user-identity strong{
        font-size:15px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;
      }
      .home-focus .user-sub-home,.subject-focus .user-sub-home,.profile-focus .user-sub-home,.gacha-focus .user-sub-home{font-size:11px!important}
      .home-focus .player-actions,.subject-focus .player-actions,.profile-focus .player-actions,.gacha-focus .player-actions{display:none!important}
      .home-focus .speech-toggle,.subject-focus .speech-toggle,.profile-focus .speech-toggle,.gacha-focus .speech-toggle{
        order:4!important;flex:0 0 34px!important;width:34px!important;height:34px!important;min-width:34px!important;
      }
      .home-focus .logout-control,.subject-focus .logout-control,.profile-focus .logout-control,.gacha-focus .logout-control{
        order:5!important;flex:0 0 42px!important;width:42px!important;height:40px!important;min-width:42px!important;
      }
      .home-focus .logout-spaceship,.subject-focus .logout-spaceship,.profile-focus .logout-spaceship,.gacha-focus .logout-spaceship{
        width:50px!important;height:44px!important;
      }
      .home-focus .student-xp,.subject-focus .student-xp,.profile-focus .student-xp,.gacha-focus .student-xp{
        order:20!important;flex:0 0 100%!important;width:100%!important;min-width:0!important;max-width:none!important;margin:0!important;
      }
      .home-focus .student-xp-label,.subject-focus .student-xp-label,.profile-focus .student-xp-label,.gacha-focus .student-xp-label{font-size:10px!important;line-height:1!important}
      .home-focus .student-xp-track,.subject-focus .student-xp-track,.profile-focus .student-xp-track,.gacha-focus .student-xp-track{height:7px!important;margin-top:4px!important}
      .home-focus .home-space-copy{top:106px!important}
      .home-focus .home-subject-grid{top:160px!important}
      .subject-focus{padding-top:104px!important}
      .profile-focus{padding-top:104px!important}
      .gacha-focus{padding-top:104px!important}

      .home-subject-grid{left:10px!important;right:10px!important;gap:10px!important}
      .home-subject-card{--planet-size:min(42vw,158px)!important;width:var(--planet-size)!important;flex:0 0 var(--planet-size)!important}
    }
    @media(max-width:760px) and (orientation:portrait){
      .lab-focus::after{content:"↻ 科學實驗建議將手機轉為橫向，操作空間會更完整";position:fixed;z-index:2147483000;left:50%;bottom:calc(12px + env(safe-area-inset-bottom));transform:translateX(-50%);width:min(92vw,520px);box-sizing:border-box;padding:10px 14px;border:1px solid rgba(116,222,255,.52);border-radius:16px;background:rgba(5,14,45,.9);color:#eafaff;font:900 13px/1.45 system-ui,-apple-system,sans-serif;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,.38);backdrop-filter:blur(12px);pointer-events:none}
    }
    @media(max-width:760px) and (orientation:landscape){
      .lab-focus{padding-left:max(8px,env(safe-area-inset-left))!important;padding-right:max(8px,env(safe-area-inset-right))!important}
      .lab-focus .magnet-stage,.lab-focus .magnet2-board,.lab-focus .plant-stage{max-height:calc(100svh - 18px)!important}
    }
  `;
  document.head.appendChild(style);
}

function installInteractionViewportGuard() {
  if (typeof window === "undefined" || window.__learningPlanetInteractionGuard) return;
  window.__learningPlanetInteractionGuard = true;
  let activePointer = null;
  let lastViewport = { width: window.visualViewport?.width || window.innerWidth, height: window.visualViewport?.height || window.innerHeight };

  document.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary) return;
    if (event.target?.closest?.(".magnet-stage,.magnet2-board,.plant-stage,.earth-orbit-v01-stage")) {
      activePointer = { pointerId: event.pointerId, pointerType: event.pointerType || "touch", clientX: event.clientX, clientY: event.clientY };
    }
  }, true);
  document.addEventListener("pointermove", (event) => {
    if (activePointer && event.pointerId === activePointer.pointerId) {
      activePointer.clientX = event.clientX;
      activePointer.clientY = event.clientY;
    }
  }, true);
  const clearPointer = (event) => {
    if (!activePointer || event.pointerId === activePointer.pointerId) activePointer = null;
  };
  document.addEventListener("pointerup", clearPointer, true);
  document.addEventListener("pointercancel", clearPointer, true);

  const cancelStaleDrag = () => {
    const next = { width: window.visualViewport?.width || window.innerWidth, height: window.visualViewport?.height || window.innerHeight };
    const changed = Math.abs(next.width - lastViewport.width) > 2 || Math.abs(next.height - lastViewport.height) > 2;
    lastViewport = next;
    if (!changed || !activePointer) return;
    const p = activePointer;
    activePointer = null;
    try {
      document.dispatchEvent(new PointerEvent("pointercancel", {
        bubbles: true,
        cancelable: true,
        pointerId: p.pointerId,
        pointerType: p.pointerType,
        isPrimary: true,
        clientX: p.clientX,
        clientY: p.clientY
      }));
    } catch (_) {}
  };

  window.addEventListener("orientationchange", cancelStaleDrag, { passive: true });
  window.addEventListener("resize", cancelStaleDrag, { passive: true });
  window.visualViewport?.addEventListener("resize", cancelStaleDrag, { passive: true });
}

installMobileViewportGuard();
installInteractionViewportGuard();
initFirebase();

window.LearningPlanetFirebase = {
  init: initFirebase,
  signInWithGoogle,
  logout: logoutUser,
  onAuthUserChanged,
  saveProfileToFirestore,
  loadProfileFromFirestore,
  saveRosterToFirestore,
  loadRosterFromFirestore,
  watchRosterFromFirestore,
  saveConfig: saveCustomConfig,
  getConfig: getStoredConfig,
  isReady: isFirebaseReady
};
