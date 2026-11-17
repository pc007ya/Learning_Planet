# 康軒 115 中年級課次索引

日期：2026-11-17。

來源：康軒官方《115康軒版國小教材簡介─中年級》
https://945cloud.knsh.com.tw/show/E/expo/pic/textbook_levels_mid/115康軒版國小教材簡介─中年級.pdf

已下載 PDF 並渲染第 2 頁（印刷頁 1–2）逐行視覺核對，取得三上、三下、四上、四下各 12 課及各 2 篇閱讀階梯。三上／四上 24 課名與既有 115 上資料逐筆完全一致。三上第 1 課「字的小旅行」標記修訂、第 12 課「模仿貓」標記 NEW。

新增獨立 `chinese-115-midgrade-catalog.html` 與 `data/kangxuan-midgrade-115-catalog.json`，不修改既有教材／生字／作答紀錄。國語練習簿增加索引入口。

## 限制

- 學年度由官方簡介檔名及來源識別，精確課本印刷版次未核。
- 只作課次核對，不聲稱取得課文、習作、音檔或完整授權。
- 下學期課次不是下學期練習；不標成可作答或完成。
- 不重製課文或插圖。

## 測試

- `node --test tests/chinese-midgrade-115.check.mjs`：四冊／48 課／8 閱讀階梯、既有 24 課相符、來源與限制、靜態頁及入口。
- `npm run test:chinese-practice`：既有國語回歸。
- `npm run build:chinese-practice`：重建國語入口。
- `npm run check`：全站既有測試與建置。

本機頁面的雲端瀏覽器預覽遭 ERR_CONNECTION_REFUSED，不能稱為瀏覽器視覺驗收；發布後需另驗證正式頁面。
