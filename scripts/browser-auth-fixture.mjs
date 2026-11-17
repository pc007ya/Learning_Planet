// Local browser UI regression fixture, NOT proof of real Firebase sign-in.
// Never intercept production origins or contact Firebase with fake credentials.
export async function installLocalStudentFixture(context) {
  await context.route('**/auth-v2/firebase-client.js', async route => {
    const url = new URL(route.request().url());
    if (!['127.0.0.1', 'localhost', '[::1]'].includes(url.hostname)) {
      await route.continue();
      return;
    }
    await route.fulfill({ contentType: 'text/javascript', body: `
      export const auth = {};
      export function onAuthStateChanged(auth, callback) {
        queueMicrotask(() => callback({uid: 'local-ui-regression-student',
          getIdTokenResult: async () => ({claims: {role: 'student'}})}));
        return () => {};
      }
    ` });
  });
}
