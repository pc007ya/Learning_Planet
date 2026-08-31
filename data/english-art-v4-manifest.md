# English vocabulary art v4

## Scope

- Grade 3: 433 word-specific transparent WebP illustrations in `images/english-generated-v4/`.
- Shared repair set: 16 replacement illustrations in `images/language-shared-v2/` for car, eight and person-related cards affected by legacy atlas overlap or cropping.
- Source atlases and QA contact sheets are retained outside the deployed site at `科普材料/英文單字圖集-v4/`.

## Generation prompt system

The built-in image generation tool was used. Each atlas prompt requested an exact 4×4, left-to-right/top-to-bottom word order; a transparent background; one isolated primary-school vocabulary concept per cell; no text, letters, numerals, emoji, logos or watermark; no shared background or overlap; and every subject centred with generous transparent gutters. Abstract words were assigned a literal child-friendly visual metaphor in their individual cell description.

The shared repair atlas additionally required fully clothed, non-photorealistic storybook figures, complete from hair to shoe soles, and at least 20% transparent space around each concept.

## Slicing and QA rules

- Slice using the proportional 4×4 cell boundaries so non-divisible source dimensions do not drift.
- Treat the outer 20% of each source cell as the overlap/residue guard zone.
- Always retain the largest connected subject. Retain additional disconnected parts only when centred or at least 35% of the largest component; discard small outer-zone fragments.
- Restore only a 2px antialias halo around retained components.
- Fit each result into a 320×320 transparent canvas with a 32px (10%) output safety inset.
- Reject any result with non-transparent pixels on the output edge.
- Verify all outputs with contact sheets and automated size, alpha, inset, uniqueness and file-existence checks.
