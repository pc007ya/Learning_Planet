# Selected curriculum loading and lossless model transport

Candidate only. No deployment performed by this change.

## Scope

- Publisher curriculum is split into 24 publisher × grade × semester pairs. A map requests only the selected catalog; opening practice requests only that scope's catalog and exercises. Legacy topic mode is unchanged.
- Canonical `catalog.json` / `exercises.json` remain authoring sources. Run `python scripts/split-science-curriculum.py` after changing them. Selected exercises are 146,607–212,728 bytes instead of the 5,477,173-byte full source.
- Same-page map remembers publisher/semester for the current learner and grade during the app session. No account data is uploaded.
- GLBs are losslessly gzip packed (`.glb.gzip.bin`, intentionally not server Content-Encoding). Modern browsers fetch only the chosen asset's pack, explicitly decompress it, verify original size and SHA-256, and then use unchanged existing model QA. Unsupported browsers fetch canonical GLB. Corrupt/failed packs fail closed, not silently fall back to another grade.
- Run `python scripts/pack-nature-assets.py` whenever model bytes change. Packed binaries are build outputs, not committed duplicates. Both hosting workflows and the nature-test prehook generate packs with `--verify-manifest`; a mismatch fails the build before staging. Generated metadata pins packed size, original size and SHA-256. Original model manifests/navigation/collision hashes are unchanged.

## Measured file sizes, not live network or rendering benchmarks

| Grade | Base + V3 + V4 original bytes | Packed payload bytes |
|---|---:|---:|
| 1 | 49,754,552 | 14,689,664 |
| 2 | 47,639,320 | 14,300,355 |
| 3 | 45,038,600 | 13,927,135 |
| 4 | 53,478,216 | 19,377,217 |
| 5 | 52,326,304 | 19,295,124 |
| 6 | 50,294,972 | 18,500,311 |

These exclude scripts, metadata, the small rocket and grade 3 botanical pilot. Server transfer encoding/cache can change actual network totals. Browser parse/GPU cost is NOT reduced by lossless transport compression. No load-time claim is made before browser QA.

110 unit images were already WebP, maximum edge 256 px; all together 2,404,312 bytes, individual 11,848–40,244 bytes. Only the selected unit image is requested by its renderer.

## Remaining limitation

The shared grade terrain still contains both publishers' and both semesters' entrance geometry. Filters now limit downloaded curriculum content, not that shared geometric world. Splitting/removing entrance meshes is NOT part of this candidate: the reviewed V3/V4 layers rely on source hashes, node names and complete navigation. It requires dedicated rebaking and collision/visual acceptance. Do not describe this as publisher-specific 3D geometry.

## Verification

- Every compressed pack restores byte-identical original GLB (all packs checked).
- All 24 scoped datasets pass the existing curriculum validator; 110 units total.
- Focused transport tests cover requested-only fetch, fallback and abort. Existing map/practice history and cancellation tests are updated to observe scoped request filenames.
- Full aggregate check and browser acceptance must be recorded separately by the integrating task. No live browser/network measurement is included here.

Final pre-integration aggregate `npm run check`: passed (including typecheck, all configured tests and all builds). Browser/network acceptance remains pending.
