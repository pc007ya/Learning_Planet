# 圖片格式與 IndexedDB 調查（2026-09-28）

本輪只調查，未修改圖片、網站程式或既有快取草稿。以本機 616d18f 版本及前次尚未發佈的三個快取相關檔案為依據。

## 方法與範圍

掃描 images/ 下 2,112 個 PNG／JPEG／WebP 檔，檢查尺寸、檔案大小及實際 alpha 像素；對照 index.html 的首頁、科目、單元入口與分類資源。此數量不含 SVG，資料夾內素材不代表全部會在首頁下載。容量使用十進位 MB。

JPEG 試算在記憶體中進行，保留原始寬高，品質 90、4:4:4 色彩取樣；未寫入替代圖片。JPEG 為有損格式，試算數字不是畫質驗收結果，也不是上線實測時間。

## 1. JPEG 優先候選

四張主星球及自然入口背景皆沒有透明像素。保留像素尺寸轉 JPEG，可列第一批視覺比對候選。

| 圖片 | 原尺寸 | PNG MB | JPEG 試算 MB | 減少 |
|---|---:|---:|---:|---:|
| `images/home/planets/math-planet-v1.png` | 1254×1254 | 2.94 | 0.72 | 76% |
| `images/home/planets/chinese-planet-v1.png` | 1254×1254 | 2.76 | 0.68 | 75% |
| `images/home/planets/english-planet-v1.png` | 1254×1254 | 2.90 | 0.74 | 74% |
| `images/home/planets/experiment-planet-v1.png` | 1254×1254 | 2.95 | 0.74 | 75% |
| `images/home/learning-planet-hero-v1.png` | 1672×941 | 2.17 | 0.40 | 82% |
| `images/memory-cards/card-back.png` | 1086×1448 | 2.11 | 0.39 | 82% |
| `images/story/elf-v1/forest.png` | 1536×1024 | 3.57 | 0.83 | 77% |
| `images/science/plant-water/lesson-1.png` | 1672×941 | 2.74 | 0.56 | 79% |
| `images/science/magnet/magnet-lab-bg.png` | 1672×941 | 2.58 | 0.48 | 81% |

前五張主入口合計：13.72 MB → 3.27 MB，約減少 76%。這是同尺寸格式試算，不是縮小解析度。

其他候選：完整繪本場景、卡背、自然實驗背景。含英文標籤或細線的教材（例如 plant-water/lesson-1.png）必須另外檢查文字清晰度。story/ 中有 164 張不透明 PNG、約 279.7 MB，但包含封面、拼圖素材板及歷史素材，不能把整批都當作可直接轉檔的正式場景。

## 2. 不適合直接轉 JPEG 的小圖示

- subject-unit-icons/ 的 24 張圖全部有透明像素，約 5.15 MB。
- index.html 的單元 art 欄位引用 68 張數學入口 PNG，全部有透明像素，約 11.59 MB。
- english-category-v1/ 的 9 張實際分類圖全部有透明像素，約 2.16 MB；atlas-v1.png 是不透明素材總表，未在本次程式搜尋找到正式引用，不能用它代表九張分類圖。
- 登入飛船／火箭、品牌標誌、故事星球、扭蛋星球、週考衛星也有透明像素，保留透明格式。
- images/ui/ 的 5 個 SVG 合計只有 2,703 bytes，保留 SVG。
- 主科目頁籤部分使用 emoji；自然單元部分由 sci-art.js 產生 inline SVG，沒有獨立圖片檔要另存 IndexedDB。

透明圖示若未來要減少檔案大小，可另評估保留透明的無損格式；不應先鋪白底轉 JPEG。另有不透明但帶綠色去背底的圖，例如 english-cards/letter-tiles-v1.png、object-card-frame-v1.png，及 mascot-sprite-chroma.png；也不適合僅依 alpha 判斷直接轉 JPEG。

## 3. IndexedDB 建議範圍

| 範圍 | 檔數 | 目前原圖容量 | 現有草稿 |
|---|---:|---:|---|
| 登入、品牌、主星球及共用入口 | 14 | 25.61 MB | 已列入白名單 |
| index.html 明確引用的單元 art 圖 | 102（92 PNG、10 SVG） | 16.74 MB | 未涵蓋 |
| 英文分類圖 | 9 | 2.16 MB | 未涵蓋 |
| 共用 SVG 控制圖示 | 5（其中 3 與單元入口重疊） | 0.003 MB | 未涵蓋；效益小 |

以上去重後共 127 個檔案、44.50 MB。CSV 列出完整路徑與大小。這是明確引用清單，不是全站素材：動態 fallback、繪本及題目內部圖片需另外依實際使用補充。

建議先保存使用過的首頁圖片，再於進入某科目／年級後保存該頁入口圖。不要在登入前一次下載所有約 44.5 MB。圖片保持透明與否都可存入 IndexedDB，與是否轉 JPEG 是兩個獨立決策。

## 4. 既有快取草稿待補事項

- Service Worker 已攔截 14 張圖片並存入 IndexedDB；頁面程式也有首次載入後補存機制。
- 自然入口 learning-planet-hero-v1.png 已在攔截白名單，但漏在首頁補存清單。
- 分頁入口 102 張 art 資源與 9 張分類圖尚未涵蓋。
- 目前只有單檔 5 MiB 限制，沒有整體快取容量上限或最近未使用淘汰規則；擴充時應一併處理。
- 圖片版本常數與 24 小時背景更新已有草稿；轉格式後必須同步改 URL／版本並淘汰舊副本，避免同一圖存兩份。
- 先前「重開沒有圖片請求」也可能受 HTTP／記憶體快取影響，尚不足以單獨證明 IndexedDB 的加速幅度。下一階段應隔離一般瀏覽器快取，測試 IndexedDB 命中、關閉分頁後重開、iPad、儲存失敗與版本更新。
- IndexedDB 可被使用者清除或因瀏覽器儲存政策淘汰；必須保留網路回退。

## 參考

- [MDN 圖片格式](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types)
- [MDN IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [MDN Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API)
