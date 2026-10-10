# 國語練習簿：115 上三出版社 1～3 年級查核

查核日：2026-10-09。來源為教育部教育百科公開教材索引及逐課 TCollection 頁；只保留課名與字詞分類，不搬運整篇課文或字義解釋。

## 當年度正式資料

| 年級 | 出版社 | 正式課數 | 前導 | 生字詞條 | 認讀字 | 語詞 |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | 南一 | 7 | 1 | 82 | 23 | 33 |
| 1 | 康軒 | 6 | 0 | 74 | 0 | 23 |
| 1 | 翰林 | 7 | 0 | 77 | 10 | 22 |
| 2 | 南一 | 12 | 0 | 216 | 15 | 122 |
| 2 | 康軒 | 12 | 0 | 216 | 23 | 138 |
| 2 | 翰林 | 12 | 0 | 216 | 33 | 116 |
| 3 | 南一 | 12 | 0 | 180 | 0 | 123 |
| 3 | 康軒 | 12 | 0 | 163 | 39 | 134 |
| 3 | 翰林 | 12 | 0 | 176 | 11 | 114 |

共 92 正式課＋1 前導單元，2,379 分類詞條，1,110 個不同國字。課綱與印刷版次保留 null；第 1／3／5 冊由年級、學期推導，不宣稱出版社版次。

## 字音與待核資訊

逐字、逐語詞查核 1852 個教育百科條目（含5個補充語境詞）；從官方 DOM 聲調樣式讀取聲調，保留原始注音與來源。小字典及簡編本優先，缺詞時才參考重編本。單字可有多個音，不能直接取首音。

多音字優先依同課官方語詞選音，其餘由編輯依課名及現代日常詞義選音，保留 soundNote 與來源供教師覆核。這些不是出版社完整課文的注音抄錄。青蛙「呱呱」、詠鵝「曲項」、貓的「肚子」、吹泡泡與睡覺已作語義判讀；未套用嬰兒啼哭／歌曲／牛肚等同形異音。

仍有 20 個詞條讀音待完整課文語境確認；保留空值並在課卡提示。預設阻擋缺音列印，使用者可手動核音或明示待核留空。單詞查不到注音時只以已核單字組合，不猜音。

| 課次ID | 字詞 | 類別 |
| --- | --- | --- |
| 0102011150104 | 頭 | 認讀字 |
| 0102011150105 | 哪 | 認讀字 |
| 0102011150105 | 哪個 | 語詞 |
| 0102011150106 | 吐 | 認讀字 |
| 0103011150102 | 啊 | 生字 |
| 0101011150104 | 哪 | 認讀字 |
| 0103021150101 | 還 | 生字 |
| 0103021150104 | 哇 | 生字 |
| 0103021150107 | 哪 | 生字 |
| 0102021150101 | 哇 | 生字 |
| 0102021150102 | 哪 | 生字 |
| 0102021150106 | 吧 | 生字 |
| 0101021150109 | 哪 | 生字 |
| 0102031150105 | 吐 | 生字 |
| 0102031150105 | 轉 | 生字 |
| 0103031150110 | 呀 | 生字 |
| 0103031150110 | 泥 | 生字 |
| 0103031150111 | 鑽 | 生字 |
| 0101031150105 | 結 | 生字 |
| 0101031150106 | 削 | 生字 |

## 115 下、舊年度及缺口

- 教育百科學年學期選單最高為 115 上，未列 115 下。9 組 115 下都保留「教育百科尚未列出」，不以 114 下或其他年份代替。
- 南一公開教師網：https://trans.nani.com.tw/NaniTeacher/index.jsp ，本次未取得可核實 115 下逐課公開詞表。
- 康軒官方課程計畫：https://www.knsh.com.tw/service/plan ，指向公開新綱資料夾 https://drive.google.com/drive/folders/1VjGyNCHi1Ilg9kqqgh-RhO9odaaS4Q8M 。有上下學期年級資料夾，但未標明115年度，因此不能作115下對照。
- 翰林115教材博覽會：https://el.hle.com.tw/class/e_middle/index.html 。完整電子書入口提示教師授權限制，未登入或下載教材包。
- 以上只證明本次未取得115下可用來源，不宣稱出版社一定尚未出版全部下冊。
- 舊年度獨立來源：114下一年級南一索引已核12課（詳 coverage-sources.json）。尚未逐課核字詞、注音，未載入練習簿，介面仍明示114未收錄。
- 翰林三上第五課，教育百科索引與課頁均作「為梨花撐傘用」，保留官方表題並在metadata提示疑似多字，出版社課名待核。

