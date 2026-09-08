# 四驅車圖片式操作台與玩具賽道

## 本次範圍
- 保留既有實驗與 18 件裝配、BOM、語音、測驗、紀錄、單車與雙車操作。
- 移除右側文字表單；使用底部圖卡工具列、六種直接可見的改裝分類、色球與圖示操作。
- 平道、坡橋、跳台共用一條基準路線，只有路面高度／缺口改變。縮圖、跑道幾何與物理共用同一條件，紀錄保存所選賽道。
- 背景是生成的教室，跑道、車子、護欄、坡橋與裝飾是獨立 3D 幾何，不把可操作物件畫死在背景。
- 不宣稱專業賽車物理或品牌授權；田宮目錄只作題材參考，未複製目錄圖片。

## 原始生成提示（內建 image_gen；原圖保留，未使用 CLI）

### clubhouse.png
Use case: stylized-concept. Asset type: production game background for a 7–9 year old children's interactive miniature toy racing workshop. Generate a polished wide landscape illustration, 1536x1024 or wider, rich handcrafted storybook 3D mixed with colored-pencil texture. Scene: a cozy space-themed classroom toy racing clubhouse at twilight. Deep midnight navy walls with subtle hand-painted constellations, warm honey wood trim, curved panoramic windows onto gentle moon hills and a few planets, softly lit shelves at the FAR LEFT and FAR RIGHT containing little trophies and spare toy wheels. Main composition: center 75% is a broad EMPTY uncluttered dark blue tabletop/play surface extending to the bottom edge, no objects in this clear center, suitable to composite an interactive 3D car or race circuit OVER it. Horizon at upper third, slight elevated frontal perspective. Lighting soft warm amber left and cool teal right, restrained saturation, friendly and premium toy game quality. Environment ONLY: do NOT draw a car, race track, rails, road markings, buttons, panels, icons, interface, labels, text, letters, numbers, logo or watermark. No foreground items that could block an interactive model. Original art, not any game franchise.

### race-flag.png
Use case: stylized-concept. Asset type: one isolated game action icon for a 7–9 year old child's toy mini racing app. A single charming premium hand-crafted black-and-ivory checkerboard racing flag, thick soft cloth fluttering to the right, attached to a short warm golden wooden flagpole leaning slightly diagonally. Rounded shapes, tactile painted toy quality, gentle colored pencil texture, clear large checker pattern readable at 60 pixels. True transparent background, centered full object with 20% empty alpha padding all sides, no clipping. No button frame, no circle background, no badge, no ground, no shadows outside the object, no words or numbers, no logo, no watermark. The flag and pole are one complete isolated object. Warm tasteful highlights, navy shaded edges.

## 驗收計畫
先關閉 3D 分頁再建置；一次只開一個場景。在 1024×600、1024×768、1280×720 檢查改裝、裝配、賽道、考題和紀錄。實跑三種路面、測試停止／重玩與離開，確認沒有缺圖、裁切、捲動依賴或持續重試。

## 2026-09-08 驗收結果
- 瀏覽器模擬 1024×600、1024×768、1280×720：原理、組裝、改裝、試跑、考題、紀錄，共 18 個版面均無整頁溢出或畫面外按鈕。含展開零件表；這不是實體 iPad 測試。
- 實際瀏覽器預設車完賽：平道 16.00 秒、坡橋 17.09 秒、跳台 17.09 秒，三圈完成並保存賽道與配置紀錄。
- 馬達安裝由 1/18 更新至 2/18；零件表收折與選取狀態正常。三道圖片題目點選正確答案均回饋答對。
- 由首頁 DEMO 帳號 → 實驗 → 電池四驅車研究所成功進入；1280×720 無溢出、無失敗圖片。
- 生成圖片只用於教室環境及旗幟；零件、車殼、賽道圖卡從共用 3D 模型拍攝，齒比與路形示意由資料繪製。
- 重建前關閉唯一測試 3D 分頁；取樣系統可用記憶體比例 41%。未在背景持續錄影或重試。
- 模型仍為教學用四驅車；三個賽道共用橢圓平面路線，不是三個不同平面路網，也不宣稱真實工程精度。語音沿用既有系統，未完成實機音色及喇叭聽測。
