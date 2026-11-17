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
