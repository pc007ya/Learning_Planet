# Offline partition build cache evidence (not deployed)

## Scope
Draft PR only. No workflow changes, merges, publication, Firebase requests or Cloudflare changes.
This is an experimental persistent **Vite build-unit cache**, not a partial-deployment system.
The current production `npm run check` invokes 14 Vite builds, not three independently built school subjects.

## Tested baseline
Source snapshot: `0e39222ba892fbc823a884bad636cfb484501169`.
Isolated git archive copy, Node v24.22.1 (CI uses Node 22), locally installed dependencies with byte-identical package-lock.json.
Vite `write:false` avoids overwriting module directories. Config loading can create Vite temporary files in the disposable copy.
No network calls were needed.

## Evidence
`scripts/partition-clean-build-audit.mjs`:
- All 14 Vite builds: 104 generated output files.
- Unchanged cache: 14 hits; generated path/SHA-256 map equals a new full 14-unit build.
- Single tides config change: only tides rebuilt, 13 hits; equals a new full 14-unit build.
- Shared package lock change: all 14 rebuilt; equals a new full 14-unit build.
- Missing required tides entry: build fails rather than treating the old cache as success.

`scripts/partition-build-cache-test.mjs`:
- Persistent cache saves actual output bytes plus hashes, dependency lists and complete unit manifests.
- A newly created cache instance restores all 14 units, with all 104 output hashes equal to clean baseline.
- A real tides source edit changes output, rebuilds tides only (13 hits), and equals an independent uncached tides build. Other units equal baseline.
- Shared lock change invalidates all 14, resulting output equals the clean baseline.
- Required source deletion fails closed.
- Synthetic assembly test replaces a unit snapshot, removes its stale generated output, and preserves unrelated auth/page entries.
- All tests completed with exit code 0. Source and lock mutations were restored and byte-compared afterward.

## Reproduction
**Only run mutation tests in a disposable git-archive copy, never a working checkout.**
Provide installed dependencies matching the lockfile, then run from that copy's root:
```sh
node scripts/partition-clean-build-audit.mjs
node scripts/partition-build-cache-test.mjs
```
The latter stores experimental caches under /tmp/lp-partition-cache-records.
A test interruption can leave mutations in the disposable copy; discard that copy, not user work.

## Cache and deletion boundaries
Cache keys cover actual Rollup/Vite module/watch files, each config, package.json, lockfile, Node version, and source file inventory.
The two current config plugins' external inputs (story catalog and cube-book data) are explicit dependencies.
Future plugins, environment-driven builds, globbed assets outside src, or extra files read outside Rollup require key review before use.
Caches store complete unit outputs, not a changed-file delta.
Always assemble onto a FRESH complete source snapshot; never overlay a prior deployed folder.
Honor each config's emptyOutDir semantics: several outputs mix tracked hand-written files and generated files, so clearing every output directory would delete required resources.
Deleting a runtime resource still requires an explicit whole-site dependency/deletion review; this prototype does not authorize production deletion.

## Not yet verified or enabled
- Not wired to CI, remote cache service, staging or deployment.
- Does not replace all npm check tests, iPad patching, science integration, nature transport packing, analytics injection, complete site link/runtime checks, or authentication/progress QA.
- No full published-site artifact equivalence claim. The equality evidence covers generated Vite outputs.
- Node 22 reproduction and cache poisoning/trust boundary review still required for CI adoption.
- Does not reduce the full Pages site's size, remove Firebase historical versions, or establish billing savings.
- GitHub Pages still requires a complete publication artifact; Firebase Hosting partial transfer is not partial-site publication.
