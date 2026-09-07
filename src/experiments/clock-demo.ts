/** One displayed minute per real second: 60× clock time, bounded at one hour. */
export function clockDemo(seconds:number) {
  const elapsed=Math.max(0,Math.min(60,seconds));
  return {elapsed,minutes:elapsed,done:elapsed>=60,minuteAngle:-elapsed*Math.PI/30,hourAngle:-elapsed*Math.PI/360};
}
/** 12→36, coaxial 10→40: two external meshes give 3×4=12 reduction. */
export function clockTrain(minutes:number) {
  const minute=-minutes*Math.PI/30;
  return [minute,-minute/3,-minute/3,minute/12];
}
