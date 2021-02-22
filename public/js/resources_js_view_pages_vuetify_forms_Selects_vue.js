(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_pages_vuetify_forms_Selects_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/Selects.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/Selects.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      code1: {
        html: "<v-row align=\"center\">\n  <v-col cols=\"12\">\n    <v-select\n      :items=\"items\"\n      disabled\n      label=\"Disabled\"\n    ></v-select>\n  </v-col>\n</v-row>",
        js: "export default {\n  data: () => ({\n    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],\n  }),\n}",
        items: ["Foo", "Bar", "Fizz", "Buzz"]
      },
      code2: {
        html: "<v-container fluid>\n  <v-row align=\"center\">\n    <v-col cols=\"6\">\n      <v-subheader>Prepended icon</v-subheader>\n    </v-col>\n    <v-col cols=\"6\">\n      <v-select\n        v-model=\"e1\"\n        :items=\"states\"\n        menu-props=\"auto\"\n        label=\"Select\"\n        hide-details\n        prepend-icon=\"map\"\n        single-line\n      ></v-select>\n    </v-col>\n    <v-col cols=\"6\">\n      <v-subheader>Appended icon</v-subheader>\n    </v-col>\n    <v-col cols=\"6\">\n      <v-select\n        v-model=\"e2\"\n        :items=\"states\"\n        append-outer-icon=\"map\"\n        menu-props=\"auto\"\n        hide-details\n        label=\"Select\"\n        single-line\n      ></v-select>\n    </v-col>\n  </v-row>\n</v-container>",
        js: "export default {\n  data () {\n    return {\n      e1: 'Florida',\n      e2: 'Texas',\n      e3: null,\n      e4: null,\n      items: [\n        { text: 'State 1' },\n        { text: 'State 2' },\n        { text: 'State 3' },\n        { text: 'State 4' },\n        { text: 'State 5' },\n        { text: 'State 6' },\n        { text: 'State 7' },\n      ],\n      states: [\n        'Alabama', 'Alaska', 'American Samoa', 'Arizona',\n        'Arkansas', 'California', 'Colorado', 'Connecticut',\n        'Delaware', 'District of Columbia', 'Federated States of Micronesia',\n        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',\n        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',\n        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',\n        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',\n        'Missouri', 'Montana', 'Nebraska', 'Nevada',\n        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',\n        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',\n        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',\n        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',\n        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',\n        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',\n      ],\n    }\n  },\n}",
        e1: "Florida",
        e2: "Texas",
        e3: null,
        e4: null,
        items: [{
          text: "State 1"
        }, {
          text: "State 2"
        }, {
          text: "State 3"
        }, {
          text: "State 4"
        }, {
          text: "State 5"
        }, {
          text: "State 6"
        }, {
          text: "State 7"
        }],
        states: ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Federated States of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Island", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      },
      code3: {
        html: "<v-row align=\"center\">\n  <v-col cols=\"12\">\n    <v-select\n      :items=\"items\"\n      readonly\n      label=\"Read-only\"\n    ></v-select>\n  </v-col>\n</v-row>",
        js: "export default {\n  data: () => ({\n    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],\n  }),\n}",
        items: ["Foo", "Bar", "Fizz", "Buzz"]
      },
      code4: {
        html: "<v-container fluid>\n  <v-row align=\"center\">\n    <v-col cols=\"12\" sm=\"6\">\n      <v-subheader v-text=\"'Multiple with persistent hint'\"></v-subheader>\n    </v-col>\n    <v-col cols=\"12\" sm=\"6\">\n      <v-select\n        v-model=\"e6\"\n        :items=\"states\"\n        :menu-props=\"{ maxHeight: '400' }\"\n        label=\"Select\"\n        multiple\n        hint=\"Pick your favorite states\"\n        persistent-hint\n      ></v-select>\n    </v-col>\n\n    <v-col cols=\"12\" sm=\"6\">\n      <v-subheader v-text=\"'Multiple (Chips) with persistent hint'\"></v-subheader>\n    </v-col>\n\n    <v-col cols=\"12\" sm=\"6\">\n      <v-select\n        v-model=\"e7\"\n        :items=\"states\"\n        label=\"Select\"\n        multiple\n        chips\n        hint=\"What are the target regions\"\n        persistent-hint\n      ></v-select>\n    </v-col>\n  </v-row>\n</v-container>",
        js: "export default {\n  data () {\n    return {\n      e6: [],\n      e7: [],\n      states: [\n        'Alabama', 'Alaska', 'American Samoa', 'Arizona',\n        'Arkansas', 'California', 'Colorado', 'Connecticut',\n        'Delaware', 'District of Columbia', 'Federated States of Micronesia',\n        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',\n        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',\n        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',\n        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',\n        'Missouri', 'Montana', 'Nebraska', 'Nevada',\n        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',\n        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',\n        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',\n        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',\n        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',\n        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',\n      ],\n    }\n  },\n}",
        e6: [],
        e7: [],
        states: ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Federated States of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Island", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      },
      code5: {
        html: "<v-container fluid>\n  <v-row align=\"center\">\n    <v-col class=\"d-flex\" cols=\"12\" sm=\"6\">\n      <v-select\n        :items=\"items\"\n        label=\"Standard\"\n        dense\n      ></v-select>\n    </v-col>\n\n    <v-col class=\"d-flex\" cols=\"12\" sm=\"6\">\n      <v-select\n        :items=\"items\"\n        filled\n        label=\"Filled style\"\n        dense\n      ></v-select>\n    </v-col>\n\n    <v-col class=\"d-flex\" cols=\"12\" sm=\"6\">\n      <v-select\n        :items=\"items\"\n        label=\"Outlined style\"\n        dense\n        outlined\n      ></v-select>\n    </v-col>\n\n    <v-col class=\"d-flex\" cols=\"12\" sm=\"6\">\n      <v-select\n        :items=\"items\"\n        label=\"Solo field\"\n        dense\n        solo\n      ></v-select>\n    </v-col>\n  </v-row>\n</v-container>",
        js: "export default {\n  data: () => ({\n    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],\n  }),\n}",
        items: ["Foo", "Bar", "Fizz", "Buzz"]
      },
      code6: {
        html: "<v-container fluid>\n  <v-select\n    v-model=\"selectedFruits\"\n    :items=\"fruits\"\n    label=\"Favorite Fruits\"\n    multiple\n  >\n    <template v-slot:prepend-item>\n      <v-list-item\n        ripple\n        @click=\"toggle\"\n      >\n        <v-list-item-action>\n          <v-icon :color=\"selectedFruits.length > 0 ? 'indigo darken-4' : ''\">{{ icon }}</v-icon>\n        </v-list-item-action>\n        <v-list-item-content>\n          <v-list-item-title>Select All</v-list-item-title>\n        </v-list-item-content>\n      </v-list-item>\n      <v-divider class=\"mt-2\"></v-divider>\n    </template>\n    <template v-slot:append-item>\n      <v-divider class=\"mb-2\"></v-divider>\n      <v-list-item disabled>\n        <v-list-item-avatar color=\"grey lighten-3\">\n          <v-icon>mdi-food-apple</v-icon>\n        </v-list-item-avatar>\n\n        <v-list-item-content v-if=\"likesAllFruit\">\n          <v-list-item-title>Holy smokes, someone call the fruit police!</v-list-item-title>\n        </v-list-item-content>\n\n        <v-list-item-content v-else-if=\"likesSomeFruit\">\n          <v-list-item-title>Fruit Count</v-list-item-title>\n          <v-list-item-subtitle>{{ selectedFruits.length }}</v-list-item-subtitle>\n        </v-list-item-content>\n\n        <v-list-item-content v-else>\n          <v-list-item-title>\n            How could you not like fruit?\n          </v-list-item-title>\n          <v-list-item-subtitle>\n            Go ahead, make a selection above!\n          </v-list-item-subtitle>\n        </v-list-item-content>\n      </v-list-item>\n    </template>\n  </v-select>\n</v-container>",
        js: "export default {\n  data: () => ({\n    fruits: [\n      'Apples',\n      'Apricots',\n      'Avocado',\n      'Bananas',\n      'Blueberries',\n      'Blackberries',\n      'Boysenberries',\n      'Bread fruit',\n      'Cantaloupes (cantalope)',\n      'Cherries',\n      'Cranberries',\n      'Cucumbers',\n      'Currants',\n      'Dates',\n      'Eggplant',\n      'Figs',\n      'Grapes',\n      'Grapefruit',\n      'Guava',\n      'Honeydew melons',\n      'Huckleberries',\n      'Kiwis',\n      'Kumquat',\n      'Lemons',\n      'Limes',\n      'Mangos',\n      'Mulberries',\n      'Muskmelon',\n      'Nectarines',\n      'Olives',\n      'Oranges',\n      'Papaya',\n      'Peaches',\n      'Pears',\n      'Persimmon',\n      'Pineapple',\n      'Plums',\n      'Pomegranate',\n      'Raspberries',\n      'Rose Apple',\n      'Starfruit',\n      'Strawberries',\n      'Tangerines',\n      'Tomatoes',\n      'Watermelons',\n      'Zucchini',\n    ],\n    selectedFruits: [],\n  }),\n\n  computed: {\n    likesAllFruit () {\n      return this.selectedFruits.length === this.fruits.length\n    },\n    likesSomeFruit () {\n      return this.selectedFruits.length > 0 && !this.likesAllFruit\n    },\n    icon () {\n      if (this.likesAllFruit) return 'mdi-close-box'\n      if (this.likesSomeFruit) return 'mdi-minus-box'\n      return 'mdi-checkbox-blank-outline'\n    },\n  },\n\n  methods: {\n    toggle () {\n      this.$nextTick(() => {\n        if (this.likesAllFruit) {\n          this.selectedFruits = []\n        } else {\n          this.selectedFruits = this.fruits.slice()\n        }\n      })\n    },\n  },\n}",
        fruits: ["Apples", "Apricots", "Avocado", "Bananas", "Blueberries", "Blackberries", "Boysenberries", "Bread fruit", "Cantaloupes (cantalope)", "Cherries", "Cranberries", "Cucumbers", "Currants", "Dates", "Eggplant", "Figs", "Grapes", "Grapefruit", "Guava", "Honeydew melons", "Huckleberries", "Kiwis", "Kumquat", "Lemons", "Limes", "Mangos", "Mulberries", "Muskmelon", "Nectarines", "Olives", "Oranges", "Papaya", "Peaches", "Pears", "Persimmon", "Pineapple", "Plums", "Pomegranate", "Raspberries", "Rose Apple", "Starfruit", "Strawberries", "Tangerines", "Tomatoes", "Watermelons", "Zucchini"],
        selectedFruits: []
      },
      code7: {
        html: "<v-container fluid>\n    <v-select\n      v-model=\"value\"\n      :items=\"items\"\n      label=\"Select Item\"\n      multiple\n    >\n      <template v-slot:selection=\"{ item, index }\">\n        <v-chip v-if=\"index === 0\">\n          <span>{{ item }}</span>\n        </v-chip>\n        <span\n          v-if=\"index === 1\"\n          class=\"grey--text caption\"\n        >(+{{ value.length - 1 }} others)</span>\n      </template>\n    </v-select>\n</v-container>",
        js: "export default {\n  data: () => ({\n    items: ['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar'],\n    value: ['foo', 'bar', 'fizz'],\n  }),\n}",
        items: ["foo", "bar", "fizz", "buzz", "fizzbuzz", "foobar"],
        value: ["foo", "bar", "fizz"]
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
      title: "Selects"
    }]);
  },
  computed: {
    // code6
    likesAllFruit: function likesAllFruit() {
      return this.code6.selectedFruits.length === this.code6.fruits.length;
    },
    likesSomeFruit: function likesSomeFruit() {
      return this.code6.selectedFruits.length > 0 && !this.likesAllFruit;
    },
    icon: function icon() {
      if (this.likesAllFruit) return "mdi-close-box";
      if (this.likesSomeFruit) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    }
  },
  methods: {
    // code6
    toggle: function toggle() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.likesAllFruit) {
          _this.code6.selectedFruits = [];
        } else {
          _this.code6.selectedFruits = _this.code6.fruits.slice();
        }
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

