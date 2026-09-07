import { clockTrain } from './clock-demo';
/** Reference magnitudes derived from the same angles that animate the model. */
export function clockRPM(speed:1|60) {
  const angles=clockTrain(speed);
  return {minute:Math.abs(angles[0])/(2*Math.PI),compound:Math.abs(angles[1])/(2*Math.PI),hour:Math.abs(angles[3])/(2*Math.PI)};
}
export function clockRPMLabels(speed:1|60) { return Object.values(clockRPM(speed)).map(value=>value>=.999999?'1':`1/${Math.round(1/value)}`); }
const gear=(color:string,label:string)=>`<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17" fill="${color}" stroke="${color}" stroke-width="8" stroke-dasharray="5 4"/><circle cx="24" cy="24" r="7" fill="#102740"/><text x="24" y="28" text-anchor="middle" fill="white" font-size="11">${label}</text></svg>`;
export function clockTransmission() {
  return `<details class="clock-transmission" open><summary aria-label="收折或展開轉速圖解">⚙ 轉速圖解 <span>⌃</span></summary><div class="ct-body"><div class="ct-tools"><button data-rpm-speed="1" aria-pressed="true">正常</button><button data-rpm-speed="60" aria-pressed="false">60×</button><button data-rpm-size aria-label="放大轉速面板" aria-pressed="false">⤢</button><button data-rpm-read aria-label="朗讀轉速圖解">🔊</button></div><div class="ct-motor">⚡ 馬達 <span>→ 減速輪系 →</span></div><div class="ct-row">${gear('#52c9d7','12')}<div>↻ 長分針 · 12 齒<strong data-rpm="minute">1/60 RPM</strong></div></div><div class="ct-link">↓ 慢 3 倍 · 反方向</div><div class="ct-row">${gear('#dcbd69','36')}<div>↺ 36 齒 ＋ 10 齒<strong data-rpm="compound">1/180 RPM</strong><small>同一根軸，一起轉</small></div></div><div class="ct-link">↓ 再慢 4 倍 · 反方向</div><div class="ct-row">${gear('#e2a954','40')}<div>↻ 短時針 · 40 齒<strong data-rpm="hour">1/720 RPM</strong></div></div><footer>長針 12 圈 ＝ 短針 1 圈<small>RPM＝每分鐘轉幾圈<br>馬達為動畫示意，實際 RPM 依機芯而定；前段減速省略。</small><span class="ct-progress">60× · <span data-demo-seconds>0</span> / 60 秒</span></footer></div></details>`;
}
