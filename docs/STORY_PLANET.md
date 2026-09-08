# 故事星球 v1

入口位於首頁第二列：週考 → 實驗 → 故事 → 扭蛋。保留所有原有模組。

使用 Three.js 製作書頁、封面、書背與書脊；背面浮動，點選後用 1 秒翻正、停留約 0.75 秒，進入閱讀。尊重減少動態偏好。每次只載入一個 3D 書本，離開釋放 geometry、material、texture、renderer，隱藏頁面不繪製。新增書籍使用 catalog，左右分頁選書，不放假書。

第一本：第一次：不再怕怕。20 頁乾淨 PNG 來自使用者提供的 Kids_story/corrected-2048x1536；原稿文字與版面資料來自 Kid_Storybook/stories/saved/library.json。scene14 / scene13 順序及 scene15.5 的放學頁均明確對照，不使用 scene16 取代。原檔不變更。

閱讀：自由翻頁、鍵盤左右鍵、保存頁碼、按句朗讀與浮現字幕、慢速、停止、影片切換。語音使用裝置 zh-TW TTS，未製作錄音音軌。字幕是獨立陪讀層，保留的 authoringStyle/layers 尚未逐一渲染為編輯器完整排版。YouTube 為可選內嵌，不自動發聲；未實作影片結束自動跳轉。圖片問答及角色熱點不在本次入口／選書交付內。

建置：`npx vite build --config vite.story.config.ts`。首頁載入 story-planet.html，程式及樣式位於 modules/story-planet；資料位於 stories/catalog.json。背景沿用共用教室，沒有將書本烘焙入背景。

## 新生成素材

imagegen 內建模式生成 `images/home/planets/story-planet-v1.png`，保留原始生成檔。提示：

Use case: stylized-concept. Generate one polished square game asset for a children's Learning Planet homepage: a magical STORY planet, a small spherical midnight-blue and violet world supporting an open ivory storybook with rich gold binding and a tiny warm glowing fairytale library growing from the pages. A delicate orbital ring of golden starlight wraps the planet. Premium tactile 3D storybook illustration, charming for ages 7–9, cyan rim lighting, warm gold highlights, clear recognizable silhouette at 140 pixels. Entire isolated object centered with generous transparent padding, genuine transparent background, no rectangular background, no text, no letters, no logo, no watermark. All edges intact. This is a single standalone planet entrance illustration, not a UI mockup.

## 本機驗收

2026-09-08：1024×768、1024×600、1280×720 閱讀頁高度與 viewport 相同，底部導覽在畫面內。書背可點進閱讀、上一頁／下一頁、顯示字幕、回書架及首頁均已操作。Browser console 無 error。這是瀏覽器尺寸模擬，不是實體 iPad；尚未正式站部署驗收，語音聽感與外部 YouTube 播放需另驗。

截圖保存在工作區上層「驗收截圖/故事星球-20260908」。
