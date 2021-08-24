(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/add_vehicle/add_vehicle"],{

/***/ 332:
/*!************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/components/xfl-select/xfl-select.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xfl-select.vue?vue&type=template&id=64567a38&scoped=true& */ 333);
/* harmony import */ var _xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xfl-select.vue?vue&type=script&lang=js& */ 335);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xfl-select.vue?vue&type=style&index=0&id=64567a38&scoped=true&lang=scss& */ 337);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64567a38",
  null,
  false,
  _xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/xfl-select/xfl-select.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 333:
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/components/xfl-select/xfl-select.vue?vue&type=template&id=64567a38&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./xfl-select.vue?vue&type=template&id=64567a38&scoped=true& */ 334);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 334:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Documents/HBuilderProjects/shipping/components/xfl-select/xfl-select.vue?vue&type=template&id=64567a38&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 335:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/components/xfl-select/xfl-select.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./xfl-select.vue?vue&type=script&lang=js& */ 336);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 336:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Documents/HBuilderProjects/shipping/components/xfl-select/xfl-select.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

























































var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}
_vue.default.__xfl_select = _vue.default.__xfl_select || new _vue.default(); // 这个实例专门用来做xfl-select多个实例之间的通信中间站
var _default2 = {
  name: 'xfl-select',
  props: {
    list: { // 原始数据
      type: Array,
      default: function _default() {
        return [];
      } },

    list2: { // 原始数据
      type: Array,
      default: function _default() {
        return [];
      } },

    focusShowList: null, // 当input获取焦点时，是否自动弹出列表框
    initValue: null, // 选择框的初始值
    isCanInput: { // 选择框是否可以输入值
      type: Boolean,
      default: false },

    selectHideType: { // 本选择框与其它选择框之间的关系
      type: String,
      default: 'hideAll' // 'independent' - 是独立的，与其它选择框互不影响  'hideAll' - 任何一个选择框展开时，隐藏所有其它选择框
      // 'hideOthers'- 当本选择框展开时，隐藏其它的选择框。  当其它选择框展开时，不隐藏本选择框。 
      // 'hideSelf' -  当本选择框展开时，不隐藏其它的选择框。当其它选择框展开时，隐藏本选择框。
    },
    placeholder: { // 选择框的placeholder
      type: String,
      default: '请选择' },

    style_Container: { // 最外层的样式
      type: String,
      default: '' },

    disabled: { // 是否禁用整个选择框
      type: Boolean,
      default: false },

    showItemNum: { // 显示列表框的窗口高度，数字表示能显示几个列表项
      type: Number,
      default: 5 },

    listShow: { // 是否显示列表框
      type: Boolean,
      default: false },

    clearable: { // 是否显示右侧的清除按钮
      type: Boolean,
      default: true } },


  data: function data() {
    return {
      isShowList: false, // 是否显示列表框
      selectText: '', // 已经选择的内容
      activeIndex: -1, // 列表中当前活动的索引号
      isRotate: false, // 右侧的小三角是否旋转
      listTop__: 50 // 列表框的top位置，在初始时，根据input节点的高度来调整
    };
  },
  // 进行监听的话，在组件外改变这个值，组件内就能响应变化
  watch: { // 监听变化 ，注意，初始的值是不会被监听到的，只有在mounted回调中手动赋值
    listShow: function listShow(newVal, oldVal) {
      this.onDataChange_listShow(newVal, oldVal);
    } },

  computed: {
    focusShowList__: function focusShowList__() {// 是否在输入框获得焦点时，自动弹出列表框
      if (this.focusShowList == null) {
        // 应该是判断在 pc端还是移动端




        return false;

      } else {
        return this.focusShowList;
      }
    },
    listBoxHeight__: function listBoxHeight__() {// 列表框的总高度
      var itemHeight = 2; // 每个列表项的高度(em), 默认为2个文字高
      return this.showItemNum * itemHeight;
    },
    showInput: function showInput() {// 是否显示输入框
      return this.isCanInput && !this.disabled;
    },
    innerList: function innerList() {// 转换列表的数据格式
      var arr = [],orginArr = this.list;
      orginArr.forEach(function (val, index) {
        var value = typeof val === 'object' && 'value' in val ? val.value : val;
        var isDisabled = typeof val === 'object' && val.disabled == true;
        arr.push({
          isActive: false,
          value: value,
          disabled: isDisabled });

      });
      return arr;
    } },

  mounted: function mounted() {
    _vue.default.__xfl_select.$on('open', this.onOtherXflSelectOpen);
    this.switchMgr = new Switch(this.onListShow, this.onListHide); // 创建开关对象
    this.onDataChange_listShow(this.listShow, null); // 由于 watch 不到初始值，所以需要在这里手动调用一次
    this.init(); //进行初始化
  },
  beforeDestroy: function beforeDestroy() {
    _vue.default.__xfl_select.$off('open', this.onOtherXflSelectOpen);
  },
  methods: {
    onOtherXflSelectOpen: function onOtherXflSelectOpen(component) {//当本组件的其它实例展开时的回调
      if (this.selectHideType === 'independent' || this.selectHideType === 'hideOthers') {
        return;
      }
      component !== this && this.switchMgr.close(100);
    },
    /************************** 初始化函数 ****************************/
    //进行初始化
    init: function init() {
      this.clearInput(); // 清空输入框中的显示，主要是设置placeholder
      this.setInput(this.initValue); // 在输入框中显示初始值
      this.changeActiveIndex(this.initValue); // 根据初始值设置列表框中的活动项
      this.getInputBoxHeight(); // 初始化列表框的top值
    },

    // 获取输入框的总高度 px
    getInputBoxHeight: function getInputBoxHeight() {var _this = this;
      var component = this;



      getNodeInfo('.show-box', component, function (data) {
        if (data) {
          var trangleHeight = 6; //列表框左上角的小的空心三角形的高度(px)
          _this.listTop__ = data[0].height + trangleHeight;
        }
      });
    },
    /************************** 初始化函数 ****************************/

    /************************** 数据 ****************************/
    getIndex: function getIndex(value) {// 将值转换为索引
      var activeIndex = searchIndex(
      this.innerList, value, 'value');
      return activeIndex; // 转换失败，则返回-1
    },
    itemIsDisabled: function itemIsDisabled(index) {// 某个列表项是否已经被禁用了
      return this.innerList[index].disabled;
    },

    itemIsActive: function itemIsActive(index) {// 某个列表项是否是被选中的(活动的)
      return index === this.activeIndex;
    },

    // listShow 这个字段的值变化时的回调
    onDataChange_listShow: function onDataChange_listShow() {var newVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;var oldVal = arguments.length > 1 ? arguments[1] : undefined;
      newVal ? this.switchMgr.open() : this.switchMgr.close(100);
    },
    /************************** 数据 ****************************/


    /************************** “输入框”的操作 ****************************/
    // 输入框获得焦点时
    onFocus: function onFocus(event) {
      this.focusShowList__ && this.switchMgr.open();
      this.$emit('focus', event);
    },

    // 输入框失去焦点时
    onBlur: function onBlur(event) {
      // 失去焦点时隐藏，在电脑上很好，但在移动端体验不好，因为会弹出数字键盘，然后隐藏键盘时会失去焦点
      this.focusShowList__ && this.switchMgr.close(100);
      this.$emit('blur', event);
    },

    //当显示的不是输入框时，上面的点击事件
    onUpperClick: function onUpperClick() {
      if (this.disabled) {
        return;
      }
      this.switchMgr.toggle('auto', -1, 100);
      this.$emit('input-click');
    },

    //清空已经选择的内容
    onClear: function onClear() {
      this.clearItemActive(); // 清空列表框中的所有活动项
      this.clearInput(); // 清空输入框中的显示
      this.$emit('clear');
    },

    // 输入框的值变化时
    onInput: function onInput(event) {
      var inputVal = event.detail.value;
      this.changeActiveIndex(inputVal);
      this.$emit('input', event);
    },

    // 清空input中显示的内容
    clearInput: function clearInput() {var placeholder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.placeholder = placeholder == null ? this.placeholder : placeholder;
      this.selectText = this.showInput ? '' : this.placeholder;
    },
    // 设置input中显示的内容
    setInput: function setInput() {var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (text == null) {
        return;
      }
      this.selectText = text;
    },
    /************************** “输入框”的操作 ****************************/


    /************************** 列表的操作(显示/隐藏/点击) ****************************/

    /**
                                                                               * 传入数字表示索引，其它值表示value, 会自动去搜索对应的索引
                                                                               * 注意： 
                                                                               * 1. 如果没有找到对应的索引，则什么也不会做  
                                                                               * 2. 如果找到了，只会把对应项设置为活动的，并不会清除其它的活动项  
                                                                               */
    changeActiveIndex: function changeActiveIndex(value_index) {//改变列表中的活动项
      if (value_index == null) {
        return;
      }
      var activeIndex = value_index,value = value_index;
      if (typeof value_index !== 'number') {//认为是值，否则就是索引
        activeIndex = this.getIndex(value); // 搜索对应的值所在的索引
      } else {
        value = this.innerList[activeIndex].value;
      }
      if (activeIndex > -1) {
        !this.itemIsActive(activeIndex) && this.setItemActive(activeIndex, value);
      } else {
        this.clearItemActive();
      }
      this.setInput(value); // 更改输入框的值
    },

    clearItemActive: function clearItemActive() {var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1; // 设置为不选中
      if (index < 0) {// 清空全部
        this.activeIndex = -1;
      }
    },
    setItemActive: function setItemActive(index, value) {//选中某一项，必须传入索引和对应的值
      if (this.itemIsDisabled(index)) {
        return;
      }
      this.activeIndex = index;
    },

    // 整个列表框上的点击事件
    onListClick: function onListClick() {

    },
    onClickItem: function onClickItem(index, value) {// 列表项上的点击事件
      if (this.itemIsDisabled(index)) {
        this.switchMgr.open(); // 点在禁用项上，就不隐藏
        return;
      }
      this.switchMgr.close(100); // 开始隐藏，因为会延迟隐藏，所以可以写在这里
      if (this.disabled) {//如果本项被禁用 或 整个列表框被禁用
        return;
      }
      if (!this.itemIsActive(index)) {//如果点在非选中项上
        this.clearItemActive(); // 清空其它的选中的列表项
        this.setItemActive(index, value); // 将这一项设置为选中项
        this.$emit('change', { newVal: value, oldVal: this.selectText,
          index: index, orignItem: this.list[index] });

        this.setInput(value); // 更改输入框的值
      }
    },
    onListHide: function onListHide() {//列表隐藏时的回调
      this.isRotate = false;
      this.isShowList = false;
      this.$emit('visible-change', false);
    },
    onListShow: function onListShow() {//列表显示时的回调
      this.isShowList = true;
      this.isRotate = true;
      this.$emit('visible-change', true);

      if (this.selectHideType === 'independent' || this.selectHideType === 'hideSelf') {
        return;
      }
      _vue.default.__xfl_select.$emit('open', this);
    }
    /************************** 列表的操作(显示/隐藏/点击) ****************************/ } };



