# 魔法師故事驗收版本

20 個故事頁、20 個核心單字，A／B／C 共用四個背景及獨立角色道具，組成 20 個互動場景。每級 16 題，包含 6 題劇情看圖四選一；選項先選取並朗讀，提交後才判分。

封面 cover-v2.png 修正兩人站姿、完整鞋子，以及水流落入花盆。看圖題 scene-04 同步使用修正版裁切。

驗證：typecheck、兩個閱讀／書架產物建置，以及 wizard.test.ts 三項測試通過。瀏覽器抽查 C 級第 14 頁（1024×768、1024×600）及題目（1280×720）；確認先選取後提交的判分流程。依使用者要求，未重複遍歷所有分級朗讀。

## 圖像來源

原始生成檔保存在 /Users/ming/.codex/generated_images/01a08166-fc94-7640-9ffe-fe80d7be3ac1/。
- 背景：exec-4674743e-b0cd-4bbf-b601-f350cd5ba9bf.png，裁切四景。
- 魔法師：exec-7969dfbf-1a14-4641-abf4-354074975667.png，isnet-anime 去背。
- 道具：exec-8adb0fd9-912d-4bf2-9644-f66427c4d8cd.png，各格以 u2netp 去背並清除中性灰格紋，保留 prop-0 至 prop-8。
- 六格劇情：exec-293791f6-2b4e-47dd-9eee-75ddc55132a5.png。
- 修正版封面：exec-845754eb-8cc9-42e4-be88-5dfd9e9f045e.png。
- Gail 沿用既有 little-star-v1 / princess-v1 核准角色。

目前為本機驗收版本，尚未發布本次新增內容。

## 六格構圖修正
使用內建 imagegen 編輯，輸出 composition-board-v2.png；右中、右下均改為兩人站立，澆水落入盆內，並更新 quiz/scene-04.png 與 scene-06.png。原始生成檔 exec-79faee01-0b1d-4abf-b7d8-023eb6c31fbb.png。提示要求：僅修改第 4、6 格，保持六格排版與角色畫風，完整帽子和鞋子，兩人站立，第 4 格水流直接進入花盆土壤。
