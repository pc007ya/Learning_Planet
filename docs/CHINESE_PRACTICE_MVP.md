# 國語生字練習簿 MVP

本版接入既有國語星球，提供教材篩選、整課與個別勾選、跨課去重及自訂字，產生可列印的 A4 練習簿。無登入同步與完整測驗卷；不公開部署。

## 開發位置與執行

- 原 checkout：`/Users/ming/Desktop/小學學習系統/Learning_Planet`，origin `https://github.com/pc007ya/Learning_Planet`。
- 隔離分支：`codex/chinese-practice-mvp`。
- 本次 checkout：`/Users/ming/Documents/Codex/2026-10-09/task-23/Learning_Planet-chinese-mvp`。
- 為節省空間，此 worktree 排除 images、audio、videos 及魔術方塊示範影片；依賴使用原 checkout 的既有套件連結。沒有複製大型媒體或安裝新依賴。

在此 checkout 執行：

```sh
npm run build:chinese-practice
python3 tools/preview_chinese_practice.py --port 4173 --assets-from /Users/ming/Desktop/小學學習系統/Learning_Planet
```

開啟 `http://127.0.0.1:4173/chinese-practice.html` 可直接練習；`http://127.0.0.1:4173/index.html` 可用既有 `DEMO / DEMO` → 國文 → 國語生字練習簿。入口在新分頁開啟以保留原登入與國語頁；「返回國語星球」關閉該分頁。獨立開啟練習頁時返回網站登入頁。

原始碼在 `src/chinese-practice/`；靜態站使用已編譯的 `modules/chinese-practice/chinese-practice.js`，不需要線上 TypeScript 編譯器。更新程式後需重新建置。

## 官方教材與字音範圍

已擴充 **115 上學期、三出版社（南一、康軒、翰林）、1～3 年級** 全部教育百科已列課次：92 課＋南一一年級「魔法文字」前導單元，2,379 分類詞條。逐課數量、官方URL、字音查核與缺口見 [115來源報告](CHINESE_PRACTICE_115_COVERAGE.md)。

課綱與印刷版次官方詞表未提供，保留 null；第1／3／5冊由年級與學期推導，UI明示。115下未取得可核實當年度詞表，不借114下。114下獨立索引僅記錄為待核來源，未載入練習簿。

對1,852個候選字／詞條保存官方來源查核記錄，其中1,851項完成網頁聲調檢查，1項「踩高蹺」未取得整詞查音記錄；不能把記錄總數當成全部整詞音讀已核。952個單字有無歧義候選音。多音字依同課語詞及編輯語義判讀，保留來源與選音說明供教師覆核。仍有20個課次詞條需完整課文語境，保留空值。未知字不推測注音，可手動填寫（標示待核）或明示留空。

未整站下載、使用未確認授權的批次教材 API、搬運參考站程式或注音 PDF。未下載、製作或嵌入任何筆順動畫。

## 查音來源、版本與實際保存範圍（2026-10-10）

