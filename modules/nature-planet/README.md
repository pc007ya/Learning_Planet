# 自然星球 3D 候選

獨立自然地景，沿用既有數學星球 v25 的降落、步行、碰撞與六小時日夜機制。六級地圖對應110個生活／自然課程入口，另有24條動物閉合巡遊路線。世界狀態使用 `nature-planet-world-v1`，不共用數學星球的探索紀錄。

## 接入

主站透過 `modules/science-curriculum/nature-entry.mjs` 的 `openNaturePracticePlanet(options)` 開啟。主站仍須 `localhost` 和 `?scienceCandidate=1`；正式網域不開啟候選。也可用本機 `nature-planet-preview.html`，3D不可用時保留直接單元清單入口。

底層 `openNaturePlanet({grade,catalog,publisher,semester,onEnterUnit,onClose,isActive})` 呼叫 `onEnterUnit(unitId,{onReturn,exploration})`。抵達單元後才開啟練習；練習期間釋放3D渲染器。關閉練習、完成子層 history 返回後呼叫 `onReturn()`，恢復先前位置。整合橋接會處理登出、切換身分、快速關閉／重開及瀏覽器 Back／Forward。

`style.css` 與 `planet-art-v2.css` 的繼承選擇器限定於 `.nature-dialog`，不覆寫原數學介面。既有 Three r187 與 `assets/models/grade1-space-props` 是專案內依賴，不能只搬本目錄就假設能單獨執行。

## 驗證與限制

在專案根目錄執行 `npm run test:nature-planet`。包括實際GLB／路網檢查、巡遊和避碰、生命週期、樣式隔離、真實練習橋接。橋接測試只替換GPU渲染器，不替換題庫、練習介面或儲存模組。

程式／CPU檢查不等於3D畫面驗收。雲端Chromium顯示WebGL renderer disabled，尚無實際GPU降落、步行、日夜光影、動物動畫、FPS或實體觸控通過證據。不能宣稱已達到數學星球3D地圖的全部視覺驗收標準。
