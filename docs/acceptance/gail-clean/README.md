# Gail 去背與英文女聲

所有七本英文繪本改用 gail-paper-clean.png；紅斗篷換裝與封面改用 gail-clean-v2.png；坐姿改用 gail-listening-clean.png。移除舊 paper-girl 多邊形裁切，保留原始圖片。

紅斗篷使用內建 imagegen，提示：去除厚奶油白貼紙外框與背景光暈，保持 Gail 身份、姿勢、服裝、完整鞋子。原始輸出 exec-8503ca0b-5fcf-47e1-92c8-88d4e9b711a3.png；以已授權 isnet-anime 流程去背。其餘姿勢沿用原圖去背。

共用朗讀優先選擇可辨識的英文女聲（例如 Samantha、Karen、Zira、Aria）；Web Speech 無性別欄位，依名稱選擇，無可用女聲時回退英文聲音。保留 0.9 基礎語速。等待首次聲音清單載入，避免一開始直接選到預設聲音。typecheck、建置及三項聲音選擇測試通過。未逐一實機試聽所有作業系統。

本機修改，尚未發布本次更新。
