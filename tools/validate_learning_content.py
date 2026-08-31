from __future__ import annotations

import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]


def fail(message: str) -> None:
    raise SystemExit("FAIL: " + message)


html = (ROOT / "index.html").read_text(encoding="utf-8")
for grade in (1, 2):
    path = ROOT / "data" / f"english-words-grade{grade}-v2.json"
    words = json.loads(path.read_text(encoding="utf-8"))["words"]
    if len(words) != 500 or len({entry["word"] for entry in words}) != 500:
        fail(f"grade {grade} must contain 500 unique words")
    visual_count = sum(entry["emoji"] != "🔤" for entry in words)
    if visual_count < 250:
        fail(f"grade {grade} needs at least 250 directly illustrated words, found {visual_count}")
    for entry in words:
        if "/words-v2/" not in entry["image"] and "/english-generated-v1/" not in entry["image"]:
            fail(f"English card must use a cache-safe art path: {entry['word']}")
        art = ROOT / entry["image"]
        if not art.exists():
            fail(f"missing art: {entry['image']}")
        if art.suffix.lower() == ".svg":
            ET.parse(art)
            art_text = art.read_text(encoding="utf-8")
            if re.search(rf">\s*{re.escape(entry['word'])}\s*</text>", art_text, re.I):
                fail(f"answer text leaked into picture card: {entry['word']}")
        else:
            with Image.open(art) as picture:
                if picture.width < 800 or picture.height < 800:
                    fail(f"generated English art is too small: {entry['word']}")
    generated = [entry for entry in words if entry["image"].startswith("images/english-generated-v1/")]
    if len(generated) != 60 or len({entry["word"] for entry in generated}) != 60:
        fail(f"grade {grade} needs exactly 60 unique generated picture questions, found {len(generated)}")

grade3_path = ROOT / "data" / "english-words-grade3-v2.json"
grade3_words = json.loads(grade3_path.read_text(encoding="utf-8"))["words"]
if len(grade3_words) != 500 or len({entry["word"] for entry in grade3_words}) != 500:
    fail("grade 3 must contain 500 unique words")
grade3_generated = [entry for entry in grade3_words if entry["image"].startswith("images/english-generated-v4/")]
if len(grade3_generated) != 433 or len({entry["image"] for entry in grade3_generated}) != 433:
    fail(f"grade 3 needs 433 unique generated illustrations, found {len(grade3_generated)}")
for entry in grade3_generated:
    art = ROOT / entry["image"]
    if not art.exists():
        fail(f"missing grade-3 art: {entry['image']}")
    with Image.open(art).convert("RGBA") as picture:
        if picture.size != (320, 320):
            fail(f"grade-3 art must be 320x320: {entry['word']}")
        alpha = picture.getchannel("A")
        bbox = alpha.getbbox()
        if not bbox:
            fail(f"grade-3 art is empty: {entry['word']}")
        if bbox[0] < 32 or bbox[1] < 32 or bbox[2] > 288 or bbox[3] > 288:
            fail(f"grade-3 art violates the 10% safe inset: {entry['word']} {bbox}")
        edge = max(
            alpha.crop((0, 0, 320, 1)).getextrema()[1],
            alpha.crop((0, 319, 320, 320)).getextrema()[1],
            alpha.crop((0, 0, 1, 320)).getextrema()[1],
            alpha.crop((319, 0, 320, 320)).getextrema()[1],
        )
        if edge:
            fail(f"grade-3 art has non-transparent edge residue: {entry['word']}")
if 'existing.indexOf("images/english-generated-v4/") === 0' not in html:
    fail("grade-3 word cards do not resolve their dedicated v4 illustrations")
if 'word.image.indexOf("images/english-generated-v4/") === 0' not in html:
    fail("grade-3 generated illustrations are excluded from English picture games")

repaired_shared = {
    "car", "eight", "body", "older-brother", "eye", "head", "father", "mother",
    "older-sister", "student-reading", "child", "family", "friends", "teacher",
    "younger-brother", "younger-sister",
}
for key in repaired_shared:
    art = ROOT / "images" / "language-shared-v2" / f"{key}-v1.webp"
    if not art.exists():
        fail(f"missing repaired shared art: {key}")
    with Image.open(art).convert("RGBA") as picture:
        if picture.size != (320, 320):
            fail(f"repaired shared art must be 320x320: {key}")
        bbox = picture.getchannel("A").getbbox()
        if not bbox or bbox[0] < 32 or bbox[1] < 32 or bbox[2] > 288 or bbox[3] > 288:
            fail(f"repaired shared art violates safe inset: {key} {bbox}")
