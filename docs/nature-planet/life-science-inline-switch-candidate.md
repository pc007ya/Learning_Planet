# 生活／自然同頁切換候選

基準為最新遠端 `main`：`d26f17165da57b329b84eca035d2f6e78289c1bc`，獨立分支 `codex/life-science-inline-switch-v2`。環境重啟後原checkout已不存在，先核驗先前Library包作參考；發現main已有新改動後，以最新main續作，沒有用舊9664121包覆蓋它。此候選未推送、合併或部署。

原先數學有「子單元呈現：傳統／新版・3D 探索」同頁切換，生活／自然卻只有清單中的地圖卡。現在六級生活／自然使用相同位置、按鈕文字與aria-pressed語義，將地圖直接掛在原頁，沒有改成按鈕再開一張地圖對話框。1–2級標示生活，3–6級標示自然；切入科目時保留可用的1–6級，不再無條件跳回3級。明確rollback關閉課綱時仍保留原3–6級行為。

原23個SCI_UNITS的ID、種類、傳統內容、記憶／心智圖與單元練習入口保留。移除重複地圖卡，但保留舊卡ID的相容處理。3D中的課程仍走原nature-entry→science-curriculum橋接與既有本機記錄，不建立另一個題池或成績系統。

偏好使用獨立的`learning-planet:science-map-view`，預設傳統；不更動數學`learning-planet:math-map-view`。儲存被拒仍可切換。探索位置依學生／年級在宿主記憶體保存，切回傳統再回3D可延續，不把探索座標當成雲端成績。

內嵌模式不新增地圖history層、不使用showModal；原獨立地圖overlay模式保留。練習仍為原dialog並持有自己的history、Web Lock與記錄。從練習返回會恢復地圖及清理舊手勢；既有700ms防連點保護保留，並非取消保護以讓測試過。切換年級／學生／科目、切回傳統、離開頁面或晚到的import均清理候選；早期close handle避免等待GPU或資料才卸載。載入／失敗狀態提供重試與傳統回退。

修改範圍：

- `index.html`：切換控制、偏好、年級文字、同頁React掛載與分學生／年級探索cache。
- `modules/nature-planet/inline-view.mjs`、`inline.css`：延遲載入與內嵌版面。
- `modules/nature-planet/launch.mjs`：可選container、同頁history／關閉與探索快照接口；既有overlay預設保留。
- `modules/science-curriculum/nature-entry.mjs`：傳入container及早期close／探索回呼，保留原課程所有權協調。

273項測試全過（0失敗、0跳過）：新入口／偏好／延遲卸載、六級真實host DOM流程、練習記錄與重開、課綱／原主題／rollback、樣式隔離、數學宿主／分級資源／降落回歸。完整DC宿主腳本語法通過；入口靜態建置facade涵蓋73模組。既有runtime資產URL於建置時保留到執行期解析的警告不影響建置成功。

驗證命令（不執行含resource-timing的總check）：

```sh
node --test tests/nature-planet/inline-host.check.mjs tests/nature-planet/launcher.check.mjs tests/nature-planet/practice-bridge.check.mjs tests/nature-planet/legacy-bridge.check.mjs tests/nature-planet/style-isolation.check.mjs tests/science-curriculum/*.check.mjs tests/math-planet-v11-host.check.mjs tests/math-planet-v11-entry.check.mjs tests/math-planet-grade-loading.check.mjs tests/math-planet-landing.check.mjs
npx vite build --config tools/nature-planet/vite.inline-switch.config.mjs
```

數學地圖程式、數學年級資源、自然runtime／scene／terrain、shared-actors及模型資產相對d26f171沒有變更，因此未重做地形／動物／飛行測試或讀取時間測量。新增流程測試的renderer被替代；React hook lifecycle測試也不是瀏覽器排版驗收。尚欠實頁同頁切換、重新整理偏好、六級版面、完整3D畫面、滑鼠／實體觸控及資源釋放的人工確認；不宣稱已通過這些項目。

可檢視成果是此分支的程式、patch／bundle及測試紀錄；應在原完整網站checkout套用候選再做Mac實頁驗收，不能把移交overlay檔案包當成完整獨立網站，也不得發布驗收頁。