## 實作與驗收

- 分支 codex/chinese-practice-mvp；本地修改，未 push、部署、改主分支。原checkout未修改。
- 九組篩選真實瀏覽器操作逐組核對課數與首末課；切115下不借舊年。
- 14項國語測試；全站28檔454項測試、TypeScript、既有兩模組及國語模組建置成功。沒有獨立lint腳本，沿用strict TypeScript。
- 全站測試暫時使用原媒體唯讀符號連結；測試結束已移除。未複製媒體與安裝依賴。
- 跨九組選字、重複整課、取消保留其他出版社出處、罕字阻擋/明示留空、預覽返回保留清單及109個外鏈noopener已驗。
- 多於兩課新增來源附頁，保留每課完整版本、URL及實際選取詞條分類（含取消部分字標記），紙上來源編號與字格對應。
- 真正Chrome printToPDF：34字、10課來源＋罕字；低年級8頁/高年級7頁，均含2頁來源。所有15頁渲染視覺檢視，未裁字或重疊；輕聲、Noto字形、罕字文本、來源URL及Type3嵌字核對。

樣本：`output/pdf/chinese-practice-115-cross-low.pdf`、`chinese-practice-115-cross-high.pdf`。QA：`output/qa/expanded-catalog-browser.json`、`output/pdf/expanded-pdf-validation.json`。本地網址 http://127.0.0.1:4173/chinese-practice.html 。

## 逐課官方來源

