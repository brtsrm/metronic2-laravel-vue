(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_pages_vue-bootstrap_ListGroup_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/content/Card.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/content/Card.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KTCard",
  props: {
    /**
     * String title
     */
    title: String,

    /**
     * Set card head size. Eg. md, lg, sm, etc.
     */
    headSize: String,

    /**
     * Set card to fluid
     */
    fluidHeight: Boolean,

    /**
     * Set card to fluid in half
     */
    fluidHalfHeight: Boolean,

    /**
     * Set overlay head
     */
    headOverlay: Boolean,

    /**
     * Set extra class for main card
     */
    cardClass: String,

    /**
     * Set extra class for card head
     */
    headClass: String,

    /**
     * Set extra class for card body
     */
    bodyClass: String,

    /**
     * Set card body to fit
     */
    bodyFit: Boolean,

    /**
     * Set card body to fluid
     */
    bodyFluid: Boolean,

    /**
     * Code examples
     */
    example: Boolean
  },
  components: {},
  methods: {},
  computed: {
    classes: function classes() {
      var cls = {
        "example example-compact": this.example,
        "height-fluid": this.fluidHeight,
        "height-fluid-half": this.fluidHalfHeight,
        "head-overlay": this.headOverlay
      };
      cls[this.headSizeClass] = this.headSizeClass; // append extra classes

      if (this.cardClass) {
        cls[this.cardClass] = true;
      }

      return cls;
    },
    hasTitleSlot: function hasTitleSlot() {
      return !!this.$slots["title"];
    },
    hasFootSlot: function hasFootSlot() {
      return !!this.$slots["foot"];
    },
    headSizeClass: function headSizeClass() {
      if (this.headSize) {
        return "head-".concat(this.headSize);
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/content/CodePreview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/content/CodePreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue */ "./resources/js/view/content/Card.vue");
/* harmony import */ var _layout_extended_examples_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/extended/examples.js */ "./resources/js/layout/extended/examples.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KTCodePreview",
  props: {
    title: String
  },
  data: function data() {
    return {
      tabIndex: 0,
      isOpen: false
    };
  },
  components: {
    KTCard: _Card_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {
    var _this = this;

    // init example codes
    this.$nextTick(function () {
      _layout_extended_examples_js__WEBPACK_IMPORTED_MODULE_1__.default.init([_this.$el]);

      var hljs = _this.$el.querySelectorAll(".hljs");

      hljs.forEach(function (hl) {
        hl.classList.add("language-".concat(hl.classList[1]));
        hl.classList.remove("hljs");
      });
    });
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab: function setActiveTab(event) {
      // get all tab links
      var tab = event.target.closest('[role="tablist"]');
      var links = tab.querySelectorAll('[data-toggle="tab"]'); // remove active tab links

      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      } // set current active tab


      event.target.classList.add("active"); // set clicked tab index to bootstrap tab

      this.tabIndex = parseInt(event.target.getAttribute("data-tab"));
    }
  },
  computed: {
    /**
     * Check if has title
     * @returns {boolean}
     */
    hasTitleSlot: function hasTitleSlot() {
      return !!this.$slots["title"];
    },

    /**
     * Check if code only has one, exclude the tabs
     * @returns {boolean}
     */
    hasSingleCodeType: function hasSingleCodeType() {
      var _this2 = this;

      var exist = 0;
      ["html", "js", "scss"].forEach(function (type) {
        if (_this2.$slots.hasOwnProperty(type)) {
          exist++;
        }
      });
      return exist === 1;
    },

    /**
     * Custom generate codes
     * @returns {boolean}
     */
    hasGeneralCode: function hasGeneralCode() {
      return !!this.$slots["code"];
    },

    /**
     * Check if has JS code slot
     * @returns {boolean}
     */
    hasJsCode: function hasJsCode() {
      return !!this.$slots["js"];
    },

    /**
     * Check if has SCSS code slot
     * @returns {boolean}
     */
    hasScssCode: function hasScssCode() {
      return !!this.$slots["scss"];
    },

    /**
     * Check if has HTML code slot
     * @returns {boolean}
     */
    hasHtmlCode: function hasHtmlCode() {
      return !!this.$slots["html"];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/ListGroup.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/ListGroup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../view/content/CodePreview.vue */ "./resources/js/view/content/CodePreview.vue");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/store/breadcrumbs.module */ "./resources/js/core/services/store/breadcrumbs.module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      code1: {
        html: "<b-list-group>\n  <b-list-group-item>Cras justo odio</b-list-group-item>\n  <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>\n  <b-list-group-item>Morbi leo risus</b-list-group-item>\n  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>\n  <b-list-group-item>Vestibulum at eros</b-list-group-item>\n</b-list-group>"
      },
      code2: {
        html: "<b-list-group>\n  <b-list-group-item>Cras justo odio</b-list-group-item>\n  <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>\n  <b-list-group-item>Morbi leo risus</b-list-group-item>\n  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>\n  <b-list-group-item>Vestibulum at eros</b-list-group-item>\n</b-list-group>"
      },
      code3: {
        html: "<b-list-group>\n  <b-list-group-item disabled>Cras justo odio</b-list-group-item>\n  <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>\n  <b-list-group-item>Morbi leo risus</b-list-group-item>\n  <b-list-group-item disabled>Porta ac consectetur ac</b-list-group-item>\n  <b-list-group-item>Vestibulum at eros</b-list-group-item>\n</b-list-group>"
      },
      code4: {
        html: "<b-list-group>\n  <b-list-group-item href=\"#some-link\">Awesome link</b-list-group-item>\n  <b-list-group-item href=\"#\" active>Link with active state</b-list-group-item>\n  <b-list-group-item href=\"#\">Action links are easy</b-list-group-item>\n  <b-list-group-item href=\"#foobar\" disabled>Disabled link</b-list-group-item>\n</b-list-group>"
      },
      code5: {
        html: "<b-list-group>\n  <b-list-group-item href=\"#\">Default list group item</b-list-group-item>\n  <b-list-group-item href=\"#\" variant=\"primary\">Primary list group item</b-list-group-item>\n  <b-list-group-item href=\"#\" variant=\"secondary\">Secondary list group item</b-list-group-item>\n  <b-list-group-item href=\"#\" variant=\"success\">Success list group item</b-list-group-item>\n  <b-list-group-item href=\"#\" variant=\"danger\">Danger list group item</b-list-group-item>\n  <b-list-group-item href=\"#\" variant=\"warning\">Warning list group item</b-list-group-item>\n  <b-list-group-item href=\"#\" variant=\"info\">Info list group item</b-list-group-item>\n  <b-list-group-item href=\"#\" variant=\"light\">Light list group item</b-list-group-item>\n  <b-list-group-item href=\"#\" variant=\"dark\">Dark list group item</b-list-group-item>\n</b-list-group>"
      },
      code6: {
        html: "<b-list-group>\n  <b-list-group-item class=\"d-flex justify-content-between align-items-center\">\n    Cras justo odio\n    <b-badge variant=\"primary\" pill>14</b-badge>\n  </b-list-group-item>\n\n  <b-list-group-item class=\"d-flex justify-content-between align-items-center\">\n    Dapibus ac facilisis in\n    <b-badge variant=\"primary\" pill>2</b-badge>\n  </b-list-group-item>\n\n  <b-list-group-item class=\"d-flex justify-content-between align-items-center\">\n    Morbi leo risus\n    <b-badge variant=\"primary\" pill>1</b-badge>\n  </b-list-group-item>\n</b-list-group>"
      }
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.SET_BREADCRUMB, [{
      title: "Vue Bootstrap",
      route: "alert"
    }, {
      title: "List Group"
    }]);
  }
});

