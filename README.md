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

## 簡易表單 JSON 結構概覽

		const JSON = {
		  Guid: 'EB408B6C-A93B-83F6-6ADF-71788B434998',
		  Title: '無標題表單',
		  Description: '',
		  Questions: [
		    {
		      Guid: '81E40FA8-0665-1CB4-2E24-DACB8C689CEF',
		      Title: '單選題',
		      Type: 'radio',
		      Options: [
			{
			  Guid: '7587C005-3F55-D1D8-24BE-0F80DEE69C89',
			  Value: '選項 1',
			  Binding: [],
			  Score: 0,
			},
			{
			  Guid: '8E3C1B9E-84A2-96E2-84F9-03E3BC001D4E',
			  Value: '選項 2',
			  Binding: [],
			  Score: 0,
			},
		      ],
		      Required: false,
		      Answer: [],
		    },
		    {
		      Guid: 'CC33507A-7737-4FE8-D58B-60286E1710FC',
		      Type: 'checkbox',
		      Title: '複選題',
		      Options: [
			{
			  Guid: '740F5A6B-2F1C-F289-7361-09DE207A4F8C',
			  Value: '選項 1',
			  Binding: [],
			  Score: 0,
			},
			{
			  Guid: '6C1530DA-BE11-FDD5-8794-B4774C08995E',
			  Value: '選項 2',
			  Binding: [],
			  Score: 0,
			},
		      ],
		      Required: false,
		      Answer: [],
		    },
		    {
		      Guid: 'A88BA250-E947-6F72-9E9D-E773D9A1C066',
		      Type: 'dropdown',
		      Title: '下拉選單',
		      Options: [
			{
			  Guid: '4307B392-AE7C-2A6A-1E7C-EBC022C104AF',
			  Value: '選項 1',
			  Binding: [],
			  Score: 0,
			},
			{
			  Guid: '8C306D78-76D2-45C5-95D8-3237FC03DD13',
			  Value: '選項 2',
			  Binding: [],
			  Score: 0,
			},
		      ],
		      Required: false,
		      Answer: [],
		    },
		    {
		      Guid: 'F56BBDF1-0B03-E7DB-4EBA-0CD2471AE824',
		      Type: 'literal',
		      Title: '簡答題',
		      Options: [],
		      Required: false,
		      Answer: [],
		    },
		    {
		      Guid: '7511CB9B-F3AC-54BB-410F-CF85BC7E50B9',
		      Type: 'date',
		      Title: '日期題',
		      Options: [],
		      Required: false,
		      Answer: [],
		    },
		    {
		      Guid: 'D3C0151A-3045-4908-E003-D7F6B8367176',
		      Type: 'number',
		      Title: '數字題',
		      Options: [],
		      Required: false,
		      Answer: [],
		    },
		    {
		      Guid: 'ABA69EDD-C7D4-EE6E-BD9F-71DD614BE272',
		      Type: 'email',
		      Title: '信箱題',
		      Options: [],
		      Required: false,
		      Answer: [],
		    },
		    {
		      Guid: '7DFA95A2-4109-DA5C-5380-D1C402D30B3E',
		      Type: 'english',
		      Title: '英文題',
		      Options: [],
		      Required: false,
		      Answer: [],
		    },
		  ],
		  ScoreEnable: false,
		};
