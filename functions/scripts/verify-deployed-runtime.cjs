// Read-only inventory/log checks; smoke calls have no auth and must reject before data access.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { GoogleAuth } = require('google-auth-library');
const project = 'learnplanet-cce52';
const region = 'asia-east1';
const expected = Object.keys(require('../index.js')).sort();
const mode = process.argv[2];
const verifyOnly = process.env.RUNTIME_VERIFY_ONLY === 'true';
// Receipt: successful runtime deployment, Actions run 39768165186 at 2026-10-22 11:09 UTC.
const verifiedRevisions = {
  "changeMyStudentUsername": "changemystudentusername-00006-non",
  "createTeacher": "createteacher-00009-yag",
  "setTeacherEnabled": "setteacherenabled-00009-doc",
  "updateStudent": "updatestudent-00009-zaz",
  "createStudent": "createstudent-00009-xen",
  "deleteTeacher": "deleteteacher-00007-nac",
  "setStudentEnabled": "setstudentenabled-00009-xeh",
  "resetTeacherPassword": "resetteacherpassword-00009-yak",
  "resolveGoogleLinkConflict": "resolvegooglelinkconflict-00008-paq",
  "resetStudentPassword": "resetstudentpassword-00009-paw",
  "bootstrapFirstAdmin": "bootstrapfirstadmin-00009-wod",
  "updateTeacher": "updateteacher-00009-xuc",
  "updateOwnTeacherSettings": "updateownteachersettings-00009-gaw",
  "reconcileStudentGoogleLinks": "reconcilestudentgooglelinks-00005-fat"
};
assert.ok(['before', 'after', 'logs'].includes(mode), 'Expected before, after, or logs.');
const file = process.env.RUNTIME_RECEIPT || '/tmp/learning-planet-runtime.json';
const auth = new GoogleAuth({ scopes: ['https://www.googleapis.com/auth/cloud-platform'] });
async function main() {
  const client = await auth.getClient();
  if (mode === 'logs') {
    const receipt = JSON.parse(fs.readFileSync(file, 'utf8'));
    try {
      let response;
      let logPageToken;
      const seenTokens = new Set();
      do {
        response = await client.request({
        url: 'https://logging.googleapis.com/v2/entries:list', method: 'POST',
        data: { resourceNames: [`projects/${project}`], pageSize: 100, ...(logPageToken ? { pageToken: logPageToken } : {}),
          filter: `resource.type="cloud_run_revision" AND resource.labels.location="${region}" AND severity>=ERROR AND timestamp>="${receipt.startedAt}" AND (${receipt.functions.map(f => `resource.labels.service_name="${f.serviceName}"`).join(' OR ')})`,
          orderBy: 'timestamp desc' }
        });
        logPageToken = response.data.nextPageToken;
        if ((response.data.entries || []).length || !logPageToken) break;
        assert.ok(!seenTokens.has(logPageToken), 'Cloud Logging returned a repeated continuation token.');
        seenTokens.add(logPageToken);
      } while (logPageToken);
      const entries = response.data.entries || [];
      // Avoid copying user data or full log payloads into CI output.
      console.log(JSON.stringify({ logWindowStart: receipt.startedAt, errorCount: entries.length,
        more: !!response.data.nextPageToken, errors: entries.map(e => ({ timestamp: e.timestamp,
          severity: e.severity, service: e.resource?.labels?.service_name })) }));
      if (entries.length) process.exitCode = 1;
    } catch (error) {
      console.log(JSON.stringify({ logReview: 'unavailable', httpStatus: error.response?.status || null }));
      process.exitCode = 1;
    }
    return;
  }
  let functions = [];
  let pageToken;
  do {
    const { data } = await client.request({ url: `https://cloudfunctions.googleapis.com/v2/projects/${project}/locations/-/functions`, params: { pageSize: 100, ...(pageToken ? { pageToken } : {}) } });
    assert.deepEqual(data.unreachable || [], [], 'All function regions must be reachable.');
    functions.push(...(data.functions || [])); pageToken = data.nextPageToken;
  } while (pageToken);
  assert.deepEqual(functions.map(f => f.name.split('/').pop()).sort(), expected, 'Deployed function names must exactly match the 14 existing exports.');
  const previous = mode === 'after' ? JSON.parse(fs.readFileSync(file, 'utf8')) : null;
  const receipt = { startedAt: previous?.startedAt || (verifyOnly ? '2026-10-22T11:07:58.797Z' : new Date().toISOString()), project, region, functions: [] };
  for (const f of functions) {
    const name = f.name.split('/').pop();
    assert.equal(f.name.split('/')[3], region, `${name}: unexpected region`);
    if (verifyOnly) {
      assert.equal(f.buildConfig.runtime, 'nodejs22', `${name}: verification-only runtime`);
      assert.equal(f.serviceConfig.revision, verifiedRevisions[name], `${name}: not the previously verified deployment revision`);
    }
    assert.equal(f.environment, 'GEN_2', `${name}: generation`);
    assert.equal(f.state, 'ACTIVE', `${name}: state`);
    assert.equal(f.buildConfig.entryPoint, name, `${name}: entry point`);
    assert.equal(typeof f.serviceConfig.serviceAccountEmail, 'string', `${name}: missing service account`);
    assert.match(f.serviceConfig.service.split('/').pop(), /^[a-z][a-z0-9-]*$/, `${name}: invalid service name`);
    assert.ok((mode === 'after' ? ['nodejs22'] : ['nodejs20', 'nodejs22']).includes(f.buildConfig.runtime), `${name}: unexpected runtime`);
    if (previous) {
      const old = previous.functions.find(x => x.name === name);
      assert.equal(f.serviceConfig.serviceAccountEmail, old.serviceAccountEmail, `${name}: service account changed`);
    }
    receipt.functions.push({ name, runtime: f.buildConfig.runtime, state: f.state,
      updateTime: f.updateTime, revision: f.serviceConfig.revision,
      serviceName: f.serviceConfig.service.split('/').pop(),
      serviceAccountEmail: f.serviceConfig.serviceAccountEmail, uri: f.serviceConfig.uri });
  }
  if (mode === 'after') {
    for (const f of receipt.functions) {
      if (f.name === 'bootstrapFirstAdmin') continue; // This endpoint is intentionally never called in production tests.
      const target = new URL(f.uri);
      assert.equal(target.protocol, 'https:');
      assert.ok(target.hostname.endsWith('.run.app'), 'Only the verified Cloud Run URI is allowed.');
      const response = await fetch(target, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{"data":{}}', signal: AbortSignal.timeout(30000), redirect: 'error' });
      const payload = await response.json();
      assert.equal(response.status, 403, `${f.name}: unauthenticated status`);
      assert.equal(payload.error?.status, 'PERMISSION_DENIED', `${f.name}: unauthenticated guard`);
      f.unauthenticatedSmoke = 'passed';
    }
  }
  fs.writeFileSync(file, JSON.stringify(receipt, null, 2));
  console.log(JSON.stringify({ phase: mode, startedAt: receipt.startedAt, functions: receipt.functions.map(({ serviceAccountEmail, uri, ...item }) => item) }, null, 2));
}
main().catch(error => { console.error(`${error.name}: ${error.message}`); process.exitCode = 1; });
