/**
 * Learning Planet - Firebase Integration Module
 * Handles Firebase App initialization, Google Sign-In (Firebase Auth),
 * and Cloud Firestore user profile data synchronization.
 */

import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged,
  browserLocalPersistence,
  setPersistence
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Official Firebase Config for LearnPlanet (learnplanet-cce52)
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

function loadConfig() {
  try {
    const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.apiKey) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Failed to load Firebase config from storage:", e);
  }
  return DEFAULT_FIREBASE_CONFIG;
}

let app = null;
let auth = null;
let db = null;
let googleProvider = null;

export function initFirebase(config) {
  try {
    const activeConfig = config || loadConfig();
    if (!activeConfig || !activeConfig.apiKey) {
      console.info("[Firebase] No active API key found yet. Ready for config setup.");
      return false;
    }
    
    if (getApps().length === 0) {
      app = initializeApp(activeConfig);
    } else {
      app = getApp();
    }

    auth = getAuth(app);
    setPersistence(auth, browserLocalPersistence).catch(console.error);

    googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({
      prompt: 'select_account'
    });

    try {
      db = getFirestore(app);
    } catch (e) {
      console.warn("[Firebase] Firestore initialization skipped:", e);
    }

    console.log("[Firebase] Learning Planet Firebase initialized successfully for project:", activeConfig.projectId);
    return true;
  } catch (err) {
    console.error("[Firebase] Initialization error:", err);
    return false;
  }
}

export async function signInWithGoogle() {
  if (!auth || !googleProvider) {
    const success = initFirebase();
    if (!success) {
      throw new Error("Firebase 尚未完成金鑰配置。請在設定中填入 Firebase Config，或登入 Firebase 控制台取得 API Key。");
    }
  }

  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("[Firebase Auth] Google login successful:", user.displayName, user.email, user.uid);
    return {
      uid: user.uid,
      displayName: user.displayName || (user.email ? user.email.split("@")[0] : "探險家"),
      email: user.email,
      photoURL: user.photoURL,
      idToken: await user.getIdToken()
    };
  } catch (error) {
    console.error("[Firebase Auth] Google Sign-In Error:", error);
    if (error.code === "auth/popup-closed-by-user") {
      throw new Error("已取消 Google 登入。");
    } else if (error.code === "auth/unauthorized-domain") {
      throw new Error("此網域尚未加入 Firebase 授權網域，請至 Firebase Console -> Authentication -> Settings 加入目前網址或 localhost。");
    } else if (error.code === "auth/configuration-not-found" || error.code === "auth/invalid-api-key") {
      throw new Error("Firebase 專案尚未開啟 Google 登入提供者，或 API Key 不正確。");
    }
    throw error;
  }
}

export async function logoutUser() {
  if (auth) {
    await signOut(auth);
    console.log("[Firebase Auth] User signed out.");
  }
}

export function onAuthUserChanged(callback) {
  if (!auth) {
    initFirebase();
  }
  if (auth) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        callback({
          uid: user.uid,
          displayName: user.displayName || (user.email ? user.email.split("@")[0] : "探險家"),
          email: user.email,
          photoURL: user.photoURL
        });
      } else {
        callback(null);
      }
    });
  }
  return () => {};
}

export async function saveProfileToFirestore(uid, profileData) {
  if (!db || !uid) return false;
  try {
    const userRef = doc(db, "students", uid);
    await setDoc(userRef, {
      ...profileData,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    return true;
  } catch (e) {
    console.warn("[Firestore] Failed to save profile:", e);
    return false;
  }
}

export async function loadProfileFromFirestore(uid) {
  if (!db || !uid) return null;
  try {
    const userRef = doc(db, "students", uid);
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      return snap.data();
    }
    return null;
  } catch (e) {
    console.warn("[Firestore] Failed to load profile:", e);
    return null;
  }
}

export function saveCustomConfig(config) {
  try {
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
    return initFirebase(config);
  } catch (e) {
    console.error("Failed to save config:", e);
    return false;
  }
}

export function getStoredConfig() {
  return loadConfig();
}

export function isFirebaseReady() {
  return !!auth;
}

// Automatically try initializing
initFirebase();

// Expose globally for Learning Planet runtime
window.LearningPlanetFirebase = {
  init: initFirebase,
  signInWithGoogle,
  logout: logoutUser,
  onAuthUserChanged,
  saveProfileToFirestore,
  loadProfileFromFirestore,
  saveConfig: saveCustomConfig,
  getConfig: getStoredConfig,
  isReady: isFirebaseReady
};
