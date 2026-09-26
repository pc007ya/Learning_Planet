import { TAU, TAIWAN, RAD, earthSpin, geographicNormal, wrap, type EarthLabState } from './earth-lab-model';

/** Sun-relative circular model, north is +Y; sunlight arrives from +X.
 * The orbit is shown in the ecliptic plane to isolate phase geometry.
 * Not an eclipse, calendar, or topocentric sky-position prediction.
 */
export const SYNODIC_DAYS = 29.53059;
export const MOON_PHASES = [
  { label: '新月', english: 'NEW', angle: 0 },
  { label: '上弦', english: 'FIRST', angle: Math.PI / 2 },
  { label: '滿月', english: 'FULL', angle: Math.PI },
  { label: '下弦', english: 'LAST', angle: Math.PI * 1.5 },
];
export function moonPosition(phase: number, radius = 5.2): [number, number, number] { return [radius * Math.cos(phase), 0, -radius * Math.sin(phase)]; }
export function moonLight(phase: number): number { return (1 - Math.cos(phase)) / 2; }
export function moonAge(phase: number): number { return wrap(phase) / TAU * SYNODIC_DAYS; }
export function advanceMoon(phase: number, days: number): number { return wrap(phase + days / SYNODIC_DAYS * TAU); }
/** Independent lunar experiment clock. Do not derive Earth spin from wrapped
 * phase: a 29.53059-day cycle must not reset Earth to its starting longitude.
 * +X remains the solar direction, so this is a 24-hour solar-day teaching frame.
 */
export function advanceMoonSystem(state: EarthLabState, days: number): void {
  state.moonElapsedDays += days;
  state.moonPhase = advanceMoon(state.moonPhase, days);
}
export function seekMoonPhase(state: EarthLabState, phase: number): void {
  const delta = Math.atan2(Math.sin(phase - state.moonPhase), Math.cos(phase - state.moonPhase));
  advanceMoonSystem(state, delta / TAU * SYNODIC_DAYS);
  state.moonPhase = wrap(phase);
}
export function moonSolarHour(state: EarthLabState): number { return wrap(15 + state.moonElapsedDays * 24, 24); }
export function moonEarthSpin(state: EarthLabState): number { return earthSpin(Math.PI / 2, state.tilt, moonSolarHour(state)); }
export function moonTaiwanSunAltitude(state: EarthLabState): number {
  const normal = geographicNormal(TAIWAN.latitude, TAIWAN.longitude, moonEarthSpin(state), state.tilt);
  return Math.asin(Math.max(-1, Math.min(1, normal[0]))) / RAD;
}
/** North-up Earth view: first quarter is lit on the right. */
export function moonViewSun(phase: number): [number, number, number] { return [Math.sin(phase), 0, -Math.cos(phase)]; }
export function moonName(phase: number): string {
  const a = wrap(phase);
  const exact = MOON_PHASES.find(p => Math.abs(Math.atan2(Math.sin(a - p.angle), Math.cos(a - p.angle))) < .025);
  return exact?.label ?? ['眉月', '盈凸月', '虧凸月', '殘月'][Math.floor(a / (Math.PI / 2))];
}