if 'ENGLISH_REPAIRED_V2_ART.has(repairedKey)' not in html:
    fail("repaired shared English art is not selected before legacy art")

slicer = (ROOT / "tools" / "slice_english_atlas.py").read_text(encoding="utf-8")
if "SOURCE_GUARD_RATIO = 0.20" not in slicer:
    fail("English atlas slicer must use a 20% overlap/residue guard")

river = next(entry for entry in json.loads((ROOT / "data" / "english-words-grade1-v2.json").read_text(encoding="utf-8"))["words"] if entry["word"] == "river")
if river["emoji"] == "🔤" or "🏞️" not in (ROOT / river["image"]).read_text(encoding="utf-8"):
    fail("river card must use a river landscape illustration")
if "this.englishGeneratedPicturePool().filter((word) => word.word.length >= 3" not in html:
    fail("letter scramble must use only generated illustrations")
if "englishPicturePool(grade)" not in html or "iconCounts[word.emoji] === 1" not in html:
    fail("picture-based English games must require a unique illustration per word")
if 'word.category !== "人物"' not in html:
    fail("picture-based English games must exclude ambiguous people-category words")
ambiguous_block = re.search(r'ambiguousPeople = new Set\(\[(.*?)\]\)', html)
if not ambiguous_block:
    fail("ambiguous people-word exclusion list is missing")
for ambiguous in ("mom", "mother", "sister", "brother", "girl", "boy", "son", "family"):
    if f'"{ambiguous}"' not in ambiguous_block.group(1):
        fail(f"ambiguous people word must be excluded from picture quiz: {ambiguous}")
for marker in (
    ".english-pair-board { width:100%;min-width:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr))",
    "englishGeneratedPicturePool(grade)",
    'word.image.indexOf("images/english-generated-v4/") === 0',
    ".slice(0, 6)",
    "正面卡 6 對 6",
    ".english-pair-board { grid-template-columns:repeat(3,minmax(0,1fr));gap:8px; }",
    "全站 120 題專圖庫・本年級 60 題",
    "60 題專圖庫 · 六對六三輪／60 秒",
):
    if marker not in html:
        fail(f"six-pair generated-art game marker is missing: {marker}")
if html.count("this.englishGeneratedPicturePool()") < 4:
    fail("all four English picture-game flows must use the generated 120-question bank")
for marker in (
    "englishPairRound: 0",
    "englishPairAssignments: {}",
    "timeLeft: 60",
    "filter((word) => !used.has(word.id))",
    "const incorrect = s.englishPairImages.filter",
    "s.englishPairRound >= 3",
    "const coins = 10, xp = 18",
    "finishEnglishPairTimeout()",
):
    if marker not in html:
        fail(f"three-round timed English pair challenge marker is missing: {marker}")
if "這張單字卡和圖片不同組" in html:
    fail("English pair cards must be checked only when the round is submitted")

math_block = re.search(r"const MATH_UNITS = \[(.*?)\n\];", html, re.S)
if not math_block:
    fail("MATH_UNITS not found")
math_catalog = math_block.group(1)
if 'id: "u39", grade: 2' not in math_catalog or '九九乘法相同答案配對' not in math_catalog:
    fail("existing grade-2 u39 multiplication module must be preserved")
grade3_expected = {
    "u40": "二位數除以一位數（整除）",
    "u41": "二位數除以一位數直式",
    "u42": "三位數除以一位數直式",
    "u43": "除法應用與驗算",
    "u44": "假分數與帶分數",
    "u45": "同分母分數比大小（進階）",
    "u46": "同分母分數的加法",
    "u47": "同分母分數的減法",
}
for unit_id, title in grade3_expected.items():
    if f'id: "{unit_id}", grade: 3' not in math_catalog or title not in math_catalog:
        fail(f"missing remapped grade-3 math unit: {unit_id} {title}")
    if f'unitId === "{unit_id}"' not in html and unit_id != "u47":
        fail(f"missing question generator for grade-3 unit: {unit_id}")
