const { reconcileStudentGoogleLinks } = require('../index.js');

async function main() {
  const result = await reconcileStudentGoogleLinks.run({
    auth: { uid: 'deployment-migration', token: { role: 'admin' } },
    data: {}
  });
  console.log(JSON.stringify(result));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
