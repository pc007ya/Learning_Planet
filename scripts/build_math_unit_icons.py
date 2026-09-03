#!/usr/bin/env python3
"""Build normalized grade 2–6 math unit icons from generated 4×4 sheets."""

from __future__ import annotations

import argparse
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage


SHEET_MAP = [
    [
        (2, "u30", "measurement-lab"),
        (2, "u32", "cube-spatial-reasoning"),
        (2, "u37", "two-digit-add-sub-challenge"),
        (2, "u5", "two-digit-add-sub"),
        (2, "u13", "three-digit-add-sub"),
        (2, "u6", "multiplication-table"),
        (2, "u7", "clock-and-time"),
        (2, "u8", "centimeter-and-meter"),
        (2, "u9", "equal-sharing"),
        (2, "u10", "fraction-introduction"),
        (2, "u11", "fraction-comparison"),
        (3, "u39", "exact-division"),
        (3, "u40", "two-digit-long-division"),
        (3, "u41", "three-digit-long-division"),
        (3, "u42", "division-checking"),
        (3, "u43", "improper-mixed-fractions"),
    ],
    [
        (3, "u44", "same-denominator-comparison"),
        (3, "u45", "same-denominator-addition"),
        (3, "u46", "same-denominator-subtraction"),
        (3, "u50", "grid-area"),
        (3, "u51", "angle-types"),
        (4, "u52", "protractor-angle"),
        (4, "u53", "rectangle-square-area"),
        (5, "u54", "cuboid-cube-volume"),
        (5, "u55", "capacity-conversion"),
        (5, "u56", "triangle-area"),
        (6, "u57", "circle-circumference-area"),
        (3, "u58", "place-value-ten-thousand"),
        (3, "u59", "four-digit-add-sub"),
        (3, "u60", "multi-digit-multiplication"),
        (3, "u61", "millimeter-conversion"),
        (3, "u62", "decimal-tenths"),
    ],
    [
        (2, "u47", "three-digit-addition-drag"),
        (2, "u48", "three-digit-subtraction-drag"),
        (2, "u49", "column-multiplication-drag"),
        (2, "u12", "animal-leg-reasoning"),
        (2, "u22", "continuous-add-sub"),
        (2, "u23", "addition-within-200"),
        (2, "u24", "subtraction-within-200"),
        (2, "u25", "addition-within-500"),
        (2, "u26", "subtraction-within-500"),
        (2, "u27", "tens-times-ones"),
        (2, "u28", "tens-times-ones-challenge"),
    ],
]

# The third generated sheet intentionally leaves its eighth cell empty; the
# remaining four source icons occupy the next row. Outputs are still packed
# consecutively into the first eleven cells of the normalized 4×4 sheet.
SOURCE_CELL_OVERRIDES = {2: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11]}


def extract_icon(cell: Image.Image) -> Image.Image:
    source_rgba = cell.convert("RGBA")
    source_alpha = np.asarray(source_rgba.getchannel("A"))
    if source_alpha.min() < 250:
        rgb = np.asarray(source_rgba.convert("RGB")).copy()
        seed = source_alpha >= 18
    else:
        rgb = np.asarray(cell.convert("RGB")).copy()
        high = rgb.max(axis=2)
        low = rgb.min(axis=2)
        mean = rgb.mean(axis=2)

        # Generated checker tiles are bright and neutral. Keep saturated pixels
        # and darker outlines, then fill their enclosed pale faces.
        checker = ((high - low) <= 10) & (mean >= 225)
        seed = ~checker

    height, width = seed.shape
    labels, count = ndimage.label(seed)
    keep = np.zeros(seed.shape, dtype=bool)
    for label_id in range(1, count + 1):
        component = labels == label_id
        if component.sum() < 8:
            continue
        ys, xs = np.nonzero(component)
        touches_edge = xs.min() <= 1 or ys.min() <= 1 or xs.max() >= width - 2 or ys.max() >= height - 2
        center_x, center_y = xs.mean() / width, ys.mean() / height
        if touches_edge and not (0.12 <= center_x <= 0.88 and 0.12 <= center_y <= 0.88):
            continue
        keep |= component

    if source_alpha.min() < 250:
        alpha = np.where(keep, source_alpha, 0).astype(np.uint8)
        rgba = Image.fromarray(np.dstack((rgb, alpha)), "RGBA")
    else:
        keep = ndimage.binary_closing(keep, iterations=2)
        filled = ndimage.binary_fill_holes(keep)
        rgb[filled & ~keep] = (250, 249, 245)
        mask = ndimage.binary_dilation(filled, iterations=1)
        alpha = np.where(mask, 255, 0).astype(np.uint8)
        rgba = Image.fromarray(np.dstack((rgb, alpha)), "RGBA")

    alpha = rgba.getchannel("A")
    bbox = alpha.point(lambda value: 255 if value >= 18 else 0).getbbox()
    if not bbox:
        raise ValueError("cell contains no visible icon")
    cropped = rgba.crop(bbox)

    canvas = Image.new("RGBA", (720, 720), (0, 0, 0, 0))
    max_content = 432  # central 60%, leaving a 20% safety margin per side
    scale = min(max_content / cropped.width, max_content / cropped.height)
    size = (max(1, round(cropped.width * scale)), max(1, round(cropped.height * scale)))
    cropped = cropped.resize(size, Image.Resampling.LANCZOS)
    canvas.alpha_composite(cropped, ((720 - size[0]) // 2, (720 - size[1]) // 2))
    return canvas


def build_sheet(icons: list[Image.Image]) -> Image.Image:
    sheet = Image.new("RGBA", (2048, 2048), (0, 0, 0, 0))
    for index, icon in enumerate(icons):
        tile = icon.resize((512, 512), Image.Resampling.LANCZOS)
        sheet.alpha_composite(tile, ((index % 4) * 512, (index // 4) * 512))
    return sheet


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", type=Path, required=True)
    parser.add_argument("sheets", nargs=3, type=Path)
    args = parser.parse_args()

    for sheet_index, (source_path, mapping) in enumerate(zip(args.sheets, SHEET_MAP), start=1):
        source = Image.open(source_path).convert("RGBA")
        width, height = source.size
        x_edges = [round(width * value / 4) for value in range(5)]
        y_edges = [round(height * value / 4) for value in range(5)]
        icons: list[Image.Image] = []
        source_cells = SOURCE_CELL_OVERRIDES.get(sheet_index - 1, list(range(len(mapping))))
        for index, (grade, unit_id, slug) in enumerate(mapping):
            source_index = source_cells[index]
            col, row = source_index % 4, source_index // 4
            left, top, right, bottom = x_edges[col], y_edges[row], x_edges[col + 1], y_edges[row + 1]
            if sheet_index == 3 and unit_id == "u12":
                left = max(0, left - 56)
            cell = source.crop((left, top, right, bottom))
            icon = extract_icon(cell)
            output_dir = args.repo / "images" / f"math-grade{grade}" / "v1"
            output_dir.mkdir(parents=True, exist_ok=True)
            icon.save(output_dir / f"{unit_id}-{slug}-v1.png", compress_level=6)
            icons.append(icon)

        sheet_dir = args.repo / "images" / "math-grade2-6" / "sheets"
        sheet_dir.mkdir(parents=True, exist_ok=True)
        build_sheet(icons).save(
            sheet_dir / f"grade2-6-unit-icons-4x4-{sheet_index}-v1.png",
            compress_level=6,
        )


if __name__ == "__main__":
    main()
