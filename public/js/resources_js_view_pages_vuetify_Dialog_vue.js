(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_pages_vuetify_Dialog_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Dialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Dialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        html: " <v-row justify=\"center\">\n  <v-btn\n    color=\"primary\"\n    dark\n    @click.stop=\"dialog = true\"\n  >\n    Open Dialog\n  </v-btn>\n\n  <v-dialog\n    v-model=\"dialog\"\n    max-width=\"290\"\n  >\n    <v-card>\n      <v-card-title class=\"headline\">Use Google's location service?</v-card-title>\n\n      <v-card-text>\n        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.\n      </v-card-text>\n\n      <v-card-actions>\n        <v-spacer></v-spacer>\n\n        <v-btn\n          color=\"green darken-1\"\n          text\n          @click=\"dialog = false\"\n        >\n          Disagree\n        </v-btn>\n\n        <v-btn\n          color=\"green darken-1\"\n          text\n          @click=\"dialog = false\"\n        >\n          Agree\n        </v-btn>\n      </v-card-actions>\n    </v-card>\n  </v-dialog>\n</v-row>",
        js: "export default {\n  data () {\n    return {\n      dialog: false,\n    }\n  },\n}",
        dialog: false
      },
      code2: {
        html: "<v-row justify=\"center\">\n  <v-dialog v-model=\"dialog\" scrollable max-width=\"300px\">\n    <template v-slot:activator=\"{ on }\">\n      <v-btn color=\"primary\" dark v-on=\"on\">Open Dialog</v-btn>\n    </template>\n    <v-card>\n      <v-card-title>Select Country</v-card-title>\n      <v-divider></v-divider>\n      <v-card-text style=\"height: 300px;\">\n        <v-radio-group v-model=\"dialogm1\" column>\n          <v-radio label=\"Bahamas, The\" value=\"bahamas\"></v-radio>\n          <v-radio label=\"Bahrain\" value=\"bahrain\"></v-radio>\n          <v-radio label=\"Bangladesh\" value=\"bangladesh\"></v-radio>\n          <v-radio label=\"Barbados\" value=\"barbados\"></v-radio>\n          <v-radio label=\"Belarus\" value=\"belarus\"></v-radio>\n          <v-radio label=\"Belgium\" value=\"belgium\"></v-radio>\n          <v-radio label=\"Belize\" value=\"belize\"></v-radio>\n          <v-radio label=\"Benin\" value=\"benin\"></v-radio>\n          <v-radio label=\"Bhutan\" value=\"bhutan\"></v-radio>\n          <v-radio label=\"Bolivia\" value=\"bolivia\"></v-radio>\n          <v-radio label=\"Bosnia and Herzegovina\" value=\"bosnia\"></v-radio>\n          <v-radio label=\"Botswana\" value=\"botswana\"></v-radio>\n          <v-radio label=\"Brazil\" value=\"brazil\"></v-radio>\n          <v-radio label=\"Brunei\" value=\"brunei\"></v-radio>\n          <v-radio label=\"Bulgaria\" value=\"bulgaria\"></v-radio>\n          <v-radio label=\"Burkina Faso\" value=\"burkina\"></v-radio>\n          <v-radio label=\"Burma\" value=\"burma\"></v-radio>\n          <v-radio label=\"Burundi\" value=\"burundi\"></v-radio>\n        </v-radio-group>\n      </v-card-text>\n      <v-divider></v-divider>\n      <v-card-actions>\n        <v-btn color=\"blue darken-1\" text @click=\"dialog = false\">Close</v-btn>\n        <v-btn color=\"blue darken-1\" text @click=\"dialog = false\">Save</v-btn>\n      </v-card-actions>\n    </v-card>\n  </v-dialog>\n</v-row>",
        js: "export default {\n  data () {\n    return {\n      dialogm1: '',\n      dialog: false,\n    }\n  },\n}",
        dialogm1: "",
        dialog: false
      },
      code3: {
        html: "<v-row justify=\"center\">\n  <v-dialog v-model=\"dialog\" width=\"600px\">\n    <template v-slot:activator=\"{ on }\">\n      <v-btn color=\"primary\" dark v-on=\"on\">Open Dialog</v-btn>\n    </template>\n    <v-card>\n      <v-card-title>\n        <span class=\"headline\">Use Google's location service?</span>\n      </v-card-title>\n        <v-card-text\n          >Lorem ipsum dolor sit amet, semper quis, sapien id natoque\n          elit. Nostra urna at, magna at neque sed sed ante imperdiet,\n          dolor mauris cursus velit, velit non, sem nec. Volutpat sem\n          ridiculus placerat leo, augue in, duis erat proin\n          condimentum in a eget, sed fermentum sed vestibulum varius\n          ac, vestibulum volutpat orci ut elit eget tortor. Ultrices\n          nascetur nulla gravida ante arcu. Pharetra rhoncus morbi\n          ipsum, nunc tempor debitis, ipsum pellentesque, vitae id\n          quam ut mauris dui tempor, aptent non. Quisque turpis.\n          Phasellus quis lectus luctus orci eget rhoncus. Amet donec\n          vestibulum mattis commodo, nulla aliquet, nibh praesent,\n          elementum nulla. Sit lacus pharetra tempus magna neque\n          pellentesque, nulla vel erat. Justo ex quisque nulla\n          accusamus venenatis, sed quis. Nibh phasellus gravida metus\n          in, fusce aenean ut erat commodo eros. Ut turpis, dui\n          integer, nonummy pede placeat nec in sit leo. Faucibus\n          porttitor illo taciti odio, amet viverra scelerisque quis\n          quis et tortor, curabitur morbi a. Enim tempor at, rutrum\n          elit condimentum, amet rutrum vitae tempor torquent nunc.\n          Praesent vestibulum integer maxime felis. Neque aenean quia\n          vitae nostra, tempus elit enim id dui, at egestas pulvinar.\n          Integer libero vestibulum, quis blandit scelerisque mattis\n          fermentum nulla, tortor donec vestibulum dolor amet eget,\n          elit nullam. Aliquam leo phasellus aliquam curabitur metus\n          a, nulla justo mattis duis interdum vel, mollis vitae et id,\n          vestibulum erat ridiculus sit pulvinar justo sed. Vehicula\n          convallis, et nulla wisi, amet vestibulum risus, quam ac\n          egestas. Et vitae, nulla gravida erat scelerisque nullam\n          nunc pellentesque, a dictumst cras augue, purus imperdiet\n          non. Varius montes cursus varius vel tortor, nec leo a qui,\n          magni cras, velit vel consectetuer lobortis vel. Nibh erat\n          et wisi felis leo porttitor, sapien nibh sapien pede mi, sed\n          eget porttitor, repellendus arcu ac quis. Luctus vulputate\n          aut est sem magna, placerat accumsan nunc vestibulum ipsum\n          ac auctor, maecenas lorem in ut nec mauris tortor, doloribus\n          varius sem tortor vestibulum mollis, eleifend tortor felis\n          tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris\n          nec nunc euismod, tortor porta ridiculus potenti, massa\n          tristique nam magna, et wisi placerat et erat ante. Eget\n          pede erat in facilisis, fermentum venenatis sodales. Ac\n          tortor sociis et non animi tristique, rhoncus malesuada, ut\n          arcu volutpat scelerisque sollicitudin, elit curabitur dui\n          pede purus dolor, integer aenean risus taciti nulla eleifend\n          accumsan. At pulvinar diam parturient, interdum mi velit\n          aliquet et a. Arcu at ac placerat eget justo semper, purus\n          sociis curabitur mi ipsum consequat ut, mollis vestibulum,\n          est ante ornare lacus sem. Neque magna mauris, commodo\n          quisque, praesent semper suscipit lobortis nam. Justo\n          malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis\n          nunc, montes lectus purus fermentum. Ac sit wisi. Sodales\n          aliquam, sed vestibulum nullam arcu sit risus arcu, id\n          luctus vitae lorem nibh, integer nec nullam class cursus mi,\n          purus arcu lectus. Vel ante suscipit volutpat potenti mattis\n          sed, wisi eu placerat aliquam erat, lectus morbi lobortis at\n          assumenda. Consequat neque purus ipsum voluptas odio, netus\n          vestibulum ut nec, suspendisse pellentesque nec enim in.\n          Wisi dictum sed semper a, ipsum erat tellus habitasse est,\n          erat sem ornare, vitae quisque ultricies. Dui sed blandit.\n          Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc\n          nibh pede, ipsum vestibulum aenean leo ante ultricies, nam\n          cras quis sed penatibus amet. In mauris a. Integer metus\n          mauris tortor, et rutrum vestibulum ultricies, ut phasellus\n          in ullamcorper ut mollit, eu justo. Cursus pretium\n          venenatis. Cras pellentesque vel sodales accumsan aenean.\n          Feugiat metus sit nec in aliquet amet, porttitor pretium\n          vulputate massa. Consequat ipsum luctus quisque adipiscing\n          libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem\n          natoque vestibulum et, aliquet faucibus at morbi nibh, vel\n          condimentum. Massa unde orci sed id sed, odio donec congue\n          nec praesent amet. Hymenaeos velit lacus, quis vivamus\n          libero tempus duis, eu nisi eu, ipsum at accumsan pede justo\n          morbi donec, massa et libero sit risus neque tortor. Ut sed\n          sed etiam hendrerit dapibus, quis metus suspendisse nibh.\n          Fringilla tempor felis augue magna. Cum arcu a, id vitae.\n          Pellentesque pharetra in cras sociis adipiscing est. Nibh\n          nec mattis at maecenas, nisl orci aliquam nulla justo\n          egestas venenatis, elementum duis vel porta eros, massa\n          vitae, eligendi imperdiet amet. Nec neque luctus suscipit,\n          justo sem praesent, ut nisl quisque, volutpat torquent wisi\n          tellus aliquam reprehenderit, curabitur cras at quis massa\n          porttitor mauris. Eros sed ultrices. Amet dignissim justo\n          urna feugiat mauris litora, etiam accumsan, lobortis a orci\n          suspendisse. Semper ac mauris, varius bibendum pretium, orci\n          urna nunc ullamcorper auctor, saepe sem integer quam, at\n          feugiat egestas duis. Urna ligula ante. Leo elementum\n          nonummy. Sagittis mauris est in ipsum, nulla amet non justo,\n          proin id potenti platea posuere sit ut, nunc sit erat\n          bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere\n          morbi nunc tellus gravida vivamus. Mauris nec, facilisi quam\n          fermentum, ut mauris integer, orci tellus tempus diam ut in\n          pellentesque. Wisi faucibus tempor et odio leo diam,\n          eleifend quis integer curabitur sit scelerisque ac, mauris\n          consequat luctus quam penatibus fringilla dis, vitae lacus\n          in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed\n          blandit id sed. Tellus integer, dignissim id pede sodales\n          quis, felis dolorem id mauris orci, orci tempus ut. Nullam\n          hymenaeos. Curabitur in a, tortor ut praesent placerat\n          tincidunt interdum, ac dignissim metus nonummy hendrerit\n          wisi, etiam ut. Semper praesent integer fusce, tortor\n          suspendisse, augue ligula orci ante asperiores ullamcorper.\n          In sit per mi sed sed, mi vestibulum mus nam, morbi mauris\n          neque vitae aliquam proin senectus. Ac amet arcu mollis ante\n          congue elementum, inceptos eget optio quam pellentesque quis\n          lobortis, sollicitudin sed vestibulum sollicitudin, lectus\n          parturient nullam, leo orci ligula ultrices. At tincidunt\n          enim, suspendisse est sit sem ac. Amet tellus molestie est\n          purus magna augue, non etiam et in wisi id. Non commodo,\n          metus lorem facilisi lobortis ac velit, montes neque sed\n          risus consectetuer fringilla dolor. Quam justo et integer\n          aliquam, cursus nulla enim orci, nam cursus adipiscing,\n          integer torquent non, fringilla per maecenas. Libero ipsum\n          sed tellus purus et. Duis molestie placerat erat donec ut.\n          Dolor enim erat massa faucibus ultrices in, ante ultricies\n          orci lacus, libero consectetuer mauris magna feugiat neque\n          dapibus, donec pretium et. Aptent dui, aliquam et et amet\n          nostra ligula. Augue curabitur duis dui volutpat, tempus sed\n          ut pede donec. Interdum luctus, lectus nulla aenean elit, id\n          sit magna, vulputate ultrices pellentesque vel id fermentum\n          morbi. Tortor et. Adipiscing augue lorem cum non lacus,\n          rutrum sodales laoreet duis tortor, modi placerat facilisis\n          et malesuada eros ipsum, vehicula tempus. Ac vivamus amet\n          non aliquam venenatis lectus, sociosqu adipiscing consequat\n          nec arcu odio. Blandit orci nec nec, posuere in pretium,\n          enim ut, consectetuer nullam urna, risus vel. Nullam odio\n          vehicula massa sed, etiam sociis mauris, lacus ullamcorper,\n          libero imperdiet non sodales placerat justo vehicula. Nec\n          morbi imperdiet. Fermentum sem libero iaculis bibendum et\n          eros, eget maecenas non nunc, ad pellentesque. Ut nec diam\n          elementum interdum. Elementum vitae tellus lacus vitae,\n          ipsum phasellus, corporis vehicula in ac sed massa vivamus,\n          rutrum elit, ultricies metus volutpat. Semper wisi et,\n          sollicitudin nunc vestibulum, cursus accumsan nunc pede\n          tempus mi ipsum, ligula sed. Non condimentum ac dolor sit.\n          Mollis eu aliquam, vel mattis mollis massa ut dolor ante,\n          tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum,\n          iaculis ut congue ac vivamus. Nam libero orci, pulvinar\n          nulla, enim pellentesque consectetuer leo, feugiat rhoncus\n          rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper\n          viverra. Ultricies quis orci lorem, suspendisse ut\n          vestibulum integer, purus sed lorem pulvinar habitasse\n          turpis. +</v-card-text\n        >\n      <v-card-actions>\n        <v-spacer></v-spacer>\n        <v-btn color=\"green darken-1\" text @click=\"dialog = false\">Disagree</v-btn>\n        <v-btn color=\"green darken-1\" text @click=\"dialog = false\">Agree</v-btn>\n      </v-card-actions>\n    </v-card>\n  </v-dialog>\n</v-row>",
        js: "export default {\n  data () {\n    return {\n      dialog: false,\n    }\n  },\n}",
        dialog: false
      },
      code4: {
        html: "<v-row justify=\"center\">\n  <v-dialog v-model=\"dialog\" persistent max-width=\"600px\">\n    <template v-slot:activator=\"{ on }\">\n      <v-btn color=\"primary\" dark v-on=\"on\">Open Dialog</v-btn>\n    </template>\n    <v-card>\n      <v-card-title>\n        <span class=\"headline\">User Profile</span>\n      </v-card-title>\n      <v-card-text>\n        <v-container>\n          <v-row>\n            <v-col cols=\"12\" sm=\"6\" md=\"4\">\n              <v-text-field label=\"Legal first name*\" required></v-text-field>\n            </v-col>\n            <v-col cols=\"12\" sm=\"6\" md=\"4\">\n              <v-text-field label=\"Legal middle name\" hint=\"example of helper text only on focus\"></v-text-field>\n            </v-col>\n            <v-col cols=\"12\" sm=\"6\" md=\"4\">\n              <v-text-field\n                label=\"Legal last name*\"\n                hint=\"example of persistent helper text\"\n                persistent-hint\n                required\n              ></v-text-field>\n            </v-col>\n            <v-col cols=\"12\">\n              <v-text-field label=\"Email*\" required></v-text-field>\n            </v-col>\n            <v-col cols=\"12\">\n              <v-text-field label=\"Password*\" type=\"password\" required></v-text-field>\n            </v-col>\n            <v-col cols=\"12\" sm=\"6\">\n              <v-select\n                :items=\"['0-17', '18-29', '30-54', '54+']\"\n                label=\"Age*\"\n                required\n              ></v-select>\n            </v-col>\n            <v-col cols=\"12\" sm=\"6\">\n              <v-autocomplete\n                :items=\"['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']\"\n                label=\"Interests\"\n                multiple\n              ></v-autocomplete>\n            </v-col>\n          </v-row>\n        </v-container>\n        <small>*indicates required field</small>\n      </v-card-text>\n      <v-card-actions>\n        <v-spacer></v-spacer>\n        <v-btn color=\"blue darken-1\" text @click=\"dialog = false\">Close</v-btn>\n        <v-btn color=\"blue darken-1\" text @click=\"dialog = false\">Save</v-btn>\n      </v-card-actions>\n    </v-card>\n  </v-dialog>\n</v-row>",
        js: "export default {\n  data: () => ({\n    dialog: false,\n  }),\n}",
        dialog: false
      },
      code5: {
        html: "<div class=\"text-center\">\n  <v-btn\n    :disabled=\"dialog\"\n    :loading=\"dialog\"\n    class=\"white--text\"\n    color=\"purple darken-2\"\n    @click=\"dialog = true\"\n  >\n    Start loading\n  </v-btn>\n  <v-dialog\n    v-model=\"dialog\"\n    hide-overlay\n    persistent\n    width=\"300\"\n  >\n    <v-card\n      color=\"primary\"\n      dark\n    >\n      <v-card-text>\n        Please stand by\n        <v-progress-linear\n          indeterminate\n          color=\"white\"\n          class=\"mb-0\"\n        ></v-progress-linear>\n      </v-card-text>\n    </v-card>\n  </v-dialog>\n</div>",
        js: "export default {\n  data () {\n    return {\n      dialog: false,\n    }\n  },\n\n  watch: {\n    dialog (val) {\n      if (!val) return\n\n      setTimeout(() => (this.dialog = false), 4000)\n    },\n  },\n}"
      },
      code5Dialog: false,
      code6: {
        html: "<v-row justify=\"center\">\n  <v-dialog v-model=\"dialog\" fullscreen hide-overlay transition=\"dialog-bottom-transition\">\n    <template v-slot:activator=\"{ on }\">\n      <v-btn color=\"primary\" dark v-on=\"on\">Open Dialog</v-btn>\n    </template>\n    <v-card>\n      <v-toolbar dark color=\"primary\">\n        <v-btn icon dark @click=\"dialog = false\">\n          <v-icon>mdi-close</v-icon>\n        </v-btn>\n        <v-toolbar-title>Settings</v-toolbar-title>\n        <v-spacer></v-spacer>\n        <v-toolbar-items>\n          <v-btn dark text @click=\"dialog = false\">Save</v-btn>\n        </v-toolbar-items>\n      </v-toolbar>\n      <v-list three-line subheader>\n        <v-subheader>User Controls</v-subheader>\n        <v-list-item>\n          <v-list-item-content>\n            <v-list-item-title>Content filtering</v-list-item-title>\n            <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>\n          </v-list-item-content>\n        </v-list-item>\n        <v-list-item>\n          <v-list-item-content>\n            <v-list-item-title>Password</v-list-item-title>\n            <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>\n          </v-list-item-content>\n        </v-list-item>\n      </v-list>\n      <v-divider></v-divider>\n      <v-list three-line subheader>\n        <v-subheader>General</v-subheader>\n        <v-list-item>\n          <v-list-item-action>\n            <v-checkbox v-model=\"notifications\"></v-checkbox>\n          </v-list-item-action>\n          <v-list-item-content>\n            <v-list-item-title>Notifications</v-list-item-title>\n            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>\n          </v-list-item-content>\n        </v-list-item>\n        <v-list-item>\n          <v-list-item-action>\n            <v-checkbox v-model=\"sound\"></v-checkbox>\n          </v-list-item-action>\n          <v-list-item-content>\n            <v-list-item-title>Sound</v-list-item-title>\n            <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>\n          </v-list-item-content>\n        </v-list-item>\n        <v-list-item>\n          <v-list-item-action>\n            <v-checkbox v-model=\"widgets\"></v-checkbox>\n          </v-list-item-action>\n          <v-list-item-content>\n            <v-list-item-title>Auto-add widgets</v-list-item-title>\n            <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>\n          </v-list-item-content>\n        </v-list-item>\n      </v-list>\n    </v-card>\n  </v-dialog>\n</v-row>",
        js: "export default {\n  data () {\n    return {\n      dialog: false,\n      notifications: false,\n      sound: true,\n      widgets: false,\n    }\n  },\n}",
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false
      },
      code7: {
        html: "<div>\n  <v-row\n    justify=\"center\"\n  >\n    <v-btn\n      color=\"primary\"\n      class=\"ma-2\"\n      dark\n      @click=\"dialog = true\"\n    >\n      Open Dialog 1\n    </v-btn>\n    <v-btn\n      color=\"primary\"\n      class=\"ma-2\"\n      dark\n      @click=\"dialog2 = true\"\n    >\n      Open Dialog 2\n    </v-btn>\n    <v-btn\n      color=\"primary\"\n      class=\"ma-2\"\n      dark\n      @click=\"dialog3 = true\"\n    >\n      Open Dialog 3\n    </v-btn>\n    <v-menu\n      bottom\n      offset-y\n    >\n      <template v-slot:activator=\"{ on }\">\n        <v-btn\n          class=\"ma-2\"\n          v-on=\"on\"\n        >A Menu</v-btn>\n      </template>\n      <v-list>\n        <v-list-item\n          v-for=\"(item, i) in items\"\n          :key=\"i\"\n          @click=\"() => {}\"\n        >\n          <v-list-item-title>{{ item.title }}</v-list-item-title>\n        </v-list-item>\n      </v-list>\n    </v-menu>\n    <v-dialog\n      v-model=\"dialog\"\n      fullscreen\n      hide-overlay\n      transition=\"dialog-bottom-transition\"\n      scrollable\n    >\n      <v-card tile>\n        <v-toolbar\n          flat\n          dark\n          color=\"primary\"\n        >\n          <v-btn\n            icon\n            dark\n            @click=\"dialog = false\"\n          >\n            <v-icon>mdi-close</v-icon>\n          </v-btn>\n          <v-toolbar-title>Settings</v-toolbar-title>\n          <v-spacer></v-spacer>\n          <v-toolbar-items>\n            <v-btn\n              dark\n              text\n              @click=\"dialog = false\"\n            >\n              Save\n            </v-btn>\n          </v-toolbar-items>\n          <v-menu\n            bottom\n            right\n            offset-y\n          >\n            <template v-slot:activator=\"{ on }\">\n              <v-btn\n                dark\n                icon\n                v-on=\"on\"\n              >\n                <v-icon>mdi-dots-vertical</v-icon>\n              </v-btn>\n            </template>\n            <v-list>\n              <v-list-item\n                v-for=\"(item, i) in items\"\n                :key=\"i\"\n                @click=\"() => {}\"\n              >\n                <v-list-item-title>{{ item.title }}</v-list-item-title>\n              </v-list-item>\n            </v-list>\n          </v-menu>\n        </v-toolbar>\n        <v-card-text>\n          <v-btn\n            color=\"primary\"\n            dark\n            class=\"ma-2\"\n            @click=\"dialog2 = !dialog2\"\n          >\n            Open Dialog 2\n          </v-btn>\n          <v-tooltip right>\n            <template v-slot:activator=\"{ on }\">\n              <v-btn\n                class=\"ma-2\"\n                v-on=\"on\"\n              >Tool Tip Activator</v-btn>\n            </template>\n            Tool Tip\n          </v-tooltip>\n          <v-list\n            three-line\n            subheader\n          >\n            <v-subheader>User Controls</v-subheader>\n            <v-list-item>\n              <v-list-item-content>\n                <v-list-item-title>Content filtering</v-list-item-title>\n                <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>\n              </v-list-item-content>\n            </v-list-item>\n            <v-list-item>\n              <v-list-item-content>\n                <v-list-item-title>Password</v-list-item-title>\n                <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>\n              </v-list-item-content>\n            </v-list-item>\n          </v-list>\n          <v-divider></v-divider>\n          <v-list\n            three-line\n            subheader\n          >\n            <v-subheader>General</v-subheader>\n            <v-list-item>\n              <v-list-item-action>\n                <v-checkbox v-model=\"notifications\"></v-checkbox>\n              </v-list-item-action>\n              <v-list-item-content>\n                <v-list-item-title>Notifications</v-list-item-title>\n                <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>\n              </v-list-item-content>\n            </v-list-item>\n            <v-list-item>\n              <v-list-item-action>\n                <v-checkbox v-model=\"sound\"></v-checkbox>\n              </v-list-item-action>\n              <v-list-item-content>\n                <v-list-item-title>Sound</v-list-item-title>\n                <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>\n              </v-list-item-content>\n            </v-list-item>\n            <v-list-item>\n              <v-list-item-action>\n                <v-checkbox v-model=\"widgets\"></v-checkbox>\n              </v-list-item-action>\n              <v-list-item-content>\n                <v-list-item-title>Auto-add widgets</v-list-item-title>\n                <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>\n              </v-list-item-content>\n            </v-list-item>\n          </v-list>\n        </v-card-text>\n\n        <div style=\"flex: 1 1 auto;\"></div>\n      </v-card>\n    </v-dialog>\n\n    <v-dialog\n      v-model=\"dialog2\"\n      max-width=\"500px\"\n    >\n      <v-card>\n        <v-card-title>\n          Dialog 2\n        </v-card-title>\n        <v-card-text>\n          <v-btn\n            color=\"primary\"\n            dark\n            @click=\"dialog3 = !dialog3\"\n          >\n            Open Dialog 3\n          </v-btn>\n          <v-select\n            :items=\"select\"\n            label=\"A Select List\"\n            item-value=\"text\"\n          ></v-select>\n        </v-card-text>\n        <v-card-actions>\n          <v-btn\n            color=\"primary\"\n            text\n            @click=\"dialog2 = false\"\n          >\n            Close\n          </v-btn>\n        </v-card-actions>\n      </v-card>\n    </v-dialog>\n    <v-dialog\n      v-model=\"dialog3\"\n      max-width=\"500px\"\n    >\n      <v-card>\n        <v-card-title>\n          <span>Dialog 3</span>\n          <v-spacer></v-spacer>\n          <v-menu\n            bottom\n            left\n          >\n            <template v-slot:activator=\"{ on }\">\n              <v-btn\n                icon\n                v-on=\"on\"\n              >\n                <v-icon>mdi-dots-vertical</v-icon>\n              </v-btn>\n            </template>\n            <v-list>\n              <v-list-item\n                v-for=\"(item, i) in items\"\n                :key=\"i\"\n                @click=\"() => {}\"\n              >\n                <v-list-item-title>{{ item.title }}</v-list-item-title>\n              </v-list-item>\n            </v-list>\n          </v-menu>\n        </v-card-title>\n        <v-card-actions>\n          <v-btn\n            color=\"primary\"\n            text\n            @click=\"dialog3 = false\"\n          >\n            Close\n          </v-btn>\n        </v-card-actions>\n      </v-card>\n    </v-dialog>\n  </v-row>\n</div>",
        js: "export default {\n  data () {\n    return {\n      dialog: false,\n      dialog2: false,\n      dialog3: false,\n      notifications: false,\n      sound: true,\n      widgets: false,\n      items: [\n        {\n          title: 'Click Me',\n        },\n        {\n          title: 'Click Me',\n        },\n        {\n          title: 'Click Me',\n        },\n        {\n          title: 'Click Me 2',\n        },\n      ],\n      select: [\n        { text: 'State 1' },\n        { text: 'State 2' },\n        { text: 'State 3' },\n        { text: 'State 4' },\n        { text: 'State 5' },\n        { text: 'State 6' },\n        { text: 'State 7' },\n      ],\n    }\n  },\n}",
        dialog: false,
        dialog2: false,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
        items: [{
          title: "Click Me"
        }, {
          title: "Click Me"
        }, {
          title: "Click Me"
        }, {
          title: "Click Me 2"
        }],
        select: [{
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
        }]
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
      title: "Dialog"
    }]);
  },
  watch: {
    code5Dialog: function code5Dialog(val) {
      var _this = this;

      if (!val) return;
      setTimeout(function () {
        return _this.code5Dialog = false;
      }, 4000);
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

/***/ "./resources/js/view/pages/vuetify/Dialog.vue":
/*!****************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Dialog.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dialog_vue_vue_type_template_id_8fd46560___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.vue?vue&type=template&id=8fd46560& */ "./resources/js/view/pages/vuetify/Dialog.vue?vue&type=template&id=8fd46560&");
/* harmony import */ var _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.vue?vue&type=script&lang=js& */ "./resources/js/view/pages/vuetify/Dialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dialog_vue_vue_type_template_id_8fd46560___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dialog_vue_vue_type_template_id_8fd46560___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/vuetify/Dialog.vue"
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

/***/ "./resources/js/view/pages/vuetify/Dialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Dialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Dialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/view/pages/vuetify/Dialog.vue?vue&type=template&id=8fd46560&":
/*!***********************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Dialog.vue?vue&type=template&id=8fd46560& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_8fd46560___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_8fd46560___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_8fd46560___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dialog.vue?vue&type=template&id=8fd46560& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Dialog.vue?vue&type=template&id=8fd46560&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Dialog.vue?vue&type=template&id=8fd46560&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Dialog.vue?vue&type=template&id=8fd46560& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Dialog")]),
            _vm._v(" The "),
            _c("code", [_vm._v("v-dialog")]),
            _vm._v(
              " component inform users about a\n      specific task and may contain critical information, require decisions,\n      or involve multiple tasks. Use dialogs sparingly because they are\n      interruptive.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/alerts",
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
              attrs: { title: "Without activator" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", dark: "" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  _vm.code1.dialog = true
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              Open Dialog\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "290" },
                              model: {
                                value: _vm.code1.dialog,
                                callback: function($$v) {
                                  _vm.$set(_vm.code1, "dialog", $$v)
                                },
                                expression: "code1.dialog"
                              }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    { staticClass: "headline" },
                                    [_vm._v("Use Google's location service?")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-card-text", [
                                    _vm._v(
                                      "\n                  Let Google help apps determine location. This means sending\n                  anonymous location data to Google, even when no apps are\n                  running.\n                "
                                    )
                                  ]),
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
                                            color: "green darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.code1.dialog = false
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    Disagree\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "green darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.code1.dialog = false
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    Agree\n                  "
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
              attrs: { title: "Scrollable" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c(
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          _c(
                            "v-dialog",
                            {
                              attrs: { width: "600px" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          {
                                            attrs: {
                                              color: "primary",
                                              dark: ""
                                            }
                                          },
                                          on
                                        ),
                                        [_vm._v("Open Dialog")]
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.code3.dialog,
                                callback: function($$v) {
                                  _vm.$set(_vm.code3, "dialog", $$v)
                                },
                                expression: "code3.dialog"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _c("span", { staticClass: "headline" }, [
                                      _vm._v("Use Google's location service?")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("v-card-text", [
                                    _vm._v(
                                      "Lorem ipsum dolor sit amet, semper quis, sapien id natoque\n                  elit. Nostra urna at, magna at neque sed sed ante imperdiet,\n                  dolor mauris cursus velit, velit non, sem nec. Volutpat sem\n                  ridiculus placerat leo, augue in, duis erat proin\n                  condimentum in a eget, sed fermentum sed vestibulum varius\n                  ac, vestibulum volutpat orci ut elit eget tortor. Ultrices\n                  nascetur nulla gravida ante arcu. Pharetra rhoncus morbi\n                  ipsum, nunc tempor debitis, ipsum pellentesque, vitae id\n                  quam ut mauris dui tempor, aptent non. Quisque turpis.\n                  Phasellus quis lectus luctus orci eget rhoncus. Amet donec\n                  vestibulum mattis commodo, nulla aliquet, nibh praesent,\n                  elementum nulla. Sit lacus pharetra tempus magna neque\n                  pellentesque, nulla vel erat. Justo ex quisque nulla\n                  accusamus venenatis, sed quis. Nibh phasellus gravida metus\n                  in, fusce aenean ut erat commodo eros. Ut turpis, dui\n                  integer, nonummy pede placeat nec in sit leo. Faucibus\n                  porttitor illo taciti odio, amet viverra scelerisque quis\n                  quis et tortor, curabitur morbi a. Enim tempor at, rutrum\n                  elit condimentum, amet rutrum vitae tempor torquent nunc.\n                  Praesent vestibulum integer maxime felis. Neque aenean quia\n                  vitae nostra, tempus elit enim id dui, at egestas pulvinar.\n                  Integer libero vestibulum, quis blandit scelerisque mattis\n                  fermentum nulla, tortor donec vestibulum dolor amet eget,\n                  elit nullam. Aliquam leo phasellus aliquam curabitur metus\n                  a, nulla justo mattis duis interdum vel, mollis vitae et id,\n                  vestibulum erat ridiculus sit pulvinar justo sed. Vehicula\n                  convallis, et nulla wisi, amet vestibulum risus, quam ac\n                  egestas. Et vitae, nulla gravida erat scelerisque nullam\n                  nunc pellentesque, a dictumst cras augue, purus imperdiet\n                  non. Varius montes cursus varius vel tortor, nec leo a qui,\n                  magni cras, velit vel consectetuer lobortis vel. Nibh erat\n                  et wisi felis leo porttitor, sapien nibh sapien pede mi, sed\n                  eget porttitor, repellendus arcu ac quis. Luctus vulputate\n                  aut est sem magna, placerat accumsan nunc vestibulum ipsum\n                  ac auctor, maecenas lorem in ut nec mauris tortor, doloribus\n                  varius sem tortor vestibulum mollis, eleifend tortor felis\n                  tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris\n                  nec nunc euismod, tortor porta ridiculus potenti, massa\n                  tristique nam magna, et wisi placerat et erat ante. Eget\n                  pede erat in facilisis, fermentum venenatis sodales. Ac\n                  tortor sociis et non animi tristique, rhoncus malesuada, ut\n                  arcu volutpat scelerisque sollicitudin, elit curabitur dui\n                  pede purus dolor, integer aenean risus taciti nulla eleifend\n                  accumsan. At pulvinar diam parturient, interdum mi velit\n                  aliquet et a. Arcu at ac placerat eget justo semper, purus\n                  sociis curabitur mi ipsum consequat ut, mollis vestibulum,\n                  est ante ornare lacus sem. Neque magna mauris, commodo\n                  quisque, praesent semper suscipit lobortis nam. Justo\n                  malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis\n                  nunc, montes lectus purus fermentum. Ac sit wisi. Sodales\n                  aliquam, sed vestibulum nullam arcu sit risus arcu, id\n                  luctus vitae lorem nibh, integer nec nullam class cursus mi,\n                  purus arcu lectus. Vel ante suscipit volutpat potenti mattis\n                  sed, wisi eu placerat aliquam erat, lectus morbi lobortis at\n                  assumenda. Consequat neque purus ipsum voluptas odio, netus\n                  vestibulum ut nec, suspendisse pellentesque nec enim in.\n                  Wisi dictum sed semper a, ipsum erat tellus habitasse est,\n                  erat sem ornare, vitae quisque ultricies. Dui sed blandit.\n                  Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc\n                  nibh pede, ipsum vestibulum aenean leo ante ultricies, nam\n                  cras quis sed penatibus amet. In mauris a. Integer metus\n                  mauris tortor, et rutrum vestibulum ultricies, ut phasellus\n                  in ullamcorper ut mollit, eu justo. Cursus pretium\n                  venenatis. Cras pellentesque vel sodales accumsan aenean.\n                  Feugiat metus sit nec in aliquet amet, porttitor pretium\n                  vulputate massa. Consequat ipsum luctus quisque adipiscing\n                  libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem\n                  natoque vestibulum et, aliquet faucibus at morbi nibh, vel\n                  condimentum. Massa unde orci sed id sed, odio donec congue\n                  nec praesent amet. Hymenaeos velit lacus, quis vivamus\n                  libero tempus duis, eu nisi eu, ipsum at accumsan pede justo\n                  morbi donec, massa et libero sit risus neque tortor. Ut sed\n                  sed etiam hendrerit dapibus, quis metus suspendisse nibh.\n                  Fringilla tempor felis augue magna. Cum arcu a, id vitae.\n                  Pellentesque pharetra in cras sociis adipiscing est. Nibh\n                  nec mattis at maecenas, nisl orci aliquam nulla justo\n                  egestas venenatis, elementum duis vel porta eros, massa\n                  vitae, eligendi imperdiet amet. Nec neque luctus suscipit,\n                  justo sem praesent, ut nisl quisque, volutpat torquent wisi\n                  tellus aliquam reprehenderit, curabitur cras at quis massa\n                  porttitor mauris. Eros sed ultrices. Amet dignissim justo\n                  urna feugiat mauris litora, etiam accumsan, lobortis a orci\n                  suspendisse. Semper ac mauris, varius bibendum pretium, orci\n                  urna nunc ullamcorper auctor, saepe sem integer quam, at\n                  feugiat egestas duis. Urna ligula ante. Leo elementum\n                  nonummy. Sagittis mauris est in ipsum, nulla amet non justo,\n                  proin id potenti platea posuere sit ut, nunc sit erat\n                  bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere\n                  morbi nunc tellus gravida vivamus. Mauris nec, facilisi quam\n                  fermentum, ut mauris integer, orci tellus tempus diam ut in\n                  pellentesque. Wisi faucibus tempor et odio leo diam,\n                  eleifend quis integer curabitur sit scelerisque ac, mauris\n                  consequat luctus quam penatibus fringilla dis, vitae lacus\n                  in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed\n                  blandit id sed. Tellus integer, dignissim id pede sodales\n                  quis, felis dolorem id mauris orci, orci tempus ut. Nullam\n                  hymenaeos. Curabitur in a, tortor ut praesent placerat\n                  tincidunt interdum, ac dignissim metus nonummy hendrerit\n                  wisi, etiam ut. Semper praesent integer fusce, tortor\n                  suspendisse, augue ligula orci ante asperiores ullamcorper.\n                  In sit per mi sed sed, mi vestibulum mus nam, morbi mauris\n                  neque vitae aliquam proin senectus. Ac amet arcu mollis ante\n                  congue elementum, inceptos eget optio quam pellentesque quis\n                  lobortis, sollicitudin sed vestibulum sollicitudin, lectus\n                  parturient nullam, leo orci ligula ultrices. At tincidunt\n                  enim, suspendisse est sit sem ac. Amet tellus molestie est\n                  purus magna augue, non etiam et in wisi id. Non commodo,\n                  metus lorem facilisi lobortis ac velit, montes neque sed\n                  risus consectetuer fringilla dolor. Quam justo et integer\n                  aliquam, cursus nulla enim orci, nam cursus adipiscing,\n                  integer torquent non, fringilla per maecenas. Libero ipsum\n                  sed tellus purus et. Duis molestie placerat erat donec ut.\n                  Dolor enim erat massa faucibus ultrices in, ante ultricies\n                  orci lacus, libero consectetuer mauris magna feugiat neque\n                  dapibus, donec pretium et. Aptent dui, aliquam et et amet\n                  nostra ligula. Augue curabitur duis dui volutpat, tempus sed\n                  ut pede donec. Interdum luctus, lectus nulla aenean elit, id\n                  sit magna, vulputate ultrices pellentesque vel id fermentum\n                  morbi. Tortor et. Adipiscing augue lorem cum non lacus,\n                  rutrum sodales laoreet duis tortor, modi placerat facilisis\n                  et malesuada eros ipsum, vehicula tempus. Ac vivamus amet\n                  non aliquam venenatis lectus, sociosqu adipiscing consequat\n                  nec arcu odio. Blandit orci nec nec, posuere in pretium,\n                  enim ut, consectetuer nullam urna, risus vel. Nullam odio\n                  vehicula massa sed, etiam sociis mauris, lacus ullamcorper,\n                  libero imperdiet non sodales placerat justo vehicula. Nec\n                  morbi imperdiet. Fermentum sem libero iaculis bibendum et\n                  eros, eget maecenas non nunc, ad pellentesque. Ut nec diam\n                  elementum interdum. Elementum vitae tellus lacus vitae,\n                  ipsum phasellus, corporis vehicula in ac sed massa vivamus,\n                  rutrum elit, ultricies metus volutpat. Semper wisi et,\n                  sollicitudin nunc vestibulum, cursus accumsan nunc pede\n                  tempus mi ipsum, ligula sed. Non condimentum ac dolor sit.\n                  Mollis eu aliquam, vel mattis mollis massa ut dolor ante,\n                  tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum,\n                  iaculis ut congue ac vivamus. Nam libero orci, pulvinar\n                  nulla, enim pellentesque consectetuer leo, feugiat rhoncus\n                  rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper\n                  viverra. Ultricies quis orci lorem, suspendisse ut\n                  vestibulum integer, purus sed lorem pulvinar habitasse\n                  turpis. +"
                                    )
                                  ]),
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
                                            color: "green darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.code3.dialog = false
                                            }
                                          }
                                        },
                                        [_vm._v("Disagree")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "green darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.code3.dialog = false
                                            }
                                          }
                                        },
                                        [_vm._v("Agree")]
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
              attrs: { title: "Loader" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("\n            The "),
                        _c("code", [_vm._v("v-dialog")]),
                        _vm._v(
                          " component makes it easy to create a\n            customized loading experience for your application.\n          "
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
                              staticClass: "white--text",
                              attrs: {
                                disabled: _vm.code5Dialog,
                                loading: _vm.code5Dialog,
                                color: "purple darken-2"
                              },
                              on: {
                                click: function($event) {
                                  _vm.code5Dialog = true
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              Start loading\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: {
                                "hide-overlay": "",
                                persistent: "",
                                width: "300"
                              },
                              model: {
                                value: _vm.code5Dialog,
                                callback: function($$v) {
                                  _vm.code5Dialog = $$v
                                },
                                expression: "code5Dialog"
                              }
                            },
                            [
                              _c(
                                "v-card",
                                { attrs: { color: "primary", dark: "" } },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _vm._v(
                                        "\n                  Please stand by\n                  "
                                      ),
                                      _c("v-progress-linear", {
                                        staticClass: "mb-0",
                                        attrs: {
                                          indeterminate: "",
                                          color: "white"
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
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Nested dialogs" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "Dialogs can be nested: you can open one dialog from another."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "v-row",
                            { attrs: { justify: "center" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ma-2",
                                  attrs: { color: "primary", dark: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.code7.dialog = true
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Open Dialog 1\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ma-2",
                                  attrs: { color: "primary", dark: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.code7.dialog2 = true
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Open Dialog 2\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ma-2",
                                  attrs: { color: "primary", dark: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.code7.dialog3 = true
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Open Dialog 3\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-menu",
                                {
                                  attrs: { bottom: "", "offset-y": "" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-btn",
                                            _vm._g({ staticClass: "ma-2" }, on),
                                            [_vm._v("A Menu")]
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
                                    _vm._l(_vm.code7.items, function(item, i) {
                                      return _c(
                                        "v-list-item",
                                        {
                                          key: i,
                                          on: { click: function() {} }
                                        },
                                        [
                                          _c("v-list-item-title", [
                                            _vm._v(_vm._s(item.title))
                                          ])
                                        ],
                                        1
                                      )
                                    }),
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-dialog",
                                {
                                  attrs: {
                                    fullscreen: "",
                                    "hide-overlay": "",
                                    transition: "dialog-bottom-transition",
                                    scrollable: ""
                                  },
                                  model: {
                                    value: _vm.code7.dialog,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code7, "dialog", $$v)
                                    },
                                    expression: "code7.dialog"
                                  }
                                },
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { tile: "" } },
                                    [
                                      _c(
                                        "v-toolbar",
                                        {
                                          attrs: {
                                            flat: "",
                                            dark: "",
                                            color: "primary"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { icon: "", dark: "" },
                                              on: {
                                                click: function($event) {
                                                  _vm.code7.dialog = false
                                                }
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-close")
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-toolbar-title", [
                                            _vm._v("Settings")
                                          ]),
                                          _vm._v(" "),
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          _c(
                                            "v-toolbar-items",
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: { dark: "", text: "" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.code7.dialog = false
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                        Save\n                      "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-menu",
                                            {
                                              attrs: {
                                                bottom: "",
                                                right: "",
                                                "offset-y": ""
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
                                                          {
                                                            attrs: {
                                                              dark: "",
                                                              icon: ""
                                                            }
                                                          },
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
                                                _vm._l(
                                                  _vm.code7.items,
                                                  function(item, i) {
                                                    return _c(
                                                      "v-list-item",
                                                      {
                                                        key: i,
                                                        on: {
                                                          click: function() {}
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-list-item-title",
                                                          [
                                                            _vm._v(
                                                              _vm._s(item.title)
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  }
                                                ),
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
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "ma-2",
                                              attrs: {
                                                color: "primary",
                                                dark: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.code7.dialog2 = !_vm.code7
                                                    .dialog2
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      Open Dialog 2\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-tooltip",
                                            {
                                              attrs: { right: "" },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "activator",
                                                  fn: function(ref) {
                                                    var on = ref.on
                                                    return [
                                                      _c(
                                                        "v-btn",
                                                        _vm._g(
                                                          {
                                                            staticClass: "ma-2"
                                                          },
                                                          on
                                                        ),
                                                        [
                                                          _vm._v(
                                                            "Tool Tip Activator"
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
                                                "\n                      Tool Tip\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-list",
                                            {
                                              attrs: {
                                                "three-line": "",
                                                subheader: ""
                                              }
                                            },
                                            [
                                              _c("v-subheader", [
                                                _vm._v("User Controls")
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                [
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          "Content filtering"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        [
                                                          _vm._v(
                                                            "Set the content filtering level to restrict apps\n                            that can be downloaded"
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                [
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v("Password")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        [
                                                          _vm._v(
                                                            "Require password for purchase or use password to\n                            restrict purchase"
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
                                          _c("v-divider"),
                                          _vm._v(" "),
                                          _c(
                                            "v-list",
                                            {
                                              attrs: {
                                                "three-line": "",
                                                subheader: ""
                                              }
                                            },
                                            [
                                              _c("v-subheader", [
                                                _vm._v("General")
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                [
                                                  _c(
                                                    "v-list-item-action",
                                                    [
                                                      _c("v-checkbox", {
                                                        model: {
                                                          value:
                                                            _vm.code7
                                                              .notifications,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.code7,
                                                              "notifications",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "code7.notifications"
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
                                                        _vm._v("Notifications")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        [
                                                          _vm._v(
                                                            "Notify me about updates to apps or games that I\n                            downloaded"
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                [
                                                  _c(
                                                    "v-list-item-action",
                                                    [
                                                      _c("v-checkbox", {
                                                        model: {
                                                          value:
                                                            _vm.code7.sound,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.code7,
                                                              "sound",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "code7.sound"
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
                                                        _vm._v("Sound")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        [
                                                          _vm._v(
                                                            "Auto-update apps at any time. Data charges may\n                            apply"
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                [
                                                  _c(
                                                    "v-list-item-action",
                                                    [
                                                      _c("v-checkbox", {
                                                        model: {
                                                          value:
                                                            _vm.code7.widgets,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.code7,
                                                              "widgets",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "code7.widgets"
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
                                                        _vm._v(
                                                          "Auto-add widgets"
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        [
                                                          _vm._v(
                                                            "Automatically add home screen\n                            widgets"
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
                                      _c("div", {
                                        staticStyle: { flex: "1 1 auto" }
                                      })
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
                                  attrs: { "max-width": "500px" },
                                  model: {
                                    value: _vm.code7.dialog2,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code7, "dialog2", $$v)
                                    },
                                    expression: "code7.dialog2"
                                  }
                                },
                                [
                                  _c(
                                    "v-card",
                                    [
                                      _c("v-card-title", [
                                        _vm._v(
                                          "\n                    Dialog 2\n                  "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-text",
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "primary",
                                                dark: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.code7.dialog3 = !_vm.code7
                                                    .dialog3
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      Open Dialog 3\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("v-select", {
                                            attrs: {
                                              items: _vm.code7.select,
                                              label: "A Select List",
                                              "item-value": "text"
                                            }
                                          })
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
                                              attrs: {
                                                color: "primary",
                                                text: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.code7.dialog2 = false
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      Close\n                    "
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
                                "v-dialog",
                                {
                                  attrs: { "max-width": "500px" },
                                  model: {
                                    value: _vm.code7.dialog3,
                                    callback: function($$v) {
                                      _vm.$set(_vm.code7, "dialog3", $$v)
                                    },
                                    expression: "code7.dialog3"
                                  }
                                },
                                [
                                  _c(
                                    "v-card",
                                    [
                                      _c(
                                        "v-card-title",
                                        [
                                          _c("span", [_vm._v("Dialog 3")]),
                                          _vm._v(" "),
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          _c(
                                            "v-menu",
                                            {
                                              attrs: { bottom: "", left: "" },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "activator",
                                                  fn: function(ref) {
                                                    var on = ref.on
                                                    return [
                                                      _c(
                                                        "v-btn",
                                                        _vm._g(
                                                          {
                                                            attrs: { icon: "" }
                                                          },
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
                                                _vm._l(
                                                  _vm.code7.items,
                                                  function(item, i) {
                                                    return _c(
                                                      "v-list-item",
                                                      {
                                                        key: i,
                                                        on: {
                                                          click: function() {}
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-list-item-title",
                                                          [
                                                            _vm._v(
                                                              _vm._s(item.title)
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  }
                                                ),
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
                                              attrs: {
                                                color: "primary",
                                                text: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.code7.dialog3 = false
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      Close\n                    "
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
              attrs: { title: "Scrollable" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("Example of a dialog with scrollable content.")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          _c(
                            "v-dialog",
                            {
                              attrs: { scrollable: "", "max-width": "300px" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          {
                                            attrs: {
                                              color: "primary",
                                              dark: ""
                                            }
                                          },
                                          on
                                        ),
                                        [_vm._v("Open Dialog")]
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.code2.dialog,
                                callback: function($$v) {
                                  _vm.$set(_vm.code2, "dialog", $$v)
                                },
                                expression: "code2.dialog"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _vm._v("Select Country")
                                  ]),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    { staticStyle: { height: "300px" } },
                                    [
                                      _c(
                                        "v-radio-group",
                                        {
                                          attrs: { column: "" },
                                          model: {
                                            value: _vm.code2.dialogm1,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.code2,
                                                "dialogm1",
                                                $$v
                                              )
                                            },
                                            expression: "code2.dialogm1"
                                          }
                                        },
                                        [
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Bahamas, The",
                                              value: "bahamas"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Bahrain",
                                              value: "bahrain"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Bangladesh",
                                              value: "bangladesh"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Barbados",
                                              value: "barbados"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Belarus",
                                              value: "belarus"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Belgium",
                                              value: "belgium"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Belize",
                                              value: "belize"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Benin",
                                              value: "benin"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Bhutan",
                                              value: "bhutan"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Bolivia",
                                              value: "bolivia"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Bosnia and Herzegovina",
                                              value: "bosnia"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Botswana",
                                              value: "botswana"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Brazil",
                                              value: "brazil"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Brunei",
                                              value: "brunei"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Bulgaria",
                                              value: "bulgaria"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Burkina Faso",
                                              value: "burkina"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Burma",
                                              value: "burma"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Burundi",
                                              value: "burundi"
                                            }
                                          })
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
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.code2.dialog = false
                                            }
                                          }
                                        },
                                        [_vm._v("Close")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.code2.dialog = false
                                            }
                                          }
                                        },
                                        [_vm._v("Save")]
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
              attrs: { title: "Form" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v("Just a simple example of a form in a dialog.")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          _c(
                            "v-dialog",
                            {
                              attrs: { persistent: "", "max-width": "600px" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          {
                                            attrs: {
                                              color: "primary",
                                              dark: ""
                                            }
                                          },
                                          on
                                        ),
                                        [_vm._v("Open Dialog")]
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.code4.dialog,
                                callback: function($$v) {
                                  _vm.$set(_vm.code4, "dialog", $$v)
                                },
                                expression: "code4.dialog"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _c("span", { staticClass: "headline" }, [
                                      _vm._v("User Profile")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-container",
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
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label:
                                                        "Legal first name*",
                                                      required: ""
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
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label:
                                                        "Legal middle name",
                                                      hint:
                                                        "example of helper text only on focus"
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
                                                    sm: "6",
                                                    md: "4"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Legal last name*",
                                                      hint:
                                                        "example of persistent helper text",
                                                      "persistent-hint": "",
                                                      required: ""
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
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Email*",
                                                      required: ""
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
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Password*",
                                                      type: "password",
                                                      required: ""
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: { cols: "12", sm: "6" }
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      items: [
                                                        "0-17",
                                                        "18-29",
                                                        "30-54",
                                                        "54+"
                                                      ],
                                                      label: "Age*",
                                                      required: ""
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: { cols: "12", sm: "6" }
                                                },
                                                [
                                                  _c("v-autocomplete", {
                                                    attrs: {
                                                      items: [
                                                        "Skiing",
                                                        "Ice hockey",
                                                        "Soccer",
                                                        "Basketball",
                                                        "Hockey",
                                                        "Reading",
                                                        "Writing",
                                                        "Coding",
                                                        "Basejump"
                                                      ],
                                                      label: "Interests",
                                                      multiple: ""
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
                                      _c("small", [
                                        _vm._v("*indicates required field")
                                      ])
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
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.code4.dialog = false
                                            }
                                          }
                                        },
                                        [_vm._v("Close")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.code4.dialog = false
                                            }
                                          }
                                        },
                                        [_vm._v("Save")]
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
              attrs: { title: "Fullscreen" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Due to limited space, full-screen dialogs may be more appropriate\n            for mobile devices than dialogs used on devices with larger\n            screens.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          _c(
                            "v-dialog",
                            {
                              attrs: {
                                fullscreen: "",
                                "hide-overlay": "",
                                transition: "dialog-bottom-transition"
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
                                          {
                                            attrs: {
                                              color: "primary",
                                              dark: ""
                                            }
                                          },
                                          on
                                        ),
                                        [_vm._v("Open Dialog")]
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.code6.dialog,
                                callback: function($$v) {
                                  _vm.$set(_vm.code6, "dialog", $$v)
                                },
                                expression: "code6.dialog"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-toolbar",
                                    { attrs: { dark: "", color: "primary" } },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { icon: "", dark: "" },
                                          on: {
                                            click: function($event) {
                                              _vm.code6.dialog = false
                                            }
                                          }
                                        },
                                        [_c("v-icon", [_vm._v("mdi-close")])],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-toolbar-title", [
                                        _vm._v("Settings")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-toolbar-items",
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { dark: "", text: "" },
                                              on: {
                                                click: function($event) {
                                                  _vm.code6.dialog = false
                                                }
                                              }
                                            },
                                            [_vm._v("Save")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list",
                                    {
                                      attrs: { "three-line": "", subheader: "" }
                                    },
                                    [
                                      _c("v-subheader", [
                                        _vm._v("User Controls")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item",
                                        [
                                          _c(
                                            "v-list-item-content",
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v("Content filtering")
                                              ]),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle", [
                                                _vm._v(
                                                  "Set the content filtering level to restrict apps that\n                        can be downloaded"
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
                                        "v-list-item",
                                        [
                                          _c(
                                            "v-list-item-content",
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v("Password")
                                              ]),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle", [
                                                _vm._v(
                                                  "Require password for purchase or use password to\n                        restrict purchase"
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
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-list",
                                    {
                                      attrs: { "three-line": "", subheader: "" }
                                    },
                                    [
                                      _c("v-subheader", [_vm._v("General")]),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item",
                                        [
                                          _c(
                                            "v-list-item-action",
                                            [
                                              _c("v-checkbox", {
                                                model: {
                                                  value:
                                                    _vm.code6.notifications,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.code6,
                                                      "notifications",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "code6.notifications"
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
                                                _vm._v("Notifications")
                                              ]),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle", [
                                                _vm._v(
                                                  "Notify me about updates to apps or games that I\n                        downloaded"
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
                                        "v-list-item",
                                        [
                                          _c(
                                            "v-list-item-action",
                                            [
                                              _c("v-checkbox", {
                                                model: {
                                                  value: _vm.code6.sound,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.code6,
                                                      "sound",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "code6.sound"
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
                                                _vm._v("Sound")
                                              ]),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle", [
                                                _vm._v(
                                                  "Auto-update apps at any time. Data charges may\n                        apply"
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
                                        "v-list-item",
                                        [
                                          _c(
                                            "v-list-item-action",
                                            [
                                              _c("v-checkbox", {
                                                model: {
                                                  value: _vm.code6.widgets,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.code6,
                                                      "widgets",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "code6.widgets"
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
                                                _vm._v("Auto-add widgets")
                                              ]),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle", [
                                                _vm._v(
                                                  "Automatically add home screen\n                        widgets"
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