教材詞目取自[教育部教育百科生字詞彙表](https://pedia.cloud.edu.tw/Bookmark/TextWord)及93個逐課 `TCollection` 頁，來源網址逐課保存在 `lessons-115-upper.json`。查音入口是教育百科字詞頁；`sounds-audit.json` 同時保存各辭典的逐字／詞來源連結，實際有非空讀音記錄的提供者如下。各列可重疊，數量不能相加當作字詞總數。

| 實際查音來源與署名 | 有讀音記錄的字／詞條數 | 本地線上資料版本 | 2026-10-10官方下載頁顯示版本 | 官方完整使用說明 |
| --- | ---: | --- | --- | --- |
| 中華民國教育部（Ministry of Education, R.O.C.）。[《國語小字典》](https://dict.mini.moe.edu.tw/) | 1,107 | 未確認；線上查核日2026-10-09 | `2019_20260929`，僅作本日下載版參考 | [PDF](https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/respub/minidict_10312.pdf)／[ODT](https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/respub/minidict_10312.odt) |
| 中華民國教育部（Ministry of Education, R.O.C.）。[《國語辭典簡編本》](https://dict.concised.moe.edu.tw/) | 1,770 | 未確認；線上查核日2026-10-09 | `2014_20260929`，僅作本日下載版參考 | [PDF](https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/respub/conciseddict_10312.pdf)／[ODT](https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/respub/conciseddict_10312.odt) |
| 中華民國教育部（Ministry of Education, R.O.C.）。[《重編國語辭典修訂本》](https://dict.revised.moe.edu.tw/) | 1,839 | 未確認；線上查核日2026-10-09 | `2015_20260929`，僅作本日下載版參考 | [PDF](https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/respub/reviseddict_10312.pdf)／[ODT](https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/respub/reviseddict_10312.odt) |

授權依據：[教育部國語辭典公眾授權網](https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/respub/index.html)與[CC BY-ND 3.0 Taiwan條款](https://creativecommons.org/licenses/by-nd/3.0/tw/legalcode)。官方說明允許符合條件的重製、散布與傳輸，包含商業利用；要求署名、確認資料版本、完整保留各辭典使用說明，並限制修改個別條目內容或改為簡化字，另列不改變內容的字碼／調整例外。本節是條件摘要及原件連結，未把它宣稱為已完整保存的官方授權文件。也未將本日看到的下載版號套在先前線上取得的資料上。

本地保存的範圍已逐欄核對：

- `lessons-115-upper.json`：學年、學期、年級、出版社、課次、課名、分類、詞目、字音、來源URL、查核日及待核狀態。保留92課及1前導單元的2,379個分類詞條與原課次／分類排列；這項選擇與編排的重用範圍仍需確認。
- `sounds-audit.json`：詞目、查核日、聲調檢查狀態、辭典識別、候選注音與來源URL，另有1筆查詢失敗記錄。讀音項只有 `sounds` 和 `sourceUrl`，沒有保存辭典釋義、例句、正文HTML、圖片或發音檔。
- `sounds-single.json`：952個無歧義字音對照；`context-readings.json` 和 `phonetics-targeted-review.json`：本專案的選音、待核理由與證據連結。教材中的語詞被拆字、跨課去重或按語境選讀，是本專案的處理結果，不表示出版社課文標音已逐頁核對。
- `soundNote` 的249筆說明由本地編譯／覆核規則產生，記錄選音或缺口，未搬入辭典長篇說明。單一詞目最長7字；沒有保存完整課文敘述、教材版面、教材PDF或整頁來源影像於擬發布payload。

單字、字音音值及教材標籤作為資料欄位，與整篇課文、辭典釋義及整組詞表的選擇／編排是不同範圍。[著作權法第7條與第10-1條](https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=J0070017)提供編輯著作與表達範圍的區分；本文件不據此斷言這93頁的具體編排沒有權利。教育百科[版權聲明](https://pedia.cloud.edu.tw/Home/CopyRight)要求依內容提供者的條件利用；已列的辭典授權不能直接推廣為南一、康軒、翰林教材表的整體授權。

待確認項目由本專案精確追查，不要求使用者泛泛承擔權利：

1. **教材表範圍**：須取得涵蓋教育百科115上、三出版社1～3年級上述93個課次頁之詞目分類／選擇／順序的適用條款，確認可否轉存JSON並在公開網站與repo提供選課練字；用途不含課文、辭典釋義、教材版面、圖片、音檔或動畫。現有[開放API說明](https://pedia.cloud.edu.tw/Home/OpenAPI)只說明需會員金鑰的字詞檢索／內容介面，未證明這項教材表重用範圍。
2. **字音資料條件**：確認本地線上記錄對應的實際資料版本，於再利用前完整保留三份官方使用說明；另確認所需的讀音抽取、拆字與語境選讀屬何種適用利用範圍。原始候選、來源與編輯選讀分開記錄，不把選讀後資料冒充未修改的完整辭典條目。
3. **使用者可見出處**：本節已補實際三部辭典的署名和連結；現有UI／PDF頁尾仍採初版簡短出處，公開前需同步這些實際查音來源，並重驗頁尾分頁。此輪只修改來源文件，沒有改動列印版面。

筆順採普通官方外鏈，官方[常見問題](https://stroke-order.learningweb.moe.edu.tw/page.jsp?ID=47)明示可建立網站連結；未使用動畫的重製或嵌入授權。石虎查音另以教育百科中研院詞義及政府公開學校繪本交叉確認；本地繪本頁截圖不在擬發布／備份範圍，僅保留[來源與頁次引用](CHINESE_PRACTICE_PHONETICS_REVIEW.md)。

## 外鏈與字體

- 字義：`https://pedia.cloud.edu.tw/Entry/Detail?title=` 加 `encodeURIComponent`。
- 20 字筆順字頁 ID 來自官方查詢結果，逐字查核 heading；`右` 為 `21491`。禁止推算 ID。
- 無已核字頁的字導向 `https://stroke-order.learningweb.moe.edu.tw/searchW.jsp?ID2=1`，連結標示「官方查詢『字』」。
- 外鏈均使用 `target="_blank" rel="noopener noreferrer"`。
- 沿用站上既有 Google Fonts Noto Sans TC。授權：[SIL Open Font License 1.1](https://github.com/notofonts/noto-cjk/blob/main/Sans/LICENSE)。本版使用該印刷字體，未宣稱為教育部標準楷書；不另分發字型檔。

## 列印

每列字頭與直排注音、2 格描紅、2 格空白；低年級 30 mm（6 字／頁），高年級 21 mm（8 字／頁）。相同固定 A4 sheet 用於螢幕預覽及瀏覽器列印，姓名、日期、教材版本、出處 URL、查核日與待核狀態會印在紙上。

使用「預覽 A4 練習簿」→「列印／另存 PDF」，列印選 A4、100% 比例、關閉瀏覽器頁首頁尾、目的地「儲存為 PDF」。樣本透過 Chrome **Page.printToPDF** 實際輸出，非螢幕截圖或僅預覽。

## 驗收（2026-10-09）

- `npm run check`：TypeScript 成功；28 個 test files／454 項測試全數通過；既有 earth-orbit 與 experiments 建置成功。
- `npm run test:chinese-practice`：14 項語義測試通過（分類／版本不借用、跨課與語詞出處、冪等選取、部分語詞移除、自訂罕字與拒絕非法輸入、多音字衝突、外鏈、分頁與聲調格式）。
- `npm run build:chinese-practice` 成功；`git diff --check` 通過。repo 未配置獨立 lint script，使用既有 strict TypeScript 檢查；Python preview server 通過 `py_compile`。
- 全套測試的素材存在性測試曾因 sparse 排除影片而失敗；暫借原媒體唯讀連結後 450 全過，驗收後已移除連結並重套 sparse 索引。沒有媒體變更。
- 實際 Chrome 操作：四種篩選切換、未收錄與空選、整課、個字、重複自訂與合併、取消整課保留其他來源、移除部分語詞保留原出處、重新載入、罕字未知注音阻擋／留空、預覽返回、DEMO 國語入口返回。
- 外鏈實開 `右` 確认字頁標題；數字國字「一」教育百科條目標題吻合，筆順回退官方查詢；阿拉伯數字 `123` 被自訂欄拒絕。87 個已選頁外鏈全部有 noopener；應用 console 無錯誤／警告。
- 低年級樣本：20 生字，4 頁；高年級樣本：20 生字＋罕字 `𠮷`（注音待核），3 頁。兩者 A4 約 594.96 × 841.92 pt。Chrome PDF 以 Type3 CharProcs 內嵌字形資源，可離線閱讀；無 U+FFFD，罕字文字保留。
- 所有 7 頁以既有 PyMuPDF 渲染檢視：頁首頁尾、姓名、版本、字形、輕聲點與其餘聲調、格線及描紅完整，無分頁裁字。已修復最初列間距過大導致的頁尾重疊。
- 可用磁碟約 11 GiB；程式碼 worktree 與驗收輸出僅約數十 MiB，沒有大依賴峰值。

## 本地驗收檔

保存在此 checkout 的 `output/`，不納入程式碼 commit：

- `output/pdf/chinese-practice-low.pdf` / `chinese-practice-high.pdf`
- `output/pdf/low-page-*.png` / `high-page-*.png`、兩種 montage
- `output/pdf/pdf-validation.json`
- `output/pdf/browser-selection.jpg` / `browser-preview.jpg` / `browser-entry.jpg`
- `output/qa/official-source-checks.json`（逐字標題、字音來源及 UI 驗收項）

剩餘資料限制：115下、其餘年份及4～6年級未收錄；20詞條注音待完整課文語境；課綱、版次待核；7 個已知字尚無核對過的筆順直達頁，使用明示官方查詢回退；未知自訂字音需核對。Google Fonts 仍按既有網站方式線上載入，實際輸出 PDF 已內嵌字形。本版未 push、部署、改主分支或同步任何帳號。

本次擴充的實際PDF：`output/pdf/chinese-practice-115-cross-low.pdf`（8頁）、`chinese-practice-115-cross-high.pdf`（7頁），34字/10課來源，包含完整來源附頁。原MVP PDF保留以供比較。

## 最後21詞條定點覆核

本輪確認1詞「石虎」ㄕˊ ㄏㄨˇ，剩20詞條待核。「哪個」兩字均保留空值；跨課合併不會為待核來源借用另一詞的注音。[完整候選音及逐課證據缺口](CHINESE_PRACTICE_PHONETICS_REVIEW.md)。
