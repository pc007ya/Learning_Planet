#!/usr/bin/env python3
"""Split a generated 4x4 vocabulary atlas into clean, padded WebP cards."""
from __future__ import annotations

import argparse
from collections import deque
from pathlib import Path

from PIL import Image, ImageFilter


GRID = 4
OUTPUT_SIZE = 320
SAFE_INSET = 32  # Ten percent on every edge prevents card cropping.
SOURCE_GUARD_RATIO = 0.20  # Treat the outer fifth as a likely overlap/residue zone.


def components(mask: Image.Image) -> list[list[tuple[int, int]]]:
    width, height = mask.size
    pixels = mask.load()
    seen: set[tuple[int, int]] = set()
    found: list[list[tuple[int, int]]] = []
    for y in range(height):
        for x in range(width):
            if (x, y) in seen or not pixels[x, y]:
                continue
            queue = deque([(x, y)])
            seen.add((x, y))
            group: list[tuple[int, int]] = []
            while queue:
                cx, cy = queue.popleft()
                group.append((cx, cy))
                for nx, ny in ((cx - 1, cy), (cx + 1, cy), (cx, cy - 1), (cx, cy + 1)):
                    if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in seen and pixels[nx, ny]:
                        seen.add((nx, ny))
                        queue.append((nx, ny))
            found.append(group)
    return sorted(found, key=len, reverse=True)


def clean_cell(cell: Image.Image) -> tuple[Image.Image, dict[str, int]]:
    cell = cell.convert("RGBA")
    alpha = cell.getchannel("A")
    seed = alpha.point(lambda value: 255 if value >= 96 else 0)
    groups = components(seed)
    if not groups:
        raise ValueError("cell has no foreground subject")

    largest = len(groups[0])
    minimum = max(90, round(cell.width * cell.height * 0.0035), round(largest * 0.018))
    guard_x = cell.width * SOURCE_GUARD_RATIO
    guard_y = cell.height * SOURCE_GUARD_RATIO
    kept = [groups[0]]
    for group in groups[1:]:
        if len(group) < minimum:
            continue
        mean_x = sum(point[0] for point in group) / len(group)
        mean_y = sum(point[1] for point in group) / len(group)
        inside_guard = guard_x <= mean_x <= cell.width - guard_x and guard_y <= mean_y <= cell.height - guard_y
        # Semantic multi-part subjects such as a pair of hands or several
        # counting pieces stay intact. Small unconnected pieces whose centre
        # falls in the outer 20% are treated as neighbouring-cell residue.
        if inside_guard or len(group) >= largest * 0.35:
            kept.append(group)
    core = Image.new("L", cell.size, 0)
    core_pixels = core.load()
    for group in kept:
        for x, y in group:
            core_pixels[x, y] = 255

    # Recover two antialiasing pixels around every retained subject while
    # excluding the low-alpha colored dust produced between atlas cells.
    halo = core.filter(ImageFilter.MaxFilter(5))
    cleaned_alpha = Image.new("L", cell.size, 0)
    source_pixels, halo_pixels, output_pixels = alpha.load(), halo.load(), cleaned_alpha.load()
    for y in range(cell.height):
        for x in range(cell.width):
            value = source_pixels[x, y]
            if halo_pixels[x, y] and value >= 24:
                output_pixels[x, y] = value

    cleaned = cell.copy()
    cleaned.putalpha(cleaned_alpha)
    bbox = cleaned_alpha.getbbox()
    if not bbox:
        raise ValueError("cell became empty after fragment cleanup")
    visible = cleaned.crop(bbox)
    available = OUTPUT_SIZE - SAFE_INSET * 2
    scale = min(available / visible.width, available / visible.height)
    size = (max(1, round(visible.width * scale)), max(1, round(visible.height * scale)))
    visible = visible.resize(size, Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (OUTPUT_SIZE, OUTPUT_SIZE), (0, 0, 0, 0))
    canvas.alpha_composite(visible, ((OUTPUT_SIZE - size[0]) // 2, (OUTPUT_SIZE - size[1]) // 2))
    edge_alpha = max(
        max(canvas.getchannel("A").crop((0, 0, OUTPUT_SIZE, 1)).getextrema()),
        max(canvas.getchannel("A").crop((0, OUTPUT_SIZE - 1, OUTPUT_SIZE, OUTPUT_SIZE)).getextrema()),
        max(canvas.getchannel("A").crop((0, 0, 1, OUTPUT_SIZE)).getextrema()),
        max(canvas.getchannel("A").crop((OUTPUT_SIZE - 1, 0, OUTPUT_SIZE, OUTPUT_SIZE)).getextrema()),
    )
    return canvas, {"components": len(groups), "kept": len(kept), "edge_alpha": edge_alpha}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("atlas", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("words", nargs=16)
    parser.add_argument("--atlas-copy", type=Path)
    args = parser.parse_args()

    atlas = Image.open(args.atlas).convert("RGBA")
    args.output.mkdir(parents=True, exist_ok=True)
    if args.atlas_copy:
        args.atlas_copy.parent.mkdir(parents=True, exist_ok=True)
        atlas.save(args.atlas_copy, optimize=True)

    reports = []
    for index, word in enumerate(args.words):
        row, column = divmod(index, GRID)
        left = round(atlas.width * column / GRID)
        right = round(atlas.width * (column + 1) / GRID)
        top = round(atlas.height * row / GRID)
        bottom = round(atlas.height * (row + 1) / GRID)
        source_cell = atlas.crop((left, top, right, bottom))
        card, report = clean_cell(source_cell)
        destination = args.output / f"{word}-v1.webp"
        card.save(destination, "WEBP", lossless=True, method=6)
        if report["edge_alpha"] != 0:
            raise ValueError(f"{word}: non-transparent output edge")
        reports.append(f"{word}: components={report['components']} kept={report['kept']} edge=0")
    print("\n".join(reports))


if __name__ == "__main__":
    main()
