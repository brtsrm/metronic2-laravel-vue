(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_pages_vuetify_Calendars_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Calendars.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Calendars.vue?vue&type=script&lang=js& ***!
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


/**
 * Possible issue with Calendar
 * https://github.com/vuetifyjs/vuetify/issues/9999
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      code1: {
        html: "<v-row>\n  <v-col>\n    <v-sheet height=\"400\">\n      <v-calendar\n        ref=\"calendar\"\n        :now=\"today\"\n        :value=\"today\"\n        :events=\"events\"\n        color=\"primary\"\n        type=\"week\"\n      ></v-calendar>\n    </v-sheet>\n  </v-col>\n</v-row>",
        js: " export default {\n    data: () => ({\n      today: '2020-01-08',\n      events: [\n        {\n          name: 'Weekly Meeting',\n          start: '2020-01-07 09:00',\n          end: '2020-01-07 10:00',\n        },\n        {\n          name: 'Thomas' Birthday',\n          start: '2020-01-10',\n        },\n        {\n          name: 'Mash Potatoes',\n          start: '2020-01-09 12:30',\n          end: '2020-01-09 15:30',\n        },\n      ],\n    }),\n    mounted () {\n      this.$refs.calendar.scrollToTime('08:00')\n    },\n  }",
        today: "2020-01-08",
        events: [{
          name: "Weekly Meeting",
          start: "2020-01-07 09:00",
          end: "2020-01-07 10:00"
        }, {
          name: "Thomas' Birthday",
          start: "2020-01-10"
        }, {
          name: "Mash Potatoes",
          start: "2020-01-09 12:30",
          end: "2020-01-09 15:30"
        }]
      },
      code2: {
        html: " <v-row>\n  <v-col>\n    <v-sheet height=\"400\">\n      <v-calendar\n        color=\"primary\"\n        type=\"day\"\n      >\n        <template v-slot:day-header=\"{ present }\">\n          <template\n            v-if=\"present\"\n            class=\"text-center\"\n          >\n            Today\n          </template>\n        </template>\n\n        <template v-slot:interval=\"{ hour }\">\n          <div\n            class=\"text-center\"\n          >\n            {{ hour }} o'clock\n          </div>\n        </template>\n      </v-calendar>\n    </v-sheet>\n  </v-col>\n</v-row>"
      },
      code3: {
        html: "<v-row>\n  <v-col>\n    <v-sheet height=\"500\">\n      <v-calendar\n        :now=\"today\"\n        :value=\"today\"\n        color=\"primary\"\n      >\n        <template v-slot:day=\"{ present, past, date }\">\n          <v-row\n            class=\"fill-height\"\n          >\n            <template v-if=\"past && tracked[date]\">\n              <v-sheet\n                v-for=\"(percent, i) in tracked[date]\"\n                :key=\"i\"\n                :title=\"category[i]\"\n                :color=\"colors[i]\"\n                :width=\"`${percent}%`\"\n                height=\"100%\"\n                tile\n              ></v-sheet>\n            </template>\n          </v-row>\n        </template>\n      </v-calendar>\n    </v-sheet>\n  </v-col>\n</v-row>",
        js: " export default {\n  data: () => ({\n    today: '2019-01-10',\n    tracked: {\n      '2019-01-09': [23, 45, 10],\n      '2019-01-08': [10],\n      '2019-01-07': [0, 78, 5],\n      '2019-01-06': [0, 0, 50],\n      '2019-01-05': [0, 10, 23],\n      '2019-01-04': [2, 90],\n      '2019-01-03': [10, 32],\n      '2019-01-02': [80, 10, 10],\n      '2019-01-01': [20, 25, 10],\n    },\n    colors: ['#1867c0', '#fb8c00', '#000000'],\n    category: ['Development', 'Meetings', 'Slacking'],\n  }),\n}",
        today: "2019-01-10",
        tracked: {
          "2019-01-09": [23, 45, 10],
          "2019-01-08": [10],
          "2019-01-07": [0, 78, 5],
          "2019-01-06": [0, 0, 50],
          "2019-01-05": [0, 10, 23],
          "2019-01-04": [2, 90],
          "2019-01-03": [10, 32],
          "2019-01-02": [80, 10, 10],
          "2019-01-01": [20, 25, 10]
        },
        colors: ["#1867c0", "#fb8c00", "#000000"],
        category: ["Development", "Meetings", "Slacking"]
      },
      code4: {
        html: " <v-row class=\"fill-height\">\n  <v-col>\n    <v-sheet height=\"64\">\n      <v-toolbar flat color=\"white\">\n        <v-btn outlined class=\"mr-4\" color=\"grey darken-2\" @click=\"setToday\">\n          Today\n        </v-btn>\n        <v-btn fab text small color=\"grey darken-2\" @click=\"prev\">\n          <v-icon small>mdi-chevron-left</v-icon>\n        </v-btn>\n        <v-btn fab text small color=\"grey darken-2\" @click=\"next\">\n          <v-icon small>mdi-chevron-right</v-icon>\n        </v-btn>\n        <v-toolbar-title>{{ title }}</v-toolbar-title>\n        <v-spacer></v-spacer>\n        <v-menu bottom right>\n          <template v-slot:activator=\"{ on }\">\n            <v-btn\n              outlined\n              color=\"grey darken-2\"\n              v-on=\"on\"\n            >\n              <span>{{ typeToLabel[type] }}</span>\n              <v-icon right>mdi-menu-down</v-icon>\n            </v-btn>\n          </template>\n          <v-list>\n            <v-list-item @click=\"type = 'day'\">\n              <v-list-item-title>Day</v-list-item-title>\n            </v-list-item>\n            <v-list-item @click=\"type = 'week'\">\n              <v-list-item-title>Week</v-list-item-title>\n            </v-list-item>\n            <v-list-item @click=\"type = 'month'\">\n              <v-list-item-title>Month</v-list-item-title>\n            </v-list-item>\n            <v-list-item @click=\"type = '4day'\">\n              <v-list-item-title>4 days</v-list-item-title>\n            </v-list-item>\n          </v-list>\n        </v-menu>\n      </v-toolbar>\n    </v-sheet>\n    <v-sheet height=\"600\">\n      <v-calendar\n        ref=\"calendar\"\n        v-model=\"focus\"\n        color=\"primary\"\n        :events=\"events\"\n        :event-color=\"getEventColor\"\n        :now=\"today\"\n        :type=\"type\"\n        @click:event=\"showEvent\"\n        @click:more=\"viewDay\"\n        @click:date=\"viewDay\"\n        @change=\"updateRange\"\n      ></v-calendar>\n      <v-menu\n        v-model=\"selectedOpen\"\n        :close-on-content-click=\"false\"\n        :activator=\"selectedElement\"\n        offset-x\n      >\n        <v-card\n          color=\"grey lighten-4\"\n          min-width=\"350px\"\n          flat\n        >\n          <v-toolbar\n            :color=\"selectedEvent.color\"\n            dark\n          >\n            <v-btn icon>\n              <v-icon>mdi-pencil</v-icon>\n            </v-btn>\n            <v-toolbar-title v-html=\"selectedEvent.name\"></v-toolbar-title>\n            <v-spacer></v-spacer>\n            <v-btn icon>\n              <v-icon>mdi-heart</v-icon>\n            </v-btn>\n            <v-btn icon>\n              <v-icon>mdi-dots-vertical</v-icon>\n            </v-btn>\n          </v-toolbar>\n          <v-card-text>\n            <span v-html=\"selectedEvent.details\"></span>\n          </v-card-text>\n          <v-card-actions>\n            <v-btn\n              text\n              color=\"secondary\"\n              @click=\"selectedOpen = false\"\n            >\n              Cancel\n            </v-btn>\n          </v-card-actions>\n        </v-card>\n      </v-menu>\n    </v-sheet>\n  </v-col>\n</v-row>",
        js: " export default {\n  data: () => ({\n    focus: '',\n    type: 'month',\n    typeToLabel: {\n      month: 'Month',\n      week: 'Week',\n      day: 'Day',\n      '4day': '4 Days',\n    },\n    start: null,\n    end: null,\n    selectedEvent: {},\n    selectedElement: null,\n    selectedOpen: false,\n    events: [],\n    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],\n    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],\n  }),\n  computed: {\n    title () {\n      const { start, end } = this\n      if (!start || !end) {\n        return ''\n      }\n\n      const startMonth = this.monthFormatter(start)\n      const endMonth = this.monthFormatter(end)\n      const suffixMonth = startMonth === endMonth ? '' : endMonth\n\n      const startYear = start.year\n      const endYear = end.year\n      const suffixYear = startYear === endYear ? '' : endYear\n\n      const startDay = start.day + this.nth(start.day)\n      const endDay = end.day + this.nth(end.day)\n\n      switch (this.type) {\n        case 'month':\n          return `${startMonth} ${startYear}`\n        case 'week':\n        case '4day':\n          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`\n        case 'day':\n          return `${startMonth} ${startDay} ${startYear}`\n      }\n      return ''\n    },\n    monthFormatter () {\n      return this.$refs.calendar.getFormatter({\n        timeZone: 'UTC', month: 'long',\n      })\n    },\n  },\n  mounted () {\n    this.$refs.calendar.checkChange()\n  },\n  methods: {\n    viewDay ({ date }) {\n      this.focus = date\n      this.type = 'day'\n    },\n    getEventColor (event) {\n      return event.color\n    },\n    setToday () {\n      this.focus = this.today\n    },\n    prev () {\n      this.$refs.calendar.prev()\n    },\n    next () {\n      this.$refs.calendar.next()\n    },\n    showEvent ({ nativeEvent, event }) {\n      const open = () => {\n        this.selectedEvent = event\n        this.selectedElement = nativeEvent.target\n        setTimeout(() => this.selectedOpen = true, 10)\n      }\n\n      if (this.selectedOpen) {\n        this.selectedOpen = false\n        setTimeout(open, 10)\n      } else {\n        open()\n      }\n\n      nativeEvent.stopPropagation()\n    },\n    updateRange ({ start, end }) {\n      const events = []\n\n      const min = new Date(`${start.date}T00:00:00`)\n      const max = new Date(`${end.date}T23:59:59`)\n      const days = (max.getTime() - min.getTime()) / 86400000\n      const eventCount = this.rnd(days, days + 20)\n\n      for (let i = 0; i < eventCount; i++) {\n        const allDay = this.rnd(0, 3) === 0\n        const firstTimestamp = this.rnd(min.getTime(), max.getTime())\n        const first = new Date(firstTimestamp - (firstTimestamp % 900000))\n        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000\n        const second = new Date(first.getTime() + secondTimestamp)\n\n        events.push({\n          name: this.names[this.rnd(0, this.names.length - 1)],\n          start: this.formatDate(first, !allDay),\n          end: this.formatDate(second, !allDay),\n          color: this.colors[this.rnd(0, this.colors.length - 1)],\n        })\n      }\n\n      this.start = start\n      this.end = end\n      this.events = events\n    },\n    nth (d) {\n      return d > 3 && d < 21\n        ? 'th'\n        : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]\n    },\n    rnd (a, b) {\n      return Math.floor((b - a + 1) * Math.random()) + a\n    },\n    formatDate (a, withTime) {\n      return withTime\n        ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`\n        : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`\n    },\n  },\n}"
      },
      today: "2020-01-08",
      focus: "",
      type: "month",
      typeToLabel: {
        month: "Month",
        week: "Week",
        day: "Day",
        "4day": "4 Days"
      },
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ["blue", "indigo", "deep-purple", "cyan", "green", "orange", "grey darken-1"],
      names: ["Meeting", "Holiday", "PTO", "Travel", "Event", "Birthday", "Conference", "Party"]
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
      title: "Calendars"
    }]);
    this.$refs.calendar.scrollToTime("08:00");
    this.$refs.calendar2.checkChange();
  },
  computed: {
    title: function title() {
      var start = this.start,
          end = this.end;

      if (!start || !end) {
        return "";
      }

      var startMonth = this.monthFormatter(start);
      var endMonth = this.monthFormatter(end);
      var suffixMonth = startMonth === endMonth ? "" : endMonth;
      var startYear = start.year;
      var endYear = end.year;
      var suffixYear = startYear === endYear ? "" : endYear;
      var startDay = start.day + this.nth(start.day);
      var endDay = end.day + this.nth(end.day);

      switch (this.type) {
        case "month":
          return "".concat(startMonth, " ").concat(startYear);

        case "week":
        case "4day":
          return "".concat(startMonth, " ").concat(startDay, " ").concat(startYear, " - ").concat(suffixMonth, " ").concat(endDay, " ").concat(suffixYear);

        case "day":
          return "".concat(startMonth, " ").concat(startDay, " ").concat(startYear);
      }

      return "";
    },
    monthFormatter: function monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long"
      });
    }
  },
  methods: {
    viewDay: function viewDay(_ref) {
      var date = _ref.date;
      this.focus = date;
      this.type = "day";
    },
    getEventColor: function getEventColor(event) {
      return event.color;
    },
    setToday: function setToday() {
      this.focus = this.today;
    },
    prev: function prev() {
      this.$refs.calendar.prev();
    },
    next: function next() {
      this.$refs.calendar.next();
    },
    showEvent: function showEvent(_ref2) {
      var _this = this;

      var nativeEvent = _ref2.nativeEvent,
          event = _ref2.event;

      var open = function open() {
        _this.selectedEvent = event;
        _this.selectedElement = nativeEvent.target;
        setTimeout(function () {
          return _this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange: function updateRange(_ref3) {
      var start = _ref3.start,
          end = _ref3.end;
      var events = [];
      var min = new Date("".concat(start.date, "T00:00:00"));
      var max = new Date("".concat(end.date, "T23:59:59"));
      var days = (max.getTime() - min.getTime()) / 86400000;
      var eventCount = this.rnd(days, days + 20);

      for (var i = 0; i < eventCount; i++) {
        var allDay = this.rnd(0, 3) === 0;
        var firstTimestamp = this.rnd(min.getTime(), max.getTime());
        var first = new Date(firstTimestamp - firstTimestamp % 900000);
        var secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        var second = new Date(first.getTime() + secondTimestamp);
        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: this.formatDate(first, !allDay),
          end: this.formatDate(second, !allDay),
          color: this.colors[this.rnd(0, this.colors.length - 1)]
        });
      }

      this.start = start;
      this.end = end;
      this.events = events;
    },
    nth: function nth(d) {
      return d > 3 && d < 21 ? "th" : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    },
    rnd: function rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    formatDate: function formatDate(a, withTime) {
      return withTime ? "".concat(a.getFullYear(), "-").concat(a.getMonth() + 1, "-").concat(a.getDate(), " ").concat(a.getHours(), ":").concat(a.getMinutes()) : "".concat(a.getFullYear(), "-").concat(a.getMonth() + 1, "-").concat(a.getDate());
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

/***/ "./resources/js/view/pages/vuetify/Calendars.vue":
/*!*******************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Calendars.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Calendars_vue_vue_type_template_id_73cfe59d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendars.vue?vue&type=template&id=73cfe59d& */ "./resources/js/view/pages/vuetify/Calendars.vue?vue&type=template&id=73cfe59d&");
/* harmony import */ var _Calendars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendars.vue?vue&type=script&lang=js& */ "./resources/js/view/pages/vuetify/Calendars.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Calendars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Calendars_vue_vue_type_template_id_73cfe59d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Calendars_vue_vue_type_template_id_73cfe59d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/vuetify/Calendars.vue"
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

