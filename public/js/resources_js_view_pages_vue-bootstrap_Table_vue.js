(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_pages_vue-bootstrap_Table_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/Table.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/Table.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      code1: {
        html: "<div>\n    <b-table striped hover :items=\"items\"></b-table>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        items: [\n          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },\n          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },\n          { age: 38, first_name: 'Jami', last_name: 'Carney' }\n        ]\n      }\n    }\n  }",
        items: [{
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald"
        }, {
          age: 21,
          first_name: "Larsen",
          last_name: "Shaw"
        }, {
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson"
        }, {
          age: 38,
          first_name: "Jami",
          last_name: "Carney"
        }]
      },
      code2: {
        html: "<div>\n    <b-table hover :items=\"items\"></b-table>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        items: [\n          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },\n          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n          {\n            age: 89,\n            first_name: 'Geneva',\n            last_name: 'Wilson',\n            _rowVariant: 'danger'\n          },\n          {\n            age: 40,\n            first_name: 'Thor',\n            last_name: 'MacDonald',\n            _cellVariants: { age: 'info', first_name: 'warning' }\n          },\n          { age: 29, first_name: 'Dick', last_name: 'Dunlap' }\n        ]\n      }\n    }\n  }",
        items: [{
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald"
        }, {
          age: 21,
          first_name: "Larsen",
          last_name: "Shaw"
        }, {
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson",
          _rowVariant: "danger"
        }, {
          age: 40,
          first_name: "Thor",
          last_name: "MacDonald",
          _cellVariants: {
            age: "info",
            first_name: "warning"
          }
        }, {
          age: 29,
          first_name: "Dick",
          last_name: "Dunlap"
        }]
      },
      code3: {
        html: "<div>\n    <b-table striped hover :items=\"items\" :fields=\"fields\"></b-table>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        // Note `isActive` is left out and will not appear in the rendered table\n        fields: ['first_name', 'last_name', 'age'],\n        items: [\n          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },\n          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },\n          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }\n        ]\n      }\n    }\n  }",
        fields: ["first_name", "last_name", "age"],
        items: [{
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald"
        }, {
          isActive: false,
          age: 21,
          first_name: "Larsen",
          last_name: "Shaw"
        }, {
          isActive: false,
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson"
        }, {
          isActive: true,
          age: 38,
          first_name: "Jami",
          last_name: "Carney"
        }]
      },
      code4: {
        html: "<div>\n    <b-table striped hover :items=\"items\" :fields=\"fields\"></b-table>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        // Note 'isActive' is left out and will not appear in the rendered table\n        fields: [\n          {\n            key: 'last_name',\n            sortable: true\n          },\n          {\n            key: 'first_name',\n            sortable: false\n          },\n          {\n            key: 'age',\n            label: 'Person age',\n            sortable: true,\n            // Variant applies to the whole column, including the header and footer\n            variant: 'danger'\n          }\n        ],\n        items: [\n          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },\n          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },\n          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }\n        ]\n      }\n    }\n  }",
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [{
          key: "last_name",
          sortable: true
        }, {
          key: "first_name",
          sortable: false
        }, {
          key: "age",
          label: "Person age",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
          variant: "danger"
        }],
        items: [{
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald"
        }, {
          isActive: false,
          age: 21,
          first_name: "Larsen",
          last_name: "Shaw"
        }, {
          isActive: false,
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson"
        }, {
          isActive: true,
          age: 38,
          first_name: "Jami",
          last_name: "Carney"
        }]
      },
      code5: {
        html: "<div>\n    <b-form-group label=\"Table Options\" label-cols-lg=\"2\">\n      <b-form-checkbox v-model=\"striped\" inline>Striped</b-form-checkbox>\n      <b-form-checkbox v-model=\"bordered\" inline>Bordered</b-form-checkbox>\n      <b-form-checkbox v-model=\"borderless\" inline>Borderless</b-form-checkbox>\n      <b-form-checkbox v-model=\"outlined\" inline>Outlined</b-form-checkbox>\n      <b-form-checkbox v-model=\"small\" inline>Small</b-form-checkbox>\n      <b-form-checkbox v-model=\"hover\" inline>Hover</b-form-checkbox>\n      <b-form-checkbox v-model=\"dark\" inline>Dark</b-form-checkbox>\n      <b-form-checkbox v-model=\"fixed\" inline>Fixed</b-form-checkbox>\n      <b-form-checkbox v-model=\"footClone\" inline>Foot Clone</b-form-checkbox>\n      <b-form-checkbox v-model=\"noCollapse\" inline>No border collapse</b-form-checkbox>\n    </b-form-group>\n    <b-form-group label=\"Head Variant\" label-cols-lg=\"2\">\n      <b-form-radio-group v-model=\"headVariant\" class=\"mt-lg-2\">\n        <b-form-radio :value=\"null\" inline>None</b-form-radio>\n        <b-form-radio value=\"light\" inline>Light</b-form-radio>\n        <b-form-radio value=\"dark\" inline>Dark</b-form-radio>\n      </b-form-radio-group>\n    </b-form-group>\n    <b-form-group label=\"Table Variant\" label-for=\"table-style-variant\" label-cols-lg=\"2\">\n      <b-form-select\n        v-model=\"tableVariant\"\n        :options=\"tableVariants\"\n        id=\"table-style-variant\"\n      >\n        <template v-slot:first>\n          <option value=\"\">-- None --</option>\n        </template>\n      </b-form-select>\n    </b-form-group>\n\n    <b-table\n      :striped=\"striped\"\n      :bordered=\"bordered\"\n      :borderless=\"borderless\"\n      :outlined=\"outlined\"\n      :small=\"small\"\n      :hover=\"hover\"\n      :dark=\"dark\"\n      :fixed=\"fixed\"\n      :foot-clone=\"footClone\"\n      :no-border-collapse=\"noCollapse\"\n      :items=\"items\"\n      :fields=\"fields\"\n      :head-variant=\"headVariant\"\n      :table-variant=\"tableVariant\"\n    ></b-table>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        fields: ['first_name', 'last_name', 'age'],\n        items: [\n          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },\n          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n          { age: 89, first_name: 'Geneva', last_name: 'Wilson' }\n        ],\n        tableVariants: [\n          'primary',\n          'secondary',\n          'info',\n          'danger',\n          'warning',\n          'success',\n          'light',\n          'dark'\n        ],\n        striped: false,\n        bordered: false,\n        borderless: false,\n        outlined: false,\n        small: false,\n        hover: false,\n        dark: false,\n        fixed: false,\n        footClone: false,\n        headVariant: null,\n        tableVariant: '',\n        noCollapse: false\n      }\n    }\n  }",
        fields: ["first_name", "last_name", "age"],
        items: [{
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald"
        }, {
          age: 21,
          first_name: "Larsen",
          last_name: "Shaw"
        }, {
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson"
        }],
        tableVariants: ["primary", "secondary", "info", "danger", "warning", "success", "light", "dark"],
        striped: false,
        bordered: false,
        borderless: false,
        outlined: false,
        small: false,
        hover: false,
        dark: false,
        fixed: false,
        footClone: false,
        headVariant: null,
        tableVariant: "",
        noCollapse: false
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
      title: ""
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

/***/ "./resources/js/view/pages/vue-bootstrap/Table.vue":
/*!*********************************************************!*\
  !*** ./resources/js/view/pages/vue-bootstrap/Table.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table_vue_vue_type_template_id_d79e9362___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=d79e9362& */ "./resources/js/view/pages/vue-bootstrap/Table.vue?vue&type=template&id=d79e9362&");
/* harmony import */ var _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js& */ "./resources/js/view/pages/vue-bootstrap/Table.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Table_vue_vue_type_template_id_d79e9362___WEBPACK_IMPORTED_MODULE_0__.render,
  _Table_vue_vue_type_template_id_d79e9362___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/vue-bootstrap/Table.vue"
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

/***/ "./resources/js/view/pages/vue-bootstrap/Table.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/view/pages/vue-bootstrap/Table.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/Table.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/view/pages/vue-bootstrap/Table.vue?vue&type=template&id=d79e9362&":
/*!****************************************************************************************!*\
  !*** ./resources/js/view/pages/vue-bootstrap/Table.vue?vue&type=template&id=d79e9362& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_d79e9362___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_d79e9362___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_d79e9362___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=template&id=d79e9362& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/Table.vue?vue&type=template&id=d79e9362&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/Table.vue?vue&type=template&id=d79e9362&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vue-bootstrap/Table.vue?vue&type=template&id=d79e9362& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Tables")]),
            _vm._v(
              " For displaying tabular data, <b-table> supports\n      pagination, filtering, sorting, custom rendering, various style options,\n      events, and asynchronous data. For simple display of tabular data\n      without all the fancy features, BootstrapVue provides two lightweight\n      alternative components <b-table-lite> and <b-table-simple>.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/table",
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
          { staticClass: "col-md-12" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Basic usage" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c("b-table", {
                            attrs: {
                              striped: "",
                              hover: "",
                              items: _vm.code1.items
                            }
                          })
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
                },
                {
                  key: "js",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code1.js) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Using variants for table cells" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Record data may also have additional special reserved name keys\n            for colorizing rows and individual cells (variants), and for\n            triggering additional row detail. The supported optional item\n            record modifier properties (make sure your field keys do not\n            conflict with these names):\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("b-table", {
                            attrs: { hover: "", items: _vm.code2.items }
                          })
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
                },
                {
                  key: "js",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code2.js) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Fields as a simple array" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Fields can be a simple array, for defining the order of the\n            columns, and which columns to display:\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("b-table", {
                            attrs: {
                              striped: "",
                              hover: "",
                              items: _vm.code3.items,
                              fields: _vm.code3.fields
                            }
                          })
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
                },
                {
                  key: "js",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code3.js) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Fields as an array of objects" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Fields can be a an array of objects, providing additional control\n            over the fields (such as sorting, formatting, etc). Only columns\n            (keys) that appear in the fields array will be shown:\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("b-table", {
                            attrs: {
                              striped: "",
                              hover: "",
                              items: _vm.code4.items,
                              fields: _vm.code4.fields
                            }
                          })
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
                },
                {
                  key: "js",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code4.js) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Table style options" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Table style options "),
                        _c("code", [_vm._v("fixed")]),
                        _vm._v(", "),
                        _c("code", [_vm._v("stacked")]),
                        _vm._v(",\n            "),
                        _c("code", [_vm._v("caption-top")]),
                        _vm._v(", "),
                        _c("code", [_vm._v("no-border-collapse")]),
                        _vm._v(
                          ", sticky\n            headers, sticky columns, and the table sorting feature, all\n            require BootstrapVue's custom CSS.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Table Options",
                                "label-cols-lg": "2"
                              }
                            },
                            [
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: { inline: "" },
                                  model: {
                                    value: _vm.code5.striped,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code5, "striped", $$v)
                                    },
                                    expression: "code5.striped"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Striped\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: { inline: "" },
                                  model: {
                                    value: _vm.code5.bordered,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code5, "bordered", $$v)
                                    },
                                    expression: "code5.bordered"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Bordered\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: { inline: "" },
                                  model: {
                                    value: _vm.code5.borderless,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code5, "borderless", $$v)
                                    },
                                    expression: "code5.borderless"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Borderless\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: { inline: "" },
                                  model: {
                                    value: _vm.code5.outlined,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code5, "outlined", $$v)
                                    },
                                    expression: "code5.outlined"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Outlined\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: { inline: "" },
                                  model: {
                                    value: _vm.code5.small,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code5, "small", $$v)
                                    },
                                    expression: "code5.small"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Small\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: { inline: "" },
                                  model: {
                                    value: _vm.code5.hover,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code5, "hover", $$v)
                                    },
                                    expression: "code5.hover"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Hover\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: { inline: "" },
                                  model: {
                                    value: _vm.code5.dark,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code5, "dark", $$v)
                                    },
                                    expression: "code5.dark"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Dark\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: { inline: "" },
                                  model: {
                                    value: _vm.code5.fixed,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code5, "fixed", $$v)
                                    },
                                    expression: "code5.fixed"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Fixed\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: { inline: "" },
                                  model: {
                                    value: _vm.code5.footClone,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code5, "footClone", $$v)
                                    },
                                    expression: "code5.footClone"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Foot Clone\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: { inline: "" },
                                  model: {
                                    value: _vm.code5.noCollapse,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code5, "noCollapse", $$v)
                                    },
                                    expression: "code5.noCollapse"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                No border collapse\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Head Variant",
                                "label-cols-lg": "2"
                              }
                            },
                            [
                              _c(
                                "b-form-radio-group",
                                {
                                  staticClass: "mt-lg-2",
                                  model: {
                                    value: _vm.code5.headVariant,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code5, "headVariant", $$v)
                                    },
                                    expression: "code5.headVariant"
                                  }
                                },
                                [
                                  _c(
                                    "b-form-radio",
                                    { attrs: { value: null, inline: "" } },
                                    [_vm._v("None")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-radio",
                                    { attrs: { value: "light", inline: "" } },
                                    [_vm._v("Light")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-radio",
                                    { attrs: { value: "dark", inline: "" } },
                                    [_vm._v("Dark")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Table Variant",
                                "label-for": "table-style-variant",
                                "label-cols-lg": "2"
                              }
                            },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  options: _vm.code5.tableVariants,
                                  id: "table-style-variant"
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "first",
                                    fn: function() {
                                      return [
                                        _c("option", { attrs: { value: "" } }, [
                                          _vm._v("-- None --")
                                        ])
                                      ]
                                    },
                                    proxy: true
                                  }
                                ]),
                                model: {
                                  value: _vm.code5.tableVariant,
                                  callback: function($$v) {
                                    _vm.$set(_vm.code5, "tableVariant", $$v)
                                  },
                                  expression: "code5.tableVariant"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-table", {
                            attrs: {
                              striped: _vm.code5.striped,
                              bordered: _vm.code5.bordered,
                              borderless: _vm.code5.borderless,
                              outlined: _vm.code5.outlined,
                              small: _vm.code5.small,
                              hover: _vm.code5.hover,
                              dark: _vm.code5.dark,
                              fixed: _vm.code5.fixed,
                              "foot-clone": _vm.code5.footClone,
                              "no-border-collapse": _vm.code5.noCollapse,
                              items: _vm.code5.items,
                              fields: _vm.code5.fields,
                              "head-variant": _vm.code5.headVariant,
                              "table-variant": _vm.code5.tableVariant
                            }
                          })
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
                },
                {
                  key: "js",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code5.js) + "\n        "
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