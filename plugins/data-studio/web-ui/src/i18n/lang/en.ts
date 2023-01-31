export default {
  common: {
    error: 'error',
    loadData: 'Loading data, please wait...',
    sorry: 'SORRY',
    noPermissionPage: 'You do not have permission to access the page',
    pageNotFound: 'Page Not Found',
    checkURL:
      'Please check whether the URL you entered is correct, or click the button below to return to the home page.',
    backHome: 'Back to Home',
    confirm: 'If you confirm',
    if: '？',
    colon: ':',
  },
  utils: {
    colorError: 'Wrong {name} color value',
  },
  week: {
    Sunday: 'Sun',
    Monday: 'Mon',
    Tuesday: 'Tue',
    Wednesday: 'Web',
    Thursday: 'Thu',
    Friday: 'Fri',
    Saturday: 'Sat',
  },
  siderbar: {},
  database: {
    list: 'Database List',
    placeholder: 'Please enter the filter database object',
    regular_table: 'regular table',
    function_process: 'function/process',
    view: 'view',
    synonym: 'synonym',
    sequence: 'sequence',
  },
  connection: {
    name: 'connection name',
    new: 'new connection',
    edit: 'edit connection',
    props: 'connection props',
    info: 'infomation',
    refresh: 'refresh',
    version: 'version',
    database: 'database',
    databaseType: 'database type',
    databaseType_holder: 'Please select a database type',
    host: 'host',
    port: 'port',
    username: 'username',
    password: 'password',
    maximum: 'Maximum',
    attribute: 'attribute',
    value: 'value',
    attribute_table: {
      name: 'connection name',
      host: 'host',
      port: 'port',
      username: 'username',
      ip: 'database IP',
      type: 'database Type',
      version: 'version',
    },
    rules: {
      common: ['The length cannot exceed {count} characters'],
      name: ['@:connection.name is required'],
      ip: ['@:connection.host is required'],
      port: ['@:connection.port is required', 'The value does not conform to the port range'],
      dataName: ['@:connection.database is required'],
      username: ['@:connection.username is required'],
      password: ['@:connection.password is required'],
    },
    success: {
      create: 'Connection succeeded',
      edit: 'Modification succeeded',
    },
  },
  create: {
    function: 'create function',
    process: 'create process',
    sql: 'create sql',
    view: 'create view',
    synonym: 'create synonym',
    sequence: 'create sequence',
    terminal: 'create terminal',
  },
  delete: {
    functionSP: 'delete function/process',
    view: 'delete view',
    synonym: 'delete synonym',
    sequence: 'delete sequence',
  },
  windows: {
    list: 'windows',
    placeholder: 'Please enter a window name',
    refresh: 'refresh tab',
    closeCurrentTab: 'close current tab',
    closeOtherTab: 'close other tabs',
    closeAllTab: 'close all tabs',
    home: 'Operation/Display',
  },
  functionBar: {
    execute: 'compile / execute',
    stop: 'stop',
    clear: 'clear',
    startDebug: 'startDebug',
    stopDebug: 'stopDebug',
    breakPointStep: 'breakPointStep',
    singleStep: 'singleStep',
    format: 'format',
  },
  resultTab: {
    message: 'Message',
    result: 'Result',
    closeCurrentTab: 'close current tab',
    closeOtherTab: 'close other tabs',
    closeAllTab: 'close all tabs',
  },
  button: {
    confirm: 'confirm',
    clear: 'clear',
    reset: 'reset',
    cancel: 'cancel',
    enabled: 'enabled',
    disabled: 'disabled',
    status: 'Status',
  },
  paramsDialog: {
    title: 'Function execution input parameter',
    column: {
      no: 'No',
      parameterName: 'ParameterName',
      dataType: 'DataType',
      value: 'Value',
    },
  },
  debugPane: {
    callStack: 'CallStack',
    callHierarchy: 'CallHierarchy',
    function: 'Function',
    currentLineNumber: 'CurrentLineNumber',
    breakpoint: 'BreakPoint',
    lineNumber: 'LineNumber',
    sentence: 'Sentence',
    variable: 'Variable',
    value: 'value',
    dataType: 'DataType',
  },
  table: {
    column: {
      title: 'Column',
      columnName: 'ColumnName',
      dataType: 'DataType',
      canBeNull: 'CanBeNull',
      remark: 'Remark',
    },
    constraint: {
      title: 'Constraint',
      columnName: 'ColumnName',
      constrainColumn: 'ConstrainColumn',
      constrainType: 'ConstrainType',
      expression: 'Expression',
      whetherToDelay: 'WhetherDelay',
      pattern: 'Pattern',
      tablespace: 'Tablespace',
    },
    indexes: {
      title: 'Indexes',
      indexName: 'IndexName',
      indexColumn: 'IndexColumn',
      isUnique: 'IsUnique',
      expression: 'Expression',
      tablespace: 'Tablespace',
    },
    data: {
      title: 'Data',
    },
  },
  view: {
    base: 'base',
    preview: 'SQL preview',
    name: 'name',
    type: 'type',
    view: 'view',
    materializedView: 'materialized view',
    objectMode: 'objectMode',
    code: 'code',
    rules: {
      name: ['@:view.name is required'],
      type: ['@:view.type is required'],
      mode: ['@:view.objectMode is required'],
      code: ['@:view.code is required'],
    },
  },
  sequence: {
    base: 'base',
    preview: 'SQL preview',
    name: 'name',
    increment: 'increment',
    startValue: 'start value',
    minValue: 'min value',
    maxValue: 'max value',
    cacheValue: 'cache value',
    cycle: 'cycle',
    belongObject: 'belong object',
    mode: 'mode',
    table: 'table',
    column: 'column',
    rules: {
      name: ['@:sequence.name is required'],
      increment: ['@:sequence.increment must be integer'],
      startValue: ['@:sequence.startValue must be integer'],
      minValue: ['@:sequence.minValue must be integer'],
      maxValue: ['@:sequence.maxValue must be integer'],
      cacheValue: ['@:sequence.cacheValue must be integer'],
    },
  },
  synonym: {
    base: 'base',
    preview: 'SQL preview',
    name: 'name',
    objectOwner: 'object owner',
    objectType: 'object type',
    objectName: 'object name',
    rplaceExistingSynonyms: 'replace existing synonyms',
    rules: {
      name: ['@:synonym.name is required'],
      objectOwner: ['@:synonym.objectOwner is required'],
      objectType: ['@:synonym.objectType is required'],
      objectName: ['@:synonym.objectName is required'],
    },
    attribute: {
      serialNo: 'Serial No',
      attr: 'Attribute',
    },
  },
  success: 'success',
};
