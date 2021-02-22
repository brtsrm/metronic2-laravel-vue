(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_pages_vuetify_forms_Autocompletes_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/Autocompletes.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/Autocompletes.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../content/CodePreview.vue */ "./resources/js/view/content/CodePreview.vue");
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


var srcs = {
  1: "media/users/300_1.jpg",
  2: "media/users/300_2.jpg",
  3: "media/users/300_3.jpg",
  4: "media/users/300_4.jpg",
  5: "media/users/300_5.jpg"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      code1: {
        html: " <v-card\n  class=\"overflow-hidden\"\n  color=\"purple lighten-1\"\n  dark\n>\n  <v-toolbar\n    flat\n    color=\"purple\"\n  >\n    <v-icon>mdi-account</v-icon>\n    <v-toolbar-title class=\"font-weight-light\">User Profile</v-toolbar-title>\n    <v-spacer></v-spacer>\n    <v-btn\n      color=\"purple darken-3\"\n      fab\n      small\n      @click=\"isEditing = !isEditing\"\n    >\n      <v-icon v-if=\"isEditing\">mdi-close</v-icon>\n      <v-icon v-else>mdi-pencil</v-icon>\n    </v-btn>\n  </v-toolbar>\n  <v-card-text>\n    <v-text-field\n      :disabled=\"!isEditing\"\n      color=\"white\"\n      label=\"Name\"\n    ></v-text-field>\n    <v-autocomplete\n      :disabled=\"!isEditing\"\n      :items=\"states\"\n      :filter=\"customFilter\"\n      color=\"white\"\n      item-text=\"name\"\n      label=\"State\"\n    ></v-autocomplete>\n  </v-card-text>\n  <v-divider></v-divider>\n  <v-card-actions>\n    <v-spacer></v-spacer>\n    <v-btn\n      :disabled=\"!isEditing\"\n      color=\"success\"\n      @click=\"save\"\n    >\n      Save\n    </v-btn>\n  </v-card-actions>\n  <v-snackbar\n    v-model=\"hasSaved\"\n    :timeout=\"2000\"\n    absolute\n    bottom\n    left\n  >\n    Your profile has been updated\n  </v-snackbar>\n</v-card>",
        js: "export default {\n  data () {\n    return {\n      hasSaved: false,\n      isEditing: null,\n      model: null,\n      states: [\n        { name: 'Florida', abbr: 'FL', id: 1 },\n        { name: 'Georgia', abbr: 'GA', id: 2 },\n        { name: 'Nebraska', abbr: 'NE', id: 3 },\n        { name: 'California', abbr: 'CA', id: 4 },\n        { name: 'New York', abbr: 'NY', id: 5 },\n      ],\n    }\n  },\n\n  methods: {\n    customFilter (item, queryText, itemText) {\n      const textOne = item.name.toLowerCase()\n      const textTwo = item.abbr.toLowerCase()\n      const searchText = queryText.toLowerCase()\n\n      return textOne.indexOf(searchText) > -1 ||\n        textTwo.indexOf(searchText) > -1\n    },\n    save () {\n      this.isEditing = !this.isEditing\n      this.hasSaved = true\n    },\n  },\n}",
        hasSaved: false,
        isEditing: null,
        model: null,
        states: [{
          name: "Florida",
          abbr: "FL",
          id: 1
        }, {
          name: "Georgia",
          abbr: "GA",
          id: 2
        }, {
          name: "Nebraska",
          abbr: "NE",
          id: 3
        }, {
          name: "California",
          abbr: "CA",
          id: 4
        }, {
          name: "New York",
          abbr: "NY",
          id: 5
        }]
      },
      code2: {
        html: "<v-card\n  color=\"blue-grey darken-1\"\n  dark\n  :loading=\"isUpdating\"\n>\n  <template v-slot:progress>\n    <v-progress-linear\n      absolute\n      color=\"green lighten-3\"\n      height=\"4\"\n      indeterminate\n    ></v-progress-linear>\n  </template>\n  <v-img\n    height=\"200\"\n    src=\"media/stock-600x600/img-10.jpg\"\n  >\n    <v-row>\n      <v-col\n        class=\"text-right\"\n        cols=\"12\"\n      >\n        <v-menu\n          bottom\n          left\n          transition=\"slide-y-transition\"\n        >\n          <template v-slot:activator=\"{ on }\">\n            <v-btn\n              icon\n              v-on=\"on\"\n            >\n              <v-icon>mdi-dots-vertical</v-icon>\n            </v-btn>\n          </template>\n          <v-list>\n            <v-list-item @click=\"isUpdating = true\">\n              <v-list-item-action>\n                <v-icon>mdi-settings</v-icon>\n              </v-list-item-action>\n              <v-list-item-content>\n                <v-list-item-title>Update</v-list-item-title>\n              </v-list-item-content>\n            </v-list-item>\n          </v-list>\n        </v-menu>\n      </v-col>\n      <v-row\n        class=\"pa-4\"\n        align=\"center\"\n        justify=\"center\"\n      >\n        <v-col class=\"text-center\">\n          <h3 class=\"headline\">{{ name }}</h3>\n          <span class=\"grey--text text--lighten-1\">{{ title }}</span>\n        </v-col>\n      </v-row>\n    </v-row>\n  </v-img>\n  <v-form>\n    <v-container>\n      <v-row>\n        <v-col\n          cols=\"12\"\n          md=\"6\"\n        >\n          <v-text-field\n            v-model=\"name\"\n            :disabled=\"isUpdating\"\n            filled\n            color=\"blue-grey lighten-2\"\n            label=\"Name\"\n          ></v-text-field>\n        </v-col>\n        <v-col\n          cols=\"12\"\n          md=\"6\"\n        >\n          <v-text-field\n            v-model=\"title\"\n            :disabled=\"isUpdating\"\n            filled\n            color=\"blue-grey lighten-2\"\n            label=\"Title\"\n          ></v-text-field>\n        </v-col>\n        <v-col cols=\"12\">\n          <v-autocomplete\n            v-model=\"friends\"\n            :disabled=\"isUpdating\"\n            :items=\"people\"\n            filled\n            chips\n            color=\"blue-grey lighten-2\"\n            label=\"Select\"\n            item-text=\"name\"\n            item-value=\"name\"\n            multiple\n          >\n            <template v-slot:selection=\"data\">\n              <v-chip\n                v-bind=\"data.attrs\"\n                :input-value=\"data.selected\"\n                close\n                @click=\"data.select\"\n                @click:close=\"remove(data.item)\"\n              >\n                <v-avatar left>\n                  <v-img :src=\"data.item.avatar\"></v-img>\n                </v-avatar>\n                {{ data.item.name }}\n              </v-chip>\n            </template>\n            <template v-slot:item=\"data\">\n              <template v-if=\"typeof data.item !== 'object'\">\n                <v-list-item-content v-text=\"data.item\"></v-list-item-content>\n              </template>\n              <template v-else>\n                <v-list-item-avatar>\n                  <img :src=\"data.item.avatar\">\n                </v-list-item-avatar>\n                <v-list-item-content>\n                  <v-list-item-title v-html=\"data.item.name\"></v-list-item-title>\n                  <v-list-item-subtitle v-html=\"data.item.group\"></v-list-item-subtitle>\n                </v-list-item-content>\n              </template>\n            </template>\n          </v-autocomplete>\n        </v-col>\n      </v-row>\n    </v-container>\n  </v-form>\n  <v-divider></v-divider>\n  <v-card-actions>\n    <v-switch\n      v-model=\"autoUpdate\"\n      :disabled=\"isUpdating\"\n      class=\"mt-0\"\n      color=\"green lighten-2\"\n      hide-details\n      label=\"Auto Update\"\n    ></v-switch>\n    <v-spacer></v-spacer>\n    <v-btn\n      :disabled=\"autoUpdate\"\n      :loading=\"isUpdating\"\n      color=\"blue-grey darken-3\"\n      depressed\n      @click=\"isUpdating = true\"\n    >\n      <v-icon left>mdi-update</v-icon>\n      Update Now\n    </v-btn>\n  </v-card-actions>\n</v-card>",
        js: "export default {\n  data () {\n    const srcs = {\n      1: 'media/users/300_1.jpg',\n      2: 'media/users/300_2.jpg',\n      3: 'media/users/300_3.jpg',\n      4: 'media/users/300_4.jpg',\n      5: 'media/users/300_5.jpg',\n    }\n\n    return {\n      autoUpdate: true,\n      friends: ['Sandra Adams', 'Britta Holt'],\n      isUpdating: false,\n      name: 'Midnight Crew',\n      people: [\n        { header: 'Group 1' },\n        { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },\n        { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },\n        { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },\n        { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },\n        { divider: true },\n        { header: 'Group 2' },\n        { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },\n        { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },\n        { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },\n        { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },\n      ],\n      title: 'The summer breeze',\n    }\n  },\n\n  watch: {\n    isUpdating (val) {\n      if (val) {\n        setTimeout(() => (this.isUpdating = false), 3000)\n      }\n    },\n  },\n\n  methods: {\n    remove (item) {\n      const index = this.friends.indexOf(item.name)\n      if (index >= 0) this.friends.splice(index, 1)\n    },\n  },\n}",
        autoUpdate: true,
        friends: ["Sandra Adams", "Britta Holt"],
        name: "Midnight Crew",
        people: [{
          header: "Group 1"
        }, {
          name: "Sandra Adams",
          group: "Group 1",
          avatar: srcs[1]
        }, {
          name: "Ali Connors",
          group: "Group 1",
          avatar: srcs[2]
        }, {
          name: "Trevor Hansen",
          group: "Group 1",
          avatar: srcs[3]
        }, {
          name: "Tucker Smith",
          group: "Group 1",
          avatar: srcs[2]
        }, {
          divider: true
        }, {
          header: "Group 2"
        }, {
          name: "Britta Holt",
          group: "Group 2",
          avatar: srcs[4]
        }, {
          name: "Jane Smith ",
          group: "Group 2",
          avatar: srcs[5]
        }, {
          name: "John Smith",
          group: "Group 2",
          avatar: srcs[1]
        }, {
          name: "Sandra Williams",
          group: "Group 2",
          avatar: srcs[3]
        }],
        title: "The summer breeze"
      },
      isUpdating: false,
      code3: {
        html: "<v-toolbar color=\"orange accent-1\">\n  <v-app-bar-nav-icon class=\"hidden-sm-and-down\"></v-app-bar-nav-icon>\n  <v-toolbar-title class=\"title mr-6 hidden-sm-and-down\">Cryptocurrency</v-toolbar-title>\n  <v-autocomplete\n    v-model=\"model\"\n    :items=\"items\"\n    :loading=\"isLoading\"\n    :search-input.sync=\"search\"\n    chips\n    clearable\n    hide-details\n    hide-selected\n    item-text=\"name\"\n    item-value=\"symbol\"\n    label=\"Search for a coin...\"\n    solo\n  >\n    <template v-slot:no-data>\n      <v-list-item>\n        <v-list-item-title>\n          Search for your favorite\n          <strong>Cryptocurrency</strong>\n        </v-list-item-title>\n      </v-list-item>\n    </template>\n    <template v-slot:selection=\"{ attr, on, item, selected }\">\n      <v-chip\n        v-bind=\"attr\"\n        :input-value=\"selected\"\n        color=\"blue-grey\"\n        class=\"white--text\"\n        v-on=\"on\"\n      >\n        <v-icon left>mdi-coin</v-icon>\n        <span v-text=\"item.name\"></span>\n      </v-chip>\n    </template>\n    <template v-slot:item=\"{ item }\">\n      <v-list-item-avatar\n        color=\"indigo\"\n        class=\"headline font-weight-light white--text\"\n      >\n        {{ item.name.charAt(0) }}\n      </v-list-item-avatar>\n      <v-list-item-content>\n        <v-list-item-title v-text=\"item.name\"></v-list-item-title>\n        <v-list-item-subtitle v-text=\"item.symbol\"></v-list-item-subtitle>\n      </v-list-item-content>\n      <v-list-item-action>\n        <v-icon>mdi-coin</v-icon>\n      </v-list-item-action>\n    </template>\n  </v-autocomplete>\n  <template v-slot:extension>\n    <v-tabs\n      v-model=\"tab\"\n      :hide-slider=\"!model\"\n      color=\"blue-grey\"\n      slider-color=\"blue-grey\"\n    >\n      <v-tab :disabled=\"!model\">News</v-tab>\n      <v-tab :disabled=\"!model\">Trading</v-tab>\n      <v-tab :disabled=\"!model\">Blog</v-tab>\n    </v-tabs>\n  </template>\n</v-toolbar>",
        js: "export default {\n  data: () => ({\n    isLoading: false,\n    items: [],\n    model: null,\n    search: null,\n    tab: null,\n  }),\n\n  watch: {\n    model (val) {\n      if (val != null) this.tab = 0\n      else this.tab = null\n    },\n    search (val) {\n      // Items have already been loaded\n      if (this.items.length > 0) return\n\n      this.isLoading = true\n\n      // Lazily load input items\n      fetch('https://api.coinmarketcap.com/v2/listings/')\n        .then(res => res.json())\n        .then(res => {\n          this.items = res.data\n        })\n        .catch(err => {\n          console.log(err)\n        })\n        .finally(() => (this.isLoading = false))\n    },\n  },\n}",
        isLoading: false,
        items: [],
        tab: null
      },
      model: null,
      search: null,
      code4: {
        html: "<v-card>\n  <v-card-title class=\"headline font-weight-regular blue-grey white--text\">Profile</v-card-title>\n  <v-card-text>\n    <v-subheader class=\"pa-0\">Where do you live?</v-subheader>\n    <v-autocomplete\n      v-model=\"model\"\n      :hint=\"!isEditing ? 'Click the icon to edit' : 'Click the icon to save'\"\n      :items=\"states\"\n      :readonly=\"!isEditing\"\n      :label=\"`State \u2014 ${isEditing ? 'Editable' : 'Readonly'}`\"\n      persistent-hint\n      prepend-icon=\"mdi-city\"\n    >\n      <template v-slot:append-outer>\n        <v-slide-x-reverse-transition\n          mode=\"out-in\"\n        >\n          <v-icon\n            :key=\"`icon-${isEditing}`\"\n            :color=\"isEditing ? 'success' : 'info'\"\n            @click=\"isEditing = !isEditing\"\n            v-text=\"isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'\"\n          ></v-icon>\n        </v-slide-x-reverse-transition>\n      </template>\n    </v-autocomplete>\n  </v-card-text>\n</v-card>",
        js: "export default {\n  data () {\n    return {\n      isEditing: false,\n      model: null,\n      states: [\n        'Alabama', 'Alaska', 'American Samoa', 'Arizona',\n        'Arkansas', 'California', 'Colorado', 'Connecticut',\n        'Delaware', 'District of Columbia', 'Federated States of Micronesia',\n        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',\n        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',\n        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',\n        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',\n        'Missouri', 'Montana', 'Nebraska', 'Nevada',\n        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',\n        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',\n        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',\n        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',\n        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',\n        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',\n      ],\n    }\n  },\n}",
        isEditing: false,
        model: null,
        states: ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Federated States of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Island", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      }
    };
  },
  components: {
    KTCodePreview: _content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.SET_BREADCRUMB, [{
      title: "Vuetify",
      route: "alerts"
    }, {
      title: "Form Inputs & Control",
      route: "autocompletes"
    }, {
      title: "Autocompletes"
    }]);
  },
  watch: {
    // code 2
    isUpdating: function isUpdating(val) {
      var _this = this;

      if (val) {
        setTimeout(function () {
          return _this.isUpdating = false;
        }, 3000);
      }
    },
    // code 3
    model: function model(val) {
      if (val != null) this.tab = 0;else this.tab = null;
    },
    search: function search()
    /*val*/
    {
      var _this2 = this;

      // Items have already been loaded
      if (this.code3.items.length > 0) return;
      this.code3.isLoading = true; // Lazily load input items

      fetch("https://api.coinmarketcap.com/v2/listings/").then(function (res) {
        return res.json();
      }).then(function (res) {
        _this2.code3.items = res.data;
      })["catch"](function ()
      /*err*/
      {// console.log(err);
      })["finally"](function () {
        return _this2.code3.isLoading = false;
      });
    }
  },
  methods: {
    // code 1
    customFilter: function customFilter(item, queryText) {
      var textOne = item.name.toLowerCase();
      var textTwo = item.abbr.toLowerCase();
      var searchText = queryText.toLowerCase();
      return textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1;
    },
    save: function save() {
      this.code1.isEditing = !this.code1.isEditing;
      this.code1.hasSaved = true;
    },
    // code 2
    remove: function remove(item) {
      var index = this.code2.friends.indexOf(item.name);
      if (index >= 0) this.code2.friends.splice(index, 1);
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

/***/ "./resources/js/view/pages/vuetify/forms/Autocompletes.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/forms/Autocompletes.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Autocompletes_vue_vue_type_template_id_d02b7d5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Autocompletes.vue?vue&type=template&id=d02b7d5a& */ "./resources/js/view/pages/vuetify/forms/Autocompletes.vue?vue&type=template&id=d02b7d5a&");
/* harmony import */ var _Autocompletes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Autocompletes.vue?vue&type=script&lang=js& */ "./resources/js/view/pages/vuetify/forms/Autocompletes.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Autocompletes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Autocompletes_vue_vue_type_template_id_d02b7d5a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Autocompletes_vue_vue_type_template_id_d02b7d5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/vuetify/forms/Autocompletes.vue"
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

/***/ "./resources/js/view/pages/vuetify/forms/Autocompletes.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/forms/Autocompletes.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocompletes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Autocompletes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/Autocompletes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocompletes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/view/pages/vuetify/forms/Autocompletes.vue?vue&type=template&id=d02b7d5a&":
/*!************************************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/forms/Autocompletes.vue?vue&type=template&id=d02b7d5a& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocompletes_vue_vue_type_template_id_d02b7d5a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocompletes_vue_vue_type_template_id_d02b7d5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Autocompletes_vue_vue_type_template_id_d02b7d5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Autocompletes.vue?vue&type=template&id=d02b7d5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/Autocompletes.vue?vue&type=template&id=d02b7d5a&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/Autocompletes.vue?vue&type=template&id=d02b7d5a&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/Autocompletes.vue?vue&type=template&id=d02b7d5a& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Autocompletes")]),
            _vm._v(" The "),
            _c("code", [_vm._v("v-autocomplete")]),
            _vm._v(
              " component offers\n      simple and flexible type-ahead functionality. This is useful when\n      searching large sets of data or even dynamically requesting information\n      from an API.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/autocompletes",
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
              attrs: { title: "Custom filter on autocomplete" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("filter")]),
                        _vm._v(
                          " prop can be used to filter each individual\n            item with custom logic. In this example we filter items by name\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        {
                          staticClass: "overflow-hidden",
                          attrs: { color: "purple lighten-1", dark: "" }
                        },
                        [
                          _c(
                            "v-toolbar",
                            { attrs: { flat: "", color: "purple" } },
                            [
                              _c("v-icon", [_vm._v("mdi-account")]),
                              _vm._v(" "),
                              _c(
                                "v-toolbar-title",
                                { staticClass: "font-weight-light" },
                                [_vm._v("User Profile")]
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "purple darken-3",
                                    fab: "",
                                    small: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.code1.isEditing = !_vm.code1.isEditing
                                    }
                                  }
                                },
                                [
                                  _vm.code1.isEditing
                                    ? _c("v-icon", [_vm._v("mdi-close")])
                                    : _c("v-icon", [_vm._v("mdi-pencil")])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  disabled: !_vm.code1.isEditing,
                                  color: "white",
                                  label: "Name"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-autocomplete", {
                                attrs: {
                                  disabled: !_vm.code1.isEditing,
                                  items: _vm.code1.states,
                                  filter: _vm.customFilter,
                                  color: "white",
                                  "item-text": "name",
                                  label: "State"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    disabled: !_vm.code1.isEditing,
                                    color: "success"
                                  },
                                  on: { click: _vm.save }
                                },
                                [
                                  _vm._v(
                                    "\n                Save\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-snackbar",
                            {
                              attrs: {
                                timeout: 2000,
                                absolute: "",
                                bottom: "",
                                left: ""
                              },
                              model: {
                                value: _vm.code1.hasSaved,
                                callback: function($$v) {
                                  _vm.$set(_vm.code1, "hasSaved", $$v)
                                },
                                expression: "code1.hasSaved"
                              }
                            },
                            [
                              _vm._v(
                                "\n              Your profile has been updated\n            "
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
              attrs: { title: "Advanced slots" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("v-autocomplete")]),
                        _vm._v(
                          " component is extremely flexible\n            and can fit in just about any use-case. Create custom displays for\n            "
                        ),
                        _c("strong", [_vm._v("no-data")]),
                        _vm._v(", "),
                        _c("strong", [_vm._v("item")]),
                        _vm._v(" and\n            "),
                        _c("strong", [_vm._v("selection")]),
                        _vm._v(
                          " slots to provide a unique user\n            experience. Using "
                        ),
                        _c("em", [_vm._v("slots")]),
                        _vm._v(
                          " enables you to easily customize\n            the desired look for your application.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-toolbar",
                        {
                          attrs: { color: "orange accent-1" },
                          scopedSlots: _vm._u([
                            {
                              key: "extension",
                              fn: function() {
                                return [
                                  _c(
                                    "v-tabs",
                                    {
                                      attrs: {
                                        "hide-slider": !_vm.model,
                                        color: "blue-grey",
                                        "slider-color": "blue-grey"
                                      },
                                      model: {
                                        value: _vm.code3.tab,
                                        callback: function($$v) {
                                          _vm.$set(_vm.code3, "tab", $$v)
                                        },
                                        expression: "code3.tab"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-tab",
                                        { attrs: { disabled: !_vm.model } },
                                        [_vm._v("News")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-tab",
                                        { attrs: { disabled: !_vm.model } },
                                        [_vm._v("Trading")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-tab",
                                        { attrs: { disabled: !_vm.model } },
                                        [_vm._v("Blog")]
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
                          _c("v-app-bar-nav-icon", {
                            staticClass: "hidden-sm-and-down"
                          }),
                          _vm._v(" "),
                          _c(
                            "v-toolbar-title",
                            { staticClass: "title mr-6 hidden-sm-and-down" },
                            [_vm._v("Cryptocurrency")]
                          ),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.code3.items,
                              loading: _vm.code3.isLoading,
                              "search-input": _vm.search,
                              chips: "",
                              clearable: "",
                              "hide-details": "",
                              "hide-selected": "",
                              "item-text": "name",
                              "item-value": "symbol",
                              label: "Search for a coin...",
                              solo: ""
                            },
                            on: {
                              "update:searchInput": function($event) {
                                _vm.search = $event
                              },
                              "update:search-input": function($event) {
                                _vm.search = $event
                              }
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "no-data",
                                fn: function() {
                                  return [
                                    _c(
                                      "v-list-item",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(
                                            "\n                    Search for your favorite\n                    "
                                          ),
                                          _c("strong", [
                                            _vm._v("Cryptocurrency")
                                          ])
                                        ])
                                      ],
                                      1
                                    )
                                  ]
                                },
                                proxy: true
                              },
                              {
                                key: "selection",
                                fn: function(ref) {
                                  var attr = ref.attr
                                  var on = ref.on
                                  var item = ref.item
                                  var selected = ref.selected
                                  return [
                                    _c(
                                      "v-chip",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            staticClass: "white--text",
                                            attrs: {
                                              "input-value": selected,
                                              color: "blue-grey"
                                            }
                                          },
                                          "v-chip",
                                          attr,
                                          false
                                        ),
                                        on
                                      ),
                                      [
                                        _c("v-icon", { attrs: { left: "" } }, [
                                          _vm._v("mdi-coin")
                                        ]),
                                        _vm._v(" "),
                                        _c("span", {
                                          domProps: {
                                            textContent: _vm._s(item.name)
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                }
                              },
                              {
                                key: "item",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c(
                                      "v-list-item-avatar",
                                      {
                                        staticClass:
                                          "headline font-weight-light white--text",
                                        attrs: { color: "indigo" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(item.name.charAt(0)) +
                                            "\n                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", {
                                          domProps: {
                                            textContent: _vm._s(item.name)
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-list-item-subtitle", {
                                          domProps: {
                                            textContent: _vm._s(item.symbol)
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-action",
                                      [_c("v-icon", [_vm._v("mdi-coin")])],
                                      1
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.model,
                              callback: function($$v) {
                                _vm.model = $$v
                              },
                              expression: "model"
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
              attrs: { title: "Slots" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-card",
                        {
                          attrs: {
                            color: "blue-grey darken-1",
                            dark: "",
                            loading: _vm.isUpdating
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "progress",
                              fn: function() {
                                return [
                                  _c("v-progress-linear", {
                                    attrs: {
                                      absolute: "",
                                      color: "green lighten-3",
                                      height: "4",
                                      indeterminate: ""
                                    }
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-img",
                            {
                              attrs: {
                                height: "200",
                                src: "media/stock-600x600/img-10.jpg"
                              }
                            },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "text-right",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          attrs: {
                                            bottom: "",
                                            left: "",
                                            transition: "slide-y-transition"
                                          },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      { attrs: { icon: "" } },
                                                      on
                                                    ),
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "mdi-dots-vertical"
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ])
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-list",
                                            [
                                              _c(
                                                "v-list-item",
                                                {
                                                  on: {
                                                    click: function($event) {
                                                      _vm.isUpdating = true
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-action",
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("mdi-settings")
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v("Update")
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    {
                                      staticClass: "pa-4",
                                      attrs: {
                                        align: "center",
                                        justify: "center"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-col",
                                        { staticClass: "text-center" },
                                        [
                                          _c(
                                            "h3",
                                            { staticClass: "headline" },
                                            [_vm._v(_vm._s(_vm.code2.name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "grey--text text--lighten-1"
                                            },
                                            [_vm._v(_vm._s(_vm.code2.title))]
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-form",
                            [
                              _c(
                                "v-container",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              disabled: _vm.isUpdating,
                                              filled: "",
                                              color: "blue-grey lighten-2",
                                              label: "Name"
                                            },
                                            model: {
                                              value: _vm.code2.name,
                                              callback: function($$v) {
                                                _vm.$set(_vm.code2, "name", $$v)
                                              },
                                              expression: "code2.name"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              disabled: _vm.isUpdating,
                                              filled: "",
                                              color: "blue-grey lighten-2",
                                              label: "Title"
                                            },
                                            model: {
                                              value: _vm.code2.title,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.code2,
                                                  "title",
                                                  $$v
                                                )
                                              },
                                              expression: "code2.title"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-autocomplete", {
                                            attrs: {
                                              disabled: _vm.isUpdating,
                                              items: _vm.code2.people,
                                              filled: "",
                                              chips: "",
                                              color: "blue-grey lighten-2",
                                              label: "Select",
                                              "item-text": "name",
                                              "item-value": "name",
                                              multiple: ""
                                            },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "selection",
                                                fn: function(data) {
                                                  return [
                                                    _c(
                                                      "v-chip",
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            "input-value":
                                                              data.selected,
                                                            close: ""
                                                          },
                                                          on: {
                                                            click: data.select,
                                                            "click:close": function(
                                                              $event
                                                            ) {
                                                              return _vm.remove(
                                                                data.item
                                                              )
                                                            }
                                                          }
                                                        },
                                                        "v-chip",
                                                        data.attrs,
                                                        false
                                                      ),
                                                      [
                                                        _c(
                                                          "v-avatar",
                                                          {
                                                            attrs: { left: "" }
                                                          },
                                                          [
                                                            _c("v-img", {
                                                              attrs: {
                                                                src:
                                                                  data.item
                                                                    .avatar
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(
                                                          "\n                          " +
                                                            _vm._s(
                                                              data.item.name
                                                            ) +
                                                            "\n                        "
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                }
                                              },
                                              {
                                                key: "item",
                                                fn: function(data) {
                                                  return [
                                                    typeof data.item !==
                                                    "object"
                                                      ? [
                                                          _c(
                                                            "v-list-item-content",
                                                            {
                                                              domProps: {
                                                                textContent: _vm._s(
                                                                  data.item
                                                                )
                                                              }
                                                            }
                                                          )
                                                        ]
                                                      : [
                                                          _c(
                                                            "v-list-item-avatar",
                                                            [
                                                              _c("img", {
                                                                attrs: {
                                                                  src:
                                                                    data.item
                                                                      .avatar
                                                                }
                                                              })
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-item-content",
                                                            [
                                                              _c(
                                                                "v-list-item-title",
                                                                {
                                                                  domProps: {
                                                                    innerHTML: _vm._s(
                                                                      data.item
                                                                        .name
                                                                    )
                                                                  }
                                                                }
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-list-item-subtitle",
                                                                {
                                                                  domProps: {
                                                                    innerHTML: _vm._s(
                                                                      data.item
                                                                        .group
                                                                    )
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                  ]
                                                }
                                              }
                                            ]),
                                            model: {
                                              value: _vm.code2.friends,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.code2,
                                                  "friends",
                                                  $$v
                                                )
                                              },
                                              expression: "code2.friends"
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
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-switch", {
                                staticClass: "mt-0",
                                attrs: {
                                  disabled: _vm.isUpdating,
                                  color: "green lighten-2",
                                  "hide-details": "",
                                  label: "Auto Update"
                                },
                                model: {
                                  value: _vm.code2.autoUpdate,
                                  callback: function($$v) {
                                    _vm.$set(_vm.code2, "autoUpdate", $$v)
                                  },
                                  expression: "code2.autoUpdate"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    disabled: _vm.code2.autoUpdate,
                                    loading: _vm.isUpdating,
                                    color: "blue-grey darken-3",
                                    depressed: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.isUpdating = true
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { left: "" } }, [
                                    _vm._v("mdi-update")
                                  ]),
                                  _vm._v(
                                    "\n                Update Now\n              "
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
              attrs: { title: "State selector" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            {
                              staticClass:
                                "headline font-weight-regular blue-grey white--text"
                            },
                            [_vm._v("Profile")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c("v-subheader", { staticClass: "pa-0" }, [
                                _vm._v("Where do you live?")
                              ]),
                              _vm._v(" "),
                              _c("v-autocomplete", {
                                attrs: {
                                  hint: !_vm.code4.isEditing
                                    ? "Click the icon to edit"
                                    : "Click the icon to save",
                                  items: _vm.code4.states,
                                  readonly: !_vm.code4.isEditing,
                                  label:
                                    "State — " +
                                    (_vm.code4.isEditing
                                      ? "Editable"
                                      : "Readonly"),
                                  "persistent-hint": "",
                                  "prepend-icon": "mdi-city"
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "append-outer",
                                    fn: function() {
                                      return [
                                        _c(
                                          "v-slide-x-reverse-transition",
                                          { attrs: { mode: "out-in" } },
                                          [
                                            _c("v-icon", {
                                              key:
                                                "icon-" + _vm.code4.isEditing,
                                              attrs: {
                                                color: _vm.code4.isEditing
                                                  ? "success"
                                                  : "info"
                                              },
                                              domProps: {
                                                textContent: _vm._s(
                                                  _vm.code4.isEditing
                                                    ? "mdi-check-outline"
                                                    : "mdi-circle-edit-outline"
                                                )
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.code4.isEditing = !_vm
                                                    .code4.isEditing
                                                }
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    },
                                    proxy: true
                                  }
                                ]),
                                model: {
                                  value: _vm.code4.model,
                                  callback: function($$v) {
                                    _vm.$set(_vm.code4, "model", $$v)
                                  },
                                  expression: "code4.model"
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