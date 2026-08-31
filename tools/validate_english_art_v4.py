from __future__ import annotations

import json
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]


def require(condition: bool, message: str) -> None:
    if not condition:
        raise SystemExit("FAIL: " + message)


def validate_transparent_card(path: Path, label: str) -> None:
    require(path.exists(), f"missing image: {path.relative_to(ROOT)}")
    with Image.open(path).convert("RGBA") as image:
        require(image.size == (320, 320), f"{label} must be 320x320")
        alpha = image.getchannel("A")
        bbox = alpha.getbbox()
        require(bool(bbox), f"{label} is empty")
        require(bbox[0] >= 32 and bbox[1] >= 32 and bbox[2] <= 288 and bbox[3] <= 288, f"{label} violates 10% output inset: {bbox}")
        edge = max(
            alpha.crop((0, 0, 320, 1)).getextrema()[1],
            alpha.crop((0, 319, 320, 320)).getextrema()[1],
            alpha.crop((0, 0, 1, 320)).getextrema()[1],
            alpha.crop((319, 0, 320, 320)).getextrema()[1],
        )
        require(edge == 0, f"{label} has non-transparent edge residue")


for grade in (1, 2, 3):
    doc = json.loads((ROOT / "data" / f"english-words-grade{grade}-v2.json").read_text(encoding="utf-8"))
    words = doc["words"]
    require(len(words) == 500, f"grade {grade} must contain 500 words")
    require(len({word["word"] for word in words}) == 500, f"grade {grade} words must be unique")

grade3 = json.loads((ROOT / "data" / "english-words-grade3-v2.json").read_text(encoding="utf-8"))["words"]
generated = [word for word in grade3 if word["image"].startswith("images/english-generated-v4/")]
require(len(generated) == 433, f"expected 433 grade-3 generated cards, found {len(generated)}")
require(len({word["image"] for word in generated}) == 433, "grade-3 generated paths must be unique")
for word in generated:
    validate_transparent_card(ROOT / word["image"], word["word"])

repaired = {
    "car", "eight", "body", "older-brother", "eye", "head", "father", "mother",
    "older-sister", "student-reading", "child", "family", "friends", "teacher",
    "younger-brother", "younger-sister",
}
for key in repaired:
    validate_transparent_card(ROOT / "images" / "language-shared-v2" / f"{key}-v1.webp", key)

html = (ROOT / "index.html").read_text(encoding="utf-8")
require('existing.indexOf("images/english-generated-v4/") === 0' in html, "grade-3 v4 image resolver is missing")
require("ENGLISH_REPAIRED_V2_ART.has(repairedKey)" in html, "shared repair resolver is missing")
require('word.image.indexOf("images/english-generated-v4/") === 0' in html, "v4 picture-game pool is missing")

slicer = (ROOT / "tools" / "slice_english_atlas.py").read_text(encoding="utf-8")
require("SOURCE_GUARD_RATIO = 0.20" in slicer, "atlas overlap guard must be 20%")
require("len(group) >= largest * 0.35" in slicer, "disconnected-fragment filter is missing")

print("OK: grades 1-3 each contain 500 unique words")
print("OK: 433 grade-3 generated cards are unique, padded and edge-transparent")
print("OK: 16 repaired shared cards use the same padding and residue checks")
print("OK: atlas slicing uses a 20% overlap guard and disconnected-fragment filtering")
