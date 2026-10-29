/** Independent 3D experiment science rules. No legacy experiment imports. */
export type WaterKind = 'fresh' | 'sea';
export const WATER_DENSITY: Record<WaterKind, number> = { fresh: 1, sea: 1.025 };
const g = 9.81;
export function density(massGrams: number, volumeCm3: number): number {
  if (!Number.isFinite(massGrams) || !Number.isFinite(volumeCm3) || massGrams <= 0 || volumeCm3 <= 0) throw new RangeError('質量和體積必須大於零');
  return massGrams / volumeCm3;
}
export function displacedFraction(centerY: number, surfaceY: number, height: number): number {
  if (!(height > 0)) throw new RangeError('物體高度必須大於零');
  return Math.min(1, Math.max(0, (surfaceY - (centerY - height / 2)) / height));
}
export function buoyancyModel(massGrams: number, volumeCm3: number, fluidDensity = 1, fraction = 1) {
  const objectDensity = density(massGrams, volumeCm3);
  if (!Number.isFinite(fluidDensity) || fluidDensity <= 0 || !Number.isFinite(fraction) || fraction < 0 || fraction > 1) throw new RangeError('水密度或浸沒比例不合法');
  const weightN = massGrams / 1000 * g;
  const buoyantN = volumeCm3 * fluidDensity * fraction / 1000 * g;
  const ratio = objectDensity / fluidDensity;
  const tendency = Math.abs(ratio - 1) < 0.005 ? 'neutral' : ratio < 1 ? 'float' : 'sink';
  return { objectDensity, fluidDensity, weightN, buoyantN, netUpN: buoyantN - weightN, ratio, tendency, equilibriumFraction: Math.min(1, ratio) } as const;
}
/** Constant-force classroom model: dry friction is mu * m * g. */
export function motionAcceleration(forceN: number, massKg: number, frictionCoefficient: number): number {
  if (!(massKg > 0) || !Number.isFinite(forceN) || frictionCoefficient < 0 || !Number.isFinite(frictionCoefficient)) throw new RangeError('力或質量不合法');
  return Math.max(0, forceN - frictionCoefficient * massKg * g) / massKg;
}