/***/ "./resources/js/view/pages/vuetify/forms/Selects.vue":
/*!***********************************************************!*\
  !*** ./resources/js/view/pages/vuetify/forms/Selects.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Selects_vue_vue_type_template_id_0d446682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selects.vue?vue&type=template&id=0d446682& */ "./resources/js/view/pages/vuetify/forms/Selects.vue?vue&type=template&id=0d446682&");
/* harmony import */ var _Selects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Selects.vue?vue&type=script&lang=js& */ "./resources/js/view/pages/vuetify/forms/Selects.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Selects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Selects_vue_vue_type_template_id_0d446682___WEBPACK_IMPORTED_MODULE_0__.render,
  _Selects_vue_vue_type_template_id_0d446682___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/vuetify/forms/Selects.vue"
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

/***/ "./resources/js/view/pages/vuetify/forms/Selects.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/forms/Selects.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Selects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/Selects.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/view/pages/vuetify/forms/Selects.vue?vue&type=template&id=0d446682&":
/*!******************************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/forms/Selects.vue?vue&type=template&id=0d446682& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selects_vue_vue_type_template_id_0d446682___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selects_vue_vue_type_template_id_0d446682___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selects_vue_vue_type_template_id_0d446682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Selects.vue?vue&type=template&id=0d446682& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/Selects.vue?vue&type=template&id=0d446682&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/Selects.vue?vue&type=template&id=0d446682&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/Selects.vue?vue&type=template&id=0d446682& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Selects")]),
            _vm._v(
              " Select fields components are used for collecting user\n      provided information from a list of options.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/selects",
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
              attrs: { title: "Disabled" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("You cannot use disabled "),
                        _c("code", [_vm._v("v-select")]),
                        _vm._v(".")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { align: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.code1.items,
                                  disabled: "",
                                  label: "Disabled"
                                }
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
              attrs: { title: "Read-only" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            You cannot use read-only "),
                        _c("code", [_vm._v("v-select")]),
                        _vm._v(
                          ", but it looks\n            default.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { align: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.code3.items,
                                  readonly: "",
                                  label: "Read-only"
                                }
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
              attrs: { title: "Dense" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            You can use "),
                        _c("code", [_vm._v("dense")]),
                        _vm._v(
                          " prop to reduce the field height and\n            lower max height of list items.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "v-row",
                            { attrs: { align: "center" } },
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "d-flex",
                                  attrs: { cols: "12", sm: "6" }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code5.items,
                                      label: "Standard",
                                      dense: ""
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "d-flex",
                                  attrs: { cols: "12", sm: "6" }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code5.items,
                                      filled: "",
                                      label: "Filled style",
                                      dense: ""
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "d-flex",
                                  attrs: { cols: "12", sm: "6" }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code5.items,
                                      label: "Outlined style",
                                      dense: "",
                                      outlined: ""
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "d-flex",
                                  attrs: { cols: "12", sm: "6" }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code5.items,
                                      label: "Solo field",
                                      dense: "",
                                      solo: ""
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
              attrs: { title: "Change selection appearance" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("selection")]),
                        _vm._v(
                          " slot can be used to customize the way\n            selected values are shown in the input. This is great when you\n            want something like "
                        ),
                        _c("code", [_vm._v("foo (+20 others)")]),
                        _vm._v(
                          " or don't want\n            the selection to occupy multiple lines.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.code7.items,
                              label: "Select Item",
                              multiple: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "selection",
                                fn: function(ref) {
                                  var item = ref.item
                                  var index = ref.index
                                  return [
                                    index === 0
                                      ? _c("v-chip", [
                                          _c("span", [_vm._v(_vm._s(item))])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    index === 1
                                      ? _c(
                                          "span",
                                          { staticClass: "grey--text caption" },
                                          [
                                            _vm._v(
                                              "(+" +
                                                _vm._s(
                                                  _vm.code7.value.length - 1
                                                ) +
                                                " others)"
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.code7.value,
                              callback: function($$v) {
                                _vm.$set(_vm.code7, "value", $$v)
                              },
                              expression: "code7.value"
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Icons" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("Use a custom prepended or appended icon.")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "v-row",
                            { attrs: { align: "center" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [_c("v-subheader", [_vm._v("Prepended icon")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code2.states,
                                      "menu-props": "auto",
                                      label: "Select",
                                      "hide-details": "",
                                      "prepend-icon": "map",
                                      "single-line": ""
                                    },
                                    model: {
                                      value: _vm.code2.e1,
                                      callback: function($$v) {
                                        _vm.$set(_vm.code2, "e1", $$v)
                                      },
                                      expression: "code2.e1"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [_c("v-subheader", [_vm._v("Appended icon")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code2.states,
                                      "append-outer-icon": "map",
                                      "menu-props": "auto",
                                      "hide-details": "",
                                      label: "Select",
                                      "single-line": ""
                                    },
                                    model: {
                                      value: _vm.code2.e2,
                                      callback: function($$v) {
                                        _vm.$set(_vm.code2, "e2", $$v)
                                      },
                                      expression: "code2.e2"
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
              attrs: { title: "Multiple" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            A multi-select can utilize "),
                        _c("code", [_vm._v("v-chip")]),
                        _vm._v(
                          " as the display for\n            selected items.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "v-row",
                            { attrs: { align: "center" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-subheader", {
                                    domProps: {
                                      textContent: _vm._s(
                                        "Multiple with persistent hint"
                                      )
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code4.states,
                                      "menu-props": { maxHeight: "400" },
                                      label: "Select",
                                      multiple: "",
                                      hint: "Pick your favorite states",
                                      "persistent-hint": ""
                                    },
                                    model: {
                                      value: _vm.code4.e6,
                                      callback: function($$v) {
                                        _vm.$set(_vm.code4, "e6", $$v)
                                      },
                                      expression: "code4.e6"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-subheader", {
                                    domProps: {
                                      textContent: _vm._s(
                                        "Multiple (Chips) with persistent hint"
                                      )
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.code4.states,
                                      label: "Select",
                                      multiple: "",
                                      chips: "",
                                      hint: "What are the target regions",
                                      "persistent-hint": ""
                                    },
                                    model: {
                                      value: _vm.code4.e7,
                                      callback: function($$v) {
                                        _vm.$set(_vm.code4, "e7", $$v)
                                      },
                                      expression: "code4.e7"
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
              attrs: { title: "Prepend/Append item slots" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("v-select")]),
                        _vm._v(
                          " components can be optionally expanded\n            with prepended and appended items. This is perfect for customized\n            "
                        ),
                        _c("strong", [_vm._v("select-all")]),
                        _vm._v(" functionality.\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.code6.fruits,
                              label: "Favorite Fruits",
                              multiple: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-item",
                                fn: function() {
                                  return [
                                    _c(
                                      "v-list-item",
                                      {
                                        attrs: { ripple: "" },
                                        on: { click: _vm.toggle }
                                      },
                                      [
                                        _c(
                                          "v-list-item-action",
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: {
                                                  color:
                                                    _vm.code6.selectedFruits
                                                      .length > 0
                                                      ? "indigo darken-4"
                                                      : ""
                                                }
                                              },
                                              [_vm._v(_vm._s(_vm.icon))]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item-content",
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v("Select All")
                                            ])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-divider", { staticClass: "mt-2" })
                                  ]
                                },
                                proxy: true
                              },
                              {
                                key: "append-item",
                                fn: function() {
                                  return [
                                    _c("v-divider", { staticClass: "mb-2" }),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item",
                                      { attrs: { disabled: "" } },
                                      [
                                        _c(
                                          "v-list-item-avatar",
                                          {
                                            attrs: { color: "grey lighten-3" }
                                          },
                                          [
                                            _c("v-icon", [
                                              _vm._v("mdi-food-apple")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.likesAllFruit
                                          ? _c(
                                              "v-list-item-content",
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    "Holy smokes, someone call the fruit\n                      police!"
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          : _vm.likesSomeFruit
                                          ? _c(
                                              "v-list-item-content",
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v("Fruit Count")
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.code6.selectedFruits
                                                        .length
                                                    )
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          : _c(
                                              "v-list-item-content",
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    "\n                      How could you not like fruit?\n                    "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _vm._v(
                                                    "\n                      Go ahead, make a selection above!\n                    "
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
                              }
                            ]),
                            model: {
                              value: _vm.code6.selectedFruits,
                              callback: function($$v) {
                                _vm.$set(_vm.code6, "selectedFruits", $$v)
                              },
                              expression: "code6.selectedFruits"
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