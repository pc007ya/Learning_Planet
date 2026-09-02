# Learning Planet image asset standard

## Reusable unit icons

- Generate source art as one exact **4 × 4 sprite sheet** in row-major order.
- Every sheet uses 16 equal square cells with no visible grid, text, labels, watermark, or Emoji stand-ins.
- Every cell keeps its subject inside the central 60% of the cell, leaving at least **20% transparent safety margin** on the top, right, bottom, and left.
- Background transparency must be genuine PNG alpha. A rendered gray-and-white checkerboard is a failure.
- Remove unrelated fragments, isolated residual pixels, and cropped parts before splitting the sheet.
- Split final icons to individual **720 × 720 transparent PNGs**. Keep every icon centered with consistent perceived scale.
- Save source sheets under `images/math-grade1/sheets/` and individual versioned assets under `images/math-grade1/v2/`.
- Do not overwrite earlier source assets. Update the consuming unit to the new versioned file.

## Question objects

- Use the same 720 × 720 canvas and 20% alpha-safe border.
- Keep exactly one reusable object per file unless the learning concept requires a grouped object.
- No object may touch the canvas edge. Handles, bases, shadows, and other meaningful parts must remain complete.
- Reject files with floating fragments, baked checkerboards, accidental text, or unrelated decoration.
