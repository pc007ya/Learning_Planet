# Safe partition updates (offline prototype)

This guard does not build, deploy, upload or delete. It is not wired into production CI.
Current Hosting auto-deploy and Pages workflows are unchanged by this branch.

## Verified provider behavior
- Firebase Hosting versions list all files. Its populateFiles response identifies hashes requiring upload; previously uploaded, unchanged contents need not be uploaded again. This is transport reuse, not a guarantee of billing deduplication.
- --only hosting selects Hosting, not a folder. Missing local files can disappear in a fresh deployment.
- Separate Hosting sites can have independent deployment targets, but routing/domain migration needs verification.
- GitHub Pages deploys one complete artifact. Its public deployment API has no per-path patch contract. Partitioned build caches must be reassembled into the complete website.
- Neither approach alone reduces the complete site's 1 GB Pages size limit or removes Firebase retained storage.

Sources:
https://firebase.google.com/docs/hosting/api-deploy
https://firebase.google.com/docs/hosting/multisites
https://firebase.google.com/docs/hosting/manage-hosting-resources
https://docs.github.com/en/rest/pages/pages
https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

## Safe incremental-build design
1. Record the complete last successful build snapshot, source SHA, build configuration and dependency-lock hash. Do not trust a cache from a different build context.
2. Rebuild reviewed subject partitions and explicit shared dependencies. Shared shell/auth changes require broader checks; dynamic references conservatively remain dependencies.
3. Assemble a complete candidate snapshot, retaining the untouched partitions byte-for-byte.
4. Compare complete manifests with this guard; reject missing old paths, out-of-scope edits, account/backend config edits, missing declared dependencies or size excess. A missing file is never interpreted as permission to delete.
5. If contents are unchanged, skip publication. Otherwise run full link/asset/auth checks and appropriate browser QA before publication.
6. For Pages, send the complete assembled artifact, never only a changed subject folder. For Firebase, use its supported hash upload protocol only if explicitly authorized; don't invent partial-folder behavior.
7. Separate sites/repos are a future architecture decision requiring base-path, routing, cache, login-origin and shared-asset tests; this prototype does not create them.

## Manifest format
Both JSON inputs map every public relative path to {"sha256": "<64 lowercase hex chars>", "bytes": 123}.
Hashes are of the local file bytes, not Firebase gzip upload hashes.
Optional dependencies JSON maps source paths to lists of required local paths. Dynamic references require explicit review beyond this list.

Run:
```sh
python3 tests/partition_update_guard_test.py
python3 scripts/partition_update_guard.py --base base.json --current current.json --scope modules/english-original --dependencies dependencies.json
```
The default complete-byte budget is a conservative 1,000,000,000 bytes.
Outputs go to stdout; no network access or filesystem modifications occur.
The caller must verify manifest completeness and file hashes against actual build bytes; a manifest-only guard cannot prove that external input is authentic.
