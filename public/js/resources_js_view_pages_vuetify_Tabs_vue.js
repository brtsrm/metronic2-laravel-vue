(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_pages_vuetify_Tabs_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Tabs.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Tabs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../view/content/CodePreview.vue */ "./resources/js/view/content/CodePreview.vue");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/store/breadcrumbs.module */ "./resources/js/core/services/store/breadcrumbs.module.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        html: "<v-card>\n  <v-toolbar flat color=\"primary\" dark>\n    <v-toolbar-title>User Profile</v-toolbar-title>\n  </v-toolbar>\n  <v-tabs vertical>\n    <v-tab>\n      <v-icon left>mdi-account</v-icon>\n      Option 1\n    </v-tab>\n    <v-tab>\n      <v-icon left>mdi-lock</v-icon>\n      Option 2\n    </v-tab>\n    <v-tab>\n      <v-icon left>mdi-access-point</v-icon>\n      Option 3\n    </v-tab>\n\n    <v-tab-item>\n      <v-card flat>\n        <v-card-text>\n          <p>\n            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.\n          </p>\n\n          <p>\n            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.\n          </p>\n\n          <p class=\"mb-0\">\n            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.\n          </p>\n        </v-card-text>\n      </v-card>\n    </v-tab-item>\n    <v-tab-item>\n      <v-card flat>\n        <v-card-text>\n          <p>\n            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.\n          </p>\n\n          <p>\n            Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.\n          </p>\n\n          <p>\n            Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.\n          </p>\n\n          <p>\n            Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.\n          </p>\n\n          <p class=\"mb-0\">\n            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.\n          </p>\n        </v-card-text>\n      </v-card>\n    </v-tab-item>\n    <v-tab-item>\n      <v-card flat>\n        <v-card-text>\n          <p>\n            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.\n          </p>\n\n          <p class=\"mb-0\">\n            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.\n          </p>\n        </v-card-text>\n      </v-card>\n    </v-tab-item>\n  </v-tabs>\n</v-card>"
      },
      code2: {
        html: "<v-card>\n  <v-tabs\n    v-model=\"tab\"\n    background-color=\"deep-purple accent-4\"\n    centered\n    dark\n    icons-and-text\n  >\n    <v-tabs-slider></v-tabs-slider>\n\n    <v-tab href=\"#tab-1\">\n      Recents\n      <v-icon>mdi-phone</v-icon>\n    </v-tab>\n\n    <v-tab href=\"#tab-2\">\n      Favorites\n      <v-icon>mdi-heart</v-icon>\n    </v-tab>\n\n    <v-tab href=\"#tab-3\">\n      Nearby\n      <v-icon>mdi-account-box</v-icon>\n    </v-tab>\n  </v-tabs>\n\n  <v-tabs-items v-model=\"tab\">\n    <v-tab-item\n      v-for=\"i in 3\"\n      :key=\"i\"\n      :value=\"'tab-' + i\"\n    >\n      <v-card flat>\n        <v-card-text>{{ text }}</v-card-text>\n      </v-card>\n    </v-tab-item>\n  </v-tabs-items>\n</v-card>",
        js: "export default {\n    data () {\n      return {\n        tab: null,\n        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',\n      }\n    },\n  }",
        tab: null,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      code3: {
        html: "<v-card>\n  <v-tabs\n    background-color=\"white\"\n    color=\"deep-purple accent-4\"\n    right\n  >\n    <v-tab>Landscape</v-tab>\n    <v-tab>City</v-tab>\n    <v-tab>Abstract</v-tab>\n\n    <v-tab-item\n      v-for=\"n in 3\"\n      :key=\"n\"\n    >\n      <v-container fluid>\n        <v-row>\n          <v-col\n            v-for=\"i in 6\"\n            :key=\"i\"\n            cols=\"12\"\n            md=\"4\"\n          >\n            <v-img\n              :src=\"`https://picsum.photos/500/300?image=${i * n * 5 + 10}`\"\n              :lazy-src=\"`https://picsum.photos/10/6?image=${i * n * 5 + 10}`\"\n              aspect-ratio=\"1\"\n            ></v-img>\n          </v-col>\n        </v-row>\n      </v-container>\n    </v-tab-item>\n  </v-tabs>\n</v-card>"
      },
      code4: {
        html: "<v-card>\n  <v-toolbar\n    color=\"cyan\"\n    dark\n    flat\n  >\n    <v-app-bar-nav-icon></v-app-bar-nav-icon>\n\n    <v-toolbar-title>Page title</v-toolbar-title>\n\n    <v-spacer></v-spacer>\n\n    <v-btn icon>\n      <v-icon>mdi-magnify</v-icon>\n    </v-btn>\n\n    <v-btn icon>\n      <v-icon>mdi-dots-vertical</v-icon>\n    </v-btn>\n\n    <template v-slot:extension>\n      <v-tabs\n        v-model=\"model\"\n        centered\n        slider-color=\"yellow\"\n      >\n        <v-tab\n          v-for=\"i in 3\"\n          :key=\"i\"\n          :href=\"`#tab-${i}`\"\n        >\n          Item {{ i }}\n        </v-tab>\n      </v-tabs>\n    </template>\n  </v-toolbar>\n\n  <v-tabs-items v-model=\"model\">\n    <v-tab-item\n      v-for=\"i in 3\"\n      :key=\"i\"\n      :value=\"`tab-${i}`\"\n    >\n      <v-card flat>\n        <v-card-text v-text=\"text\"></v-card-text>\n      </v-card>\n    </v-tab-item>\n  </v-tabs-items>\n</v-card>",
        js: "export default {\n  data () {\n    return {\n      model: 'tab-2',\n      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',\n    }\n  },\n}",
        model: "tab-2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      code5: {
        html: "<v-card>\n  <v-toolbar\n    color=\"purple\"\n    dark\n    flat\n    prominent\n  >\n    <v-text-field\n      append-icon=\"mic\"\n      class=\"mx-4\"\n      flat\n      hide-details\n      label=\"Search\"\n      prepend-inner-icon=\"search\"\n      solo-inverted\n    ></v-text-field>\n\n    <template v-slot:extension>\n      <v-tabs\n        v-model=\"tabs\"\n        centered\n      >\n        <v-tab\n          v-for=\"n in 3\"\n          :key=\"n\"\n        >\n          Item {{ n }}\n        </v-tab>\n      </v-tabs>\n    </template>\n  </v-toolbar>\n\n  <v-tabs-items v-model=\"tabs\">\n    <v-tab-item>\n      <v-card flat>\n        <v-card-text>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        </v-card-text>\n      </v-card>\n    </v-tab-item>\n    <v-tab-item>\n      <v-card flat>\n        <v-card-title class=\"headline\">An awesome title</v-card-title>\n        <v-card-text>\n          <p>\n            Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.\n          </p>\n\n          <p>\n            Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.\n          </p>\n\n          <p class=\"mb-0\">\n            Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.\n          </p>\n        </v-card-text>\n      </v-card>\n    </v-tab-item>\n    <v-tab-item>\n      <v-card flat>\n        <v-card-title class=\"headline\">An even better title</v-card-title>\n        <v-card-text>\n          <p>\n            Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.\n          </p>\n\n          <p class=\"mb-0\">\n            Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.\n          </p>\n        </v-card-text>\n      </v-card>\n    </v-tab-item>\n  </v-tabs-items>\n</v-card>",
        js: "export default {\n  data () {\n    return {\n      tabs: null,\n      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',\n    }\n  },\n}",
        tabs: null,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      code6: {
        html: "<v-card>\n  <v-toolbar\n    color=\"deep-purple accent-4\"\n    dark\n    flat\n  >\n    <v-app-bar-nav-icon></v-app-bar-nav-icon>\n\n    <v-toolbar-title>Page title</v-toolbar-title>\n\n    <v-spacer></v-spacer>\n\n    <v-btn icon>\n      <v-icon>mdi-magnify</v-icon>\n    </v-btn>\n\n    <v-btn icon>\n      <v-icon>mdi-dots-vertical</v-icon>\n    </v-btn>\n\n    <template v-slot:extension>\n      <v-tabs\n        v-model=\"currentItem\"\n        fixed-tabs\n        slider-color=\"white\"\n      >\n        <v-tab\n          v-for=\"item in items\"\n          :key=\"item\"\n          :href=\"'#tab-' + item\"\n        >\n          {{ item }}\n        </v-tab>\n\n        <v-menu\n          v-if=\"more.length\"\n          bottom\n          left\n        >\n          <template v-slot:activator=\"{ on }\">\n            <v-btn\n              text\n              class=\"align-self-center mr-4\"\n              v-on=\"on\"\n            >\n              more\n              <v-icon right>mdi-menu-down</v-icon>\n            </v-btn>\n          </template>\n\n          <v-list class=\"grey lighten-3\">\n            <v-list-item\n              v-for=\"item in more\"\n              :key=\"item\"\n              @click=\"addItem(item)\"\n            >\n              {{ item }}\n            </v-list-item>\n          </v-list>\n        </v-menu>\n      </v-tabs>\n    </template>\n  </v-toolbar>\n\n  <v-tabs-items v-model=\"currentItem\">\n    <v-tab-item\n      v-for=\"item in items.concat(more)\"\n      :key=\"item\"\n      :value=\"'tab-' + item\"\n    >\n      <v-card flat>\n        <v-card-text>\n          <h2>{{ item }}</h2>\n          {{ text }}\n        </v-card-text>\n      </v-card>\n    </v-tab-item>\n  </v-tabs-items>\n</v-card>",
        js: "export default {\n  data: () => ({\n    currentItem: 'tab-Web',\n    items: [\n      'Web', 'Shopping', 'Videos', 'Images',\n    ],\n    more: [\n      'News', 'Maps', 'Books', 'Flights', 'Apps',\n    ],\n    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',\n  }),\n\n  methods: {\n    addItem (item) {\n      const removed = this.items.splice(0, 1)\n      this.items.push(\n        ...this.more.splice(this.more.indexOf(item), 1)\n      )\n      this.more.push(...removed)\n      this.$nextTick(() => { this.currentItem = 'tab-' + item })\n    },\n  },\n}"
      },
      currentItem: "tab-Web",
      items: ["Web", "Shopping", "Videos", "Images"],
      more: ["News", "Maps", "Books", "Flights", "Apps"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
      title: "Tabs"
    }]);
  },
  methods: {
    addItem: function addItem(item) {
      var _this$items,
          _this$more,
          _this = this;

      var removed = this.items.splice(0, 1);

      (_this$items = this.items).push.apply(_this$items, _toConsumableArray(this.more.splice(this.more.indexOf(item), 1)));

      (_this$more = this.more).push.apply(_this$more, _toConsumableArray(removed));

      this.$nextTick(function () {
        _this.currentItem = "tab-" + item;
      });
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

/***/ "./resources/js/view/pages/vuetify/Tabs.vue":
/*!**************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Tabs.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tabs_vue_vue_type_template_id_965cd6f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=965cd6f4& */ "./resources/js/view/pages/vuetify/Tabs.vue?vue&type=template&id=965cd6f4&");
/* harmony import */ var _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs.vue?vue&type=script&lang=js& */ "./resources/js/view/pages/vuetify/Tabs.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Tabs_vue_vue_type_template_id_965cd6f4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tabs_vue_vue_type_template_id_965cd6f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/vuetify/Tabs.vue"
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

/***/ "./resources/js/view/pages/vuetify/Tabs.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Tabs.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Tabs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/view/pages/vuetify/Tabs.vue?vue&type=template&id=965cd6f4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Tabs.vue?vue&type=template&id=965cd6f4& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_965cd6f4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_965cd6f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_965cd6f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tabs.vue?vue&type=template&id=965cd6f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Tabs.vue?vue&type=template&id=965cd6f4&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Tabs.vue?vue&type=template&id=965cd6f4&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Tabs.vue?vue&type=template&id=965cd6f4& ***!
  \************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Tabs")]),
            _vm._v(" The "),
            _c("code", [_vm._v("v-tabs")]),
            _vm._v(
              " component is used for hiding content\n      behind a selectable item. This can also be used as a pseudo-navigation\n      for a page, where the tabs are links and the tab-items are the content.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/tabs",
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
              attrs: { title: "Vertical Tabs" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Tabs can be toggled to stack its "
                        ),
                        _c("code", [_vm._v("v-tab")]),
                        _vm._v(
                          " components\n            vertically.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-toolbar",
                            { attrs: { flat: "", color: "primary", dark: "" } },
                            [_c("v-toolbar-title", [_vm._v("User Profile")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tabs",
                            { attrs: { vertical: "" } },
                            [
                              _c(
                                "v-tab",
                                [
                                  _c("v-icon", { attrs: { left: "" } }, [
                                    _vm._v("mdi-account")
                                  ]),
                                  _vm._v(
                                    "\n                Option 1\n              "
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab",
                                [
                                  _c("v-icon", { attrs: { left: "" } }, [
                                    _vm._v("mdi-lock")
                                  ]),
                                  _vm._v(
                                    "\n                Option 2\n              "
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab",
                                [
                                  _c("v-icon", { attrs: { left: "" } }, [
                                    _vm._v("mdi-access-point")
                                  ]),
                                  _vm._v(
                                    "\n                Option 3\n              "
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab-item",
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c("v-card-text", [
                                        _c("p", [
                                          _vm._v(
                                            "\n                      Sed aliquam ultrices mauris. Donec posuere vulputate\n                      arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed\n                      a libero.\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            "\n                      Nam ipsum risus, rutrum vitae, vestibulum eu, molestie\n                      vel, lacus. Aenean tellus metus, bibendum sed, posuere\n                      ac, mattis non, nunc. Aliquam lobortis. Aliquam\n                      lobortis. Suspendisse non nisl sit amet velit hendrerit\n                      rutrum.\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            "\n                      Phasellus dolor. Fusce neque. Fusce fermentum odio nec\n                      arcu. Pellentesque libero tortor, tincidunt et,\n                      tincidunt eget, semper nec, quam. Phasellus blandit leo\n                      ut odio.\n                    "
                                          )
                                        ])
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab-item",
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c("v-card-text", [
                                        _c("p", [
                                          _vm._v(
                                            "\n                      Morbi nec metus. Suspendisse faucibus, nunc et\n                      pellentesque egestas, lacus ante convallis tellus, vitae\n                      iaculis lacus elit id tortor. Sed mollis, eros et\n                      ultrices tempus, mauris ipsum aliquam libero, non\n                      adipiscing dolor urna a orci. Curabitur ligula sapien,\n                      tincidunt non, euismod vitae, posuere imperdiet, leo.\n                      Nunc sed turpis.\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            "\n                      Suspendisse feugiat. Suspendisse faucibus, nunc et\n                      pellentesque egestas, lacus ante convallis tellus, vitae\n                      iaculis lacus elit id tortor. Proin viverra, ligula sit\n                      amet ultrices semper, ligula arcu tristique sapien, a\n                      accumsan nisi mauris ac eros. In hac habitasse platea\n                      dictumst. Fusce ac felis sit amet ligula pharetra\n                      condimentum.\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            "\n                      Sed consequat, leo eget bibendum sodales, augue velit\n                      cursus nunc, quis gravida magna mi a libero. Nam commodo\n                      suscipit quam. In consectetuer turpis ut velit. Sed\n                      cursus turpis vitae tortor. Aliquam eu nunc.\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            "\n                      Etiam ut purus mattis mauris sodales aliquam. Ut varius\n                      tincidunt libero. Aenean viverra rhoncus pede. Duis leo.\n                      Fusce fermentum odio nec arcu.\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            "\n                      Donec venenatis vulputate lorem. Aenean viverra rhoncus\n                      pede. In dui magna, posuere eget, vestibulum et, tempor\n                      auctor, justo. Fusce commodo aliquam arcu. Suspendisse\n                      enim turpis, dictum sed, iaculis a, condimentum nec,\n                      nisi.\n                    "
                                          )
                                        ])
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab-item",
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c("v-card-text", [
                                        _c("p", [
                                          _vm._v(
                                            "\n                      Fusce a quam. Phasellus nec sem in justo pellentesque\n                      facilisis. Nam eget dui. Proin viverra, ligula sit amet\n                      ultrices semper, ligula arcu tristique sapien, a\n                      accumsan nisi mauris ac eros. In dui magna, posuere\n                      eget, vestibulum et, tempor auctor, justo.\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            "\n                      Cras sagittis. Phasellus nec sem in justo pellentesque\n                      facilisis. Proin sapien ipsum, porta a, auctor quis,\n                      euismod ut, mi. Donec quam felis, ultricies nec,\n                      pellentesque eu, pretium quis, sem. Nam at tortor in\n                      tellus interdum sagittis.\n                    "
                                          )
                                        ])
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
              attrs: { title: "Right aligned tabs" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("The "),
                        _c("strong", [_vm._v("right")]),
                        _vm._v(" prop aligns the tabs to the right.")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-tabs",
                            {
                              attrs: {
                                "background-color": "white",
                                color: "deep-purple accent-4",
                                right: ""
                              }
                            },
                            [
                              _c("v-tab", [_vm._v("Landscape")]),
                              _vm._v(" "),
                              _c("v-tab", [_vm._v("City")]),
                              _vm._v(" "),
                              _c("v-tab", [_vm._v("Abstract")]),
                              _vm._v(" "),
                              _vm._l(3, function(n) {
                                return _c(
                                  "v-tab-item",
                                  { key: n },
                                  [
                                    _c(
                                      "v-container",
                                      { attrs: { fluid: "" } },
                                      [
                                        _c(
                                          "v-row",
                                          _vm._l(6, function(i) {
                                            return _c(
                                              "v-col",
                                              {
                                                key: i,
                                                attrs: { cols: "12", md: "4" }
                                              },
                                              [
                                                _c("v-img", {
                                                  attrs: {
                                                    src:
                                                      "https://picsum.photos/500/300?image=" +
                                                      (i * n * 5 + 10),
                                                    "lazy-src":
                                                      "https://picsum.photos/10/6?image=" +
                                                      (i * n * 5 + 10),
                                                    "aspect-ratio": "1"
                                                  }
                                                })
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
                              })
                            ],
                            2
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
              attrs: { title: "With menu" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            You can use a menu to hold additional tabs, swapping them out on\n            the fly.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-toolbar",
                            {
                              attrs: {
                                color: "deep-purple accent-4",
                                dark: "",
                                flat: ""
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "extension",
                                  fn: function() {
                                    return [
                                      _c(
                                        "v-tabs",
                                        {
                                          attrs: {
                                            "fixed-tabs": "",
                                            "slider-color": "white"
                                          },
                                          model: {
                                            value: _vm.currentItem,
                                            callback: function($$v) {
                                              _vm.currentItem = $$v
                                            },
                                            expression: "currentItem"
                                          }
                                        },
                                        [
                                          _vm._l(_vm.items, function(item) {
                                            return _c(
                                              "v-tab",
                                              {
                                                key: item,
                                                attrs: { href: "#tab-" + item }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                    " +
                                                    _vm._s(item) +
                                                    "\n                  "
                                                )
                                              ]
                                            )
                                          }),
                                          _vm._v(" "),
                                          _vm.more.length
                                            ? _c(
                                                "v-menu",
                                                {
                                                  attrs: {
                                                    bottom: "",
                                                    left: ""
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "activator",
                                                        fn: function(ref) {
                                                          var on = ref.on
                                                          return [
                                                            _c(
                                                              "v-btn",
                                                              _vm._g(
                                                                {
                                                                  staticClass:
                                                                    "align-self-center mr-4",
                                                                  attrs: {
                                                                    text: ""
                                                                  }
                                                                },
                                                                on
                                                              ),
                                                              [
                                                                _vm._v(
                                                                  "\n                        more\n                        "
                                                                ),
                                                                _c(
                                                                  "v-icon",
                                                                  {
                                                                    attrs: {
                                                                      right: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "mdi-menu-down"
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          ]
                                                        }
                                                      }
                                                    ],
                                                    null,
                                                    false,
                                                    2908075644
                                                  )
                                                },
                                                [
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list",
                                                    {
                                                      staticClass:
                                                        "grey lighten-3"
                                                    },
                                                    _vm._l(_vm.more, function(
                                                      item
                                                    ) {
                                                      return _c(
                                                        "v-list-item",
                                                        {
                                                          key: item,
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.addItem(
                                                                item
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                        " +
                                                              _vm._s(item) +
                                                              "\n                      "
                                                          )
                                                        ]
                                                      )
                                                    }),
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ],
                                        2
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _c("v-app-bar-nav-icon"),
                              _vm._v(" "),
                              _c("v-toolbar-title", [_vm._v("Page title")]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-magnify")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-dots-vertical")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tabs-items",
                            {
                              model: {
                                value: _vm.currentItem,
                                callback: function($$v) {
                                  _vm.currentItem = $$v
                                },
                                expression: "currentItem"
                              }
                            },
                            _vm._l(_vm.items.concat(_vm.more), function(item) {
                              return _c(
                                "v-tab-item",
                                { key: item, attrs: { value: "tab-" + item } },
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c("v-card-text", [
                                        _c("h2", [_vm._v(_vm._s(item))]),
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(_vm.text) +
                                            "\n                  "
                                        )
                                      ])
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Icons and text" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _c("code", [_vm._v("v-tab")]),
                        _vm._v(
                          "'s can contain icons as well as text. This\n            increases the "
                        ),
                        _c("code", [_vm._v("v-tabs")]),
                        _vm._v(" height to 72px.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-tabs",
                            {
                              attrs: {
                                "background-color": "deep-purple accent-4",
                                centered: "",
                                dark: "",
                                "icons-and-text": ""
                              },
                              model: {
                                value: _vm.code2.tab,
                                callback: function($$v) {
                                  _vm.$set(_vm.code2, "tab", $$v)
                                },
                                expression: "code2.tab"
                              }
                            },
                            [
                              _c("v-tabs-slider"),
                              _vm._v(" "),
                              _c(
                                "v-tab",
                                { attrs: { href: "#tab-1" } },
                                [
                                  _vm._v(
                                    "\n                Recents\n                "
                                  ),
                                  _c("v-icon", [_vm._v("mdi-phone")])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab",
                                { attrs: { href: "#tab-2" } },
                                [
                                  _vm._v(
                                    "\n                Favorites\n                "
                                  ),
                                  _c("v-icon", [_vm._v("mdi-heart")])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab",
                                { attrs: { href: "#tab-3" } },
                                [
                                  _vm._v(
                                    "\n                Nearby\n                "
                                  ),
                                  _c("v-icon", [_vm._v("mdi-account-box")])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tabs-items",
                            {
                              model: {
                                value: _vm.code2.tab,
                                callback: function($$v) {
                                  _vm.$set(_vm.code2, "tab", $$v)
                                },
                                expression: "code2.tab"
                              }
                            },
                            _vm._l(3, function(i) {
                              return _c(
                                "v-tab-item",
                                { key: i, attrs: { value: "tab-" + i } },
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c("v-card-text", [
                                        _vm._v(_vm._s(_vm.code2.text))
                                      ])
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
              attrs: { title: "Content" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            It is common to put "),
                        _c("code", [_vm._v("v-tabs")]),
                        _vm._v(" inside the\n            "),
                        _c("strong", [_vm._v("extension")]),
                        _vm._v(" slot of "),
                        _c("code", [_vm._v("v-toolbar")]),
                        _vm._v(". Using\n            "),
                        _c("code", [_vm._v("v-toolbar")]),
                        _vm._v("'s "),
                        _c("strong", [_vm._v("tabs")]),
                        _vm._v(
                          " prop auto adjusts\n            its height to 48px to match "
                        ),
                        _c("code", [_vm._v("v-tabs")]),
                        _vm._v(".\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-toolbar",
                            {
                              attrs: { color: "cyan", dark: "", flat: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "extension",
                                  fn: function() {
                                    return [
                                      _c(
                                        "v-tabs",
                                        {
                                          attrs: {
                                            centered: "",
                                            "slider-color": "yellow"
                                          },
                                          model: {
                                            value: _vm.code4.model,
                                            callback: function($$v) {
                                              _vm.$set(_vm.code4, "model", $$v)
                                            },
                                            expression: "code4.model"
                                          }
                                        },
                                        _vm._l(3, function(i) {
                                          return _c(
                                            "v-tab",
                                            {
                                              key: i,
                                              attrs: { href: "#tab-" + i }
                                            },
                                            [
                                              _vm._v(
                                                "\n                    Item " +
                                                  _vm._s(i) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        }),
                                        1
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _c("v-app-bar-nav-icon"),
                              _vm._v(" "),
                              _c("v-toolbar-title", [_vm._v("Page title")]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-magnify")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-dots-vertical")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tabs-items",
                            {
                              model: {
                                value: _vm.code4.model,
                                callback: function($$v) {
                                  _vm.$set(_vm.code4, "model", $$v)
                                },
                                expression: "code4.model"
                              }
                            },
                            _vm._l(3, function(i) {
                              return _c(
                                "v-tab-item",
                                { key: i, attrs: { value: "tab-" + i } },
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c("v-card-text", {
                                        domProps: {
                                          textContent: _vm._s(_vm.code4.text)
                                        }
                                      })
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
              attrs: { title: "With search" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            When changing your "),
                        _c("code", [_vm._v("v-tab-item")]),
                        _vm._v(
                          ", the content area will\n            smoothly scale to the new size.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-toolbar",
                            {
                              attrs: {
                                color: "purple",
                                dark: "",
                                flat: "",
                                prominent: ""
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "extension",
                                  fn: function() {
                                    return [
                                      _c(
                                        "v-tabs",
                                        {
                                          attrs: { centered: "" },
                                          model: {
                                            value: _vm.code4.tabs,
                                            callback: function($$v) {
                                              _vm.$set(_vm.code4, "tabs", $$v)
                                            },
                                            expression: "code4.tabs"
                                          }
                                        },
                                        _vm._l(3, function(n) {
                                          return _c("v-tab", { key: n }, [
                                            _vm._v(" Item " + _vm._s(n) + " ")
                                          ])
                                        }),
                                        1
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _c("v-text-field", {
                                staticClass: "mx-4",
                                attrs: {
                                  "append-icon": "mic",
                                  flat: "",
                                  "hide-details": "",
                                  label: "Search",
                                  "prepend-inner-icon": "search",
                                  "solo-inverted": ""
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tabs-items",
                            {
                              model: {
                                value: _vm.code4.tabs,
                                callback: function($$v) {
                                  _vm.$set(_vm.code4, "tabs", $$v)
                                },
                                expression: "code4.tabs"
                              }
                            },
                            [
                              _c(
                                "v-tab-item",
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c("v-card-text", [
                                        _vm._v(
                                          "\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                    sed do eiusmod tempor incididunt ut labore et dolore magna\n                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                    ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                  "
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab-item",
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c(
                                        "v-card-title",
                                        { staticClass: "headline" },
                                        [_vm._v("An awesome title")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-card-text", [
                                        _c("p", [
                                          _vm._v(
                                            "\n                      Duis lobortis massa imperdiet quam. Donec vitae orci sed\n                      dolor rutrum auctor. Vestibulum facilisis, purus nec\n                      pulvinar iaculis, ligula mi congue nunc, vitae euismod\n                      ligula urna in dolor. Praesent congue erat at massa.\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            "\n                      Aenean posuere, tortor sed cursus feugiat, nunc augue\n                      blandit nunc, eu sollicitudin urna dolor sagittis lacus.\n                      Pellentesque egestas, neque sit amet convallis pulvinar,\n                      justo nulla eleifend augue, ac auctor orci leo non est.\n                      Etiam sit amet orci eget eros faucibus tincidunt. Donec\n                      sodales sagittis magna.\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            "\n                      Ut leo. Suspendisse potenti. Duis vel nibh at velit\n                      scelerisque suscipit. Fusce pharetra convallis urna.\n                    "
                                          )
                                        ])
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab-item",
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c(
                                        "v-card-title",
                                        { staticClass: "headline" },
                                        [_vm._v("An even better title")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-card-text", [
                                        _c("p", [
                                          _vm._v(
                                            "\n                      Maecenas ullamcorper, dui et placerat feugiat, eros pede\n                      varius nisi, condimentum viverra felis nunc et lorem.\n                      Sed hendrerit. Maecenas malesuada. Vestibulum\n                      ullamcorper mauris at ligula. Proin faucibus arcu quis\n                      ante.\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            "\n                      Etiam vitae tortor. Curabitur ullamcorper ultricies\n                      nisi. Sed magna purus, fermentum eu, tincidunt eu,\n                      varius ut, felis. Aliquam lobortis. Suspendisse potenti.\n                    "
                                          )
                                        ])
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