/***/ }),

/***/ "./resources/js/view/content/Card.vue":
/*!********************************************!*\
  !*** ./resources/js/view/content/Card.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_4482afa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=4482afa2& */ "./resources/js/view/content/Card.vue?vue&type=template&id=4482afa2&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/view/content/Card.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Card_vue_vue_type_template_id_4482afa2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Card_vue_vue_type_template_id_4482afa2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/content/Card.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/view/content/CodePreview.vue":
/*!***************************************************!*\
  !*** ./resources/js/view/content/CodePreview.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CodePreview_vue_vue_type_template_id_02638ef9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodePreview.vue?vue&type=template&id=02638ef9& */ "./resources/js/view/content/CodePreview.vue?vue&type=template&id=02638ef9&");
/* harmony import */ var _CodePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodePreview.vue?vue&type=script&lang=js& */ "./resources/js/view/content/CodePreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CodePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CodePreview_vue_vue_type_template_id_02638ef9___WEBPACK_IMPORTED_MODULE_0__.render,
  _CodePreview_vue_vue_type_template_id_02638ef9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/content/CodePreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/vue-bootstrap/ListGroup.vue":
/*!*************************************************************!*\
  !*** ./resources/js/view/pages/vue-bootstrap/ListGroup.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListGroup_vue_vue_type_template_id_1a605502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListGroup.vue?vue&type=template&id=1a605502& */ "./resources/js/view/pages/vue-bootstrap/ListGroup.vue?vue&type=template&id=1a605502&");
