from pathlib import Path
import re

path = Path("index.html")
text = path.read_text(encoding="utf-8")

viewport = '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">'
viewport_re = re.compile(r'<meta\s+name=["\']viewport["\'][^>]*>', re.I)

if viewport_re.search(text):
    text = viewport_re.sub(viewport, text, count=1)
elif re.search(r"<head\b[^>]*>", text, re.I):
    text = re.sub(r"(<head\b[^>]*>)", r"\1\n    " + viewport, text, count=1, flags=re.I)

marker = "learning-planet-ipad-gesture-lock"
if marker not in text:
    css = """
<style id="learning-planet-ipad-gesture-lock">
/* iPad/tablet landscape: keep the page fixed while interactive objects retain pointer control. */
*, *::before, *::after { box-sizing: border-box; }

html,
body {
  width: 100%;
  max-width: 100%;
  margin: 0;
  overflow-x: hidden !important;
  overscroll-behavior-x: none;
  -webkit-text-size-adjust: 100%;
}

body { touch-action: manipulation; }

img,
video,
svg { max-width: 100%; }

canvas,
.interactive-canvas,
.experiment-stage,
.pixi-container,
[data-interactive="true"] {
  touch-action: none;
  -webkit-user-select: none;
  user-select: none;
}

.learning-module,
.module-ui,
.module-panel,
.submodule,
.sub-module,
[class*="module-page"],
[class*="submodule"] {
  max-width: 100%;
  overflow-x: clip;
  overscroll-behavior-x: none;
}
</style>
"""
    if re.search(r"</head\s*>", text, re.I):
        text = re.sub(r"</head\s*>", css + "\n</head>", text, count=1, flags=re.I)
    else:
        text = css + "\n" + text

path.write_text(text, encoding="utf-8")

checks = [
    "maximum-scale=1, user-scalable=no, viewport-fit=cover",
    marker,
    "overflow-x: hidden !important",
    "touch-action: none",
]
for expected in checks:
    if expected not in text:
        raise SystemExit(f"iPad UX patch verification failed: missing {expected}")

print("iPad submodule gesture lock applied successfully")