/************************** uniapp libs ****************************/

/**
                                                                       * 是否是web的移动端
                                                                       * @public
                                                                       * @returns {boolean} true表示当前环境是web，并且是移动端，false表示非web或是pc端
                                                                       */exports.default = _default2;
function isMobile() {
  try {// 可能不存在window对象
    var reg = /iPhone|iPad|iPod|iOS|Android|SymbianOS|Windows Phone|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince/i;
    return reg.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}
/**
   * 是否是web的pc端
   * @public
   * @returns {boolean} true表示当前环境是web，并且是pc端，false表示非web或是移动端
   */
function isPC() {
  try {// 可能不存在window对象
    var reg = /iPhone|iPad|iPod|iOS|Android|SymbianOS|Windows Phone|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince/i;
    return !reg.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}
/**
   * 获取指定元素的样式
   * 注意:  
   * 1. 必须在使用这个函数的文件中 导入 import Vue from 'vue'  
   * 2. 自定义组件编译模式（默认模式）时, 必须传入component参数。(h5中测试时不管传不传都能正常获取，但wx中必须传入才行)
   * @public
   * @param {Object|string} options - 配置对象，如果传入一个字符串，则识别为selector
   *                         selector - dom元素的选择器，仅支持以下选择器: 
   * 							1. ID选择器：'#the-id'
  							2. class选择器（可以连续指定多个）：'.a-class.another-class'
  							3. 子元素选择器：'.the-parent > .the-child'
  							4. 后代选择器：'.the-ancestor .the-descendant'
  							5. 跨自定义组件的后代选择器：'.the-ancestor >>> .the-descendant'
  							6. 多选择器的并集：'#a-node, .some-other-nodes'
  							7. 传入 'viewport' 表示获取视口对象，有点类似于选中window。
   * @param {function|component} [callback=null] - 如果传入一个函数，则识别为获取到样式后的回调，也可以传入一个组件, 
              回调的第一个参数如下:   
  			// 获取信息成功时，是对象数组,  
  			// 对象根据options的配置而有不同的字段  
  			{  
  				id: '',         // String 节点的 ID, 经测试，这个id并不一定正确(特别是选中多个节点时)  
  				dataset: null,  // Object 节点的 dataset  
  				left: 0,        // Number 节点的包围盒的左边界坐标(px)(page元素的左上角为坐标原点)  
  				right: 0,       // Number 节点的包围盒的右边界坐标(px)  
  				top: 0,         // Number 节点的包围盒的上边界坐标(px)  
  				bottom: 0,      // Number 节点的包围盒的下边界坐标(px)  
  				width: 0,       // Number 节点的宽度(px)  
  				height: 0,      // Number 节点的高度(px)  
  				scrollLeft: 0,  // Number 节点的水平滚动位置(px)  
  				scrollTop: 0,   // Number 节点的竖直滚动位置(px)  
  				context: {} || null,   // Object节点对应的Context对象(如VideoContext、CanvasContext、和MapContext)  
  				...        // properties 数组中指定的属性值和computedStyle数组中指定的样式值  
  			}  
  			// 当获取信息失败，则为null  
   * @param {any} [thisObj=null] 回调中的this, 可能位于第三个参数或第四个参数。
   * @return {undefined|promise} 当没有callback时，则返回promise，否则返回undefined  
   * @example
   * 1. 传入选择器，返回promise
   * getNodeInfo('#aa').then((data)=>{ console.log(data);});
   * 
   * 2. 传入选择器和component, 返回promise
   * getNodeInfo('#aa', this).then((data)=>{ console.log(data);});
   * 
   * 3. 传入选择器和callback, 返回undefined
   * getNodeInfo('#aa', (data)=>{ console.log(data);});
   * 
   * 4. 传入配置对象和callback, 返回undefined
   * getNodeInfo({selector: '#aa', component: this}, (data)=>{ console.log(data);});
   */
function getNodeInfo()

















{var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$selector = _ref.selector,selector = _ref$selector === void 0 ? 'selector' : _ref$selector,_ref$component = _ref.component,component = _ref$component === void 0 ? null : _ref$component,_ref$attemptSpaceTime = _ref.attemptSpaceTime,attemptSpaceTime = _ref$attemptSpaceTime === void 0 ? 16 : _ref$attemptSpaceTime,_ref$attemptSpaceRate = _ref.attemptSpaceRate,attemptSpaceRate = _ref$attemptSpaceRate === void 0 ? 1.5 : _ref$attemptSpaceRate,_ref$totalAttemptNum = _ref.totalAttemptNum,totalAttemptNum = _ref$totalAttemptNum === void 0 ? 8 : _ref$totalAttemptNum,_ref$id = _ref.id,id = _ref$id === void 0 ? true : _ref$id,_ref$dataset = _ref.dataset,dataset = _ref$dataset === void 0 ? true : _ref$dataset,_ref$rect = _ref.rect,rect = _ref$rect === void 0 ? true : _ref$rect,_ref$size = _ref.size,size = _ref$size === void 0 ? true : _ref$size,_ref$scrollOffset = _ref.scrollOffset,scrollOffset = _ref$scrollOffset === void 0 ? true : _ref$scrollOffset,_ref$properties = _ref.properties,properties = _ref$properties === void 0 ? [] : _ref$properties,_ref$computedStyle = _ref.computedStyle,computedStyle = _ref$computedStyle === void 0 ? [] : _ref$computedStyle,_ref$context = _ref.context,context = _ref$context === void 0 ? true : _ref$context;var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // arguments 始终会记录最原始的传进来的参数，而不管这些默认值会怎么转换
  // 因为传入一个对象或非字符串会报错，强制转换为字符串
  var args = arguments;
  selector = typeof args[0] === 'string' ? args[0] : String(selector);
  if (typeof args[1] !== 'function') {
    component = args[1];callback = args[2];thisObj = args[3];
  }
  !component instanceof _vue.default && (component = null); //传入非组件对象，会报错

  // 不能把 component 字符添加到这个对象上，否则在wx中会报循环引用的错误
  var options = { selector: selector, attemptSpaceTime: attemptSpaceTime, totalAttemptNum: totalAttemptNum, attemptSpaceRate: attemptSpaceRate,
    id: id, dataset: dataset, rect: rect, size: size, scrollOffset: scrollOffset, properties: properties, computedStyle: computedStyle, context: context };

  var selectorQuery = uni.createSelectorQuery();
  component && selectorQuery.in(component);
  var nodesRef = selector === 'viewport' ? selectorQuery.selectViewport() : selectorQuery.selectAll(selector);
  nodesRef.fields(options); // 注意，只注册了这一个命令

  var result; // 必须把创建promise的代码放在前面，否则在h5端会出现exec先执行完成的情况
  if (typeof callback !== 'function') {
    result = new Promise(function (resolve) {return callback = resolve;});
  }
  stepRunFunc(function (next, currNum) {
    selectorQuery.exec(function (_ref2) {var _ref3 = _slicedToArray(_ref2, 1),data = _ref3[0]; // 开始查询页面中的节点
      data && data.length === 0 && (data = null);
      data || totalAttemptNum <= currNum ? typeof callback === 'function' && callback.call(thisObj, data) : next(attemptSpaceTime);
      attemptSpaceTime = Math.round(attemptSpaceTime * attemptSpaceRate);
    });
  })(); // 立即执行一次

  return result;
}
/************************** uniapp libs ****************************/

/************************** js libs ****************************/
/**
                                                                   * 开关类，管理两个状态的切换
                                                                   * 特点是: 状态的切换可能是延迟进行的。
                                                                   * @class
                                                                   */var
Switch = /*#__PURE__*/function () {
  function Switch() {var onopen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var onclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;_classCallCheck(this, Switch);
    this.onopen = onopen; // 打开后的回调
    this.onclose = onclose; // 关闭后的回调
    this.isOpen = false; // 初始时状态是关闭的
  }_createClass(Switch, [{ key: "toggle", value: function toggle()
    {var toState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto'; //切换开关的状态
      if (!(toState === 'close' || toState === 'open')) {
        toState = this.isOpen ? 'close' : 'open';
      }
      var delayTime_open, delayTime_close, cancelType_open, cancelType_close;
      for (var i = 0, arg; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
        arg = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
        switch (typeof arg) {
          case 'number':delayTime_open == null ? delayTime_open = arg : delayTime_close = arg;break;
          case 'string':cancelType_open == null ? cancelType_open = arg : cancelType_close = arg;break;}

      }
      var delayTime = toState === 'open' ? delayTime_open : delayTime_close;
      var cancelType = toState === 'open' ? cancelType_open : cancelType_close;
      this.change(toState, delayTime == null ? -1 : delayTime, cancelType == null ? 'both' : cancelType);
    } }, { key: "open", value: function open()
    {var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;var cancelType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both'; // 打开
      this.change('open', delayTime, cancelType);
    } }, { key: "close", value: function close()
    {var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;var cancelType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both'; // 关闭
      this.change('close', delayTime, cancelType);
    } }, { key: "cancel", value: function cancel()
    {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'both'; // 取消定时器
      if (type === 'open') {
        clearTimeout(this.openTimer);this.openTimer = null;
      } else if (type === 'close') {
        clearTimeout(this.closeTimer);this.closeTimer = null;
      } else if (type === 'both') {
        clearTimeout(this.closeTimer);this.closeTimer = null;
        clearTimeout(this.openTimer);this.openTimer = null;
      }
    } }, { key: "change", value: function change(
    toState) {var _this2 = this;var delayTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;var cancelType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'both'; // 改变到指定的状态
      this.cancel(cancelType); // 取消定时器
      if (this.isOpen && toState === 'open' || !this.isOpen && toState === 'close') {
        return;
      }
      var funcName = 'on' + toState;
      if (delayTime < 0) {
        this.isOpen = toState === 'open';
        typeof this[funcName] === 'function' && this[funcName]();
      } else {
        this[toState + 'Timer'] = setTimeout(function () {
          _this2.isOpen = toState === 'open';
          typeof _this2[funcName] === 'function' && _this2[funcName]();
        }, delayTime);
      }
    } }]);return Switch;}();



/**
                              * 从一个数组中进行搜索，返回一个索引, 主要特点是可以深层搜索
                              * 依赖: forEach  props 这两个函数
                              * @public
                              * @param {Array} arr - 要搜索的数组或类数组或普通对象
                              * @param {any} searchVal - 要搜索的值 
                              * @param {string|Array} [propPath=''] - 要搜索的值的路径， 如 'aa.bb.cc' 或 ['aa', 'bb', 'cc']
                              * @param {function} [compareFunc=null] - 比较函数 compareFunc(val, searchVal, arrElem, index, orignArr)
                              *                                        省略时，表示进行全等比较。
                              * @example
                              * 1. 简单的使用
                              * searchIndex([1, 2, 3], 2); // => 1
                              * 
                              * 2. 使用自定义的比较函数
                              * searchIndex([1, 2, 3], '2', '', (val, searchVal)=>val==searchVal); // => 1
                              * 
                              * 3. 指定用值的路径
                              * searchIndex([1, {aa: 3}, {aa: {bb: 3}}, {aa: {bb: 4}], 3, 'aa.bb'); // => 1
                              */
function searchIndex(arr, searchVal) {var propPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';var compareFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var result_index = -1;
  if (propPath) {
    if (typeof propPath === 'string') {
      propPath = propPath.split(/\s*[\,\.]\s*/);
    } else if (!Array.isArray(propPath)) {
      propPath = '';
    }
  }
  forEach(arr, function (val, index, orignArr) {
    if (propPath) {
      val = props(val, propPath);
    }
    if (
    typeof compareFunc === 'function' ?
    compareFunc(val, searchVal, arrElem, index, orignArr) :
    val === searchVal)
    {
      result_index = index;
      return false;
    }
  });
  return result_index;
}

/**
   * 遍历数组或类数组或普通对象
   * 跟原生的forEach的差别是: 可以遍历普通对象，也可以中途可以退出。
   * 注意，类数组只会遍历其中的数字属性。
   * @public
   * @param {object|Array} obj - 要遍历的对象
   * @param {function} func - 回调  func.call(thisObj, value, prop, obj);
   * @param {any} [thisObj=null] - 回调中的this
   * @example
   * 1. forEach({a: 3, b: 4}, (val, prop, obj)=>{ // 遍历普通对象
   *     return false; //返回false 表示退出循环
   * });
   * 
   * 2. forEach([3, 4], (val, index, obj)=>{ // 遍历数组
   *     return false; //返回false 表示退出循环
   * });
   * 
   * 3. forEach({1: 3, 5: 10, a: 'aa', length: 20}, (val, index, obj)=>{ // 遍历类数组
   *     return false; //返回false 表示退出循环
   * });
   */
function forEach(obj, func) {var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (obj == null || typeof obj === 'function' || typeof func !== 'function') {
    return obj;
  }

  //对象自身的（不含继承的）所有可遍历（enumerable）属性
  var keys = Object.keys(obj);

  var length = obj.length;
  var isArrayLike = typeof length == 'number' && length > -1 && length % 1 == 0 && length <= 9007199254740991;

  //如果是类数组或数组，只遍历其中的数字属性
  if (isArrayLike) {
    var reg = /^(?:0|[1-9]\d*)$/,
    maxNum = 9007199254740991,
    numPropArr = [];
    for (var i = 0, val; i < keys.length; i++) {
      val = keys[i];
      if (reg.test(val) && +val <= maxNum) {
        numPropArr.push(val);
      }
    }
    keys = numPropArr;
  }

  // 开始遍历所有的数字属性
  for (var _i2 = 0; _i2 < keys.length; _i2++) {
    if (func.call(thisObj, obj[keys[_i2]], keys[_i2], obj) === false) {break;}
  }
  return obj;
}

/**
   * 从一个对象上取指定的属性 或 设置属性的值
   * @public
   * @param {Object} obj - 对象, 当设置时，会更改这个对象
   * @param {Array} propArr - 属性名称的数组，指出要操作的属性的路径
   * @param {any} [val=undefined]   -  要设置的值 省略时表示获取，否则就是设置
   * @param {Boolean} [fource=false]   - 在设置时，如果不存在对应的属性，是否创建
   * @returns {any|undefined} 设置时一定返回undefined, 获取时，返回对应的值，如果不存在则返回undefined
   * @example
   * 1. props({}, ['aa', 'bb', 'cc'], 5);  // => undefined 什么也没做
   * 2. props({}, ['aa', 'bb', 'cc'], 5, true);  // => undefined  在空对象上创建了多层属性 {aa: {bb: {cc: 5} }}
   * 3. props({}, ['aa', 'bb', 'cc']);  // => undefined
   * 4. props({aa: {bb: 77}}, ['aa', 'bb']);  // => 77
   * 5. props({aa: 3}, ['aa', 'bb', 'cc'], 5);  // => undefined 什么也没做
   * 6. props({aa: 3}, ['aa'], 5);  // => undefined  设置了 aa 的值为5
   * 7. props({aa: 3}, [], 5);  // => undefined 什么也没做
   */
function props(obj, propArr) {var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;var fource = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  for (var i = 0, subObj = obj, len = propArr.length, propName; i < len; i++) {
    if (!subObj || typeof subObj !== 'object') {
      return;
    }
    propName = propArr[i];
    if (i === len - 1) {
      if (val === undefined) {
        return subObj[propName];
      } else {
        subObj[propName] = val;
      }
    } else {
      if (!(subObj[propName] && typeof subObj[propName] === 'object')) {
        if (fource && val !== undefined) {
          subObj[propName] = {};
        } else {
          return;
        }
      }
      subObj = subObj[propName];
    }
  }
}


/**
  * 分次执行某个函数
  * 使用场景: 异步执行某个操作，这个操作可能会失败，所以当失败时，需要再尝试几次，直到成功或尝试次数用完
  * @public
  * @param {function} callback - 要执行的函数 callback.call(thisObj, next, currCount, timers)
  * @param {any} [thisObj=null] - callback中的this
  * @returns {function} 返回next函数，next函数可以传入以下两个参数   
  * 					  {any} [delayTime=-1] - 延迟多久(ms)再执行下一次callback回调
  * 											 负数、NaN、Infinite表示立即同步调用，其它值表示延迟执行
  * 					  {string} [type='both'] - 当调用next时，如果其它地方也调用了next并且还没有完成，此时该保留哪次调用
  * 						   				'new' - 保留本次的，清除所有原来的
  * 						   				'old' - 保留所有原来的，舍弃本次的
  * 						   				'both' - 两个都保留
  * @example
  * 1. 最简单的使用
  * stepRunFunc((next, currCount, timers)=>{
  * 		console.log('执行第' + currCount + '次');
  *      currCount <= 2 && next(2000);
  * })();
  * // => 会立即执行第一次，然后2s后再执行第二次
  * 
  * 2. next()函数的第二个参数，是考虑到，用户可能会在短时间内连续调用多次，此时应该怎么处理这些next调用之间的关系
  * stepRunFunc((next, currCount, timers)=>{
  * 		console.log('执行第' + currCount + '次');
  *      if(currCount <= 2 ){
  *          next(3000);
  *          setTimeout(()=>{next(1000, 'old')}, 1000); // 这一次next调用将不起作用
  *      }
  * })();
  * // => 会立即执行第一次，然后3s后再执行第二次
  */
function stepRunFunc(callback) {var thisObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var getDelayTime = function getDelayTime(delayTime) {// 转换delayTime的格式
    delayTime = parseInt(delayTime);
    if (isNaN(delayTime) || !isFinite(delayTime)) {
      delayTime = -1;
    }
    return delayTime;
  };
  var timers = []; // 记录所有正在执行的计时器
  var clearTimer = function clearTimer(oneTimer) {// 清除定时器
    if (oneTimer == null) {
      for (var i = 0; i < timers.length; i++) {
        clearTimeout(timers[i]);
      }
      timers.length = 0;
    } else {
      var index = timers.indexOf(oneTimer);
      if (index > -1) {
        clearTimeout(timers[index]);
        timers.splice(index, 1);
      }
    }
  };
  var currCount = 0; // 记录callback当前已经执行了的次数
  var next = function next() {var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
    if (type === 'new') {// 如果只保留最新的next回调
      clearTimer();
    } else if (type === 'old' && timers.length > 0) {// 保留以前的next回调，忽略本次next回调
      return;
    }
    delayTime = getDelayTime(delayTime);
    if (delayTime < 0) {
      callback.call(thisObj, next, ++currCount, timers);
    } else {
      var oneTimer = setTimeout(function () {
        clearTimer(oneTimer);
        callback.call(thisObj, next, ++currCount, timers);
      }, delayTime);
      timers.push(oneTimer);
    }
  };
  return next;
}
/************************** js libs ****************************/
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 337:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/components/xfl-select/xfl-select.vue?vue&type=style&index=0&id=64567a38&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./xfl-select.vue?vue&type=style&index=0&id=64567a38&scoped=true&lang=scss& */ 338);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 338:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Documents/HBuilderProjects/shipping/components/xfl-select/xfl-select.vue?vue&type=style&index=0&id=64567a38&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 473:
/*!****************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/main.js?{"page":"pages%2Fadd_vehicle%2Fadd_vehicle"} ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _add_vehicle = _interopRequireDefault(__webpack_require__(/*! ./pages/add_vehicle/add_vehicle.vue */ 474));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_add_vehicle.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 474:
/*!*********************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/add_vehicle/add_vehicle.vue ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_vehicle.vue?vue&type=template&id=1aadc4b8&scoped=true& */ 475);
/* harmony import */ var _add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_vehicle.vue?vue&type=script&lang=js& */ 477);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add_vehicle.vue?vue&type=style&index=0&id=1aadc4b8&lang=scss&scoped=true& */ 479);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1aadc4b8",
  null,
  false,
  _add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/add_vehicle/add_vehicle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 475:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/add_vehicle/add_vehicle.vue?vue&type=template&id=1aadc4b8&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add_vehicle.vue?vue&type=template&id=1aadc4b8&scoped=true& */ 476);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 476:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/add_vehicle/add_vehicle.vue?vue&type=template&id=1aadc4b8&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniNumberBox: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-number-box/components/uni-number-box/uni-number-box */ "uni_modules/uni-number-box/components/uni-number-box/uni-number-box").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue */ 1066))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.driving_cert_register_date_has_input = true
    }

    _vm.e1 = function($event) {
      _vm.driving_cert_issuing_date_has_input = true
    }

    _vm.e2 = function($event) {
      _vm.driving_cert_expiry_date_has_input = true
    }

    _vm.e3 = function($event) {
      _vm.road_cert_expiry_date_has_input = true
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 477:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/add_vehicle/add_vehicle.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add_vehicle.vue?vue&type=script&lang=js& */ 478);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 478:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/add_vehicle/add_vehicle.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 25));
































































































































































































































































































































