/* harmony import */ var _ListGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListGroup.vue?vue&type=script&lang=js& */ "./resources/js/view/pages/vue-bootstrap/ListGroup.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ListGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ListGroup_vue_vue_type_template_id_1a605502___WEBPACK_IMPORTED_MODULE_0__.render,
  _ListGroup_vue_vue_type_template_id_1a605502___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/vue-bootstrap/ListGroup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/view/content/Card.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/view/content/Card.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/content/Card.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/view/content/CodePreview.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/view/content/CodePreview.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CodePreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/content/CodePreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/view/pages/vue-bootstrap/ListGroup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/view/pages/vue-bootstrap/ListGroup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/ListGroup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/view/content/Card.vue?vue&type=template&id=4482afa2&":
/*!***************************************************************************!*\
  !*** ./resources/js/view/content/Card.vue?vue&type=template&id=4482afa2& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_4482afa2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_4482afa2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_4482afa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=template&id=4482afa2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/content/Card.vue?vue&type=template&id=4482afa2&");


/***/ }),

/***/ "./resources/js/view/content/CodePreview.vue?vue&type=template&id=02638ef9&":
/*!**********************************************************************************!*\
  !*** ./resources/js/view/content/CodePreview.vue?vue&type=template&id=02638ef9& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodePreview_vue_vue_type_template_id_02638ef9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodePreview_vue_vue_type_template_id_02638ef9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodePreview_vue_vue_type_template_id_02638ef9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CodePreview.vue?vue&type=template&id=02638ef9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/content/CodePreview.vue?vue&type=template&id=02638ef9&");


/***/ }),

