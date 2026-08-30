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

  it('keeps the shared roster compact and migrates legacy roster documents', () => {
    const rosterStart = app.indexOf('cloudRosterPayload()');
    const rosterEnd = app.indexOf('queueCloudRosterSync()', rosterStart);
    const rosterImplementation = app.slice(rosterStart, rosterEnd);
    expect(rosterImplementation).toContain('schemaVersion: 3');
    expect(rosterImplementation).toContain('loginAccount: studentLoginAccount(student)');
    expect(rosterImplementation).not.toContain('profile: this.cloudSafeProfile(student.profile)');
    expect(app).toContain('if (Number(remote.schemaVersion) < 3');
    expect(app).not.toContain('remote.teachers.filter((teacher) => teacher.role === "admin").length > 1');
    expect(firebaseClient).toContain('schemaVersion: 3');
  });

  it('does not rewrite the roster for progress-only student snapshots', () => {
    expect(app).toContain('return changed ? { students } : {};');
    expect(app).toContain('if (needsUpdate) await authV2.updateStudent');
    expect(app).not.toContain('profile, avatar: studentAvatarImage(profile.cardAvatarIndex), lastLoginAt: new Date().toISOString()');
  });
});
