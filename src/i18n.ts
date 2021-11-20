import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      NewProject: 'New Project',
      ProjectDesc: 'Project Description',
      NewMultiProject: 'New Multiple Project',
      QAStep: 'Quality Inspection - Step {{step}}',
      Confirm: 'Confirm',
      NoData: 'No Data',
      TaskSteps: 'Task Steps',
      AddTaskStepsNotify: 'Please add task steps',
      New: 'New',
      SelectDataSourceNotify: 'Please select the data source',
      SelectToolNotify: 'Please select an annotation tool',
      DataSource: 'Data Source',
      OriginalImage: 'Original Image',
      AnnotationTool: 'Annotation Tool',
      Save: 'Save',
      ProjectName: 'Project Name',
      Required: 'Required˝',
      SelectImageFolder: 'Image Path',
      InputProjectName: 'Please Input Project Name',
      SelectResultFolder: 'Result Path',
      SelectResultFolderNotify: 'Result files will overwrite path files',
      UpperLimitPoints: 'Upper Limit Points',
      TextAnnotation: 'Text',
      AttributeAnnotation: 'Attribute',
      Straight: 'Straight',
      Curve: 'Curve',
      LineType: 'Line Type',
      ClosedPoints: 'Closed Points',
      PointsLimit: 'Points Limit',
      EdgeAdsorption: 'Edge Adsorption',
      PointsZeroLimitNotify: 'The number of points need greater than 0',
      PointLowLimitNotify: 'The minimum number of points must not be less than {{num}}',
      LowLimitMustGreaterThanUpNotify:
        'The upper limit of points must be greater than or equal to the lower limit',
      LowerLimitPoints: 'Lower Limit Points',
      SmallestSize: 'Smallest Size',
      ConfigurationFormatErrorNotify: 'Configuration format error',
      Form: 'Form',
      Type: 'Type',
      InputReg:
        'Please enter a regular expression (Recommended to contact developer for assistance)',
      TextList: 'Text List',
      Name: 'Name',
      MaximumTextInput: 'Maximum Text Input',
      DefaultTextCharactersLimitNotify:
        'Please enter a  default text no more than ${len} characters',
      Add: 'Add',
      TextSettings: 'Text Settings',
      DisplayValue: 'Display Value',
      SaveValue: 'Save Value',
      MoreSettings: 'More Settings',
      ImagePath: 'Image Path',
      ResultPath: 'Result Path',
      ConfirmToDelete: 'Confirm To Delete',
      OutOfTargetAnnotation: 'Out-Of-Target',
      CopyThePreview: 'Copy The Preview',
      ShowOrder: 'Show Order',
      Detection: 'Detection',
      Classification: 'Classification',
      SemanticSegmentation: 'Segmentation',
      Line: 'Line',
      Text: 'Text',
      Point: 'Point',
      MultiStepAnnotation: 'Multi-Step Annotation',
      NStep: '{{step}}-th Step',
      NStep_one: '{{step}}-st Step',
      NStep_two: '{{step}}-nd Step',
      NStep_three: '{{step}}-rd Step',
      AnyString: 'Any',
      OrderString: 'Order',
      EnglishOnly: 'English Only',
      NumbersOnly: 'Numbers Only',
      CustomFormat: 'Custom Format',
      SelectExportFormat: 'Select export Format',
      ExportFormat: 'Export format',
      StandardFormat: 'label-bee format',
      ExportSuccess: 'Export successfully',
      ExportLimitMsg: 'Only rectTool and polygonTool can realize the conversion of coco data',
      SelectedExportPath: 'Choose export path',
    },
  },
  cn: {
    translation: {
      NewProject: '新建项目',
      ProjectDesc: '项目描述',
      TaskSteps: '任务步骤',
      NewMultiProject: '新建多个项目',
      QAStep: '质检-步骤{{step}}',
      ConfirmToDeleteSteps: '确定删除以下步骤？',
      Confirm: '确定',
      Cancel: '取消',
      NoData: '暂无数据',
      AddTaskStepsNotify: '请添加任务步骤',
      New: '新建',
      SelectDataSourceNotify: '请选择数据源',
      SelectToolNotify: '请选择标注工具',
      DataSource: '数据源',
      OriginalImage: '原图',
      AnnotationTool: '标注工具',
      Save: '保存',
      ProjectName: '项目名称',
      Required: '必填项',
      InputProjectName: '请输入项目名称',
      SelectImageFolder: '选择图片文件夹',
      SelectResultFolder: '选择结果文件夹',
      SelectResultFolderNotify:
        '注意：当前路径将会提取当前文件夹与图片文件夹对应的标注结果文件， 在任务退出之后覆盖当前路径的结果文件，需谨慎设置',
      UpperLimitPoints: '上限点数',
      TextAnnotation: '文本标注',
      AttributeAnnotation: '属性标注',
      StraightLine: '直线',
      CurveLine: '曲线',
      LineType: '线条类型',
      ClosedPoints: '闭合点数',
      PointsLimit: '点数限制',
      EdgeAdsorption: '边缘吸附',
      PointsZeroLimitNotify: '顶点数限制必须为大于0的数字',
      PointLowLimitNotify: '顶点数下限必须不能少于{{num}}',
      LowLimitMustGreaterThanUpNotify: '顶点数上限必须大于等于下限',
      LowerLimitPoints: '顶点数上限必须大于等于下限',
      SmallestSize: '最小尺寸',
      ConfigurationFormatErrorNotify: '配置格式错误',
      Type: '类别',
      Form: '表单',
      Value: '值',
      InputReg: '请输入正则表达式(建议联系开发人员协助)',
      TextList: '文本列表',
      Name: '名称',
      MaximumTextInput: '文本输入上限',
      DefaultText: '文本默认值',
      DefaultTextCharactersLimitNotify: '请输入不超过 {{len}} 个字的文本默认值',
      Add: '添加',
      TextSettings: '文本设置',
      DisplayValue: '显示值',
      SaveValue: '保存值',
      MoreSettings: '更多设置',
      ImagePath: '图片路径',
      ResultPath: '结果路径',
      ConfirmToDelete: '确认删除?',
      OutOfTargetAnnotation: '目标外标注',
      CopyThePreview: '复制上一张结果',
      ShowOrder: '显示标注顺序',
      Detection: '目标检测',
      Classification: '目标分类',
      SemanticSegmentation: '语义分割',
      Line: '划线',
      Text: '文本',
      Point: '标点',
      MultiStepAnnotation: '多步骤标注',
      NStep: '第{{step}}步',
      AnyString: '任意字符',
      OrderString: '序号',
      EnglishOnly: '仅英文',
      NumbersOnly: '仅数字',
      CustomFormat: '自定义格式',
      SelectExportFormat: '选择导出格式',
      StandardFormat: 'label-bee 格式',
      ExportSuccess: '导出成功',
      ExportLimitMsg: '仅限拉框、多边形工具可以实现 coco 数据的转换',
      SelectedExportPath: '选择导出的路径',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'cn', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
