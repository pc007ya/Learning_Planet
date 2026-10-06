import { describe, expect, it } from 'vitest';
import { fireWeatherOutcome } from '../src/experiments/fire-weather-model';
describe('fire-weather teaching boundaries',()=>{
  it('does not imply every strong fire generates a thundercloud',()=>{expect(fireWeatherOutcome({heat:'high',moisture:'dry'}).deepCloud).toBe(false);expect(fireWeatherOutcome({heat:'high',moisture:'dry'}).cloud).toBe(false);});
  it('distinguishes condensation from deep cloud development',()=>{const weak=fireWeatherOutcome({heat:'low',moisture:'humid'});expect(weak.cloud).toBe(true);expect(weak.deepCloud).toBe(false);expect(fireWeatherOutcome({heat:'high',moisture:'humid'}).label).toContain('可能');});
});
