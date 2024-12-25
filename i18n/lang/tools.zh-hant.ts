const translation = {
  title: '工具',
  createCustomTool: '創建自定義工具',
  type: {
    all: '全部',
    builtIn: '內置',
    custom: '自定義',
  },
  contribute: {
    line1: '我有興趣爲 ',
    line2: 'Dify 貢獻工具。',
    viewGuide: '查看指南',
  },
  author: '作者',
  auth: {
    unauthorized: '去授權',
    authorized: '已授權',
    setup: '要使用請先授權',
    setupModalTitle: '設置授權',
    setupModalTitleDescription: '配置憑據後，工作區中的所有成員都可以在編排應用程序時使用此工具。',
  },
  includeToolNum: '包含 {{num}} 個工具',
  addTool: '添加工具',
  createTool: {
    title: '創建自定義工具',
    editAction: '編輯',
    editTitle: '編輯自定義工具',
    name: '名稱',
    toolNamePlaceHolder: '輸入工具名稱',
    schema: 'Schema',
    schemaPlaceHolder: '在此處輸入您的 OpenAPI schema',
    viewSchemaSpec: '查看 OpenAPI-Swagger 規範',
    importFromUrl: '從 URL 中導入',
    importFromUrlPlaceHolder: 'https://...',
    urlError: '請輸入有效的 URL',
    examples: '例子',
    exampleOptions: {
      json: '天氣(JSON)',
      yaml: '寵物商店(YAML)',
      blankTemplate: '空白模版',
    },
    availableTools: {
      title: '可用工具',
      name: '名稱',
      description: '描述',
      method: '方法',
      path: '路徑',
      action: '操作',
      test: '測試',
    },
    authMethod: {
      title: '鑑權方法',
      type: '鑑權類型',
      types: {
        none: '無',
        api_key: 'API Key',
      },
      key: '鍵',
      value: '值',
    },
    privacyPolicy: '隱私協議',
    privacyPolicyPlaceholder: '請輸入隱私協議',
  },
  thought: {
    using: '正在使用',
    used: '已使用',
    requestTitle: '請求來自',
    responseTitle: '響應來自',
  },
  setBuiltInTools: {
    info: '信息',
    setting: '設置',
    toolDescription: '工具描述',
    parameters: '參數',
    string: '字符串',
    number: '數字',
    required: '必填',
    infoAndSetting: '信息和設置',
  },
  noCustomTool: {
    title: '沒有自定義工具!',
    content: '在此統一添加和管理你的自定義工具，方便構建應用時使用。',
    createTool: '創建工具',
  },
  noSearchRes: {
    title: '抱歉，沒有結果！',
    content: '我們找不到任何與您的搜索相匹配的工具。',
    reset: '重置搜索',
  },
  builtInPromptTitle: '提示詞',
  toolRemoved: '工具已被移除',
  notAuthorized: '工具未授權',
}

export default translation