/***/ "./resources/js/view/pages/vue-bootstrap/ListGroup.vue?vue&type=template&id=1a605502&":
/*!********************************************************************************************!*\
  !*** ./resources/js/view/pages/vue-bootstrap/ListGroup.vue?vue&type=template&id=1a605502& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_template_id_1a605502___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_template_id_1a605502___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_template_id_1a605502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListGroup.vue?vue&type=template&id=1a605502& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/ListGroup.vue?vue&type=template&id=1a605502&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/content/Card.vue?vue&type=template&id=4482afa2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/content/Card.vue?vue&type=template&id=4482afa2& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card card-custom gutter-b", class: _vm.classes },
    [
      _vm.hasTitleSlot || _vm.title
        ? _c("div", { staticClass: "card-header", class: _vm.headClass }, [
            _c(
              "div",
              { staticClass: "card-title" },
              [
                _vm.hasTitleSlot ? _vm._t("title") : _vm._e(),
                _vm._v(" "),
                !_vm.hasTitleSlot
                  ? _c("h3", { staticClass: "card-label" }, [
                      _vm._v("\n        " + _vm._s(_vm.title) + "\n      ")
                    ])
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-toolbar" }, [_vm._t("toolbar")], 2)
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "card-body",
          class: {
            bodyClass: _vm.bodyClass,
            "body-fit": _vm.bodyFit,
            "body-fluid": _vm.bodyFluid
          }
        },
        [_vm._t("body")],
        2
      ),
      _vm._v(" "),
      _vm.hasFootSlot
        ? _c("div", { staticClass: "card-footer" }, [_vm._t("foot")], 2)
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/content/CodePreview.vue?vue&type=template&id=02638ef9&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/content/CodePreview.vue?vue&type=template&id=02638ef9& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("KTCard", {
    ref: "preview",
    attrs: { title: _vm.title, example: true },
    scopedSlots: _vm._u(
      [
        _vm.hasTitleSlot
          ? {
              key: "title",
              fn: function() {
                return [
                  _c("h3", { staticClass: "card-title" }, [_vm._t("title")], 2)
                ]
              },
              proxy: true
            }
          : null,
        {
          key: "toolbar",
          fn: function() {
            return [
              _c(
                "div",
                { staticClass: "example-tools justify-content-center" },
                [
                  _c("span", {
                    directives: [
                      {
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover.top",
                        value: "View code",
                        expression: "'View code'",
                        modifiers: { hover: true, top: true }
                      }
                    ],
                    staticClass: "example-toggle",
                    attrs: { "data-toggle": "tooltip" }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    directives: [
                      {
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover.top",
                        value: "Copy code",
                        expression: "'Copy code'",
                        modifiers: { hover: true, top: true }
                      }
                    ],
                    staticClass: "example-copy",
                    attrs: { "data-toggle": "tooltip" }
                  })
                ]
              )
            ]
          },
          proxy: true
        },
        {
          key: "body",
          fn: function() {
            return [
              _c("div", { staticClass: "example-code mb-5" }, [
                !_vm.hasGeneralCode && !_vm.hasSingleCodeType
                  ? _c(
                      "ul",
                      {
                        staticClass:
                          "example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",
                        attrs: { role: "tablist" }
                      },
                      [
                        _vm.hasHtmlCode
                          ? _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link active",
                                  attrs: {
                                    "data-tab": "0",
                                    "data-toggle": "tab",
                                    href: "#",
                                    role: "tab",
                                    "aria-selected": "true"
                                  },
                                  on: { click: _vm.setActiveTab }
                                },
                                [_vm._v("\n            HTML\n          ")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.hasJsCode
                          ? _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: {
                                    "data-tab": "1",
                                    "data-toggle": "tab",
                                    href: "#",
                                    role: "tab",
                                    "aria-selected": "false"
                                  },
                                  on: { click: _vm.setActiveTab }
                                },
                                [_vm._v("\n             JS \n          ")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.hasScssCode
                          ? _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: {
                                    "data-tab": "2",
                                    "data-toggle": "tab",
                                    href: "#",
                                    role: "tab",
                                    "aria-selected": "false"
                                  },
                                  on: { click: _vm.setActiveTab }
                                },
                                [_vm._v("\n            SCSS\n          ")]
                              )
                            ])
                          : _vm._e()
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.hasGeneralCode ? _c("div", [_vm._t("code")], 2) : _vm._e(),
                _vm._v(" "),
                !_vm.hasGeneralCode && !_vm.hasSingleCodeType
                  ? _c(
                      "div",
                      [
                        _c(
                          "b-tabs",
                          {
                            staticClass: "hide-tabs",
                            attrs: { "content-class": "mt-3" },
                            model: {
                              value: _vm.tabIndex,
                              callback: function($$v) {
                                _vm.tabIndex = $$v
                              },
                              expression: "tabIndex"
                            }
                          },
                          [
                            _c(
                              "b-tab",
                              {
                                staticClass: "example-highlight",
                                attrs: { active: "" }
                              },
                              [
                                _c(
                                  "highlight-code",
                                  {
                                    staticClass: "language-html",
                                    attrs: { lang: "html" }
                                  },
                                  [_vm._t("html")],
                                  2
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-tab",
                              { staticClass: "example-highlight" },
                              [
                                _c(
                                  "highlight-code",
                                  {
                                    staticClass: "language-js",
                                    attrs: { lang: "js" }
                                  },
                                  [_vm._t("js")],
                                  2
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-tab",
                              { staticClass: "example-highlight" },
                              [
                                _c(
                                  "highlight-code",
                                  {
                                    staticClass: "language-scss",
                                    attrs: { lang: "scss" }
                                  },
                                  [_vm._t("scss")],
                                  2
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.hasSingleCodeType
                  ? _c(
                      "div",
                      { staticClass: "example-highlight" },
                      [
                        _vm.hasHtmlCode
                          ? _c(
                              "highlight-code",
                              {
                                staticClass: "language-html",
                                attrs: { lang: "html" }
                              },
                              [_vm._t("html")],
                              2
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.hasJsCode
                          ? _c(
                              "highlight-code",
                              {
                                staticClass: "language-js",
                                attrs: { lang: "js" }
                              },
                              [_vm._t("js")],
                              2
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.hasScssCode
                          ? _c(
                              "highlight-code",
                              {
                                staticClass: "language-scss",
                                attrs: { lang: "scss" }
                              },
                              [_vm._t("scss")],
                              2
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _vm._t("preview")
            ]
          },
          proxy: true
        }
      ],
      null,
      true
    )
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/ListGroup.vue?vue&type=template&id=1a605502&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/ListGroup.vue?vue&type=template&id=1a605502& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-alert",
        {
          staticClass:
            "alert alert-custom alert-white alert-shadow fade show gutter-b",
          attrs: { show: "", variant: "light" }
        },
        [
          _c("div", { staticClass: "alert-icon" }, [
            _c(
              "span",
              { staticClass: "svg-icon svg-icon-lg" },
              [
                _c("inline-svg", {
                  attrs: { src: "media/svg/icons/Tools/Compass.svg" }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "alert-text" }, [
            _c("b", [_vm._v("List group")]),
            _vm._v(
              " List groups are a flexible and powerful component for\n      displaying a series of content. List group items can be modified to\n      support just about any content within. They can also be used as\n      navigation via various props.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href:
                    "https://bootstrap-vue.js.org/docs/components/list-group",
                  target: "_blank"
                }
              },
              [_vm._v("\n        See documentation.\n      ")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "List group" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "b-list-group",
                        [
                          _c("b-list-group-item", [_vm._v("Cras justo odio")]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v("Dapibus ac facilisis in")
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [_vm._v("Morbi leo risus")]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v("Porta ac consectetur ac")
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v("Vestibulum at eros")
                          ])
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code1.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Active items" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Set the "),
                        _c("code", [_vm._v("active")]),
                        _vm._v(" prop on a\n            "),
                        _c("code", [_vm._v("<b-list-group-item>")]),
                        _vm._v(
                          " to indicate the current\n            active selection.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-list-group",
                        [
                          _c("b-list-group-item", [_vm._v("Cras justo odio")]),
                          _vm._v(" "),
                          _c("b-list-group-item", { attrs: { active: "" } }, [
                            _vm._v(
                              "\n              Dapibus ac facilisis in\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [_vm._v("Morbi leo risus")]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v("Porta ac consectetur ac")
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v("Vestibulum at eros")
                          ])
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code2.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Disabled items" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Set the "),
                        _c("code", [_vm._v("disabled")]),
                        _vm._v(" prop on a\n            "),
                        _c("code", [_vm._v("<b-list-group-item>")]),
                        _vm._v(
                          " to make it appear disabled\n            (also works with actionalable items. see below).\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-list-group",
                        [
                          _c("b-list-group-item", { attrs: { disabled: "" } }, [
                            _vm._v("Cras justo odio")
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v("Dapibus ac facilisis in")
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [_vm._v("Morbi leo risus")]),
                          _vm._v(" "),
                          _c("b-list-group-item", { attrs: { disabled: "" } }, [
                            _vm._v(
                              "\n              Porta ac consectetur ac\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v("Vestibulum at eros")
                          ])
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code3.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Actionable list group items" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Turn a "),
                        _c("code", [_vm._v("<b-list-group-item>")]),
                        _vm._v(" into an actionable\n            link ("),
                        _c("code", [_vm._v('<a href="...">')]),
                        _vm._v(") by specifying\n            either an "),
                        _c("code", [_vm._v("href")]),
                        _vm._v(" prop or router-link\n            "),
                        _c("code", [_vm._v("to")]),
                        _vm._v(" prop.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-list-group",
                        [
                          _c(
                            "b-list-group-item",
                            { attrs: { href: "#some-link" } },
                            [
                              _vm._v(
                                "\n              Awesome link\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            { attrs: { href: "#", active: "" } },
                            [
                              _vm._v(
                                "\n              Link with active state\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("b-list-group-item", { attrs: { href: "#" } }, [
                            _vm._v(
                              "\n              Action links are easy\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            { attrs: { href: "#foobar", disabled: "" } },
                            [
                              _vm._v(
                                "\n              Disabled link\n            "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code4.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Contextual variants" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Use contextual variants to style list items with a stateful\n            background and color, via the "
                        ),
                        _c("code", [_vm._v("variant")]),
                        _vm._v(" prop.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-list-group",
                        [
                          _c("b-list-group-item", { attrs: { href: "#" } }, [
                            _vm._v(
                              "\n              Default list group item\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            { attrs: { href: "#", variant: "primary" } },
                            [
                              _vm._v(
                                "\n              Primary list group item\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            { attrs: { href: "#", variant: "secondary" } },
                            [
                              _vm._v(
                                "\n              Secondary list group item\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            { attrs: { href: "#", variant: "success" } },
                            [
                              _vm._v(
                                "\n              Success list group item\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            { attrs: { href: "#", variant: "danger" } },
                            [
                              _vm._v(
                                "\n              Danger list group item\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            { attrs: { href: "#", variant: "warning" } },
                            [
                              _vm._v(
                                "\n              Warning list group item\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            { attrs: { href: "#", variant: "info" } },
                            [
                              _vm._v(
                                "\n              Info list group item\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            { attrs: { href: "#", variant: "light" } },
                            [
                              _vm._v(
                                "\n              Light list group item\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            { attrs: { href: "#", variant: "dark" } },
                            [
                              _vm._v(
                                "\n              Dark list group item\n            "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code5.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "With badges" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Add "),
                        _c("code", [_vm._v("badges")]),
                        _vm._v(
                          " to any list group item to show unread\n            counts, activity, and more with the help of some\n            "
                        ),
                        _c(
                          "a",
                          {
                            attrs: {
                              href:
                                "http://getbootstrap.com/docs/4.0/utilities/flex/",
                              target: "_blank"
                            }
                          },
                          [_vm._v("utility classes")]
                        ),
                        _vm._v(".\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-list-group",
                        [
                          _c(
                            "b-list-group-item",
                            {
                              staticClass:
                                "d-flex justify-content-between align-items-center"
                            },
                            [
                              _vm._v(
                                "\n              Cras justo odio\n              "
                              ),
                              _c(
                                "b-badge",
                                { attrs: { variant: "primary", pill: "" } },
                                [_vm._v("14")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            {
                              staticClass:
                                "d-flex justify-content-between align-items-center"
                            },
                            [
                              _vm._v(
                                "\n              Dapibus ac facilisis in\n              "
                              ),
                              _c(
                                "b-badge",
                                { attrs: { variant: "primary", pill: "" } },
                                [_vm._v("2")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            {
                              staticClass:
                                "d-flex justify-content-between align-items-center"
                            },
                            [
                              _vm._v(
                                "\n              Morbi leo risus\n              "
                              ),
                              _c(
                                "b-badge",
                                { attrs: { variant: "primary", pill: "" } },
                                [_vm._v("1")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code6.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            })
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);