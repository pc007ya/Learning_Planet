# Node 22 full-check and staged-output audit

This supplements the earlier partial build evidence. **No deployment or production changes.**

## Pinned input and environment
- Snapshot: `0e39222ba892fbc823a884bad636cfb484501169`, not a claim about later main commits.
- Two complete disposable archive copies named `clean` and `cached`.
- Independent installed dependency copy; its package-lock matches the pinned source.
- Official Node v22.23.5 Linux x64 archive, SHA-256 verified:
  `cdeb8670a0c81f51b4dc4ac61919f9b1ad917b304bf8221eb939570663d240f8`.
- No npm install, Firebase calls, live site fetches, Cloudflare changes or deployment during the test runs.
- The original repository remained unchanged.

## What actually passed
1. Both copies received the production iPad patch and nature-asset packing/manifest verification.
2. Clean copy ran the complete original `npm run check`, including Node tests, data integration, typecheck, Vitest and all 14 Vite builds.
3. Cached copy ran every non-build command from that same check sequence (including npm pretest hooks), then built all 14 units into a persistent byte cache, reopened it and restored 14/14 cache hits.
4. Both Vitest runs: **168 files / 1,211 tests passed**.
5. Node 22 standalone cache mutation tests also passed: one source edit rebuilt one unit, shared lock changes rebuilt all, required-source deletion failed closed, and stale-output assembly preserved unrelated auth/pages.
6. Materialized complete staging directories included all static resources, generated data/modules, the explicitly restored src/firebase-config.js and the production analytics snippet.
7. Every staged pathname, file size and SHA-256 matched:
   - Clean: **7,626 files / 1,980,772,800 bytes**
   - Cached: **7,626 files / 1,980,772,800 bytes**
   - **0 differences; comparison and combined run exit code 0**

## Preserve the negative evidence
The first attempt ran both full test chains concurrently with default Vitest concurrency.
Clean failed 3 tests and cached failed 6 tests, all with the existing 5-second test timeout.
These are recorded failures, not reported as passes.
The successful retry ran the copies sequentially with an isolated Vitest wrapper adding:
`--maxWorkers=2 --no-file-parallelism`.
No test assertion or timeout was changed. No package.json, lockfile or project source was changed for this retry.
This is evidence for the bounded local configuration, not proof the unchanged original CI concurrency will always pass.

## Staging caveat
The environment has no rsync. The tested Python harness materializes the same workflow exclusions, firebase-config copy and analytics injection.
This is a complete file-output comparison under that adapter, **not an execution of the exact original rsync command or a GitHub Actions run**.
Provider upload/deploy behavior, file metadata semantics and browser/account runtime verification remain outside this test.

## Reproduction outline
Use disposable copies only. Mutation tests are unsafe in a normal working checkout.
1. Export the pinned snapshot into AUDIT/clean and AUDIT/cached.
2. Place matching installed dependencies in AUDIT/node_modules; link each disposable copy's node_modules to it.
3. Copy tools/partition-cache-audit/cached-build.mjs and stage-and-compare.py to AUDIT/.
4. Copy scripts/partition-build-cache.mjs to AUDIT/partition-build-cache.mjs.
5. Select official Node 22 in PATH. Preserve the original Vitest launcher in the isolated dependency copy and replace only that copy's launcher with:
```sh
#!/bin/sh
exec node "$(dirname "$0")/../vitest/vitest.mjs" "$@" --maxWorkers=2 --no-file-parallelism
```
6. In each source copy run:
```sh
python3 scripts/patch-ipad-ux.py
python3 scripts/pack-nature-assets.py --verify-manifest
```
7. Run sequentially:
```sh
(cd AUDIT/clean && npm run check)
(cd AUDIT/cached && node -e 'const p=require("./package.json");console.log(p.scripts.check.split(" && ").filter(s=>!s.startsWith("npm run build:")).join(" && "))' | bash && node ../cached-build.mjs)
python3 AUDIT/stage-and-compare.py
```
Use real absolute AUDIT paths, preserve logs, and keep the output cache outside both source trees.
The staging harness requires fresh clean-site and cached-site destinations; use a fresh audit directory for reruns.

## Deployment remains blocked
- No workflow integration or production enablement.
- Complete staging is approximately **1.98 GB**. Caching build work does not make this fit Pages' 1 GB published-site limit.
- No Firebase historical-version cleanup or billing savings claim.
- Production routing/login, browser QA and account/progress checks remain separate requirements.
