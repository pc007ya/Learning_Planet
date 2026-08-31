import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const app = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const firebaseClient = readFileSync(new URL('../auth-v2/firebase-client.js', import.meta.url), 'utf8');

describe('Firebase student progress sync', () => {
  it('syncs authenticated students without requiring Google linking', () => {
    const start = firebaseClient.indexOf('export async function saveMyStudentProgress');
    const end = firebaseClient.indexOf('export function subscribeStudentsList', start);
    const implementation = firebaseClient.slice(start, end);
    expect(implementation).toContain("currentRole() !== 'student'");
    expect(implementation).not.toContain('google-not-linked');
    expect(implementation).not.toContain('googleLinked');
  });

  it('uploads the full profile plus top-level XP, coins and inventory', () => {
    expect(app).toContain('xp: profile.xp || 0, coins: profile.coins || 0');
    expect(app).toContain('inventory: { owned: profile.owned || [], equipped: profile.equipped || {} }');
    expect(app).toContain('profile, avatar: studentAvatarImage(profile.cardAvatarIndex)');
  });

  it('retries every ten minutes and when the page is backgrounded', () => {
    expect(app).toContain('10 * 60 * 1000');
    expect(app).toContain('document.visibilityState === "hidden"');
    expect(app).toContain('window.addEventListener("pagehide", this.cloudPageHideHandler)');
    expect(app).toContain('this.cloudProfileSignatures[uid] = signature;');
  });

  it('keeps the admin binding directory live and shows the default first password', () => {
    expect(firebaseClient).toContain('export function subscribeStudentsList(callback)');
    expect(app).toContain('this.applyCloudStudentDirectory(students)');
    expect(app).toContain('password: st.profile && st.profile.passwordCustomized ? "已自訂" : "LP2026"');
    expect(app).not.toContain('password: String(st.profile && st.profile.loginPassword || "未留存")');
  });

  it('keeps students canonical in their own documents instead of the shared roster', () => {
    const rosterStart = app.indexOf('cloudRosterPayload()');
    const rosterEnd = app.indexOf('queueCloudRosterSync()', rosterStart);
    const rosterImplementation = app.slice(rosterStart, rosterEnd);
    expect(rosterImplementation).toContain('schemaVersion: 4');
    expect(rosterImplementation).not.toContain('students:');
    expect(rosterImplementation).not.toContain('profile: this.cloudSafeProfile(student.profile)');
    expect(firebaseClient).toContain('schemaVersion: 4');
    expect(firebaseClient).toContain("setDoc(doc(db, 'system', 'roster')");
    expect(firebaseClient).not.toContain("}, { merge: true });\n}\n\nexport async function saveWeeklyResult");
  });

  it('rebuilds the admin directory from active Firebase student documents', () => {
    expect(app).toContain('const activeRemote = remoteStudents.filter((remote) => remote && remote.enabled !== false && remote.id);');
    expect(app).toContain('id: local.id || ("cloud-" + remote.id)');
    expect(app).toContain('cloudUid: String(remote.id)');
    expect(app).toContain('this.cloudAdminBootstrapPending = true;');
    expect(app).toContain('if (this.cloudAdminBootstrapPending');
    expect(app).toContain('if (needsUpdate) await authV2.updateStudent');
    expect(app).not.toContain('if (this.state.teacher && currentTeacher.role === "admin") this.queueCloudRosterSync();\n    }\n    if (!prevState || prevState.classes');
    expect(app).not.toContain('profile, avatar: studentAvatarImage(profile.cardAvatarIndex), lastLoginAt: new Date().toISOString()');
  });
});
