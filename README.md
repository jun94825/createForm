## 使用

為了產出 createForm.js 的壓縮檔，所以此專案使用到了 webpack 與 babel。

不過對於 HERO 而言，必要的檔案只有以下幾支：

- index.html
- createForm.css
- createForm.bundle.js
- icons ( Folder )

## 接口

以下 API 皆為全域範疇，一般情況下應可正常使用。

- 取得當前表單的 JSON 結構：

		jun.getCreateFormJS();

- 開啟編輯模式：

		jun.openEditMode(obj);

  - 參數只接受**物件**型別。
  - 此模式只提供**分數、題目與選項文字的修改以及切換計分模式**的功能。
  
- 檢查編輯區是否有題目尚未編輯完成：

		jun.checkEditArea(mode);
		
  - 需要一個表明當前模式的參數，只接受 'create' 與 'edit'。
  - 若編輯區存在仍在編輯中的題目則回傳 false 以及一段 console.error 的提示字串，相反則回傳 true 。

## 編輯區功能導覽

![image](https://github.com/jun94825/createForm/blob/master/%E8%A1%A8%E5%96%AE%E7%B7%A8%E8%BC%AF%E5%8D%80%E5%9C%96.png)

1. 題目標題
2. 題目選項
3. 題目類型
4. 新增當前編輯之題目至上方表單內
5. 複製當前表單的 Guid
6. 刪除當前編輯之題目
7. 選擇當前題目是否為必填
8. 選擇整份表單是否為計分模式

## 基礎 JSON 結構

![image](https://github.com/jun94825/createForm/blob/master/%E5%9F%BA%E7%A4%8E%20JSON%20%E7%B5%90%E6%A7%8B%E5%9C%96.png)
