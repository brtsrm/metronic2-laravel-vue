(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_pages_vuetify_Buttons_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Buttons.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Buttons.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        html: " <v-row align=\"center\">\n  <v-col class=\"text-center\" cols=\"12\" sm=\"4\">\n    <div class=\"my-2\">\n      <v-btn text small>Normal</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn text small color=\"primary\">Primary</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn text small color=\"error\">Error</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn text small disabled>Disabled</v-btn>\n    </div>\n  </v-col>\n\n  <v-col class=\"text-center\" cols=\"12\" sm=\"4\">\n    <div class=\"my-2\">\n      <v-btn text>Normal</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn text color=\"primary\">Primary</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn text color=\"error\">Error</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn text disabled>Disabled</v-btn>\n    </div>\n  </v-col>\n\n  <v-col class=\"text-center\" cols=\"12\" sm=\"4\">\n    <div class=\"my-2\">\n      <v-btn text large>Normal</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn text large color=\"primary\">Primary</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn text large color=\"error\">Error</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn text large disabled>Disabled</v-btn>\n    </div>\n  </v-col>\n</v-row>"
      },
      code2: {
        html: "<v-row align=\"center\">\n  <v-col class=\"text-center\" cols=\"12\" sm=\"4\">\n    <div class=\"my-2\">\n      <v-btn small>Normal</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn small color=\"primary\">Primary</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn small color=\"error\">Error</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn small disabled>Disabled</v-btn>\n    </div>\n  </v-col>\n  <v-col class=\"text-center\" cols=\"12\" sm=\"4\">\n    <div class=\"my-2\">\n      <v-btn>Normal</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn color=\"primary\">Primary</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn color=\"error\">Error</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn disabled>Disabled</v-btn>\n    </div>\n  </v-col>\n  <v-col class=\"text-center\" cols=\"12\" sm=\"4\">\n    <div class=\"my-2\">\n      <v-btn large>Normal</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn large color=\"primary\">Primary</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn large color=\"error\">Error</v-btn>\n    </div>\n    <div class=\"my-2\">\n      <v-btn large disabled>Disabled</v-btn>\n    </div>\n  </v-col>\n</v-row>"
      },
      code3: {
        html: " <v-container id=\"dropdown-example\">\n  <v-row>\n    <v-col cols=\"12\" sm=\"4\">\n      <p>Overflow</p>\n\n      <v-overflow-btn\n        class=\"my-2\"\n        :items=\"dropdown_font\"\n        label=\"Overflow Btn\"\n        target=\"#dropdown-example\"\n      ></v-overflow-btn>\n    </v-col>\n\n    <v-col cols=\"12\" sm=\"4\">\n      <p>Segmented</p>\n\n      <v-overflow-btn\n        class=\"my-2\"\n        :items=\"dropdown_icon\"\n        label=\"Segmented Btn\"\n        segmented\n        target=\"#dropdown-example\"\n      ></v-overflow-btn>\n    </v-col>\n\n    <v-col cols=\"12\" sm=\"4\">\n      <p>Editable</p>\n\n      <v-overflow-btn\n        class=\"my-2\"\n        :items=\"dropdown_edit\"\n        label=\"Editable Btn\"\n        editable\n        item-value=\"text\"\n      ></v-overflow-btn>\n    </v-col>\n  </v-row>\n</v-container>",
        js: "export default {\n  data: () => ({\n    dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],\n    dropdown_icon: [\n      { text: 'list', callback: () => console.log('list') },\n      { text: 'favorite', callback: () => console.log('favorite') },\n      { text: 'delete', callback: () => console.log('delete') },\n    ],\n    dropdown_edit: [\n      { text: '100%' },\n      { text: '75%' },\n      { text: '50%' },\n      { text: '25%' },\n      { text: '0%' },\n    ],\n  }),\n}",
        dropdown_font: ["Arial", "Calibri", "Courier", "Verdana"],
        dropdown_icon: [{
          text: "list",
          callback: function callback() {
            /*console.log("list")*/
          }
        }, {
          text: "favorite",
          callback: function callback() {
            /*console.log("favorite")*/
          }
        }, {
          text: "delete",
          callback: function callback() {
            /*console.log("delete")*/
          }
        }],
        dropdown_edit: [{
          text: "100%"
        }, {
          text: "75%"
        }, {
          text: "50%"
        }, {
          text: "25%"
        }, {
          text: "0%"
        }]
      },
      code4: {
        html: "<v-card flat>\n  <v-card-text>\n    <v-container fluid class=\"pa-0\">\n      <v-row>\n        <v-col cols=\"12\">\n          <p>Normal</p>\n        </v-col>\n\n        <v-col cols=\"12\" sm=\"3\">\n          <v-btn text icon color=\"pink\">\n            <v-icon>mdi-heart</v-icon>\n          </v-btn>\n        </v-col>\n\n        <v-col cols=\"12\" sm=\"3\">\n          <v-btn text icon color=\"indigo\">\n            <v-icon>mdi-star</v-icon>\n          </v-btn>\n        </v-col>\n\n        <v-col cols=\"12\" sm=\"3\">\n          <v-btn text icon color=\"green\">\n            <v-icon>mdi-cached</v-icon>\n          </v-btn>\n        </v-col>\n\n        <v-col cols=\"12\" sm=\"3\">\n          <v-btn text icon color=\"deep-orange\">\n            <v-icon>mdi-thumb-up</v-icon>\n          </v-btn>\n        </v-col>\n      </v-row>\n\n      <v-row class=\"mt-12\">\n        <v-col cols=\"12\">\n          <p>Disabled</p>\n        </v-col>\n\n        <v-col cols=\"12\" sm=\"3\">\n          <v-btn icon disabled>\n            <v-icon>mdi-heart</v-icon>\n          </v-btn>\n        </v-col>\n\n        <v-col cols=\"12\" sm=\"3\">\n          <v-btn icon disabled>\n            <v-icon>mdi-star</v-icon>\n          </v-btn>\n        </v-col>\n\n        <v-col cols=\"12\" sm=\"3\">\n          <v-btn icon disabled>\n            <v-icon>mdi-cached</v-icon>\n          </v-btn>\n        </v-col>\n\n        <v-col cols=\"12\" sm=\"3\">\n          <v-btn icon disabled>\n            <v-icon>mdi-thumb-up</v-icon>\n          </v-btn>\n        </v-col>\n      </v-row>\n    </v-container>\n  </v-card-text>\n</v-card>"
      },
      code5: {
        html: "<div class=\"text-center\">\n  <v-btn class=\"mx-2\" fab dark small color=\"primary\">\n    <v-icon dark>mdi-minus</v-icon>\n  </v-btn>\n\n  <v-btn class=\"mx-2\" fab dark small color=\"pink\">\n    <v-icon dark>mdi-heart</v-icon>\n  </v-btn>\n\n  <v-btn class=\"mx-2\" fab dark color=\"indigo\">\n    <v-icon dark>mdi-plus</v-icon>\n  </v-btn>\n\n  <v-btn class=\"mx-2\" fab dark color=\"teal\">\n    <v-icon dark>mdi-format-list-bulleted-square</v-icon>\n  </v-btn>\n\n  <v-btn class=\"mx-2\" fab dark large color=\"cyan\">\n    <v-icon dark>mdi-pencil</v-icon>\n  </v-btn>\n\n  <v-btn class=\"mx-2\" fab dark large color=\"purple\">\n    <v-icon dark>mdi-android</v-icon>\n  </v-btn>\n</div>"
      },
      code6: {
        html: "<v-container fluid class=\"pa-0\">\n  <v-row align=\"center\">\n    <v-col cols=\"12\" sm=\"6\">\n      <div class=\"text-center\">\n        <div class=\"my-2\">\n          <v-btn x-small color=\"secondary\" dark>Extra small Button</v-btn>\n        </div>\n        <div class=\"my-2\">\n          <v-btn small color=\"primary\" dark>Small Button</v-btn>\n        </div>\n        <div class=\"my-2\">\n          <v-btn color=\"warning\" dark>Normal Button</v-btn>\n        </div>\n        <div class=\"my-2\">\n          <v-btn color=\"error\" dark large>Large Button</v-btn>\n        </div>\n        <div class=\"my-2\">\n          <v-btn x-large color=\"success\" dark>Extra large Button</v-btn>\n        </div>\n      </div>\n    </v-col>\n    <v-col cols=\"12\" sm=\"6\">\n      <div class=\"text-center\">\n        <div class=\"my-2\">\n          <v-btn color=\"secondary\" fab x-small dark>\n            <v-icon>mdi-television</v-icon>\n          </v-btn>\n        </div>\n        <div class=\"my-2\">\n          <v-btn color=\"primary\" fab small dark>\n            <v-icon>mdi-pencil</v-icon>\n          </v-btn>\n        </div>\n        <div class=\"my-2\">\n          <v-btn color=\"warning\" fab dark>\n            <v-icon>mdi-account-circle</v-icon>\n          </v-btn>\n        </div>\n        <div class=\"my-2\">\n          <v-btn color=\"error\" fab large dark>\n            <v-icon>mdi-alarm</v-icon>\n          </v-btn>\n        </div>\n        <div class=\"my-2\">\n          <v-btn color=\"success\" fab x-large dark>\n            <v-icon>mdi-domain</v-icon>\n          </v-btn>\n        </div>\n      </div>\n    </v-col>\n  </v-row>\n</v-container>"
      },
      code7: {
        html: "<div class=\"text-center\">\n  <v-btn class=\"ma-2\" outlined color=\"indigo\">Outlined Button</v-btn>\n  <v-btn class=\"ma-2\" outlined fab color=\"teal\">\n    <v-icon>mdi-format-list-bulleted-square</v-icon>\n  </v-btn>\n  <v-btn class=\"ma-2\" outlined large fab color=\"indigo\">\n    <v-icon>mdi-pencil</v-icon>\n  </v-btn>\n</div>"
      },
      code8: {
        html: "<div class=\"text-center\">\n  <v-btn rounded color=\"primary\" dark>Rounded Button</v-btn>\n</div>"
      },
      code9: {
        html: "<div class=\"text-center\">\n  <v-btn class=\"ma-2\" tile color=\"indigo\" dark>Tile Button</v-btn>\n  <v-btn class=\"ma-2\" tile outlined color=\"success\">\n    <v-icon left>mdi-pencil</v-icon> Edit\n  </v-btn>\n  <v-btn class=\"ma-2\" tile large color=\"teal\" icon>\n    <v-icon>mdi-vuetify</v-icon>\n  </v-btn>\n</div>"
      },
      code10: {
        html: "<div class=\"text-center\">\n  <v-btn\n    class=\"ma-2\"\n    :loading=\"loading\"\n    :disabled=\"loading\"\n    color=\"secondary\"\n    @click=\"loader = 'loading'\"\n  >\n    Accept Terms\n  </v-btn>\n\n  <v-btn\n    :loading=\"loading3\"\n    :disabled=\"loading3\"\n    color=\"blue-grey\"\n    class=\"ma-2 white--text\"\n    @click=\"loader = 'loading3'\"\n  >\n    Upload\n    <v-icon right dark>mdi-cloud-upload</v-icon>\n  </v-btn>\n\n  <v-btn\n    class=\"ma-2\"\n    :loading=\"loading2\"\n    :disabled=\"loading2\"\n    color=\"success\"\n    @click=\"loader = 'loading2'\"\n  >\n    Custom Loader\n    <template v-slot:loader>\n      <span>Loading...</span>\n    </template>\n  </v-btn>\n\n  <v-btn\n    class=\"ma-2\"\n    :loading=\"loading4\"\n    :disabled=\"loading4\"\n    color=\"info\"\n    @click=\"loader = 'loading4'\"\n  >\n    Icon Loader\n    <template v-slot:loader>\n      <span class=\"custom-loader\">\n        <v-icon light>cached</v-icon>\n      </span>\n    </template>\n  </v-btn>\n\n  <v-btn\n    :loading=\"loading5\"\n    :disabled=\"loading5\"\n    color=\"blue-grey\"\n    class=\"ma-2 white--text\"\n    fab\n    @click=\"loader = 'loading5'\"\n  >\n    <v-icon dark>mdi-cloud-upload</v-icon>\n  </v-btn>\n</div>",
        js: "export default {\n  data () {\n    return {\n      loader: null,\n      loading: false,\n      loading2: false,\n      loading3: false,\n      loading4: false,\n      loading5: false,\n    }\n  },\n  watch: {\n    loader () {\n      const l = this.loader\n      this[l] = !this[l]\n\n      setTimeout(() => (this[l] = false), 3000)\n\n      this.loader = null\n    },\n  },\n}"
      },
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false
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
      title: "Buttons"
    }]);
  },
  watch: {
    loader: function loader() {
      var _this = this;

      var l = this.loader;
      this[l] = !this[l];
      setTimeout(function () {
        return _this[l] = false;
      }, 3000);
      this.loader = null;
    }
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

/***/ "./resources/js/view/pages/vuetify/Buttons.vue":
/*!*****************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Buttons.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Buttons_vue_vue_type_template_id_37f213ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buttons.vue?vue&type=template&id=37f213ae& */ "./resources/js/view/pages/vuetify/Buttons.vue?vue&type=template&id=37f213ae&");
/* harmony import */ var _Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons.vue?vue&type=script&lang=js& */ "./resources/js/view/pages/vuetify/Buttons.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Buttons_vue_vue_type_template_id_37f213ae___WEBPACK_IMPORTED_MODULE_0__.render,
  _Buttons_vue_vue_type_template_id_37f213ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/vuetify/Buttons.vue"
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