var _xflSelect = _interopRequireDefault(__webpack_require__(/*! @/components/xfl-select/xfl-select.vue */ 332));
var _pattern = __webpack_require__(/*! @/util/pattern.js */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}

var _self;var _default =

{
  data: function data() {
    var currentDate = this.getDate({
      format: true });


    return {
      //是否个人
      isPerson: false,
      disabled: true,
      active: false,
      //接受显示
      received_info: [],
      //显示车牌号
      plate_number: "",
      vehicleOwnName: "",
      //车品牌
      vehicle_brand: "",
      //道路运输证号
      vehicleRoadcertNo: "",
      vehicleLadenWeight: "",
      vehicleTonnage: "",
      params: {},


      //行驶证代码提示
      vin: "",

      imgDriverLicenseUrl: "/static/id-front.png",
      imgTransportLicenseUrl: "/static/TransportLicense.png",
      imgVehicleLicenseFirstUrl: "/static/vehicle_license.jpg",
      imgVehicleLicenseSecondUrl: "/static/id-front.png",
      imgDraggingCarPhotoUrl: "/static/id-front.png",
      imgDraggingTransportPhotoUrl: "/static/id-front.png",
      imgHangingCarPhotoUrl: "/static/vehicle_license.jpg",
      imgPeopleVehicleUrl: "/static/people_vehicle.jpg",
      tachar_driver_license: false,
      tachar_transport_license: false,
      tachar_vehicle_license_first: false,
      tachar_vehicle_license_second: false,
      tachar_dragging_car: false,
      tachar_dragging_transport: false,
      tachar_hanging_car: false,
      tachar_people_vehicle: false,
      //单选是否是“普通货车”
      is_ordinary: false,
      plate_type_index: 1,
      plate_color_index: 0,
      list: [
      '黄牌'
      // '蓝牌',
      // '绿牌',
      // '黄绿牌',
      ],
      owner_type_index: 0,
      owner_type_list: [
      '个人',
      '企业'],

      plate_type_list: [
      '小型汽车号牌',
      '大型汽车号牌',
      '其他号牌'],


      car_items: [{
        value: 'ordinary',
        name: '普通货车' },

      {
        value: 'semi-camion',
        name: '半挂车' }],




      car_current: 1,
      energy_items: [{
        value: 'new',
        name: '新能源' },

      {
        value: 'old',
        name: '非新能源' }],




      //单选是否是“新能源车”
      energy_current: 1,
      energy_type: "非新能源",
      // 车辆类型字典
      vehicleTypeOptions: [],
      // 车主类型字典
      vehicleOwnTypeOptions: [],
      // 车辆能源类型字典
      vehicleEnergyTypeOptions: [],
      // 车辆能源类型传给后台的值
      vehicleEnergyTypeSendValue: [],
      //车辆类型传给后台的值
      vehicleTypeSendValue: [],
      // 货箱长度字典
      vehicleCargoBoxLengthOptions: [],

      // 货箱长度传给后台的值
      vehicleCargoBoxLengthSendValue: [],
      // 货箱类型字典
      vehicleCargoBoxTypeOptions: [],
      // 货箱类型传给后台的值
      vehicleCargoBoxTypeSendValue: [],
      vehicleAxlenum: "",
      vehicleLength: "",
      vehicleWidth: "",
      vehicleHeight: "",
      trailerPlateNumber: "",
      driverId: "",
      vehicleUserCharacter: "",
      vehicleIssuingOrganizations: "",
      btn_title: "",
      car_type_list: [],
      car_type_index: 0,
      energy_type_list: [],
      energy_type_index: 0,
      box_length_list: [],
      box_length_index: 0,
      box_type_list: [],
      box_type_index: 0,

      driving_cert_register_date: currentDate,
      driving_cert_issuing_date: currentDate,
      driving_cert_expiry_date: currentDate,
      road_cert_expiry_date: currentDate,

      driving_cert_register_date_has_input: false,
      driving_cert_issuing_date_has_input: false,
      driving_cert_expiry_date_has_input: false,
      road_cert_expiry_date_has_input: false };

  },
  computed: {

    endDate: function endDate() {
      return this.getDate('end');
    } },

  components: {},


  onLoad: function onLoad(options) {
    this.btn_title = options.btn_title;
    if (this.btn_title == "修改" || this.btn_title == "查看") {
      this.received_info = uni.getStorageSync("vehicle_item");

    }


    this.getCarTypes();
    this.getVehicleOwnTypeOptions();
    this.getVehiclePlateTypeOptions();
    this.getVehiclePlateColorOptions();
    this.getVehicleEnergyTypeOptions();

    this.getVehicleTypeOptions();
    this.getVehicleCargoBoxLengthOptions();
    this.getCargoBoxType();





  },
  created: function created() {
    this.isPerson = uni.getStorageSync("in_personal_registering");
    // 默认能源类型 非新能源
    this.params.whetherNewEnergy = 2;


    //导入车辆详情
    if (this.btn_title == "修改" || this.btn_title == "查看") {
      //车辆行驶证主副页 

      this.imgVehicleLicenseFirstUrl = this.received_info.vehicleLicensePhotoFirst;
      if (this.imgVehicleLicenseFirstUrl == '') {
        this.imgVehicleLicenseFirstUrl = "/static/vehicle_license.jpg";
      }
      //人车合照
      this.imgPeopleVehicleUrl = this.received_info.peopleVehiclePhoto;
      if (this.imgPeopleVehicleUrl == '') {
        this.imgPeopleVehicleUrl = "/static/people_vehicle.jpg";
      }
      //道路运输证照片
      this.imgTransportLicenseUrl = this.received_info.vehicleRoadcertPhoto;
      if (this.imgTransportLicenseUrl == '') {
        this.imgTransportLicenseUrl = "/static/TransportLicense.png";
      }
      //挂车行驶证主副页
      this.imgHangingCarPhotoUrl = this.received_info.trailerLicensePhotoFirst;
      if (this.imgHangingCarPhotoUrl == '') {
        this.imgHangingCarPhotoUrl = "/static/vehicle_license.jpg";
      }


      this.plate_number = this.received_info.vehiclePlateNumber;
      this.vehicleOwnName = this.received_info.vehicleOwnName;
      this.owner_type_index = this.received_info.vehicleOwnType;
      this.vehicle_brand = this.received_info.vehicleBrands;
      this.vehicleRoadcertNo = this.received_info.vehicleRoadcertNo;
      //行驶证注册日期
      if (this.received_info.vehicleRegisterDate) {
        this.driving_cert_register_date = this.received_info.vehicleRegisterDate || this.getDate({ format: true });
        this.driving_cert_register_date_has_input = true;
      }
      //行驶证发证日期
      if (this.received_info.vehicleIssueDate) {
        this.driving_cert_issuing_date = this.received_info.vehicleIssueDate || this.getDate({ format: true });
        this.driving_cert_issuing_date_has_input = true;
      }
      //行驶证失效日期
      if (this.received_info.vehicleLicenseExpireDate) {
        this.driving_cert_expiry_date = this.received_info.vehicleLicenseExpireDate || this.getDate({ format: true });
        this.driving_cert_expiry_date_has_input = true;
      }
      //运输证到期日期
      if (this.received_info.vehicleRoadcertExpireDate) {
        this.road_cert_expiry_date = this.received_info.vehicleRoadcertExpireDate || this.getDate({ format: true });
        this.road_cert_expiry_date_has_input = true;
      }


      this.vehicleLadenWeight = this.received_info.vehicleLadenWeight;
      this.vehicleTonnage = this.received_info.vehicleTonnage;
      this.vehicleAxlenum = this.received_info.vehicleAxlenum;
      this.vehicleLength = this.received_info.vehicleLength;
      this.vehicleWidth = this.received_info.vehicleWidth;
      this.vehicleHeight = this.received_info.vehicleHeight;
      this.trailerPlateNumber = this.received_info.trailerPlateNumber;
      this.vehicleUserCharacter = this.received_info.vehicleUserCharacter;
      this.vehicleIssuingOrganizations = this.received_info.vehicleIssuingOrganizations;
      this.vin = this.received_info.vehicleVincode;
      //enable the btn
      this.disabled = false;
      this.active = true;

    }

  },
  mounted: function mounted() {
    uni.setNavigationBarTitle({
      title: "".concat(this.btn_title, "\u8F66\u8F86") });


  },
  methods: {
    //用于 date picker!!!!!
    getDate: function getDate(type) {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      if (type === 'start') {
        year = year - 60;
      } else if (type === 'end') {
        year = year + 20;
      }
      month = month > 9 ? month : '0' + month;;
      day = day > 9 ? day : '0' + day;
      return "".concat(year, "-").concat(month, "-").concat(day);
    },
    //	车辆所有人						
    getVehicleOwnName: function getVehicleOwnName(e) {
      this.vehicleOwnName = e.target.value;
      this.params.vehicleOwnName = e.target.value;

    },
    //	车辆能源类型		
    bindPickerEnergyTypeChange: function bindPickerEnergyTypeChange(e) {

      this.energy_type_index = e.target.value;

      var vehicle_energy_type_index = this.energy_type_index;

      this.params.vehicleEnergyType = this.vehicleEnergyTypeSendValue[vehicle_energy_type_index - 1];

    },
    //车主类型									
    bindPickerTypeChange: function bindPickerTypeChange(e) {

      this.owner_type_index = e.target.value;

      this.params.vehicleOwnType = this.owner_type_index;

    },

    //车辆类型
    bindPickerCarTypeChange: function bindPickerCarTypeChange(e) {

      this.car_type_index = e.target.value;

      var car_type_index = this.car_type_index;

      this.params.vehicleType = this.vehicleTypeSendValue[car_type_index - 1];


    },
    //将base64位图片上传,之后identifying要用

    detailImage: function detailImage(path, callback) {

      plus.io.resolveLocalFileSystemURL(path, function (entry) {
        entry.file(function (file) {
          var fileReader = new plus.io.FileReader();

          fileReader.readAsDataURL(file);
          fileReader.onloadend = function (evt) {

            callback(evt.target.result);
          };
        });
      });
    },
    bindPickerColorChange: function bindPickerColorChange(e) {

      this.plate_color_index = e.target.value;
      if (e.target.value == 0) {
        this.params.vehiclePlateColor = "2";
      }
      this.plate_color_index = 0;
      this.params.vehiclePlateColor = "2";
    },
    bindPickerChange: function bindPickerChange(e) {

      this.plate_type_index = e.target.value;
      if (e.target.value == 0) {
        this.params.vehiclePlateType = "02";
      } else if (e.target.value == 1) {
        this.params.vehiclePlateType = "01";
      } else if (e.target.value == 2) {
        this.params.vehiclePlateType = "99";
      }
    },
    bindPickercargoBoxLengthChange: function bindPickercargoBoxLengthChange(e) {

      this.box_length_index = e.target.value;
      var box_length_index = this.box_length_index - 1; // substract 1 to make the index matches
      this.params.cargoBoxLength = this.vehicleCargoBoxLengthSendValue[box_length_index];

    },

    bindPickercargoBoxTypeChange: function bindPickercargoBoxTypeChange(e) {

      this.box_type_index = e.target.value;
      this.params.cargoBoxType = e.target.value;
    },

    getTrailerPlateNumber: function getTrailerPlateNumber(e) {

      this.params.trailerPlateNumber = e.detail.value;

    },
    //绑定主驾
    getDriverId: function getDriverId(e) {

      this.params.driverId = e.detail.value;

    },
    //使用性质													
    getVehicleUserCharacter: function getVehicleUserCharacter(e) {

      this.params.vehicleUserCharacter = e.detail.value;

    },
    //行驶证发证机关
    getVehicleIssuingOrganizations: function getVehicleIssuingOrganizations(e) {

      this.params.vehicleIssuingOrganizations = e.detail.value;

    },

    getCarTypes: function getCarTypes() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var resCarTypes;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  _this.$getRegistDicts("iscm_vehicle_species"));case 2:resCarTypes = _context.sent;case 3:case "end":return _context.stop();}}}, _callee);}))();

    },
    //车主类型
    getVehicleOwnTypeOptions: function getVehicleOwnTypeOptions() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var vehicleOwnTypeOptions;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  _this2.$getRegistDicts("vehicle_own_type"));case 2:vehicleOwnTypeOptions = _context2.sent;
                _this2.vehicleOwnTypeOptions = vehicleOwnTypeOptions.data.data.map(function (e) {return e.dictLabel;});

                _this2.owner_type_list = _this2.vehicleOwnTypeOptions;
                _this2.owner_type_list.unshift("车主类型");case 6:case "end":return _context2.stop();}}}, _callee2);}))();
    },

    getVehiclePlateTypeOptions: function getVehiclePlateTypeOptions() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var vehiclePlateTypeOptions;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  _this3.$getRegistDicts("vehicle_plate_type"));case 2:vehiclePlateTypeOptions = _context3.sent;case 3:case "end":return _context3.stop();}}}, _callee3);}))();

    },

    getVehiclePlateColorOptions: function getVehiclePlateColorOptions() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var vehiclePlateColorOptions;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                  _this4.$getRegistDicts("vehicle_plate_color"));case 2:vehiclePlateColorOptions = _context4.sent;case 3:case "end":return _context4.stop();}}}, _callee4);}))();

    },
    getVehicleEnergyTypeOptions: function getVehicleEnergyTypeOptions() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var vehicleEnergyTypeOptions, vehicleEnergyType;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                  _this5.$getRegistDicts("vehicle_energy_type"));case 2:vehicleEnergyTypeOptions = _context5.sent;
                _this5.vehicleEnergyTypeOptions = vehicleEnergyTypeOptions.data.data.map(function (e) {return e.dictLabel;});
                _this5.energy_type_list = _this5.vehicleEnergyTypeOptions;
                _this5.energy_type_list.unshift("车辆能源类型");

                _this5.vehicleEnergyTypeSendValue = vehicleEnergyTypeOptions.data.data.map(function (e) {return e.dictValue;});

                vehicleEnergyType = _this5.received_info.vehicleEnergyType;
                _this5.energy_type_index = _this5.vehicleEnergyTypeSendValue.findIndex(function (value) {return value == vehicleEnergyType;}) + 1;case 9:case "end":return _context5.stop();}}}, _callee5);}))();

    },
    // 车辆类型字典
    getVehicleTypeOptions: function getVehicleTypeOptions() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var vehicleTypeOptions, vehicleType;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (
                  _this6.$getRegistDicts("vehicle_type"));case 2:vehicleTypeOptions = _context6.sent;
                _this6.vehicleTypeOptions = vehicleTypeOptions.data.data.map(function (e) {return e.dictLabel;});
                _this6.car_type_list = _this6.vehicleTypeOptions;
                _this6.car_type_list.unshift("车辆类型");

                _this6.vehicleTypeSendValue = vehicleTypeOptions.data.data.map(function (e) {return e.dictValue;});

                vehicleType = _this6.received_info.vehicleType;

                _this6.car_type_index = _this6.vehicleTypeSendValue.findIndex(function (value) {return value == vehicleType;}) + 1;case 9:case "end":return _context6.stop();}}}, _callee6);}))();

    },
    //货箱长度
    getVehicleCargoBoxLengthOptions: function getVehicleCargoBoxLengthOptions() {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var vehicleCargoBoxLengthOptions, cargoBoxLength;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return (
                  _this7.$getRegistDicts("vehicle_length"));case 2:vehicleCargoBoxLengthOptions = _context7.sent;

                _this7.vehicleCargoBoxLengthOptions = vehicleCargoBoxLengthOptions;
                _this7.vehicleCargoBoxLengthOptions = _this7.vehicleCargoBoxLengthOptions.data.data.map(function (e) {return e.dictLabel;});
                _this7.box_length_list = _this7.vehicleCargoBoxLengthOptions;
                _this7.box_length_list.unshift("货箱长度");

                _this7.vehicleCargoBoxLengthSendValue = vehicleCargoBoxLengthOptions.data.data.map(function (e) {return e.dictValue;});
                cargoBoxLength = _this7.received_info.cargoBoxLength;

                _this7.box_length_index = _this7.vehicleCargoBoxLengthSendValue.findIndex(function (value) {return value == cargoBoxLength;}) + 1;case 10:case "end":return _context7.stop();}}}, _callee7);}))();

    },

    getCargoBoxType: function getCargoBoxType() {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var vehicleCargoBoxTypeOptions, cargoBoxType;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (
                  _this8.$getRegistDicts("vehicle_cargo_box_type"));case 2:vehicleCargoBoxTypeOptions = _context8.sent;
                _this8.vehicleCargoBoxTypeOptions = vehicleCargoBoxTypeOptions;
                _this8.vehicleCargoBoxTypeOptions = _this8.vehicleCargoBoxTypeOptions.data.data.map(function (e) {return e.dictLabel;});
                _this8.vehicleCargoBoxTypeSendValue = vehicleCargoBoxTypeOptions.data.data.map(function (e) {return e.dictValue;});
                _this8.box_type_list = _this8.vehicleCargoBoxTypeOptions;
                _this8.box_type_list.unshift("货箱类型");

                cargoBoxType = _this8.received_info.cargoBoxType;

                _this8.box_type_index = _this8.vehicleCargoBoxTypeSendValue.findIndex(function (value) {return value == cargoBoxType;}) + 1;case 10:case "end":return _context8.stop();}}}, _callee8);}))();
    },

    radioEnergyChange: function radioEnergyChange(e) {

      if (e.target.value === "new") {
        this.energy_type = "新能源";
        this.params.whetherNewEnergy = 1;
      } else {
        this.energy_type = "非新能源";
        // 默认能源类型 非新能源
        this.params.whetherNewEnergy = 2;
      }

    },


    radioCarChange: function radioCarChange(e) {

      if (e.target.value == "ordinary") {
        this.is_ordinary = true;
        this.params.vehicleSpecies = 103;
      } else {
        this.is_ordinary = false;
        this.params.vehicleSpecies = 303;
      }

    },

    getCarNo: function getCarNo(e) {
      this.plate_number = e.detail.value;
      this.params.vehiclePlateNumber = e.detail.value;

    },
    //根据车牌获取车辆信息
    checkCarNo: function checkCarNo() {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var authorization, plateNumber, res_check_plate;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:
                authorization = uni.getStorageSync("token");

                plateNumber = _this9.plate_number;_context9.next = 4;return (

                  _this9.$request({
                    url: "/app/vehicle/getByPlateNumber/" + plateNumber,
                    method: "GET",

                    header: {
                      Authorization: authorization } }));case 4:res_check_plate = _context9.sent;




                if (res_check_plate.data.hasOwnProperty("data")) {
                  uni.showToast({
                    title: "该车牌号已被注册过,可直接绑定！",
                    icon: "none" });

                } else {
                  uni.showToast({
                    title: "该车牌号尚未被注册过,请继续！",
                    icon: "none" });

                }case 6:case "end":return _context9.stop();}}}, _callee9);}))();

    },

    getCarBrand: function getCarBrand(e) {
      this.vehicle_brand = e.detail.value;
      this.params.vehicleBrands = e.detail.value;

    },
    getPlateColor: function getPlateColor(e) {

      if (e.newVal == "黄牌") {
        this.params.vehiclePlateColor = "2";
      }

    },

    bindDateChange: function bindDateChange(e) {
      //行驶证注册日期
      if (e.currentTarget.dataset.index == "driving_cert_register_date") {
        this.driving_cert_register_date = e.target.value;
        this.params.vehicleRegisterDate = this.driving_cert_register_date;
        this.driving_cert_register_date_has_input = true;
      } else if (e.currentTarget.dataset.index == "driving_cert_issuing_date") {
        //行驶证发证日期
        this.driving_cert_issuing_date = e.target.value;
        this.params.vehicleIssueDate = this.driving_cert_issuing_date;
        this.driving_cert_issuing_date_has_input = true;
      } else if (e.currentTarget.dataset.index == "driving_cert_expiry_date") {
        //行驶证失效日期
        this.driving_cert_expiry_date = e.target.value;
        this.params.vehicleLicenseExpireDate = this.driving_cert_expiry_date;
        this.driving_cert_expiry_date_has_input = true;
      } else if (e.currentTarget.dataset.index == "road_cert_expiry_date") {
        //道路运输证失效日期
        this.road_cert_expiry_date = e.target.value;
        this.params.vehicleRoadcertExpireDate = this.road_cert_expiry_date;
        this.road_cert_expiry_date_has_input = true;
      }

    },

    getVehicleWeight: function getVehicleWeight(e) {
      this.vehicleLadenWeight = e.detail.value;
      this.params.vehicleLadenWeight = e.detail.value;

    },

    getRatingWeight: function getRatingWeight(e) {
      this.vehicleTonnage = e.detail.value;
      this.params.vehicleTonnage = e.detail.value;
      this.disabled = false;
      this.active = true;
    },

    getRoadTransportNo: function getRoadTransportNo(e) {

      this.params.vehicleRoadcertNo = e.detail.value;

    },

    getVehicleVinCode: function getVehicleVinCode(e) {

      this.params.vehicleVincode = e.detail.value;

    },


    getVehicleAxlenum: function getVehicleAxlenum(e) {

      this.params.vehicleAxlenum = e;

    },

    getVehicleLength: function getVehicleLength(e) {

      this.params.vehicleLength = e.detail.value;

    },
    getVehicleWidth: function getVehicleWidth(e) {

      this.params.vehicleWidth = e.detail.value;

    },
    getVehicleHeight: function getVehicleHeight(e) {

      this.params.vehicleHeight = e.detail.value;

    },

    takephoto: function takephoto(e) {var _this10 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15() {var resChoosePhoto, _resChoosePhoto, _resChoosePhoto2, _resChoosePhoto3, _resChoosePhoto4;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:
                _self = _this10;if (!(
                e.currentTarget.dataset.index == "vehicle_license_first")) {_context15.next = 7;break;}_context15.next = 4;return (



                  _this10.$photo({
                    success: function success(res) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var tempFilePaths, resPhoto;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:
                                tempFilePaths = res.tempFilePaths;
                                //identifying

































































































                                //upload the img 
                                _self.imgVehicleLicenseFirstUrl = tempFilePaths[0];

                                //make the tachar img appear
                                _self.tachar_vehicle_license_first = true;

                                //upload
                                _context10.next = 5;return _self.$upload({
                                  url: _pattern.ossLocation.vehicle.first,
                                  file_path: tempFilePaths[0] });case 5:resPhoto = _context10.sent;case 6:case "end":return _context10.stop();}}}, _callee10);}))();



                    } }));case 4:resChoosePhoto = _context15.sent;_context15.next = 29;break;case 7:if (!(

                e.currentTarget.dataset.index == "vehicle_license_second")) {_context15.next = 13;break;}_context15.next = 10;return (



                  _this10.$photo({
                    success: function success(res) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {var tempFilePaths, resPhoto;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:
                                tempFilePaths = res.tempFilePaths;




                                //upload the img 
                                _self.imgVehicleLicenseSecondUrl = tempFilePaths[0];

                                //make the tachar img appear
                                _self.tachar_vehicle_license_second = true;

                                //upload
                                _context11.next = 5;return _self.$upload({
                                  url: _pattern.ossLocation.vehicle.second,
                                  file_path: tempFilePaths[0] });case 5:resPhoto = _context11.sent;case 6:case "end":return _context11.stop();}}}, _callee11);}))();



                    } }));case 10:_resChoosePhoto = _context15.sent;_context15.next = 29;break;case 13:if (!(

                e.currentTarget.dataset.index == "vehicle_transport_license")) {_context15.next = 19;break;}_context15.next = 16;return (




                  _this10.$photo({
                    success: function success(res) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var tempFilePaths, resPhoto;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:
                                tempFilePaths = res.tempFilePaths;




                                //upload the img
                                _self.imgTransportLicenseUrl = tempFilePaths[0];

                                //make the tachar img appear
                                _self.tachar_transport_license = true;

                                //upload
                                _context12.next = 5;return _self.$upload({
                                  url: _pattern.ossLocation.vehicle.road,
                                  file_path: tempFilePaths[0] });case 5:resPhoto = _context12.sent;case 6:case "end":return _context12.stop();}}}, _callee12);}))();



                    } }));case 16:_resChoosePhoto2 = _context15.sent;_context15.next = 29;break;case 19:if (!(

                e.currentTarget.dataset.index == "trailer_license_photo_first")) {_context15.next = 25;break;}_context15.next = 22;return (




                  _this10.$photo({
                    success: function success(res) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var tempFilePaths, resPhoto;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:
                                tempFilePaths = res.tempFilePaths;

                                //identifying
































































































                                //upload the img
                                _self.imgHangingCarPhotoUrl = tempFilePaths[0];

                                //make the tachar img appear
                                _self.tachar_hanging_car = true;

                                //upload
                                _context13.next = 5;return _self.$upload({
                                  url: _pattern.ossLocation.trailer.first,
                                  file_path: tempFilePaths[0] });case 5:resPhoto = _context13.sent;case 6:case "end":return _context13.stop();}}}, _callee13);}))();



                    } }));case 22:_resChoosePhoto3 = _context15.sent;_context15.next = 29;break;case 25:if (!(

                e.currentTarget.dataset.index == "people_vehicle_photo")) {_context15.next = 29;break;}_context15.next = 28;return (





                  _this10.$photo({
                    success: function success(res) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14() {var tempFilePaths, resPhoto;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:
                                tempFilePaths = res.tempFilePaths;




                                //upload the img
                                _self.imgPeopleVehicleUrl = tempFilePaths[0];

                                //make the tachar img appear
                                _self.tachar_people_vehicle = true;

                                //upload
                                _context14.next = 5;return _self.$upload({
                                  url: _pattern.ossLocation.vehicle.rc,
                                  file_path: tempFilePaths[0] });case 5:resPhoto = _context14.sent;case 6:case "end":return _context14.stop();}}}, _callee14);}))();



                    } }));case 28:_resChoosePhoto4 = _context15.sent;case 29:case "end":return _context15.stop();}}}, _callee15);}))();



    },

    uploadDriverLicense: function uploadDriverLicense() {
      _self = this;

      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        header: {
          Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ" },

        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;




          //upload the img 
          _self.imgDriverLicenseUrl = tempFilePaths[0];

          //make the tachar img appear
          _self.tachar_driver_license = true;

          var uploadTask = uni.uploadFile({
            url: 'http://182.61.138.90:8081/iscm/dispatch',
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'user': 'test' },

            success: function success(uploadFileRes) {

              uni.showToast({
                title: "上传成功" });

            } });



        } });


    },



    uploadDraggingCarPhoto: function uploadDraggingCarPhoto() {
      _self = this;

      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        header: {
          Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ" },

        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;



          //upload the img 
          _self.imgDraggingCarPhotoUrl = tempFilePaths[0];

          //make the tachar img appear
          _self.tachar_dragging_car = true;

          var uploadTask = uni.uploadFile({
            url: 'http://182.61.138.90:8081/iscm/dispatch',
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'user': 'test' },

            success: function success(uploadFileRes) {

              uni.showToast({
                title: "上传成功" });


              //此处将下一步 按钮变为可用
              _self.disabled = false;
              _self.active = true;

            } });



        } });


    },
    uploadDraggingTransportPhoto: function uploadDraggingTransportPhoto() {
      _self = this;

      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        header: {
          Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ" },

        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;

          //upload the img 
          _self.imgDraggingTransportPhotoUrl = tempFilePaths[0];

          //make the tachar img appear
          _self.tachar_dragging_transport = true;

          var uploadTask = uni.uploadFile({
            url: 'http://182.61.138.90:8081/iscm/dispatch',
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'user': 'test' },

            success: function success(uploadFileRes) {

              uni.showToast({
                title: "上传成功" });


              //此处将下一步 按钮变为可用
              _self.disabled = false;
              _self.active = true;

            } });




        } });


    },



    cancelHangingCar: function cancelHangingCar() {
      this.imgHangingCarPhotoUrl = "/static/vehicle_license.jpg",
      setTimeout(function () {
        uni.showToast({
          title: "删除照片成功，请重新选择",
          icon: "none" });

      }, 500);
      this.tachar_hanging_car = false;
    },

    cancelDraggingCar: function cancelDraggingCar() {
      this.imgDraggingCarPhotoUrl = "/static/id-front.png",
      setTimeout(function () {
        uni.showToast({
          title: "删除照片成功，请重新选择",
          icon: "none" });

      }, 500);
      this.tachar_dragging_car = false;
    },
    cancelDraggingTransport: function cancelDraggingTransport() {
      this.imgDraggingTransportPhotoUrl = "/static/id-front.png",
      setTimeout(function () {
        uni.showToast({
          title: "删除照片成功，请重新选择",
          icon: "none" });

      }, 500);
      this.tachar_dragging_transport = false;
    },

    cancelDriverLicense: function cancelDriverLicense() {
      this.imgDriverLicenseUrl = "/static/id-front.png",
      setTimeout(function () {
        uni.showToast({
          title: "删除照片成功，请重新选择",
          icon: "none" });

      }, 500);
      this.tachar_driver_license = false;
    },

    cancelTransportLicense: function cancelTransportLicense() {
      this.imgTransportLicenseUrl = "/static/TransportLicense.png";
      setTimeout(function () {
        uni.showToast({
          title: "删除照片成功，请重新选择",
          icon: "none" });

      }, 500);
      this.tachar_transport_license = false;
    },

    cancelVehicleLicenseFirst: function cancelVehicleLicenseFirst() {
      this.imgVehicleLicenseFirstUrl = "/static/vehicle_license.jpg",
      setTimeout(function () {
        uni.showToast({
          title: "删除照片成功，请重新选择",
          icon: "none" });

      }, 500);
      this.tachar_vehicle_license_first = false;
    },

    cancelVehicleLicenseSecond: function cancelVehicleLicenseSecond() {
      this.imgVehicleLicenseSecondUrl = "/static/id-front.png",
      setTimeout(function () {
        uni.showToast({
          title: "删除照片成功，请重新选择",
          icon: "none" });

      }, 500);
      this.tachar_vehicle_license_second = false;
    },

    cancelPeopleVehicle: function cancelPeopleVehicle() {
      this.imgPeopleVehicleUrl = "/static/people_vehicle.jpg",
      setTimeout(function () {
        uni.showToast({
          title: "删除照片成功，请重新选择",
          icon: "none" });

      }, 500);
      this.tachar_people_vehicle = false;
    },

    goQuery: function goQuery() {







    },


    formSubmit: function formSubmit(e) {var _this11 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16() {var car_no, regExp, regExpNewEnergy, regExpNOTNewEnergy, authorization, form, res, modify_params, modify_received_info, modify_form, resEdit;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!(

                _this11.btn_title == "添加")) {_context16.next = 89;break;}

                //进行车辆行驶证主副页检查
                _this11.params.vehicleLicensePhotoFirst = uni.getStorageSync("vehicleLicensePhotoFirst");
                if (_this11.params.vehicleLicensePhotoFirst == null || _this11.params.vehicleLicensePhotoFirst == "" || _this11.params.vehicleLicensePhotoFirst.length < 1) {
                  uni.showToast({
                    title: "请提交车辆行驶证主副页",
                    icon: "none" });

                }
                //进行道路运输证照片检查
                _this11.params.vehicleRoadcertPhoto = uni.getStorageSync("vehicleRoadcertPhoto");
                if (_this11.params.vehicleRoadcertPhoto == null || _this11.params.vehicleRoadcertPhoto == "" || _this11.params.vehicleRoadcertPhoto.length < 1) {
                  uni.showToast({
                    title: "请提交道路运输证",
                    icon: "none" });

                }
                //进行是否新能源检查
                if (_this11.params.whetherNewEnergy == null || _this11.params.whetherNewEnergy == "" || _this11.params.whetherNewEnergy.length < 1) {
                  _this11.params.whetherNewEnergy = 2;
                }

                //进行车辆种类检查
                if (_this11.params.vehicleSpecies == null || _this11.params.vehicleSpecies == "" || _this11.params.vehicleSpecies.length < 1) {
                  _this11.params.vehicleSpecies = 303;
                }

                //进行牌照类型检查
                if (_this11.params.vehiclePlateType == null || _this11.params.vehiclePlateType == "" || _this11.params.vehiclePlateType.length < 1) {
                  _this11.params.vehiclePlateType = "02";
                }

                //进行车牌颜色检查
                if (_this11.params.vehiclePlateColor == null || _this11.params.vehiclePlateColor == "" || _this11.params.vehiclePlateColor.length < 1) {
                  _this11.params.vehiclePlateColor = "2";
                }


                car_no = _this11.params.vehiclePlateNumber;
                //正则验证车牌号
                regExp = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/;
                //正则验证新能源车牌号
                regExpNewEnergy = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF])))$/;
                //正则验证非新能源车牌号
                regExpNOTNewEnergy = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/;if (

                regExp.test(car_no)) {_context16.next = 19;break;}
                uni.showToast({
                  title: "车牌号不正确",
                  icon: "none" });

                _this11.plate_num = "";return _context16.abrupt("return");case 19:if (!


                regExpNewEnergy.test(car_no)) {_context16.next = 23;break;}
                if (_this11.energy_type == "新能源") {


                  uni.setStorageSync("params_vehicle", _this11.params);
                  _this11.$emit('register_vehicle_params', _this11.params);
                } else {
                  uni.showToast({
                    title: "车牌号不正确，请确认是否为新能源车",
                    icon: "none" });


                }_context16.next = 32;break;case 23:if (!

                regExpNOTNewEnergy.test(car_no)) {_context16.next = 32;break;}if (!(
                _this11.energy_type == "非新能源")) {_context16.next = 29;break;}


                uni.setStorageSync("params_vehicle", _this11.params);
                _this11.$emit('register_vehicle_params', _this11.params);_context16.next = 32;break;case 29:


                uni.showToast({
                  title: "车牌号不正确，请确认是否为非新能源车",
                  icon: "none" });

                _this11.plate_num = "";return _context16.abrupt("return");case 32:if (!(




                _this11.params.cargoBoxType == null || _this11.params.cargoBoxType == "" || _this11.params.cargoBoxType.length < 1)) {_context16.next = 35;break;}
                uni.showToast({
                  title: "未输入货箱类型, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 35:if (!(





                _this11.params.vehicleAxlenum == null || _this11.params.vehicleAxlenum == "" || _this11.params.vehicleAxlenum.length < 1)) {_context16.next = 38;break;}
                uni.showToast({
                  title: "未输入车轴数, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 38:if (!(





                _this11.params.vehicleBrands == null || _this11.params.vehicleBrands == "" || _this11.params.vehicleBrands.length < 1)) {_context16.next = 41;break;}
                uni.showToast({
                  title: "未输入车辆品牌, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 41:if (!(





                _this11.params.vehicleEnergyType == null || _this11.params.vehicleEnergyType == "" || _this11.params.vehicleEnergyType.length < 1)) {_context16.next = 44;break;}
                uni.showToast({
                  title: "未输入车辆能源类型, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 44:if (!(






                _this11.params.vehicleLadenWeight < 4.5)) {_context16.next = 60;break;}if (!(

                _this11.params.vehicleIssueDate == null || _this11.params.vehicleIssueDate == "" || _this11.params.vehicleIssueDate.length < 1)) {_context16.next = 48;break;}
                uni.showToast({
                  title: "未输入行驶证发证日期, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 48:if (!(




                _this11.params.vehicleIssuingOrganizations == null || _this11.params.vehicleIssuingOrganizations == "" || _this11.params.vehicleIssuingOrganizations.length < 1)) {_context16.next = 51;break;}
                uni.showToast({
                  title: "未输入发证机关, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 51:if (!(




                _this11.params.vehicleRegisterDate == null || _this11.params.vehicleRegisterDate == "" || _this11.params.vehicleRegisterDate.length < 1)) {_context16.next = 54;break;}
                uni.showToast({
                  title: "未输入行驶证注册日期, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 54:if (!(





                _this11.params.vehicleUserCharacter == null || _this11.params.vehicleUserCharacter == "" || _this11.params.vehicleUserCharacter.length < 1)) {_context16.next = 57;break;}
                uni.showToast({
                  title: "未输入使用性质, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 57:if (!(





                _this11.params.vehicleVincode == null || _this11.params.vehicleVincode == "" || _this11.params.vehicleVincode.length < 1)) {_context16.next = 60;break;}
                uni.showToast({
                  title: "未输入车辆识别代号, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 60:if (!(






                _this11.params.vehicleLicenseExpireDate == null || _this11.params.vehicleLicenseExpireDate == "" || _this11.params.vehicleLicenseExpireDate.length < 1)) {_context16.next = 63;break;}
                uni.showToast({
                  title: "未输入行驶证失效日期, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 63:if (!(





                _this11.params.vehicleRoadcertExpireDate == null || _this11.params.vehicleRoadcertExpireDate == "" || _this11.params.vehicleRoadcertExpireDate.length < 1)) {_context16.next = 66;break;}
                uni.showToast({
                  title: "未输入运输证到期日期, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 66:if (!(






                _this11.params.vehicleLadenWeight == null || _this11.params.vehicleLadenWeight == "" || _this11.params.vehicleLadenWeight.length < 1)) {_context16.next = 69;break;}
                uni.showToast({
                  title: "未输入车辆总质量, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 69:if (!(





                _this11.params.vehicleTonnage == null || _this11.params.vehicleTonnage == "" || _this11.params.vehicleTonnage.length < 1)) {_context16.next = 72;break;}
                uni.showToast({
                  title: "未输入车辆载质量, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 72:if (!(





                _this11.params.vehicleOwnName == null || _this11.params.vehicleOwnName == "" || _this11.params.vehicleOwnName.length < 1)) {_context16.next = 75;break;}
                uni.showToast({
                  title: "未输入车辆所有人, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 75:if (!(





                _this11.params.vehicleOwnType == null || _this11.params.vehicleOwnType == "" || _this11.params.vehicleOwnType.length < 1)) {_context16.next = 78;break;}
                uni.showToast({
                  title: "未输入车主类型, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 78:if (!(






                _this11.params.vehicleRoadcertNo == null || _this11.params.vehicleRoadcertNo == "" || _this11.params.vehicleRoadcertNo.length < 1)) {_context16.next = 81;break;}
                uni.showToast({
                  title: "未输入道路运输证号, 请输入",
                  icon: "none" });return _context16.abrupt("return");case 81:




                authorization = uni.getStorageSync("token");
                form = _this11.params;_context16.next = 85;return (



                  _this11.$request({
                    url: "/app/vehicle/add",
                    method: "POST",
                    data: form,
                    header: {
                      Authorization: authorization } }));case 85:res = _context16.sent;





                if (res.data.msg == "操作成功") {
                  uni.showToast({
                    title: res.data.msg });


                  setTimeout(function () {
                    uni.reLaunch({
                      url: "/pages/vehicle_list/vehicle_list" });

                  }, 800);
                } else {
                  uni.showToast({
                    title: res.data.msg,
                    icon: "none" });

                }
                //"添加"按钮结束
                _context16.next = 99;break;case 89:if (!(_this11.btn_title == "修改")) {_context16.next = 99;break;}
                authorization = uni.getStorageSync("token");
                modify_params = _this11.params;
                modify_received_info = _this11.received_info;
                modify_form = {};
                Object.assign(modify_form, modify_received_info, modify_params);_context16.next = 97;return (

                  _this11.$request({
                    url: "/app/vehicle/edit",
                    method: "PUT",
                    data: modify_form,
                    header: {
                      Authorization: authorization } }));case 97:resEdit = _context16.sent;





                if (resEdit.data.msg == "操作成功") {
                  uni.showToast({
                    title: resEdit.data.msg });


                  setTimeout(function () {
                    uni.reLaunch({
                      url: "/pages/vehicle_list/vehicle_list" });

                  }, 800);
                } else {
                  uni.showToast({
                    title: resEdit.data.msg,
                    icon: "none" });

                }case 99:case "end":return _context16.stop();}}}, _callee16);}))();




    },

    backBusiness: function backBusiness() {
      uni.navigateBack({
        delta: 1 });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 479:
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/add_vehicle/add_vehicle.vue?vue&type=style&index=0&id=1aadc4b8&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add_vehicle.vue?vue&type=style&index=0&id=1aadc4b8&lang=scss&scoped=true& */ 480);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 480:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/add_vehicle/add_vehicle.vue?vue&type=style&index=0&id=1aadc4b8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[473,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/add_vehicle/add_vehicle.js.map