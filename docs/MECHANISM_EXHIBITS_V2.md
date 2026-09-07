# 時鐘與回力車：親子拆解展示 V2

對象：7–9 歲孩子與家長。保留既有時間比例、滑桿、播放、回拉、路面比較、觀察紀錄與作答。新增完整外觀、透視、連續爆炸拆解、視角旋轉、零件選取及用途說明。透明面板文字為白色；鐘面是實物材質的一部分，採淺色底深色刻度。

## 分層

- 底圖：AI 生成的空展示台，images/experiments/v2/museum-stage.png。
- 上層：真正的 Three.js 網格與 PBR 材質，不把零件烘焙在底圖。每個組件有原位置與拆開位置，使用同一組模型插值，避免切圖時零件換樣。
- 文字：HTML 按鈕與解說卡，獨立於底圖，支援鍵盤選擇。模型數字與零件表相互對照，點選後立即顯示用途。
- 內部組件在完整外觀被遮住時，從零件表選取會自動切換透視。

## 物理與教學邊界

時鐘使用常見電池式石英鐘的主要組成：鐘殼、鏡片、刻度盤、指針、齒輪、線圈馬達、石英與電路、電池。齒輪數量與形狀是教學簡化，畫面的運轉不是完整機芯的工程動力學。指針時間比例仍由原本共用模型計算。

回力車展示車殼、底盤、輪胎輪圈、輪軸、齒輪箱殼、捲簧、齒輪、離合機構。車身參考一般玩具外形，並非特定品牌逆向工程；省略緊固件。回拉與路面比較仍沿用教學能量模型，非實際車款距離預測。

安全提醒放在家長說明：實物拆解由成人協助，小零件與電池勿讓孩子吞食。

石英原理參考：[Seiko Quartz knowledge](https://www.seikowatches.com/ca-en/customerservice/knowledge/quartz-knowledge)、[Seiko 電池與石英機芯說明](https://www.seikowatches.com/us-en/special/100stories/innovation/)。不把電池石英鐘誤教為捲簧機械鐘。

## 圖像生成紀錄

使用內建 image_gen，非 API CLI。原圖保留在生成目錄，選用檔已複製進專案；沒有覆蓋舊素材。

最終 prompt：

> Use case: product-mockup. Asset type: background plate for an interactive educational 3D science exhibit for children ages 7–9 and parents. Create one premium photorealistic gently magical space museum product photography backdrop, landscape 3:2. A completely EMPTY broad satin midnight-blue display tabletop spanning lower half, softly curved navy cyclorama behind it, very subtle distant stars and large out-of-focus cyan and warm amber rim lighting toward outer edges, calm and sophisticated, inviting not scary. Center 75 percent is completely empty clean dark blue negative space for placing live interactive mechanical clock or toy car rendered by software. Camera looking slightly down at tabletop, studio softbox lighting, believable subtle material texture, no distracting objects. No clock, no car, no gears, no tools, no circles, no plinth, no labels, no typography, no UI, no people, no watermark. This is only an environment plate; do NOT render any foreground subject. Deep navy, soft teal and warm gold, premium children's science museum not gaming dashboard.

這是親子教學模型，不宣稱達到照片級外觀或品牌機構精度。後續若要對照某一實體產品進行精確拆解，需取得該產品的參考照片或 CAD 與使用授權。

## 驗收

- 72 項自動測試通過，包含原有浮力／時鐘／回力車模型與新增的零件定義檢查。
- 瀏覽器逐一選取時鐘與回力車各 8 組零件，探索計數皆達 8/8；從完整外觀選內部零件會切換透視。
- 拆解後仍能操作時鐘前進一小時；回力車在拆解和完整模式皆能執行原有路面比較，回拉 50% 的結果仍為 0.90／0.45 模型單位。
- 390px 手機版無水平溢出；調整車殼展開取景避免上緣裁切，零件編號增加避讓與連線。這是瀏覽器尺寸測試，不是實機效能驗收。
- 新模型離開時釋放幾何、材質、鐘面紋理、環境貼圖與事件監聽。
