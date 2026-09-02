import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { inflateSync } from "node:zlib";
import { describe, expect, it } from "vitest";

const root = fileURLToPath(new URL("..", import.meta.url));
const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

const units = [
  ["u101", "1. 10 以內的數", "unit-01-numbers-within-10-v2.png"],
  ["u102", "2. 比長短", "unit-02-compare-v2.png"],
  ["u103", "3. 排順序、比多少", "unit-03-order-v2.png"],
  ["u104", "4. 分與合", "unit-04-number-bonds-v2.png"],
  ["u105", "5. 方盒、圓罐、球", "unit-05-solids-v2.png"],
  ["u106", "6. 30 以內的數", "unit-06-numbers-within-30-v2.png"],
  ["u1", "7. 10 以內的加法", "unit-07-addition-v2.png"],
  ["u2", "8. 10 以內的減法", "unit-08-subtraction-v2.png"],
  ["u107", "9. 幾點鐘", "unit-09-time-v2.png"],
] as const;

function paeth(a: number, b: number, c: number) {
  const p = a + b - c;
  const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
  return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
}

function pngAlphaBounds(path: string) {
  const png = readFileSync(path);
  const width = png.readUInt32BE(16), height = png.readUInt32BE(20);
  expect(png[24]).toBe(8);
  expect(png[25]).toBe(6);
  const chunks: Buffer[] = [];
  for (let offset = 8; offset < png.length;) {
    const length = png.readUInt32BE(offset);
    const type = png.subarray(offset + 4, offset + 8).toString();
    if (type === "IDAT") chunks.push(png.subarray(offset + 8, offset + 8 + length));
    offset += 12 + length;
    if (type === "IEND") break;
  }
  const raw = inflateSync(Buffer.concat(chunks));
  const bpp = 4, stride = width * bpp;
  const pixels = Buffer.alloc(stride * height);
  let source = 0;
  for (let y = 0; y < height; y += 1) {
    const filter = raw[source++];
    for (let x = 0; x < stride; x += 1) {
      const value = raw[source++];
      const left = x >= bpp ? pixels[y * stride + x - bpp] : 0;
      const up = y > 0 ? pixels[(y - 1) * stride + x] : 0;
      const upperLeft = y > 0 && x >= bpp ? pixels[(y - 1) * stride + x - bpp] : 0;
      const decoded = filter === 0 ? value
        : filter === 1 ? value + left
        : filter === 2 ? value + up
        : filter === 3 ? value + Math.floor((left + up) / 2)
        : value + paeth(left, up, upperLeft);
      pixels[y * stride + x] = decoded & 255;
    }
  }
  let minX = width, minY = height, maxX = -1, maxY = -1;
  for (let y = 0; y < height; y += 1) for (let x = 0; x < width; x += 1) {
    if (pixels[y * stride + x * bpp + 3] <= 8) continue;
    minX = Math.min(minX, x); minY = Math.min(minY, y);
    maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
  }
  return { width, height, minX, minY, maxX, maxY };
}

describe("grade-one first-semester math curriculum", () => {
  it("keeps the nine textbook units in order", () => {
    const positions = units.map(([id, title]) => {
      const marker = `{ id: "${id}", grade: 1`;
      const position = html.indexOf(marker);
      expect(position).toBeGreaterThan(-1);
      expect(html.slice(position, position + 420)).toContain(`title: "${title}"`);
      return position;
    });
    expect(positions).toEqual(positions.slice().sort((a, b) => a - b));
  });

  it("uses generated transparent PNG art instead of emoji for every unit card", () => {
    units.forEach(([id, , filename]) => {
      const position = html.indexOf(`{ id: "${id}", grade: 1`);
      const unitSource = html.slice(position, position + 430);
      expect(unitSource).toContain('icon: ""');
      const path = `${root}/images/math-grade1/v2/${filename}`;
      expect(existsSync(path)).toBe(true);
      const png = readFileSync(path);
      expect(png.subarray(1, 4).toString()).toBe("PNG");
      expect([4, 6]).toContain(png[25]);
    });
  });

  it("gives every grade-one card a reusable image with a 20 percent alpha-safe border", () => {
    const mathSource = html.slice(html.indexOf("const MATH_UNITS = ["), html.indexOf("const CH_UNITS = ["));
    const rows = Array.from(mathSource.matchAll(/\{ id: "[^"]+", grade: 1,[^\n]+\}/g), (match) => match[0]);
    expect(rows.length).toBeGreaterThanOrEqual(26);
    rows.forEach((row) => {
      expect(row).toContain('icon: ""');
      const art = row.match(/art: "([^"]+)"/)?.[1];
      expect(art).toBeTruthy();
      const path = `${root}/${art}`;
      expect(existsSync(path)).toBe(true);
      const bounds = pngAlphaBounds(path);
      expect(bounds.width).toBe(720);
      expect(bounds.height).toBe(720);
      const safe = Math.floor(bounds.width * 0.2);
      expect(bounds.minX).toBeGreaterThanOrEqual(safe);
      expect(bounds.minY).toBeGreaterThanOrEqual(safe);
      expect(bounds.maxX).toBeLessThan(bounds.width - safe);
      expect(bounds.maxY).toBeLessThan(bounds.height - safe);
    });
    ["images/math-master/v1/objects/basket-v2.png", "images/math-master/v1/objects/coin-v2.png"].forEach((art) => {
      const bounds = pngAlphaBounds(`${root}/${art}`);
      expect(bounds.minX).toBeGreaterThanOrEqual(144);
      expect(bounds.minY).toBeGreaterThanOrEqual(144);
      expect(bounds.maxX).toBeLessThan(576);
      expect(bounds.maxY).toBeLessThan(576);
    });
  });

  it("has dedicated question builders and reusable visual layers", () => {
    ["u101", "u102", "u103", "u104", "u105", "u106", "u107"].forEach((id) => {
      expect(html).toContain(`unitId === "${id}"`);
    });
    ["compareBars", "numberBond", "tensOnes", "itemsGrid", "sequenceCards", "solidImage", "clock"].forEach((fig) => {
      expect(html).toContain(`fig: "${fig}"`);
    });
    expect(html).toContain('Array.from({ length: 10 }');
    expect(html).toContain('每一整排是 10 顆');
  });
});
