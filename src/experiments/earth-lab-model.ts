/** Ideal circular orbit. Solar time, geometric horizon, no atmospheric refraction.
 * a=0: March equinox; a=π/2: June solstice. Axial direction stays fixed.
 * Geographic coordinates match the existing equirectangular Earth texture.
 */
export const TAU = Math.PI * 2;
export const RAD = Math.PI / 180;
export const YEAR_DAYS = 365.2422;
export const TAIWAN = { latitude: 23.7, longitude: 121 };
export type EarthMode = 'day' | 'year' | 'moon';
export interface EarthLabState { mode: EarthMode; season: number; hour: number; moonPhase: number; moonElapsedDays: number; tilt: number; playing: boolean; speed: number; rays: boolean; guides: boolean }
export const initialEarthState = (): EarthLabState => ({ mode: 'day', season: Math.PI / 2, hour: 15, moonPhase: Math.PI / 2, moonElapsedDays: 0, tilt: 23.5, playing: false, speed: 1, rays: true, guides: true });
export const wrap = (n: number, period = TAU) => ((n % period) + period) % period;
export function sunDirection(season: number): [number, number, number] { return [Math.sin(season), 0, Math.cos(season)]; }
export function declination(season: number, tilt: number): number { return Math.asin(Math.sin(tilt * RAD) * Math.sin(season)); }
export function solarAltitude(latitude: number, season: number, tilt: number, hour: number): number {
  const lat = latitude * RAD, d = declination(season, tilt), h = (hour - 12) * Math.PI / 12;
  return Math.asin(Math.max(-1, Math.min(1, Math.sin(lat) * Math.sin(d) + Math.cos(lat) * Math.cos(d) * Math.cos(h)))) / RAD;
}
export function daylightHours(latitude: number, season: number, tilt: number): number {
  const c = -Math.tan(latitude * RAD) * Math.tan(declination(season, tilt));
  if (c >= 1) return 0;
  if (c <= -1) return 24;
  return 24 * Math.acos(c) / Math.PI;
}
export function earthSpin(season: number, tilt: number, hour: number, longitude = TAIWAN.longitude): number {
  // Rotate the solar direction into the tilted equatorial reference frame.
  const x = Math.sin(season) * Math.cos(tilt * RAD), z = Math.cos(season);
  const noonPhase = Math.atan2(-z, x);
  return noonPhase - longitude * RAD + (hour - 12) * TAU / 24;
}
export function geographicNormal(latitude: number, longitude: number, spin: number, tilt: number): [number, number, number] {
  const lat = latitude * RAD, lon = longitude * RAD + spin, t = tilt * RAD;
  const x = Math.cos(lat) * Math.cos(lon), y = Math.sin(lat), z = -Math.cos(lat) * Math.sin(lon);
  return [x * Math.cos(t) + y * Math.sin(t), -x * Math.sin(t) + y * Math.cos(t), z];
}
export function advanceEarth(state: EarthLabState, days: number): void {
  state.season = wrap(state.season + days / YEAR_DAYS * TAU);
  state.hour = wrap(state.hour + days * 24, 24);
}
export function hourText(hour: number): string {
  const minutes = Math.round(wrap(hour, 24) * 60) % 1440;
  return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
}
export const SEASONS = [
  { label: '春分', date: '約 3/20', angle: 0, month: 'MAR' },
  { label: '夏至', date: '約 6/21', angle: Math.PI / 2, month: 'JUN' },
  { label: '秋分', date: '約 9/22', angle: Math.PI, month: 'SEP' },
  { label: '冬至', date: '約 12/21', angle: Math.PI * 1.5, month: 'DEC' },
];
export function seasonName(angle: number): string {
  const n = wrap(angle); const near = SEASONS.find(s => Math.abs(Math.atan2(Math.sin(n - s.angle), Math.cos(n - s.angle))) < .025);
  return near ? near.label : ['春分 → 夏至', '夏至 → 秋分', '秋分 → 冬至', '冬至 → 春分'][Math.floor(n / (Math.PI / 2))];
}
