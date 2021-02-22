(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_pages_vuetify_forms_TextFields_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/TextFields.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/TextFields.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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

 // code6

var defaultForm = Object.freeze({
  first: "",
  last: "",
  bio: "",
  favoriteAnimal: "",
  age: null,
  terms: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      code1: {
        html: "<v-form>\n  <v-container>\n    <v-row>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          label=\"Regular\"\n          single-line\n        ></v-text-field>\n      </v-col>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          label=\"Solo\"\n          single-line\n          solo\n        ></v-text-field>\n      </v-col>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          label=\"Filled\"\n          single-line\n          filled\n        ></v-text-field>\n      </v-col>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          label=\"Outlined\"\n          single-line\n          outlined\n        ></v-text-field>\n      </v-col>\n\n    </v-row>\n  </v-container>\n</v-form>"
      },
      code2: {
        html: "<v-form>\n  <v-container>\n    <v-row>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          v-model=\"message1\"\n          label=\"Regular\"\n          clearable\n        ></v-text-field>\n      </v-col>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          v-model=\"message2\"\n          solo\n          label=\"Solo\"\n          clearable\n        ></v-text-field>\n      </v-col>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          v-model=\"message3\"\n          filled\n          label=\"Filled\"\n          clearable\n        ></v-text-field>\n      </v-col>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          v-model=\"message4\"\n          label=\"Outlined\"\n          outlined\n          clearable\n        ></v-text-field>\n      </v-col>\n\n    </v-row>\n  </v-container>\n</v-form>",
        js: "export default {\n  data () {\n    return {\n      message1: 'Hey!',\n      message2: 'Hey!',\n      message3: 'Hey!',\n      message4: 'Hey!',\n    }\n  },\n}",
        message1: "Hey!",
        message2: "Hey!",
        message3: "Hey!",
        message4: "Hey!"
      },
      code3: {
        html: "<v-form>\n  <v-container>\n    <v-row>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          v-model=\"title\"\n          :rules=\"rules\"\n          counter=\"25\"\n          hint=\"This field uses counter prop\"\n          label=\"Regular\"\n        ></v-text-field>\n      </v-col>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          v-model=\"description\"\n          :rules=\"rules\"\n          counter\n          maxlength=\"25\"\n          hint=\"This field uses maxlength attribute\"\n          label=\"Limit exceeded\"\n        ></v-text-field>\n      </v-col>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          v-model=\"title\"\n          :rules=\"rules\"\n          counter=\"25\"\n          filled\n          label=\"Filled\"\n        ></v-text-field>\n      </v-col>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          v-model=\"title\"\n          :rules=\"rules\"\n          counter=\"25\"\n          label=\"Outlined\"\n          outlined\n        ></v-text-field>\n      </v-col>\n\n    </v-row>\n  </v-container>\n</v-form>",
        js: "export default {\n  data () {\n    return {\n      title: 'Preliminary report',\n      description: 'California is a state in the western United States',\n      rules: [v => v.length <= 25 || 'Max 25 characters'],\n    }\n  },\n}",
        title: "Preliminary report",
        description: "California is a state in the western United States",
        rules: [function (v) {
          return v.length <= 25 || "Max 25 characters";
        }]
      },
      code4: {
        html: "<div>\n  <v-text-field label=\"Main input\" :rules=\"rules\" hide-details=\"auto\"></v-text-field>\n  <v-text-field label=\"Another input\"></v-text-field>\n</div>",
        js: "export default {\n  data: () => ({\n    rules: [\n      value => !!value || 'Required.',\n      value => (value && value.length >= 3) || 'Min 3 characters',\n    ],\n  }),\n}",
        rules: [function (value) {
          return !!value || "Required.";
        }, function (value) {
          return value && value.length >= 3 || "Min 3 characters";
        }]
      },
      code5: {
        html: "<v-form>\n  <v-container fluid>\n    <v-row>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          v-model=\"password\"\n          :append-icon=\"show1 ? 'mdi-eye' : 'mdi-eye-off'\"\n          :rules=\"[rules.required, rules.min]\"\n          :type=\"show1 ? 'text' : 'password'\"\n          name=\"input-10-1\"\n          label=\"Normal with hint text\"\n          hint=\"At least 8 characters\"\n          counter\n          @click:append=\"show1 = !show1\"\n        ></v-text-field>\n      </v-col>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          :append-icon=\"show2 ? 'mdi-eye' : 'mdi-eye-off'\"\n          :rules=\"[rules.required, rules.min]\"\n          :type=\"show2 ? 'text' : 'password'\"\n          name=\"input-10-2\"\n          label=\"Visible\"\n          hint=\"At least 8 characters\"\n          value=\"wqfasds\"\n          class=\"input-group--focused\"\n          @click:append=\"show2 = !show2\"\n        ></v-text-field>\n      </v-col>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          :append-icon=\"show3 ? 'mdi-eye' : 'mdi-eye-off'\"\n          :rules=\"[rules.required, rules.min]\"\n          :type=\"show3 ? 'text' : 'password'\"\n          name=\"input-10-2\"\n          label=\"Not visible\"\n          hint=\"At least 8 characters\"\n          value=\"wqfasds\"\n          class=\"input-group--focused\"\n          @click:append=\"show3 = !show3\"\n        ></v-text-field>\n      </v-col>\n\n      <v-col cols=\"12\" sm=\"6\">\n        <v-text-field\n          :append-icon=\"show4 ? 'mdi-eye' : 'mdi-eye-off'\"\n          :rules=\"[rules.required, rules.emailMatch]\"\n          :type=\"show4 ? 'text' : 'password'\"\n          name=\"input-10-2\"\n          label=\"Error\"\n          hint=\"At least 8 characters\"\n          value=\"Pa\"\n          error\n          @click:append=\"show4 = !show4\"\n        ></v-text-field>\n      </v-col>\n\n    </v-row>\n  </v-container>\n</v-form>",
        js: "export default {\n  data () {\n    return {\n      show1: false,\n      show2: true,\n      show3: false,\n      show4: false,\n      password: 'Password',\n      rules: {\n        required: value => !!value || 'Required.',\n        min: v => v.length >= 8 || 'Min 8 characters',\n        emailMatch: () => ('The email and password you entered don\\'t match'),\n      },\n    }\n  },\n}",
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: "Password",
        rules: {
          required: function required(value) {
            return !!value || "Required.";
          },
          min: function min(v) {
            return v.length >= 8 || "Min 8 characters";
          },
          emailMatch: function emailMatch() {
            return "The email and password you entered don't match";
          }
        }
      },
      code6: {
        html: "<v-card flat>\n  <v-snackbar\n    v-model=\"snackbar\"\n    absolute\n    top\n    right\n    color=\"success\"\n  >\n    <span>Registration successful!</span>\n    <v-icon dark>mdi-checkbox-marked-circle</v-icon>\n  </v-snackbar>\n  <v-form ref=\"form\" @submit.prevent=\"submit\">\n    <v-container fluid>\n      <v-row>\n        <v-col cols=\"12\" sm=\"6\">\n          <v-text-field\n            v-model=\"form.first\"\n            :rules=\"rules.name\"\n            color=\"purple darken-2\"\n            label=\"First name\"\n            required\n          ></v-text-field>\n        </v-col>\n        <v-col cols=\"12\" sm=\"6\">\n          <v-text-field\n            v-model=\"form.last\"\n            :rules=\"rules.name\"\n            color=\"blue darken-2\"\n            label=\"Last name\"\n            required\n          ></v-text-field>\n        </v-col>\n        <v-col cols=\"12\">\n          <v-textarea\n            v-model=\"form.bio\"\n            color=\"teal\"\n          >\n            <template v-slot:label>\n              <div>\n                Bio <small>(optional)</small>\n              </div>\n            </template>\n          </v-textarea>\n        </v-col>\n        <v-col cols=\"12\" sm=\"6\">\n          <v-select\n            v-model=\"form.favoriteAnimal\"\n            :items=\"animals\"\n            :rules=\"rules.animal\"\n            color=\"pink\"\n            label=\"Favorite animal\"\n            required\n          ></v-select>\n        </v-col>\n        <v-col cols=\"12\" sm=\"6\">\n          <v-slider\n            v-model=\"form.age\"\n            :rules=\"rules.age\"\n            color=\"orange\"\n            label=\"Age\"\n            hint=\"Be honest\"\n            min=\"1\"\n            max=\"100\"\n            thumb-label\n          ></v-slider>\n        </v-col>\n        <v-col cols=\"12\">\n          <v-checkbox\n            v-model=\"form.terms\"\n            color=\"green\"\n          >\n            <template v-slot:label>\n              <div @click.stop=\"\">\n                Do you accept the\n                <a href=\"javascript:;\" @click.stop=\"terms = true\">terms</a>\n                and\n                <a href=\"javascript:;\" @click.stop=\"conditions = true\">conditions?</a>\n              </div>\n            </template>\n          </v-checkbox>\n        </v-col>\n      </v-row>\n    </v-container>\n    <v-card-actions>\n      <v-btn text @click=\"resetForm\">Cancel</v-btn>\n      <v-spacer></v-spacer>\n      <v-btn\n        :disabled=\"!formIsValid\"\n        text\n        color=\"primary\"\n        type=\"submit\"\n      >Register</v-btn>\n    </v-card-actions>\n  </v-form>\n  <v-dialog v-model=\"terms\" width=\"70%\">\n    <v-card>\n      <v-card-title class=\"title\">Terms</v-card-title>\n      <v-card-text v-for=\"n in 5\" :key=\"n\">\n        {{ content }}\n      </v-card-text>\n      <v-card-actions>\n        <v-spacer></v-spacer>\n        <v-btn\n          text\n          color=\"purple\"\n          @click=\"terms = false\"\n        >Ok</v-btn>\n      </v-card-actions>\n    </v-card>\n  </v-dialog>\n  <v-dialog v-model=\"conditions\" width=\"70%\">\n    <v-card>\n      <v-card-title class=\"title\">Conditions</v-card-title>\n      <v-card-text v-for=\"n in 5\" :key=\"n\">\n        {{ content }}\n      </v-card-text>\n      <v-card-actions>\n        <v-spacer></v-spacer>\n        <v-btn\n          text\n          color=\"purple\"\n          @click=\"conditions = false\"\n        >Ok</v-btn>\n      </v-card-actions>\n    </v-card>\n  </v-dialog>\n</v-card>",
        js: "export default {\n  data () {\n    const defaultForm = Object.freeze({\n      first: '',\n      last: '',\n      bio: '',\n      favoriteAnimal: '',\n      age: null,\n      terms: false,\n    })\n\n    return {\n      form: Object.assign({}, defaultForm),\n      rules: {\n        age: [\n          val => val < 10 || `I don't believe you!`,\n        ],\n        animal: [val => (val || '').length > 0 || 'This field is required'],\n        name: [val => (val || '').length > 0 || 'This field is required'],\n      },\n      animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],\n      conditions: false,\n      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.\n      Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.\n      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,\n      snackbar: false,\n      terms: false,\n      defaultForm,\n    }\n  },\n\n  computed: {\n    formIsValid () {\n      return (\n        this.form.first &&\n        this.form.last &&\n        this.form.favoriteAnimal &&\n        this.form.terms\n      )\n    },\n  },\n\n  methods: {\n    resetForm () {\n      this.form = Object.assign({}, this.defaultForm)\n      this.$refs.form.reset()\n    },\n    submit () {\n      this.snackbar = true\n      this.resetForm()\n    },\n  },\n}",
        form: Object.assign({}, defaultForm),
        rules: {
          age: [function (val) {
            return val < 10 || "I don't believe you!";
          }],
          animal: [function (val) {
            return (val || "").length > 0 || "This field is required";
          }],
          name: [function (val) {
            return (val || "").length > 0 || "This field is required";
          }]
        },
        animals: ["Dog", "Cat", "Rabbit", "Turtle", "Snake"],
        conditions: false,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.\n      Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.\n      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
        snackbar: false,
        terms: false,
        defaultForm: defaultForm
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
      title: "Text Fields"
    }]);
  },
  computed: {
    // code6
    formIsValid: function formIsValid() {
      return this.code6.form.first && this.code6.form.last && this.code6.form.favoriteAnimal && this.code6.form.terms;
    }
  },
  methods: {
    // code6
    resetForm: function resetForm() {
      this.code6.form = Object.assign({}, this.code6.defaultForm);
      this.$refs.form.reset();
    },
    submit: function submit() {
      this.code6.snackbar = true;
      this.resetForm();
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

/***/ "./resources/js/view/pages/vuetify/forms/TextFields.vue":
/*!**************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/forms/TextFields.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextFields_vue_vue_type_template_id_0d1b8da4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextFields.vue?vue&type=template&id=0d1b8da4& */ "./resources/js/view/pages/vuetify/forms/TextFields.vue?vue&type=template&id=0d1b8da4&");
/* harmony import */ var _TextFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextFields.vue?vue&type=script&lang=js& */ "./resources/js/view/pages/vuetify/forms/TextFields.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TextFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TextFields_vue_vue_type_template_id_0d1b8da4___WEBPACK_IMPORTED_MODULE_0__.render,
  _TextFields_vue_vue_type_template_id_0d1b8da4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/vuetify/forms/TextFields.vue"
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

/***/ "./resources/js/view/pages/vuetify/forms/TextFields.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/forms/TextFields.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextFields.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/TextFields.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/view/pages/vuetify/forms/TextFields.vue?vue&type=template&id=0d1b8da4&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/forms/TextFields.vue?vue&type=template&id=0d1b8da4& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextFields_vue_vue_type_template_id_0d1b8da4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextFields_vue_vue_type_template_id_0d1b8da4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextFields_vue_vue_type_template_id_0d1b8da4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextFields.vue?vue&type=template&id=0d1b8da4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/TextFields.vue?vue&type=template&id=0d1b8da4&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/TextFields.vue?vue&type=template&id=0d1b8da4&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/forms/TextFields.vue?vue&type=template&id=0d1b8da4& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Text fields")]),
            _vm._v(
              " Text fields components are used for collecting user\n      provided information.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/text-fields",
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
              attrs: { title: "Single line" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Single line text fields do not float their label on focus or with\n            data.\n          "
                        )
                      ]),
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
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Regular",
                                          "single-line": ""
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
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Solo",
                                          "single-line": "",
                                          solo: ""
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
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Filled",
                                          "single-line": "",
                                          filled: ""
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
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Outlined",
                                          "single-line": "",
                                          outlined: ""
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
              attrs: { title: "Character counter" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            Use a "),
                        _c("code", [_vm._v("counter")]),
                        _vm._v(
                          " prop to inform a user of the character\n            limit. The counter does not perform any validation by itself. You\n            will need to pair it with either the internal validation system,\n            or a 3rd party library. You can use it on regular, box or outlined\n            text fields.\n          "
                        )
                      ]),
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
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: _vm.code3.rules,
                                          counter: "25",
                                          hint: "This field uses counter prop",
                                          label: "Regular"
                                        },
                                        model: {
                                          value: _vm.code3.title,
                                          callback: function($$v) {
                                            _vm.$set(_vm.code3, "title", $$v)
                                          },
                                          expression: "code3.title"
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
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: _vm.code3.rules,
                                          counter: "",
                                          maxlength: "25",
                                          hint:
                                            "This field uses maxlength attribute",
                                          label: "Limit exceeded"
                                        },
                                        model: {
                                          value: _vm.code3.description,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.code3,
                                              "description",
                                              $$v
                                            )
                                          },
                                          expression: "code3.description"
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
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: _vm.code3.rules,
                                          counter: "25",
                                          filled: "",
                                          label: "Filled"
                                        },
                                        model: {
                                          value: _vm.code3.title,
                                          callback: function($$v) {
                                            _vm.$set(_vm.code3, "title", $$v)
                                          },
                                          expression: "code3.title"
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
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: _vm.code3.rules,
                                          counter: "25",
                                          label: "Outlined",
                                          outlined: ""
                                        },
                                        model: {
                                          value: _vm.code3.title,
                                          callback: function($$v) {
                                            _vm.$set(_vm.code3, "title", $$v)
                                          },
                                          expression: "code3.title"
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
              attrs: { title: "Password input" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            A password input can be used with an appended icon and callback to\n            control the visibility.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-form",
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
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          "append-icon": _vm.code5.show1
                                            ? "mdi-eye"
                                            : "mdi-eye-off",
                                          rules: [
                                            _vm.code5.rules.required,
                                            _vm.code5.rules.min
                                          ],
                                          type: _vm.code5.show1
                                            ? "text"
                                            : "password",
                                          name: "input-10-1",
                                          label: "Normal with hint text",
                                          hint: "At least 8 characters",
                                          counter: ""
                                        },
                                        on: {
                                          "click:append": function($event) {
                                            _vm.code5.show1 = !_vm.code5.show1
                                          }
                                        },
                                        model: {
                                          value: _vm.code5.password,
                                          callback: function($$v) {
                                            _vm.$set(_vm.code5, "password", $$v)
                                          },
                                          expression: "code5.password"
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
                                      _c("v-text-field", {
                                        staticClass: "input-group--focused",
                                        attrs: {
                                          "append-icon": _vm.code5.show2
                                            ? "mdi-eye"
                                            : "mdi-eye-off",
                                          rules: [
                                            _vm.code5.rules.required,
                                            _vm.code5.rules.min
                                          ],
                                          type: _vm.code5.show2
                                            ? "text"
                                            : "password",
                                          name: "input-10-2",
                                          label: "Visible",
                                          hint: "At least 8 characters",
                                          value: "wqfasds"
                                        },
                                        on: {
                                          "click:append": function($event) {
                                            _vm.code5.show2 = !_vm.code5.show2
                                          }
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
                                      _c("v-text-field", {
                                        staticClass: "input-group--focused",
                                        attrs: {
                                          "append-icon": _vm.code5.show3
                                            ? "mdi-eye"
                                            : "mdi-eye-off",
                                          rules: [
                                            _vm.code5.rules.required,
                                            _vm.code5.rules.min
                                          ],
                                          type: _vm.code5.show3
                                            ? "text"
                                            : "password",
                                          name: "input-10-2",
                                          label: "Not visible",
                                          hint: "At least 8 characters",
                                          value: "wqfasds"
                                        },
                                        on: {
                                          "click:append": function($event) {
                                            _vm.code5.show3 = !_vm.code5.show3
                                          }
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
                                      _c("v-text-field", {
                                        attrs: {
                                          "append-icon": _vm.code5.show4
                                            ? "mdi-eye"
                                            : "mdi-eye-off",
                                          rules: [
                                            _vm.code5.rules.required,
                                            _vm.code5.rules.emailMatch
                                          ],
                                          type: _vm.code5.show4
                                            ? "text"
                                            : "password",
                                          name: "input-10-2",
                                          label: "Error",
                                          hint: "At least 8 characters",
                                          value: "Pa",
                                          error: ""
                                        },
                                        on: {
                                          "click:append": function($event) {
                                            _vm.code5.show4 = !_vm.code5.show4
                                          }
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Clearable" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            When "),
                        _c("code", [_vm._v("clearable")]),
                        _vm._v(
                          ", you can customize the clear icon with\n            "
                        ),
                        _c("code", [_vm._v("clear-icon")]),
                        _vm._v(".\n          ")
                      ]),
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
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Regular",
                                          clearable: ""
                                        },
                                        model: {
                                          value: _vm.code2.message1,
                                          callback: function($$v) {
                                            _vm.$set(_vm.code2, "message1", $$v)
                                          },
                                          expression: "code2.message1"
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
                                      _c("v-text-field", {
                                        attrs: {
                                          solo: "",
                                          label: "Solo",
                                          clearable: ""
                                        },
                                        model: {
                                          value: _vm.code2.message2,
                                          callback: function($$v) {
                                            _vm.$set(_vm.code2, "message2", $$v)
                                          },
                                          expression: "code2.message2"
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
                                      _c("v-text-field", {
                                        attrs: {
                                          filled: "",
                                          label: "Filled",
                                          clearable: ""
                                        },
                                        model: {
                                          value: _vm.code2.message3,
                                          callback: function($$v) {
                                            _vm.$set(_vm.code2, "message3", $$v)
                                          },
                                          expression: "code2.message3"
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
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Outlined",
                                          outlined: "",
                                          clearable: ""
                                        },
                                        model: {
                                          value: _vm.code2.message4,
                                          callback: function($$v) {
                                            _vm.$set(_vm.code2, "message4", $$v)
                                          },
                                          expression: "code2.message4"
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
              attrs: { title: "Auto hiding details" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            When "),
                        _c("code", [_vm._v("hide-details")]),
                        _vm._v(" is set to\n            "),
                        _c("code", [_vm._v("auto")]),
                        _vm._v(
                          " messages will be rendered only if there's a\n            message (hint, error message, counter value etc) to display.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Main input",
                              rules: _vm.code4.rules,
                              "hide-details": "auto"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Another input" }
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
              attrs: { title: "Custom colors" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            You can optionally change a text field into any color in the\n            Material design palette. Below is an example implementation of a\n            custom form with validation.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        { attrs: { flat: "" } },
                        [
                          _c(
                            "v-snackbar",
                            {
                              attrs: {
                                absolute: "",
                                top: "",
                                right: "",
                                color: "success"
                              },
                              model: {
                                value: _vm.code6.snackbar,
                                callback: function($$v) {
                                  _vm.$set(_vm.code6, "snackbar", $$v)
                                },
                                expression: "code6.snackbar"
                              }
                            },
                            [
                              _c("span", [_vm._v("Registration successful!")]),
                              _vm._v(" "),
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("mdi-checkbox-marked-circle")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-form",
                            {
                              ref: "form",
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.submit($event)
                                }
                              }
                            },
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
                                        { attrs: { cols: "12", sm: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: _vm.code6.rules.name,
                                              color: "purple darken-2",
                                              label: "First name",
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.code6.form.first,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.code6.form,
                                                  "first",
                                                  $$v
                                                )
                                              },
                                              expression: "code6.form.first"
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
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: _vm.code6.rules.name,
                                              color: "blue darken-2",
                                              label: "Last name",
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.code6.form.last,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.code6.form,
                                                  "last",
                                                  $$v
                                                )
                                              },
                                              expression: "code6.form.last"
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
                                          _c("v-textarea", {
                                            attrs: { color: "teal" },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "label",
                                                fn: function() {
                                                  return [
                                                    _c("div", [
                                                      _vm._v("Bio "),
                                                      _c("small", [
                                                        _vm._v("(optional)")
                                                      ])
                                                    ])
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ]),
                                            model: {
                                              value: _vm.code6.form.bio,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.code6.form,
                                                  "bio",
                                                  $$v
                                                )
                                              },
                                              expression: "code6.form.bio"
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
                                              items: _vm.code6.animals,
                                              rules: _vm.code6.rules.animal,
                                              color: "pink",
                                              label: "Favorite animal",
                                              required: ""
                                            },
                                            model: {
                                              value:
                                                _vm.code6.form.favoriteAnimal,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.code6.form,
                                                  "favoriteAnimal",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "code6.form.favoriteAnimal"
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
                                          _c("v-slider", {
                                            attrs: {
                                              rules: _vm.code6.rules.age,
                                              color: "orange",
                                              label: "Age",
                                              hint: "Be honest",
                                              min: "1",
                                              max: "100",
                                              "thumb-label": ""
                                            },
                                            model: {
                                              value: _vm.code6.form.age,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.code6.form,
                                                  "age",
                                                  $$v
                                                )
                                              },
                                              expression: "code6.form.age"
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
                                          _c("v-checkbox", {
                                            attrs: { color: "green" },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "label",
                                                fn: function() {
                                                  return [
                                                    _c(
                                                      "div",
                                                      {
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.stopPropagation()
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                          Do you accept the\n                          "
                                                        ),
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href:
                                                                "javascript:;"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.stopPropagation()
                                                                _vm.code6.terms = true
                                                              }
                                                            }
                                                          },
                                                          [_vm._v("terms")]
                                                        ),
                                                        _vm._v(
                                                          "\n                          and\n                          "
                                                        ),
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href:
                                                                "javascript:;"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.stopPropagation()
                                                                _vm.code6.conditions = true
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "conditions?"
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ]),
                                            model: {
                                              value: _vm.code6.form.terms,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.code6.form,
                                                  "terms",
                                                  $$v
                                                )
                                              },
                                              expression: "code6.form.terms"
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
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { text: "" },
                                      on: { click: _vm.resetForm }
                                    },
                                    [_vm._v("Cancel")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        disabled: !_vm.formIsValid,
                                        text: "",
                                        color: "primary",
                                        type: "submit"
                                      }
                                    },
                                    [_vm._v("Register")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { width: "70%" },
                              model: {
                                value: _vm.code6.terms,
                                callback: function($$v) {
                                  _vm.$set(_vm.code6, "terms", $$v)
                                },
                                expression: "code6.terms"
                              }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", { staticClass: "title" }, [
                                    _vm._v("Terms")
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(5, function(n) {
                                    return _c("v-card-text", { key: n }, [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(_vm.code6.content) +
                                          "\n                "
                                      )
                                    ])
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { text: "", color: "purple" },
                                          on: {
                                            click: function($event) {
                                              _vm.code6.terms = false
                                            }
                                          }
                                        },
                                        [_vm._v("Ok")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                2
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { width: "70%" },
                              model: {
                                value: _vm.code6.conditions,
                                callback: function($$v) {
                                  _vm.$set(_vm.code6, "conditions", $$v)
                                },
                                expression: "code6.conditions"
                              }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", { staticClass: "title" }, [
                                    _vm._v("Conditions")
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(5, function(n) {
                                    return _c("v-card-text", { key: n }, [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(_vm.code6.content) +
                                          "\n                "
                                      )
                                    ])
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { text: "", color: "purple" },
                                          on: {
                                            click: function($event) {
                                              _vm.code6.conditions = false
                                            }
                                          }
                                        },
                                        [_vm._v("Ok")]
                                      )
                                    ],
                                    1
                                  )
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