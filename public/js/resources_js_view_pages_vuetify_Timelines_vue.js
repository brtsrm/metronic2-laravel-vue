(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_pages_vuetify_Timelines_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Timelines.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Timelines.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var COLORS = ["info", "warning", "error", "success"];
var ICONS = {
  info: "mdi-information",
  warning: "mdi-alert",
  error: "mdi-alert-circle",
  success: "mdi-check-circle"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      code1: {
        html: "<v-timeline :dense=\"$vuetify.breakpoint.smAndDown\">\n  <v-timeline-item\n    color=\"purple lighten-2\"\n    fill-dot\n    right\n  >\n    <v-card>\n      <v-card-title class=\"purple lighten-2\">\n        <v-icon\n          dark\n          size=\"42\"\n          class=\"mr-4\"\n        >\n          mdi-magnify\n        </v-icon>\n        <h2 class=\"display-1 white--text font-weight-light\">Title 1</h2>\n      </v-card-title>\n      <v-container>\n        <v-row>\n          <v-col cols=\"12\" md=\"10\">\n            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.\n          </v-col>\n          <v-col\n            class=\"hidden-sm-and-down text-right\"\n            md=\"2\"\n          >\n            <v-icon size=\"64\">mdi-calendar-text</v-icon>\n          </v-col>\n        </v-row>\n      </v-container>\n    </v-card>\n  </v-timeline-item>\n\n  <v-timeline-item\n    color=\"amber lighten-1\"\n    fill-dot\n    left\n    small\n  >\n    <v-card>\n      <v-card-title class=\"amber lighten-1 justify-end\">\n        <h2 class=\"display-1 mr-4 white--text font-weight-light\">Title 2</h2>\n        <v-icon\n          dark\n          size=\"42\"\n        >mdi-home-outline</v-icon>\n      </v-card-title>\n      <v-container>\n        <v-row>\n          <v-col cols=\"12\" md=\"8\">\n            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.\n          </v-col>\n          <v-col cols=\"12\" md=\"4\">\n            Lorem ipsum dolor sit amet, no nam oblique veritus.\n          </v-col>\n        </v-row>\n      </v-container>\n    </v-card>\n  </v-timeline-item>\n\n  <v-timeline-item\n    color=\"cyan lighten-1\"\n    fill-dot\n    right\n  >\n    <v-card>\n      <v-card-title class=\"cyan lighten-1\">\n        <v-icon\n          class=\"mr-4\"\n          dark\n          size=\"42\"\n        >\n          mdi-email-outline\n        </v-icon>\n        <h2 class=\"display-1 white--text font-weight-light\">Title 3</h2>\n      </v-card-title>\n      <v-container>\n        <v-row>\n          <v-col\n            v-for=\"n in 3\"\n            :key=\"n\"\n            cols=\"12\"\n            md=\"4\"\n          >\n            Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.\n          </v-col>\n        </v-row>\n      </v-container>\n    </v-card>\n  </v-timeline-item>\n\n  <v-timeline-item\n    color=\"red lighten-1\"\n    fill-dot\n    left\n    small\n  >\n    <v-card>\n      <v-card-title class=\"red lighten-1 justify-end\">\n        <h2 class=\"display-1 mr-4 white--text font-weight-light\">Title 4</h2>\n        <v-icon\n          dark\n          size=\"42\"\n        >\n          mdi-account-multiple-outline\n        </v-icon>\n      </v-card-title>\n      <v-container>\n        <v-row>\n          <v-col class=\"hidden-sm-and-down\" md=\"2\">\n            <v-icon size=\"64\">mdi-server-network</v-icon>\n          </v-col>\n          <v-col cols=\"12\" md=\"10\">\n            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.\n          </v-col>\n        </v-row>\n      </v-container>\n    </v-card>\n  </v-timeline-item>\n\n  <v-timeline-item\n    color=\"green lighten-1\"\n    fill-dot\n    right\n  >\n    <v-card>\n      <v-card-title class=\"green lighten-1\">\n        <v-icon\n          class=\"mr-4\"\n          dark\n          size=\"42\"\n        >\n          mdi-phone-in-talk\n        </v-icon>\n        <h2 class=\"display-1 white--text font-weight-light\">Title 5</h2>\n      </v-card-title>\n      <v-container>\n        <v-row>\n          <v-col>\n            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.\n          </v-col>\n        </v-row>\n      </v-container>\n    </v-card>\n  </v-timeline-item>\n</v-timeline>"
      },
      code2: {
        html: "<v-timeline align-top :dense=\"$vuetify.breakpoint.smAndDown\">\n  <v-timeline-item\n    v-for=\"(item, i) in items\"\n    :key=\"i\"\n    :color=\"item.color\"\n    :icon=\"item.icon\"\n    fill-dot\n  >\n    <v-card\n      :color=\"item.color\"\n      dark\n    >\n      <v-card-title class=\"title\">Lorem Ipsum Dolor</v-card-title>\n      <v-card-text class=\"white text--primary\">\n        <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>\n        <v-btn\n          :color=\"item.color\"\n          class=\"mx-0\"\n          outlined\n        >\n          Button\n        </v-btn>\n      </v-card-text>\n    </v-card>\n  </v-timeline-item>\n</v-timeline>",
        js: "export default {\n  data: () => ({\n    items: [\n      {\n        color: 'red lighten-2',\n        icon: 'mdi-star',\n      },\n      {\n        color: 'purple darken-1',\n        icon: 'mdi-book-variant',\n      },\n      {\n        color: 'green lighten-1',\n        icon: 'mdi-airballoon',\n      },\n      {\n        color: 'indigo',\n        icon: 'mdi-buffer',\n      },\n    ],\n  }),\n}",
        items: [{
          color: "red lighten-2",
          icon: "mdi-star"
        }, {
          color: "purple darken-1",
          icon: "mdi-book-variant"
        }, {
          color: "green lighten-1",
          icon: "mdi-airballoon"
        }, {
          color: "indigo",
          icon: "mdi-buffer"
        }]
      },
      code3: {
        html: "<v-card\n  class=\"mx-auto\"\n  max-width=\"600\"\n>\n  <v-card-title\n    class=\"blue-grey white--text\"\n  >\n    <span class=\"title\">Logs</span>\n    <v-spacer></v-spacer>\n    <v-btn\n      :outlined=\"interval == null\"\n      :color=\"interval == null ? 'white' : 'primary'\"\n      dark\n      depressed\n      @click=\"interval == null ? start() : stop()\"\n    >\n      Realtime Logging\n    </v-btn>\n  </v-card-title>\n  <v-card-text class=\"py-0\">\n    <v-timeline dense>\n      <v-slide-x-reverse-transition\n        group\n        hide-on-leave\n      >\n        <v-timeline-item\n          v-for=\"item in items\"\n          :key=\"item.id\"\n          :color=\"item.color\"\n          small\n          fill-dot\n        >\n          <v-alert\n            :value=\"true\"\n            :color=\"item.color\"\n            :icon=\"item.icon\"\n            class=\"white--text\"\n          >\n            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.\n          </v-alert>\n        </v-timeline-item>\n      </v-slide-x-reverse-transition>\n    </v-timeline>\n  </v-card-text>\n</v-card>",
        js: "const COLORS = [\n  'info',\n  'warning',\n  'error',\n  'success',\n]\nconst ICONS = {\n  info: 'mdi-information',\n  warning: 'mdi-alert',\n  error: 'mdi-alert-circle',\n  success: 'mdi-check-circle',\n}\n\nexport default {\n  data: () => ({\n    interval: null,\n    items: [\n      {\n        id: 1,\n        color: 'info',\n        icon: ICONS['info'],\n      },\n    ],\n    nonce: 2,\n  }),\n\n  beforeDestroy () {\n    this.stop()\n  },\n\n  methods: {\n    addEvent () {\n      let { color, icon } = this.genAlert()\n\n      const previousColor = this.items[0].color\n\n      while (previousColor === color) {\n        color = this.genColor()\n      }\n\n      this.items.unshift({\n        id: this.nonce++,\n        color,\n        icon,\n      })\n\n      if (this.nonce > 6) {\n        this.items.pop()\n      }\n    },\n    genAlert () {\n      const color = this.genColor()\n\n      return {\n        color,\n        icon: this.genIcon(color),\n      }\n    },\n    genColor () {\n      return COLORS[Math.floor(Math.random() * 3)]\n    },\n    genIcon (color) {\n      return ICONS[color]\n    },\n    start () {\n      this.interval = setInterval(this.addEvent, 3000)\n    },\n    stop () {\n      clearInterval(this.interval)\n      this.interval = null\n    },\n  },\n}"
      },
      interval: null,
      items: [{
        id: 1,
        color: "info",
        icon: ICONS["info"]
      }],
      nonce: 2,
      code4: {
        html: "<v-card\n  class=\"mx-auto\"\n  max-width=\"400\"\n>\n  <v-card\n    dark\n    flat\n  >\n    <v-btn\n      absolute\n      bottom\n      color=\"pink\"\n      right\n      fab\n    >\n      <v-icon>mdi-plus</v-icon>\n    </v-btn>\n    <v-card-title class=\"pa-2 purple lighten-3\">\n      <v-btn icon>\n        <v-icon>mdi-menu</v-icon>\n      </v-btn>\n      <h3 class=\"title font-weight-light text-center grow\">Timeline</h3>\n      <v-avatar>\n        <v-img src=\"https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light\"></v-img>\n      </v-avatar>\n    </v-card-title>\n    <v-img\n      src=\"media/stock-600x600/img-10.jpg\"\n      gradient=\"to top, rgba(0,0,0,.44), rgba(0,0,0,.44)\"\n    >\n      <v-container class=\"fill-height\">\n        <v-row align=\"center\">\n          <strong class=\"display-4 font-weight-regular mr-6\">8</strong>\n          <v-row justify=\"end\">\n            <div class=\"headline font-weight-light\">Monday</div>\n            <div class=\"text-uppercase font-weight-light\">February 2015</div>\n          </v-row>\n        </v-row>\n      </v-container>\n    </v-img>\n  </v-card>\n  <v-card-text class=\"py-0\">\n    <v-timeline\n      align-top\n      dense\n    >\n      <v-timeline-item\n        color=\"pink\"\n        small\n      >\n        <v-row class=\"pt-1\">\n          <v-col cols=\"3\">\n            <strong>5pm</strong>\n          </v-col>\n          <v-col>\n            <strong>New Icon</strong>\n            <div class=\"caption\">Mobile App</div>\n          </v-col>\n        </v-row>\n      </v-timeline-item>\n\n      <v-timeline-item\n        color=\"teal lighten-3\"\n        small\n      >\n        <v-row class=\"pt-1\">\n          <v-col cols=\"3\">\n            <strong>3-4pm</strong>\n          </v-col>\n          <v-col>\n            <strong>Design Stand Up</strong>\n            <div class=\"caption mb-2\">Hangouts</div>\n            <v-avatar>\n              <v-img\n                src=\"https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown\"\n              ></v-img>\n            </v-avatar>\n            <v-avatar>\n\n              <v-img\n                src=\"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned\"\n              ></v-img>\n            </v-avatar>\n            <v-avatar>\n              <v-img\n                src=\"https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale\"\n              ></v-img>\n            </v-avatar>\n          </v-col>\n        </v-row>\n      </v-timeline-item>\n\n      <v-timeline-item\n        color=\"pink\"\n        small\n      >\n        <v-row class=\"pt-1\">\n          <v-col cols=\"3\">\n            <strong>12pm</strong>\n          </v-col>\n          <v-col>\n            <strong>Lunch break</strong>\n          </v-col>\n        </v-row>\n      </v-timeline-item>\n\n      <v-timeline-item\n        color=\"teal lighten-3\"\n        small\n      >\n        <v-row class=\"pt-1\">\n          <v-col cols=\"3\">\n            <strong>9-11am</strong>\n          </v-col>\n          <v-col>\n            <strong>Finish Home Screen</strong>\n            <div class=\"caption\">Web App</div>\n          </v-col>\n        </v-row>\n      </v-timeline-item>\n    </v-timeline>\n  </v-card-text>\n</v-card>"
      },
      code5: {
        html: "<v-timeline>\n<v-timeline-item\nv-for=\"n in 4\"\n:key=\"n\"\nlarge\n>\n<template v-slot:icon>\n  <v-avatar>\n    <img src=\"http://i.pravatar.cc/64\">\n  </v-avatar>\n</template>\n<template v-slot:opposite>\n  <span>Tus eu perfecto</span>\n</template>\n<v-card class=\"elevation-2\">\n  <v-card-title class=\"headline\">Lorem ipsum</v-card-title>\n  <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>\n</v-card>\n</v-timeline-item>\n</v-timeline>"
      },
      code6: {
        html: "<v-container style=\"max-width: 600px;\">\n  <v-timeline dense clipped>\n    <v-timeline-item\n      fill-dot\n      class=\"white--text mb-12\"\n      color=\"orange\"\n      large\n    >\n      <template v-slot:icon>\n        <span>JL</span>\n      </template>\n      <v-text-field\n        v-model=\"input\"\n        hide-details\n        flat\n        label=\"Leave a comment...\"\n        solo\n        @keydown.enter=\"comment\"\n      >\n        <template v-slot:append>\n          <v-btn\n            class=\"mx-0\"\n            depressed\n            @click=\"comment\"\n          >\n            Post\n          </v-btn>\n        </template>\n      </v-text-field>\n    </v-timeline-item>\n\n    <v-slide-x-transition\n      group\n    >\n      <v-timeline-item\n        v-for=\"event in timeline\"\n        :key=\"event.id\"\n        class=\"mb-4\"\n        color=\"pink\"\n        small\n      >\n        <v-row justify=\"space-between\">\n          <v-col cols=\"7\" v-text=\"event.text\"></v-col>\n          <v-col class=\"text-right\" cols=\"5\" v-text=\"event.time\"></v-col>\n        </v-row>\n      </v-timeline-item>\n    </v-slide-x-transition>\n\n    <v-timeline-item\n      class=\"mb-6\"\n      hide-dot\n    >\n      <span>TODAY</span>\n    </v-timeline-item>\n\n    <v-timeline-item\n      class=\"mb-4\"\n      color=\"grey\"\n      icon-color=\"grey lighten-2\"\n      small\n    >\n      <v-row justify=\"space-between\">\n        <v-col cols=\"7\">This order was archived.</v-col>\n        <v-col class=\"text-right\" cols=\"5\">15:26 EDT</v-col>\n      </v-row>\n    </v-timeline-item>\n\n    <v-timeline-item\n      class=\"mb-4\"\n      small\n    >\n      <v-row justify=\"space-between\">\n        <v-col cols=\"7\">\n          <v-chip\n            class=\"white--text ml-0\"\n            color=\"purple\"\n            label\n            small\n          >\n            APP\n          </v-chip>\n          Digital Downloads fulfilled 1 item.\n        </v-col>\n        <v-col class=\"text-right\" cols=\"5\">15:25 EDT</v-col>\n      </v-row>\n    </v-timeline-item>\n\n    <v-timeline-item\n      class=\"mb-4\"\n      color=\"grey\"\n      small\n    >\n      <v-row justify=\"space-between\">\n        <v-col cols=\"7\">\n          Order confirmation email was sent to Sean (support@keenthemes.com).\n        </v-col>\n        <v-col class=\"text-right\" cols=\"5\">15:25 EDT</v-col>\n      </v-row>\n    </v-timeline-item>\n\n    <v-timeline-item\n      class=\"mb-4\"\n      hide-dot\n    >\n      <v-btn\n        class=\"mx-0\"\n        color=\"white\"\n      >\n        Resend Email\n      </v-btn>\n    </v-timeline-item>\n\n    <v-timeline-item\n      class=\"mb-4\"\n      color=\"grey\"\n      small\n    >\n      <v-row justify=\"space-between\">\n        <v-col cols=\"7\">\n          A $15.00 USD payment was processed on PayPal Express Checkout\n        </v-col>\n        <v-col class=\"text-right\" cols=\"5\">15:25 EDT</v-col>\n      </v-row>\n    </v-timeline-item>\n\n    <v-timeline-item\n      color=\"grey\"\n      small\n    >\n      <v-row justify=\"space-between\">\n        <v-col cols=\"7\">\n          Sean Paul placed this order on Online Store (checkout #1937432132572).\n        </v-col>\n        <v-col class=\"text-right\" cols=\"5\">15:25 EDT</v-col>\n      </v-row>\n    </v-timeline-item>\n  </v-timeline>\n</v-container>",
        js: "export default {\n  data: () => ({\n    events: [],\n    input: null,\n    nonce: 0,\n  }),\n\n  computed: {\n    timeline () {\n      return this.events.slice().reverse()\n    },\n  },\n\n  methods: {\n    comment () {\n      const time = (new Date()).toTimeString()\n      this.events.push({\n        id: this.nonce++,\n        text: this.input,\n        time: time.replace(/:\\d{2}\\sGMT-\\d{4}\\s\\((.*)\\)/, (match, contents, offset) => {\n          return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`\n        }),\n      })\n\n      this.input = null\n    },\n  },\n}"
      },
      events: [],
      input: null
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
      title: "Timelines"
    }]);
  },
  computed: {
    timeline: function timeline() {
      return this.events.slice().reverse();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.stop();
  },
  methods: {
    addEvent: function addEvent() {
      var _this$genAlert = this.genAlert(),
          color = _this$genAlert.color,
          icon = _this$genAlert.icon;

      var previousColor = this.items[0].color;

      while (previousColor === color) {
        color = this.genColor();
      }

      this.items.unshift({
        id: this.nonce++,
        color: color,
        icon: icon
      });

      if (this.nonce > 6) {
        this.items.pop();
      }
    },
    genAlert: function genAlert() {
      var color = this.genColor();
      return {
        color: color,
        icon: this.genIcon(color)
      };
    },
    genColor: function genColor() {
      return COLORS[Math.floor(Math.random() * 3)];
    },
    genIcon: function genIcon(color) {
      return ICONS[color];
    },
    start: function start() {
      this.interval = setInterval(this.addEvent, 3000);
    },
    stop: function stop() {
      clearInterval(this.interval);
      this.interval = null;
    },
    comment: function comment() {
      var time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, function (match, contents) {
          return " ".concat(contents.split(" ").map(function (v) {
            return v.charAt(0);
          }).join(""));
        })
      });
      this.input = null;
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

