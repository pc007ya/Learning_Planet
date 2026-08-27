/*
 * Run only from a trusted administrator machine after Firebase credentials
 * are configured.  This creates the first Auth + Firestore administrator.
 * Password hashes stay in Firebase Authentication; Firestore stores no
 * password field.
 */
const admin = require('firebase-admin');

const projectId = process.env.GCLOUD_PROJECT || 'learnplanet-cce52';
const username = String(process.env.LEARNING_PLANET_ADMIN_USER || 'admin').toLowerCase();
const password = process.env.LEARNING_PLANET_ADMIN_PASSWORD || 'admin123';
const email = `${username}@admin.learning-planet.invalid`;

if (password.length < 6) throw new Error('LEARNING_PLANET_ADMIN_PASSWORD must be at least 6 characters.');
admin.initializeApp({ projectId });
const db = admin.firestore();

(async () => {
  let user;
  try { user = await admin.auth().createUser({ email, password, displayName: '系統管理者' }); }
  catch (error) {
    if (error.code !== 'auth/email-already-exists') throw error;
    user = await admin.auth().getUserByEmail(email);
    await admin.auth().updateUser(user.uid, { password, displayName: '系統管理者', disabled: false });
  }
  await admin.auth().setCustomUserClaims(user.uid, { role: 'admin' });
  await db.collection('admins').doc(user.uid).set({
    username, displayName: '系統管理者', role: 'admin', authEmail: email,
    googleEmail: null, googleLinked: false, firstLoginCompleted: false,
    enabled: true, updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  console.log(`Administrator ready: ${username}`);
})().catch((error) => { console.error(error); process.exitCode = 1; });
