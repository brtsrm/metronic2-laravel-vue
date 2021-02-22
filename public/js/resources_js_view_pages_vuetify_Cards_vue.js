(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_pages_vuetify_Cards_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Cards.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Cards.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      code1: {
        html: "<v-card\n  class=\"mx-auto\"\n  max-width=\"344\"\n  outlined\n>\n  <v-list-item three-line>\n    <v-list-item-content>\n      <div class=\"overline mb-4\">OVERLINE</div>\n      <v-list-item-title class=\"headline mb-1\">Headline 5</v-list-item-title>\n      <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>\n    </v-list-item-content>\n\n    <v-list-item-avatar\n      tile\n      size=\"80\"\n      color=\"grey\"\n    ></v-list-item-avatar>\n  </v-list-item>\n\n  <v-card-actions>\n    <v-btn text>Button</v-btn>\n    <v-btn text>Button</v-btn>\n  </v-card-actions>\n</v-card>"
      },
      code2: {
        html: "<v-card class=\"d-inline-block mx-auto\">\n  <v-container>\n    <v-row justify=\"space-between\">\n      <v-col cols=\"auto\">\n        <v-img\n          height=\"200\"\n          width=\"200\"\n          src=\"media/stock-600x600/img-1.jpg\"\n        ></v-img>\n      </v-col>\n\n      <v-col\n        cols=\"auto\"\n        class=\"text-center pl-0\"\n      >\n        <v-row\n          class=\"flex-column ma-0 fill-height\"\n          justify=\"center\"\n        >\n          <v-col class=\"px-0\">\n            <v-btn icon>\n              <v-icon>mdi-heart</v-icon>\n            </v-btn>\n          </v-col>\n\n          <v-col class=\"px-0\">\n            <v-btn icon>\n              <v-icon>mdi-bookmark</v-icon>\n            </v-btn>\n          </v-col>\n\n          <v-col class=\"px-0\">\n            <v-btn icon>\n              <v-icon>mdi-share-variant</v-icon>\n            </v-btn>\n          </v-col>\n        </v-row>\n      </v-col>\n    </v-row>\n  </v-container>\n</v-card>"
      },
      code3: {
        html: "<v-card\n  class=\"mx-auto\"\n  max-width=\"344\"\n>\n  <v-card-text>\n    <div>Word of the Day</div>\n    <p class=\"display-1 text--primary\">\n      be\u2022nev\u2022o\u2022lent\n    </p>\n    <p>adjective</p>\n    <div class=\"text--primary\">\n      well meaning and kindly.<br>\n      \"a benevolent smile\"\n    </div>\n  </v-card-text>\n  <v-card-actions>\n    <v-btn\n      text\n      color=\"deep-purple accent-4\"\n    >\n      Learn More\n    </v-btn>\n  </v-card-actions>\n</v-card>"
      },
      code4: {
        html: "<v-card\n  class=\"mx-auto\"\n  max-width=\"400\"\n>\n  <v-img\n    class=\"white--text align-end\"\n    height=\"200px\"\n    src=\"media/stock-600x600/img-1.jpg\"\n  >\n    <v-card-title>Top 10 Australian beaches</v-card-title>\n  </v-img>\n\n  <v-card-subtitle class=\"pb-0\">Number 10</v-card-subtitle>\n\n  <v-card-text class=\"text--primary\">\n    <div>Whitehaven Beach</div>\n\n    <div>Whitsunday Island, Whitsunday Islands</div>\n  </v-card-text>\n\n  <v-card-actions>\n    <v-btn\n      color=\"orange\"\n      text\n    >\n      Share\n    </v-btn>\n\n    <v-btn\n      color=\"orange\"\n      text\n    >\n      Explore\n    </v-btn>\n  </v-card-actions>\n</v-card>"
      },
      code5: {
        html: "<v-card\n  class=\"mx-auto\"\n  max-width=\"500\"\n>\n  <v-system-bar\n    color=\"indigo darken-2\"\n    dark\n  >\n    <v-spacer></v-spacer>\n\n    <v-icon>mdi-window-minimize</v-icon>\n\n    <v-icon>mdi-window-maximize</v-icon>\n\n    <v-icon>mdi-close</v-icon>\n  </v-system-bar>\n\n  <v-toolbar\n    color=\"indigo\"\n    dark\n  >\n    <v-app-bar-nav-icon></v-app-bar-nav-icon>\n\n    <v-toolbar-title>Discover</v-toolbar-title>\n\n    <v-spacer></v-spacer>\n\n    <v-btn icon>\n      <v-icon>mdi-magnify</v-icon>\n    </v-btn>\n  </v-toolbar>\n\n  <v-container fluid>\n    <v-row dense>\n      <v-col\n        v-for=\"card in cards\"\n        :key=\"card.title\"\n        :cols=\"card.flex\"\n      >\n        <v-card>\n          <v-img\n            :src=\"card.src\"\n            class=\"white--text align-end\"\n            gradient=\"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)\"\n            height=\"200px\"\n          >\n            <v-card-title v-text=\"card.title\"></v-card-title>\n          </v-img>\n\n          <v-card-actions>\n            <v-spacer></v-spacer>\n\n            <v-btn icon>\n              <v-icon>mdi-heart</v-icon>\n            </v-btn>\n\n            <v-btn icon>\n              <v-icon>mdi-bookmark</v-icon>\n            </v-btn>\n\n            <v-btn icon>\n              <v-icon>mdi-share-variant</v-icon>\n            </v-btn>\n          </v-card-actions>\n        </v-card>\n      </v-col>\n    </v-row>\n  </v-container>\n</v-card>",
        js: "export default {\n  data: () => ({\n    cards: [\n      {\n        title: \"Pre-fab homes\",\n        src: \"media/stock-600x600/img-15.jpg\",\n        flex: 12\n      },\n      {\n        title: \"Favorite road trips\",\n        src: \"media/stock-600x600/img-2.jpg\",\n        flex: 6\n      },\n      {\n        title: \"Best airlines\",\n        src: \"media/stock-600x600/img-3.jpg\",\n        flex: 6\n      }\n    ]\n  }),\n}",
        cards: [{
          title: "Pre-fab homes",
          src: "media/stock-600x600/img-15.jpg",
          flex: 12
        }, {
          title: "Favorite road trips",
          src: "media/stock-600x600/img-2.jpg",
          flex: 6
        }, {
          title: "Best airlines",
          src: "media/stock-600x600/img-3.jpg",
          flex: 6
        }]
      },
      code6: {
        html: "<v-card\n  max-width=\"400\"\n  class=\"mx-auto\"\n>\n  <v-system-bar\n    color=\"pink darken-2\"\n    dark\n  >\n    <v-spacer></v-spacer>\n\n    <v-icon>mdi-window-minimize</v-icon>\n\n    <v-icon>mdi-window-maximize</v-icon>\n\n    <v-icon>mdi-close</v-icon>\n  </v-system-bar>\n\n  <v-app-bar\n    dark\n    color=\"pink\"\n  >\n    <v-app-bar-nav-icon></v-app-bar-nav-icon>\n\n    <v-toolbar-title>My Music</v-toolbar-title>\n\n    <v-spacer></v-spacer>\n\n    <v-btn icon>\n      <v-icon>mdi-magnify</v-icon>\n    </v-btn>\n  </v-app-bar>\n\n  <v-container>\n    <v-row dense>\n      <v-col cols=\"12\">\n        <v-card\n          color=\"#385F73\"\n          dark\n        >\n          <v-card-title class=\"headline\">Unlimited music now</v-card-title>\n\n          <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>\n\n          <v-card-actions>\n            <v-btn text>Listen Now</v-btn>\n          </v-card-actions>\n        </v-card>\n      </v-col>\n\n      <v-col\n        v-for=\"(item, i) in items\"\n        :key=\"i\"\n        cols=\"12\"\n      >\n        <v-card\n          :color=\"item.color\"\n          dark\n        >\n          <div class=\"d-flex flex-no-wrap justify-space-between\">\n            <div>\n              <v-card-title\n                class=\"headline\"\n                v-text=\"item.title\"\n              ></v-card-title>\n\n              <v-card-subtitle v-text=\"item.artist\"></v-card-subtitle>\n            </div>\n\n            <v-avatar\n              class=\"ma-3\"\n              size=\"125\"\n              tile\n            >\n              <v-img :src=\"item.src\"></v-img>\n            </v-avatar>\n          </div>\n        </v-card>\n      </v-col>\n    </v-row>\n  </v-container>\n</v-card>",
        js: " export default {\n  data: () => ({\n    items: [\n      {\n        color: '#1F7087',\n        src: 'media/stock-600x600/img-16.jpg',\n        title: 'Supermodel',\n        artist: 'Foster the People',\n      },\n      {\n        color: '#952175',\n        src: 'media/stock-600x600/img-17.jpg',\n        title: 'Halcyon Days',\n        artist: 'Ellie Goulding',\n      },\n    ],\n  }),\n}",
        items: [{
          color: "#1F7087",
          src: "media/stock-600x600/img-16.jpg",
          title: "Supermodel",
          artist: "Foster the People"
        }, {
          color: "#952175",
          src: "media/stock-600x600/img-17.jpg",
          title: "Halcyon Days",
          artist: "Ellie Goulding"
        }]
      },
      code7: {
        html: " <v-card\n  class=\"mx-auto\"\n  color=\"#26c6da\"\n  dark\n  max-width=\"400\"\n>\n  <v-card-title>\n    <v-icon\n      large\n      left\n    >\n      mdi-twitter\n    </v-icon>\n    <span class=\"title font-weight-light\">Twitter</span>\n  </v-card-title>\n\n  <v-card-text class=\"headline font-weight-bold\">\n    \"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.\"\n  </v-card-text>\n\n  <v-card-actions>\n    <v-list-item class=\"grow\">\n      <v-list-item-avatar color=\"grey darken-3\">\n        <v-img\n          class=\"elevation-6\"\n          src=\"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light\"\n        ></v-img>\n      </v-list-item-avatar>\n\n      <v-list-item-content>\n        <v-list-item-title>Evan You</v-list-item-title>\n      </v-list-item-content>\n\n      <v-row\n        align=\"center\"\n        justify=\"end\"\n      >\n        <v-icon class=\"mr-1\">mdi-heart</v-icon>\n        <span class=\"subheading mr-2\">256</span>\n        <span class=\"mr-1\">\xB7</span>\n        <v-icon class=\"mr-1\">mdi-share-variant</v-icon>\n        <span class=\"subheading\">45</span>\n      </v-row>\n    </v-list-item>\n  </v-card-actions>\n</v-card>"
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
      title: "Cards"
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

/***/ "./resources/js/view/pages/vuetify/Cards.vue":
/*!***************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Cards.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cards_vue_vue_type_template_id_454c410b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards.vue?vue&type=template&id=454c410b& */ "./resources/js/view/pages/vuetify/Cards.vue?vue&type=template&id=454c410b&");
/* harmony import */ var _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards.vue?vue&type=script&lang=js& */ "./resources/js/view/pages/vuetify/Cards.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Cards_vue_vue_type_template_id_454c410b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Cards_vue_vue_type_template_id_454c410b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/vuetify/Cards.vue"
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

/***/ "./resources/js/view/pages/vuetify/Cards.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Cards.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cards.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Cards.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/view/pages/vuetify/Cards.vue?vue&type=template&id=454c410b&":
/*!**********************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Cards.vue?vue&type=template&id=454c410b& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_454c410b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_454c410b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_454c410b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cards.vue?vue&type=template&id=454c410b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Cards.vue?vue&type=template&id=454c410b&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Cards.vue?vue&type=template&id=454c410b&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Cards.vue?vue&type=template&id=454c410b& ***!
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
            _vm._v(" The "),
            _c("code", [_vm._v("v-card")]),
            _vm._v(
              " component is a versatile component\n      that can be used for anything from a panel to a static image. The card\n      component has numerous helper components to make markup as easy as\n      possible. Components that have no listed options use Vue's functional\n      component option for faster rendering and serve as markup sugar to make\n      building easier.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/cards",
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
              attrs: { title: "Outlined cards" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "344", outlined: "" }
                        },
                        [
                          _c(
                            "v-list-item",
                            { attrs: { "three-line": "" } },
                            [
                              _c(
                                "v-list-item-content",
                                [
                                  _c("div", { staticClass: "overline mb-4" }, [
                                    _vm._v("OVERLINE")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-title",
                                    { staticClass: "headline mb-1" },
                                    [_vm._v("Headline 5")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", [
                                    _vm._v(
                                      "Greyhound divisely hello coldly\n                  fonwderfully"
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-avatar", {
                                attrs: { tile: "", size: "80", color: "grey" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-btn", { attrs: { text: "" } }, [
                                _vm._v("Button")
                              ]),
                              _vm._v(" "),
                              _c("v-btn", { attrs: { text: "" } }, [
                                _vm._v("Button")
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
              attrs: { title: "Information card" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "344" }
                        },
                        [
                          _c("v-card-text", [
                            _c("div", [_vm._v("Word of the Day")]),
                            _vm._v(" "),
                            _c(
                              "p",
                              { staticClass: "display-1 text--primary" },
                              [
                                _vm._v(
                                  "\n                be•nev•o•lent\n              "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("p", [_vm._v("adjective")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "text--primary" }, [
                              _vm._v(
                                "\n                well meaning and kindly."
                              ),
                              _c("br"),
                              _vm._v(
                                '\n                "a benevolent smile"\n              '
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    text: "",
                                    color: "deep-purple accent-4"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Learn More\n              "
                                  )
                                ]
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
                }
              ])
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Grids" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "500" }
                        },
                        [
                          _c(
                            "v-system-bar",
                            { attrs: { color: "indigo darken-2", dark: "" } },
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-icon", [_vm._v("mdi-window-minimize")]),
                              _vm._v(" "),
                              _c("v-icon", [_vm._v("mdi-window-maximize")]),
                              _vm._v(" "),
                              _c("v-icon", [_vm._v("mdi-close")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-toolbar",
                            { attrs: { color: "indigo", dark: "" } },
                            [
                              _c("v-app-bar-nav-icon"),
                              _vm._v(" "),
                              _c("v-toolbar-title", [_vm._v("Discover")]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-magnify")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            { attrs: { fluid: "" } },
                            [
                              _c(
                                "v-row",
                                { attrs: { dense: "" } },
                                _vm._l(_vm.code5.cards, function(card) {
                                  return _c(
                                    "v-col",
                                    {
                                      key: card.title,
                                      attrs: { cols: card.flex }
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        [
                                          _c(
                                            "v-img",
                                            {
                                              staticClass:
                                                "white--text align-end",
                                              attrs: {
                                                src: card.src,
                                                gradient:
                                                  "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                                height: "200px"
                                              }
                                            },
                                            [
                                              _c("v-card-title", {
                                                domProps: {
                                                  textContent: _vm._s(
                                                    card.title
                                                  )
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-actions",
                                            [
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                { attrs: { icon: "" } },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-heart")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                { attrs: { icon: "" } },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-bookmark")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                { attrs: { icon: "" } },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-share-variant")
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
                                }),
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
              attrs: { title: "Twitter card" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("v-card")]),
                        _vm._v(
                          " component has multiple children components\n            that help you build complex examples without having to worry about\n            spacing. This example is comprised of the\n            "
                        ),
                        _c("code", [_vm._v("v-card-title")]),
                        _vm._v(", "),
                        _c("code", [_vm._v("v-card-text")]),
                        _vm._v(" and\n            "),
                        _c("code", [_vm._v("v-card-actions")]),
                        _vm._v(" components.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto",
                          attrs: {
                            color: "#26c6da",
                            dark: "",
                            "max-width": "400"
                          }
                        },
                        [
                          _c(
                            "v-card-title",
                            [
                              _c("v-icon", { attrs: { large: "", left: "" } }, [
                                _vm._v(
                                  "\n                mdi-twitter\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "title font-weight-light" },
                                [_vm._v("Twitter")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "headline font-weight-bold" },
                            [
                              _vm._v(
                                '\n              "Turns out semicolon-less style is easier and safer in TS\n              because most gotcha edge cases are type invalid as well."\n            '
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-list-item",
                                { staticClass: "grow" },
                                [
                                  _c(
                                    "v-list-item-avatar",
                                    { attrs: { color: "grey darken-3" } },
                                    [
                                      _c("v-img", {
                                        staticClass: "elevation-6",
                                        attrs: {
                                          src:
                                            "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", [
                                        _vm._v("Evan You")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    {
                                      attrs: { align: "center", justify: "end" }
                                    },
                                    [
                                      _c("v-icon", { staticClass: "mr-1" }, [
                                        _vm._v("mdi-heart")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "subheading mr-2" },
                                        [_vm._v("256")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "mr-1" }, [
                                        _vm._v("·")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-icon", { staticClass: "mr-1" }, [
                                        _vm._v("mdi-share-variant")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "subheading" },
                                        [_vm._v("45")]
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
                        "\n          " + _vm._s(_vm.code7.html) + "\n        "
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
              attrs: { title: "Intermediate" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-card",
                        { staticClass: "d-inline-block mx-auto" },
                        [
                          _c(
                            "v-container",
                            [
                              _c(
                                "v-row",
                                { attrs: { justify: "space-between" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "auto" } },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          height: "200",
                                          width: "200",
                                          src: "media/stock-600x600/img-1.jpg"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "text-center pl-0",
                                      attrs: { cols: "auto" }
                                    },
                                    [
                                      _c(
                                        "v-row",
                                        {
                                          staticClass:
                                            "flex-column ma-0 fill-height",
                                          attrs: { justify: "center" }
                                        },
                                        [
                                          _c(
                                            "v-col",
                                            { staticClass: "px-0" },
                                            [
                                              _c(
                                                "v-btn",
                                                { attrs: { icon: "" } },
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
                                            { staticClass: "px-0" },
                                            [
                                              _c(
                                                "v-btn",
                                                { attrs: { icon: "" } },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-bookmark")
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
                                            { staticClass: "px-0" },
                                            [
                                              _c(
                                                "v-btn",
                                                { attrs: { icon: "" } },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-share-variant")
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
              attrs: { title: "Media with text" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "400" }
                        },
                        [
                          _c(
                            "v-img",
                            {
                              staticClass: "white--text align-end",
                              attrs: {
                                height: "200px",
                                src: "media/stock-600x600/img-18.jpg"
                              }
                            },
                            [
                              _c("v-card-title", [
                                _vm._v("Top 10 Australian beaches")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-card-subtitle", { staticClass: "pb-0" }, [
                            _vm._v("Number 10")
                          ]),
                          _vm._v(" "),
                          _c("v-card-text", { staticClass: "text--primary" }, [
                            _c("div", [_vm._v("Whitehaven Beach")]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v("Whitsunday Island, Whitsunday Islands")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                { attrs: { color: "orange", text: "" } },
                                [
                                  _vm._v(
                                    "\n                Share\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "orange", text: "" } },
                                [
                                  _vm._v(
                                    "\n                Explore\n              "
                                  )
                                ]
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
              attrs: { title: "Horizontal Cards" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Using "),
                        _c("code", [_vm._v("v-flex")]),
                        _vm._v(
                          ", you can create customized horizontal\n            cards. Use the "
                        ),
                        _c("code", [_vm._v("contain")]),
                        _vm._v(" property to shrink the\n            "),
                        _c("code", [_vm._v("v-img")]),
                        _vm._v(
                          " to fit inside the container, instead of\n            covering.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "400" }
                        },
                        [
                          _c(
                            "v-system-bar",
                            { attrs: { color: "pink darken-2", dark: "" } },
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-icon", [_vm._v("mdi-window-minimize")]),
                              _vm._v(" "),
                              _c("v-icon", [_vm._v("mdi-window-maximize")]),
                              _vm._v(" "),
                              _c("v-icon", [_vm._v("mdi-close")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-app-bar",
                            { attrs: { dark: "", color: "pink" } },
                            [
                              _c("v-app-bar-nav-icon"),
                              _vm._v(" "),
                              _c("v-toolbar-title", [_vm._v("My Music")]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-magnify")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            [
                              _c(
                                "v-row",
                                { attrs: { dense: "" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c(
                                        "v-card",
                                        {
                                          attrs: { color: "#385F73", dark: "" }
                                        },
                                        [
                                          _c(
                                            "v-card-title",
                                            { staticClass: "headline" },
                                            [_vm._v("Unlimited music now")]
                                          ),
                                          _vm._v(" "),
                                          _c("v-card-subtitle", [
                                            _vm._v(
                                              "Listen to your favorite artists and albums whenever and\n                      wherever, online and offline."
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-actions",
                                            [
                                              _c(
                                                "v-btn",
                                                { attrs: { text: "" } },
                                                [_vm._v("Listen Now")]
                                              )
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
                                  _vm._l(_vm.code6.items, function(item, i) {
                                    return _c(
                                      "v-col",
                                      { key: i, attrs: { cols: "12" } },
                                      [
                                        _c(
                                          "v-card",
                                          {
                                            attrs: {
                                              color: item.color,
                                              dark: ""
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex flex-no-wrap justify-space-between"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  [
                                                    _c("v-card-title", {
                                                      staticClass: "headline",
                                                      domProps: {
                                                        textContent: _vm._s(
                                                          item.title
                                                        )
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("v-card-subtitle", {
                                                      domProps: {
                                                        textContent: _vm._s(
                                                          item.artist
                                                        )
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-avatar",
                                                  {
                                                    staticClass: "ma-3",
                                                    attrs: {
                                                      size: "125",
                                                      tile: ""
                                                    }
                                                  },
                                                  [
                                                    _c("v-img", {
                                                      attrs: { src: item.src }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  })
                                ],
                                2
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
                },
                {
                  key: "js",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code6.js) + "\n        "
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