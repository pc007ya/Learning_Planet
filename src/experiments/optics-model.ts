export type Point = { x: number; y: number };
export type LensKind = 'convex' | 'concave';
export function signedFocal(kind: LensKind, magnitude: number): number { return kind === 'concave' ? -magnitude : magnitude; }
export function lensDescription(u: number, f: number): string {
  if (f < 0) return '正立・縮小・虛像';
  if (Math.abs(u - f) < 1e-6) return '出射光平行・無有限成像';
  if (u < f) return '正立・放大・虛像';
  if (Math.abs(u - 2 * f) < 1e-6) return '倒立・等大・實像';
  return u > 2 * f ? '倒立・縮小・實像' : '倒立・放大・實像';
}
export type RayPath = { before: Point[]; inside: Point[]; after: Point[] };

const add = (a: Point, b: Point): Point => ({ x: a.x + b.x, y: a.y + b.y });
const scale = (a: Point, k: number): Point => ({ x: a.x * k, y: a.y * k });
const dot = (a: Point, b: Point): number => a.x * b.x + a.y * b.y;
const cross = (a: Point, b: Point): number => a.x * b.y - a.y * b.x;
const sub = (a: Point, b: Point): Point => ({ x: a.x - b.x, y: a.y - b.y });
const unit = (a: Point): Point => scale(a, 1 / Math.hypot(a.x, a.y));

export function lensImage(objectDistance: number, focalLength: number): { distance: number; magnification: number; real: boolean } {
  if (Math.abs(objectDistance - focalLength) < 1e-8) return { distance: Infinity, magnification: -Infinity, real: false };
  const distance = focalLength * objectDistance / (objectDistance - focalLength);
  return { distance, magnification: -distance / objectDistance, real: distance > 0 };
}

export function lensRay(object: Point, lensHeight: number, focalLength: number, endX: number): Point[] {
  const incomingSlope = (lensHeight - object.y) / (0 - object.x);
  const outgoingSlope = incomingSlope - lensHeight / focalLength;
  return [object, { x: 0, y: lensHeight }, { x: endX, y: lensHeight + outgoingSlope * endX }];
}

export function refract(direction: Point, normalAgainstRay: Point, fromIndex: number, toIndex: number): Point | null {
  const incoming = unit(direction);
  const normal = unit(normalAgainstRay);
  const cosine = -dot(incoming, normal);
  const ratio = fromIndex / toIndex;
  const discriminant = 1 - ratio * ratio * (1 - cosine * cosine);
  if (discriminant < 0) return null;
  return unit(add(scale(incoming, ratio), scale(normal, ratio * cosine - Math.sqrt(discriminant))));
}

type Hit = { point: Point; distance: number; edge: number };
function hitPolygon(start: Point, direction: Point, vertices: Point[], skip = -1): Hit | null {
  let best: Hit | null = null;
  for (let edge = 0; edge < vertices.length; edge += 1) {
    if (edge === skip) continue;
    const a = vertices[edge], b = vertices[(edge + 1) % vertices.length];
    const segment = sub(b, a);
    const denominator = cross(direction, segment);
    if (Math.abs(denominator) < 1e-9) continue;
    const delta = sub(a, start);
    const distance = cross(delta, segment) / denominator;
    const segmentT = cross(delta, direction) / denominator;
    if (distance > 1e-5 && segmentT >= 0 && segmentT <= 1 && (!best || distance < best.distance)) {
      best = { point: add(start, scale(direction, distance)), distance, edge };
    }
  }
  return best;
}

function edgeNormal(vertices: Point[], edge: number): Point {
  const a = vertices[edge], b = vertices[(edge + 1) % vertices.length];
  const side = sub(b, a);
  // Vertices are counter-clockwise; this is the outward normal.
  return unit({ x: side.y, y: -side.x });
}

export function prismRay(start: Point, vertices: Point[], refractiveIndex: number, endX = 8.8): RayPath | null {
  const initial = { x: 1, y: 0 };
  const entry = hitPolygon(start, initial, vertices);
  if (!entry) return null;
  const inward = refract(initial, edgeNormal(vertices, entry.edge), 1, refractiveIndex);
  if (!inward) return null;
  const exit = hitPolygon(add(entry.point, scale(inward, 1e-4)), inward, vertices, entry.edge);
  if (!exit) return null;
  const outward = refract(inward, scale(edgeNormal(vertices, exit.edge), -1), refractiveIndex, 1);
  if (!outward || outward.x <= 0) return null;
  const length = (endX - exit.point.x) / outward.x;
  return {
    before: [start, entry.point],
    inside: [entry.point, exit.point],
    after: [exit.point, add(exit.point, scale(outward, length))],
  };
}

export function prismVertices(angleDegrees: number): Point[] {
  const angle = angleDegrees * Math.PI / 180;
  const cosine = Math.cos(angle), sine = Math.sin(angle);
  return [{ x: -1.5, y: -1.45 }, { x: 1.5, y: -1.45 }, { x: 0, y: 1.55 }]
    .map(({ x, y }) => ({ x: x * cosine - y * sine, y: x * sine + y * cosine }));
}

export type PrismTrace = { points: Point[]; reflected: boolean; entered: boolean; hitScreen: boolean };

/** Trace both prism interfaces; total internal reflection continues inside the glass. */
export function tracePrism(start: Point, vertices: Point[], index: number, screenX: number): PrismTrace {
  const direction = { x: 1, y: 0 };
  const entry = hitPolygon(start, direction, vertices);
  if (!entry) return { points: [start, { x: screenX, y: start.y }], reflected: false, entered: false, hitScreen: true };
  let ray = refract(direction, edgeNormal(vertices, entry.edge), 1, index)!;
  let point = entry.point, previousEdge = entry.edge;
  const points = [start, point];
  let reflected = false;
  for (let bounce = 0; bounce < 8; bounce += 1) {
    const hit = hitPolygon(add(point, scale(ray, 1e-5)), ray, vertices, previousEdge);
    if (!hit) break;
    points.push(hit.point);
    const normal = edgeNormal(vertices, hit.edge);
    const exit = refract(ray, scale(normal, -1), index, 1);
    if (exit) {
      const distance = (screenX - hit.point.x) / exit.x;
      const hitScreen = distance > 0 && distance < 40;
      points.push(add(hit.point, scale(exit, hitScreen ? distance : 9)));
      return { points, reflected, entered: true, hitScreen };
    }
    reflected = true;
    ray = sub(ray, scale(normal, 2 * dot(ray, normal)));
    point = hit.point; previousEdge = hit.edge;
  }
  return { points, reflected, entered: true, hitScreen: false };
}

/** Radius of the geometrical defocus circle on a screen, in the same units as f/u/v. */
export function blurRadius(objectDistance: number, focalLength: number, screenDistance: number, apertureRadius: number): number {
  return Math.abs(1 + screenDistance / objectDistance - screenDistance / focalLength) * apertureRadius;
}

/** Central ray locates the disk centre; the aperture sets the geometrical blur radius. */
export function pointProjection(u: number, f: number, screen: number, height: number, aperture: number): { height: number; radius: number } {
  return { height: -screen * height / u, radius: blurRadius(u, f, screen, aperture) };
}
