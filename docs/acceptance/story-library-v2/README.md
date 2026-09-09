# 雙層書架與星星微光

入口：http://127.0.0.1:4188/story-planet.html

- 上層中文、下層英文，皆以書脊呈現。點擊後抽出、轉向正面、掀開封面，再進入原本閱讀器。
- 左上只有返回首頁與故事星球。移除英文捷徑、底部資訊列與操作提示。左右透明箭頭置於畫面垂直中央；目前每種語言一本，無其他組可切換時停用。
- 找到的場景星星維持柔和微光，已完成任務的進度星星也微微發亮。
- 兩個建置與型別檢查通過，書架／繪本 9 項測試通過。瀏覽器實測中文及英文書脊成功進入各自閱讀器。

底圖使用內建 imagegen 編輯，保存於 `images/story/library-hall-v2.png`。

生成提示：Edit this exact magical library background. Preserve the ornate wood sides, warm lanterns, navy velvet backing, moon window, star medallion, floor, perspective and entire composition. Change ONLY the large empty central bookcase: add a sturdy horizontal wooden shelf across its center at 49% image height and move the existing lower shelf to 79% image height, making TWO equally usable tall empty book compartments between y23%-49% and y51%-79%. Both compartments completely empty, no books in central compartments; interactive books will be overlaid. Central opening boundaries remain x20%-80%. No text or UI. Landscape 16:9.
