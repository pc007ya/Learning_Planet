# 力與運動新版：實作與驗收界線

## 獨立實作

- `src/experiment-planets/force-motion.ts`：4 m 光電門量測軌道、原創程序車架/輪胎/輪軸/砝碼/摩擦片/定力推桿、固定起點與終點、緩衝區。物件、地面、刻度、標籤及力箭頭分層。
- `src/experiment-planets/force-model.ts`：水平一維靜/動摩擦與牛頓第二定律；120 Hz 分段積分。摩擦只減速，不會在無外力時把車反向加速。
- 原 controls `force/mass/surface` 值保留，另加 `hand=hold/release`；重設只回到起點，保留已完成量測與比較成就。提供所有共用 World 介面與 metrics/records/challenge/snapshot 等可選能力。
- 直接拖曳需射線命中小車的擴大命中盒。背景拖曳留給相機；手動拖動或中途改條件不算公平量測。
- 只在完整通過 4 m、未改條件的兩次量測中，判定推力/質量/表面比較。示範不代替實作。

## 科學一手來源

- NASA Glenn「Newton’s Laws of Motion」：https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/newtons-laws-of-motion/
- OpenStax University Physics 1 §6.2「Friction」：https://openstax.org/books/university-physics-volume-1/pages/6-2-friction

資料用於核對模型；場景、貼圖和物件為原創程序幾何與 canvas 圖案，未複製銅匠 assets 或程式。

## 參考與差距

- 由銅匠 README 的「Acceleration vs. Force and Mass」官方開啟連結解析出 https://lab.tongjiang.app/accel-force-step 。本代理已確認連結與教學定位，未自行佔用共享 Cua viewport 實看參考；視覺比較交由 root 集中完成，不能在此宣稱同等品質。
- 目前比較層級：可操作 3D 儀器、連動模型讀數、控制變因實驗、多次紀錄、基於量測的考核。
- 尚待 root 的整合畫面驗收：三種平板和手機的構圖/刻度/力標籤可讀、真實拖曳和相機、注音UI、示範/播放/暫停/跨頁還原。

## 必須保留的可見限制

模型把車底摩擦片視為整車的等效接觸阻力，法向力假設為整車重量；不是自由滾輪的精確模型。輪軸轉動慣量、空氣阻力與真實材料係數差異未模擬。參數為教學給定值，不是實驗儀器實測值。4 m 光電門的記錄與末端緩衝區停車是不同事件。

## 操作驗收腳本

1. 平滑、1 kg、小力，觀察。約1.90 s通過4 m，留一筆有效紀錄。
2. 保持1 kg與平滑，只改大力再觀察。約1.05 s；推力任務完成。
3. 保持大力與平滑，只改2 kg再觀察。約1.58 s；質量任務完成。
4. 回1 kg、大力，只改粗糙再觀察。約1.17 s；表面任務完成。
5. 粗糙、2 kg、小力按觀察：靜摩擦平衡推力，車不應動；箭頭推力3 N、摩擦-3 N、淨力0。
6. 第4步「放手」考核：粗糙、1 kg、大力，剛起步約0.3–0.4 s放手。先繼續移動，再在緩衝區前靠摩擦停下。放手瞬間速度不可變0。
7. 行進途中改質量或地面：物理立即改變，但此次紀錄不可列公平比較。
8. 示範完成不能直接獲任務；手動拖曳不能當作4 m有效測量。
9. 問題對話框與注音來回、暫停再繼續，須保留位置及條件；刷新只還原到暫停狀態。

## 已完成程式驗證

`npx vitest run tests/force-quality.test.ts`：9項通過。整合前 typecheck 通過。尚未宣稱實機或畫面通過。

## 實際整合驗收（2026-10-30，localhost 候選）

使用本代理獨立 IAB session `01a18d63-382c-768d-b00b-595699e18091`，未操作 root 或使用者 Chrome 分頁。共享 app 更新至 `app-DIBeZ2Bb` 後，實際操作結果：

