(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/bank/bank"],{

/***/ 318:
/*!************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/components/xfl-select/xfl-select.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xfl-select.vue?vue&type=template&id=64567a38&scoped=true& */ 319);
/* harmony import */ var _xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xfl-select.vue?vue&type=script&lang=js& */ 321);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xfl-select.vue?vue&type=style&index=0&id=64567a38&scoped=true&lang=scss& */ 323);
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

/***/ 319:
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/components/xfl-select/xfl-select.vue?vue&type=template&id=64567a38&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./xfl-select.vue?vue&type=template&id=64567a38&scoped=true& */ 320);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_template_id_64567a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 320:
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

/***/ 321:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/components/xfl-select/xfl-select.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./xfl-select.vue?vue&type=script&lang=js& */ 322);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 322:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Documents/HBuilderProjects/shipping/components/xfl-select/xfl-select.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

























































var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}
_vue.default.__xfl_select = _vue.default.__xfl_select || new _vue.default(); // ???????????????????????????xfl-select????????????????????????????????????
var _default2 = {
  name: 'xfl-select',
  props: {
    list: { // ????????????
      type: Array,
      default: function _default() {
        return [];
      } },

    list2: { // ????????????
      type: Array,
      default: function _default() {
        return [];
      } },

    focusShowList: null, // ???input?????????????????????????????????????????????
    initValue: null, // ?????????????????????
    isCanInput: { // ??????????????????????????????
      type: Boolean,
      default: false },

    selectHideType: { // ?????????????????????????????????????????????
      type: String,
      default: 'hideAll' // 'independent' - ?????????????????????????????????????????????  'hideAll' - ????????????????????????????????????????????????????????????
      // 'hideOthers'- ??????????????????????????????????????????????????????  ?????????????????????????????????????????????????????? 
      // 'hideSelf' -  ????????????????????????????????????????????????????????????????????????????????????????????????????????????
    },
    placeholder: { // ????????????placeholder
      type: String,
      default: '?????????' },

    style_Container: { // ??????????????????
      type: String,
      default: '' },

    disabled: { // ???????????????????????????
      type: Boolean,
      default: false },

    showItemNum: { // ?????????????????????????????????????????????????????????????????????
      type: Number,
      default: 5 },

    listShow: { // ?????????????????????
      type: Boolean,
      default: false },

    clearable: { // ?????????????????????????????????
      type: Boolean,
      default: true } },


  data: function data() {
    return {
      isShowList: false, // ?????????????????????
      selectText: '', // ?????????????????????
      activeIndex: -1, // ?????????????????????????????????
      isRotate: false, // ??????????????????????????????
      listTop__: 50 // ????????????top??????????????????????????????input????????????????????????
    };
  },
  // ??????????????????????????????????????????????????????????????????????????????
  watch: { // ???????????? ????????????????????????????????????????????????????????????mounted?????????????????????
    listShow: function listShow(newVal, oldVal) {
      this.onDataChange_listShow(newVal, oldVal);
    } },

  computed: {
    focusShowList__: function focusShowList__() {// ?????????????????????????????????????????????????????????
      if (this.focusShowList == null) {
        // ?????????????????? pc??????????????????




        return false;

      } else {
        return this.focusShowList;
      }
    },
    listBoxHeight__: function listBoxHeight__() {// ?????????????????????
      var itemHeight = 2; // ????????????????????????(em), ?????????2????????????
      return this.showItemNum * itemHeight;
    },
    showInput: function showInput() {// ?????????????????????
      return this.isCanInput && !this.disabled;
    },
    innerList: function innerList() {// ???????????????????????????
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
    this.switchMgr = new Switch(this.onListShow, this.onListHide); // ??????????????????
    this.onDataChange_listShow(this.listShow, null); // ?????? watch ?????????????????????????????????????????????????????????
    this.init(); //???????????????
  },
  beforeDestroy: function beforeDestroy() {
    _vue.default.__xfl_select.$off('open', this.onOtherXflSelectOpen);
  },
  methods: {
    onOtherXflSelectOpen: function onOtherXflSelectOpen(component) {//?????????????????????????????????????????????
      if (this.selectHideType === 'independent' || this.selectHideType === 'hideOthers') {
        return;
      }
      component !== this && this.switchMgr.close(100);
    },
    /************************** ??????????????? ****************************/
    //???????????????
    init: function init() {
      this.clearInput(); // ?????????????????????????????????????????????placeholder
      this.setInput(this.initValue); // ??????????????????????????????
      this.changeActiveIndex(this.initValue); // ?????????????????????????????????????????????
      this.getInputBoxHeight(); // ?????????????????????top???
    },

    // ??????????????????????????? px
    getInputBoxHeight: function getInputBoxHeight() {var _this = this;
      var component = this;



      getNodeInfo('.show-box', component, function (data) {
        if (data) {
          var trangleHeight = 6; //???????????????????????????????????????????????????(px)
          _this.listTop__ = data[0].height + trangleHeight;
        }
      });
    },
    /************************** ??????????????? ****************************/

    /************************** ?????? ****************************/
    getIndex: function getIndex(value) {// ?????????????????????
      var activeIndex = searchIndex(
      this.innerList, value, 'value');
      return activeIndex; // ????????????????????????-1
    },
    itemIsDisabled: function itemIsDisabled(index) {// ???????????????????????????????????????
      return this.innerList[index].disabled;
    },

    itemIsActive: function itemIsActive(index) {// ????????????????????????????????????(?????????)
      return index === this.activeIndex;
    },

    // listShow ????????????????????????????????????
    onDataChange_listShow: function onDataChange_listShow() {var newVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;var oldVal = arguments.length > 1 ? arguments[1] : undefined;
      newVal ? this.switchMgr.open() : this.switchMgr.close(100);
    },
    /************************** ?????? ****************************/


    /************************** ???????????????????????? ****************************/
    // ????????????????????????
    onFocus: function onFocus(event) {
      this.focusShowList__ && this.switchMgr.open();
      this.$emit('focus', event);
    },

    // ????????????????????????
    onBlur: function onBlur(event) {
      // ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
      this.focusShowList__ && this.switchMgr.close(100);
      this.$emit('blur', event);
    },

    //??????????????????????????????????????????????????????
    onUpperClick: function onUpperClick() {
      if (this.disabled) {
        return;
      }
      this.switchMgr.toggle('auto', -1, 100);
      this.$emit('input-click');
    },

    //???????????????????????????
    onClear: function onClear() {
      this.clearItemActive(); // ????????????????????????????????????
      this.clearInput(); // ???????????????????????????
      this.$emit('clear');
    },

    // ????????????????????????
    onInput: function onInput(event) {
      var inputVal = event.detail.value;
      this.changeActiveIndex(inputVal);
      this.$emit('input', event);
    },

    // ??????input??????????????????
    clearInput: function clearInput() {var placeholder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.placeholder = placeholder == null ? this.placeholder : placeholder;
      this.selectText = this.showInput ? '' : this.placeholder;
    },
    // ??????input??????????????????
    setInput: function setInput() {var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (text == null) {
        return;
      }
      this.selectText = text;
    },
    /************************** ???????????????????????? ****************************/


    /************************** ???????????????(??????/??????/??????) ****************************/

    /**
                                                                               * ??????????????????????????????????????????value, ?????????????????????????????????
                                                                               * ????????? 
                                                                               * 1. ?????????????????????????????????????????????????????????  
                                                                               * 2. ??????????????????????????????????????????????????????????????????????????????????????????  
                                                                               */
    changeActiveIndex: function changeActiveIndex(value_index) {//???????????????????????????
      if (value_index == null) {
        return;
      }
      var activeIndex = value_index,value = value_index;
      if (typeof value_index !== 'number') {//?????????????????????????????????
        activeIndex = this.getIndex(value); // ?????????????????????????????????
      } else {
        value = this.innerList[activeIndex].value;
      }
      if (activeIndex > -1) {
        !this.itemIsActive(activeIndex) && this.setItemActive(activeIndex, value);
      } else {
        this.clearItemActive();
      }
      this.setInput(value); // ?????????????????????
    },

    clearItemActive: function clearItemActive() {var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1; // ??????????????????
      if (index < 0) {// ????????????
        this.activeIndex = -1;
      }
    },
    setItemActive: function setItemActive(index, value) {//???????????????????????????????????????????????????
      if (this.itemIsDisabled(index)) {
        return;
      }
      this.activeIndex = index;
    },

    // ?????????????????????????????????
    onListClick: function onListClick() {

    },
    onClickItem: function onClickItem(index, value) {// ???????????????????????????
      if (this.itemIsDisabled(index)) {
        this.switchMgr.open(); // ?????????????????????????????????
        return;
      }
      this.switchMgr.close(100); // ???????????????????????????????????????????????????????????????
      if (this.disabled) {//????????????????????? ??? ????????????????????????
        return;
      }
      if (!this.itemIsActive(index)) {//???????????????????????????
        this.clearItemActive(); // ?????????????????????????????????
        this.setItemActive(index, value); // ??????????????????????????????
        this.$emit('change', { newVal: value, oldVal: this.selectText,
          index: index, orignItem: this.list[index] });

        this.setInput(value); // ?????????????????????
      }
    },
    onListHide: function onListHide() {//????????????????????????
      this.isRotate = false;
      this.isShowList = false;
      this.$emit('visible-change', false);
    },
    onListShow: function onListShow() {//????????????????????????
      this.isShowList = true;
      this.isRotate = true;
      this.$emit('visible-change', true);

      if (this.selectHideType === 'independent' || this.selectHideType === 'hideSelf') {
        return;
      }
      _vue.default.__xfl_select.$emit('open', this);
    }
    /************************** ???????????????(??????/??????/??????) ****************************/ } };



/************************** uniapp libs ****************************/

/**
                                                                       * ?????????web????????????
                                                                       * @public
                                                                       * @returns {boolean} true?????????????????????web????????????????????????false?????????web??????pc???
                                                                       */exports.default = _default2;
function isMobile() {
  try {// ???????????????window??????
    var reg = /iPhone|iPad|iPod|iOS|Android|SymbianOS|Windows Phone|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince/i;
    return reg.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}
/**
   * ?????????web???pc???
   * @public
   * @returns {boolean} true?????????????????????web????????????pc??????false?????????web???????????????
   */
function isPC() {
  try {// ???????????????window??????
    var reg = /iPhone|iPad|iPod|iOS|Android|SymbianOS|Windows Phone|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince/i;
    return !reg.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}
/**
   * ???????????????????????????
   * ??????:  
   * 1. ??????????????????????????????????????? ?????? import Vue from 'vue'  
   * 2. ????????????????????????????????????????????????, ????????????component?????????(h5???????????????????????????????????????????????????wx?????????????????????)
   * @public
   * @param {Object|string} options - ?????????????????????????????????????????????????????????selector
   *                         selector - dom?????????????????????????????????????????????: 
   * 							1. ID????????????'#the-id'
  							2. class??????????????????????????????????????????'.a-class.another-class'
  							3. ?????????????????????'.the-parent > .the-child'
  							4. ??????????????????'.the-ancestor .the-descendant'
  							5. ???????????????????????????????????????'.the-ancestor >>> .the-descendant'
  							6. ????????????????????????'#a-node, .some-other-nodes'
  							7. ?????? 'viewport' ????????????????????????????????????????????????window???
   * @param {function|component} [callback=null] - ????????????????????????????????????????????????????????????????????????????????????????????????, 
              ??????????????????????????????:   
  			// ???????????????????????????????????????,  
  			// ????????????options??????????????????????????????  
  			{  
  				id: '',         // String ????????? ID, ??????????????????id??????????????????(??????????????????????????????)  
  				dataset: null,  // Object ????????? dataset  
  				left: 0,        // Number ????????????????????????????????????(px)(page?????????????????????????????????)  
  				right: 0,       // Number ????????????????????????????????????(px)  
  				top: 0,         // Number ????????????????????????????????????(px)  
  				bottom: 0,      // Number ????????????????????????????????????(px)  
  				width: 0,       // Number ???????????????(px)  
  				height: 0,      // Number ???????????????(px)  
  				scrollLeft: 0,  // Number ???????????????????????????(px)  
  				scrollTop: 0,   // Number ???????????????????????????(px)  
  				context: {} || null,   // Object???????????????Context??????(???VideoContext???CanvasContext??????MapContext)  
  				...        // properties ??????????????????????????????computedStyle???????????????????????????  
  			}  
  			// ??????????????????????????????null  
   * @param {any} [thisObj=null] ????????????this, ????????????????????????????????????????????????
   * @return {undefined|promise} ?????????callback???????????????promise???????????????undefined  
   * @example
   * 1. ????????????????????????promise
   * getNodeInfo('#aa').then((data)=>{ console.log(data);});
   * 
   * 2. ??????????????????component, ??????promise
   * getNodeInfo('#aa', this).then((data)=>{ console.log(data);});
   * 
   * 3. ??????????????????callback, ??????undefined
   * getNodeInfo('#aa', (data)=>{ console.log(data);});
   * 
   * 4. ?????????????????????callback, ??????undefined
   * getNodeInfo({selector: '#aa', component: this}, (data)=>{ console.log(data);});
   */
function getNodeInfo()

















{var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$selector = _ref.selector,selector = _ref$selector === void 0 ? 'selector' : _ref$selector,_ref$component = _ref.component,component = _ref$component === void 0 ? null : _ref$component,_ref$attemptSpaceTime = _ref.attemptSpaceTime,attemptSpaceTime = _ref$attemptSpaceTime === void 0 ? 16 : _ref$attemptSpaceTime,_ref$attemptSpaceRate = _ref.attemptSpaceRate,attemptSpaceRate = _ref$attemptSpaceRate === void 0 ? 1.5 : _ref$attemptSpaceRate,_ref$totalAttemptNum = _ref.totalAttemptNum,totalAttemptNum = _ref$totalAttemptNum === void 0 ? 8 : _ref$totalAttemptNum,_ref$id = _ref.id,id = _ref$id === void 0 ? true : _ref$id,_ref$dataset = _ref.dataset,dataset = _ref$dataset === void 0 ? true : _ref$dataset,_ref$rect = _ref.rect,rect = _ref$rect === void 0 ? true : _ref$rect,_ref$size = _ref.size,size = _ref$size === void 0 ? true : _ref$size,_ref$scrollOffset = _ref.scrollOffset,scrollOffset = _ref$scrollOffset === void 0 ? true : _ref$scrollOffset,_ref$properties = _ref.properties,properties = _ref$properties === void 0 ? [] : _ref$properties,_ref$computedStyle = _ref.computedStyle,computedStyle = _ref$computedStyle === void 0 ? [] : _ref$computedStyle,_ref$context = _ref.context,context = _ref$context === void 0 ? true : _ref$context;var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // arguments ???????????????????????????????????????????????????????????????????????????????????????
  // ???????????????????????????????????????????????????????????????????????????
  var args = arguments;
  selector = typeof args[0] === 'string' ? args[0] : String(selector);
  if (typeof args[1] !== 'function') {
    component = args[1];callback = args[2];thisObj = args[3];
  }
  !component instanceof _vue.default && (component = null); //?????????????????????????????????

  // ????????? component ??????????????????????????????????????????wx??????????????????????????????
  var options = { selector: selector, attemptSpaceTime: attemptSpaceTime, totalAttemptNum: totalAttemptNum, attemptSpaceRate: attemptSpaceRate,
    id: id, dataset: dataset, rect: rect, size: size, scrollOffset: scrollOffset, properties: properties, computedStyle: computedStyle, context: context };

  var selectorQuery = uni.createSelectorQuery();
  component && selectorQuery.in(component);
  var nodesRef = selector === 'viewport' ? selectorQuery.selectViewport() : selectorQuery.selectAll(selector);
  nodesRef.fields(options); // ????????????????????????????????????

  var result; // ???????????????promise?????????????????????????????????h5????????????exec????????????????????????
  if (typeof callback !== 'function') {
    result = new Promise(function (resolve) {return callback = resolve;});
  }
  stepRunFunc(function (next, currNum) {
    selectorQuery.exec(function (_ref2) {var _ref3 = _slicedToArray(_ref2, 1),data = _ref3[0]; // ??????????????????????????????
      data && data.length === 0 && (data = null);
      data || totalAttemptNum <= currNum ? typeof callback === 'function' && callback.call(thisObj, data) : next(attemptSpaceTime);
      attemptSpaceTime = Math.round(attemptSpaceTime * attemptSpaceRate);
    });
  })(); // ??????????????????

  return result;
}
/************************** uniapp libs ****************************/

/************************** js libs ****************************/
/**
                                                                   * ???????????????????????????????????????
                                                                   * ?????????: ??????????????????????????????????????????
                                                                   * @class
                                                                   */var
Switch = /*#__PURE__*/function () {
  function Switch() {var onopen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var onclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;_classCallCheck(this, Switch);
    this.onopen = onopen; // ??????????????????
    this.onclose = onclose; // ??????????????????
    this.isOpen = false; // ???????????????????????????
  }_createClass(Switch, [{ key: "toggle", value: function toggle()
    {var toState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto'; //?????????????????????
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
    {var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;var cancelType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both'; // ??????
      this.change('open', delayTime, cancelType);
    } }, { key: "close", value: function close()
    {var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;var cancelType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both'; // ??????
      this.change('close', delayTime, cancelType);
    } }, { key: "cancel", value: function cancel()
    {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'both'; // ???????????????
      if (type === 'open') {
        clearTimeout(this.openTimer);this.openTimer = null;
      } else if (type === 'close') {
        clearTimeout(this.closeTimer);this.closeTimer = null;
      } else if (type === 'both') {
        clearTimeout(this.closeTimer);this.closeTimer = null;
        clearTimeout(this.openTimer);this.openTimer = null;
      }
    } }, { key: "change", value: function change(
    toState) {var _this2 = this;var delayTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;var cancelType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'both'; // ????????????????????????
      this.cancel(cancelType); // ???????????????
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
                              * ???????????????????????????????????????????????????, ?????????????????????????????????
                              * ??????: forEach  props ???????????????
                              * @public
                              * @param {Array} arr - ?????????????????????????????????????????????
                              * @param {any} searchVal - ??????????????? 
                              * @param {string|Array} [propPath=''] - ??????????????????????????? ??? 'aa.bb.cc' ??? ['aa', 'bb', 'cc']
                              * @param {function} [compareFunc=null] - ???????????? compareFunc(val, searchVal, arrElem, index, orignArr)
                              *                                        ???????????????????????????????????????
                              * @example
                              * 1. ???????????????
                              * searchIndex([1, 2, 3], 2); // => 1
                              * 
                              * 2. ??????????????????????????????
                              * searchIndex([1, 2, 3], '2', '', (val, searchVal)=>val==searchVal); // => 1
                              * 
                              * 3. ?????????????????????
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
   * ???????????????????????????????????????
   * ????????????forEach????????????: ?????????????????????????????????????????????????????????
   * ??????????????????????????????????????????????????????
   * @public
   * @param {object|Array} obj - ??????????????????
   * @param {function} func - ??????  func.call(thisObj, value, prop, obj);
   * @param {any} [thisObj=null] - ????????????this
   * @example
   * 1. forEach({a: 3, b: 4}, (val, prop, obj)=>{ // ??????????????????
   *     return false; //??????false ??????????????????
   * });
   * 
   * 2. forEach([3, 4], (val, index, obj)=>{ // ????????????
   *     return false; //??????false ??????????????????
   * });
   * 
   * 3. forEach({1: 3, 5: 10, a: 'aa', length: 20}, (val, index, obj)=>{ // ???????????????
   *     return false; //??????false ??????????????????
   * });
   */
function forEach(obj, func) {var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (obj == null || typeof obj === 'function' || typeof func !== 'function') {
    return obj;
  }

  //??????????????????????????????????????????????????????enumerable?????????
  var keys = Object.keys(obj);

  var length = obj.length;
  var isArrayLike = typeof length == 'number' && length > -1 && length % 1 == 0 && length <= 9007199254740991;

  //????????????????????????????????????????????????????????????
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

  // ?????????????????????????????????
  for (var _i2 = 0; _i2 < keys.length; _i2++) {
    if (func.call(thisObj, obj[keys[_i2]], keys[_i2], obj) === false) {break;}
  }
  return obj;
}

/**
   * ???????????????????????????????????? ??? ??????????????????
   * @public
   * @param {Object} obj - ??????, ????????????????????????????????????
   * @param {Array} propArr - ?????????????????????????????????????????????????????????
   * @param {any} [val=undefined]   -  ??????????????? ??????????????????????????????????????????
   * @param {Boolean} [fource=false]   - ????????????????????????????????????????????????????????????
   * @returns {any|undefined} ?????????????????????undefined, ?????????????????????????????????????????????????????????undefined
   * @example
   * 1. props({}, ['aa', 'bb', 'cc'], 5);  // => undefined ???????????????
   * 2. props({}, ['aa', 'bb', 'cc'], 5, true);  // => undefined  ???????????????????????????????????? {aa: {bb: {cc: 5} }}
   * 3. props({}, ['aa', 'bb', 'cc']);  // => undefined
   * 4. props({aa: {bb: 77}}, ['aa', 'bb']);  // => 77
   * 5. props({aa: 3}, ['aa', 'bb', 'cc'], 5);  // => undefined ???????????????
   * 6. props({aa: 3}, ['aa'], 5);  // => undefined  ????????? aa ?????????5
   * 7. props({aa: 3}, [], 5);  // => undefined ???????????????
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
  * ????????????????????????
  * ????????????: ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
  * @public
  * @param {function} callback - ?????????????????? callback.call(thisObj, next, currCount, timers)
  * @param {any} [thisObj=null] - callback??????this
  * @returns {function} ??????next?????????next????????????????????????????????????   
  * 					  {any} [delayTime=-1] - ????????????(ms)??????????????????callback??????
  * 											 ?????????NaN???Infinite??????????????????????????????????????????????????????
  * 					  {string} [type='both'] - ?????????next????????????????????????????????????next???????????????????????????????????????????????????
  * 						   				'new' - ???????????????????????????????????????
  * 						   				'old' - ???????????????????????????????????????
  * 						   				'both' - ???????????????
  * @example
  * 1. ??????????????????
  * stepRunFunc((next, currCount, timers)=>{
  * 		console.log('?????????' + currCount + '???');
  *      currCount <= 2 && next(2000);
  * })();
  * // => ?????????????????????????????????2s?????????????????????
  * 
  * 2. next()???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????next?????????????????????
  * stepRunFunc((next, currCount, timers)=>{
  * 		console.log('?????????' + currCount + '???');
  *      if(currCount <= 2 ){
  *          next(3000);
  *          setTimeout(()=>{next(1000, 'old')}, 1000); // ?????????next?????????????????????
  *      }
  * })();
  * // => ?????????????????????????????????3s?????????????????????
  */
function stepRunFunc(callback) {var thisObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var getDelayTime = function getDelayTime(delayTime) {// ??????delayTime?????????
    delayTime = parseInt(delayTime);
    if (isNaN(delayTime) || !isFinite(delayTime)) {
      delayTime = -1;
    }
    return delayTime;
  };
  var timers = []; // ????????????????????????????????????
  var clearTimer = function clearTimer(oneTimer) {// ???????????????
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
  var currCount = 0; // ??????callback??????????????????????????????
  var next = function next() {var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
    if (type === 'new') {// ????????????????????????next??????
      clearTimer();
    } else if (type === 'old' && timers.length > 0) {// ???????????????next?????????????????????next??????
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

/***/ 323:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/components/xfl-select/xfl-select.vue?vue&type=style&index=0&id=64567a38&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./xfl-select.vue?vue&type=style&index=0&id=64567a38&scoped=true&lang=scss& */ 324);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xfl_select_vue_vue_type_style_index_0_id_64567a38_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 324:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Documents/HBuilderProjects/shipping/components/xfl-select/xfl-select.vue?vue&type=style&index=0&id=64567a38&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 327:
/*!*******************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/bank/bank.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bank_vue_vue_type_template_id_9ebd0af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank.vue?vue&type=template&id=9ebd0af4&scoped=true& */ 328);
/* harmony import */ var _bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank.vue?vue&type=script&lang=js& */ 330);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ 332);
/* harmony import */ var _bank_vue_vue_type_style_index_1_id_9ebd0af4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank.vue?vue&type=style&index=1&id=9ebd0af4&lang=scss&scoped=true& */ 334);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs






/* normalize component */

var component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bank_vue_vue_type_template_id_9ebd0af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bank_vue_vue_type_template_id_9ebd0af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9ebd0af4",
  null,
  false,
  _bank_vue_vue_type_template_id_9ebd0af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/bank/bank.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 328:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/bank/bank.vue?vue&type=template&id=9ebd0af4&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_template_id_9ebd0af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bank.vue?vue&type=template&id=9ebd0af4&scoped=true& */ 329);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_template_id_9ebd0af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_template_id_9ebd0af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_template_id_9ebd0af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_template_id_9ebd0af4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 329:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/bank/bank.vue?vue&type=template&id=9ebd0af4&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 330:
/*!********************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/bank/bank.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bank.vue?vue&type=script&lang=js& */ 331);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 331:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/bank/bank.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 25));
































































































var _xflSelect = _interopRequireDefault(__webpack_require__(/*! @/components/xfl-select/xfl-select.vue */ 318));
var _pattern = __webpack_require__(/*! @/util/pattern.js */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var Multiselect = function Multiselect() {Promise.all(/*! require.ensure | node-modules/vue-multiselect/src/Multiselect */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/vue-multiselect/src/Multiselect")]).then((function () {return resolve(__webpack_require__(/*! @/node_modules/vue-multiselect/src/Multiselect.vue */ 1033));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};

var _self;
var graceChecker = __webpack_require__(/*! ../../js_sdk/graceui-dataChecker/graceChecker.js */ 301);var _default =

{
  data: function data() {
    return {

      //????????????
      isPerson: false,
      disabled: true,
      active: false,
      //??????????????????????????????
      bank_holder_tel: "",
      holder_name: "",
      bank_name: "",
      bank_placeholder: "?????????????????????",
      bank_account: "",
      array: [],
      index: 0,
      params: {
        the_step: 5,
        active_one_step: true,
        active_two_step: true,
        active_three_step: true,
        active_four_step: true,
        active_five_step: true,
        carrierBankcardCategory: 1 },

      params_bank: {},
      form: {},
      bank_list: [],
      bank_class_index: 0,
      list: [],
      list_code: [],

      value: null,
      options: [] };

  },
  components: {
    Multiselect: Multiselect },


  created: function created() {
    this.isPerson = uni.getStorageSync("in_personal_registering");


    //?????????????????????
    this.params_bank = uni.getStorageSync("params_bank");

    //????????????????????????
    this.getBankName();
    // ???????????????change
    this.userTypeChange();



    //?????????????????????params?????????????????????storage??????params,??????this.params ???{}
    this.params = this.params_bank || {};
    if (this.params_bank.bankcardAccount) {
      this.disabled = false;
      this.active = true;
    }
  },
  mounted: function mounted() {


    //???????????????
    if (this.isPerson) {
      this.holder_name = uni.getStorageSync("holder_name");
      this.params.holderName = this.holder_name;

      this.bank_holder_tel = uni.getStorageSync("holder_phone");
      this.params.holderPhone = this.bank_holder_tel;
    }

    this.bank_placeholder = this.params_bank.bank_name || "?????????????????????";

    this.bank_account = this.params_bank.bankcardAccount || "";


  },

  methods: {

    bindBankClassPickerChange: function bindBankClassPickerChange(e) {

      this.bank_class_index = e.target.value;
      this.params.carrierBankcardCategory = 1;
    },
    bindPickerChange: function bindPickerChange(e) {

      this.index = e.target.value;

      this.params.bankCode = this.list_code[this.index - 1];
    },
    getHolderName: function getHolderName(e) {
      this.holder_name = e.target.value;
      this.params.holderName = e.target.value;
      uni.setStorageSync("holder_name", this.holder_name);
    },
    //get the bank name list
    getBankName: function getBankName() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var res, resBankCategory, bankCode;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (

                  _this.$getRegistDicts("bank_code"));case 2:res = _context.sent;

                _this.array = res.data.data.map(function (e) {return e = e.dictLabel;});
                _this.array.unshift("?????????????????????");

                _this.options = res.data.data;
                _this.list_code = res.data.data.map(function (e) {return e = e.dictValue;});

                //this.list = res.data.data
                // ???????????????
                _context.next = 9;return _this.$getRegistDicts("carrier_bankcard_category");case 9:resBankCategory = _context.sent;

                _this.bank_list = resBankCategory.data.data.map(function (e) {return e = e.dictLabel;});

                //???????????????
                bankCode = _this.params_bank.bankCode || "";
                _this.index = _this.list_code.findIndex(function (value) {return value == bankCode;}) + 1;case 13:case "end":return _context.stop();}}}, _callee);}))();

    },



    getBankType: function getBankType(e) {

      this.params.carrierBankcardCategory = 1;

    },

    getBankList: function getBankList(e) {

      this.params.bankCode = e.newVal.dictLabel;

    },

    getBankAccount: function getBankAccount(e) {
      this.bank_account = e.detail.value;
      this.params.bankcardAccount = e.detail.value;
      this.disabled = false;
      this.active = true;

      if (this.bank_account.substr(0, 6) == "436742" ||
      this.bank_account.substr(0, 6) == "436745" ||
      this.bank_account.substr(0, 6) == "622280")
      {
        this.bank_name = "????????????";
      }

    },
    getBank: function getBank(e) {
      this.bank_name = e.dictLabel;
      this.params.bankCode = e.dictValue;
      this.params.bank_name = e.dictLabel;

    },
    getBankContact: function getBankContact(e) {
      this.bank_holder_tel = e.detail.value;
      this.params.holderPhone = e.detail.value;
      uni.setStorageSync("holder_phone", this.bank_holder_tel);
    },

    // ???????????????change
    userTypeChange: function userTypeChange() {
      //??????
      if (!this.isPerson) {//????????????
        this.params.carrierType = 2; //???????????????
        this.params.carrierCertificateType = "102"; // ????????????
        this.params.legalPersonCerType = "201"; //????????????
        this.params.driverCertificateType = "201"; //?????????????????????
      } else {
        this.params.carrierType = 1;
        this.params.carrierCertificateType = "201";

        this.params.driverIdNumber = this.params.carrierCertNum; // ?????????????????? = ???????????????
        this.params.driverPhone = this.params.phonenumber; // ??????????????? = ??????????????????
        //this.params.userName = this.params.phonenumber;          // ????????? = ??????????????????
        this.params.driverName = this.params.carrierName; // ???????????? = ???????????????
        this.params.idcardFront = this.params.carrierCardFront; // ?????????????????? = ???????????????
        this.params.idcardBack = this.params.carrierCardReverse; // ?????????????????? = ???????????????            
      }

    },

    formSubmit: function formSubmit(e) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var rule, formData, checkRes, params_phone, params_business, params_vehicle, params_license, params_bank, params_photos, form;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:

                //??????????????????
                rule = [
                { name: "cellphone",
                  checkType: "phoneno",

                  errorMsg: "????????????????????????" }];



                //??????????????????

                formData = e.detail.value;
                checkRes = graceChecker.check(formData, rule);if (!
                checkRes) {_context2.next = 7;break;}

                uni.showToast({ title: "????????????,???????????????!", icon: "none" });_context2.next = 10;break;case 7:



                uni.showToast({ title: graceChecker.error, icon: "none" });
                _this2.bank_holder_tel = "";return _context2.abrupt("return");case 10:if (!(




                _this2.params.holderName == null || _this2.params.holderName == "" || _this2.params.holderName.length < 1)) {_context2.next = 13;break;}
                uni.showToast({
                  title: "???????????????????????????, ?????????",
                  icon: "none" });return _context2.abrupt("return");case 13:



                //????????????????????????
                if (_this2.params.carrierBankcardCategory == null || _this2.params.carrierBankcardCategory == "" || _this2.params.carrierBankcardCategory.length < 1) {
                  _this2.params.carrierBankcardCategory = 1;
                }


                //????????????????????????
                if (!(_this2.params.bankCode == null || _this2.params.bankCode == "" || _this2.params.bankCode.length < 1)) {_context2.next = 17;break;}
                uni.showToast({
                  title: "?????????????????????, ?????????",
                  icon: "none" });return _context2.abrupt("return");case 17:if (!(





                _this2.params.bankcardAccount == null || _this2.params.bankcardAccount == "" || _this2.params.bankcardAccount.length < 1)) {_context2.next = 20;break;}
                uni.showToast({
                  title: "?????????????????????, ?????????",
                  icon: "none" });return _context2.abrupt("return");case 20:



                uni.setStorageSync("params_bank", _this2.params);
                // this.$emit('register_bank_params',this.params)	




                params_phone = uni.getStorageSync("params_phone");
                params_business = uni.getStorageSync("params_business");
                params_vehicle = uni.getStorageSync("params_vehicle");
                params_license = uni.getStorageSync("params_license");
                params_bank = uni.getStorageSync("params_bank");
                params_photos = uni.getStorageSync("params_photos");

                _this2.form = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, params_phone), params_business), params_photos),
                params_vehicle), params_license), params_bank);

                if (!_this2.isPerson) {//????????????
                  _this2.form.carrierType = 2; //???????????????
                  _this2.form.carrierCertificateType = "102"; // ????????????
                  _this2.form.legalPersonCerType = "201"; //????????????
                  _this2.form.driverCertificateType = "201"; //?????????????????????
                } else {
                  _this2.form.carrierType = 1;
                  _this2.form.carrierCertificateType = "201";
                  _this2.form.driverIdNumber = _this2.form.carrierCertNum; // ?????????????????? = ???????????????
                  _this2.form.driverPhone = _this2.form.phonenumber; // ??????????????? = ??????????????????
                  _this2.form.userName = _this2.form.phonenumber; // ????????? = ??????????????????
                  _this2.form.driverName = _this2.form.carrierName; // ???????????? = ???????????????
                  _this2.form.idcardFront = _this2.form.carrierCardFront; // ?????????????????? = ???????????????
                  _this2.form.idcardBack = _this2.form.carrierCardReverse; // ?????????????????? = ???????????????            					

                }

                //????????????
                _this2.form.legalPersonCerFront = uni.getStorageSync("legalPersonCerFront");
                _this2.form.legalPersonCerReverse = uni.getStorageSync("legalPersonCerReverse");
                _this2.form.carrierCardFront = uni.getStorageSync("carrierCardFront");
                _this2.form.carrierRoadTransportBusinessLicense = uni.getStorageSync("carrierRoadTransportBusinessLicense");
                _this2.form.vehicleLicensePhotoFirst = uni.getStorageSync("vehicleLicensePhotoFirst");
                _this2.form.vehicleLicensePhotoSecond = uni.getStorageSync("vehicleLicensePhotoSecond");
                _this2.form.vehicleRoadcertPhoto = uni.getStorageSync("vehicleRoadcertPhoto");
                _this2.form.trailerLicensePhotoFirst = uni.getStorageSync("trailerLicensePhotoFirst");
                _this2.form.peopleVehiclePhoto = uni.getStorageSync("peopleVehiclePhoto");
                _this2.form.idcardFront = uni.getStorageSync("idcardFront");
                _this2.form.idcardBack = uni.getStorageSync("idcardBack");
                _this2.form.drivingLicensePhotoFirst = uni.getStorageSync("drivingLicensePhotoFirst");
                _this2.form.qualificationCertPhoto = uni.getStorageSync("qualificationCertPhoto");
                _this2.form.carrierCardReverse = uni.getStorageSync("carrierCardReverse");


                form = _this2.form;

                form = JSON.stringify(form);case 45:case "end":return _context2.stop();}}}, _callee2);}))();



















































    },

    backLicense: function backLicense() {
      this.params.the_step = 4;
      this.params.active_one_step = true;
      this.params.active_two_step = true;
      this.params.active_three_step = true;
      this.params.active_four_step = true;
      this.params.active_five_step = false;

      uni.setStorageSync("params_bank", this.params);
      this.$emit('register_bank_params', this.params);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 334:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/bank/bank.vue?vue&type=style&index=1&id=9ebd0af4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_style_index_1_id_9ebd0af4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bank.vue?vue&type=style&index=1&id=9ebd0af4&lang=scss&scoped=true& */ 335);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_style_index_1_id_9ebd0af4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_style_index_1_id_9ebd0af4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_style_index_1_id_9ebd0af4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_style_index_1_id_9ebd0af4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_vue_vue_type_style_index_1_id_9ebd0af4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 335:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/bank/bank.vue?vue&type=style&index=1&id=9ebd0af4&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 794:
/*!**************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/main.js?{"page":"pages%2Fbank%2Fbank"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _bank = _interopRequireDefault(__webpack_require__(/*! ./pages/bank/bank.vue */ 327));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_bank.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ })

},[[794,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/bank/bank.js.map