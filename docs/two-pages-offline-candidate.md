# Two independent GitHub Pages units: offline candidate only

## Requirement and provider constraints
This addresses two independently published sites, NOT two partial deployments overwriting one site.
[GitHub limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) cap a published site at 1 GB; ZIP size is not the published-file size.
[GitHub site types](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) allow one project site per repository, normally under the same owner's github.io origin with distinct repository paths.
GitHub's acceptable-use and bandwidth rules still apply; splitting is not permission to bypass those rules.

## Verified source and measurements
Pinned full staged source: 0e39222ba892fbc823a884bad636cfb484501169, including its generated build output.
Baseline: 7,626 files / 1,980,772,800 bytes.
After asset routing rewrites and required entry files:
- App unit: **5,486 files / 991,387,694 bytes**, remaining **8,612,306 bytes** below decimal 1 GB.
- Asset unit: **2,143 files / 989,471,212 bytes**, remaining **10,528,788 bytes**.
- All 7,626 original paths occur in exactly one unit. All moved original asset bytes are SHA-256 identical.
- No image downsampling, lossy conversion, course deletion or ZIP-based size claim.
- The asset unit adds only an inert 159-byte entry page and .nojekyll; it has no login or application script.
- The app unit adds .nojekyll. All existing course HTML stays here; every auth-v2/, roles/ and src/firebase-config file remains byte-identical.
- 22 text files have public resource URL changes, including production-scenes/princess-weekend.json.
- 14 modified JS/MJS files passed syntax checks; the reproducible splitter ran under Node 22.
- Two runs produced identical original-file manifests before the inert entry-file addition; the entry and final sizes were then checked explicitly.

## Split choice
Asset unit contains complete directories:
- images/story/
- images/story-vocabulary/
- images/science/
- images/math-grade1/

Everything else remains in the app unit.
Expected asset URL prefix: /Learning_Planet_Assets/ followed by its original relative path.
The app keeps /Learning_Planet/ course paths. This is intended only for the same-owner default GitHub Pages hostname.
Two existing story-reader checks that distinguish global image paths from book-relative paths are updated to recognize the new prefix. Relative CSS ./ and ../ asset references are normalized.
The tool does NOT implement a generic network interceptor or transfer credentials.

## Repository access check
The connected GitHub inventory lists pc007ya/Learning_Planet as public, with admin and push permission.
It does not list a dedicated Learning_Planet_Assets repository. Other accessible repositories belong to unrelated projects and have not been repurposed.
No repository, Pages configuration, token, account, service or deployment was created.
Inventory repository size is repository metadata, not published-site size or a free-capacity guarantee.

## Run offline
```sh
python3 tools/two-pages-stage.py /absolute/complete-staging /absolute/fresh-output
```
The output directory must be fresh and disjoint from the source.
The tool creates app/, assets/, split-manifest.json and split-report.json, rejects either complete unit reaching 1,000,000,000 bytes, and reports deploy:false.
It is a packaging candidate, NOT a deployment workflow.

## Unresolved release gates
1. Independent review and complete browser/runtime route verification remain required. Syntax checks are not browser acceptance.
2. A scan found dynamic template URLs and literal paths already absent from the baseline, including legacy reader branches. Their runtime fallback behavior must be checked; do not report them all as new missing files or claim they are harmless.
3. Verify actual Pages origin/custom-domain settings. The proposed root-relative asset prefix is NOT valid automatically at learnplanet.win; the formal domain's routing remains unknown.
4. Same-owner project paths share an origin, avoiding a new hostname for app login. Actual Google popup, password/role paths, persisted session and progress remain to be verified without touching real student progress.
5. Create and configure the dedicated second repository only through an authorized step. Do not deploy both artifacts to the existing repository; the latter deployment would replace the first.
6. Initial release must publish and verify the full assets unit before the app starts referencing it. Subsequent releases must preserve assets still referenced by the preceding app release, and include their bytes in the size budget.
7. Headroom is only about 8.6 MB / 10.5 MB. New lessons or compatibility/rollback assets may immediately exceed the limit. Fail closed rather than dropping content.
8. Current prototype uses a pinned historical snapshot. Rebuild, remeasure and retest current main before any release.
9. Existing Firebase backend/Auth/Firestore stay untouched; this proposal does not itself reduce historical Hosting storage charges.

No merge, deployment, formal routing change or Firebase traffic test has occurred.
