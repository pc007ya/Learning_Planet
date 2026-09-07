/** One displayed minute per real second: 60× clock time, bounded at one hour. */
export function clockDemo(seconds:number) {
  const elapsed=Math.max(0,Math.min(60,seconds));
  return {elapsed,minutes:elapsed,done:elapsed>=60,minuteAngle:-elapsed*Math.PI/30,hourAngle:-elapsed*Math.PI/360};
}
/** 12→36, coaxial 10→40: two external meshes give 3×4=12 reduction. */
export function clockTrain(minutes:number) {
  const minute=clockDrive(minutes).minute;
  return [minute,-minute/3,-minute/3,minute/12];
}
/** Complete teaching train: 12:36 × 12:48 × 12:60 = 60:1.
 * One motor revolution per simulated minute; not a quartz motor specification.
 */
export function clockDrive(minutes:number) {
  const motor=minutes*2*Math.PI,first=-motor*12/36,second=-first*12/48,minute=-second*12/60;
  return {motor,first,second,minute};
}
export const CLOCK_DRIVE_GEARS = [
  {teeth:12,r:.12,x:-1.08,y:-.96,z:-.42},
  {teeth:36,r:.36,x:-1.08,y:-.48,z:-.42},
  {teeth:12,r:.12,x:-1.08,y:-.48,z:-.20},
  {teeth:48,r:.48,x:-.72,y:0,z:-.20},
  {teeth:12,r:.12,x:-.72,y:0,z:.02},
  {teeth:60,r:.60,x:0,y:0,z:.02},
] as const;