for marker in (
    'unitId === "u46" || unitId === "u47"',
    "figLongdiv: !!q && q.fig === \"longdiv\"",
    "figFracstack: !!q && q.fig === \"fracstack\"",
    "figFracadd: !!q && q.fig === \"fracadd\"",
    's.subject === "math" ? [1, 2, 3, 4, 5, 6]',
    "weeklyTeacherGrades: [1, 2, 3, 4, 5, 6]",
):
    if marker not in html:
        fail(f"grade-3 math integration marker is missing: {marker}")
geometry_expected = {
    "u50": (3, "方格數面積"), "u51": (3, "角的認識"),
    "u52": (4, "量角器與角度"), "u53": (4, "正方形與長方形"),
    "u54": (5, "長方體與正方體的體積"), "u55": (5, "容積與容量換算"),
    "u56": (5, "三角形面積"), "u57": (6, "圓周長與圓面積"),
}
for unit_id, (grade, title) in geometry_expected.items():
    if f'id: "{unit_id}", grade: {grade}' not in math_catalog or title not in math_catalog:
        fail(f"missing non-conflicting geometry unit: {unit_id} {title}")
    if f'unitId === "{unit_id}"' not in html:
        fail(f"missing geometry generator: {unit_id}")
for marker in (
    "computeGeoLessonScript(topic)", "buildGeoLessonFigure(lesson)",
    'screen: "geoLesson"', "🧑‍🏫 先看單元解說",
    "figAreaGrid", "figAngle", "figRectArea", "figCuboid", "figTriangle", "figCircle", "figCapacity",
):
    if marker not in html:
        fail(f"geometry lesson/visual marker is missing: {marker}")
if "longdivAnswerSlots" not in html or "先估商，再選出正確答案" not in html:
    fail("long division must hide quotient and remainder before the student answers")
if "longdivQuotient" in html or "longdivRemainder" in html:
    fail("long division answer is still leaked before answering")
vertical_expected = {
    "u58": "直式三位數加法（拖拖樂）",
    "u59": "直式三位數減法（拖拖樂）",
    "u60": "二位數乘法直式（拖拖樂）",
}
for unit_id, title in vertical_expected.items():
    if f'id: "{unit_id}", grade: 2' not in math_catalog or title not in math_catalog:
        fail(f"missing non-conflicting vertical drag unit: {unit_id} {title}")
for marker in (
    'unitId === "u58" || unitId === "u59" || unitId === "u60"',
    'fig: "vertInput", opts: []', 'screen: "vertLesson"',
    'data-vd-chip', 'data-vd-box', 'vertInputSubmit',
    'vertAnswer: this.initVertAnswer(qs[0])',
    'vertLessonGoPractice', 'showMcOptions:',
):
    if marker not in html:
        fail(f"vertical drag lesson/input marker is missing: {marker}")
hard_units = re.findall(r'id: "(u\d+)"[^\n]*difficulty: ([23])', math_block.group(1))
if not hard_units:
    fail("no two-star-or-higher math units found")
if 'difficulty >= 2 ? 50' not in html or '.slice(0, unit && (unit.kind === "math-game" || difficulty >= 2) ? 10' not in html:
    fail("two-star math units are not using a 50-question pool and a 10-question run")
for builder in ("buildFractionCircleChallenge", "buildShapeDetectChallenge", "buildMeasurementChallenge", "buildCubeChallenge", "buildGridPuzzleChallenge", "buildLogicChallenge", "buildMultiplicationMatchChallenge"):
    if builder not in html:
        fail(f"missing special math builder: {builder}")

for required in ("englishLibrary", "englishScramble", "englishMatch", "englishChain", "handRightCanvasAsset : item.handLeftCanvasAsset"):
    if required not in html:
        fail(f"missing feature marker: {required}")

print(f"OK: {len(hard_units)} math units at two stars or higher use >=50 pool / 10 unique draw")
print("OK: existing u39 preserved; grade-3 u40-u47 and their math visuals are integrated")
print("OK: geometry u50-u57 are added without ID conflicts; lesson screens and generators are present")
print("OK: vertical drag u58-u60 include guided lessons, drag/click input, grading, and per-question reset")
print("OK: long division no longer reveals quotient or remainder before answering")
print("OK: English grade 1 = 500 unique words; grade 2 = 500 unique words; all 1000 art assets load")
print("OK: generated English picture bank = 120 unique questions; pair challenge uses 3 rounds / 60 seconds / two-star reward")
print("OK: right/left held-item screen-side mapping is swapped for avatar perspective")
