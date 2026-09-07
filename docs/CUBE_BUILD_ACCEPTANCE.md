# 魔術方塊工坊：製作與驗收

2026-09-07。保留所有現有實驗，新增獨立的魔術方塊工坊。

## 已製作範圍

- 26 個獨立零件、54 個色面，六面的四分之一圈及逆轉；相機旋轉與方塊轉層分離。
- 拆解、核心／中心／邊塊／角塊分組觀察、手動轉視角、縮放與歸位。
- 圖示導覽、裝置語音、看圖題；公式與依操作紀錄倒轉提示藏在「？」。
- 7 個可停留操作的分鏡，保留進入導覽前的自由操作狀態。
- 共用教室底圖、當前 3D 物件透明 PNG 匯出、JSON 分鏡腳本，以及由同一個 3D 場景錄製的無聲 WebM 示範影片。支援的瀏覽器可自行再錄製一次；語音未混入影片。

## 正確性邊界

這是經典 3×3 的簡化結構示意，非某品牌的精確工程模型，沒有零件卡扣碰撞模擬。倒轉提示只還原本次操作紀錄，不是最短解法或任意輸入狀態的求解器。腳本與可互動分鏡已提供，尚未輸出配音 MP4。

## 參考與原創素材

月球車影片 https://www.youtube.com/watch?v=u2qs-l0vgGw 與太空站桁架影片 https://www.youtube.com/watch?v=jvhdNuiyNOI 的展示方式用作「全貌→拆分→局部→組回」參考，不複製其影片、模型、聲音或音樂；不宣稱原片是 Three.js 製作。

方塊機構影片 https://www.youtube.com/watch?v=bgcScY7CiMs；轉動符號依 WCA https://www.worldcubeassociation.org/regulations/#12a。方塊模型與看圖题 SVG 均由本專案程式原創。

底圖由內建 image generation 生成，原檔保留於 `/Users/ming/.codex/generated_images/01a06020-9ed5-7b80-ad88-de781cf5c4d1/exec-d956733c-b43d-4623-98e4-e4080d40f415.png`，使用版 `images/experiments/shared-classroom/v1/classroom.png`。沒有將需要互動的物件烘焙在底圖。

提示：Use case: stylized-concept. Asset type: reusable empty classroom background for a child's interactive 3D science exhibit, landscape 1536x1024. A premium tactile miniature interstellar classroom: deep midnight navy wall, small subtle brass stars, a rounded arched window at far left showing a calm blue nebula, warm wood shelving near the far sides with a few neatly arranged plain books and one small plant. A broad EMPTY warm oak demonstration tabletop spans the lower third, seen from slightly above, centered empty display space. Center 65 percent calm, uncluttered dark navy wall and empty tabletop, for a separately rendered 3D object. Soft teal rim lighting with gentle warm golden daylight, tasteful realistic miniature materials, inviting for age 7-9 and parents, same polished toy workshop aesthetic as Learning Planet. No cube, no planets model, no experiment tools in center, no people, no text, no labels, no logos, no controls, no watermark. Background environment only; all interactive subjects will be separate live 3D meshes.

## 驗收狀態

本機：107 項測試、TypeScript 檢查及實驗模組建置通過。瀏覽器 1280×720 主畫面、拆解、核心、看圖題、導覽往返、單層轉動與反轉還原已實際操作。1024×600 與 1024×768 使用相同瀏覽器內的固定尺寸應用程式 iframe 驗收框（`qa/cube-tablet.html`）：1024×600 的主畫面／拆解／看圖題／說明頁，以及 1024×768 看圖題量測無頁面溢出，無畫面外控制項。這是瀏覽器模擬尺寸，不是實體 iPad 驗收。

修正了拆解與核心近看鏡頭過近造成的裁切。透明 PNG 已檢視並確認 alpha 通道。WebM 已由實際 UI 匯出並核對完整資料：960×640、約 25.57 秒、3,129,715 bytes、無聲 VP8。正式站驗收將在部署後補齊。

舊版 proposal 與 draft JSON 保留為設計歷史；以 `data/experiments/cube-mechanism-v1/playback.json` 為目前實作分鏡。
