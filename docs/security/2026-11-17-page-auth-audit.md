# Direct page authentication audit

This is a client entry control improvement, NOT server-side confidentiality for static files.

Inventory: 108 HTML files in the repository. Anonymous HTTP observations before this patch: 105 returned 200; three already-excluded previews returned 404. HTTP 200 is expected for a static login shell and does not alone demonstrate authorization bypass.

## Scope
- 71 non-Chinese learning/story pages: initially hidden/inert; application scripts deferred until the shared Firebase token-role gate succeeds. Includes 14 older story-guard entries so local parent DEMO is not a substitute for Firebase authorization.
- Four Chinese pages: preceding PR24 applies shared gate.
- 20 folder route shells load the root login application. Code review, not proof of every role flow.
- Root index: login UI and explicitly labelled DEMO homepage trial remain available.
- Four roles HTML files are UI fragments (no independent application script), not backend authorization. Their standalone static markup remains public.
- Original English iframe: existing parent-host bootstrap rejects standalone loading. No change; full logged-in/role switching testing remains necessary.
- Development docs and QA are excluded from both deployment artifacts; existing three preview exclusions retained.

## Actual verification
- All 108 known URLs were anonymously HTTP-read; response evidence in adjacent JSON.
- Cloud Chrome before patch: math-geometry direct page displayed controls; navigating same browser to /math/ showed student login. This reproduces direct page UI gap without logging in or accessing student records.
- Local browser QA could not run: cloud browser localhost connection refused; local headless Chromium aborted. No claim of post-patch browser pass or actual student/teacher/admin login pass.
- Node tests check 71 gates/script inertness, classic/module dependency order, and artifact exclusions. Shared guard role/logout tests belong to PR24.
- Full npm check runs typechecks, tests and builds; results must be reported separately with commit/CI status.

## Limits
Static HTML, JavaScript, textbook metadata and media are still public hosting assets. This change cannot make them private or replace Firestore/Functions authorization. Backend rules audit is separate. Non-Chinese page application behavior and valid login/role/logout flows require post-deploy browser testing with authorized test accounts. No actual student data was read or changed during this audit.
