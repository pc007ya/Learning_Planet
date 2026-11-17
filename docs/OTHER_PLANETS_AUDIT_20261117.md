# 國文／週考／扭蛋盤點（2026-11-17）

Base: main aed03cdf. 本輪不把 HTTP 或程式模擬當真瀏覽器驗收。

## 已修：扭蛋交易與會話

舊版 `finishGachaDraw` 可重複呼叫而無階段／會話／結算時餘額檢查。以原碼模擬同 tick 兩次開獎，10 枚星幣變為 -10，卡片和抽數均為 2。

修正包含同步回合鎖、學習者與 session generation 綁定、離頁取消計時／拖曳／紙花、結算時重新檢查餘額、延後的舊結算不寫入新學員、資金不足回到 idle 可重試。此為遊戲星幣，未涉及真實付款。

7 項 Node 測試涵蓋雙擊、切人、離頁、登出 generation、餘額不足／NaN、取消後舊回呼與排隊扣款前餘額變化；已接入 npm run check。

## 國文現況

正式 Firebase HTTP：`chinese-practice.html`、`modules/chinese-practice/chinese-practice.js`、主站均 200。未實看瀏覽器或實聽音訊。

可驗的原始課程 catalog 為 115 上：1–3 年級 93 筆、4–5 年級 72 筆（三出版社，各筆含來源），合計165筆。這不是1–6年級全學年完整課程；六年級及下學期仍未收錄在此 catalog。注音先修目錄9課中，實作學習資料目前1–8課；第9課不可假造課文補齊。保留原文／注音來源未核項目。

## 週考現況

開始流程已有 async 載入與 navigation／session guard。科目集合目前為數學、國文、自然，不包含新英文48課。其擴充需要教師設定與題庫權重協調，本輪未無聲改變已發出的週考。

## 測試

- `npm run typecheck` PASS。
- 新 `node --test tests/gacha-session.check.mjs`：7 PASS。
- Vitest 國文、注音、扭蛋導覽、角色／週考載入：46 PASS。
- `git diff --check` PASS。
- 全 `npm run check` 本地因 sparse checkout 未下載 `images/science-unit-art/s-kh-g1-t1-u01.webp` 而停止，不是主站圖不存在的結論。整合者需完整checkout/CI再跑 aggregate。
- 真實瀏覽器、觸控／聲音：未驗。

## 後續：原創英文週考 opt-in 整合

- 48 課全部接入（1–6 年級各8課）。從現有 original_enrichment curriculum 的 vocabulary 產生獨立 weekly-en-* 詞義題庫，不搬入出版社試題、不覆蓋既有題庫。
- 預設維持0題，管理員在每週考卷設定明確選取；原本已交卷直接顯示舊結果，沒有重新出題或改分。後台年級選項補齊至6。
- 每題3個不重複選項、唯一正解，固定基礎詞義難度，最大題數依該課詞彙數，不虛構進階難度或無音訊聽力題。週考明細與科目成績識別原創英文。既有題仍照原產生器。
- `node scripts/build-english-weekly.mjs` 可重生，`--check` 可阻擋 curriculum 與部署題庫不同步；已接入 npm check。
- `npm run test:english-weekly` 5測試通過（48課來源同步、各課全額唯一正解、非法輸入、實際startWeeklyExam含舊卷不重建）；既有7扭蛋測試、46國文/角色/導航測試、typecheck通過。未宣稱瀏覽器實點、TTS或GPU驗收。

## 注音第9課現有來源再查

repo 的 `primer-kangxuan-115-upper.json` 只有使用者提供目錄照片 IMG_7500.HEIC 的目次證據：第9課「動物狂歡會」、第90頁。`primer-learning.json` 明定範圍為前8課，coverage與sourceRecords也僅1–8；gapUpdateSources補圖僅30/31/79頁。`primer-segments.json` 的 lesson8.…[9] 是第8課陣列索引，不是第9課資料。未在本repo找到第9課正文／練習照片或已轉錄原文，不能拿課名推造。此結論限於repo，沒有聲稱已遍搜使用者所有Library與聊天附件。保留缺口，需可讀的第90頁起該課內容與練習來源才可做教材轉錄。
