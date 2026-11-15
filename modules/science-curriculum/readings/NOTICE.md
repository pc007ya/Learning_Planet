# 生活與自然注音來源

- 教育部《重編國語辭典修訂本》：原著者教育部國語推行委員會，發行所中華民國教育部，維護單位國家教育研究院。
- JSON 格式來源：https://github.com/g0v/moedict-data ，下載日期 2026-11-15。
- 原資料：https://raw.githubusercontent.com/g0v/moedict-data/main/dict-revised.json.xz
- 教育部公眾授權：https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/respub/index.html
- 原資料採創用 CC 姓名標示－禁止改作臺灣 3.0；g0v README 說明禁止改作針對本文，不限制格式轉換及後續應用。此處保留發音值，抽取課程使用的詞條，不收錄或改寫釋義。g0v 格式轉換之編輯著作權如有，為 CC0。
- 另使用專案既有已核讀的 `src/chinese-practice/sounds-single*.json` 單音字資料。
- `context.json` 是本專案教學語料的常用讀音及多音語境補充，並非教育部原文的一部分，不宣稱教育部核定。採字典本調，不模擬口語「一／不」變調。

## 驗證界線

覆蓋報告檢查每個漢字都有注音，**不等於每個語境都經教師逐句核讀**。本批完成程式檢查及模型語境檢查，需持續接受教師修訂。陌生漢字無資料時留白，不以拼音或第一候選音補猜。最長詞組優先；修改語料後必須重新執行覆蓋測試。

重建：`python3 scripts/build-science-readings.py /path/to/original/dict-revised.json`。原始資料 SHA256 記於 lexicon.json。