/***/ "./resources/js/view/pages/vuetify/Calendars.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Calendars.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendars.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Calendars.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/view/pages/vuetify/Calendars.vue?vue&type=template&id=73cfe59d&":
/*!**************************************************************************************!*\
  !*** ./resources/js/view/pages/vuetify/Calendars.vue?vue&type=template&id=73cfe59d& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendars_vue_vue_type_template_id_73cfe59d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendars_vue_vue_type_template_id_73cfe59d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendars_vue_vue_type_template_id_73cfe59d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendars.vue?vue&type=template&id=73cfe59d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Calendars.vue?vue&type=template&id=73cfe59d&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Calendars.vue?vue&type=template&id=73cfe59d&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/pages/vuetify/Calendars.vue?vue&type=template&id=73cfe59d& ***!
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
            _c("b", [_vm._v("Calendars")]),
            _vm._v(" The "),
            _c("code", [_vm._v("v-calendar")]),
            _vm._v(
              " component is used to\n      display information in a daily, weekly, or monthly view. The daily view\n      has slots for all day or timed elements, and the weekly and monthly view\n      has a slot for each day. Optionally you can pass in an array of events\n      and they will be rendered over the appropriate days and times.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://vuetifyjs.com/en/components/calendars",
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
              attrs: { title: "Weekly" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            This is an example of an event calendar with all-day and timed\n            events with a type of "
                        ),
                        _c("code", [_vm._v("week")]),
                        _vm._v(".\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c(
                                "v-sheet",
                                { attrs: { height: "400" } },
                                [
                                  _c("v-calendar", {
                                    ref: "calendar",
                                    attrs: {
                                      now: _vm.code1.today,
                                      value: _vm.code1.today,
                                      events: _vm.code1.events,
                                      color: "primary",
                                      type: "week"
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
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Daily" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            This is an example of calendar with content in each interval slot\n            and a type of "
                        ),
                        _c("code", [_vm._v("day")]),
                        _vm._v(".\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c(
                                "v-sheet",
                                { attrs: { height: "400" } },
                                [
                                  _c("v-calendar", {
                                    attrs: { color: "primary", type: "day" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "day-header",
                                        fn: function(ref) {
                                          var present = ref.present
                                          return [
                                            present
                                              ? [
                                                  _vm._v(
                                                    "\n                      Today\n                    "
                                                  )
                                                ]
                                              : _vm._e()
                                          ]
                                        }
                                      },
                                      {
                                        key: "interval",
                                        fn: function(ref) {
                                          var hour = ref.hour
                                          return [
                                            _c(
                                              "div",
                                              { staticClass: "text-center" },
                                              [
                                                _vm._v(
                                                  _vm._s(hour) + " o'clock"
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      }
                                    ])
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
                }
              ])
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Slots" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Slots allow you to define the content for each day, time interval\n            for the daily views, and various labels.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c(
                                "v-sheet",
                                { attrs: { height: "500" } },
                                [
                                  _c("v-calendar", {
                                    attrs: {
                                      now: _vm.code3.today,
                                      value: _vm.code3.today,
                                      color: "primary"
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "day",
                                        fn: function(ref) {
                                          var present = ref.present
                                          var past = ref.past
                                          var date = ref.date
                                          return [
                                            _c(
                                              "v-row",
                                              { staticClass: "fill-height" },
                                              [
                                                past && _vm.code3.tracked[date]
                                                  ? _vm._l(
                                                      _vm.code3.tracked[date],
                                                      function(percent, i) {
                                                        return _c("v-sheet", {
                                                          key: i,
                                                          attrs: {
                                                            title:
                                                              _vm.code3
                                                                .category[i],
                                                            color:
                                                              _vm.code3.colors[
                                                                i
                                                              ],
                                                            width:
                                                              percent + "%",
                                                            height: "100%",
                                                            tile: ""
                                                          }
                                                        })
                                                      }
                                                    )
                                                  : _vm._e()
                                              ],
                                              2
                                            )
                                          ]
                                        }
                                      }
                                    ])
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
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Events" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function() {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            This is an example of a planner with additional event handlers and\n            external components controlling the display of the calendar.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { staticClass: "fill-height" },
                        [
                          _c(
                            "v-col",
                            [
                              _c(
                                "v-sheet",
                                { attrs: { height: "64" } },
                                [
                                  _c(
                                    "v-toolbar",
                                    { attrs: { flat: "", color: "white" } },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "mr-4",
                                          attrs: {
                                            outlined: "",
                                            color: "grey darken-2"
                                          },
                                          on: { click: _vm.setToday }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    Today\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            fab: "",
                                            text: "",
                                            small: "",
                                            color: "grey darken-2"
                                          },
                                          on: { click: _vm.prev }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [_vm._v("mdi-chevron-left")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            fab: "",
                                            text: "",
                                            small: "",
                                            color: "grey darken-2"
                                          },
                                          on: { click: _vm.next }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [_vm._v("mdi-chevron-right")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-toolbar-title", [
                                        _vm._v(_vm._s(_vm.title))
                                      ]),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-menu",
                                        {
                                          attrs: { bottom: "", right: "" },
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
                                                          outlined: "",
                                                          color: "grey darken-2"
                                                        }
                                                      },
                                                      on
                                                    ),
                                                    [
                                                      _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.typeToLabel[
                                                              _vm.type
                                                            ]
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: { right: "" }
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
                                                      _vm.type = "day"
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("v-list-item-title", [
                                                    _vm._v("Day")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                {
                                                  on: {
                                                    click: function($event) {
                                                      _vm.type = "week"
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("v-list-item-title", [
                                                    _vm._v("Week")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                {
                                                  on: {
                                                    click: function($event) {
                                                      _vm.type = "month"
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("v-list-item-title", [
                                                    _vm._v("Month")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                {
                                                  on: {
                                                    click: function($event) {
                                                      _vm.type = "4day"
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("v-list-item-title", [
                                                    _vm._v("4 days")
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
                                "v-sheet",
                                { attrs: { height: "600" } },
                                [
                                  _c("v-calendar", {
                                    ref: "calendar2",
                                    attrs: {
                                      color: "primary",
                                      events: _vm.events,
                                      "event-color": _vm.getEventColor,
                                      now: _vm.today,
                                      type: _vm.type
                                    },
                                    on: {
                                      "click:event": _vm.showEvent,
                                      "click:more": _vm.viewDay,
                                      "click:date": _vm.viewDay,
                                      change: _vm.updateRange
                                    },
                                    model: {
                                      value: _vm.focus,
                                      callback: function($$v) {
                                        _vm.focus = $$v
                                      },
                                      expression: "focus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-menu",
                                    {
                                      attrs: {
                                        "close-on-content-click": false,
                                        activator: _vm.selectedElement,
                                        "offset-x": ""
                                      },
                                      model: {
                                        value: _vm.selectedOpen,
                                        callback: function($$v) {
                                          _vm.selectedOpen = $$v
                                        },
                                        expression: "selectedOpen"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        {
                                          attrs: {
                                            color: "grey lighten-4",
                                            "min-width": "350px",
                                            flat: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "v-toolbar",
                                            {
                                              attrs: {
                                                color: _vm.selectedEvent.color,
                                                dark: ""
                                              }
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                { attrs: { icon: "" } },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-pencil")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-toolbar-title", {
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    _vm.selectedEvent.name
                                                  )
                                                }
                                              }),
                                              _vm._v(" "),
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
                                                    _vm._v("mdi-dots-vertical")
                                                  ])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-card-text", [
                                            _c("span", {
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.selectedEvent.details
                                                )
                                              }
                                            })
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
                                                    color: "secondary"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.selectedOpen = false
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                        Cancel\n                      "
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