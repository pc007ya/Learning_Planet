import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = fileURLToPath(new URL("..", import.meta.url));
const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

const units = [
  ["u101", "1. 10 以內的數", "unit-01-numbers-within-10-v1.png"],
  ["u102", "2. 比長短", "unit-02-compare-v1.png"],
  ["u103", "3. 排順序、比多少", "unit-03-order-v1.png"],
  ["u104", "4. 分與合", "unit-04-number-bonds-v1.png"],
  ["u105", "5. 方盒、圓罐、球", "unit-05-solids-v1.png"],
  ["u106", "6. 30 以內的數", "unit-06-numbers-within-30-v1.png"],
  ["u1", "7. 10 以內的加法", "unit-07-addition-v1.png"],
  ["u2", "8. 10 以內的減法", "unit-08-subtraction-v1.png"],
  ["u107", "9. 幾點鐘", "unit-09-time-v1.png"],
] as const;

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
      const path = `${root}/images/math-grade1/v1/${filename}`;
      expect(existsSync(path)).toBe(true);
      const png = readFileSync(path);
      expect(png.subarray(1, 4).toString()).toBe("PNG");
      expect([4, 6]).toContain(png[25]);
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
