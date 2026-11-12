# 生活／自然候選版：遠端 CI 路徑

本機候選尚未發布，未建立PR、觸發遠端CI、合併或部署。本機檢查與遠端Actions必須分開報告，最後受測commit以交付manifest為準。

## 已核實的來源

2026-11-12再次以GitHub唯讀查詢確認 `main` 仍為 `3a457f1b4d1eeeb3d7671cfbf6627b079bada8de`，候選分支 `codex/science-living-curriculum-v2-20261112` 尚不存在。Repository `pc007ya/Learning_Planet` 為公開專案，推送候選分支也會公開其中的程式及已追蹤素材。

- [main](https://github.com/pc007ya/Learning_Planet/tree/main)
- [基準commit](https://github.com/pc007ya/Learning_Planet/commit/3a457f1b4d1eeeb3d7671cfbf6627b079bada8de)
- [既有workflow](https://github.com/pc007ya/Learning_Planet/tree/main/.github/workflows)

本機 `origin` 指向另一個本機checkout，不能將 `git push origin` 誤當GitHub發布。

## 目前已知觸發規則

- Pages與Firebase Hosting：`main` push或手動 `workflow_dispatch` 可部署。
- Firebase backend：符合路徑的 `main` push或手動執行可部署。
- 既有experiment檢查只接受其指定feature branch，或符合路徑的PR。
- 已讀取的四個既有workflow沒有 `workflow_run` 等測試完成轉部署listener；候選branch push不符合它們的部署push規則。
- 本候選只增加hosting打包排除項目，沒有改動上述部署trigger、permissions、認證或部署步驟。

不得推送main來試跑，也不得手動執行既有部署workflow充當測試。外部App／webhook與Pages來源管理設定未取得驗證，這是未核實的限制，不能據此聲稱已發現額外部署，也不能保證所有外部服務都不會有動作。

## 專用測試workflow

`.github/workflows/science-curriculum-check.yml` 僅接受精確候選branch的push，沒有手動部署入口。Job同時核對event、repository、完整ref與觸發commit。

- `contents: read`，不保留checkout憑證。
- 官方checkout v4.2.2、setup-node v4.4.0固定完整commit SHA。
- GitHub-hosted runner、Node22；乾淨 `npm ci` 後跑完整 `npm run check`，含生活自然題庫與自然地圖檢查。
- 沒有secrets、部署environment、OIDC、Pages／artifact上傳、共用cache或deploy指令。
- 20分鐘timeout，concurrency只屬於此候選工作。

本機YAML／事件條件／shell guard檢查與程式回歸不能代替GitHub實際parser和job結果。最終本機檢查結果見[候選驗收摘要](acceptance.md)。

## 最新發布要求與審查界線

使用者已要求修改完成後部署，並以真實頁面驗收及量測資源時間。最終檢查完成後，應按既有專案發布路徑繼續；部署指示不能當作已成功推送或已通過權限審查。

先前公開候選推送曾被拒絕，確定未執行。本次新部署指示是新的相關授權證據；只可針對該具體公開推送重新審查一次，若仍被拒絕即停止，回報需要的明確目的地授權，不換管道繞過。

1. 重新唯讀核對 main、候選 ref 和 workflow，不覆寫他人更新。
2. 核對待推 commit 的完整測試與檔案清單，不含私人原始 QA、帳戶資料或非交付檔案。
3. 先推通過審查的 commit 至精確候選 ref，核對遠端 SHA 與相同 SHA 的實際 CI。
4. 所有必要檢查通過後，依使用者的部署指示與既有受保護發布規則執行。若需要額外目的地授權或系統阻擋，停止該動作。
5. 正式發布後核對網站實際版本、登入／練習／地圖、舊資料保護和冷／熱讀取證據。GPU 或音訊環境不足時明示未驗證，不能以 CPU 或模擬測試代替。

截至此文件更新，尚未公開推送、建立 PR、跑遠端 CI 或部署。CI 通過也不等於 GPU／中文語音／教師與兒童驗收完成。
