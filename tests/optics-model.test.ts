import { describe, expect, it } from 'vitest';
import { blurRadius, lensImage, lensRay, prismRay, prismVertices, tracePrism, signedFocal, lensDescription, pointProjection } from '../src/experiments/optics-model';

describe('thin lens', () => {
  it('focuses a single off-axis source into a corresponding real image point', () => {
    const result = pointProjection(7, 3, 5.25, .8, 1.25);
    expect(result.height).toBeCloseTo(-.6);
    expect(result.radius).toBeCloseTo(0);
    expect(pointProjection(7, 3, 7, .8, 1.25).radius).toBeGreaterThan(.4);
  });
  it('retains a finite beam radius when the source is at F', () => {
    for (const screen of [2, 5, 9]) expect(pointProjection(3, 3, screen, .8, 1.25).radius).toBeCloseTo(1.25);
  });
  it('shows a spread-out spot, not a focus, on a screen behind a concave lens', () => {
    expect(pointProjection(7, -3, 5, .8, 1.25).radius).toBeGreaterThan(1.25);
    expect(pointProjection(7, -3, 9, .8, 1.25).radius).toBeGreaterThan(pointProjection(7, -3, 5, .8, 1.25).radius);
  });
  it.each([1.5, 3, 4.5, 6, 7.5])('concave lens gives a reduced upright virtual image for u=%s', (u) => {
    const f = signedFocal('concave', 3), image = lensImage(u, f);
    expect(image.real).toBe(false);
    expect(image.distance).toBeGreaterThan(-3);
    expect(image.distance).toBeLessThan(0);
    expect(image.magnification).toBeGreaterThan(0);
    expect(image.magnification).toBeLessThan(1);
    expect(lensDescription(u, f)).toBe('正立・縮小・虛像');
    for (const height of [0, .95]) {
      const ray = lensRay({ x: -u, y: .95 }, height, f, image.distance);
      expect(ray[2].y).toBeCloseTo(.95 * image.magnification);
    }
  });
  it.each([
    [7.5, 5, -.6666666667, '倒立・縮小・實像'],
    [6, 6, -1, '倒立・等大・實像'],
    [4.5, 9, -2, '倒立・放大・實像'],
    [1.5, -3, 2, '正立・放大・虛像'],
  ] as const)('convex focal-position case u=%s', (u, v, magnification, description) => {
    const image = lensImage(u, signedFocal('convex', 3));
    expect(image.distance).toBeCloseTo(v);
    expect(image.magnification).toBeCloseTo(magnification);
    expect(lensDescription(u, 3)).toBe(description);
  });
  it('sends rays from the same point parallel when the object is on F', () => {
    const slopes = [0, .5, 1].map(height => { const ray = lensRay({ x: -3, y: 1 }, height, 3, 8); return (ray[2].y - height) / 8; });
    slopes.forEach(slope => expect(slope).toBeCloseTo(-1 / 3));
    expect(lensDescription(3, 3)).toBe('出射光平行・無有限成像');
  });
  it('has zero defocus at the image plane and less defocus with a smaller aperture', () => {
    expect(blurRadius(7, 3, 5.25, 1.25)).toBeCloseTo(0);
    expect(blurRadius(7, 3, 7, 1.25)).toBeGreaterThan(blurRadius(7, 3, 7, .45));
    expect(blurRadius(7, 2, 5.25, 1.25)).toBeGreaterThan(.5);
  });
  it('places the image at infinity when the object is at the focal point', () => {
    expect(lensImage(3, 3).distance).toBe(Infinity);
  });
  it('forms an inverted real image at twice the focal length', () => {
    const image = lensImage(7, 3.5);
    expect(image.distance).toBeCloseTo(7);
    expect(image.magnification).toBeCloseTo(-1);
    expect(image.real).toBe(true);
  });
  it('forms an upright virtual image inside the focal length', () => {
    const image = lensImage(2, 3.5);
    expect(image.real).toBe(false);
    expect(image.magnification).toBeGreaterThan(0);
  });
  it('moves the ray intersection when focal length changes', () => {
    const object = { x: -7, y: 1.35 };
    const shortRay = lensRay(object, 1.48, 2.5, 7);
    const longRay = lensRay(object, 1.48, 4.5, 7);
    expect(shortRay[2].y).toBeLessThan(longRay[2].y);
  });
});

describe('triangular prism', () => {
  it('continues total internal reflection instead of inventing a transmitted ray', () => {
    const trace = tracePrism({ x: -6.1, y: .46 }, prismVertices(10), 1.52, 3.5);
    expect(trace.reflected).toBe(true);
    expect(trace.points.length).toBeGreaterThan(4);
    expect(trace.hitScreen).toBe(false);
  });
  it('keeps the spectrum on the receiver at the initial setting', () => {
    for (const index of [1.505, 1.52, 1.55]) {
      const trace = tracePrism({ x: -6.1, y: .46 }, prismVertices(-10), index, 3.5);
      expect(trace.reflected).toBe(false);
      expect(trace.hitScreen).toBe(true);
      expect(trace.points.at(-1)!.x).toBeCloseTo(3.5);
      expect(Math.abs(trace.points.at(-1)!.y + .3)).toBeLessThan(3.85 / 2);
    }
  });
  it('refracts white light and separates red from violet', () => {
    const triangle = prismVertices(0);
    const red = prismRay({ x: -7.45, y: 0.46 }, triangle, 1.505, 8.5);
    const violet = prismRay({ x: -7.45, y: 0.46 }, triangle, 1.55, 8.5);
    expect(red).not.toBeNull();
    expect(violet).not.toBeNull();
    expect(red!.after[1].y).not.toBeCloseTo(violet!.after[1].y, 2);
    expect(red!.inside[0].x).toBeCloseTo(violet!.inside[0].x);
  });
});
