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
		  Guid: '5D2BD660-010B-1077-3769-CB670324621A',
		  Title: '無標題表單',
		  Description: '',
		  Questions: [
		    {
		      Guid: 'E1DF7856-7603-B030-769A-722375630513',
		      Title: '單選題',
		      Type: 'radio',
		      Options: [
			{
			  Guid: '6B73D9FB-892F-F066-BD77-DDFA8CE5B083',
			  Value: '選項 1',
			  Binding: [],
			  OptionScore: 0,
			},
		      ],
		      Required: false,
		      QuestionScore: 0,
		      Answer: [],
		    },
		    {
		      Guid: '12380785-CD06-E15A-FAC5-8B25E9217C16',
		      Type: 'checkbox',
		      Title: '複選題',
		      Options: [
			{
			  Guid: '22B48441-1014-CB19-7118-EED2DB9E2E09',
			  Value: '選項 1',
			  Binding: [],
			  OptionScore: 0,
			},
		      ],
		      Required: false,
		      QuestionScore: 0,
		      Answer: [],
		    },
		    {
		      Guid: '33074517-92E1-0C37-F5CE-26B5B2AAF303',
		      Type: 'dropdown',
		      Title: '下拉選單',
		      Options: [
			{
			  Guid: '685CFA6B-BF66-871C-4BE0-7FD14D898846',
			  Value: '選項 1',
			  Binding: [],
			  OptionScore: 0,
			},
		      ],
		      Required: false,
		      QuestionScore: 0,
		      Answer: [],
		    },
		    {
		      Guid: '3D949F51-8751-1F76-C329-FEF4E9636810',
		      Type: 'literal',
		      Title: '簡答題',
		      Options: [],
		      Required: false,
		      QuestionScore: 0,
		      Answer: [],
		    },
		    {
		      Guid: 'B468C0F9-F3A1-B07E-F7EB-C4ACB25C01B1',
		      Type: 'date',
		      Title: '日期題',
		      Options: [],
		      Required: false,
		      QuestionScore: 0,
		      Answer: [],
		    },
		    {
		      Guid: '419E5A48-EB28-B52F-4B2E-14D527E923E4',
		      Type: 'number',
		      Title: '數字題',
		      Options: [],
		      Required: false,
		      QuestionScore: 0,
		      Answer: [],
		    },
		    {
		      Guid: 'BB74961D-1FAD-30D1-BD0C-92425CE5DF91',
		      Type: 'email',
		      Title: '信箱題',
		      Options: [],
		      Required: false,
		      QuestionScore: 0,
		      Answer: [],
		    },
		    {
		      Guid: '86494655-1882-BB94-4080-C43A5A8C70A1',
		      Type: 'english',
		      Title: '英文題',
		      Options: [],
		      Required: false,
		      QuestionScore: 0,
		      Answer: [],
		    },
		  ],
		  ScoreMode: false,
		};
