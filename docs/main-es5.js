function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/animations.ts":
  /*!***************************!*\
    !*** ./src/animations.ts ***!
    \***************************/

  /*! exports provided: fadeInFadeOut, slideInAnimation, projectSlide */

  /***/
  function srcAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInFadeOut", function () {
      return fadeInFadeOut;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInAnimation", function () {
      return slideInAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "projectSlide", function () {
      return projectSlide;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var fadeInFadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInFadeOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }))])]);
    var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeTransition', [// I know that you can do *=>* here, but doing so breaks the animation on page load for some reason.
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('homePage <=> resumePage, homePage <=> aboutPage, homePage <=> projectsPage, homePage <=> contactPage, resumePage <=> aboutPage, resumePage <=> projectsPage, resumePage <=> contactPage, aboutPage <=> projectsPage, aboutPage <=> contactPage, projectsPage <=> contactPage', [//set up parent container
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'relative',
      height: '100%',
      width: '1000px'
    }), //Set up entering and leaving components
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })]), //Fade out leaving component and fade in entering component
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }))])])])]);
    var projectSlide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('project', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('selectPage <=> projectPage', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'relative',
      height: '100%',
      width: '1000px'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }))], {
      optional: true
    })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), {
      optional: true
    })])]);
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 11,
      vars: 0,
      consts: [["id", "backing"], ["id", "aboutText"], ["id", "benImg", "src", "./assets/benInSuit.png", "alt", "Ben"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hi there, I'm Ben.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I am a student pursuing dual bachelor's degrees in business management and computer science at the University of Georgia. While I am mostly focused on my education at the moment, I also hold a Georgia real estate license and thus work part-time as a real estate agent to help pay for college. In my spare time, I enjoy working on tech-related projects, cooking, learning about software, going to the gym, and playing video games once in a while. (This is by no means an all-inclusive list by the way).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " My musical tastes are generally pretty open as I enjoy most genres, from rock, to jazz, to country, to pop. Lately, I've been especially interested in Japanese orchestral composers such as Joe Jiasashi and Ryuichi Sakamoto. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    margin: 50px;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 50px;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    text-indent: 50px;\r\n    font-family: 'open sans', sans-serif;\r\n    font-size: 17px;\r\n    font-weight: 200;\r\n    color: white;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#backing[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 75px;\r\n    display: inline-flex;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 1000px;\r\n    height: 600px;\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\n\r\n#aboutText[_ngcontent-%COMP%]{\r\n    margin-left: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 75%\r\n}\r\n\r\n#benImg[_ngcontent-%COMP%]{\r\n    margin-right: 50px;\r\n    width: 250px;\r\n    border-radius: 50%;\r\n    box-shadow: 2px 2px 5px black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxucHtcclxuICAgIHRleHQtaW5kZW50OiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiNiYWNraW5ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG59XHJcblxyXG4jYWJvdXRUZXh0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA3NSVcclxufVxyXG5cclxuI2JlbkltZ3tcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _projects_select_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projects/select/select.component */
    "./src/app/projects/select/select.component.ts");
    /* harmony import */


    var _projects_bpoon_bpoon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./projects/bpoon/bpoon.component */
    "./src/app/projects/bpoon/bpoon.component.ts");
    /* harmony import */


    var _projects_spark_spark_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projects/spark/spark.component */
    "./src/app/projects/spark/spark.component.ts");
    /* harmony import */


    var _projects_night_light_night_light_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./projects/night_light/night-light.component */
    "./src/app/projects/night_light/night-light.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_musi2040_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/musi2040-portfolio.component */
    "./src/app/projects/musi2040-portfolio/musi2040-portfolio.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_week2_week2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/week2/week2.component */
    "./src/app/projects/musi2040-portfolio/week2/week2.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p3_p3_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p3/p3.component */
    "./src/app/projects/musi2040-portfolio/p3/p3.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p4_p4_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p4/p4.component */
    "./src/app/projects/musi2040-portfolio/p4/p4.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p5_p5_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p5/p5.component */
    "./src/app/projects/musi2040-portfolio/p5/p5.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p6_p6_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p6/p6.component */
    "./src/app/projects/musi2040-portfolio/p6/p6.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p7_p7_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p7/p7.component */
    "./src/app/projects/musi2040-portfolio/p7/p7.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p8_p8_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p8/p8.component */
    "./src/app/projects/musi2040-portfolio/p8/p8.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p9_p9_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p9/p9.component */
    "./src/app/projects/musi2040-portfolio/p9/p9.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_musi_select_musi_select_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/musi-select/musi-select.component */
    "./src/app/projects/musi2040-portfolio/musi-select/musi-select.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_musical_web_musical_web_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/musical-web/musical-web.component */
    "./src/app/projects/musi2040-portfolio/musical-web/musical-web.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_f2_f2_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/f2/f2.component */
    "./src/app/projects/musi2040-portfolio/f2/f2.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
      data: {
        animation: 'homePage'
      }
    }, {
      path: 'resume',
      component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"],
      data: {
        animation: 'resumePage'
      }
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
      data: {
        animation: 'aboutPage'
      }
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
      data: {
        animation: 'projectsPage'
      },
      children: [{
        path: '',
        redirectTo: 'select',
        pathMatch: 'full'
      }, {
        path: 'select',
        component: _projects_select_select_component__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"],
        data: {
          animation: 'selectPage'
        }
      }, {
        path: 'bpoon',
        component: _projects_bpoon_bpoon_component__WEBPACK_IMPORTED_MODULE_8__["BpoonComponent"],
        data: {
          animation: 'projectPage'
        }
      }, {
        path: 'spark',
        component: _projects_spark_spark_component__WEBPACK_IMPORTED_MODULE_9__["SParkComponent"],
        data: {
          animation: 'projectPage'
        }
      }, {
        path: 'night_light',
        component: _projects_night_light_night_light_component__WEBPACK_IMPORTED_MODULE_10__["NightLightComponent"],
        data: {
          animation: 'projectPage'
        }
      }, {
        path: 'musi2040_portfolio',
        component: _projects_musi2040_portfolio_musi2040_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["MUSI2040PortfolioComponent"],
        children: [{
          path: 'select',
          component: _projects_musi2040_portfolio_musi_select_musi_select_component__WEBPACK_IMPORTED_MODULE_20__["MusiSelectComponent"]
        }, {
          path: 'Music_in_My_Family',
          component: _projects_musi2040_portfolio_week2_week2_component__WEBPACK_IMPORTED_MODULE_12__["Week2Component"]
        }, {
          path: 'P3',
          component: _projects_musi2040_portfolio_p3_p3_component__WEBPACK_IMPORTED_MODULE_13__["P3Component"]
        }, {
          path: 'P4',
          component: _projects_musi2040_portfolio_p4_p4_component__WEBPACK_IMPORTED_MODULE_14__["P4Component"]
        }, {
          path: 'P5',
          component: _projects_musi2040_portfolio_p5_p5_component__WEBPACK_IMPORTED_MODULE_15__["P5Component"]
        }, {
          path: 'P6',
          component: _projects_musi2040_portfolio_p6_p6_component__WEBPACK_IMPORTED_MODULE_16__["P6Component"]
        }, {
          path: 'P7',
          component: _projects_musi2040_portfolio_p7_p7_component__WEBPACK_IMPORTED_MODULE_17__["P7Component"]
        }, {
          path: 'P8',
          component: _projects_musi2040_portfolio_p8_p8_component__WEBPACK_IMPORTED_MODULE_18__["P8Component"]
        }, {
          path: 'P9',
          component: _projects_musi2040_portfolio_p9_p9_component__WEBPACK_IMPORTED_MODULE_19__["P9Component"]
        }, {
          path: 'F1',
          component: _projects_musi2040_portfolio_musical_web_musical_web_component__WEBPACK_IMPORTED_MODULE_21__["MusicalWebComponent"]
        }, {
          path: 'F2',
          component: _projects_musi2040_portfolio_f2_f2_component__WEBPACK_IMPORTED_MODULE_22__["F2Component"]
        }]
      }]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
      data: {
        animation: 'contactPage'
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Bpoon';
      }

      _createClass(AppComponent, [{
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nav-bar");
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"],
      data: {
        animation: []
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          animations: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _projects_bpoon_bpoon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./projects/bpoon/bpoon.component */
    "./src/app/projects/bpoon/bpoon.component.ts");
    /* harmony import */


    var _projects_select_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./projects/select/select.component */
    "./src/app/projects/select/select.component.ts");
    /* harmony import */


    var _projects_spark_spark_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./projects/spark/spark.component */
    "./src/app/projects/spark/spark.component.ts");
    /* harmony import */


    var _projects_night_light_night_light_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./projects/night_light/night-light.component */
    "./src/app/projects/night_light/night-light.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_musi2040_portfolio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/musi2040-portfolio.component */
    "./src/app/projects/musi2040-portfolio/musi2040-portfolio.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_week2_week2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/week2/week2.component */
    "./src/app/projects/musi2040-portfolio/week2/week2.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p3_p3_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p3/p3.component */
    "./src/app/projects/musi2040-portfolio/p3/p3.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p4_p4_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p4/p4.component */
    "./src/app/projects/musi2040-portfolio/p4/p4.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p5_p5_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p5/p5.component */
    "./src/app/projects/musi2040-portfolio/p5/p5.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p6_p6_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p6/p6.component */
    "./src/app/projects/musi2040-portfolio/p6/p6.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p7_p7_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p7/p7.component */
    "./src/app/projects/musi2040-portfolio/p7/p7.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p8_p8_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p8/p8.component */
    "./src/app/projects/musi2040-portfolio/p8/p8.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_p9_p9_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/p9/p9.component */
    "./src/app/projects/musi2040-portfolio/p9/p9.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_musi_select_musi_select_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/musi-select/musi-select.component */
    "./src/app/projects/musi2040-portfolio/musi-select/musi-select.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_musical_web_musical_web_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/musical-web/musical-web.component */
    "./src/app/projects/musi2040-portfolio/musical-web/musical-web.component.ts");
    /* harmony import */


    var _projects_musi2040_portfolio_f2_f2_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./projects/musi2040-portfolio/f2/f2.component */
    "./src/app/projects/musi2040-portfolio/f2/f2.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__["ResumeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _projects_bpoon_bpoon_component__WEBPACK_IMPORTED_MODULE_11__["BpoonComponent"], _projects_select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"], _projects_spark_spark_component__WEBPACK_IMPORTED_MODULE_13__["SParkComponent"], _projects_night_light_night_light_component__WEBPACK_IMPORTED_MODULE_14__["NightLightComponent"], _projects_musi2040_portfolio_musi2040_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["MUSI2040PortfolioComponent"], _projects_musi2040_portfolio_week2_week2_component__WEBPACK_IMPORTED_MODULE_16__["Week2Component"], _projects_musi2040_portfolio_p3_p3_component__WEBPACK_IMPORTED_MODULE_17__["P3Component"], _projects_musi2040_portfolio_p4_p4_component__WEBPACK_IMPORTED_MODULE_18__["P4Component"], _projects_musi2040_portfolio_p5_p5_component__WEBPACK_IMPORTED_MODULE_19__["P5Component"], _projects_musi2040_portfolio_p6_p6_component__WEBPACK_IMPORTED_MODULE_20__["P6Component"], _projects_musi2040_portfolio_p7_p7_component__WEBPACK_IMPORTED_MODULE_21__["P7Component"], _projects_musi2040_portfolio_p8_p8_component__WEBPACK_IMPORTED_MODULE_22__["P8Component"], _projects_musi2040_portfolio_p9_p9_component__WEBPACK_IMPORTED_MODULE_23__["P9Component"], _projects_musi2040_portfolio_musi_select_musi_select_component__WEBPACK_IMPORTED_MODULE_24__["MusiSelectComponent"], _projects_musi2040_portfolio_musical_web_musical_web_component__WEBPACK_IMPORTED_MODULE_25__["MusicalWebComponent"], _projects_musi2040_portfolio_f2_f2_component__WEBPACK_IMPORTED_MODULE_26__["F2Component"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__["ResumeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _projects_bpoon_bpoon_component__WEBPACK_IMPORTED_MODULE_11__["BpoonComponent"], _projects_select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"], _projects_spark_spark_component__WEBPACK_IMPORTED_MODULE_13__["SParkComponent"], _projects_night_light_night_light_component__WEBPACK_IMPORTED_MODULE_14__["NightLightComponent"], _projects_musi2040_portfolio_musi2040_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["MUSI2040PortfolioComponent"], _projects_musi2040_portfolio_week2_week2_component__WEBPACK_IMPORTED_MODULE_16__["Week2Component"], _projects_musi2040_portfolio_p3_p3_component__WEBPACK_IMPORTED_MODULE_17__["P3Component"], _projects_musi2040_portfolio_p4_p4_component__WEBPACK_IMPORTED_MODULE_18__["P4Component"], _projects_musi2040_portfolio_p5_p5_component__WEBPACK_IMPORTED_MODULE_19__["P5Component"], _projects_musi2040_portfolio_p6_p6_component__WEBPACK_IMPORTED_MODULE_20__["P6Component"], _projects_musi2040_portfolio_p7_p7_component__WEBPACK_IMPORTED_MODULE_21__["P7Component"], _projects_musi2040_portfolio_p8_p8_component__WEBPACK_IMPORTED_MODULE_22__["P8Component"], _projects_musi2040_portfolio_p9_p9_component__WEBPACK_IMPORTED_MODULE_23__["P9Component"], _projects_musi2040_portfolio_musi_select_musi_select_component__WEBPACK_IMPORTED_MODULE_24__["MusiSelectComponent"], _projects_musi2040_portfolio_musical_web_musical_web_component__WEBPACK_IMPORTED_MODULE_25__["MusicalWebComponent"], _projects_musi2040_portfolio_f2_f2_component__WEBPACK_IMPORTED_MODULE_26__["F2Component"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 12,
      vars: 0,
      consts: [["id", "backing"], ["id", "message"], ["src", "./assets/LogoWhite.png", "alt", "White Logo"], ["href", "mailto:ben@bpoon.com", "id", "email"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " For inquiries, please feel free to email me at Ben@bpoon.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Alternatively, The button below can also be used to send me an email. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Email Me ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#backing[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 1000px;\r\n    height: 600px;\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    margin-bottom: 25px;\r\n    text-align: center;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 50px;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'open sans', sans-serif;\r\n    width: 500px;\r\n    font-size: 20px;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n\r\n#message[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    margin-bottom: 20px;\r\n    margin-top: 45px;\r\n}\r\n\r\n#email[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    text-align: center;\r\n    margin: 20px;\r\n    color: white;\r\n    border: 2px solid white;\r\n    width: 150px;\r\n    line-height: 50px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 200;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n#email[_ngcontent-%COMP%]:hover{\r\n    transform: translateY(-1px);\r\n    box-shadow: 2px 2px 5px black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNiYWNraW5ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcclxufVxyXG5cclxuaDF7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI21lc3NhZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNtZXNzYWdlIGltZ3tcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxufVxyXG5cclxuI2VtYWlse1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jZW1haWw6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 13,
      vars: 0,
      consts: [["id", "homeContainer"], ["src", "./assets/Logo.png", "alt", "Initial Logo"], ["id", "socials"], ["href", "https://www.linkedin.com/in/benjamin-alex-poon/"], ["src", "./assets/icons/LinkedIn.svg"], ["href", "https://github.com/SuperSkipper"], ["src", "./assets/icons/GitHub.svg"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Benjamin Poon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Student, Designer, Developer, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Real Estate Professional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["img[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin: auto;\r\n    width:250px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    display: block;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 30pt;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    display: block;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 15pt;\r\n}\r\n\r\n#homeContainer[_ngcontent-%COMP%]{\r\n    margin-top: 160px;\r\n    text-align: center;\r\n}\r\n\r\n#socials[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n#socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n}\r\n\r\n#socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-top:30px;\r\n    margin-left:25px;\r\n    margin-right:25px;\r\n    width: 50px;\r\n    height: 50px;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n#socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    transform: translateY(-3px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6MjUwcHg7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBwdDtcclxufVxyXG5oMntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVwdDtcclxufVxyXG5cclxuXHJcbiNob21lQ29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMTYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzb2NpYWxze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc29jaWFscyBhe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuI3NvY2lhbHMgYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDoyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjI1cHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNzb2NpYWxzIGE6aG92ZXIgaW1ne1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG59XHJcbiJdfQ== */"],
      data: {
        animation: []
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css'],
          animations: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../animations */
    "./src/animations.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavBarComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Benjamin Poon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInFadeOut", undefined);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "notSelected": a0,
        "selected": a1
      };
    };

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(router) {
        _classCallCheck(this, NavBarComponent);

        this.router = router;
      }

      _createClass(NavBarComponent, [{
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkHome",
        value: function checkHome() {
          return this.router.url === '/home';
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["nav-bar"]],
      decls: 19,
      vars: 18,
      consts: [["id", "main-container"], ["id", "nav-container"], ["id", "homeContainer", 4, "ngIf"], ["id", "items"], ["routerLink", "../about", "routerLinkActive", "", 3, "ngClass"], ["about", "routerLinkActive"], ["routerLink", "../resume", "routerLinkActive", "", 3, "ngClass"], ["resume", "routerLinkActive"], ["routerLink", "../projects", "routerLinkActive", "", 3, "ngClass"], ["projects", "routerLinkActive"], ["routerLink", "../contact", "routerLinkActive", "", 3, "ngClass"], ["contact", "routerLinkActive"], ["id", "routerDiv"], ["outlet", "outlet"], ["id", "homeContainer"], ["routerLink", "../home", "routerLinkActive", ""], ["home", "routerLinkActive"], ["src", "./assets/Logo.png", "alt", "Initial Logo"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarComponent_div_2_Template, 6, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet", null, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.checkHome());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, !_r1.isActive, _r1.isActive));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, !_r2.isActive, _r2.isActive));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c0, !_r3.isActive, _r3.isActive));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, !_r4.isActive, _r4.isActive));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeTransition", ctx.prepareRoute(_r5));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["button[_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n  box-shadow: none;\r\n}\r\n\r\n#main-container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#nav-container[_ngcontent-%COMP%]{\r\n  margin-top: 35px;\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n#items[_ngcontent-%COMP%]{\r\n  width: 960px;\r\n  border-top: 2px solid black;\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#items[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  border:0;\r\n  margin-left: 50px;\r\n  margin-right: 50px;\r\n  margin-top: 10px;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-size: 25px;\r\n  background: none;\r\n  position: relative;\r\n}\r\n\r\n#homeContainer[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100px;\r\n  height: 0;\r\n}\r\n\r\n#homeContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: absolute;\r\n  left: -850px;\r\n  top: 20px;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n#homeContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  padding-left: 10px;\r\n  width: 30%;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#homeContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n  transform: translateY(-7px);\r\n}\r\n\r\n#homeContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n#routerDiv[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  \r\n}\r\n\r\n.notSelected[_ngcontent-%COMP%]:after {\r\n  background: none repeat scroll 0 0 transparent;\r\n  bottom: 0;\r\n  content: \"\";\r\n  display: block;\r\n  height: 2px;\r\n  left: 50%;\r\n  position: absolute;\r\n  background: black;\r\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\r\n  width: 0;\r\n}\r\n\r\n.notSelected[_ngcontent-%COMP%]:hover:after {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%]:after{\r\n  margin-top: -2px;\r\n  position: absolute;\r\n  content: \"\";\r\n  display: block;\r\n  height: 2px;\r\n  width: 100%;\r\n  left: 0;\r\n  background: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLFNBQVM7RUFDVCxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpREFBaUQ7RUFDakQsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLE9BQU87RUFDUCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbjpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbiNtYWluLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI25hdi1jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI2l0ZW1ze1xyXG4gIHdpZHRoOiA5NjBweDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jaXRlbXMgYnV0dG9ue1xyXG4gIGJvcmRlcjowO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jaG9tZUNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuI2hvbWVDb250YWluZXIgYnV0dG9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtODUwcHg7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4jaG9tZUNvbnRhaW5lciBidXR0b24gaW1ne1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB3aWR0aDogMzAlO1xyXG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNob21lQ29udGFpbmVyIGJ1dHRvbjpob3ZlciBpbWd7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpO1xyXG59XHJcblxyXG4jaG9tZUNvbnRhaW5lciBidXR0b24gcHtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbiNyb3V0ZXJEaXZ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qYm9yZGVyOiAycHggc29saWQgYmxhY2s7Ki9cclxufVxyXG5cclxuLm5vdFNlbGVjdGVkOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xyXG4gIGJvdHRvbTogMDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLm5vdFNlbGVjdGVkOmhvdmVyOmFmdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQ6YWZ0ZXJ7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"],
      data: {
        animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeInFadeOut"], _animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.css'],
          animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeInFadeOut"], _animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/bpoon/bpoon.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/projects/bpoon/bpoon.component.ts ***!
    \***************************************************/

  /*! exports provided: BpoonComponent */

  /***/
  function srcAppProjectsBpoonBpoonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BpoonComponent", function () {
      return BpoonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BpoonComponent = /*#__PURE__*/function () {
      function BpoonComponent() {
        _classCallCheck(this, BpoonComponent);
      }

      _createClass(BpoonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BpoonComponent;
    }();

    BpoonComponent.ɵfac = function BpoonComponent_Factory(t) {
      return new (t || BpoonComponent)();
    };

    BpoonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BpoonComponent,
      selectors: [["app-bpoon"]],
      decls: 18,
      vars: 0,
      consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["href", "https://github.com/SuperSkipper/bpoon.com"], ["src", "./assets/icons/GitHubWhite.svg", "id", "git"], ["id", "mainBody"], ["src", "./assets/bpoon/homePage.PNG", "alt", "homeLogo", 2, "float", "right", "height", "300px", "margin-left", "20px", "box-shadow", "2px 2px 5px black"], ["src", "./assets/bpoon/Code.PNG", "alt", "animation code", 2, "width", "400px", "box-shadow", "2px 2px 5px black", "float", "left", "margin-right", "20px"]],
      template: function BpoonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bpoon.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " The current iteration of my personal website was developed during my spare time over the summer of 2020. It was done in an effort to transition from a WordPress website into something fully-custom that would afford me more control regarging the overall design and content. In addition to simply wanting to do something productive while staying home during the COVID-19 crisis, another goal in the development of this website was to serve as an exercise in familiarizing myself with Google's Angular framework. That being said, this is my first ever website developed with Angular. Eventually, this knowledge will be applied toward learning hybrid app development through the Ionic SDK. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "What I've learned");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Before I started working on this website, I did not have much knowledge beyond basic HTML, CSS, and JavaScript in terms of web development. As the development of this website went on, I began to pick up more and more aspects of both Angular as well as web design in general. With this website being my first project in Angular, I learned most if not all of Angular's fundementals through its creation. Various concepts such as component handling, routing and routing animations, data binding, dependency injection, and so on were completely foreign to me before making this website. Furthermore, creating this current iteration of my personal website has also allowed me to futher refine the modern minimalist aesthetic that I enjoy capturing in my work. The result of this learning is a fully hand-built website that I am truly proud to call my own. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: white;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    color: white;\r\n    font-weight: 200;\r\n    font-size: 50px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    color: white;\r\n    font-weight: 200;\r\n    font-size: 30px;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    margin-left: 30px;\r\n    background: none;\r\n    border: none;\r\n    display: inline-flex;\r\n    align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n   width: 25px;\r\n   height: 25px;\r\n   transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    transform: translateX(-5px);\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n    overflow-y: scroll;\r\n    display: flex;\r\n    padding-right: 20px;\r\n    flex-direction: column;\r\n    margin-top: 50px;\r\n    margin-left: 75px;\r\n    margin-right: 75px;\r\n    max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-indent: 50px;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n\r\n#git[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    float: right;\r\n    margin: 30px;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n#git[_ngcontent-%COMP%]:hover{\r\n    transform: translateY(-5px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvYnBvb24vYnBvb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBYztJQUFkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0dBQ0csV0FBVztHQUNYLFlBQVk7R0FDWiw0QkFBNEI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2Jwb29uL2Jwb29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuYnV0dG9uOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5oMntcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2JhY2sgcHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNiYWNrIGltZ3tcclxuICAgd2lkdGg6IDI1cHg7XHJcbiAgIGhlaWdodDogMjVweDtcclxuICAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2JhY2s6aG92ZXIgaW1ne1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG59XHJcblxyXG4jbWFpbkJvZHl7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDc1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuI21haW5Cb2R5IHB7XHJcbiAgICB0ZXh0LWluZGVudDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNnaXR7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jZ2l0OmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BpoonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bpoon',
          templateUrl: './bpoon.component.html',
          styleUrls: ['./bpoon.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/musi2040-portfolio/f2/f2.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/projects/musi2040-portfolio/f2/f2.component.ts ***!
    \****************************************************************/

  /*! exports provided: F2Component */

  /***/
  function srcAppProjectsMusi2040PortfolioF2F2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F2Component", function () {
      return F2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var F2Component = /*#__PURE__*/function () {
      function F2Component() {
        _classCallCheck(this, F2Component);
      }

      _createClass(F2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return F2Component;
    }();

    F2Component.ɵfac = function F2Component_Factory(t) {
      return new (t || F2Component)();
    };

    F2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: F2Component,
      selectors: [["app-f2"]],
      decls: 55,
      vars: 0,
      consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["id", "mainBody"], ["src", "../../../../assets/musi2040/PotO.jpg", "alt", "movite poster", 2, "float", "right", "height", "300px", "margin-left", "20px", "box-shadow", "2px 2px 5px black"], ["width", "400", "height", "250", "src", "https://www.youtube.com/embed/fvkAM1FOnAk", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 2, "float", "right", "margin-left", "20px", "box-shadow", "2px 2px 5px black"], ["width", "400", "height", "250", "src", "https://www.youtube.com/embed/Zy1lWiHHHFY", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 2, "float", "left", "margin-right", "20px", "box-shadow", "2px 2px 5px black"]],
      template: function F2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Final 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The Phantom of the Opera (2004)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Introduction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " For my final portfolio post, I chose to re-watch and review one of my favorite musical films: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The Phantom of the Opera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ". In my opinion, not only has Andrew Lloyd Webber's vision been excellently adapted to the silver screen, but the music that was presented along with it was also absolutely beautiful. Overall, I was just as impressed watching it now as I was the first time many years ago, if not more so. Overall, I was very happy that I got to watch this again ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Plot Synopsis (Spoilers Obviously)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Our story follows our protagonist Christine Daa\xE9's (Emmy Rossum) experiences as an up-and-coming prima donna at her opera house after the previous one stormed off. The events that follow depict the development of a relationship between Christine and a suitor by the name of Raoul de Chagny (Patrick Wilson). This relationship, however, is complicated by the fact that the titular Phantom of the Opera (Gerard Butler), whom Christine owes her singing skills, is also romantically interested in her. Throughout the film, The Phantom wreaks havoc at the opera house in retribution to both the new theater owners for disobeying his wishes as well as Christine for failing to reciprocate his romantic interest. After attempting to make Christine love him, The Phantom is finally convinced by her at the film's climax to abandon his unrequited love and to leave her and Raoul in peace. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "General Musical Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "iframe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Given that a majority of the dialogue in this production is delivered through song, it should be no surprise that music plays an extremely critical role in the content of this film. Many, if not most of the conversations between characters are actually duets, with the characters taking turns performing the solo sections in a drawn-out form of call and response. There are also monologues that are sung purely in a solo fashion by a single actor however. Additionally, several musical numbers feature and entire choral section. These particular numbers are usually accompanied by a heavily-choreographed mass spectacle. The video to the right displays one of such spectacles, performed to the song ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Masquerade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " It should also be obvious by now that with the significant importance of music to the production, the orchestra also plays an immensely critical role in the story. The most obvious role is the presentation of the various leitmotifs, the most prominent of which is the organ riff that accompanies The Phantom anytime his character appears. Other leitmotif reprises are also used to accent thematic elements of the story as well. The best example of this that I could think of is the downward leap featured most prominently in the first measure of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "All I Ask of You");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " being reprised to represent a longing for love. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Scene Discussion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "iframe", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Without a doubt, let me say here and now that ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "All I Ask of You");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " is my absolute favorite song in the entire film. As such, the scene in which it is sung is the one that I chose to discuss. The context behind it is that The Phantom has just hung one of the stagehands during a performance. As a result of this, Christine and Raoul have escaped onto the roof of the opera house to find solace from danger. The song serves as an affirmation from Raoul that he will be Christine's pillar in her time of need as well as Christine's affirmation of her reciprocated affection for him. Meanwhile, The Phantom looks on in the shadows, simmering in jealousy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " It should be pretty obvious how important the music is in this scene considering that it is entirely delivered in the form of song. The leitmotif mentioned earlier is in full force as the two lovers are longing for a future together. At the beginning of the scene, the timid and subdued playing from the orchestra directly reflects the fact that both of the characters are still in a state of unease. Christine is still not entirely sure that Raoul will be able to offer her the freedom and protection that she desires, and Raoul is not sure whether his affection for Christine is requited. As the song progresses, the increasingly lush and full sound of the orchestra mirrors the growing confidence that the two have for each other as lovers. Finally, the massive swell towards the end conveys the burning passion that the two feel now that they have affirmed each other's desires as they embrace and kiss for the first time. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Final Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " I hope that it was noticable that I actually enjoyed doing a portfolio post for once from the extra level of detail in this post. Like I said in the beginning, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "The Phantom of the Opera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " has always been one of my favorite musicals of all time. I still get goosebumps listening to it sometimes. While the continuity of the story could use some work at some parts, the thematic elements are all there and make this production immensely satisfying to watch. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["#back[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-left: 30px;\r\n  background: none;\r\n  border: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n   transform: translateX(-5px);\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  padding-right: 20px;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-indent: 50px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL2YyL2YyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0dBQ0csMkJBQTJCO0FBQzlCOztBQUFDO0VBQ0MsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFjO0VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9tdXNpMjA0MC1wb3J0Zm9saW8vZjIvZjIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNre1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2JhY2sgcHtcclxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jYmFjayBpbWd7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNiYWNrOmhvdmVyIGltZ3tcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG59Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI21haW5Cb2R5e1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNzVweDtcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuI21haW5Cb2R5IHB7XHJcbiAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](F2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-f2',
          templateUrl: './f2.component.html',
          styleUrls: ['./f2.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/musi2040-portfolio/musi-select/musi-select.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/projects/musi2040-portfolio/musi-select/musi-select.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: MusiSelectComponent */

  /***/
  function srcAppProjectsMusi2040PortfolioMusiSelectMusiSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MusiSelectComponent", function () {
      return MusiSelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MusiSelectComponent = /*#__PURE__*/function () {
      function MusiSelectComponent() {
        _classCallCheck(this, MusiSelectComponent);
      }

      _createClass(MusiSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MusiSelectComponent;
    }();

    MusiSelectComponent.ɵfac = function MusiSelectComponent_Factory(t) {
      return new (t || MusiSelectComponent)();
    };

    MusiSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MusiSelectComponent,
      selectors: [["app-musi-select"]],
      decls: 61,
      vars: 0,
      consts: [["id", "title"], ["id", "mainBody"], ["routerLink", "../../../about", 1, "project"], ["src", "./assets/icons/chevron-right.svg", "alt", "Chevron", 1, "arrow"], ["routerLink", "../Music_in_My_Family", 1, "project"], ["routerLink", "../P3", 1, "project"], ["routerLink", "../P4", 1, "project"], ["routerLink", "../P5", 1, "project"], ["routerLink", "../P6", 1, "project"], ["routerLink", "../P7", 1, "project"], ["routerLink", "../P8", 1, "project"], ["routerLink", "../P9", 1, "project"], ["routerLink", "../F1", 1, "project"], ["routerLink", "../F2", 1, "projectLast"]],
      template: function MusiSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ben's MUSI 2040 Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Portfolio 1: Introduction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Portfolio 2: Music in My Family");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Portfolio 3: Ma Rainey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Portfolio 4: Blind Willie Johnson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Portfolio 5: Film Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Portfolio 6: African American Performers in Minstrelsy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Portfolio 7: Film Review (Again)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Portfolio 8: Film Review (A Third Time)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Portfolio 9: The Final Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Final 1: Musical Web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Final 2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "The Phantom of the Opera (2004)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\n[_nghost-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  background: none;\r\n  border: none;\r\n  text-align: left;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n  box-shadow: none;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n  overflow-y: scroll;\r\n  max-height: 500px;\r\n}\r\n\r\n#container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  margin-top: 50px;\r\n  margin-left: 50px;\r\n  margin-bottom: 25px;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-size: 50px;\r\n  font-weight: 200;\r\n  color: white;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  border-bottom: 1px solid white;\r\n  transition: .25s ease-in-out;\r\n  padding-bottom: 20px;\r\n  padding-top: 20px;\r\n}\r\n\r\n.projectImg[_ngcontent-%COMP%]{\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  transition: .25s ease-in-out;\r\n  }\r\n\r\n.project[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{\r\ntransform: translateX(5px);\r\n}\r\n\r\n.project[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{\r\n  margin-left: auto;\r\n  order: 2;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{\r\n  transform: translateX(5px);\r\n}\r\n\r\n.project[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 20pt;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 15pt;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-top: 20px;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 20pt;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 15pt;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{\r\n  margin-left: auto;\r\n  order: 2;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{\r\n  transform: translateX(5px);\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{\r\n  transform: translateX(5px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL211c2ktc2VsZWN0L211c2ktc2VsZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQWM7RUFBZCxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCOztBQUVGO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9tdXNpMjA0MC1wb3J0Zm9saW8vbXVzaS1zZWxlY3QvbXVzaS1zZWxlY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcbjpob3N0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuYnV0dG9uOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuI21haW5Cb2R5e1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4jY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI3RpdGxle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jdGl0bGUgaDF7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvamVjdHtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdEltZ3tcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdCBkaXZ7XHJcbiAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4ucHJvamVjdDpob3ZlciBkaXZ7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG59XHJcblxyXG4ucHJvamVjdCAuYXJyb3d7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgb3JkZXI6IDI7XHJcbiAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnByb2plY3Q6aG92ZXIgLmFycm93e1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG59XHJcblxyXG4ucHJvamVjdCBkaXYgaDF7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0IGRpdiBoMntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAxNXB0O1xyXG59XHJcblxyXG4ucHJvamVjdExhc3R7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0TGFzdCBoMXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBwdDtcclxufVxyXG5cclxuLnByb2plY3RMYXN0IGgye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0TGFzdCAuYXJyb3d7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgb3JkZXI6IDI7XHJcbiAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnByb2plY3RMYXN0IGRpdntcclxuICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ucHJvamVjdExhc3Q6aG92ZXIgZGl2e1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG59XHJcblxyXG4ucHJvamVjdExhc3Q6aG92ZXIgLmFycm93e1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MusiSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-musi-select',
          templateUrl: './musi-select.component.html',
          styleUrls: ['./musi-select.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/musi2040-portfolio/musi2040-portfolio.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/projects/musi2040-portfolio/musi2040-portfolio.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: MUSI2040PortfolioComponent */

  /***/
  function srcAppProjectsMusi2040PortfolioMusi2040PortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MUSI2040PortfolioComponent", function () {
      return MUSI2040PortfolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MUSI2040PortfolioComponent = /*#__PURE__*/function () {
      function MUSI2040PortfolioComponent(router) {
        _classCallCheck(this, MUSI2040PortfolioComponent);

        this.router = router;
      }

      _createClass(MUSI2040PortfolioComponent, [{
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MUSI2040PortfolioComponent;
    }();

    MUSI2040PortfolioComponent.ɵfac = function MUSI2040PortfolioComponent_Factory(t) {
      return new (t || MUSI2040PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    MUSI2040PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MUSI2040PortfolioComponent,
      selectors: [["app-musi2040-portfolio"]],
      decls: 4,
      vars: 1,
      consts: [["id", "backing"], ["id", "routerDiv"], ["outlet", "outlet"]],
      template: function MUSI2040PortfolioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@project", ctx.prepareRoute(_r0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL211c2kyMDQwLXBvcnRmb2xpby9tdXNpMjA0MC1wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MUSI2040PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-musi2040-portfolio',
          templateUrl: './musi2040-portfolio.component.html',
          styleUrls: ['./musi2040-portfolio.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/musi2040-portfolio/musical-web/musical-web.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/projects/musi2040-portfolio/musical-web/musical-web.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: MusicalWebComponent */

  /***/
  function srcAppProjectsMusi2040PortfolioMusicalWebMusicalWebComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MusicalWebComponent", function () {
      return MusicalWebComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MusicalWebComponent = /*#__PURE__*/function () {
      function MusicalWebComponent() {
        _classCallCheck(this, MusicalWebComponent);
      }

      _createClass(MusicalWebComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MusicalWebComponent;
    }();

    MusicalWebComponent.ɵfac = function MusicalWebComponent_Factory(t) {
      return new (t || MusicalWebComponent)();
    };

    MusicalWebComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MusicalWebComponent,
      selectors: [["app-musical-web"]],
      decls: 41,
      vars: 0,
      consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["id", "mainBody"]],
      template: function MusicalWebComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Final 1: Musical Web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Maple Leaf Rag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Looking back at this listening log, while I was indeed familiar with the piece at the beginning of the course, there were definitely some new things that I recognized after listening to it again. For example, I never knew of Joplin's specification for it to be intentionally played at a moderate tempo. I've basically always played it as fast as I could, so I've definitely gained a new appreciation for playing it more slowly. As this rag is part of a genre that is the precursor to many of the other music featured throughout this course, I'd say that there are very many intersections to be found here. Particularly noticeable to me was its energetic bassline that was later reflected in much of jazz. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Walk This Way");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Personally, after having gone back to this song, I have to say that I don't quite understand why it was introduced so early into the course. With this song being a fusion between rock and hip hop, I personally think it would have been more prudent to introduce this after the context of jazz. Especially with the rock aspects of the song, I think it would have been nice to get to know the roots of some of its riffs before getting introduced to it. As far as this song's place in the musical web is concerned, I'd say that while its inspiration is derived from a multitude of the genres covered in the course, its relatively late release date makes its impact on the other songs featured in the course somewhat minimal. Overall, I'd say that this song very much belongs in Candelaria's popular \"stream\". It essentially took the mass appeal of both rock and hip hop and was able to draw an audience out of both crowds. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "The Yankee Doodle Boy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " I think that this listening log was definitely enhanced by Album 6, where band music is introduced. In general, I'd definitely say that the I noticed aspects of march and by extension, field music scattered throughout the instrumental sections of the piece. Some prominent examples of this include martial drumming and the inclusion of the fife in the instrumental sections. This song also shares many inspirational connections with other music. The most obvious of these are the direct references to these pieces through either verbal or acoustic means. Perhaps the most obvious example of this is the reference to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Yankee Doodle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " in both the song's name as well as the tune. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Give the World a Smile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " When I was listening to this song writing my listening log, I focused almost exclusively on the vocals. While the vocals do have a dominating presence in the song, the instrumentation definitely still plays a part. After listening to it again for this assignment, I came to realize that I had basically tuned out the guitar and I wasn't even aware that the piano was a part of the song in the past. Unlike the previous songs that were mentioned so far, I personally don't think that there are very many connections with other pieces featured in the class. Of course, there was a connection to other gospel music and gospel's roots in folk music, but from what I know, the song seems to be more of a musical island than the others. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "KoKo (Charlie Parker & Dizzy Gillespie)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " The cool thing with bebop is that there is usually always something new that you pick up as you give the song more successive listens. That was absolutely the case even as I listen to it again now. I absolutely didn't realize that there were parts in the performance that were even repeated until now. The very abrupt stop at the end for example, actually occurs towards the very beginning as well. Overall, I feel like KoKo very much belongs in the popular music stream. With its origins as a bebop song being firmly rooted in the realms of jazz and blues, it's no surprise that KoKo makes references to other jazz pieces. The principal amongst these jazz pieces is Ray Noble's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cherokee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ", of which the chords of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "KoKo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " are based off of. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["#back[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-left: 30px;\r\n  background: none;\r\n  border: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n   transform: translateX(-5px);\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  padding-right: 20px;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-indent: 50px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL211c2ljYWwtd2ViL211c2ljYWwtd2ViLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0dBQ0csMkJBQTJCO0FBQzlCOztBQUFDO0VBQ0MsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFjO0VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9tdXNpMjA0MC1wb3J0Zm9saW8vbXVzaWNhbC13ZWIvbXVzaWNhbC13ZWIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNre1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2JhY2sgcHtcclxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jYmFjayBpbWd7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNiYWNrOmhvdmVyIGltZ3tcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG59Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI21haW5Cb2R5e1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNzVweDtcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuI21haW5Cb2R5IHB7XHJcbiAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MusicalWebComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-musical-web',
          templateUrl: './musical-web.component.html',
          styleUrls: ['./musical-web.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/musi2040-portfolio/p3/p3.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/projects/musi2040-portfolio/p3/p3.component.ts ***!
    \****************************************************************/

  /*! exports provided: P3Component */

  /***/
  function srcAppProjectsMusi2040PortfolioP3P3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P3Component", function () {
      return P3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var P3Component = /*#__PURE__*/function () {
      function P3Component() {
        _classCallCheck(this, P3Component);
      }

      _createClass(P3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return P3Component;
    }();

    P3Component.ɵfac = function P3Component_Factory(t) {
      return new (t || P3Component)();
    };

    P3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: P3Component,
      selectors: [["app-p3"]],
      decls: 28,
      vars: 0,
      consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["id", "mainBody"], ["src", "..\\..\\..\\assets\\musi2040\\MaRainey.png", "alt", "Ma Rainey", 2, "float", "right", "height", "300px", "margin-left", "20px", "box-shadow", "2px 2px 5px black"], ["src", "https://open.spotify.com/embed/track/2hbxUOhbVyqxIoLxk2AM0c", "width", "50%", "height", "80", "frameBorder", "0", "allowtransparency", "true", "allow", "encrypted-media", 2, "box-shadow", "2px 2px 5px black"], ["src", "https://open.spotify.com/embed/track/3KuHKNc4l0ryqWuglWAYrG", "width", "50%", "height", "80", "frameBorder", "0", "allowtransparency", "true", "allow", "encrypted-media", 2, "box-shadow", "2px 2px 5px black"], [2, "text-indent", "0px"]],
      template: function P3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Portfolio 3: Ma Rainey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Gertrude Pridget was a quintessential figure in the world of blues, cerdited with helping to develop the genre into the incarnation that we know today. Born into a poor family in Columbus, Georgia, Pridget started her early career at the age of 14 by performing in minstrel acts before moving on to singing in traveling vaudeville performances. Through her travels within these performances, she met Willian \"Pa\" Rainey, who would eventually go on to become her husband. This is also when Pridget, now Rainey, took up the stage Name \"Ma\" in conjuction with William's \"Pa\". She would perform with Pa as a duo act for about a decade before the two separated. During her career as a singer, she became one of the first females to record blues professionally. Renouned for her strong \"moaning\" style of singing, she would very regularly sell out theaters and draw huge crowds of both White and African American attendees. Lyrically, much of her music were written to reflect the hardships faced by a woman living in her age. Rainey would later go on to associate with Paramount and perform with \"some of the finest musicians of the day\". Sadly, she passed away on December 22nd, 1939 due to heart complications. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Countin\u2019 the Blues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "iframe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Being one of the pieces introduced in the book, Countin' the Blues is a very \"by-the-books\" blues song by modern day standards. It is performed in the 12-bar format and follows the AAB format very rigidly. Every stanza of the piece features prominent vocals in the first two verses, which are then decorated at the end by a cornet on the third. In a sense, even the rhyme scheme follows this pattern, with the last words of the first two verses of every stanza being the same and then last word of the third being different, but still rhyming with the first two. Overall, the piece evokes a melancholic mood as the instruments languish behind Ma's singing. Lyrically, the piece seems to fuse parts of gospel music into its roots as a blues composition, with many verses addressing \"Lord\" in a manner not unlike praying. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Black Eye Blues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "iframe", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Following very closely to Ma's modus operandi when it comes to writing her lyrics, the focus of this piece is on a woman stuck in an abusive relationship with her husband. The piece simultaneously puts emphasis on the protagonist's strength by later focusing on her plotting to eventualy catch her man with his \"britches down\", showing that she is not just idly allowing him to abuse her. The song seems to be sung in Rainey's signature \"moaning\" style and also seems to utilize the classic 12-bar blues pattern of composition. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Works Cited ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Orr, N. L.. \"Gertrude \"Ma\" Rainey (1886-1939).\" New Georgia Encyclopedia. 08 April 2021. Web. 01 July 2021. Brandman, Mariana. \u201CGertrude \u2018Ma\u2019 Rainey.\u201D National Women\u2019s History Museum, Web. 01 July 2021. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["#back[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-left: 30px;\r\n  background: none;\r\n  border: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n   transform: translateX(-5px);\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  padding-right: 20px;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-indent: 50px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL3AzL3AzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0dBQ0csMkJBQTJCO0FBQzlCOztBQUFDO0VBQ0MsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFjO0VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9tdXNpMjA0MC1wb3J0Zm9saW8vcDMvcDMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNre1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2JhY2sgcHtcclxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jYmFjayBpbWd7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNiYWNrOmhvdmVyIGltZ3tcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG59Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI21haW5Cb2R5e1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNzVweDtcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuI21haW5Cb2R5IHB7XHJcbiAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-p3',
          templateUrl: './p3.component.html',
          styleUrls: ['./p3.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/musi2040-portfolio/p4/p4.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/projects/musi2040-portfolio/p4/p4.component.ts ***!
    \****************************************************************/

  /*! exports provided: P4Component */

  /***/
  function srcAppProjectsMusi2040PortfolioP4P4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P4Component", function () {
      return P4Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var P4Component = /*#__PURE__*/function () {
      function P4Component() {
        _classCallCheck(this, P4Component);
      }

      _createClass(P4Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return P4Component;
    }();

    P4Component.ɵfac = function P4Component_Factory(t) {
      return new (t || P4Component)();
    };

    P4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: P4Component,
      selectors: [["app-p4"]],
      decls: 34,
      vars: 0,
      consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["id", "mainBody"], ["src", "..\\..\\..\\assets\\musi2040\\blindWillieJohnson.jpg", "alt", "Ma Rainey", 2, "float", "right", "height", "300px", "margin-left", "20px", "box-shadow", "2px 2px 5px black"], ["src", "https://open.spotify.com/embed/track/2P9nh9pTK96dE0b6NBbTSs", "width", "50%", "height", "80", "frameBorder", "0", "allowtransparency", "true", "allow", "encrypted-media", 2, "box-shadow", "2px 2px 5px black"], ["src", "https://open.spotify.com/embed/track/5UEsyERm7tsNvDDZFylZZf", "width", "50%", "height", "80", "frameBorder", "0", "allowtransparency", "true", "allow", "encrypted-media", 2, "box-shadow", "2px 2px 5px black"], [2, "text-indent", "0px"]],
      template: function P4Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Portfolio 4: Blind Willie Johnson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Blind Willie Johnson was an artist very much known for his slide guitar (though he often played with a pocket knife rather than a bottleneck) and his fusion of gospel and blues. In fact, he was one of the most primere performers of gospel blues to have ever existed. So influential was he, that his work ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dark Was the Night, Cold Was the Ground");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " was one of the songs chosen to be enscribed on the the Voyager Golden Records as a representation of human culture on Earth.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Born in a small town just south of Waco, Texas, Johnson lost his birth mother at a very young age. His blindness was later inflicted by a stray lye bottle thrown by his mother-in-law meant for his dad. Due to this blindness, Johnson mostly relied on play music in the streets to earn money. During this time, he played mostly blues before later moving onto gospel as his religious affiliations deepened. Later, Johnson went on to record multiple records with his wife Angeline at Columbia Records and became one of their best-selling race recording artists. After leaving the recording industry in 1930, Johnson continued performing on the streets of Texas before unfortunately succumbing to pneumonia shortly after his house burned down in 1947. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Dark Was the Night, Cold Was the Ground");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "iframe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " This is the fabled song that is now on the payload of both Voyager 1 as well as Voyager 2. The piece itself contains both vocal as well as instrumental sections, but there are no descernable spoken words during any part of the performance. With both its name and its structure beign derived from the English hymn Gethsemane, the song's mournful and languishing moaning featured throughout was meant to draw a powerful image of Christ's grief and sorrow during the eve prior to his Crucifixion. This mood is even further expressed through the inclusion of various blues practices such as note-bending. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "The Soul of a Man");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "iframe", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " The Soul of a Man was performed as a duo between Johnson and Willie B. Harris, with Harris singing the harmony during the refrains. The song itself questions the spiritual nature of Man's soul. It captures and ponders this idea around a tune that is distinctly blues-like in its composition. These factors may have been influenced by the Great Depression, which had gripped the American populace prior to its publishing. Like many of his other works, the only other instrumentation beyond vocals is a guitar playing harmony throughout the piece. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Works Cited ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Layne, Joslyn \"Blind Willie Johnson.\" AllMusic. 08 April 2021. Web. 01 July 2021. Britannica, The Editors of Encyclopaedia. \"Blind Willie Johnson\". Encyclopedia Britannica, 18 Jan. 2021, https://www.britannica.com/biography/Blind-Willie-Johnson. Accessed 5 July 2021. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["#back[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-left: 30px;\r\n  background: none;\r\n  border: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n   transform: translateX(-5px);\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  padding-right: 20px;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-indent: 50px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL3A0L3A0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0dBQ0csMkJBQTJCO0FBQzlCOztBQUFDO0VBQ0MsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFjO0VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9tdXNpMjA0MC1wb3J0Zm9saW8vcDQvcDQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNre1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2JhY2sgcHtcclxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jYmFjayBpbWd7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNiYWNrOmhvdmVyIGltZ3tcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG59Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI21haW5Cb2R5e1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNzVweDtcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuI21haW5Cb2R5IHB7XHJcbiAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-p4',
          templateUrl: './p4.component.html',
          styleUrls: ['./p4.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/musi2040-portfolio/p5/p5.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/projects/musi2040-portfolio/p5/p5.component.ts ***!
    \****************************************************************/

  /*! exports provided: P5Component */

  /***/
  function srcAppProjectsMusi2040PortfolioP5P5ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P5Component", function () {
      return P5Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var P5Component = /*#__PURE__*/function () {
      function P5Component() {
        _classCallCheck(this, P5Component);
      }

      _createClass(P5Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return P5Component;
    }();

    P5Component.ɵfac = function P5Component_Factory(t) {
      return new (t || P5Component)();
    };

    P5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: P5Component,
      selectors: [["app-p5"]],
      decls: 24,
      vars: 0,
      consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["id", "mainBody"]],
      template: function P5Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Portfolio 5: Film Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The film ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Amazing Grace: The Story of a Song That Makes a Difference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " depicts several individuals along with the impact that the Song ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Amazing Grace");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " has brought to their lives. A selection of these individuals include singers Johnny Cash, Judy Collins, and even some prison inmates. Additionally, a brief history of the tune is also covered within the film. With its words written in 1772 by clergyman John Newton, the song itself is a slow, methodical piece that can be sung in either a monophonicor a polyphonic manner. The nature of the piece allows for a variety of interperetations. The film showcases several renditions ranging from solo performances, to a vocal performance accompanied by a guitar, to full choral performances. Naturally then, each rendition also has their own individual idiosyncracies. Judy Collins' rendition, for example, features extremely drawn-out notes with vigorous vocal vibrato. Johnny Cash's performance on the other hand, was comparatively more brisk and featured more pronounced pauses. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " This will by no means be a complete list, but some of the locations featured within the film included Philidelphia, Kentucky, Texas, Alabama, Missisippi, New York City, and even London. While much of the venues were cathedrals or churches, some other more uncommon ones included a prison, a backyard, a school, and even a graveyard. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Over time, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Amazing Grace");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " has also experienced various changes. As previously mentioned, the nature of the song allowed for a variety of interperetations to develop according to each individuals performer's preferences. As a result, the song has been adapted to a variety of situations and time periods. When the hymn was first created, for example, the entire song was sung without any vocal portamento or vibrato. As time went on, both of those became more and more commonly- practiced. The same could be said about instrumental accompaniment, as the piece was originally indended to be sung a capella. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Finally, I think what stood out to me the most about the film was the versatility of the song. Prior to watching the film, I never really considered all of the situations and circumstances during which the could be/is used. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["#back[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-left: 30px;\r\n  background: none;\r\n  border: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n   transform: translateX(-5px);\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  padding-right: 20px;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-indent: 50px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL3A1L3A1LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0dBQ0csMkJBQTJCO0FBQzlCOztBQUFDO0VBQ0MsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFjO0VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9tdXNpMjA0MC1wb3J0Zm9saW8vcDUvcDUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNre1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2JhY2sgcHtcclxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jYmFjayBpbWd7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNiYWNrOmhvdmVyIGltZ3tcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG59Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI21haW5Cb2R5e1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNzVweDtcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuI21haW5Cb2R5IHB7XHJcbiAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-p5',
          templateUrl: './p5.component.html',
          styleUrls: ['./p5.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/musi2040-portfolio/p6/p6.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/projects/musi2040-portfolio/p6/p6.component.ts ***!
    \****************************************************************/

  /*! exports provided: P6Component */

  /***/
  function srcAppProjectsMusi2040PortfolioP6P6ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P6Component", function () {
      return P6Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var P6Component = /*#__PURE__*/function () {
      function P6Component() {
        _classCallCheck(this, P6Component);
      }

      _createClass(P6Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return P6Component;
    }();

    P6Component.ɵfac = function P6Component_Factory(t) {
      return new (t || P6Component)();
    };

    P6Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: P6Component,
      selectors: [["app-p6"]],
      decls: 34,
      vars: 0,
      consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["id", "mainBody"]],
      template: function P6Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Portfolio 6: African American Performers in Minstrelsy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " During the course of module 5, one particular not-so-covered topic that stood out to me were the African American performers in minstrel shows. More specifically, I was interested in learning about their motives in performing in shows that were meant to denigrate their own race. This interest was what served as the inspiration for this portfolio post. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pre-Civil War");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Prior to the civil war, there were only two known minstrelsy performers that were African American. These two individuals were William Henry Lane and Thomas Dilward. Overall, documentation on these individuals seemed to be somewhate sparse at best. Thomas Dilward was said to have been an excelent singer, dancer, actor, and violinist. He was also born with dwarfism, which severely hindered him from performing tasks that were typically expected of someone of his skin color back in the day. As such, he came to primarily rely on entertainment to support himself. On stage, however, Dilward's disability actually served as an advantage, getting him into minstrel troupes that ironically would otherwise never allow Black performers join. Due to both his dwarfism as well as his abilities, it was likely that the reason Dilward chose to perform in minstrels was purely for the sake of supporting himself. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " William Henry Lane, on the other hand, was even less well-documented. In fact, even his name is up for speculation, as he primarily went by the name of Master Juba. His motivations for performing in minstrels seem to have been due to his affinity for dance. In that sense, he competed and won against even the very best white minstrel dancers at the time. He would later go on to become extremely successful in the European circuit. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Post-Civil War");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " After the Civil War, more and more exclusively black minstrel troupes began to appear. These groups of performers often touted that their performances were authentic in comparison to their white minstrel counterparts. In fact, many of the African American minstrel troupes included the word \"Georgia\" in their name in an effort to convey to their audience that their performers were genuine slaves prior to the Civil War. Meanwhile, the primary motivator for these performers seems to also have been for the purposes of self-sustinance, as black minstrels usually paid better than most other occupations that were available to them at the time. Additionally though, many African American minstrel shows also subtly subverted black sterotypes while also making fun of aspects of white culture. Though the real reason is still debated by historians, this may also have contributed to the comparatively large crowds of African American audiences that Georgia Minstrels commonly drew. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Works Cited");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blumberg, Naomi and Yalzadeh, Ida. \"Master Juba\". Encyclopedia Britannica, 1 Jan. 2021, https://www.britannica.com/topic/Master-Juba. Accessed 19 July 2021.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Andrew Kuntz, \"Fiddle Tune History -- Minstrel Tales: Picayune Butler and Japanese Tommy 'Hunky Dory!'\", Fiddler Magazine, May 24, 2012.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Alexander,\xA0Michelle.\xA0The New Jim Crow.\xA0United States,\xA0New Press,\xA02011.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Toll, Robert C. (1974), Blacking Up: The Minstrel Show in Nineteenth-century America, New York: Oxford University Press");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["#back[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-left: 30px;\r\n  background: none;\r\n  border: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n   transform: translateX(-5px);\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  padding-right: 20px;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-indent: 50px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  color: white;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  padding-left: 22px ;\r\n  text-indent: -22px ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL3A2L3A2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0dBQ0csMkJBQTJCO0FBQzlCOztBQUFDO0VBQ0MsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFjO0VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL3A2L3A2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja3tcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNiYWNrIHB7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2JhY2sgaW1ne1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jYmFjazpob3ZlciBpbWd7XHJcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcclxufTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG5oMXtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5oMntcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNtYWluQm9keXtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogNzVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDc1cHg7XHJcbiAgbWF4LWhlaWdodDogNTUwcHg7XHJcbn1cclxuXHJcbiNtYWluQm9keSBwe1xyXG4gIHRleHQtaW5kZW50OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI21haW5Cb2R5IGRpdiBwe1xyXG4gIHBhZGRpbmctbGVmdDogMjJweCA7XHJcbiAgdGV4dC1pbmRlbnQ6IC0yMnB4IDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P6Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-p6',
          templateUrl: './p6.component.html',
          styleUrls: ['./p6.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/musi2040-portfolio/p7/p7.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/projects/musi2040-portfolio/p7/p7.component.ts ***!
    \****************************************************************/

  /*! exports provided: P7Component */

  /***/
  function srcAppProjectsMusi2040PortfolioP7P7ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P7Component", function () {
      return P7Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var P7Component = /*#__PURE__*/function () {
      function P7Component() {
        _classCallCheck(this, P7Component);
      }

      _createClass(P7Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return P7Component;
    }();

    P7Component.ɵfac = function P7Component_Factory(t) {
      return new (t || P7Component)();
    };

    P7Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: P7Component,
      selectors: [["app-p7"]],
      decls: 20,
      vars: 0,
      consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["id", "mainBody"]],
      template: function P7Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Portfolio 7: Film Review (Again)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Soundtrack for a Revolution");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " is a documentary by Bill Guttentag and Dan Sturman about the civil rights era in the United States with an emphasis on the music sung at the time. The film follows various civil rights experts and activists as they recount the history of the civil rights movement with a musical context. Additionally, the film also features artists John Legend, Wyclef Jean, The Roots, Joss Stone, Blind Boys of Alabama, Mary Mary, Richie Heavens, Anthony Hamilton, and Angie Stone. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Being a film about music during the civil rights movement, it should not be surprising that all of the featured songs are, or are derived from, protest songs. As such, much of the film's music share similar characteristics. For example, true to their name, many of the protest songs were sung during protests. More specifically, they were sung during protests as a means to help protesters stay strong in the face of adversity. Therefore, content-wise, many of the songs featured within the film revolve around the themes of hope and solidarity. Additionally, due to the circumstances under which these songs were sung (in jails and public spaces not meant for music), many of them were sung monophonically in a somewhat impromptu manner by the protesters with no accompaniment of any kind. The exception to this was when the featured artists were depicted performing within a studio setting. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " When looking at how the music featured in the film has changed over time, the foremost important aspect to recognize is its change in purpose. Like mentioned previously, during the days of the civil rights era, these pieces were performed primarily to inspire strength and perserverance within its performers. In modern times, however, these types of songs are sung in an effort to inspire rememberance of the suffering endured by those in the past. The result of this shift in purpose is that the songs have adopted a more somber tone in the recent years in comparison with the past. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " I'm not sure if this counts, but when I was watching the film, one thing that really stood out to me was the sheer number of scenes that featured the modern artists with no musical context regarding how it related to the topic being discussed. To me, this seemed a bit irrelevant, as I didn't quite understand how those tied into the story that the film was trying to convey. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["#back[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-left: 30px;\r\n  background: none;\r\n  border: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n   transform: translateX(-5px);\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  padding-right: 20px;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-indent: 50px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL3A3L3A3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0dBQ0csMkJBQTJCO0FBQzlCOztBQUFDO0VBQ0MsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFjO0VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9tdXNpMjA0MC1wb3J0Zm9saW8vcDcvcDcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNre1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2JhY2sgcHtcclxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jYmFjayBpbWd7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNiYWNrOmhvdmVyIGltZ3tcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG59Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI21haW5Cb2R5e1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNzVweDtcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuI21haW5Cb2R5IHB7XHJcbiAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P7Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-p7',
          templateUrl: './p7.component.html',
          styleUrls: ['./p7.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/musi2040-portfolio/p8/p8.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/projects/musi2040-portfolio/p8/p8.component.ts ***!
    \****************************************************************/

  /*! exports provided: P8Component */

  /***/
  function srcAppProjectsMusi2040PortfolioP8P8ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P8Component", function () {
      return P8Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var P8Component = /*#__PURE__*/function () {
      function P8Component() {
        _classCallCheck(this, P8Component);
      }

      _createClass(P8Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return P8Component;
    }();

    P8Component.ɵfac = function P8Component_Factory(t) {
      return new (t || P8Component)();
    };

    P8Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: P8Component,
      selectors: [["app-p8"]],
      decls: 24,
      vars: 0,
      consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["id", "mainBody"]],
      template: function P8Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Portfolio 8: Film Review (A Third Time)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " This week's film was ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "America's Blues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". It featured interviews with a pretty massive cast of various individuals ranging from musicians, to artists, to academics. This admittedly massive cast includes, but are not limited to Big George Brock, David Dee, Watermelon Slim, Harry Webber, Sharon Lewis, amongst others. The film, along with the individuals depicted within it, documented the origins of blues along with all that it influenced. Indeed, it was surprising for me to learn that blues' tendrils of influence even reached aspects of life such as sexuality and fashion. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Starting off with the setting, the film encompases a multitude of locations. Of the locations that were actually filmed for the production, very few, if any, were actually directly named. The venues in which the interviews were recorded seem to all be local to where the interviewees were. As such, they ranged from art galleries, to recording studios, to even living rooms. The locations/events covered historically on the other hand, were named. The American Folk Fest held in Europe was one such location/event. The film also talks about the rise of blues in the Mississippi and Arkansas Deltas. Other historical locations covered included Atlanta's 7 Stages Theatre and Storyville, New Orleans. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " The background music heard throughout the film seems to be a blend of jazz, blues and rock instrumental tracks that served to give the viewer an idea of the music that was being talked about at the time. There were, however, also sections of the film that featured the music it self, rather than having it just be in the background. From my recollection, blues music were the most prominently featured, but rock and roll as well as jazz were also heavily featured. There were even instances where the film featured work songs and hip hop. Overall, most of the featured music sounded relatively slow and relaxed to me. There were not very many fast passages and everything seemed to be very relaxed. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " With the film being about blues' influence, it should be no surprise that it covered the evolution of blues into jazz and rock and roll, both musically, as well as culturally. Overall, the film does a pretty good job at connecting aspects of both jazz and rock to their roots in blues. With rock and roll in particular, the film describes the genre as talking blues and \"whitening it a little bit\". As such, many of the rhythms and even some of the riffs in rock and roll have their origins in blues. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Overall, what really stood out to me in the film was the sheer amount of things that were influenced by blues. Particularly surprising to me was its influence on on American sexuality. It would have never occurred to me that blues sort of acted as a gateway for sex to become a more openly talked about subject. It was also interesting and novel to hear about the idea that blues can act as a living story about the evolution of culture. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["#back[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-left: 30px;\r\n  background: none;\r\n  border: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n   transform: translateX(-5px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL3A4L3A4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0dBQ0csMkJBQTJCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL3A4L3A4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja3tcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNiYWNrIHB7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2JhY2sgaW1ne1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jYmFjazpob3ZlciBpbWd7XHJcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P8Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-p8',
          templateUrl: './p8.component.html',
          styleUrls: ['./p8.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/musi2040-portfolio/p9/p9.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/projects/musi2040-portfolio/p9/p9.component.ts ***!
    \****************************************************************/

  /*! exports provided: P9Component */

  /***/
  function srcAppProjectsMusi2040PortfolioP9P9ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P9Component", function () {
      return P9Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var P9Component = /*#__PURE__*/function () {
      function P9Component() {
        _classCallCheck(this, P9Component);
      }

      _createClass(P9Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return P9Component;
    }();

    P9Component.ɵfac = function P9Component_Factory(t) {
      return new (t || P9Component)();
    };

    P9Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: P9Component,
      selectors: [["app-p9"]],
      decls: 18,
      vars: 0,
      consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["id", "mainBody"]],
      template: function P9Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Portfolio 9: The Final Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " For my final post, I figured I'd explore the prevalence and usage musical scores in beyond just the film industry. More specifically, I'd like to explore the impact of scoring in video games. This topic in particular drew my interest as the primary difference between video games and film are their respective degrees of audience participation. This difference in interactivity allows for musical scores in video game scores to make an impact that is not even close to possible in films. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " In films, the prime driver of the story is the media itself. The only form of audience participation is the actual act of watching the movie itself. Video games, on the other hand, are primarily driven by the actions of its audience. Therefore, they serve to provide an entirely unique dimension of interactivity not found within any other form of media. This interactivity presents a completely unique experience for the scoring that underlies video games. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " In films, everything is predictable. a specific scene always happens at a specific time in the media. The accompanying music, then, is always played at the same time throughout the film. In modern video games, the music is far more unpredictable as it needs to actively follow the actions of the player. Think about the music played during a boss battle for example. It is playing because the player performed the requisite actions needed in order to enter into the battle. Similarly, it does not stop until the player either defeats or looses to the boss. The granularity can be further increased by having the music react to the actions that the player chooses to perform during the battle. The solution to this problem is writing music in modules rather than as an entire composition. This way, these modules can be programmed to play in response to a specific player action, with their lengths being determined by the desired amount of granularity. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " As far as I am aware, this level of individual participation in the creation of music simply does not exist in any other form of media. The uniqueness of this participation makes video games an excellent medium for music. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-left: 30px;\r\n  background: none;\r\n  border: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n   transform: translateX(-5px);\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  padding-right: 20px;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-indent: 50px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL3A5L3A5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQWM7RUFBZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtHQUNHLDJCQUEyQjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9tdXNpMjA0MC1wb3J0Zm9saW8vcDkvcDkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG5oMXtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5oMntcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2JhY2sgcHtcclxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jYmFjayBpbWd7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNiYWNrOmhvdmVyIGltZ3tcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG59XHJcblxyXG4jbWFpbkJvZHl7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xyXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xyXG59XHJcblxyXG4jbWFpbkJvZHkgcHtcclxuICB0ZXh0LWluZGVudDogNTBweDtcclxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P9Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-p9',
          templateUrl: './p9.component.html',
          styleUrls: ['./p9.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/musi2040-portfolio/week2/week2.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/projects/musi2040-portfolio/week2/week2.component.ts ***!
    \**********************************************************************/

  /*! exports provided: Week2Component */

  /***/
  function srcAppProjectsMusi2040PortfolioWeek2Week2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Week2Component", function () {
      return Week2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var Week2Component = /*#__PURE__*/function () {
      function Week2Component() {
        _classCallCheck(this, Week2Component);
      }

      _createClass(Week2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Week2Component;
    }();

    Week2Component.ɵfac = function Week2Component_Factory(t) {
      return new (t || Week2Component)();
    };

    Week2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Week2Component,
      selectors: [["app-week2"]],
      decls: 15,
      vars: 0,
      consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["id", "mainBody"]],
      template: function Week2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Music in My Family");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " When I was growing up, my mom did quite a lot to ensure that music played part of my life. Back when she was growing up in China, my mom could never afford to buy any musical instruments or a teacher to teach her. She didn't have the time either, as most of her time was spent taking care of my two uncles while my grandparents were at work. Seeing this missed oppurtunity in the past was essentially the reason why my mom encouraged me to become musically literate. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Despite there being little formal musical education in my family, there was certainly still a taste for it. My grandparents, for example, always loved to listen to Chinese operas in their free time. My mom on the other hand, always enjoyed 80's mandopop along with some of the artists here in the US like Celine Dion. Beyond that, I also remember her having piles of cds back in the day. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " As for my musical history, I can't say I remember a part of my life that wasn't impacted by music. I've spent years of my life both listening to as well as playing music. I started learning the piano in kindergarten and the violin in first grade. I got into music production in high school, and lately I've been trying to pick up the guitar. I've also spent more money than I'd care to admit buying instruments, hi-fi speakers and headphones, audio systems, and records. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["#back[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-left: 30px;\r\n  background: none;\r\n  border: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n   transform: translateX(-5px);\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  padding-right: 20px;\r\n  padding-top: 50px;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-indent: 50px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL3dlZWsyL3dlZWsyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0dBQ0csMkJBQTJCO0FBQzlCOztBQUFDO0VBQ0MsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFjO0VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvbXVzaTIwNDAtcG9ydGZvbGlvL3dlZWsyL3dlZWsyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja3tcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNiYWNrIHB7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2JhY2sgaW1ne1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jYmFjazpob3ZlciBpbWd7XHJcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcclxufTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG5oMXtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5oMntcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNtYWluQm9keXtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogNzVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDc1cHg7XHJcbiAgbWF4LWhlaWdodDogNTUwcHg7XHJcbn1cclxuXHJcbiNtYWluQm9keSBwe1xyXG4gIHRleHQtaW5kZW50OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Week2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-week2',
          templateUrl: './week2.component.html',
          styleUrls: ['./week2.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/night_light/night-light.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/projects/night_light/night-light.component.ts ***!
    \***************************************************************/

  /*! exports provided: NightLightComponent */

  /***/
  function srcAppProjectsNight_lightNightLightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NightLightComponent", function () {
      return NightLightComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NightLightComponent = /*#__PURE__*/function () {
      function NightLightComponent() {
        _classCallCheck(this, NightLightComponent);
      }

      _createClass(NightLightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NightLightComponent;
    }();

    NightLightComponent.ɵfac = function NightLightComponent_Factory(t) {
      return new (t || NightLightComponent)();
    };

    NightLightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NightLightComponent,
      selectors: [["app-night-light"]],
      decls: 37,
      vars: 0,
      consts: [["id", "back", "routerLink", "./select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["href", "https://github.com/SuperSkipper/Night-Light"], ["src", "./assets/icons/GitHubWhite.svg", "id", "git"], ["id", "content"], ["id", "content-body"], ["id", "title-block"], ["src", "./assets/Night Light/white_title.png", "alt", "white_title", "id", "title-img"], ["src", "./assets/Night Light/main-character.png", "alt", "Main Character", "id", "title-character"], [1, "content-block"], ["src", "./assets/Night Light/title_screen.jpg", "id", "ts"], ["src", "./assets/Night Light/team_picture.jpg", "id", "team-picture"]],
      template: function NightLightComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Night Light is a game created during the 2018 Athens Game Jam over the period of two days. It recieved the accolade of \"Best Overall Game\" along with \"Best Art\" among others. The game is centered around the exploration of a mysterious house with various monsters spread throughout. Vision is limited to a spotlight generated by the protagonist's lantern. All of the art was drawn in-house by the wonderfully-talented Maddi Huff and the audio was created by Henry Mcgehee and Mahima Dhesi. Night Light represents my first foray into video game design/development. As such, there are some unpolished parts throughout. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "The Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " The team responsible for creating Night Light consisted of seven individuals including myself. In total, there were three developers, one artist, two audio engineers, and one storyboard writer. The formation of this team was completely impromptu and was done right at the start of the event. The members are as follows:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Benjamin Poon - Project Lead, Programmer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Kelly Gallagher - Lead Programmer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Andrew Kristanto - Programmer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Maddi Huff - Principal Artist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Henry Mcgehee - Audio Engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Mahima Dhesi - Audio Engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Austin Ward - storyboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: white; \r\n    -webkit-transition: 1s; \r\n    transition: 1s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    color: white;\r\n    font-weight: 200;\r\n    font-size: 50px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    margin-left: 30px;\r\n    background: none;\r\n    border: none;\r\n    display: inline-flex;\r\n    align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n   width: 25px;\r\n   height: 25px;\r\n   transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    transform: translateX(-5px);\r\n}\r\n\r\n#git[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    float: right;\r\n    margin: 30px;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n#git[_ngcontent-%COMP%]:hover{\r\n    transform: translateY(-5px);\r\n}\r\n\r\n#content[_ngcontent-%COMP%]{\r\n    margin-left: 75px;\r\n    margin-right: 75px;\r\n    max-height: 550px;\r\n    margin-top: 40px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#content-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-indent: 50px;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n\r\n#title-block[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.content-block[_ngcontent-%COMP%]{\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.content-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-left:20px;\r\n    margin-right:20px;\r\n    margin-bottom: 30px;\r\n    text-align: left;\r\n}\r\n\r\n#title-img[_ngcontent-%COMP%]{\r\n    height:150px;\r\n    width: 240px;\r\n    image-rendering: pixelated;\r\n    image-rendering: -moz-crisp-edges;\r\n    image-rendering: crisp-edges;\r\n}\r\n\r\n#title-character[_ngcontent-%COMP%]{\r\n    height:150px;\r\n    image-rendering: pixelated;\r\n    image-rendering: -moz-crisp-edges;\r\n    image-rendering: crisp-edges;\r\n    margin-left: -30px;\r\n}\r\n\r\n#ts[_ngcontent-%COMP%]{\r\n    height: 250px;\r\n    border: 2px solid black;\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\n\r\n#team-picture[_ngcontent-%COMP%]{\r\n    height: 300px;\r\n    box-shadow: 2px 2px 5px black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbmlnaHRfbGlnaHQvbmlnaHQtbGlnaHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBYztJQUFkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1osNEJBQTRCO0FBQy9COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9uaWdodF9saWdodC9uaWdodC1saWdodC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogM3B4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlOyBcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG5idXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2JhY2sgcHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNiYWNrIGltZ3tcclxuICAgd2lkdGg6IDI1cHg7XHJcbiAgIGhlaWdodDogMjVweDtcclxuICAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2JhY2s6aG92ZXIgaW1ne1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG59XHJcblxyXG4jZ2l0e1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2dpdDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxufVxyXG5cclxuI2NvbnRlbnR7XHJcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNzVweDtcclxuICAgIG1heC1oZWlnaHQ6IDU1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuI2NvbnRlbnQtYm9keSBwe1xyXG4gICAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jdGl0bGUtYmxvY2t7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uY29udGVudC1ibG9ja3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5jb250ZW50LWJsb2NrIHB7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuI3RpdGxlLWltZ3tcclxuICAgIGhlaWdodDoxNTBweDtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiAtbW96LWNyaXNwLWVkZ2VzO1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBjcmlzcC1lZGdlcztcclxufVxyXG5cclxuI3RpdGxlLWNoYXJhY3RlcntcclxuICAgIGhlaWdodDoxNTBweDtcclxuICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiAtbW96LWNyaXNwLWVkZ2VzO1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBjcmlzcC1lZGdlcztcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxufVxyXG5cclxuI3Rze1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbn1cclxuXHJcbiN0ZWFtLXBpY3R1cmV7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NightLightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-night-light',
          templateUrl: './night-light.component.html',
          styleUrls: ['./night-light.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../animations */
    "./src/animations.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(router) {
        _classCallCheck(this, ProjectsComponent);

        this.router = router;
      }

      _createClass(ProjectsComponent, [{
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 4,
      vars: 1,
      consts: [["id", "backing"], ["id", "routerDiv"], ["outlet", "outlet"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@project", ctx.prepareRoute(_r0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["#backing[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 1000px;\r\n    height: 700px;\r\n    box-shadow: 2px 2px 5px black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGFBQWE7SUFDYiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tpbmd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"],
      data: {
        animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["projectSlide"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.css'],
          animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["projectSlide"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/select/select.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/projects/select/select.component.ts ***!
    \*****************************************************/

  /*! exports provided: SelectComponent */

  /***/
  function srcAppProjectsSelectSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return SelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SelectComponent = /*#__PURE__*/function () {
      function SelectComponent() {
        _classCallCheck(this, SelectComponent);
      }

      _createClass(SelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectComponent;
    }();

    SelectComponent.ɵfac = function SelectComponent_Factory(t) {
      return new (t || SelectComponent)();
    };

    SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectComponent,
      selectors: [["app-select"]],
      decls: 35,
      vars: 0,
      consts: [["id", "title"], ["routerLink", "../bpoon", 1, "project"], ["src", "./assets/Logo.png", "alt", "Logo", 1, "projectImg"], ["src", "./assets/icons/chevron-right.svg", "alt", "Chevron", 1, "arrow"], ["routerLink", "../spark", 1, "project"], ["src", "./assets/spark/SPark.png", "alt", "SPark", 1, "projectImg", 2, "height", "60px"], ["routerLink", "../night_light", 1, "project"], ["src", "./assets/Night Light/main-character.png", "alt", "SPark", 1, "projectImg", 2, "height", "65px", "width", "65px", "margin-right", "-5px", "image-rendering", "pixelated", "image-rendering", "-moz-crisp-edges", "image-rendering", "crisp-edges"], ["onclick", "location.href='https://soundcloud.com/superskipper';", 1, "projectLast"], ["src", "./assets//icons/icons8-soundcloud.svg", "alt", "SC", 1, "projectImg"]],
      template: function SelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bpoon.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "A personal website built from scratch on Google's Angular framework");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SPark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "3rd place finalist concept pitched at Deloitte's Startup UGA 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Night Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\"Best in Show\" game developed during the 2018 Athens Game Jam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Personal SoundCloud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Some compositions put together during my spare time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\n[_nghost-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border: none;\r\n    text-align: left;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n\r\n#container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    margin-left: 50px;\r\n    margin-bottom: 25px;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 50px;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    border-bottom: 1px solid white;\r\n    transition: .25s ease-in-out;\r\n    padding-bottom: 20px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.projectImg[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    transition: .25s ease-in-out;\r\n    }\r\n\r\n.project[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{\r\ntransform: translateX(5px);\r\n}\r\n\r\n.project[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    order: 2;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{\r\n    transform: translateX(5px);\r\n}\r\n\r\n.project[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 20pt;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 15pt;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding-top: 20px;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 20pt;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 15pt;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    order: 2;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{\r\n    transform: translateX(5px);\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{\r\n    transform: translateX(5px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFjO0VBQWQsY0FBYztBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCOztBQUVKO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogM3B4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuOmhvc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5idXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuI2NvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0aXRsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jdGl0bGUgaDF7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wcm9qZWN0e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdEltZ3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdCBkaXZ7XHJcbiAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuLnByb2plY3Q6aG92ZXIgZGl2e1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxufVxyXG5cclxuLnByb2plY3QgLmFycm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBvcmRlcjogMjtcclxuICAgIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0OmhvdmVyIC5hcnJvd3tcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG59XHJcblxyXG4ucHJvamVjdCBkaXYgaDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxufVxyXG5cclxuLnByb2plY3QgZGl2IGgye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVwdDtcclxufVxyXG5cclxuLnByb2plY3RMYXN0e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0TGFzdCBoMXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG59XHJcblxyXG4ucHJvamVjdExhc3QgaDJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB0O1xyXG59XHJcblxyXG4ucHJvamVjdExhc3QgLmFycm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBvcmRlcjogMjtcclxuICAgIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0TGFzdCBkaXZ7XHJcbiAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ucHJvamVjdExhc3Q6aG92ZXIgZGl2e1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi5wcm9qZWN0TGFzdDpob3ZlciAuYXJyb3d7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-select',
          templateUrl: './select.component.html',
          styleUrls: ['./select.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/spark/spark.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/projects/spark/spark.component.ts ***!
    \***************************************************/

  /*! exports provided: SParkComponent */

  /***/
  function srcAppProjectsSparkSparkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SParkComponent", function () {
      return SParkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SParkComponent = /*#__PURE__*/function () {
      function SParkComponent() {
        _classCallCheck(this, SParkComponent);
      }

      _createClass(SParkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SParkComponent;
    }();

    SParkComponent.ɵfac = function SParkComponent_Factory(t) {
      return new (t || SParkComponent)();
    };

    SParkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SParkComponent,
      selectors: [["app-spark"]],
      decls: 24,
      vars: 0,
      consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["href", "https://github.com/SuperSkipper/bpoon.com"], ["src", "./assets/icons/PowerPoint.svg", "id", "git"], ["id", "content"], ["id", "title"], ["id", "logo", "src", "./assets/spark/SPark.png", "alt", "SPark Logo"], ["id", "body"], [2, "display", "inline-flex"], [2, "display", "flex", "flex-direction", "column"], [1, "sectionHead"], ["src", "./assets/spark/sparkMap.png", "alt", "sparkUI", 2, "height", "500px", "float", "right"]],
      template: function SParkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SPark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "A Smarter Way to Park");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " SPark was an app concept created and pitched by Drew Traldi, Ariella Katz, Sifat Bhuiyan, and myself during Delloite's 2019 StartUp UGA competition. For the competition, we were allotted three days to conceptualize and pitch a solution to a problem faced by students at UGA. SPark was a parking system concept that was eventually born from our efforts. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "How it works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " SPark was designed with two primary goals in mind: to improve the efficiency of the existing parking spaces at the University of Georgia while also keeping the cost of implementation and maintenance as low as possible. As such, the proposed functionality of the system revolves around adding to the license plate scanning method that the university currently employs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: white; \r\n    -webkit-transition: 1s; \r\n    transition: 1s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    margin-left: 30px;\r\n    background: none;\r\n    border: none;\r\n    display: inline-flex;\r\n    align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n   width: 25px;\r\n   height: 25px;\r\n   transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    transform: translateX(-5px);\r\n }\r\n\r\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{  \r\n    height: 40px;\r\n    margin: 30px;\r\n    float: right;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    transform: translateY(-5px);\r\n}\r\n\r\n#content[_ngcontent-%COMP%]{\r\n    margin-left: 75px;\r\n    margin-right: 75px;\r\n    max-height: 550px;\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]{\r\n    height: 200px;\r\n    margin-bottom: -20px;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 65px;\r\n    color: white;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-family: 'open sans', sans-serif;  \r\n    font-weight: 200;\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n\r\n#body[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-indent: 50px;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    color: white;\r\n    text-align: left;\r\n}\r\n\r\n.sectionHead[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    text-align: left;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 30px;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvc3Bhcmsvc3BhcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBYztJQUFkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0dBQ0csV0FBVztHQUNYLFlBQVk7R0FDWiw0QkFBNEI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvc3Bhcmsvc3BhcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgXHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuYnV0dG9uOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2JhY2sgcHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNiYWNrIGltZ3tcclxuICAgd2lkdGg6IDI1cHg7XHJcbiAgIGhlaWdodDogMjVweDtcclxuICAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2JhY2s6aG92ZXIgaW1ne1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG4gfVxyXG5cclxuYSBpbWd7ICBcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG59XHJcblxyXG4jY29udGVudHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xyXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4jbG9nb3tcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcclxufVxyXG5cclxuI3RpdGxlIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiN0aXRsZSBoMntcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJywgc2Fucy1zZXJpZjsgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2JvZHl7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jYm9keSBwe1xyXG4gICAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnNlY3Rpb25IZWFke1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SParkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-spark',
          templateUrl: './spark.component.html',
          styleUrls: ['./spark.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume/resume.component.ts":
  /*!********************************************!*\
    !*** ./src/app/resume/resume.component.ts ***!
    \********************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResumeComponent = /*#__PURE__*/function () {
      function ResumeComponent() {
        _classCallCheck(this, ResumeComponent);
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumeComponent;
    }();

    ResumeComponent.ɵfac = function ResumeComponent_Factory(t) {
      return new (t || ResumeComponent)();
    };

    ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeComponent,
      selectors: [["app-resume"]],
      decls: 15,
      vars: 0,
      consts: [["id", "backing"], ["src", "./assets/resumes/resume.png", "alt", "resume"], ["id", "buttons"], ["download", "Benjamin Poon Resume", "target", "_blank", "href", "./assets/resumes/Public Resume.pdf"], ["ownload", "Benjamin Poon Resume", "target", "_blank", "href", "./assets/resumes/Public Resume.docx"], ["download", "Benjamin Poon Resume", "target", "_blank", "href", "./assets/resumes/resume.png"]],
      template: function ResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Last Updated:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Wednesday, June 3rd, 2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Download as PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Download as Word Doc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Download as Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "For privacy reasons, please email me at Ben@bpoon.com if you would like a copy of my resume with my address and phone number on it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 30px;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 200;\r\n    color: white;\r\n    margin-bottom: 10px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-align: center;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 13px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\n\r\n#backing[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    display: inline-flex;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 1000px;\r\n    height: 850px;\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\n\r\n#backing[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin: 23px;\r\n    width: 635px;\r\n}\r\n\r\n#buttons[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    width: 30%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    text-align: center;\r\n    margin: 20px;\r\n    color: white;\r\n    border: 2px solid white;\r\n    width: 300px;\r\n    line-height: 50px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 200;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n#buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    transform: translateY(-1px);\r\n    box-shadow: 2px 2px 5px black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMntcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxucHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG59XHJcblxyXG4jYmFja2luZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBoZWlnaHQ6IDg1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbn1cclxuXHJcbiNiYWNraW5nIGltZ3tcclxuICAgIG1hcmdpbjogMjNweDtcclxuICAgIHdpZHRoOiA2MzVweDtcclxufVxyXG5cclxuI2J1dHRvbnN7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2J1dHRvbnMgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2J1dHRvbnMgYTpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume',
          templateUrl: './resume.component.html',
          styleUrls: ['./resume.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Benjp\Documents\Git\Bpoon\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map