- **推力**：3 N／1 kg／平滑，4 m 1.90 s；8 N／1 kg／平滑，1.05 s；模型考核通過。
- **質量**：8 N／1 kg／平滑 1.05 s；8 N／2 kg／平滑 1.58 s；模型考核通過。
- **地面**：8 N／1 kg／粗糙 1.17 s，相較平滑 1.05 s；三項量測任務完成。
- **靜摩擦**：3 N／2 kg／粗糙，推力 3 N、摩擦 -3 N、x/v/a 皆 0；未記錄成有效 4 m 量測。
- **放手考核**：放手後仍有 v=1.967 m/s、a=-2.158 m/s²；最後在 x=2.175 m 停下，沒有碰到 x=6.7 m 緩衝區；考核 `passed=true`。
- **力與暫停讀數**：8 N／1 kg／粗糙，顯示摩擦 2.16 N、淨力 5.84 N；暫停時模型 v=2.289、x=.449、a=5.842，主讀數分別為 2.29、.45、5.84，精度一致。三個力的 DOM 標註實際可見，字級 12 px。
- **直接指標拖放**：360 px 視窗下命中小車，x=.449→3.476，放手後滑到 x=6.425 停下。拖背景只轉鏡頭，x 與 trials 數皆不變，沒有任意 canvas 點擊當成小車命中。
- **題圖與鍵盤**：1024×600 注音看圖題四張圖與四種敘述一致；Enter 作答有效；回饋有注音，關閉後 x 與量測紀錄保留。
- **注音兩態**：1280×720、1024×600、390×844、360×780 共八態截圖並人工看圖。各態 `scrollWidth<=innerWidth`、側欄底部不超過 footer；可見按鈕最小邊 44 px；`labelLayout=clear`。動態後再關注音，主讀數標題仍精確為「速度／位移／加速度」，無單位覆寫標題。

結構化版面證據為 `layout-results.json`；檔名 `*-final.png` 與 `*-zhuyin*.png` 為實際瀏覽器畫面，不是重繪。

### 已修正的實看問題

- 初版鏡頭過遠：共享 Stage 改投影範圍 fit 後，平台更大；手機保留 ± 放大可局部檢查。
- 微小 Sprite 起點／光電門／力字標：改成隨物件錨定的 12 px DOM 標註，支援注音。
- 共享 metrics 的後代 span 選取誤改 ruby：root 已修成 direct-child 單位欄。
- 共享 Stage 的 hidden 標籤不再顯示、暫停數值落後：root 已修復，已實測。
- 共享導航選取器誤抓 body：已回報 root，source 已限定 button，待最終統一 build 收尾。

### 誠實比較與未測項

參考官方 `accel-force-step` 已實際打開、查看並保存同尺寸 `reference-accel-force-1280x720.png`。參考有完整滑輪／吊碼／紙帶計時器／天平與 a–F、a–1/m 教學路徑；此版改為適合小學的定力推桿、4 m 光電門、摩擦與放手探索，沒有宣稱是同一實驗。

目前尚不宣稱「已與參考完全同等」：本版主曲線是速度隨時間，不是紙帶求加速度或線性擬合板；較小的 3D 尺刻度、砝碼文字需局部放大。指標拖曳在手機尺寸視窗實測，但不等同實體觸控、iOS Safari 或低階 GPU 驗證。root 將依最終共同 build 與使用者檢視決定品質驗收。

### 最後統一 build 的針對性回歸

- 1024×600「曲線」44 px 入口打開實際 650×220 SVG，13 個速度取樣點可見；兩筆紀錄同時可見。注音圖說只有一層，重複 SVG id 已移除。截圖 `1024x600-chart-raw-legend-final.png`、`1024x600-two-records-final.png`。
- 第九次量測使較早的 3 N 基準退出最近八筆顯示後，三項已得進度仍為 3/3；刷新後保持。`earned-progress-after-nine-trials.png`。
- 最後 label solver 實看：360×780、注音開、8 N 持續施力、x=2.366 m、v=5.258 m/s、a=5.842 m/s²。起點、4 m 光電門、推力→8.0 N、摩擦←2.16 N、淨力→5.84 N 全可見，`labelLayout=clear`；保護車身區未被字卡覆蓋，無橫向溢出。最終截圖 `360x780-all-forces-protected-cart-solver-final.png`。此前無 solver 後綴的同名圖是修正前失敗證據，勿當成果圖。
- 整批驗證腳本曾以 applied - signed friction 檢查加速度而失敗；`forceFriction` 為有號值，正確是 (applied + friction) / mass。已回報 root 修正驗證，不改正確物理模型。
- 未測限制不變：實體觸控、iOS Safari、低階 GPU；不宣稱全面追平參考。參考截圖僅內部比較，不應納入發佈。