/***/ "./resources/js/view/pages/vuetify/Timelines.vue":
/*!*******************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Timelines.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Timelines_vue_vue_type_template_id_d557930c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timelines.vue?vue&type=template&id=d557930c& */ "./resources/js/view/pages/vuetify/Timelines.vue?vue&type=template&id=d557930c&");
/* harmony import */ var _Timelines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timelines.vue?vue&type=script&lang=js& */ "./resources/js/view/pages/vuetify/Timelines.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Timelines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Timelines_vue_vue_type_template_id_d557930c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Timelines_vue_vue_type_template_id_d557930c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/vuetify/Timelines.vue"
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

/***/ "./resources/js/view/pages/vuetify/Timelines.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Timelines.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timelines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timelines.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Timelines.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timelines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/view/pages/vuetify/Timelines.vue?vue&type=template&id=d557930c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Timelines.vue?vue&type=template&id=d557930c& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timelines_vue_vue_type_template_id_d557930c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timelines_vue_vue_type_template_id_d557930c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timelines_vue_vue_type_template_id_d557930c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Timelines.vue?vue&type=template&id=d557930c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Timelines.vue?vue&type=template&id=d557930c&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Timelines.vue?vue&type=template&id=d557930c&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Timelines.vue?vue&type=template&id=d557930c& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Timelines")]),
            _vm._v(" The "),
            _c("code", [_vm._v("v-timeline")]),
            _vm._v(
              " is useful for stylistically\n      displaying chronological information.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/timelines",
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
              attrs: { title: "Small dots" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("small")]),
                        _vm._v(
                          " prop allows alternate styles to provide a\n            unique design.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-timeline",
                        { attrs: { dense: _vm.$vuetify.breakpoint.smAndDown } },
                        [
                          _c(
                            "v-timeline-item",
                            {
                              attrs: {
                                color: "purple lighten-2",
                                "fill-dot": "",
                                right: ""
                              }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    { staticClass: "purple lighten-2" },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mr-4",
                                          attrs: { dark: "", size: "42" }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    mdi-magnify\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "h2",
                                        {
                                          staticClass:
                                            "display-1 white--text font-weight-light"
                                        },
                                        [
                                          _vm._v(
                                            "\n                    Title 1\n                  "
                                          )
                                        ]
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
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "10" } },
                                            [
                                              _vm._v(
                                                "\n                      Lorem ipsum dolor sit amet, no nam oblique veritus.\n                      Commune scaevola imperdiet nec ut, sed euismod convenire\n                      principes at. Est et nobis iisque percipit.\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              staticClass:
                                                "hidden-sm-and-down text-right",
                                              attrs: { md: "2" }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { size: "64" } },
                                                [_vm._v("mdi-calendar-text")]
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-timeline-item",
                            {
                              attrs: {
                                color: "amber lighten-1",
                                "fill-dot": "",
                                left: "",
                                small: ""
                              }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    {
                                      staticClass: "amber lighten-1 justify-end"
                                    },
                                    [
                                      _c(
                                        "h2",
                                        {
                                          staticClass:
                                            "display-1 mr-4 white--text font-weight-light"
                                        },
                                        [
                                          _vm._v(
                                            "\n                    Title 2\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        { attrs: { dark: "", size: "42" } },
                                        [_vm._v("mdi-home-outline")]
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
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "8" } },
                                            [
                                              _vm._v(
                                                "\n                      Lorem ipsum dolor sit amet, no nam oblique veritus.\n                      Commune scaevola imperdiet nec ut, sed euismod convenire\n                      principes at. Est et nobis iisque percipit.\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "4" } },
                                            [
                                              _vm._v(
                                                "\n                      Lorem ipsum dolor sit amet, no nam oblique veritus.\n                    "
                                              )
                                            ]
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-timeline-item",
                            {
                              attrs: {
                                color: "cyan lighten-1",
                                "fill-dot": "",
                                right: ""
                              }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    { staticClass: "cyan lighten-1" },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mr-4",
                                          attrs: { dark: "", size: "42" }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    mdi-email-outline\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "h2",
                                        {
                                          staticClass:
                                            "display-1 white--text font-weight-light"
                                        },
                                        [
                                          _vm._v(
                                            "\n                    Title 3\n                  "
                                          )
                                        ]
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
                                        _vm._l(3, function(n) {
                                          return _c(
                                            "v-col",
                                            {
                                              key: n,
                                              attrs: { cols: "12", md: "4" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      Lorem ipsum dolor sit amet, no nam oblique veritus no\n                      nam oblique.\n                    "
                                              )
                                            ]
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
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-timeline-item",
                            {
                              attrs: {
                                color: "red lighten-1",
                                "fill-dot": "",
                                left: "",
                                small: ""
                              }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    {
                                      staticClass: "red lighten-1 justify-end"
                                    },
                                    [
                                      _c(
                                        "h2",
                                        {
                                          staticClass:
                                            "display-1 mr-4 white--text font-weight-light"
                                        },
                                        [
                                          _vm._v(
                                            "\n                    Title 4\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        { attrs: { dark: "", size: "42" } },
                                        [
                                          _vm._v(
                                            "\n                    mdi-account-multiple-outline\n                  "
                                          )
                                        ]
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
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "hidden-sm-and-down",
                                              attrs: { md: "2" }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { size: "64" } },
                                                [_vm._v("mdi-server-network")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "10" } },
                                            [
                                              _vm._v(
                                                "\n                      Lorem ipsum dolor sit amet, no nam oblique veritus.\n                      Commune scaevola imperdiet nec ut, sed euismod convenire\n                      principes at. Est et nobis iisque percipit, an vim zril\n                      disputando voluptatibus.\n                    "
                                              )
                                            ]
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-timeline-item",
                            {
                              attrs: {
                                color: "green lighten-1",
                                "fill-dot": "",
                                right: ""
                              }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    { staticClass: "green lighten-1" },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mr-4",
                                          attrs: { dark: "", size: "42" }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    mdi-phone-in-talk\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "h2",
                                        {
                                          staticClass:
                                            "display-1 white--text font-weight-light"
                                        },
                                        [
                                          _vm._v(
                                            "\n                    Title 5\n                  "
                                          )
                                        ]
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
                                        [
                                          _c("v-col", [
                                            _vm._v(
                                              "\n                      Lorem ipsum dolor sit amet, no nam oblique veritus.\n                      Commune scaevola imperdiet nec ut, sed euismod convenire\n                      principes at. Est et nobis iisque percipit, an vim zril\n                      disputando voluptatibus, vix an salutandi sententiae.\n                    "
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
              attrs: { title: "Icon dots" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Conditionally use icons within the "
                        ),
                        _c("code", [_vm._v("v-timeline-item")]),
                        _vm._v(
                          "'s\n            dot to provide additional context.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-timeline",
                        {
                          attrs: {
                            "align-top": "",
                            dense: _vm.$vuetify.breakpoint.smAndDown
                          }
                        },
                        _vm._l(_vm.code2.items, function(item, i) {
                          return _c(
                            "v-timeline-item",
                            {
                              key: i,
                              attrs: {
                                color: item.color,
                                icon: item.icon,
                                "fill-dot": ""
                              }
                            },
                            [
                              _c(
                                "v-card",
                                { attrs: { color: item.color, dark: "" } },
                                [
                                  _c("v-card-title", { staticClass: "title" }, [
                                    _vm._v("Lorem Ipsum Dolor")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    { staticClass: "white text--primary" },
                                    [
                                      _c("p", [
                                        _vm._v(
                                          "\n                    Lorem ipsum dolor sit amet, no nam oblique veritus.\n                    Commune scaevola imperdiet nec ut, sed euismod convenire\n                    principes at. Est et nobis iisque percipit, an vim zril\n                    disputando voluptatibus, vix an salutandi sententiae.\n                  "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "mx-0",
                                          attrs: {
                                            color: item.color,
                                            outlined: ""
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    Button\n                  "
                                          )
                                        ]
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
              attrs: { title: "Avatar dots" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Insert avatars into dots with use of the "
                        ),
                        _c("code", [_vm._v("icon")]),
                        _vm._v(" slot\n            and "),
                        _c("code", [_vm._v("v-avatar")]),
                        _vm._v(".\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-timeline",
                        _vm._l(4, function(n) {
                          return _c(
                            "v-timeline-item",
                            {
                              key: n,
                              attrs: { large: "" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "icon",
                                    fn: function() {
                                      return [
                                        _c("v-avatar", [
                                          _c("img", {
                                            attrs: {
                                              src: "http://i.pravatar.cc/64"
                                            }
                                          })
                                        ])
                                      ]
                                    },
                                    proxy: true
                                  },
                                  {
                                    key: "opposite",
                                    fn: function() {
                                      return [
                                        _c("span", [_vm._v("Tus eu perfecto")])
                                      ]
                                    },
                                    proxy: true
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            [
                              _vm._v(" "),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                { staticClass: "elevation-2" },
                                [
                                  _c(
                                    "v-card-title",
                                    { staticClass: "headline" },
                                    [_vm._v("Lorem ipsum")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-card-text", [
                                    _vm._v(
                                      "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune\n                  scaevola imperdiet nec ut, sed euismod convenire principes\n                  at. Est et nobis iisque percipit, an vim zril disputando\n                  voluptatibus, vix an salutandi sententiae."
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
              attrs: { title: "Advanced" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Modular components allow you to create highly customized solutions\n            that just work.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { staticStyle: { "max-width": "600px" } },
                        [
                          _c(
                            "v-timeline",
                            { attrs: { dense: "", clipped: "" } },
                            [
                              _c(
                                "v-timeline-item",
                                {
                                  staticClass: "white--text mb-12",
                                  attrs: {
                                    "fill-dot": "",
                                    color: "orange",
                                    large: ""
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "icon",
                                      fn: function() {
                                        return [_c("span", [_vm._v("JL")])]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      "hide-details": "",
                                      flat: "",
                                      label: "Leave a comment...",
                                      solo: ""
                                    },
                                    on: {
                                      keydown: function($event) {
                                        if (
                                          !$event.type.indexOf("key") &&
                                          _vm._k(
                                            $event.keyCode,
                                            "enter",
                                            13,
                                            $event.key,
                                            "Enter"
                                          )
                                        ) {
                                          return null
                                        }
                                        return _vm.comment($event)
                                      }
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "append",
                                        fn: function() {
                                          return [
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "mx-0",
                                                attrs: { depressed: "" },
                                                on: { click: _vm.comment }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                      Post\n                    "
                                                )
                                              ]
                                            )
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ]),
                                    model: {
                                      value: _vm.input,
                                      callback: function($$v) {
                                        _vm.input = $$v
                                      },
                                      expression: "input"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-slide-x-transition",
                                { attrs: { group: "" } },
                                _vm._l(_vm.timeline, function(event) {
                                  return _c(
                                    "v-timeline-item",
                                    {
                                      key: event.id,
                                      staticClass: "mb-4",
                                      attrs: { color: "pink", small: "" }
                                    },
                                    [
                                      _c(
                                        "v-row",
                                        { attrs: { justify: "space-between" } },
                                        [
                                          _c("v-col", {
                                            attrs: { cols: "7" },
                                            domProps: {
                                              textContent: _vm._s(event.text)
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-col", {
                                            staticClass: "text-right",
                                            attrs: { cols: "5" },
                                            domProps: {
                                              textContent: _vm._s(event.time)
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
                              ),
                              _vm._v(" "),
                              _c(
                                "v-timeline-item",
                                {
                                  staticClass: "mb-6",
                                  attrs: { "hide-dot": "" }
                                },
                                [_c("span", [_vm._v("TODAY")])]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-timeline-item",
                                {
                                  staticClass: "mb-4",
                                  attrs: {
                                    color: "grey",
                                    "icon-color": "grey lighten-2",
                                    small: ""
                                  }
                                },
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { justify: "space-between" } },
                                    [
                                      _c("v-col", { attrs: { cols: "7" } }, [
                                        _vm._v("This order was archived.")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-right",
                                          attrs: { cols: "5" }
                                        },
                                        [_vm._v("15:26 EDT")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-timeline-item",
                                { staticClass: "mb-4", attrs: { small: "" } },
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { justify: "space-between" } },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "7" } },
                                        [
                                          _c(
                                            "v-chip",
                                            {
                                              staticClass: "white--text ml-0",
                                              attrs: {
                                                color: "purple",
                                                label: "",
                                                small: ""
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      APP\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "\n                    Digital Downloads fulfilled 1 item.\n                  "
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-right",
                                          attrs: { cols: "5" }
                                        },
                                        [_vm._v("15:25 EDT")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-timeline-item",
                                {
                                  staticClass: "mb-4",
                                  attrs: { color: "grey", small: "" }
                                },
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { justify: "space-between" } },
                                    [
                                      _c("v-col", { attrs: { cols: "7" } }, [
                                        _vm._v(
                                          "\n                    Order confirmation email was sent to Sean Paul\n                    (support@keenthemes.com).\n                  "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-right",
                                          attrs: { cols: "5" }
                                        },
                                        [_vm._v("15:25 EDT")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-timeline-item",
                                {
                                  staticClass: "mb-4",
                                  attrs: { "hide-dot": "" }
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "mx-0",
                                      attrs: { color: "white" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Resend Email\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-timeline-item",
                                {
                                  staticClass: "mb-4",
                                  attrs: { color: "grey", small: "" }
                                },
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { justify: "space-between" } },
                                    [
                                      _c("v-col", { attrs: { cols: "7" } }, [
                                        _vm._v(
                                          "\n                    A $15.00 USD payment was processed on PayPal Express\n                    Checkout\n                  "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-right",
                                          attrs: { cols: "5" }
                                        },
                                        [_vm._v("15:25 EDT")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-timeline-item",
                                { attrs: { color: "grey", small: "" } },
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { justify: "space-between" } },
                                    [
                                      _c("v-col", { attrs: { cols: "7" } }, [
                                        _vm._v(
                                          "\n                    Sean Paul placed this order on Online Store (checkout\n                    #1937432132572).\n                  "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-right",
                                          attrs: { cols: "5" }
                                        },
                                        [_vm._v("15:25 EDT")]
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
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("KTCodePreview", {
                attrs: { title: "Colored dots" },
                scopedSlots: _vm._u([
                  {
                    key: "preview",
                    fn: function() {
                      return [
                        _c("p", [
                          _vm._v(
                            "\n              Colored dots create visual breakpoints that make your timelines\n              easier to read.\n            "
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
                              "v-card",
                              { attrs: { dark: "", flat: "" } },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      absolute: "",
                                      bottom: "",
                                      color: "pink",
                                      right: "",
                                      fab: ""
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-plus")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-title",
                                  { staticClass: "pa-2 purple lighten-3" },
                                  [
                                    _c(
                                      "v-btn",
                                      { attrs: { icon: "" } },
                                      [_c("v-icon", [_vm._v("mdi-menu")])],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "h3",
                                      {
                                        staticClass:
                                          "title font-weight-light text-center grow"
                                      },
                                      [
                                        _vm._v(
                                          "\n                    Timeline\n                  "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-avatar",
                                      [
                                        _c("v-img", {
                                          attrs: {
                                            src:
                                              "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
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
                                  "v-img",
                                  {
                                    attrs: {
                                      src: "media/stock-600x600/img-10.jpg",
                                      gradient:
                                        "to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-container",
                                      { staticClass: "fill-height" },
                                      [
                                        _c(
                                          "v-row",
                                          { attrs: { align: "center" } },
                                          [
                                            _c(
                                              "strong",
                                              {
                                                staticClass:
                                                  "display-4 font-weight-regular mr-6"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                        8\n                      "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-row",
                                              { attrs: { justify: "end" } },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "headline font-weight-light"
                                                  },
                                                  [_vm._v("Monday")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "text-uppercase font-weight-light"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                          February 2015\n                        "
                                                    )
                                                  ]
                                                )
                                              ]
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
                            ),
                            _vm._v(" "),
                            _c(
                              "v-card-text",
                              { staticClass: "py-0" },
                              [
                                _c(
                                  "v-timeline",
                                  { attrs: { "align-top": "", dense: "" } },
                                  [
                                    _c(
                                      "v-timeline-item",
                                      { attrs: { color: "pink", small: "" } },
                                      [
                                        _c(
                                          "v-row",
                                          { staticClass: "pt-1" },
                                          [
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "3" } },
                                              [_c("strong", [_vm._v("5pm")])]
                                            ),
                                            _vm._v(" "),
                                            _c("v-col", [
                                              _c("strong", [
                                                _vm._v("New Icon")
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "caption" },
                                                [_vm._v("Mobile App")]
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
                                      "v-timeline-item",
                                      {
                                        attrs: {
                                          color: "teal lighten-3",
                                          small: ""
                                        }
                                      },
                                      [
                                        _c(
                                          "v-row",
                                          { staticClass: "pt-1" },
                                          [
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "3" } },
                                              [_c("strong", [_vm._v("3-4pm")])]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              [
                                                _c("strong", [
                                                  _vm._v("Design Stand Up")
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "caption mb-2"
                                                  },
                                                  [_vm._v("Hangouts")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-avatar",
                                                  [
                                                    _c("v-img", {
                                                      attrs: {
                                                        src:
                                                          "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-avatar",
                                                  [
                                                    _c("v-img", {
                                                      attrs: {
                                                        src:
                                                          "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-avatar",
                                                  [
                                                    _c("v-img", {
                                                      attrs: {
                                                        src:
                                                          "https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
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
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-timeline-item",
                                      { attrs: { color: "pink", small: "" } },
                                      [
                                        _c(
                                          "v-row",
                                          { staticClass: "pt-1" },
                                          [
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "3" } },
                                              [_c("strong", [_vm._v("12pm")])]
                                            ),
                                            _vm._v(" "),
                                            _c("v-col", [
                                              _c("strong", [
                                                _vm._v("Lunch break")
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
                                      "v-timeline-item",
                                      {
                                        attrs: {
                                          color: "teal lighten-3",
                                          small: ""
                                        }
                                      },
                                      [
                                        _c(
                                          "v-row",
                                          { staticClass: "pt-1" },
                                          [
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "3" } },
                                              [_c("strong", [_vm._v("9-11am")])]
                                            ),
                                            _vm._v(" "),
                                            _c("v-col", [
                                              _c("strong", [
                                                _vm._v("Finish Home Screen")
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "caption" },
                                                [_vm._v("Web App")]
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
                    key: "html",
                    fn: function() {
                      return [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.code4.html) +
                            "\n          "
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
                attrs: { title: "Dense alert" },
                scopedSlots: _vm._u([
                  {
                    key: "preview",
                    fn: function() {
                      return [
                        _c("p", [
                          _c("code", [_vm._v("dense")]),
                          _vm._v(
                            " timelines position all content to the right.\n              In this example, "
                          ),
                          _c("code", [_vm._v("v-alert")]),
                          _vm._v(
                            " replaces the card to\n              provide a different design.\n            "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card",
                          { attrs: { "max-width": "600" } },
                          [
                            _c(
                              "v-card-title",
                              { staticClass: "blue-grey white--text" },
                              [
                                _c("span", { staticClass: "title" }, [
                                  _vm._v("Logs")
                                ]),
                                _vm._v(" "),
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      outlined: _vm.interval == null,
                                      color:
                                        _vm.interval == null
                                          ? "white"
                                          : "primary",
                                      dark: "",
                                      depressed: ""
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.interval == null
                                          ? _vm.start()
                                          : _vm.stop()
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                  Realtime Logging\n                "
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-card-text",
                              { staticClass: "py-0" },
                              [
                                _c(
                                  "v-timeline",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-slide-x-reverse-transition",
                                      {
                                        attrs: {
                                          group: "",
                                          "hide-on-leave": ""
                                        }
                                      },
                                      _vm._l(_vm.items, function(item) {
                                        return _c(
                                          "v-timeline-item",
                                          {
                                            key: item.id,
                                            attrs: {
                                              color: item.color,
                                              small: "",
                                              "fill-dot": ""
                                            }
                                          },
                                          [
                                            _c(
                                              "v-alert",
                                              {
                                                staticClass: "white--text",
                                                attrs: {
                                                  value: true,
                                                  color: item.color,
                                                  icon: item.icon
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                        Lorem ipsum dolor sit amet, no nam oblique veritus.\n                        Commune scaevola imperdiet nec ut, sed euismod\n                        convenire principes at. Est et nobis iisque percipit,\n                        an vim zril disputando voluptatibus, vix an salutandi\n                        sententiae.\n                      "
                                                )
                                              ]
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
                          "\n            " +
                            _vm._s(_vm.code3.html) +
                            "\n          "
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
                          "\n            " +
                            _vm._s(_vm.code3.js) +
                            "\n          "
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
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);