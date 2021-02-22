(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_pages_vuetify_forms_SelectionControls_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/SelectionControls.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/SelectionControls.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../view/content/CodePreview.vue */ "./resources/js/view/content/CodePreview.vue");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/store/breadcrumbs.module */ "./resources/js/core/services/store/breadcrumbs.module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        html: "<v-container fluid>\n  <v-checkbox v-model=\"code1.checkbox1\" :label=\"`Checkbox 1: ${code1.checkbox1.toString()}`\"></v-checkbox>\n  <v-checkbox v-model=\"code1.checkbox2\" :label=\"`Checkbox 2: ${code1.checkbox2.toString()}`\"></v-checkbox>\n</v-container>",
        js: "export default {\n    data () {\n      return {\n        checkbox1: true,\n        checkbox2: false,\n      }\n    },\n  }",
        checkbox1: true,
        checkbox2: false
      },
      code2: {
        html: "<v-container fluid>\n  <p>{{ selected }}</p>\n  <v-checkbox v-model=\"selected\" label=\"John\" value=\"John\"></v-checkbox>\n  <v-checkbox v-model=\"selected\" label=\"Jacob\" value=\"Jacob\"></v-checkbox>\n</v-container>",
        js: "export default {\n  data () {\n    return {\n      selected: ['John'],\n    }\n  },\n}",
        selected: ["John"]
      },
      code3: {
        html: "<v-container fluid>\n  <p>{{ radios || 'null' }}</p>\n  <v-radio-group v-model=\"radios\" :mandatory=\"false\">\n    <v-radio label=\"Radio 1\" value=\"radio-1\"></v-radio>\n    <v-radio label=\"Radio 2\" value=\"radio-2\"></v-radio>\n  </v-radio-group>\n</v-container>",
        js: "export default {\n    data () {\n      return {\n        radios: 'radio-1',\n      }\n    },\n  }",
        radios: "radio-1"
      },
      code4: {
        html: "<v-container fluid>\n  <v-switch v-model=\"switch1\" :label=\"`Switch 1: ${switch1.toString()}`\"></v-switch>\n  <v-switch v-model=\"switch2\" :label=\"`Switch 2: ${switch2.toString()}`\"></v-switch>\n</v-container>",
        js: "export default {\n  data () {\n    return {\n      switch1: true,\n      switch2: false,\n    }\n  },\n}",
        switch1: true,
        switch2: false
      },
      code5: {
        html: "<v-card flat>\n  <v-card-text>\n    <v-container fluid>\n      <v-row>\n        <v-col cols=\"12\" sm=\"6\" md=\"6\">\n          <v-radio-group v-model=\"ex7\" column>\n            <v-radio\n              label=\"red\"\n              color=\"red\"\n              value=\"red\"\n            ></v-radio>\n            <v-radio\n              label=\"red darken-3\"\n              color=\"red darken-3\"\n              value=\"red darken-3\"\n            ></v-radio>\n            <v-radio\n              label=\"indigo\"\n              color=\"indigo\"\n              value=\"indigo\"\n            ></v-radio>\n            <v-radio\n              label=\"indigo darken-3\"\n              color=\"indigo darken-3\"\n              value=\"indigo darken-3\"\n            ></v-radio>\n            <v-radio\n              label=\"orange\"\n              color=\"orange\"\n              value=\"orange\"\n            ></v-radio>\n            <v-radio\n              label=\"orange darken-3\"\n              color=\"orange darken-3\"\n              value=\"orange darken-3\"\n            ></v-radio>\n          </v-radio-group>\n        </v-col>\n        <v-col cols=\"12\" sm=\"6\" md=\"6\">\n          <v-radio-group v-model=\"ex8\" column>\n            <v-radio\n              label=\"primary\"\n              color=\"primary\"\n              value=\"primary\"\n            ></v-radio>\n            <v-radio\n              label=\"secondary\"\n              color=\"secondary\"\n              value=\"secondary\"\n            ></v-radio>\n            <v-radio\n              label=\"success\"\n              color=\"success\"\n              value=\"success\"\n            ></v-radio>\n            <v-radio\n              label=\"info\"\n              color=\"info\"\n              value=\"info\"\n            ></v-radio>\n            <v-radio\n              label=\"warning\"\n              color=\"warning\"\n              value=\"warning\"\n            ></v-radio>\n            <v-radio\n              label=\"error\"\n              color=\"error\"\n              value=\"error\"\n            ></v-radio>\n          </v-radio-group>\n        </v-col>\n      </v-row>\n    </v-container>\n  </v-card-text>",
        js: "export default {\n  data () {\n    return {\n      ex7: 'red',\n      ex8: 'primary',\n    }\n  },\n}"
      },
      code6: {
        html: "<v-container fluid>\n  <v-row class=\"dark--text\">\n    <v-col cols=\"6\">on</v-col>\n    <v-col cols=\"6\">off</v-col>\n  </v-row>\n  <v-row>\n    <v-col cols=\"6\">\n      <v-switch value input-value=\"true\"></v-switch>\n    </v-col>\n    <v-col cols=\"6\">\n      <v-switch></v-switch>\n    </v-col>\n  </v-row>\n  <v-row class=\"dark--text\">\n    <v-col cols=\"6\">on disabled</v-col>\n    <v-col cols=\"6\">off disabled</v-col>\n  </v-row>\n  <v-row>\n    <v-col cols=\"6\">\n      <v-switch value input-value=\"true\" disabled></v-switch>\n    </v-col>\n    <v-col cols=\"6\">\n      <v-switch disabled></v-switch>\n    </v-col>\n  </v-row>\n  <v-row class=\"dark--text\">\n    <v-col cols=\"6\">on loading</v-col>\n    <v-col cols=\"6\">off loading</v-col>\n  </v-row>\n  <v-row>\n    <v-col cols=\"6\">\n      <v-switch loading=\"warning\" value input-value=\"true\"></v-switch>\n    </v-col>\n    <v-col cols=\"6\">\n      <v-switch loading=\"warning\"></v-switch>\n    </v-col>\n  </v-row>\n</v-container>"
      },
      code7: {
        html: "<v-container fluid>\n  <v-checkbox v-model=\"checkbox\">\n    <template v-slot:label>\n      <div>\n        I agree that\n        <v-tooltip bottom>\n          <template v-slot:activator=\"{ on }\">\n            <a\n              target=\"_blank\"\n              href=\"http://vuetifyjs.com\"\n              @click.stop\n              v-on=\"on\"\n            >\n              Vuetify\n            </a>\n          </template>\n          Opens in new window\n        </v-tooltip>\n        is awesome\n      </div>\n    </template>\n  </v-checkbox>\n\n  <v-radio-group v-model=\"radios\">\n    <template v-slot:label>\n      <div>Your favourite <strong>search engine</strong></div>\n    </template>\n    <v-radio value=\"Google\">\n      <template v-slot:label>\n        <div>Of course it's <strong class=\"success--text\">Google</strong></div>\n      </template>\n    </v-radio>\n    <v-radio value=\"Duckduckgo\">\n      <template v-slot:label>\n        <div>Definitely <strong class=\"primary--text\">Duckduckgo</strong></div>\n      </template>\n    </v-radio>\n  </v-radio-group>\n\n  <v-switch v-model=\"switchMe\">\n    <template v-slot:label>\n      Turn on the progress: <v-progress-circular :indeterminate=\"switchMe\" :value=\"0\" size=\"24\" class=\"ml-2\"></v-progress-circular>\n    </template>\n  </v-switch>\n</v-container>",
        js: "export default {\n  data () {\n    return {\n      checkbox: false,\n      radios: 'Duckduckgo',\n      switchMe: false,\n    }\n  },\n}",
        checkbox: false,
        radios: "Duckduckgo",
        switchMe: false
      },
      code8: {
        html: "<v-card flat>\n  <v-card-text>\n    <v-container fluid>\n      <v-row>\n        <v-col cols=\"12\" sm=\"4\" md=\"4\">\n          <v-switch\n            v-model=\"ex11\"\n            label=\"red\"\n            color=\"red\"\n            value=\"red\"\n            hide-details\n          ></v-switch>\n          <v-switch\n            v-model=\"ex11\"\n            label=\"red darken-3\"\n            color=\"red darken-3\"\n            value=\"red darken-3\"\n            hide-details\n          ></v-switch>\n        </v-col>\n        <v-col cols=\"12\" sm=\"4\" md=\"4\">\n          <v-switch\n            v-model=\"ex11\"\n            label=\"indigo\"\n            color=\"indigo\"\n            value=\"indigo\"\n            hide-details\n          ></v-switch>\n          <v-switch\n            v-model=\"ex11\"\n            label=\"indigo darken-3\"\n            color=\"indigo darken-3\"\n            value=\"indigo darken-3\"\n            hide-details\n          ></v-switch>\n        </v-col>\n        <v-col cols=\"12\" sm=\"4\" md=\"4\">\n          <v-switch\n            v-model=\"ex11\"\n            label=\"orange\"\n            color=\"orange\"\n            value=\"orange\"\n            hide-details\n          ></v-switch>\n          <v-switch\n            v-model=\"ex11\"\n            label=\"orange darken-3\"\n            color=\"orange darken-3\"\n            value=\"orange darken-3\"\n            hide-details\n          ></v-switch>\n        </v-col>\n      </v-row>\n\n      <v-row class=\"mt-12\">\n        <v-col cols=\"12\" sm=\"4\" md=\"4\">\n          <v-switch\n            v-model=\"ex11\"\n            label=\"primary\"\n            color=\"primary\"\n            value=\"primary\"\n            hide-details\n          ></v-switch>\n          <v-switch\n            v-model=\"ex11\"\n            label=\"secondary\"\n            color=\"secondary\"\n            value=\"secondary\"\n            hide-details\n          ></v-switch>\n        </v-col>\n        <v-col cols=\"12\" sm=\"4\" md=\"4\">\n          <v-switch\n            v-model=\"ex11\"\n            label=\"success\"\n            color=\"success\"\n            value=\"success\"\n            hide-details\n          ></v-switch>\n          <v-switch\n            v-model=\"ex11\"\n            label=\"info\"\n            color=\"info\"\n            value=\"info\"\n            hide-details\n          ></v-switch>\n        </v-col>\n        <v-col cols=\"12\" sm=\"4\" md=\"4\">\n          <v-switch\n            v-model=\"ex11\"\n            label=\"warning\"\n            color=\"warning\"\n            value=\"warning\"\n            hide-details\n          ></v-switch>\n          <v-switch\n            v-model=\"ex11\"\n            label=\"error\"\n            color=\"error\"\n            value=\"error\"\n            hide-details\n          ></v-switch>\n        </v-col>\n      </v-row>\n    </v-container>\n  </v-card-text>\n</v-card>",
        js: "export default {\n  data () {\n    return {\n      ex11: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],\n    }\n  },\n}",
        ex11: ["red", "indigo", "orange", "primary", "secondary", "success", "info", "warning", "error", "red darken-3", "indigo darken-3", "orange darken-3"]
      }
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.SET_BREADCRUMB, [{
      title: "Vuetify",
      route: "alerts"
    }, {
      title: "Form Inputs & Control",
      route: "autocompletes"
    }, {
      title: "Selection Controls"
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

/***/ "./resources/js/view/pages/vuetify/forms/SelectionControls.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/forms/SelectionControls.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectionControls_vue_vue_type_template_id_6f182eac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectionControls.vue?vue&type=template&id=6f182eac& */ "./resources/js/view/pages/vuetify/forms/SelectionControls.vue?vue&type=template&id=6f182eac&");
/* harmony import */ var _SelectionControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectionControls.vue?vue&type=script&lang=js& */ "./resources/js/view/pages/vuetify/forms/SelectionControls.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SelectionControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SelectionControls_vue_vue_type_template_id_6f182eac___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectionControls_vue_vue_type_template_id_6f182eac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/vuetify/forms/SelectionControls.vue"
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

/***/ "./resources/js/view/pages/vuetify/forms/SelectionControls.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/forms/SelectionControls.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectionControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectionControls.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/SelectionControls.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectionControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/view/pages/vuetify/forms/SelectionControls.vue?vue&type=template&id=6f182eac&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/forms/SelectionControls.vue?vue&type=template&id=6f182eac& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectionControls_vue_vue_type_template_id_6f182eac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectionControls_vue_vue_type_template_id_6f182eac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectionControls_vue_vue_type_template_id_6f182eac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectionControls.vue?vue&type=template&id=6f182eac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/SelectionControls.vue?vue&type=template&id=6f182eac&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/SelectionControls.vue?vue&type=template&id=6f182eac&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/SelectionControls.vue?vue&type=template&id=6f182eac& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Selection controls")]),
            _vm._v(
              " Selection control components allow a user to\n      select options. These components "
            ),
            _c("strong", [_vm._v("must")]),
            _vm._v(" be used with the\n      "),
            _c("code", [_vm._v("v-model")]),
            _vm._v(" prop as they do not maintain their own state.\n      "),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href:
                    "https://vuetifyjs.com/en/components/selection-controls",
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
              attrs: { title: "Checkboxes - Boolean" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c("v-checkbox", {
                            attrs: {
                              label:
                                "Checkbox 1: " + _vm.code1.checkbox1.toString()
                            },
                            model: {
                              value: _vm.code1.checkbox1,
                              callback: function($$v) {
                                _vm.$set(_vm.code1, "checkbox1", $$v)
                              },
                              expression: "code1.checkbox1"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-checkbox", {
                            attrs: {
                              label:
                                "Checkbox 2: " + _vm.code1.checkbox2.toString()
                            },
                            model: {
                              value: _vm.code1.checkbox2,
                              callback: function($$v) {
                                _vm.$set(_vm.code1, "checkbox2", $$v)
                              },
                              expression: "code1.checkbox2"
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
              attrs: { title: "Radios - Default" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c("p", [_vm._v(_vm._s(_vm.code3.radios || "null"))]),
                          _vm._v(" "),
                          _c(
                            "v-radio-group",
                            {
                              attrs: { mandatory: false },
                              model: {
                                value: _vm.code3.radios,
                                callback: function($$v) {
                                  _vm.$set(_vm.code3, "radios", $$v)
                                },
                                expression: "code3.radios"
                              }
                            },
                            [
                              _c("v-radio", {
                                attrs: { label: "Radio 1", value: "radio-1" }
                              }),
                              _vm._v(" "),
                              _c("v-radio", {
                                attrs: { label: "Radio 2", value: "radio-2" }
                              })
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
              attrs: { title: "Radios - Colors" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Radios can be colored by using any of the builtin colors and\n            contextual names using the "
                        ),
                        _c("code", [_vm._v("color")]),
                        _vm._v(" prop.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        { attrs: { flat: "" } },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-container",
                                { attrs: { fluid: "" } },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "6"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-radio-group",
                                            {
                                              attrs: { column: "" },
                                              model: {
                                                value: _vm.code5.ex7,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.code5,
                                                    "ex7",
                                                    $$v
                                                  )
                                                },
                                                expression: "code5.ex7"
                                              }
                                            },
                                            [
                                              _c("v-radio", {
                                                attrs: {
                                                  label: "red",
                                                  color: "red",
                                                  value: "red"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-radio", {
                                                attrs: {
                                                  label: "red darken-3",
                                                  color: "red darken-3",
                                                  value: "red darken-3"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-radio", {
                                                attrs: {
                                                  label: "indigo",
                                                  color: "indigo",
                                                  value: "indigo"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-radio", {
                                                attrs: {
                                                  label: "indigo darken-3",
                                                  color: "indigo darken-3",
                                                  value: "indigo darken-3"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-radio", {
                                                attrs: {
                                                  label: "orange",
                                                  color: "orange",
                                                  value: "orange"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-radio", {
                                                attrs: {
                                                  label: "orange darken-3",
                                                  color: "orange darken-3",
                                                  value: "orange darken-3"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "6"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-radio-group",
                                            {
                                              attrs: { column: "" },
                                              model: {
                                                value: _vm.code5.ex8,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.code5,
                                                    "ex8",
                                                    $$v
                                                  )
                                                },
                                                expression: "code5.ex8"
                                              }
                                            },
                                            [
                                              _c("v-radio", {
                                                attrs: {
                                                  label: "primary",
                                                  color: "primary",
                                                  value: "primary"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-radio", {
                                                attrs: {
                                                  label: "secondary",
                                                  color: "secondary",
                                                  value: "secondary"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-radio", {
                                                attrs: {
                                                  label: "success",
                                                  color: "success",
                                                  value: "success"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-radio", {
                                                attrs: {
                                                  label: "info",
                                                  color: "info",
                                                  value: "info"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-radio", {
                                                attrs: {
                                                  label: "warning",
                                                  color: "warning",
                                                  value: "warning"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-radio", {
                                                attrs: {
                                                  label: "error",
                                                  color: "error",
                                                  value: "error"
                                                }
                                              })
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Switches - Colors" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Switches can be colored by using any of the builtin colors and\n            contextual names using the "
                        ),
                        _c("code", [_vm._v("color")]),
                        _vm._v(" prop.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        { attrs: { flat: "" } },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-container",
                                { attrs: { fluid: "" } },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "4",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c("v-switch", {
                                            attrs: {
                                              label: "red",
                                              color: "red",
                                              value: "red",
                                              "hide-details": ""
                                            },
                                            model: {
                                              value: _vm.code8.ex11,
                                              callback: function($$v) {
                                                _vm.$set(_vm.code8, "ex11", $$v)
                                              },
                                              expression: "code8.ex11"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-switch", {
                                            attrs: {
                                              label: "red darken-3",
                                              color: "red darken-3",
                                              value: "red darken-3",
                                              "hide-details": ""
                                            },
                                            model: {
                                              value: _vm.code8.ex11,
                                              callback: function($$v) {
                                                _vm.$set(_vm.code8, "ex11", $$v)
                                              },
                                              expression: "code8.ex11"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "4",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c("v-switch", {
                                            attrs: {
                                              label: "indigo",
                                              color: "indigo",
                                              value: "indigo",
                                              "hide-details": ""
                                            },
                                            model: {
                                              value: _vm.code8.ex11,
                                              callback: function($$v) {
                                                _vm.$set(_vm.code8, "ex11", $$v)
                                              },
                                              expression: "code8.ex11"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-switch", {
                                            attrs: {
                                              label: "indigo darken-3",
                                              color: "indigo darken-3",
                                              value: "indigo darken-3",
                                              "hide-details": ""
                                            },
                                            model: {
                                              value: _vm.code8.ex11,
                                              callback: function($$v) {
                                                _vm.$set(_vm.code8, "ex11", $$v)
                                              },
                                              expression: "code8.ex11"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "4",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c("v-switch", {
                                            attrs: {
                                              label: "orange",
                                              color: "orange",
                                              value: "orange",
                                              "hide-details": ""
                                            },
                                            model: {
                                              value: _vm.code8.ex11,
                                              callback: function($$v) {
                                                _vm.$set(_vm.code8, "ex11", $$v)
                                              },
                                              expression: "code8.ex11"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-switch", {
                                            attrs: {
                                              label: "orange darken-3",
                                              color: "orange darken-3",
                                              value: "orange darken-3",
                                              "hide-details": ""
                                            },
                                            model: {
                                              value: _vm.code8.ex11,
                                              callback: function($$v) {
                                                _vm.$set(_vm.code8, "ex11", $$v)
                                              },
                                              expression: "code8.ex11"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    { staticClass: "mt-12" },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "4",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c("v-switch", {
                                            attrs: {
                                              label: "primary",
                                              color: "primary",
                                              value: "primary",
                                              "hide-details": ""
                                            },
                                            model: {
                                              value: _vm.code8.ex11,
                                              callback: function($$v) {
                                                _vm.$set(_vm.code8, "ex11", $$v)
                                              },
                                              expression: "code8.ex11"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-switch", {
                                            attrs: {
                                              label: "secondary",
                                              color: "secondary",
                                              value: "secondary",
                                              "hide-details": ""
                                            },
                                            model: {
                                              value: _vm.code8.ex11,
                                              callback: function($$v) {
                                                _vm.$set(_vm.code8, "ex11", $$v)
                                              },
                                              expression: "code8.ex11"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "4",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c("v-switch", {
                                            attrs: {
                                              label: "success",
                                              color: "success",
                                              value: "success",
                                              "hide-details": ""
                                            },
                                            model: {
                                              value: _vm.code8.ex11,
                                              callback: function($$v) {
                                                _vm.$set(_vm.code8, "ex11", $$v)
                                              },
                                              expression: "code8.ex11"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-switch", {
                                            attrs: {
                                              label: "info",
                                              color: "info",
                                              value: "info",
                                              "hide-details": ""
                                            },
                                            model: {
                                              value: _vm.code8.ex11,
                                              callback: function($$v) {
                                                _vm.$set(_vm.code8, "ex11", $$v)
                                              },
                                              expression: "code8.ex11"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "4",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c("v-switch", {
                                            attrs: {
                                              label: "warning",
                                              color: "warning",
                                              value: "warning",
                                              "hide-details": ""
                                            },
                                            model: {
                                              value: _vm.code8.ex11,
                                              callback: function($$v) {
                                                _vm.$set(_vm.code8, "ex11", $$v)
                                              },
                                              expression: "code8.ex11"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-switch", {
                                            attrs: {
                                              label: "error",
                                              color: "error",
                                              value: "error",
                                              "hide-details": ""
                                            },
                                            model: {
                                              value: _vm.code8.ex11,
                                              callback: function($$v) {
                                                _vm.$set(_vm.code8, "ex11", $$v)
                                              },
                                              expression: "code8.ex11"
                                            }
                                          })
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
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code8.html) + "\n        "
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
                        "\n          " + _vm._s(_vm.code8.js) + "\n        "
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
              attrs: { title: "Checkboxes - Array" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c("p", [_vm._v(_vm._s(_vm.code2.selected))]),
                          _vm._v(" "),
                          _c("v-checkbox", {
                            attrs: { label: "John", value: "John" },
                            model: {
                              value: _vm.code2.selected,
                              callback: function($$v) {
                                _vm.$set(_vm.code2, "selected", $$v)
                              },
                              expression: "code2.selected"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-checkbox", {
                            attrs: { label: "Jacob", value: "Jacob" },
                            model: {
                              value: _vm.code2.selected,
                              callback: function($$v) {
                                _vm.$set(_vm.code2, "selected", $$v)
                              },
                              expression: "code2.selected"
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
              attrs: { title: "Switches - Boolean" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c("v-switch", {
                            attrs: {
                              label: "Switch 1: " + _vm.code4.switch1.toString()
                            },
                            model: {
                              value: _vm.code4.switch1,
                              callback: function($$v) {
                                _vm.$set(_vm.code4, "switch1", $$v)
                              },
                              expression: "code4.switch1"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-switch", {
                            attrs: {
                              label: "Switch 2: " + _vm.code4.switch2.toString()
                            },
                            model: {
                              value: _vm.code4.switch2,
                              callback: function($$v) {
                                _vm.$set(_vm.code4, "switch2", $$v)
                              },
                              expression: "code4.switch2"
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
              attrs: { title: "Switches - States" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "v-row",
                            { staticClass: "dark--text" },
                            [
                              _c("v-col", { attrs: { cols: "6" } }, [
                                _vm._v("on")
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "6" } }, [
                                _vm._v("off")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-switch", {
                                    attrs: { value: "", "input-value": "true" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [_c("v-switch")],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            { staticClass: "dark--text" },
                            [
                              _c("v-col", { attrs: { cols: "6" } }, [
                                _vm._v("on disabled")
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "6" } }, [
                                _vm._v("off disabled")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-switch", {
                                    attrs: {
                                      value: "",
                                      "input-value": "true",
                                      disabled: ""
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [_c("v-switch", { attrs: { disabled: "" } })],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            { staticClass: "dark--text" },
                            [
                              _c("v-col", { attrs: { cols: "6" } }, [
                                _vm._v("on loading")
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "6" } }, [
                                _vm._v("off loading")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-switch", {
                                    attrs: {
                                      loading: "warning",
                                      value: "",
                                      "input-value": "true"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-switch", {
                                    attrs: { loading: "warning" }
                                  })
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Label slot" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Selection controls' labels can be defined in\n            "
                        ),
                        _c("code", [_vm._v("label")]),
                        _vm._v(
                          " slot - that will allow to use HTML content\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c("v-checkbox", {
                            scopedSlots: _vm._u([
                              {
                                key: "label",
                                fn: function() {
                                  return [
                                    _c(
                                      "div",
                                      [
                                        _vm._v(
                                          "\n                  I agree that\n                  "
                                        ),
                                        _c(
                                          "v-tooltip",
                                          {
                                            attrs: { bottom: "" },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var on = ref.on
                                                  return [
                                                    _c(
                                                      "a",
                                                      _vm._g(
                                                        {
                                                          attrs: {
                                                            target: "_blank",
                                                            href:
                                                              "http://vuetifyjs.com"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.stopPropagation()
                                                            }
                                                          }
                                                        },
                                                        on
                                                      ),
                                                      [
                                                        _vm._v(
                                                          "\n                        Vuetify\n                      "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                }
                                              }
                                            ])
                                          },
                                          [
                                            _vm._v(
                                              "\n                    Opens in new window\n                  "
                                            )
                                          ]
                                        ),
                                        _vm._v(
                                          "\n                  is awesome\n                "
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value: _vm.code7.checkbox,
                              callback: function($$v) {
                                _vm.$set(_vm.code7, "checkbox", $$v)
                              },
                              expression: "code7.checkbox"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-radio-group",
                            {
                              scopedSlots: _vm._u([
                                {
                                  key: "label",
                                  fn: function() {
                                    return [
                                      _c("div", [
                                        _vm._v("Your favourite "),
                                        _c("strong", [_vm._v("search engine")])
                                      ])
                                    ]
                                  },
                                  proxy: true
                                }
                              ]),
                              model: {
                                value: _vm.code7.radios,
                                callback: function($$v) {
                                  _vm.$set(_vm.code7, "radios", $$v)
                                },
                                expression: "code7.radios"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c("v-radio", {
                                attrs: { value: "Google" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "label",
                                    fn: function() {
                                      return [
                                        _c("div", [
                                          _vm._v(
                                            "\n                    Of course it's\n                    "
                                          ),
                                          _c(
                                            "strong",
                                            { staticClass: "success--text" },
                                            [_vm._v("Google")]
                                          )
                                        ])
                                      ]
                                    },
                                    proxy: true
                                  }
                                ])
                              }),
                              _vm._v(" "),
                              _c("v-radio", {
                                attrs: { value: "Duckduckgo" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "label",
                                    fn: function() {
                                      return [
                                        _c("div", [
                                          _vm._v(
                                            "\n                    Definitely\n                    "
                                          ),
                                          _c(
                                            "strong",
                                            { staticClass: "primary--text" },
                                            [_vm._v("Duckduckgo")]
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
                          _c("v-switch", {
                            scopedSlots: _vm._u([
                              {
                                key: "label",
                                fn: function() {
                                  return [
                                    _vm._v(
                                      "\n                Turn on the progress:\n                "
                                    ),
                                    _c("v-progress-circular", {
                                      staticClass: "ml-2",
                                      attrs: {
                                        indeterminate: _vm.code7.switchMe,
                                        value: 0,
                                        size: "24"
                                      }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value: _vm.code7.switchMe,
                              callback: function($$v) {
                                _vm.$set(_vm.code7, "switchMe", $$v)
                              },
                              expression: "code7.switchMe"
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
                        "\n          " + _vm._s(_vm.code7.html) + "\n        "
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
                        "\n          " + _vm._s(_vm.code7.js) + "\n        "
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