(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/add_vehicle/add_vehicle"],{

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

/***/ 459:
/*!****************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/main.js?{"page":"pages%2Fadd_vehicle%2Fadd_vehicle"} ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _add_vehicle = _interopRequireDefault(__webpack_require__(/*! ./pages/add_vehicle/add_vehicle.vue */ 460));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_add_vehicle.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 460:
/*!*********************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/add_vehicle/add_vehicle.vue ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_vehicle.vue?vue&type=template&id=1aadc4b8&scoped=true& */ 461);
/* harmony import */ var _add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_vehicle.vue?vue&type=script&lang=js& */ 463);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add_vehicle.vue?vue&type=style&index=0&id=1aadc4b8&lang=scss&scoped=true& */ 465);
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

/***/ 461:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/add_vehicle/add_vehicle.vue?vue&type=template&id=1aadc4b8&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add_vehicle.vue?vue&type=template&id=1aadc4b8&scoped=true& */ 462);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_template_id_1aadc4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 462:
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
      return __webpack_require__.e(/*! import() | uni_modules/uni-number-box/components/uni-number-box/uni-number-box */ "uni_modules/uni-number-box/components/uni-number-box/uni-number-box").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue */ 1026))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. ????????????????????????????????????")
    console.error(
      "2. ???????????????????????? easycom ??????????????????https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. ?????????????????? easycom ????????????????????????????????? components ??????????????????"
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

/***/ 463:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/add_vehicle/add_vehicle.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add_vehicle.vue?vue&type=script&lang=js& */ 464);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 464:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/add_vehicle/add_vehicle.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 25));
































































































































































































































































































































































var _xflSelect = _interopRequireDefault(__webpack_require__(/*! @/components/xfl-select/xfl-select.vue */ 318));
var _pattern = __webpack_require__(/*! @/util/pattern.js */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}

var _self;var _default =

