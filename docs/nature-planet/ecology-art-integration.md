# 六年級自然生態美術包：接入與驗證界限

這是可執行的 Three.js 美術模組，不是評論稿，也不是地圖完成宣告。只新增檔案，未修改既有 `planet-v11.mjs`、地形 GLB、單元、路網、題庫、曝光、霧或六小時日夜。由原地圖修正工作接入，避免同時改動。

## 實際新增

- 六種年級專屬組合：種子果園、溪流村落、層層植物園、季節山林、岩層濕地、高地保育區。
- 每級以既有場景資料產生 72 組安全放置的地景：四座木構主題建築、四座有岩層的高低地、八片樹叢、一至四處水生／草花庭園、蕨類、花、草、石與幼樹。缺少安全空間時省略，不硬塞。
- 建築包括種子小屋、綠蔭棚架、觀鳥屋、溫室、木構觀察台、保育工作站。不是替換原課程房屋，不搬動課程入口。
- 每級 12 隻新增動物，跨六級 15 種輪廓。分段覓食、停留、回行、轉頭、擺尾與振翅，不再全都小圓圈巡遊。
- 放置避讓路段、入口、既有障礙、原有動物整段巡遊與降落區；實際幾何的水平包絡縮放到預留半徑內。新地景碰撞由 `getAdditionalObstacles()` 取得。
- 靜態物件依材質合批，不建立點光源；保持木頭、岩層、深淺綠葉與花色對比。夜間僅溫暖窗光增亮，由原日夜系統控制。

## 最小接入

```js
import {createEcologyArt} from './ecology-art.mjs';

// 在原 GLB、physics 完成後。掛到 world scene，不要掛進有旋轉的 glTF 根節點。
const ecology = createEcologyArt(THREE, scene, data, {
  grade,
  floor: (x, worldZ) => physics.floor(x, worldZ),
  lowPower: options.lowPower === true,
  reducedMotion: reducedMotion?.matches === true,
  mode: oceanMode,
});
life.own(() => ecology.dispose());

// 物件碰撞：建立衍生 physics data，原始 data 不變。
const physicsData = {...data, obstacles: [...data.obstacles, ...ecology.getAdditionalObstacles()]};
// 原 createWalking 的資料取得回呼改為 () => physicsData；仍使用原 walkMeshes。

// 原 renderOcean(now) 中，由現有共享 ambientClock 驅動，無新增 RAF 或計時器。
ecology.update(ambientClock.seconds, {
  playerPosition: character?.visible ? character.position : null,
  nightFactor: dayNight?.getState()?.night || 0,
});
```

還要把 `ecology.active` / `ecology.interval` 納入原 ambientWait，`stopFrame` 呼叫 `ecology.pause()`，動態模式切換呼叫 `ecology.setMode(mode)`，reduced-motion 變更呼叫 `ecology.setReducedMotion(matches)`。既有暫停、隱藏分頁、關閉／重開的生命週期仍是唯一擁有者。模式 `auto` / `low` / `static` 不新增獨立動畫迴圈。相機、路燈與單元光環仍沿用原系統。

`floor` 查無地面時不浮空擺放；地形高低改變後必須用更新後的 GLB / scene data 重新產生，不套用舊擺位。不能只把本模組加在舊圖上就宣稱整張地圖已達數學品質。

## 已完成的驗證

`node --test tests/nature-planet/ecology.check.mjs`：14 項通過。

涵蓋六級各自的原資料不變、確定性、安全放置、整段路徑與逐時位置避讓、實際 Three 幾何有限數值、實際包絡、不重複釋放、暫停及 reduced-motion。一般模式每級 72 組、12 隻，低耗模式主動減量。頂點材質批次只作本模組內部擁有／釋放。

此環境 Chromium 因 socket 權限無法啟動，因此沒有瀏覽器整合畫面通過證據。私有 Blender 圖僅由本模組的實際幾何匯出作元件目視，**不是正式網站截圖，也不是整張課程地圖驗收**。未重測載入時間，沒有上傳或發布 QA HTML / 測試頁。

## 原工作接入後仍須做

1. 對目前新增／變更的地形與障礙重跑本測試及原自然地圖測試；必要時擴大 clearance，不硬塞地景。
2. 實際網頁逐級檢查地景與舊資產的構圖、穿插、道路遮擋、落地高度，並確認玩家不穿新建築／樹叢。
3. 以同位置／同時段比較日夜，確認非發白、夜間清楚、保留原路燈與單元光環。
4. 實際動態姿態、手機／平板負載與生命周期尚未做整合驗證。不要把本元件 14 項通過寫成全站測試通過。
5. 按主對話要求審核後才發佈正式變更，不發布測試頁。
