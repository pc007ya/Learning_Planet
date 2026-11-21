"""Offline partition-update guard. Does not build, upload, deploy, or delete anything.
Inputs must describe COMPLETE verified build snapshots, never only changed files.
No manifest hash is a Firebase upload hash (that requires deterministic gzip first).
"""
import argparse
import json
import re
from pathlib import PurePosixPath

PROTECTED = ("auth-v2/", "functions/", "roles/",)
PROTECTED_FILES = {"firestore.rules", "firebase.json", "firebase.hosting.json", ".firebaserc", "src/firebase-config.js"}

def validate(manifest):
    if not isinstance(manifest, dict) or not manifest:
        raise ValueError("complete non-empty manifest required")
    for path, value in manifest.items():
        if (not isinstance(path, str) or path.startswith(("/", ".")) or "\\" in path
            or str(PurePosixPath(path)) != path or ".." in path.split("/")):
            raise ValueError("unsafe path")
        if not isinstance(value, dict) or set(value) != {"sha256", "bytes"}:
            raise ValueError("invalid manifest record")
        if not re.fullmatch(r"[a-f0-9]{64}", value["sha256"] or ""):
            raise ValueError("invalid SHA256")
        if type(value["bytes"]) is not int or value["bytes"] < 0:
            raise ValueError("invalid byte count")

def in_scope(path, scopes):
    return any(path == scope.rstrip("/") or path.startswith(scope.rstrip("/") + "/")
               for scope in scopes)

def plan(base, current, scopes, dependencies=None, max_bytes=1_000_000_000):
    validate(base); validate(current)
    if not scopes or any(not s or s.startswith(("/", ".")) or ".." in s.split("/")
                         or "\\" in s for s in scopes):
        raise ValueError("explicit safe scopes required")
    missing = sorted(set(base) - set(current))
    if missing:
        raise ValueError("refusing omitted/deleted paths: " + ", ".join(missing))
    changed = sorted(p for p in current if base.get(p) != current[p])
    for path in changed:
        if path.startswith(PROTECTED) or path in PROTECTED_FILES:
            raise ValueError("account/backend/config change requires separate workflow: " + path)
        if not in_scope(path, scopes):
            raise ValueError("change outside reviewed scope: " + path)
    for source, targets in (dependencies or {}).items():
        if source not in current or any(target not in current for target in targets):
            raise ValueError("missing declared dependency")
    total = sum(x["bytes"] for x in current.values())
    if total > max_bytes:
        raise ValueError("complete site exceeds byte budget: " + str(total))
    return {
        "mode": "offline-plan-only",
        "deploy": False,
        "changedPaths": changed,
        "unchangedPaths": sorted(set(current) - set(changed)),
        "completeManifest": current,
        "completeBytes": total,
        "changedBytes": sum(current[p]["bytes"] for p in changed),
        "skipPublication": not changed,
        "limitations": [
            "Not a delta artifact: publish a verified COMPLETE site only.",
            "Declared dependencies do not prove coverage of dynamic runtime references.",
            "Changing Hosting routing and cleanup require separate verification.",
            "No claim about provider storage deduplication or actual bill savings."
        ]
    }

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base", required=True)
    parser.add_argument("--current", required=True)
    parser.add_argument("--scope", action="append", required=True)
    parser.add_argument("--dependencies")
    parser.add_argument("--max-bytes", type=int, default=1_000_000_000)
    args = parser.parse_args()
    def read(path):
        with open(path, encoding="utf-8") as f: return json.load(f)
    try:
        result = plan(read(args.base), read(args.current), args.scope,
                      read(args.dependencies) if args.dependencies else None, args.max_bytes)
    except ValueError as error:
        parser.exit(2, str(error) + "\n")
    print(json.dumps(result, ensure_ascii=False, sort_keys=True, indent=2))

if __name__ == "__main__":
    main()
