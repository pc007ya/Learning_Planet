import { describe, expect, it } from 'vitest';
import { initialEarthState, TAU, RAD, geographicNormal, TAIWAN, wrap } from '../src/experiments/earth-lab-model';
import { SYNODIC_DAYS, advanceMoon, advanceMoonSystem, seekMoonPhase, moonSolarHour, moonEarthSpin, moonTaiwanSunAltitude, moonAge, moonLight, moonName, moonPosition, moonViewSun } from '../src/experiments/moon-lab-model';

describe('Moon phase model in the Sun-relative frame', () => {
  it.each([[0, 0, '新月'], [Math.PI / 2, .5, '上弦'], [Math.PI, 1, '滿月'], [Math.PI * 1.5, .5, '下弦']] as const)('matches the main phases at %s', (angle, light, name) => {
    expect(moonLight(angle)).toBeCloseTo(light, 12); expect(moonName(angle)).toBe(name);
  });
  it('makes the first quarter right-lit, last quarter left-lit', () => {
    expect(moonViewSun(Math.PI / 2)[0]).toBeCloseTo(1); expect(moonViewSun(Math.PI * 1.5)[0]).toBeCloseTo(-1);
  });
  it('agrees between orbital illumination and the Earth-view inset at every angle', () => {
    for (let i = 0; i < 360; i++) {
      const a = i / 360 * TAU, p = moonPosition(a, 1);
      const observerDotSun = -p[0];
      expect((1 + observerDotSun) / 2).toBeCloseTo(moonLight(a), 12);
      expect(moonViewSun(a)[2]).toBeCloseTo(observerDotSun, 12);
      // Longitude zero's rotated normal points toward Earth throughout the orbit.
      expect(Math.cos(a + Math.PI)).toBeCloseTo(-p[0], 12);
      expect(-Math.sin(a + Math.PI)).toBeCloseTo(-p[2], 12);
    }
  });
  it('uses a synodic cycle, wraps and preserves existing Earth parameters', () => {
    const state = initialEarthState(), before = { ...state };
    state.moonPhase = advanceMoon(0, SYNODIC_DAYS / 2);
    expect(state.moonPhase).toBeCloseTo(Math.PI);
    expect(moonAge(state.moonPhase)).toBeCloseTo(SYNODIC_DAYS / 2);
    expect(advanceMoon(0, SYNODIC_DAYS)).toBeCloseTo(0);
    expect(advanceMoon(0, -SYNODIC_DAYS / 4)).toBeCloseTo(Math.PI * 1.5);
    expect({ ...state, moonPhase: before.moonPhase }).toEqual(before);
  });
  it('names waxing and waning phases continuously, including wraparound', () => {
    expect(moonName(.6)).toBe('眉月'); expect(moonName(2)).toBe('盈凸月'); expect(moonName(4)).toBe('虧凸月'); expect(moonName(5)).toBe('殘月'); expect(moonName(TAU)).toBe('新月');
  });
  it('advances Earth and Moon from the same elapsed time, leaving other modes unchanged', () => {
    const s = initialEarthState(), before = { ...s }, spin = moonEarthSpin(s);
    advanceMoonSystem(s, 1 / 24);
    expect(moonSolarHour(s)).toBeCloseTo(16);
    expect(moonEarthSpin(s) - spin).toBeCloseTo(15 * RAD);
    expect(s.moonPhase - before.moonPhase).toBeCloseTo(TAU / (SYNODIC_DAYS * 24));
    expect(s.hour).toBe(before.hour); expect(s.season).toBe(before.season);
    advanceMoonSystem(s, 23 / 24);
    expect(moonSolarHour(s)).toBeCloseTo(15);
    expect(s.moonPhase - before.moonPhase).toBeCloseTo(TAU / SYNODIC_DAYS);
  });
  it('does not reset Earth rotation at a new-moon boundary or after a lunar cycle', () => {
    const s = initialEarthState(); s.moonPhase = TAU - .0001;
    const before = moonSolarHour(s);
    advanceMoonSystem(s, .001);
    expect(s.moonPhase).toBeLessThan(.001);
    expect(moonSolarHour(s) - before).toBeCloseTo(.024);
    const full = initialEarthState(); advanceMoonSystem(full, SYNODIC_DAYS);
    expect(full.moonPhase).toBeCloseTo(Math.PI / 2);
    expect(moonSolarHour(full)).toBeCloseTo(wrap(15 + SYNODIC_DAYS * 24, 24));
    expect(moonSolarHour(full)).not.toBeCloseTo(15);
  });
  it('seeking Moon position rotates Earth by the corresponding time, including reverse wrap', () => {
    const s = initialEarthState(); seekMoonPhase(s, Math.PI);
    expect(s.moonElapsedDays).toBeCloseTo(SYNODIC_DAYS / 4);
    expect(moonSolarHour(s)).toBeCloseTo(wrap(15 + SYNODIC_DAYS * 6, 24));
    seekMoonPhase(s, Math.PI / 2); expect(s.moonElapsedDays).toBeCloseTo(0);
    s.moonPhase = 359 * RAD; s.moonElapsedDays = 0;
    seekMoonPhase(s, 1 * RAD); expect(s.moonElapsedDays).toBeCloseTo(SYNODIC_DAYS / 180);
    seekMoonPhase(s, 359 * RAD); expect(s.moonElapsedDays).toBeCloseTo(0);
  });
  it('Taiwan day/night uses the same surface normal and fixed sunlight as the renderer', () => {
    const s = initialEarthState();
    for (const tilt of [0, 23.5]) for (let h = 0; h < 24; h += .5) {
      s.tilt = tilt; s.moonElapsedDays = (h - 15) / 24;
      const n = geographicNormal(TAIWAN.latitude, TAIWAN.longitude, moonEarthSpin(s), s.tilt);
      expect(Math.sin(moonTaiwanSunAltitude(s) * RAD)).toBeCloseTo(n[0], 12);
    }
    s.moonElapsedDays = (12 - 15) / 24; expect(moonTaiwanSunAltitude(s)).toBeGreaterThan(0);
    s.moonElapsedDays = (0 - 15) / 24; expect(moonTaiwanSunAltitude(s)).toBeLessThan(0);
  });
});
