# Firebase 自動部署設定

網站畫面繼續由 GitHub Pages 發布；此流程只部署 Firebase Functions 與 Firestore Rules。

## 一次性設定

1. 在 Google Cloud 專案 `learnplanet-cce52` 建立服務帳號，例如 `github-firebase-deploy`。
2. 為它授予部署所需權限：`Firebase Admin`、`Cloud Functions Admin`、`Cloud Run Admin`、`Artifact Registry Writer`、`Service Account User`。
3. 產生一把 JSON 金鑰並下載。金鑰只給 GitHub 使用，不能加入專案檔案或傳到聊天室。
4. 開啟 GitHub 儲存庫的 **Settings → Secrets and variables → Actions → New repository secret**。
5. 名稱填入 `FIREBASE_SERVICE_ACCOUNT_LEARNPLANET`，內容貼上整份 JSON 金鑰後儲存。

完成後，每次推送 `main` 且異動 `functions/`、`firestore.rules` 或 `firebase.json`，GitHub Actions 會自動部署後端。也可以在 GitHub 的 **Actions → Deploy Firebase backend → Run workflow** 手動執行一次。