/***/ "./resources/js/view/pages/vuetify/Buttons.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Buttons.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Buttons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Buttons.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/view/pages/vuetify/Buttons.vue?vue&type=template&id=37f213ae&":
/*!************************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Buttons.vue?vue&type=template&id=37f213ae& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_37f213ae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_37f213ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_37f213ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Buttons.vue?vue&type=template&id=37f213ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Buttons.vue?vue&type=template&id=37f213ae&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Buttons.vue?vue&type=template&id=37f213ae&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Buttons.vue?vue&type=template&id=37f213ae& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Buttons")]),
            _vm._v(" The "),
            _c("code", [_vm._v("v-btn")]),
            _vm._v(
              " component replaces the standard\n      html button with a material design theme and a multitude of options. Any\n      color helper class can be used to alter the background or text color.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/buttons",
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
              attrs: { title: "Flat" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Flat buttons have no box shadow and no background. Only on hover\n            is the container for the button shown.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { align: "center" } },
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "text-center",
                              attrs: { cols: "12", sm: "4" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { text: "", small: "" } },
                                    [_vm._v("Normal")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        text: "",
                                        small: "",
                                        color: "primary"
                                      }
                                    },
                                    [_vm._v("Primary")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        text: "",
                                        small: "",
                                        color: "error"
                                      }
                                    },
                                    [_vm._v("Error")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        text: "",
                                        small: "",
                                        disabled: ""
                                      }
                                    },
                                    [_vm._v("Disabled")]
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "text-center",
                              attrs: { cols: "12", sm: "4" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c("v-btn", { attrs: { text: "" } }, [
                                    _vm._v("Normal")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { text: "", color: "primary" } },
                                    [_vm._v("Primary")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { text: "", color: "error" } },
                                    [_vm._v("Error")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { text: "", disabled: "" } },
                                    [_vm._v("Disabled")]
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "text-center",
                              attrs: { cols: "12", sm: "4" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { text: "", large: "" } },
                                    [_vm._v("Normal")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        text: "",
                                        large: "",
                                        color: "primary"
                                      }
                                    },
                                    [_vm._v("Primary")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        text: "",
                                        large: "",
                                        color: "error"
                                      }
                                    },
                                    [_vm._v("Error")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        text: "",
                                        large: "",
                                        disabled: ""
                                      }
                                    },
                                    [_vm._v("Disabled")]
                                  )
                                ],
                                1
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
              attrs: { title: "Button Dropdown Variants" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "Button dropdowns are regular selects with additional styling."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { id: "dropdown-example" } },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c("p", [_vm._v("Overflow")]),
                                  _vm._v(" "),
                                  _c("v-overflow-btn", {
                                    staticClass: "my-2",
                                    attrs: {
                                      items: _vm.code3.dropdown_font,
                                      label: "Overflow Btn",
                                      target: "#dropdown-example"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c("p", [_vm._v("Segmented")]),
                                  _vm._v(" "),
                                  _c("v-overflow-btn", {
                                    staticClass: "my-2",
                                    attrs: {
                                      items: _vm.code3.dropdown_icon,
                                      label: "Segmented Btn",
                                      segmented: "",
                                      target: "#dropdown-example"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c("p", [_vm._v("Editable")]),
                                  _vm._v(" "),
                                  _c("v-overflow-btn", {
                                    staticClass: "my-2",
                                    attrs: {
                                      items: _vm.code3.dropdown_edit,
                                      label: "Editable Btn",
                                      editable: "",
                                      "item-value": "text"
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
              attrs: { title: "Floating" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "Floating buttons are rounded and usually contain an icon."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-2",
                              attrs: {
                                fab: "",
                                dark: "",
                                small: "",
                                color: "primary"
                              }
                            },
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("mdi-minus")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-2",
                              attrs: {
                                fab: "",
                                dark: "",
                                small: "",
                                color: "pink"
                              }
                            },
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("mdi-heart")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-2",
                              attrs: { fab: "", dark: "", color: "indigo" }
                            },
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("mdi-plus")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-2",
                              attrs: { fab: "", dark: "", color: "teal" }
                            },
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("mdi-format-list-bulleted-square")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-2",
                              attrs: {
                                fab: "",
                                dark: "",
                                large: "",
                                color: "cyan"
                              }
                            },
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("mdi-pencil")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-2",
                              attrs: {
                                fab: "",
                                dark: "",
                                large: "",
                                color: "purple"
                              }
                            },
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("mdi-android")
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
              attrs: { title: "Outlined" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "ma-2",
                              attrs: { outlined: "", color: "indigo" }
                            },
                            [_vm._v("Outlined Button")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "ma-2",
                              attrs: { outlined: "", fab: "", color: "teal" }
                            },
                            [
                              _c("v-icon", [
                                _vm._v("mdi-format-list-bulleted-square")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "ma-2",
                              attrs: {
                                outlined: "",
                                large: "",
                                fab: "",
                                color: "indigo"
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-pencil")])],
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
                        "\n          " + _vm._s(_vm.code7.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Tile" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "ma-2",
                              attrs: { tile: "", color: "indigo", dark: "" }
                            },
                            [_vm._v("Tile Button")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "ma-2",
                              attrs: {
                                tile: "",
                                outlined: "",
                                color: "success"
                              }
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-pencil")
                              ]),
                              _vm._v(" Edit\n            ")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "ma-2",
                              attrs: {
                                tile: "",
                                large: "",
                                color: "teal",
                                icon: ""
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-vuetify")])],
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
                        "\n          " + _vm._s(_vm.code9.html) + "\n        "
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Rounded" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { rounded: "", color: "primary", dark: "" }
                            },
                            [_vm._v("Rounded Button")]
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
              attrs: { title: "Raised" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Raised buttons have a box shadow that increases when clicked. This\n            is the default style.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { align: "center" } },
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "text-center",
                              attrs: { cols: "12", sm: "4" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c("v-btn", { attrs: { small: "" } }, [
                                    _vm._v("Normal")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { small: "", color: "primary" } },
                                    [_vm._v("Primary")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { small: "", color: "error" } },
                                    [_vm._v("Error")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { small: "", disabled: "" } },
                                    [_vm._v("Disabled")]
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "text-center",
                              attrs: { cols: "12", sm: "4" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [_c("v-btn", [_vm._v("Normal")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c("v-btn", { attrs: { color: "primary" } }, [
                                    _vm._v("Primary")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c("v-btn", { attrs: { color: "error" } }, [
                                    _vm._v("Error")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c("v-btn", { attrs: { disabled: "" } }, [
                                    _vm._v("Disabled")
                                  ])
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "text-center",
                              attrs: { cols: "12", sm: "4" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c("v-btn", { attrs: { large: "" } }, [
                                    _vm._v("Normal")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { large: "", color: "primary" } },
                                    [_vm._v("Primary")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { large: "", color: "error" } },
                                    [_vm._v("Error")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-2" },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { large: "", disabled: "" } },
                                    [_vm._v("Disabled")]
                                  )
                                ],
                                1
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
              attrs: { title: "Icon" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "Icons can be used for the primary content of a button."
                        )
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
                                { staticClass: "pa-0", attrs: { fluid: "" } },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-col", { attrs: { cols: "12" } }, [
                                        _c("p", [_vm._v("Normal")])
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "3" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                text: "",
                                                icon: "",
                                                color: "pink"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-heart")
                                              ])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "3" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                text: "",
                                                icon: "",
                                                color: "indigo"
                                              }
                                            },
                                            [
                                              _c("v-icon", [_vm._v("mdi-star")])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "3" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                text: "",
                                                icon: "",
                                                color: "green"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-cached")
                                              ])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "3" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                text: "",
                                                icon: "",
                                                color: "deep-orange"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-thumb-up")
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
                                    "v-row",
                                    { staticClass: "mt-12" },
                                    [
                                      _c("v-col", { attrs: { cols: "12" } }, [
                                        _c("p", [_vm._v("Disabled")])
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "3" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { icon: "", disabled: "" }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-heart")
                                              ])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "3" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { icon: "", disabled: "" }
                                            },
                                            [
                                              _c("v-icon", [_vm._v("mdi-star")])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "3" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { icon: "", disabled: "" }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-cached")
                                              ])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", sm: "3" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { icon: "", disabled: "" }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-thumb-up")
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
              attrs: { title: "Sizing" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Buttons can be given different sizing options to fit a multitude\n            of scenarios.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { staticClass: "pa-0", attrs: { fluid: "" } },
                        [
                          _c(
                            "v-row",
                            { attrs: { align: "center" } },
                            [
                              _c("v-col", { attrs: { cols: "12", sm: "6" } }, [
                                _c("div", { staticClass: "text-center" }, [
                                  _c(
                                    "div",
                                    { staticClass: "my-2" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            "x-small": "",
                                            color: "secondary",
                                            dark: ""
                                          }
                                        },
                                        [_vm._v("Extra small Button")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "my-2" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            small: "",
                                            color: "primary",
                                            dark: ""
                                          }
                                        },
                                        [_vm._v("Small Button")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "my-2" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "warning", dark: "" }
                                        },
                                        [_vm._v("Normal Button")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "my-2" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "error",
                                            dark: "",
                                            large: ""
                                          }
                                        },
                                        [_vm._v("Large Button")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "my-2" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            "x-large": "",
                                            color: "success",
                                            dark: ""
                                          }
                                        },
                                        [_vm._v("Extra large Button")]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "12", sm: "6" } }, [
                                _c("div", { staticClass: "text-center" }, [
                                  _c(
                                    "div",
                                    { staticClass: "my-2" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "secondary",
                                            fab: "",
                                            "x-small": "",
                                            dark: ""
                                          }
                                        },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-television")
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "my-2" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "primary",
                                            fab: "",
                                            small: "",
                                            dark: ""
                                          }
                                        },
                                        [_c("v-icon", [_vm._v("mdi-pencil")])],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "my-2" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "warning",
                                            fab: "",
                                            dark: ""
                                          }
                                        },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-account-circle")
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "my-2" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "error",
                                            fab: "",
                                            large: "",
                                            dark: ""
                                          }
                                        },
                                        [_c("v-icon", [_vm._v("mdi-alarm")])],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "my-2" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "success",
                                            fab: "",
                                            "x-large": "",
                                            dark: ""
                                          }
                                        },
                                        [_c("v-icon", [_vm._v("mdi-domain")])],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ])
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
              attrs: { title: "Loaders" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Using the loading prop, you can notify a user that there is\n            processing taking place. The default behavior is to use a\n            "
                        ),
                        _c("code", [_vm._v("v-progress-circular")]),
                        _vm._v(
                          " component but this can be\n            customized.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "ma-2",
                              attrs: {
                                loading: _vm.loading,
                                disabled: _vm.loading,
                                color: "secondary"
                              },
                              on: {
                                click: function($event) {
                                  _vm.loader = "loading"
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              Accept Terms\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "ma-2 white--text",
                              attrs: {
                                loading: _vm.loading3,
                                disabled: _vm.loading3,
                                color: "blue-grey"
                              },
                              on: {
                                click: function($event) {
                                  _vm.loader = "loading3"
                                }
                              }
                            },
                            [
                              _vm._v("\n              Upload\n              "),
                              _c("v-icon", { attrs: { right: "", dark: "" } }, [
                                _vm._v("mdi-cloud-upload")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "ma-2",
                              attrs: {
                                loading: _vm.loading2,
                                disabled: _vm.loading2,
                                color: "success"
                              },
                              on: {
                                click: function($event) {
                                  _vm.loader = "loading2"
                                }
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "loader",
                                  fn: function() {
                                    return [_c("span", [_vm._v("Loading...")])]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(
                                "\n              Custom Loader\n              "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "ma-2",
                              attrs: {
                                loading: _vm.loading4,
                                disabled: _vm.loading4,
                                color: "info"
                              },
                              on: {
                                click: function($event) {
                                  _vm.loader = "loading4"
                                }
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "loader",
                                  fn: function() {
                                    return [
                                      _c(
                                        "span",
                                        { staticClass: "custom-loader" },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { light: "" } },
                                            [_vm._v("cached")]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(
                                "\n              Icon Loader\n              "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "ma-2 white--text",
                              attrs: {
                                loading: _vm.loading5,
                                disabled: _vm.loading5,
                                color: "blue-grey",
                                fab: ""
                              },
                              on: {
                                click: function($event) {
                                  _vm.loader = "loading5"
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("mdi-cloud-upload")
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
                  key: "html",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code10.html) + "\n        "
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
                        "\n          " + _vm._s(_vm.code10.js) + "\n        "
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