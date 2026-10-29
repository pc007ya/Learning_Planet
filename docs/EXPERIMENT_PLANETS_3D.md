# 3D 實驗新星球（隔離式模組 v1）

新增日期：2026-10-29。**舊實驗保持原檔、原路由及原功能。** 本新增模組僅在原「實驗」課程列表追加一個輕量入口。

## 網址與載入策略

- 入口：`experiments/3d/index.html` （純 HTML / CSS，不載入 Three.js）
- 海洋浮力：`experiments/3d/ocean-buoyancy/index.html`
- 磁鐵：`experiments/3d/magnet/index.html`
- 地球月球：`experiments/3d/earth-moon/index.html`
- 植物：`experiments/3d/plants/index.html`
- 天氣：`experiments/3d/weather/index.html`
- 力與運動：`experiments/3d/force-motion/index.html`

六個課程使用各自 HTML，由 `modules/experiment-planets/planet.js` 啟動，共用可存取 UI、WebGL 生命週期、任務、語音、看圖四選一及進度記錄；首頁不預先下載新引擎。海洋世界與其餘實驗世界透過動態 import 分包，進入後才下載對應場景。Vite 以 `npm run build:experiment-planets` 產出 `modules/experiment-planets`；完整站點 `npm run check` 已包含此建置步驟。

## 海洋浮力：五項引導任務

1. 木塊與石頭：同樣在淡水中觀察浮沉。
2. 同樣重量改變體積：密度球在淡水中選原重量，縮小與放大體積。
3. 密度差：密度球原重量原體積，在淡水與海水各觀察一次。
4. 潛水艇壓載：減輕與加重，觀察浮沉。
5. 中性浮力：原重量／原體積密度球，在淡水中觀察。

水密度採用淡水約 1.000 g/cm³、海水約 1.025 g/cm³；質量以 g、體積以 cm³、重力加速度 9.81 m/s²，透過排開水的質量計算浮力（阿基米德原理）。水中的物體不論浮沉都受浮力。場景的水流、碰撞、阻尼、船體及魚群屬教學簡化，**不是**高精度流體模擬或工程等級潛艇。

其餘五星球各有 3 項任務與一題四選一。植物模型以條件示意，不代表真實 7 天生長速度；月球模型沒有精確軌道傾角，不能預測日月食；氣象模型展示凝結條件，不代表水氣遇冷必定下雨；力學採用簡化水平運動與動摩擦力模型。

## 體驗與可存取規範

- 面向 7–9 歲；平板橫向優先。無下拉式選單，使用圖卡直接切換。
- 主要點擊區 >=44px；返回、重聽、語音、題目置頂；保留語音啟動手勢要求。
- 引導／自由雙模式。切回任務與考題不重建 3D 場景；語音可關閉，WebGL 失效時仍可使用數值與問答。
- 裝置像素比最高 1.5；背景、分頁、離開頁面停止動畫或釋放 WebGL 資源。
- 物件是獨立 Three.js 3D 元件，背景與物件分離，沒有借用 Tongjiang Lab 的程式碼、美術或課件。

## 成就整合邊界

目前新的任務和測驗紀錄採 `localStorage` 並明確標為**本機紀錄**。20 XP／5 星幣是新模組內的成就顯示，不會假裝已入帳既有學生帳號。正式接入主站的登入使用者、Firebase 權限與經驗值交易之前，**不得**將此當成可跨裝置同步或主站可消費星幣的成果，也不能以覆寫原個人資料達成整合。

## 交付驗收

- `npm run typecheck`
- `npx vitest run tests/experiment-planets.test.ts`
- `npm run build:experiment-planets`
- `npm run check`（全站回歸）
- 尺寸：1024×768、1024×600、1280×720。需補上實際瀏覽器場景／考題截圖與手機、iPad 實機檢查；在沒有實測前不可宣稱畫面驗收完成。
- 透過 Pages / Firebase 部署後逐一開啟六個 URL；未完成正式部署與驗收前不可宣稱已上線。

遵守 `docs/EXPERIMENT_MODULE_STANDARD.md`；若進一步製作高品質圖片，應紀錄來源／授權，並維持原頁面完全不變。
