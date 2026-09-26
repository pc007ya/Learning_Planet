import { describe, expect, it } from 'vitest';
import { RAD, TAU, TAIWAN, YEAR_DAYS, advanceEarth, daylightHours, declination, earthSpin, geographicNormal, hourText, initialEarthState, seasonName, solarAltitude, sunDirection } from '../src/experiments/earth-lab-model';

describe('new independent Earth laboratory', () => {
  it('has 23.5 degree solstices and equinoxes', () => {
    expect(declination(0, 23.5)).toBeCloseTo(0); expect(declination(Math.PI, 23.5)).toBeCloseTo(0);
    expect(declination(Math.PI / 2, 23.5) / RAD).toBeCloseTo(23.5); expect(declination(Math.PI * 1.5, 23.5) / RAD).toBeCloseTo(-23.5);
  });
  it('Taiwan summer day is longer than winter', () => {
    expect(daylightHours(23.7, Math.PI / 2, 23.5)).toBeGreaterThan(13.4);
    expect(daylightHours(23.7, Math.PI * 1.5, 23.5)).toBeLessThan(10.6);
    expect(daylightHours(23.7, 0, 23.5)).toBeCloseTo(12);
  });
  it('opposite hemispheres have complementary daylight', () => {
    expect(daylightHours(40, 1.2, 23.5) + daylightHours(-40, 1.2, 23.5)).toBeCloseTo(24);
  });
  it('handles polar day and night', () => {
    expect(daylightHours(80, Math.PI / 2, 23.5)).toBe(24); expect(daylightHours(80, Math.PI * 1.5, 23.5)).toBe(0);
  });
  it('removes seasonal day-length changes for a vertical axis', () => {
    for (let a = 0; a < TAU; a += .2) expect(daylightHours(23.7, a, 0)).toBeCloseTo(12);
  });
  it('geometric sunrise and sunset intersect the horizon', () => {
    for (let a = 0; a < TAU; a += .2) { const d = daylightHours(23.7, a, 23.5); expect(solarAltitude(23.7, a, 23.5, 12 - d / 2)).toBeCloseTo(0); expect(solarAltitude(23.7, a, 23.5, 12 + d / 2)).toBeCloseTo(0); }
  });
  it('rendered Taiwan surface normal agrees with solar altitude for all seasons and hours', () => {
    for (const tilt of [0, 23.5]) for (let a = 0; a < TAU; a += .3) for (let h = 0; h < 24; h += .75) {
      const n = geographicNormal(TAIWAN.latitude, TAIWAN.longitude, earthSpin(a, tilt, h), tilt), sun = sunDirection(a);
      expect(n.reduce((sum, v, i) => sum + v * sun[i], 0)).toBeCloseTo(Math.sin(solarAltitude(TAIWAN.latitude, a, tilt, h) * RAD), 10);
    }
  });
  it('north axis direction stays fixed throughout the orbit', () => {
    const n = geographicNormal(90, 0, 0, 23.5); for (let a = 0; a < TAU; a += .3) geographicNormal(90, 0, earthSpin(a, 23.5, 12), 23.5).forEach((v, i) => expect(v).toBeCloseTo(n[i], 12));
  });
  it('noon is higher than morning and midnight is night in Taiwan', () => {
    for (let a = 0; a < TAU; a += .5) { expect(solarAltitude(23.7, a, 23.5, 12)).toBeGreaterThan(solarAltitude(23.7, a, 23.5, 8)); expect(solarAltitude(23.7, a, 23.5, 0)).toBeLessThan(0); }
  });
  it('advances day and year together without losing fractions', () => {
    const s = initialEarthState(), initial = s.season; advanceEarth(s, 1); expect(s.hour).toBeCloseTo(15); expect(s.season).toBeCloseTo(initial + TAU / YEAR_DAYS); advanceEarth(s, .25); expect(s.hour).toBeCloseTo(21);
  });
  it('formats clock boundaries and season labels', () => {
    expect(hourText(23.9999)).toBe('00:00'); expect(hourText(-1)).toBe('23:00'); expect(seasonName(Math.PI / 2)).toBe('夏至'); expect(seasonName(TAU)).toBe('春分');
  });
});