| 年學期 | 年級 | 出版社 | 課次/單元 | 課名 | 生字 | 認讀字 | 語詞 | 官方來源 |
| --- | ---: | --- | --- | --- | ---: | ---: | ---: | --- |
| 115上 | 1 | 南一 | 前導 | 魔法文字 | 8 | 0 | 0 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102011150100) |
| 115上 | 1 | 南一 | 1 | 小船 | 10 | 3 | 2 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102011150101) |
| 115上 | 1 | 南一 | 2 | 印手印 | 10 | 3 | 5 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102011150102) |
| 115上 | 1 | 南一 | 3 | 吹泡泡 | 10 | 3 | 5 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102011150103) |
| 115上 | 1 | 南一 | 4 | 你好 | 11 | 4 | 3 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102011150104) |
| 115上 | 1 | 南一 | 5 | 外星人 | 11 | 5 | 7 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102011150105) |
| 115上 | 1 | 南一 | 6 | 小金魚 | 11 | 3 | 5 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102011150106) |
| 115上 | 1 | 南一 | 7 | 紅紅的春 | 11 | 2 | 6 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102011150107) |
| 115上 | 1 | 康軒 | 1 | 拍拍手 | 9 | 0 | 1 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103011150101) |
| 115上 | 1 | 康軒 | 2 | 這是誰的? | 11 | 0 | 1 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103011150102) |
| 115上 | 1 | 康軒 | 3 | 秋千 | 14 | 0 | 6 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103011150103) |
| 115上 | 1 | 康軒 | 4 | 大個子，小個子 | 13 | 0 | 4 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103011150104) |
| 115上 | 1 | 康軒 | 5 | 比一比 | 14 | 0 | 7 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103011150105) |
| 115上 | 1 | 康軒 | 6 | 小路 | 13 | 0 | 4 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103011150106) |
| 115上 | 1 | 翰林 | 1 | 一起走 | 10 | 0 | 1 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101011150101) |
| 115上 | 1 | 翰林 | 2 | 大風吹 | 10 | 0 | 2 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101011150102) |
| 115上 | 1 | 翰林 | 3 | 火車過山洞 | 11 | 2 | 3 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101011150103) |
| 115上 | 1 | 翰林 | 4 | 請問 | 13 | 3 | 6 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101011150104) |
| 115上 | 1 | 翰林 | 5 | 七彩滑梯 | 12 | 3 | 4 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101011150105) |
| 115上 | 1 | 翰林 | 6 | 秋千 | 11 | 2 | 3 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101011150106) |
| 115上 | 1 | 翰林 | 7 | 回音 | 10 | 0 | 3 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101011150107) |
| 115上 | 2 | 南一 | 1 | 打招呼 | 18 | 1 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102021150101) |
| 115上 | 2 | 南一 | 2 | 爬梯子 | 18 | 0 | 7 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102021150102) |
| 115上 | 2 | 南一 | 3 | 勇氣樹 | 18 | 2 | 10 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102021150103) |
| 115上 | 2 | 南一 | 4 | 一天的時間 | 18 | 0 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102021150104) |
| 115上 | 2 | 南一 | 5 | 小書蟲 | 18 | 3 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102021150105) |
| 115上 | 2 | 南一 | 6 | 從自己開始 | 18 | 2 | 10 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102021150106) |
| 115上 | 2 | 南一 | 7 | 等兔子來撞樹 | 18 | 0 | 8 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102021150107) |
| 115上 | 2 | 南一 | 8 | 角和腳 | 18 | 2 | 8 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102021150108) |
| 115上 | 2 | 南一 | 9 | 赤腳國王 | 18 | 2 | 15 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102021150109) |
| 115上 | 2 | 南一 | 10 | 去農場玩 | 18 | 0 | 12 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102021150110) |
| 115上 | 2 | 南一 | 11 | 幸福湯圓 | 18 | 2 | 12 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102021150111) |
| 115上 | 2 | 南一 | 12 | 到野外上課 | 18 | 1 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102021150112) |
| 115上 | 2 | 康軒 | 1 | 新學年新希望 | 18 | 2 | 13 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103021150101) |
| 115上 | 2 | 康軒 | 2 | 一起做早餐 | 18 | 2 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103021150102) |
| 115上 | 2 | 康軒 | 3 | 走過小巷 | 18 | 2 | 8 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103021150103) |
| 115上 | 2 | 康軒 | 4 | 運動會 | 18 | 2 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103021150104) |
| 115上 | 2 | 康軒 | 5 | 坐竹籃船 | 18 | 2 | 13 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103021150105) |
| 115上 | 2 | 康軒 | 6 | 小鎮的柿餅節 | 18 | 2 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103021150106) |
| 115上 | 2 | 康軒 | 7 | 國王的新衣裳 | 18 | 2 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103021150107) |
| 115上 | 2 | 康軒 | 8 | 「聰明」的小熊 | 18 | 2 | 12 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103021150108) |
| 115上 | 2 | 康軒 | 9 | 大象有多重? | 18 | 2 | 12 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103021150109) |
| 115上 | 2 | 康軒 | 10 | 新年快樂 | 18 | 2 | 13 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103021150110) |
| 115上 | 2 | 康軒 | 11 | 遠方來的黑皮 | 18 | 2 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103021150111) |
| 115上 | 2 | 康軒 | 12 | 我愛冬天 | 18 | 1 | 14 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103021150112) |
| 115上 | 2 | 翰林 | 1 | 我的心情 | 18 | 2 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101021150101) |
| 115上 | 2 | 翰林 | 2 | 彩色的天空 | 18 | 4 | 12 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101021150102) |
| 115上 | 2 | 翰林 | 3 | 國王做新衣 | 18 | 4 | 10 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101021150103) |
| 115上 | 2 | 翰林 | 4 | 水草下的呱呱 | 18 | 4 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101021150104) |
| 115上 | 2 | 翰林 | 5 | 沙灘上的畫 | 18 | 0 | 8 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101021150105) |
| 115上 | 2 | 翰林 | 6 | 草叢裡的星星 | 18 | 2 | 7 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101021150106) |
| 115上 | 2 | 翰林 | 7 | 不一樣的美食 | 18 | 4 | 12 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101021150107) |
| 115上 | 2 | 翰林 | 8 | 美食分享日 | 18 | 2 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101021150108) |
| 115上 | 2 | 翰林 | 9 | 好味道 | 18 | 2 | 8 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101021150109) |
| 115上 | 2 | 翰林 | 10 | 加加減減 | 18 | 1 | 10 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101021150110) |
| 115上 | 2 | 翰林 | 11 | 奇怪的門 | 18 | 4 | 13 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101021150111) |
| 115上 | 2 | 翰林 | 12 | 詠鵝 | 18 | 4 | 7 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101021150112) |
| 115上 | 3 | 南一 | 1 | 你好，新朋友 | 15 | 0 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102031150101) |
| 115上 | 3 | 南一 | 2 | 我們的約定 | 15 | 0 | 13 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102031150102) |
| 115上 | 3 | 南一 | 3 | 下課十分鐘 | 15 | 0 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102031150103) |
| 115上 | 3 | 南一 | 4 | 一顆黑點 | 15 | 0 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102031150104) |
| 115上 | 3 | 南一 | 5 | 火大了 | 15 | 0 | 6 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102031150105) |
| 115上 | 3 | 南一 | 6 | 我該怎麼辦? | 15 | 0 | 8 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102031150106) |
| 115上 | 3 | 南一 | 7 | 最年輕的奶奶 | 15 | 0 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102031150107) |
| 115上 | 3 | 南一 | 8 | 魔「髮」哥哥 | 15 | 0 | 13 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102031150108) |
| 115上 | 3 | 南一 | 9 | 穿白袍的醫生伯伯 | 15 | 0 | 12 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102031150109) |
| 115上 | 3 | 南一 | 10 | 唉呀!誤會大了 | 15 | 0 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102031150110) |
| 115上 | 3 | 南一 | 11 | 石虎的告白 | 15 | 0 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102031150111) |
| 115上 | 3 | 南一 | 12 | 昆蟲的保命妙招 | 15 | 0 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102031150112) |
| 115上 | 3 | 康軒 | 1 | 字的小旅行 | 9 | 0 | 3 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103031150101) |
| 115上 | 3 | 康軒 | 2 | 妙故事點點名 | 14 | 4 | 15 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103031150102) |
| 115上 | 3 | 康軒 | 3 | 繞口令村 | 14 | 1 | 12 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103031150103) |
| 115上 | 3 | 康軒 | 4 | 小丑魚和海葵 | 14 | 3 | 10 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103031150104) |
| 115上 | 3 | 康軒 | 5 | 飛舞的絲帶 | 14 | 6 | 13 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103031150105) |
| 115上 | 3 | 康軒 | 6 | 小女生 | 14 | 3 | 13 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103031150106) |
| 115上 | 3 | 康軒 | 7 | 淡水小鎮 | 14 | 1 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103031150107) |
| 115上 | 3 | 康軒 | 8 | 安平古堡參觀記 | 14 | 5 | 15 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103031150108) |
| 115上 | 3 | 康軒 | 9 | 馬太鞍的巴拉告 | 14 | 2 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103031150109) |
| 115上 | 3 | 康軒 | 10 | 狐狸的故事 | 14 | 4 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103031150110) |
| 115上 | 3 | 康軒 | 11 | 巨人的花園 | 14 | 4 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103031150111) |
| 115上 | 3 | 康軒 | 12 | 模仿貓 | 14 | 6 | 15 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0103031150112) |
| 115上 | 3 | 翰林 | 1 | 時間是什麼 | 15 | 0 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101031150101) |
| 115上 | 3 | 翰林 | 2 | 妙用便利貼 | 15 | 2 | 14 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101031150102) |
| 115上 | 3 | 翰林 | 3 | 提早五分鐘 | 15 | 2 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101031150103) |
| 115上 | 3 | 翰林 | 4 | 水滾了 | 15 | 3 | 10 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101031150104) |
| 115上 | 3 | 翰林 | 5 | 為梨花撐傘用 | 15 | 0 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101031150105) |
| 115上 | 3 | 翰林 | 6 | 小鉛筆大學問 | 14 | 0 | 8 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101031150106) |
| 115上 | 3 | 翰林 | 7 | 風的味道 | 13 | 0 | 8 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101031150107) |
| 115上 | 3 | 翰林 | 8 | 寄居蟹找新家 | 15 | 0 | 6 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101031150108) |
| 115上 | 3 | 翰林 | 9 | 阿塱壹古道 | 15 | 1 | 7 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101031150109) |
| 115上 | 3 | 翰林 | 10 | 秋千上的婚禮 | 15 | 0 | 12 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101031150110) |
| 115上 | 3 | 翰林 | 11 | 一路平安 | 15 | 3 | 11 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101031150111) |
| 115上 | 3 | 翰林 | 12 | 不一樣的團圓 | 14 | 0 | 9 | [課頁](https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101031150112) |

## 最後21詞條定點覆核

本輪確認1詞「石虎」ㄕˊ ㄏㄨˇ，剩20詞條待核。「哪個」兩字均保留空值；跨課合併不會為待核來源借用另一詞的注音。[完整候選音及逐課證據缺口](CHINESE_PRACTICE_PHONETICS_REVIEW.md)。