{
  data: function data() {
    var currentDate = this.getDate({
      format: true });


    return {
      //????????????
      isPerson: false,
      disabled: true,
      active: false,
      //????????????
      received_info: [],
      //???????????????
      plate_number: "",
      vehicleOwnName: "",
      //?????????
      vehicle_brand: "",
      //??????????????????
      vehicleRoadcertNo: "",
      vehicleLadenWeight: "",
      vehicleTonnage: "",
      params: {},


      //?????????????????????
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
      //?????????????????????????????????
      is_ordinary: false,
      plate_type_index: 1,
      plate_color_index: 0,
      list: [
      '??????'
      // '??????',
      // '??????',
      // '?????????',
      ],
      owner_type_index: 0,
      owner_type_list: [
      '??????',
      '??????'],

      plate_type_list: [
      '??????????????????',
      '??????????????????',
      '????????????'],


      car_items: [{
        value: 'ordinary',
        name: '????????????' },

      {
        value: 'semi-camion',
        name: '?????????' }],




      car_current: 1,
      energy_items: [{
        value: 'new',
        name: '?????????' },

      {
        value: 'old',
        name: '????????????' }],




      //?????????????????????????????????
      energy_current: 1,
      energy_type: "????????????",
      // ??????????????????
      vehicleTypeOptions: [],
      // ??????????????????
      vehicleOwnTypeOptions: [],
      // ????????????????????????
      vehicleEnergyTypeOptions: [],
      // ????????????????????????????????????
      vehicleEnergyTypeSendValue: [],
      //??????????????????????????????
      vehicleTypeSendValue: [],
      // ??????????????????
      vehicleCargoBoxLengthOptions: [],

      // ??????????????????????????????
      vehicleCargoBoxLengthSendValue: [],
      // ??????????????????
      vehicleCargoBoxTypeOptions: [],
      // ??????????????????????????????
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
    if (this.btn_title == "??????" || this.btn_title == "??????") {
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
    // ?????????????????? ????????????
    this.params.whetherNewEnergy = 2;


    //??????????????????
    if (this.btn_title == "??????" || this.btn_title == "??????") {
      //???????????????????????? 

      this.imgVehicleLicenseFirstUrl = this.received_info.vehicleLicensePhotoFirst;
      if (this.imgVehicleLicenseFirstUrl == '') {
        this.imgVehicleLicenseFirstUrl = "/static/vehicle_license.jpg";
      }
      //????????????
      this.imgPeopleVehicleUrl = this.received_info.peopleVehiclePhoto;
      if (this.imgPeopleVehicleUrl == '') {
        this.imgPeopleVehicleUrl = "/static/people_vehicle.jpg";
      }
      //?????????????????????
      this.imgTransportLicenseUrl = this.received_info.vehicleRoadcertPhoto;
      if (this.imgTransportLicenseUrl == '') {
        this.imgTransportLicenseUrl = "/static/TransportLicense.png";
      }
      //????????????????????????
      this.imgHangingCarPhotoUrl = this.received_info.trailerLicensePhotoFirst;
      if (this.imgHangingCarPhotoUrl == '') {
        this.imgHangingCarPhotoUrl = "/static/vehicle_license.jpg";
      }


      this.plate_number = this.received_info.vehiclePlateNumber;
      this.vehicleOwnName = this.received_info.vehicleOwnName;
      this.owner_type_index = this.received_info.vehicleOwnType;
      this.vehicle_brand = this.received_info.vehicleBrands;
      this.vehicleRoadcertNo = this.received_info.vehicleRoadcertNo;
      //?????????????????????
      if (this.received_info.vehicleRegisterDate) {
        this.driving_cert_register_date = this.received_info.vehicleRegisterDate || this.getDate({ format: true });
        this.driving_cert_register_date_has_input = true;
      }
      //?????????????????????
      if (this.received_info.vehicleIssueDate) {
        this.driving_cert_issuing_date = this.received_info.vehicleIssueDate || this.getDate({ format: true });
        this.driving_cert_issuing_date_has_input = true;
      }
      //?????????????????????
      if (this.received_info.vehicleLicenseExpireDate) {
        this.driving_cert_expiry_date = this.received_info.vehicleLicenseExpireDate || this.getDate({ format: true });
        this.driving_cert_expiry_date_has_input = true;
      }
      //?????????????????????
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
    //?????? date picker!!!!!
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
    //	???????????????						
    getVehicleOwnName: function getVehicleOwnName(e) {
      this.vehicleOwnName = e.target.value;
      this.params.vehicleOwnName = e.target.value;

    },
    //	??????????????????		
    bindPickerEnergyTypeChange: function bindPickerEnergyTypeChange(e) {

      this.energy_type_index = e.target.value;

      var vehicle_energy_type_index = this.energy_type_index;

      this.params.vehicleEnergyType = this.vehicleEnergyTypeSendValue[vehicle_energy_type_index - 1];

    },
    //????????????									
    bindPickerTypeChange: function bindPickerTypeChange(e) {

      this.owner_type_index = e.target.value;

      this.params.vehicleOwnType = this.owner_type_index;

    },

    //????????????
    bindPickerCarTypeChange: function bindPickerCarTypeChange(e) {

      this.car_type_index = e.target.value;

      var car_type_index = this.car_type_index;

      this.params.vehicleType = this.vehicleTypeSendValue[car_type_index - 1];


    },
    //???base64???????????????,??????identifying??????

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
    //????????????
    getDriverId: function getDriverId(e) {

      this.params.driverId = e.detail.value;

    },
    //????????????													
    getVehicleUserCharacter: function getVehicleUserCharacter(e) {

      this.params.vehicleUserCharacter = e.detail.value;

    },
    //?????????????????????
    getVehicleIssuingOrganizations: function getVehicleIssuingOrganizations(e) {

      this.params.vehicleIssuingOrganizations = e.detail.value;

    },

    getCarTypes: function getCarTypes() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var resCarTypes;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  _this.$getRegistDicts("iscm_vehicle_species"));case 2:resCarTypes = _context.sent;case 3:case "end":return _context.stop();}}}, _callee);}))();

    },
    //????????????
    getVehicleOwnTypeOptions: function getVehicleOwnTypeOptions() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var vehicleOwnTypeOptions;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  _this2.$getRegistDicts("vehicle_own_type"));case 2:vehicleOwnTypeOptions = _context2.sent;
                _this2.vehicleOwnTypeOptions = vehicleOwnTypeOptions.data.data.map(function (e) {return e.dictLabel;});

                _this2.owner_type_list = _this2.vehicleOwnTypeOptions;
                _this2.owner_type_list.unshift("?????????????????????");case 6:case "end":return _context2.stop();}}}, _callee2);}))();
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
                _this5.energy_type_list.unshift("???????????????????????????");

                _this5.vehicleEnergyTypeSendValue = vehicleEnergyTypeOptions.data.data.map(function (e) {return e.dictValue;});

                vehicleEnergyType = _this5.received_info.vehicleEnergyType;
                _this5.energy_type_index = _this5.vehicleEnergyTypeSendValue.findIndex(function (value) {return value == vehicleEnergyType;}) + 1;case 9:case "end":return _context5.stop();}}}, _callee5);}))();

    },
    // ??????????????????
    getVehicleTypeOptions: function getVehicleTypeOptions() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var vehicleTypeOptions, vehicleType;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (
                  _this6.$getRegistDicts("vehicle_type"));case 2:vehicleTypeOptions = _context6.sent;
                _this6.vehicleTypeOptions = vehicleTypeOptions.data.data.map(function (e) {return e.dictLabel;});
                _this6.car_type_list = _this6.vehicleTypeOptions;
                _this6.car_type_list.unshift("?????????????????????");

                _this6.vehicleTypeSendValue = vehicleTypeOptions.data.data.map(function (e) {return e.dictValue;});

                vehicleType = _this6.received_info.vehicleType;

                _this6.car_type_index = _this6.vehicleTypeSendValue.findIndex(function (value) {return value == vehicleType;}) + 1;case 9:case "end":return _context6.stop();}}}, _callee6);}))();

    },
    //????????????
    getVehicleCargoBoxLengthOptions: function getVehicleCargoBoxLengthOptions() {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var vehicleCargoBoxLengthOptions, cargoBoxLength;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return (
                  _this7.$getRegistDicts("vehicle_length"));case 2:vehicleCargoBoxLengthOptions = _context7.sent;

                _this7.vehicleCargoBoxLengthOptions = vehicleCargoBoxLengthOptions;
                _this7.vehicleCargoBoxLengthOptions = _this7.vehicleCargoBoxLengthOptions.data.data.map(function (e) {return e.dictLabel;});
                _this7.box_length_list = _this7.vehicleCargoBoxLengthOptions;
                _this7.box_length_list.unshift("?????????????????????");

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
                _this8.box_type_list.unshift("?????????????????????");

                cargoBoxType = _this8.received_info.cargoBoxType;

                _this8.box_type_index = _this8.vehicleCargoBoxTypeSendValue.findIndex(function (value) {return value == cargoBoxType;}) + 1;case 10:case "end":return _context8.stop();}}}, _callee8);}))();
    },

    radioEnergyChange: function radioEnergyChange(e) {

      if (e.target.value === "new") {
        this.energy_type = "?????????";
        this.params.whetherNewEnergy = 1;
      } else {
        this.energy_type = "????????????";
        // ?????????????????? ????????????
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
    //??????????????????????????????
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
                    title: "???????????????????????????,??????????????????",
                    icon: "none" });

                } else {
                  uni.showToast({
                    title: "??????????????????????????????,????????????",
                    icon: "none" });

                }case 6:case "end":return _context9.stop();}}}, _callee9);}))();

    },

    getCarBrand: function getCarBrand(e) {
      this.vehicle_brand = e.detail.value;
      this.params.vehicleBrands = e.detail.value;

    },
    getPlateColor: function getPlateColor(e) {

      if (e.newVal == "??????") {
        this.params.vehiclePlateColor = "2";
      }

    },

    bindDateChange: function bindDateChange(e) {
      //?????????????????????
      if (e.currentTarget.dataset.index == "driving_cert_register_date") {
        this.driving_cert_register_date = e.target.value;
        this.params.vehicleRegisterDate = this.driving_cert_register_date;
        this.driving_cert_register_date_has_input = true;
      } else if (e.currentTarget.dataset.index == "driving_cert_issuing_date") {
        //?????????????????????
        this.driving_cert_issuing_date = e.target.value;
        this.params.vehicleIssueDate = this.driving_cert_issuing_date;
        this.driving_cert_issuing_date_has_input = true;
      } else if (e.currentTarget.dataset.index == "driving_cert_expiry_date") {
        //?????????????????????
        this.driving_cert_expiry_date = e.target.value;
        this.params.vehicleLicenseExpireDate = this.driving_cert_expiry_date;
        this.driving_cert_expiry_date_has_input = true;
      } else if (e.currentTarget.dataset.index == "road_cert_expiry_date") {
        //???????????????????????????
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
        sizeType: ['original', 'compressed'], //?????????????????????????????????????????????????????????
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
                title: "????????????" });

            } });



        } });


    },



    uploadDraggingCarPhoto: function uploadDraggingCarPhoto() {
      _self = this;

      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], //?????????????????????????????????????????????????????????
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
                title: "????????????" });


              //?????????????????? ??????????????????
              _self.disabled = false;
              _self.active = true;

            } });



        } });


    },
    uploadDraggingTransportPhoto: function uploadDraggingTransportPhoto() {
      _self = this;

      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], //?????????????????????????????????????????????????????????
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
                title: "????????????" });


              //?????????????????? ??????????????????
              _self.disabled = false;
              _self.active = true;

            } });




        } });


    },



    cancelHangingCar: function cancelHangingCar() {
      this.imgHangingCarPhotoUrl = "/static/vehicle_license.jpg",
      setTimeout(function () {
        uni.showToast({
          title: "????????????????????????????????????",
          icon: "none" });

      }, 500);
      this.tachar_hanging_car = false;
    },

    cancelDraggingCar: function cancelDraggingCar() {
      this.imgDraggingCarPhotoUrl = "/static/id-front.png",
      setTimeout(function () {
        uni.showToast({
          title: "????????????????????????????????????",
          icon: "none" });

      }, 500);
      this.tachar_dragging_car = false;
    },
    cancelDraggingTransport: function cancelDraggingTransport() {
      this.imgDraggingTransportPhotoUrl = "/static/id-front.png",
      setTimeout(function () {
        uni.showToast({
          title: "????????????????????????????????????",
          icon: "none" });

      }, 500);
      this.tachar_dragging_transport = false;
    },

    cancelDriverLicense: function cancelDriverLicense() {
      this.imgDriverLicenseUrl = "/static/id-front.png",
      setTimeout(function () {
        uni.showToast({
          title: "????????????????????????????????????",
          icon: "none" });

      }, 500);
      this.tachar_driver_license = false;
    },

    cancelTransportLicense: function cancelTransportLicense() {
      this.imgTransportLicenseUrl = "/static/TransportLicense.png";
      setTimeout(function () {
        uni.showToast({
          title: "????????????????????????????????????",
          icon: "none" });

      }, 500);
      this.tachar_transport_license = false;
    },

    cancelVehicleLicenseFirst: function cancelVehicleLicenseFirst() {
      this.imgVehicleLicenseFirstUrl = "/static/vehicle_license.jpg",
      setTimeout(function () {
        uni.showToast({
          title: "????????????????????????????????????",
          icon: "none" });

      }, 500);
      this.tachar_vehicle_license_first = false;
    },

    cancelVehicleLicenseSecond: function cancelVehicleLicenseSecond() {
      this.imgVehicleLicenseSecondUrl = "/static/id-front.png",
      setTimeout(function () {
        uni.showToast({
          title: "????????????????????????????????????",
          icon: "none" });

      }, 500);
      this.tachar_vehicle_license_second = false;
    },

    cancelPeopleVehicle: function cancelPeopleVehicle() {
      this.imgPeopleVehicleUrl = "/static/people_vehicle.jpg",
      setTimeout(function () {
        uni.showToast({
          title: "????????????????????????????????????",
          icon: "none" });

      }, 500);
      this.tachar_people_vehicle = false;
    },

    goQuery: function goQuery() {







    },


    formSubmit: function formSubmit(e) {var _this11 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16() {var car_no, regExp, regExpNewEnergy, regExpNOTNewEnergy, authorization, form, res, modify_params, modify_received_info, modify_form, resEdit;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!(

                _this11.btn_title == "??????")) {_context16.next = 89;break;}

                //????????????????????????????????????
                _this11.params.vehicleLicensePhotoFirst = uni.getStorageSync("vehicleLicensePhotoFirst");
                if (_this11.params.vehicleLicensePhotoFirst == null || _this11.params.vehicleLicensePhotoFirst == "" || _this11.params.vehicleLicensePhotoFirst.length < 1) {
                  uni.showToast({
                    title: "?????????????????????????????????",
                    icon: "none" });

                }
                //?????????????????????????????????
                _this11.params.vehicleRoadcertPhoto = uni.getStorageSync("vehicleRoadcertPhoto");
                if (_this11.params.vehicleRoadcertPhoto == null || _this11.params.vehicleRoadcertPhoto == "" || _this11.params.vehicleRoadcertPhoto.length < 1) {
                  uni.showToast({
                    title: "????????????????????????",
                    icon: "none" });

                }
                //???????????????????????????
                if (_this11.params.whetherNewEnergy == null || _this11.params.whetherNewEnergy == "" || _this11.params.whetherNewEnergy.length < 1) {
                  _this11.params.whetherNewEnergy = 2;
                }

                //????????????????????????
                if (_this11.params.vehicleSpecies == null || _this11.params.vehicleSpecies == "" || _this11.params.vehicleSpecies.length < 1) {
                  _this11.params.vehicleSpecies = 303;
                }

                //????????????????????????
                if (_this11.params.vehiclePlateType == null || _this11.params.vehiclePlateType == "" || _this11.params.vehiclePlateType.length < 1) {
                  _this11.params.vehiclePlateType = "02";
                }

                //????????????????????????
                if (_this11.params.vehiclePlateColor == null || _this11.params.vehiclePlateColor == "" || _this11.params.vehiclePlateColor.length < 1) {
                  _this11.params.vehiclePlateColor = "2";
                }


                car_no = _this11.params.vehiclePlateNumber;
                //?????????????????????
                regExp = /^([???????????????????????????????????????????????????????????????????????????????????????????????????A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[???????????????????????????????????????????????????????????????????????????????????????????????????A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9???????????????]{1})$/;
                //??????????????????????????????
                regExpNewEnergy = /^([???????????????????????????????????????????????????????????????????????????????????????????????????A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF])))$/;
                //?????????????????????????????????
                regExpNOTNewEnergy = /^([???????????????????????????????????????????????????????????????????????????????????????????????????A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9???????????????]{1})$/;if (

                regExp.test(car_no)) {_context16.next = 19;break;}
                uni.showToast({
                  title: "??????????????????",
                  icon: "none" });

                _this11.plate_num = "";return _context16.abrupt("return");case 19:if (!


                regExpNewEnergy.test(car_no)) {_context16.next = 23;break;}
                if (_this11.energy_type == "?????????") {


                  uni.setStorageSync("params_vehicle", _this11.params);
                  _this11.$emit('register_vehicle_params', _this11.params);
                } else {
                  uni.showToast({
                    title: "???????????????????????????????????????????????????",
                    icon: "none" });


                }_context16.next = 32;break;case 23:if (!

                regExpNOTNewEnergy.test(car_no)) {_context16.next = 32;break;}if (!(
                _this11.energy_type == "????????????")) {_context16.next = 29;break;}


                uni.setStorageSync("params_vehicle", _this11.params);
                _this11.$emit('register_vehicle_params', _this11.params);_context16.next = 32;break;case 29:


                uni.showToast({
                  title: "??????????????????????????????????????????????????????",
                  icon: "none" });

                _this11.plate_num = "";return _context16.abrupt("return");case 32:if (!(




                _this11.params.cargoBoxType == null || _this11.params.cargoBoxType == "" || _this11.params.cargoBoxType.length < 1)) {_context16.next = 35;break;}
                uni.showToast({
                  title: "?????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 35:if (!(





                _this11.params.vehicleAxlenum == null || _this11.params.vehicleAxlenum == "" || _this11.params.vehicleAxlenum.length < 1)) {_context16.next = 38;break;}
                uni.showToast({
                  title: "??????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 38:if (!(





                _this11.params.vehicleBrands == null || _this11.params.vehicleBrands == "" || _this11.params.vehicleBrands.length < 1)) {_context16.next = 41;break;}
                uni.showToast({
                  title: "?????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 41:if (!(





                _this11.params.vehicleEnergyType == null || _this11.params.vehicleEnergyType == "" || _this11.params.vehicleEnergyType.length < 1)) {_context16.next = 44;break;}
                uni.showToast({
                  title: "???????????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 44:if (!(






                _this11.params.vehicleLadenWeight < 4.5)) {_context16.next = 60;break;}if (!(

                _this11.params.vehicleIssueDate == null || _this11.params.vehicleIssueDate == "" || _this11.params.vehicleIssueDate.length < 1)) {_context16.next = 48;break;}
                uni.showToast({
                  title: "??????????????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 48:if (!(




                _this11.params.vehicleIssuingOrganizations == null || _this11.params.vehicleIssuingOrganizations == "" || _this11.params.vehicleIssuingOrganizations.length < 1)) {_context16.next = 51;break;}
                uni.showToast({
                  title: "?????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 51:if (!(




                _this11.params.vehicleRegisterDate == null || _this11.params.vehicleRegisterDate == "" || _this11.params.vehicleRegisterDate.length < 1)) {_context16.next = 54;break;}
                uni.showToast({
                  title: "??????????????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 54:if (!(





                _this11.params.vehicleUserCharacter == null || _this11.params.vehicleUserCharacter == "" || _this11.params.vehicleUserCharacter.length < 1)) {_context16.next = 57;break;}
                uni.showToast({
                  title: "?????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 57:if (!(





                _this11.params.vehicleVincode == null || _this11.params.vehicleVincode == "" || _this11.params.vehicleVincode.length < 1)) {_context16.next = 60;break;}
                uni.showToast({
                  title: "???????????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 60:if (!(






                _this11.params.vehicleLicenseExpireDate == null || _this11.params.vehicleLicenseExpireDate == "" || _this11.params.vehicleLicenseExpireDate.length < 1)) {_context16.next = 63;break;}
                uni.showToast({
                  title: "??????????????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 63:if (!(





                _this11.params.vehicleRoadcertExpireDate == null || _this11.params.vehicleRoadcertExpireDate == "" || _this11.params.vehicleRoadcertExpireDate.length < 1)) {_context16.next = 66;break;}
                uni.showToast({
                  title: "??????????????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 66:if (!(






                _this11.params.vehicleLadenWeight == null || _this11.params.vehicleLadenWeight == "" || _this11.params.vehicleLadenWeight.length < 1)) {_context16.next = 69;break;}
                uni.showToast({
                  title: "????????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 69:if (!(





                _this11.params.vehicleTonnage == null || _this11.params.vehicleTonnage == "" || _this11.params.vehicleTonnage.length < 1)) {_context16.next = 72;break;}
                uni.showToast({
                  title: "????????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 72:if (!(





                _this11.params.vehicleOwnName == null || _this11.params.vehicleOwnName == "" || _this11.params.vehicleOwnName.length < 1)) {_context16.next = 75;break;}
                uni.showToast({
                  title: "????????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 75:if (!(





                _this11.params.vehicleOwnType == null || _this11.params.vehicleOwnType == "" || _this11.params.vehicleOwnType.length < 1)) {_context16.next = 78;break;}
                uni.showToast({
                  title: "?????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 78:if (!(






                _this11.params.vehicleRoadcertNo == null || _this11.params.vehicleRoadcertNo == "" || _this11.params.vehicleRoadcertNo.length < 1)) {_context16.next = 81;break;}
                uni.showToast({
                  title: "???????????????????????????, ?????????",
                  icon: "none" });return _context16.abrupt("return");case 81:




                authorization = uni.getStorageSync("token");
                form = _this11.params;_context16.next = 85;return (



                  _this11.$request({
                    url: "/app/vehicle/add",
                    method: "POST",
                    data: form,
                    header: {
                      Authorization: authorization } }));case 85:res = _context16.sent;





                if (res.data.msg == "????????????") {
                  uni.showToast({
                    title: res.data.msg });


                  setTimeout(function () {
                    uni.navigateTo({
                      url: "/pages/vehicle_list/vehicle_list" });

                  }, 800);
                } else {
                  uni.showToast({
                    title: res.data.msg,
                    icon: "none" });

                }
                //"??????"????????????
                _context16.next = 99;break;case 89:if (!(_this11.btn_title == "??????")) {_context16.next = 99;break;}
                authorization = uni.getStorageSync("token");
                modify_params = _this11.params;
                modify_received_info = _this11.received_info;
                modify_form = {};
                Object.assign(modify_form, modify_params, modify_received_info);_context16.next = 97;return (

                  _this11.$request({
                    url: "/app/vehicle/edit",
                    method: "PUT",
                    data: modify_form,
                    header: {
                      Authorization: authorization } }));case 97:resEdit = _context16.sent;





                if (resEdit.data.msg == "????????????") {
                  uni.showToast({
                    title: resEdit.data.msg });


                  setTimeout(function () {
                    uni.navigateTo({
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

/***/ 465:
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/add_vehicle/add_vehicle.vue?vue&type=style&index=0&id=1aadc4b8&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add_vehicle.vue?vue&type=style&index=0&id=1aadc4b8&lang=scss&scoped=true& */ 466);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_vehicle_vue_vue_type_style_index_0_id_1aadc4b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 466:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Documents/HBuilderProjects/shipping/pages/add_vehicle/add_vehicle.vue?vue&type=style&index=0&id=1aadc4b8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[459,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/add_vehicle/add_vehicle.js.map