# 潮汐互動頁驗收

- 分支：`feature/tides-lesson-20261029`
- 基底：`44ca79632341efe1856fea2afea80c2983b28a50`（main；六星球 PR #5 已於 2026-10-29 合併）。
- 頁面：`experiments/3d/earth-moon/tides/index.html`，地球月球頁的框內入口可進入。沒有修改首頁載入或舊模組引擎。
- 原創 SVG／程式；未複製 X 影片素材或未知授權程式。不需外部 3D 資源、金鑰或付費服務。

## 實際完成

四段框內課程：海岸水線、月球拉力差、日月合成與大小潮、台灣官方潮汐入口。月球支援指標捕獲、滑鼠、觸控及鍵盤；同步更新地球視角月相、海水輪廓及位置曲線。播放／暫停、重設、圖卡、看圖挑戰、筆記本機儲存、共用 SceneNarration 的手勢啟動語音／重聽／關閉。離頁或切背景停止動畫和語音。

## 科學與限制

模型：h(θ,a) = cos(2(θ−a)) + 0.46 cos(2θ)，無量綱。太陽方向固定，隆起採同一函數的極座標輪廓；曲線橫軸是「繞地球的位置」，不是當地時間。太陽 0.46 是造潮效應近似比，不是總引力比。

新／滿月潮差 2.92，上／下弦 1.08，45°為約 2.201454。海水平均值為零、相對兩側對稱；45°合成主軸不是月球方向。另有子工作獨立核對 NOAA 與 NASA。

畫面保留：遠側也被吸引而非排斥、小潮仍有潮、不保證每天固定兩潮、月亮在頭頂不代表當地滿潮。理想模型忽略海盆、陸地、摩擦、延遲與天氣；不是台灣潮時預報。未顯示或捏造即時資料。

## 本機驗證

- `npm run typecheck` 通過。
- 潮汐、六星球、地月舊模型、共用語音、韌性、工作區：7 檔共 53 項通過。
- `check` 中的 12 個 build 命令各自通過。完整 `npm run check` 首次在精簡檢出環境因未下載的既有圖片／語音／教材資產中斷，不能將該次視為全站通過；完整資產回歸由分支 CI 再核實。
- 以 CUA 操作內嵌 Chromium：四段逐一在 1024×600、1024×768、1280×720、390×844 檢查。最終結果見 `layout-results.json`，截圖為實際瀏覽器畫面。
- 實測高低水位、月相圖卡、方向鍵5°步進、滑鼠拖至180°、播放暫停、看圖題答題與返回保留183°狀態、筆記關閉重開保留、語音按鈕開關。頁面 console 無警告／錯誤。
- 內嵌瀏覽器不支援 `Input.dispatchTouchEvent`，該嘗試未執行；改用 CUA 的 Chrome CDP 發送實際觸控事件，從0°拖至90°，確認上弦月、潮差1.08，見 `chrome-touch-quarter.jpg`。
- 可重現 CI 驗收：`scripts/verify-tides.mjs`；涵蓋四尺寸布局、月相／潮差、鍵盤、滑鼠／觸控、播放暫停、題目返回、重設與無3D資源。

未測：實體 iPad／Android／iPhone Safari、真人聽音品質、台灣官方 API 即時資料（本功能沒有連接 API）。未合併、未部署，這些是本機／分支驗收，不是正式站截圖。

## 來源

- https://www.noaa.gov/education/resource-collections/ocean-coasts/tides
- https://science.nasa.gov/moon/tides/
- https://oceanservice.noaa.gov/facts/springtide.html
- https://oceanservice.noaa.gov/education/tutorial_tides/tides07_cycles.html
- https://opendata.cwa.gov.tw/dataset/all/F-A0021-001
