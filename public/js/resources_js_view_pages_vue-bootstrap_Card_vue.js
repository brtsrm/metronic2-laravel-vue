(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_pages_vue-bootstrap_Card_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/Card.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/Card.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      html1: "<div>\n  <b-card\n    title=\"Card Title\"\n    img-src=\"https://picsum.photos/600/300/?image=25\"\n    img-alt=\"Image\"\n    img-top\n    tag=\"article\"\n    style=\"max-width: 20rem;\"\n    class=\"mb-2\"\n  >\n    <b-card-text>\n      Some quick example text to build on the card title and make up\n      the bulk of the card's content.\n    </b-card-text>\n\n    <b-button href=\"#\" variant=\"primary\">Go somewhere</b-button>\n  </b-card>\n</div>",
      html2: "<div>\n  <div>\n    <b-card-group deck>\n      <b-card bg-variant=\"primary\" text-variant=\"white\" header=\"Primary\" class=\"text-center\">\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n\n      <b-card bg-variant=\"secondary\" text-variant=\"white\" header=\"Secondary\" class=\"text-center\">\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n\n      <b-card bg-variant=\"success\" text-variant=\"white\" header=\"Success\" class=\"text-center\">\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n    </b-card-group>\n  </div>\n  <div class=\"mt-3\">\n    <b-card-group deck>\n      <b-card bg-variant=\"info\" text-variant=\"white\" header=\"Info\" class=\"text-center\">\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n\n      <b-card bg-variant=\"warning\" text-variant=\"white\" header=\"Warning\" class=\"text-center\">\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n\n      <b-card bg-variant=\"danger\" text-variant=\"white\" header=\"Danger\" class=\"text-center\">\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n    </b-card-group>\n  </div>\n  <div class=\"mt-3\">\n    <b-card-group deck>\n      <b-card bg-variant=\"light\" header=\"Light\" class=\"text-center\">\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n\n      <b-card bg-variant=\"dark\" header=\"Dark\" text-variant=\"white\" class=\"text-center\">\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n\n      <b-card header=\"Default\" class=\"text-center\">\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n    </b-card-group>\n  </div>\n</div>",
      html3: "<div>\n  <div>\n    <b-card-group deck>\n      <b-card\n        border-variant=\"primary\"\n        header=\"Primary\"\n        header-bg-variant=\"primary\"\n        header-text-variant=\"white\"\n        align=\"center\"\n      >\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n\n      <b-card\n        border-variant=\"secondary\"\n        header=\"Secondary\"\n        header-border-variant=\"secondary\"\n        align=\"center\"\n      >\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n\n      <b-card border-variant=\"success\" header=\"Success\" align=\"center\">\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n    </b-card-group>\n  </div>\n  <div class=\"mt-3\">\n    <b-card-group deck>\n      <b-card border-variant=\"info\" header=\"Info\" align=\"center\">\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n\n      <b-card\n        border-variant=\"warning\"\n        header=\"Warning\"\n        header-bg-variant=\"transparent\"\n        align=\"center\"\n      >\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n\n      <b-card\n        border-variant=\"danger\"\n        header=\"Danger\"\n        header-border-variant=\"danger\"\n        header-text-variant=\"danger\"\n        align=\"center\"\n      >\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n    </b-card-group>\n  </div>\n  <div class=\"mt-3\">\n    <b-card-group deck class=\"mb-3\">\n      <b-card border-variant=\"light\" header=\"Light\" class=\"text-center\">\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n\n      <b-card border-variant=\"dark\" header=\"Dark\" align=\"center\">\n        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>\n      </b-card>\n    </b-card-group>\n  </div>\n</div>",
      html4: "<div>\n  <b-card title=\"Card title\" sub-title=\"Card subtitle\">\n    <b-card-text>\n      Some quick example text to build on the\n      <em>card title</em> and make up the bulk of the card's\n      content.\n    </b-card-text>\n\n    <b-card-text\n      >A second paragraph of text in the card.</b-card-text\n    >\n\n    <a href=\"#\" class=\"card-link\">Card link</a>\n    <b-link href=\"#\" class=\"card-link\">Another link</b-link>\n  </b-card>\n</div>",
      html5: "<div>\n<b-card-group deck>\n  <b-card\n    header=\"featured\"\n    header-tag=\"header\"\n    footer=\"Card Footer\"\n    footer-tag=\"footer\"\n    title=\"Title\"\n  >\n    <b-card-text>Header and footers using props.</b-card-text>\n    <b-button href=\"#\" variant=\"primary\">Go somewhere</b-button>\n  </b-card>\n\n  <b-card title=\"Title\" header-tag=\"header\" footer-tag=\"footer\">\n    <template v-slot:header>\n      <h6 class=\"mb-0\">Header Slot</h6>\n    </template>\n    <b-card-text>Header and footers using slots.</b-card-text>\n    <b-button href=\"#\" variant=\"primary\">Go somewhere</b-button>\n    <template v-slot:footer>\n      <em>Footer Slot</em>\n    </template>\n  </b-card>\n</b-card-group>\n</div>",
      html6: "<div>\n  <b-card no-body class=\"overflow-hidden\" style=\"max-width: 540px;\">\n    <b-row no-gutters>\n      <b-col md=\"6\">\n        <b-card-img\n          src=\"https://picsum.photos/400/400/?image=20\"\n          class=\"rounded-0\"\n        ></b-card-img>\n      </b-col>\n      <b-col md=\"6\">\n        <b-card-body title=\"Horizontal Card\">\n          <b-card-text>\n            This is a wider card with supporting text as a natural\n            lead-in to additional content. This content is a little\n            bit longer.\n          </b-card-text>\n        </b-card-body>\n      </b-col>\n    </b-row>\n  </b-card>\n</div>",
      html7: "<div>\n  <b-card\n    overlay\n    img-src=\"https://picsum.photos/900/250/?image=3\"\n    img-alt=\"Card Image\"\n    text-variant=\"white\"\n    title=\"Image Overlay\"\n    sub-title=\"Subtitle\"\n  >\n    <b-card-text>\n      Some quick example text to build on the card and make up the bulk\n      of the card's content.\n    </b-card-text>\n  </b-card>\n</div>"
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
      title: "Card"
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

/***/ "./resources/js/view/pages/vue-bootstrap/Card.vue":
/*!********************************************************!*\
  !*** ./resources/js/view/pages/vue-bootstrap/Card.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_4a1cc59f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=4a1cc59f& */ "./resources/js/view/pages/vue-bootstrap/Card.vue?vue&type=template&id=4a1cc59f&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/view/pages/vue-bootstrap/Card.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Card_vue_vue_type_template_id_4a1cc59f___WEBPACK_IMPORTED_MODULE_0__.render,
  _Card_vue_vue_type_template_id_4a1cc59f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/vue-bootstrap/Card.vue"
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

/***/ "./resources/js/view/pages/vue-bootstrap/Card.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/view/pages/vue-bootstrap/Card.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/Card.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/view/pages/vue-bootstrap/Card.vue?vue&type=template&id=4a1cc59f&":
/*!***************************************************************************************!*\
  !*** ./resources/js/view/pages/vue-bootstrap/Card.vue?vue&type=template&id=4a1cc59f& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_4a1cc59f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_4a1cc59f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_4a1cc59f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=template&id=4a1cc59f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/Card.vue?vue&type=template&id=4a1cc59f&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/Card.vue?vue&type=template&id=4a1cc59f&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/Card.vue?vue&type=template&id=4a1cc59f& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Cards")]),
            _vm._v(
              " A card is a flexible and extensible content container. It\n      includes options for headers and footers, a wide variety of content,\n      contextual background colors, and powerful display options.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/card",
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
              attrs: { title: "Cards" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Cards are built with as little markup and styles as possible, but\n            still manage to deliver a ton of control and customization. Built\n            with flexbox, they offer easy alignment and mix well with other\n            components.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-card",
                            {
                              staticClass: "mb-2",
                              staticStyle: { "max-width": "20rem" },
                              attrs: {
                                title: "Card Title",
                                "img-src":
                                  "https://picsum.photos/600/300/?image=25",
                                "img-alt": "Image",
                                "img-top": "",
                                tag: "article"
                              }
                            },
                            [
                              _c("b-card-text", [
                                _vm._v(
                                  "\n                Some quick example text to build on the card title and make up\n                the bulk of the card's content.\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { href: "#", variant: "primary" } },
                                [_vm._v("Go somewhere")]
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
                  key: "code",
                  fn: function() {
                    return [
                      _c("highlight-code", { attrs: { lang: "html" } }, [
                        _vm._v(
                          "\n            " + _vm._s(_vm.html1) + "\n          "
                        )
                      ])
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Background variants" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Cards include their own variant style for quickly changing the\n            background-color and of a card via the "
                        ),
                        _c("code", [_vm._v("bg-variant")]),
                        _vm._v(" and\n            "),
                        _c("code", [_vm._v("border-")]),
                        _vm._v(
                          " props. Darker solid variants my require\n            setting the prop "
                        ),
                        _c("code", [_vm._v("variant")]),
                        _vm._v(" to adjust the text color.\n          ")
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "div",
                          [
                            _c(
                              "b-card-group",
                              { attrs: { deck: "" } },
                              [
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "text-center",
                                    attrs: {
                                      "bg-variant": "primary",
                                      "text-variant": "white",
                                      header: "Primary"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "text-center",
                                    attrs: {
                                      "bg-variant": "secondary",
                                      "text-variant": "white",
                                      header: "Secondary"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "text-center",
                                    attrs: {
                                      "bg-variant": "success",
                                      "text-variant": "white",
                                      header: "Success"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-3" },
                          [
                            _c(
                              "b-card-group",
                              { attrs: { deck: "" } },
                              [
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "text-center",
                                    attrs: {
                                      "bg-variant": "info",
                                      "text-variant": "white",
                                      header: "Info"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "text-center",
                                    attrs: {
                                      "bg-variant": "warning",
                                      "text-variant": "white",
                                      header: "Warning"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "text-center",
                                    attrs: {
                                      "bg-variant": "danger",
                                      "text-variant": "white",
                                      header: "Danger"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-3" },
                          [
                            _c(
                              "b-card-group",
                              { attrs: { deck: "" } },
                              [
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "text-center",
                                    attrs: {
                                      "bg-variant": "light",
                                      header: "Light"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "text-center",
                                    attrs: {
                                      "bg-variant": "dark",
                                      header: "Dark",
                                      "text-variant": "white"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "text-center",
                                    attrs: { header: "Default" }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  },
                  proxy: true
                },
                {
                  key: "code",
                  fn: function() {
                    return [
                      _c("highlight-code", { attrs: { lang: "html" } }, [
                        _vm._v(
                          "\n            " + _vm._s(_vm.html2) + "\n          "
                        )
                      ])
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Bordered variants" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("div", [
                        _c(
                          "div",
                          [
                            _c(
                              "b-card-group",
                              { attrs: { deck: "" } },
                              [
                                _c(
                                  "b-card",
                                  {
                                    attrs: {
                                      "border-variant": "primary",
                                      header: "Primary",
                                      "header-bg-variant": "primary",
                                      "header-text-variant": "white",
                                      align: "center"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-card",
                                  {
                                    attrs: {
                                      "border-variant": "secondary",
                                      header: "Secondary",
                                      "header-border-variant": "secondary",
                                      align: "center"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-card",
                                  {
                                    attrs: {
                                      "border-variant": "success",
                                      header: "Success",
                                      align: "center"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-3" },
                          [
                            _c(
                              "b-card-group",
                              { attrs: { deck: "" } },
                              [
                                _c(
                                  "b-card",
                                  {
                                    attrs: {
                                      "border-variant": "info",
                                      header: "Info",
                                      align: "center"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-card",
                                  {
                                    attrs: {
                                      "border-variant": "warning",
                                      header: "Warning",
                                      "header-bg-variant": "transparent",
                                      align: "center"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-card",
                                  {
                                    attrs: {
                                      "border-variant": "danger",
                                      header: "Danger",
                                      "header-border-variant": "danger",
                                      "header-text-variant": "danger",
                                      align: "center"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-3" },
                          [
                            _c(
                              "b-card-group",
                              { staticClass: "mb-3", attrs: { deck: "" } },
                              [
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "text-center",
                                    attrs: {
                                      "border-variant": "light",
                                      header: "Light"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-card",
                                  {
                                    attrs: {
                                      "border-variant": "dark",
                                      header: "Dark",
                                      align: "center"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing\n                    elit."
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  },
                  proxy: true
                },
                {
                  key: "code",
                  fn: function() {
                    return [
                      _c("highlight-code", { attrs: { lang: "html" } }, [
                        _vm._v(
                          "\n            " + _vm._s(_vm.html3) + "\n          "
                        )
                      ])
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
              attrs: { title: "Titles, text, and links" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-card",
                            {
                              attrs: {
                                title: "Card title",
                                "sub-title": "Card subtitle"
                              }
                            },
                            [
                              _c("b-card-text", [
                                _vm._v(
                                  "\n                Some quick example text to build on the\n                "
                                ),
                                _c("em", [_vm._v("card title")]),
                                _vm._v(
                                  " and make up the bulk of the card's\n                content.\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c("b-card-text", [
                                _vm._v(
                                  "A second paragraph of text in the card."
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "card-link",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Card link")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-link",
                                {
                                  staticClass: "card-link",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Another link")]
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
                  key: "code",
                  fn: function() {
                    return [
                      _c("highlight-code", { attrs: { lang: "html" } }, [
                        _vm._v(
                          "\n            " + _vm._s(_vm.html4) + "\n          "
                        )
                      ])
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Header and footer" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "b-card-group",
                            { attrs: { deck: "" } },
                            [
                              _c(
                                "b-card",
                                {
                                  attrs: {
                                    header: "featured",
                                    "header-tag": "header",
                                    footer: "Card Footer",
                                    "footer-tag": "footer",
                                    title: "Title"
                                  }
                                },
                                [
                                  _c("b-card-text", [
                                    _vm._v("Header and footers using props.")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: { href: "#", variant: "primary" }
                                    },
                                    [_vm._v("Go somewhere")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-card",
                                {
                                  attrs: {
                                    title: "Title",
                                    "header-tag": "header",
                                    "footer-tag": "footer"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "header",
                                      fn: function() {
                                        return [
                                          _c("h6", { staticClass: "mb-0" }, [
                                            _vm._v("Header Slot")
                                          ])
                                        ]
                                      },
                                      proxy: true
                                    },
                                    {
                                      key: "footer",
                                      fn: function() {
                                        return [
                                          _c("em", [_vm._v("Footer Slot")])
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _c("b-card-text", [
                                    _vm._v("Header and footers using slots.")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: { href: "#", variant: "primary" }
                                    },
                                    [_vm._v("Go somewhere")]
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
                    ]
                  },
                  proxy: true
                },
                {
                  key: "code",
                  fn: function() {
                    return [
                      _c("highlight-code", { attrs: { lang: "html" } }, [
                        _vm._v(
                          "\n            " + _vm._s(_vm.html5) + "\n          "
                        )
                      ])
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Horizontal card layout" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Using a combination of grid components, utility classes and\n            individual card sub-components, cards can be made horizontal in a\n            mobile-friendly and responsive way.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-card",
                            {
                              staticClass: "overflow-hidden",
                              staticStyle: { "max-width": "540px" },
                              attrs: { "no-body": "" }
                            },
                            [
                              _c(
                                "b-row",
                                { attrs: { "no-gutters": "" } },
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { md: "6" } },
                                    [
                                      _c("b-card-img", {
                                        staticClass: "rounded-0",
                                        attrs: {
                                          src:
                                            "https://picsum.photos/400/400/?image=20"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { md: "6" } },
                                    [
                                      _c(
                                        "b-card-body",
                                        { attrs: { title: "Horizontal Card" } },
                                        [
                                          _c("b-card-text", [
                                            _vm._v(
                                              "\n                      This is a wider card with supporting text as a natural\n                      lead-in to additional content. This content is a little\n                      bit longer.\n                    "
                                            )
                                          ])
                                        ],
                                        1
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
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "code",
                  fn: function() {
                    return [
                      _c("highlight-code", { attrs: { lang: "html" } }, [
                        _vm._v(
                          "\n            " + _vm._s(_vm.html6) + "\n          "
                        )
                      ])
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Overlay image" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Place the image in the background of the card by setting the\n            boolean prop "
                        ),
                        _c("code", [_vm._v("overlay")]),
                        _vm._v(":\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-card",
                            {
                              attrs: {
                                overlay: "",
                                "img-src":
                                  "https://picsum.photos/900/250/?image=3",
                                "img-alt": "Card Image",
                                "text-variant": "white",
                                title: "Image Overlay",
                                "sub-title": "Subtitle"
                              }
                            },
                            [
                              _c("b-card-text", [
                                _vm._v(
                                  "\n                Some quick example text to build on the card and make up the\n                bulk of the card's content.\n              "
                                )
                              ])
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
                  key: "code",
                  fn: function() {
                    return [
                      _c("highlight-code", { attrs: { lang: "html" } }, [
                        _vm._v(
                          "\n            " + _vm._s(_vm.html7) + "\n          "
                        )
                      ])
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