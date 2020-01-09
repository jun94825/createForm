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

  - 參數只接受**物件型別**
  - 此模式只提供**分數、題目與選項文字的修改以及切換計分模式**的功能
