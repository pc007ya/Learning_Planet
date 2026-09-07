import { clockTrain,clockDrive } from './clock-demo';
export function clockRPM(speed:1|60) {
  const angles=clockTrain(speed);
  return {minute:Math.abs(angles[0])/(2*Math.PI),compound:Math.abs(angles[1])/(2*Math.PI),hour:Math.abs(angles[3])/(2*Math.PI)};
}
export const rpmText=(value:number)=>value>=.999999?String(Math.round(value)):`1/${Math.round(1/value)}`;
export function clockRPMLabels(speed:1|60) { return Object.values(clockRPM(speed)).map(rpmText); }
export function driveRPMLabels(speed:1|60) { return Object.values(clockDrive(speed)).map(a=>rpmText(Math.abs(a)/(2*Math.PI))); }
const gear=(color:string,label:string)=>`<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17" fill="${color}" stroke="${color}" stroke-width="8" stroke-dasharray="5 4"/><circle cx="24" cy="24" r="7" fill="#102740"/><text x="24" y="28" text-anchor="middle" fill="white" font-size="11">${label}</text></svg>`;
const row=(color:string,teeth:string,label:string,rate:string,attr:string)=>`<div class="ct-row">${gear(color,teeth)}<div>${label}<strong ${attr}>${rate} RPM</strong></div></div>`;
export function clockTransmission() {
  return `<details class="clock-transmission" open><summary aria-label="收折或展開轉速圖解">⚙ 轉速圖解 <span>⌃</span></summary><div class="ct-body"><div class="ct-tools"><button data-rpm-speed="1" aria-pressed="true">正常</button><button data-rpm-speed="60" aria-pressed="false">60×</button><button data-rpm-size aria-label="放大轉速面板" aria-pressed="false">⤢</button><button data-rpm-read aria-label="朗讀轉速圖解">🔊</button></div><div class="ct-tabs"><button data-drive-page="motor" aria-pressed="true">馬達</button><button data-drive-page="hands" aria-pressed="false">指針</button></div><div data-drive-section="motor">${row('#77efbd','12','↺ 馬達 · 12T','1','data-drive-rpm')}<div class="ct-link">↓ 慢 3 倍</div>${row('#77efbd','36','↻ 36T／同軸12T','1/3','data-drive-rpm')}<div class="ct-link">↓ 再慢 4 倍</div>${row('#77efbd','48','↺ 48T／同軸12T','1/12','data-drive-rpm')}<div class="ct-link">↓ 再慢 5 倍</div>${row('#77efbd','60','↻ 60T → 長分針','1/60','data-drive-rpm')}</div><div data-drive-section="hands" hidden>${row('#52c9d7','12','↻ 長分針 · 12T','1/60','data-rpm')}<div class="ct-link">↓ 慢 3 倍 · 反方向</div>${row('#dcbd69','36','↺ 36T／同軸10T','1/180','data-rpm')}<div class="ct-link">↓ 再慢 4 倍 · 反方向</div>${row('#e2a954','40','↻ 短時針 · 40T','1/720','data-rpm')}</div><footer>馬達 60 圈＝長針 1 圈<small>長針 12 圈＝短針 1 圈<br>RPM＝每分鐘轉幾圈。完整教學輪系，非品牌機芯；正常／60× 僅切換數值對照。</small><span class="ct-progress">60× · <span data-demo-seconds>0</span> / 60 秒</span></footer></div></details>`;
}
