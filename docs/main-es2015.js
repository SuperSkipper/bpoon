(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/animations.ts":
/*!***************************!*\
  !*** ./src/animations.ts ***!
  \***************************/
/*! exports provided: fadeInFadeOut, slideInAnimation, projectSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInFadeOut", function() { return fadeInFadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectSlide", function() { return projectSlide; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const fadeInFadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInFadeOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ])
]);
const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeTransition', [
    // I know that you can do *=>* here, but doing so breaks the animation on page load for some reason.
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('homePage <=> resumePage, homePage <=> aboutPage, homePage <=> projectsPage, homePage <=> contactPage, resumePage <=> aboutPage, resumePage <=> projectsPage, resumePage <=> contactPage, aboutPage <=> projectsPage, aboutPage <=> contactPage, projectsPage <=> contactPage', [
        //set up parent container
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'relative',
            height: '100%',
            width: '1000px'
        }),
        //Set up entering and leaving components
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        //Fade out leaving component and fade in entering component
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))])
        ]),
    ]),
]);
const projectSlide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('project', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('selectPage <=> projectPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'relative',
            height: '100%',
            width: '1000px'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
    ])
]);


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 8, vars: 0, consts: [["id", "backing"], ["id", "aboutText"], ["id", "benImg", "src", "./assets/benInSuit.png", "alt", "Ben"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hi there, I'm Ben.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I am a student pursuing dual bachelor's degrees in business management and computer science at the University of Georgia. While I am mostly focused on my education at the moment, I also hold a Georgia real estate license and thus work part-time as a real estate agent to help pay for college. In my spare time, I enjoy working on tech-related projects, cooking, learning about software, going to the gym, and playing video games once in a while. (This is by no means an all-inclusive list by the way). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    margin: 50px;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 50px;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n    \r\np[_ngcontent-%COMP%]{  \r\n    text-indent: 50px;\r\n    font-family: 'open sans', sans-serif;\r\n    font-size: 17px;\r\n    font-weight: 200;\r\n    color: white;\r\n    margin-bottom: 10px;\r\n}\r\n    \r\n#backing[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 75px;\r\n    display: inline-flex;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 1000px;\r\n    height: 475px;\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\n    \r\n#aboutText[_ngcontent-%COMP%]{\r\n    margin-left: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 75%\r\n}\r\n    \r\n#benImg[_ngcontent-%COMP%]{\r\n    margin-right: 50px;\r\n    width: 250px;\r\n    border-radius: 50%;\r\n    box-shadow: 2px 2px 5px black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6Ii4uLy4uL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIG1hcmdpbjogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiAgICBcclxucHsgIFxyXG4gICAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI2JhY2tpbmd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ3NXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbn1cclxuXHJcbiNhYm91dFRleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDc1JVxyXG59XHJcblxyXG4jYmVuSW1ne1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _projects_select_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/select/select.component */ "./src/app/projects/select/select.component.ts");
/* harmony import */ var _projects_bpoon_bpoon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/bpoon/bpoon.component */ "./src/app/projects/bpoon/bpoon.component.ts");
/* harmony import */ var _projects_spark_spark_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/spark/spark.component */ "./src/app/projects/spark/spark.component.ts");
/* harmony import */ var _projects_night_light_night_light_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/night_light/night-light.component */ "./src/app/projects/night_light/night-light.component.ts");
/* harmony import */ var _projects_musi2040_portfolio_musi2040_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/musi2040-portfolio/musi2040-portfolio.component */ "./src/app/projects/musi2040-portfolio/musi2040-portfolio.component.ts");
/* harmony import */ var _projects_musi2040_portfolio_week2_week2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/musi2040-portfolio/week2/week2.component */ "./src/app/projects/musi2040-portfolio/week2/week2.component.ts");
/* harmony import */ var _projects_musi2040_portfolio_p3_p3_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/musi2040-portfolio/p3/p3.component */ "./src/app/projects/musi2040-portfolio/p3/p3.component.ts");
/* harmony import */ var _projects_musi2040_portfolio_p4_p4_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects/musi2040-portfolio/p4/p4.component */ "./src/app/projects/musi2040-portfolio/p4/p4.component.ts");

















const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { animation: 'homePage' } },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"], data: { animation: 'resumePage' } },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], data: { animation: 'aboutPage' } },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], data: { animation: 'projectsPage' },
        children: [
            { path: '', redirectTo: 'select', pathMatch: 'full' },
            { path: 'select', component: _projects_select_select_component__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"], data: { animation: 'selectPage' } },
            { path: 'bpoon', component: _projects_bpoon_bpoon_component__WEBPACK_IMPORTED_MODULE_8__["BpoonComponent"], data: { animation: 'projectPage' } },
            { path: 'spark', component: _projects_spark_spark_component__WEBPACK_IMPORTED_MODULE_9__["SParkComponent"], data: { animation: 'projectPage' } },
            { path: 'night_light', component: _projects_night_light_night_light_component__WEBPACK_IMPORTED_MODULE_10__["NightLightComponent"], data: { animation: 'projectPage' } },
            { path: 'musi2040_portfolio', component: _projects_musi2040_portfolio_musi2040_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["MUSI2040PortfolioComponent"],
                children: [
                    { path: 'Music_in_My_Family', component: _projects_musi2040_portfolio_week2_week2_component__WEBPACK_IMPORTED_MODULE_12__["Week2Component"] },
                    { path: 'P3', component: _projects_musi2040_portfolio_p3_p3_component__WEBPACK_IMPORTED_MODULE_13__["P3Component"] },
                    { path: 'P4', component: _projects_musi2040_portfolio_p4_p4_component__WEBPACK_IMPORTED_MODULE_14__["P4Component"] }
                ]
            }
        ]
    },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], data: { animation: 'contactPage' } }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");



class AppComponent {
    constructor() {
        this.title = 'Bpoon';
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nav-bar");
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hcHAuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                animations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _projects_bpoon_bpoon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/bpoon/bpoon.component */ "./src/app/projects/bpoon/bpoon.component.ts");
/* harmony import */ var _projects_select_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/select/select.component */ "./src/app/projects/select/select.component.ts");
/* harmony import */ var _projects_spark_spark_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/spark/spark.component */ "./src/app/projects/spark/spark.component.ts");
/* harmony import */ var _projects_night_light_night_light_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects/night_light/night-light.component */ "./src/app/projects/night_light/night-light.component.ts");
/* harmony import */ var _projects_musi2040_portfolio_musi2040_portfolio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projects/musi2040-portfolio/musi2040-portfolio.component */ "./src/app/projects/musi2040-portfolio/musi2040-portfolio.component.ts");
/* harmony import */ var _projects_musi2040_portfolio_week2_week2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projects/musi2040-portfolio/week2/week2.component */ "./src/app/projects/musi2040-portfolio/week2/week2.component.ts");
/* harmony import */ var _projects_musi2040_portfolio_p3_p3_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./projects/musi2040-portfolio/p3/p3.component */ "./src/app/projects/musi2040-portfolio/p3/p3.component.ts");
/* harmony import */ var _projects_musi2040_portfolio_p4_p4_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./projects/musi2040-portfolio/p4/p4.component */ "./src/app/projects/musi2040-portfolio/p4/p4.component.ts");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__["ResumeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _projects_bpoon_bpoon_component__WEBPACK_IMPORTED_MODULE_11__["BpoonComponent"],
        _projects_select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"],
        _projects_spark_spark_component__WEBPACK_IMPORTED_MODULE_13__["SParkComponent"],
        _projects_night_light_night_light_component__WEBPACK_IMPORTED_MODULE_14__["NightLightComponent"],
        _projects_musi2040_portfolio_musi2040_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["MUSI2040PortfolioComponent"],
        _projects_musi2040_portfolio_week2_week2_component__WEBPACK_IMPORTED_MODULE_16__["Week2Component"],
        _projects_musi2040_portfolio_p3_p3_component__WEBPACK_IMPORTED_MODULE_17__["P3Component"],
        _projects_musi2040_portfolio_p4_p4_component__WEBPACK_IMPORTED_MODULE_18__["P4Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_7__["ResumeComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                    _projects_bpoon_bpoon_component__WEBPACK_IMPORTED_MODULE_11__["BpoonComponent"],
                    _projects_select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"],
                    _projects_spark_spark_component__WEBPACK_IMPORTED_MODULE_13__["SParkComponent"],
                    _projects_night_light_night_light_component__WEBPACK_IMPORTED_MODULE_14__["NightLightComponent"],
                    _projects_musi2040_portfolio_musi2040_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["MUSI2040PortfolioComponent"],
                    _projects_musi2040_portfolio_week2_week2_component__WEBPACK_IMPORTED_MODULE_16__["Week2Component"],
                    _projects_musi2040_portfolio_p3_p3_component__WEBPACK_IMPORTED_MODULE_17__["P3Component"],
                    _projects_musi2040_portfolio_p4_p4_component__WEBPACK_IMPORTED_MODULE_18__["P4Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 12, vars: 0, consts: [["id", "backing"], ["id", "message"], ["src", "./assets/LogoWhite.png", "alt", "White Logo"], ["href", "mailto:ben@bpoon.com", "id", "email"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["#backing[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 1000px;\r\n    height: 600px;\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    margin-bottom: 25px;\r\n    text-align: center;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 50px;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'open sans', sans-serif;\r\n    width: 500px;\r\n    font-size: 20px;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n\r\n#message[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    margin-bottom: 20px;\r\n    margin-top: 45px;\r\n}\r\n\r\n#email[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    text-align: center;\r\n    margin: 20px;\r\n    color: white;\r\n    border: 2px solid white;\r\n    width: 150px;\r\n    line-height: 50px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 200;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n#email[_ngcontent-%COMP%]:hover{\r\n    transform: translateY(-1px);\r\n    box-shadow: 2px 2px 5px black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw2QkFBNkI7QUFDakMiLCJmaWxlIjoiLi4vLi4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2JhY2tpbmd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG59XHJcblxyXG5oMXtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbWVzc2FnZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI21lc3NhZ2UgaW1ne1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG59XHJcblxyXG4jZW1haWx7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNlbWFpbDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 0, consts: [["id", "homeContainer"], ["src", "./assets/Logo.png", "alt", "Initial Logo"], ["id", "socials"], ["href", "https://www.linkedin.com/in/benjamin-alex-poon/"], ["src", "./assets/icons/LinkedIn.svg"], ["href", "https://github.com/SuperSkipper"], ["src", "./assets/icons/GitHub.svg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["img[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin: auto;\r\n    width:250px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    display: block;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 30pt;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    display: block;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 15pt;\r\n}\r\n\r\n#homeContainer[_ngcontent-%COMP%]{\r\n    margin-top: 160px;\r\n    text-align: center;\r\n}\r\n\r\n#socials[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n#socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n}\r\n\r\n#socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-top:30px;\r\n    margin-left:25px;\r\n    margin-right:25px;\r\n    width: 50px;\r\n    height: 50px;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n#socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    transform: translateY(-3px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksY0FBYztJQUNkLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6Ii4uLy4uL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDoyNTBweDtcclxufVxyXG5cclxuaDF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB0O1xyXG59XHJcbmgye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB0O1xyXG59XHJcblxyXG5cclxuI2hvbWVDb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3NvY2lhbHN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzb2NpYWxzIGF7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4jc29jaWFscyBhIGltZ3tcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MjVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI3NvY2lhbHMgYTpob3ZlciBpbWd7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbn1cclxuIl19 */"], data: { animation: [] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
                animations: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations */ "./src/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NavBarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Benjamin Poon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInFadeOut", undefined);
} }
const _c0 = function (a0, a1) { return { "notSelected": a0, "selected": a1 }; };
class NavBarComponent {
    constructor(router) {
        this.router = router;
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
    ngOnInit() {
    }
    checkHome() {
        return this.router.url === '/home';
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["nav-bar"]], decls: 19, vars: 18, consts: [["id", "main-container"], ["id", "nav-container"], ["id", "homeContainer", 4, "ngIf"], ["id", "items"], ["routerLink", "../about", "routerLinkActive", "", 3, "ngClass"], ["about", "routerLinkActive"], ["routerLink", "../resume", "routerLinkActive", "", 3, "ngClass"], ["resume", "routerLinkActive"], ["routerLink", "../projects", "routerLinkActive", "", 3, "ngClass"], ["projects", "routerLinkActive"], ["routerLink", "../contact", "routerLinkActive", "", 3, "ngClass"], ["contact", "routerLinkActive"], ["id", "routerDiv"], ["outlet", "outlet"], ["id", "homeContainer"], ["routerLink", "../home", "routerLinkActive", ""], ["home", "routerLinkActive"], ["src", "./assets/Logo.png", "alt", "Initial Logo"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["button[_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n  box-shadow: none;\r\n}\r\n\r\n#main-container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#nav-container[_ngcontent-%COMP%]{\r\n  margin-top: 35px;\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n#items[_ngcontent-%COMP%]{\r\n  width: 960px;\r\n  border-top: 2px solid black;\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#items[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  border:0;\r\n  margin-left: 50px;\r\n  margin-right: 50px;\r\n  margin-top: 10px;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-size: 25px;\r\n  background: none;\r\n  position: relative;\r\n}\r\n\r\n#homeContainer[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100px;\r\n  height: 0;\r\n}\r\n\r\n#homeContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: absolute;\r\n  left: -850px;\r\n  top: 20px;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n#homeContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#homeContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n  transform: translateY(-7px);\r\n}\r\n\r\n#homeContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\n#routerDiv[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  \r\n}\r\n\r\n.notSelected[_ngcontent-%COMP%]:after {    \r\n  background: none repeat scroll 0 0 transparent;\r\n  bottom: 0;\r\n  content: \"\";\r\n  display: block;\r\n  height: 2px;\r\n  left: 50%;\r\n  position: absolute;\r\n  background: black;\r\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\r\n  width: 0;\r\n}\r\n\r\n.notSelected[_ngcontent-%COMP%]:hover:after { \r\n  width: 100%; \r\n  left: 0; \r\n}\r\n\r\n.selected[_ngcontent-%COMP%]:after{\r\n  margin-top: -2px;\r\n  position: absolute;\r\n  content: \"\"; \r\n  display: block;\r\n  height: 2px;\r\n  width: 100%; \r\n  left: 0;\r\n  background: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaURBQWlEO0VBQ2pELFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0VBQ1AsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Ii4uLy4uL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuI21haW4tY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jbmF2LWNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jaXRlbXN7XHJcbiAgd2lkdGg6IDk2MHB4O1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNpdGVtcyBidXR0b257XHJcbiAgYm9yZGVyOjA7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNob21lQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4jaG9tZUNvbnRhaW5lciBidXR0b257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC04NTBweDtcclxuICB0b3A6IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbiNob21lQ29udGFpbmVyIGJ1dHRvbiBpbWd7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNob21lQ29udGFpbmVyIGJ1dHRvbjpob3ZlciBpbWd7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpO1xyXG59XHJcblxyXG4jaG9tZUNvbnRhaW5lciBidXR0b24gcHtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbiNyb3V0ZXJEaXZ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qYm9yZGVyOiAycHggc29saWQgYmxhY2s7Ki9cclxufVxyXG5cclxuLm5vdFNlbGVjdGVkOmFmdGVyIHsgICAgXHJcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcclxuICBib3R0b206IDA7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDJweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5ub3RTZWxlY3RlZDpob3ZlcjphZnRlciB7IFxyXG4gIHdpZHRoOiAxMDAlOyBcclxuICBsZWZ0OiAwOyBcclxufVxyXG5cclxuLnNlbGVjdGVkOmFmdGVye1xyXG4gIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7IFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHdpZHRoOiAxMDAlOyBcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59Il19 */"], data: { animation: [
            _animations__WEBPACK_IMPORTED_MODULE_1__["fadeInFadeOut"],
            _animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css'],
                animations: [
                    _animations__WEBPACK_IMPORTED_MODULE_1__["fadeInFadeOut"],
                    _animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/projects/bpoon/bpoon.component.ts":
/*!***************************************************!*\
  !*** ./src/app/projects/bpoon/bpoon.component.ts ***!
  \***************************************************/
/*! exports provided: BpoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpoonComponent", function() { return BpoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class BpoonComponent {
    constructor() { }
    ngOnInit() {
    }
}
BpoonComponent.ɵfac = function BpoonComponent_Factory(t) { return new (t || BpoonComponent)(); };
BpoonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BpoonComponent, selectors: [["app-bpoon"]], decls: 18, vars: 0, consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["href", "https://github.com/SuperSkipper/bpoon.com"], ["src", "./assets/icons/GitHubWhite.svg", "id", "git"], ["id", "mainBody"], ["src", "./assets/bpoon/homePage.PNG", "alt", "homeLogo", 2, "float", "right", "height", "300px", "margin-left", "20px", "box-shadow", "2px 2px 5px black"], ["src", "./assets/bpoon/Code.PNG", "alt", "animation code", 2, "width", "400px", "box-shadow", "2px 2px 5px black", "float", "left", "margin-right", "20px"]], template: function BpoonComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: white;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    color: white;\r\n    font-weight: 200;\r\n    font-size: 50px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    color: white;\r\n    font-weight: 200;\r\n    font-size: 30px;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    margin-left: 30px;\r\n    background: none;\r\n    border: none;\r\n    display: inline-flex;\r\n    align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n   width: 25px;\r\n   height: 25px;\r\n   transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    transform: translateX(-5px);\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n    overflow-y: scroll;\r\n    display: flex;\r\n    padding-right: 20px;\r\n    flex-direction: column;\r\n    margin-top: 50px;\r\n    margin-left: 75px;\r\n    margin-right: 75px;\r\n    max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-indent: 50px;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n\r\n#git[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    float: right;\r\n    margin: 30px;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n#git[_ngcontent-%COMP%]:hover{\r\n    transform: translateY(-5px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Jwb29uL2Jwb29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQWM7SUFBZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1osNEJBQTRCO0FBQy9COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoiLi4vYnBvb24vYnBvb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG5idXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jYmFjayBwe1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2JhY2sgaW1ne1xyXG4gICB3aWR0aDogMjVweDtcclxuICAgaGVpZ2h0OiAyNXB4O1xyXG4gICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jYmFjazpob3ZlciBpbWd7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XHJcbn1cclxuXHJcbiNtYWluQm9keXtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNzVweDtcclxuICAgIG1heC1oZWlnaHQ6IDU1MHB4O1xyXG59XHJcblxyXG4jbWFpbkJvZHkgcHtcclxuICAgIHRleHQtaW5kZW50OiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2dpdHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNnaXQ6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BpoonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bpoon',
                templateUrl: './bpoon.component.html',
                styleUrls: ['./bpoon.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/projects/musi2040-portfolio/musi2040-portfolio.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/projects/musi2040-portfolio/musi2040-portfolio.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MUSI2040PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUSI2040PortfolioComponent", function() { return MUSI2040PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MUSI2040PortfolioComponent {
    constructor(router) {
        this.router = router;
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
    ngOnInit() {
    }
}
MUSI2040PortfolioComponent.ɵfac = function MUSI2040PortfolioComponent_Factory(t) { return new (t || MUSI2040PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MUSI2040PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MUSI2040PortfolioComponent, selectors: [["app-musi2040-portfolio"]], decls: 4, vars: 1, consts: [["id", "backing"], ["id", "routerDiv"], ["outlet", "outlet"]], template: function MUSI2040PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@project", ctx.prepareRoute(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpMjA0MC1wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MUSI2040PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-musi2040-portfolio',
                templateUrl: './musi2040-portfolio.component.html',
                styleUrls: ['./musi2040-portfolio.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/projects/musi2040-portfolio/p3/p3.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/projects/musi2040-portfolio/p3/p3.component.ts ***!
  \****************************************************************/
/*! exports provided: P3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P3Component", function() { return P3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class P3Component {
    constructor() { }
    ngOnInit() {
    }
}
P3Component.ɵfac = function P3Component_Factory(t) { return new (t || P3Component)(); };
P3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: P3Component, selectors: [["app-p3"]], decls: 25, vars: 0, consts: [["id", "mainBody"], ["src", "..\\..\\..\\assets\\musi2040\\MaRainey.png", "alt", "Ma Rainey", 2, "float", "right", "height", "300px", "margin-left", "20px", "box-shadow", "2px 2px 5px black"], ["src", "https://open.spotify.com/embed/track/2hbxUOhbVyqxIoLxk2AM0c", "width", "50%", "height", "80", "frameBorder", "0", "allowtransparency", "true", "allow", "encrypted-media", 2, "box-shadow", "2px 2px 5px black"], ["src", "https://open.spotify.com/embed/track/3KuHKNc4l0ryqWuglWAYrG", "width", "50%", "height", "80", "frameBorder", "0", "allowtransparency", "true", "allow", "encrypted-media", 2, "box-shadow", "2px 2px 5px black"], [2, "text-indent", "0px"]], template: function P3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Portfolio 3: Ma Rainey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Gertrude Pridget was a quintessential figure in the world of blues, cerdited with helping to develop the genre into the incarnation that we know today. Born into a poor family in Columbus, Georgia, Pridget started her early career at the age of 14 by performing in minstrel acts before moving on to singing in traveling vaudeville performances. Through her travels within these performances, she met Willian \"Pa\" Rainey, who would eventually go on to become her husband. This is also when Pridget, now Rainey, took up the stage Name \"Ma\" in conjuction with William's \"Pa\". She would perform with Pa as a duo act for about a decade before the two separated. During her career as a singer, she became one of the first females to record blues professionally. Renouned for her strong \"moaning\" style of singing, she would very regularly sell out theaters and draw huge crowds of both White and African American attendees. Lyrically, much of her music were written to reflect the hardships faced by a woman living in her age. Rainey would later go on to associate with Paramount and perform with \"some of the finest musicians of the day\". Sadly, she passed away on December 22nd, 1939 due to heart complications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Countin\u2019 the Blues");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Being one of the pieces introduced in the book, Countin' the Blues is a very \"by-the-books\" blues song by modern day standards. It is performed in the 12-bar format and follows the AAB format very rigidly. Every stanza of the piece features prominent vocals in the first two verses, which are then decorated at the end by a cornet on the third. In a sense, even the rhyme scheme follows this pattern, with the last words of the first two verses of every stanza being the same and then last word of the third being different, but still rhyming with the first two. Overall, the piece evokes a melancholic mood as the instruments languish behind Ma's singing. Lyrically, the piece seems to fuse parts of gospel music into its roots as a blues composition, with many verses addressing \"Lord\" in a manner not unlike praying. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Black Eye Blues");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Following very closely to Ma's modus operandi when it comes to writing her lyrics, the focus of this piece is on a woman stuck in an abusive relationship with her husband. The piece simultaneously puts emphasis on the protagonist's strength by later focusing on her plotting to eventualy catch her man with his \"britches down\", showing that she is not just idly allowing him to abuse her. The song seems to be sung in Rainey's signature \"moaning\" style and also seems to utilize the classic 12-bar blues pattern of composition. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Works Cited ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Orr, N. L.. \"Gertrude \"Ma\" Rainey (1886-1939).\" New Georgia Encyclopedia. 08 April 2021. Web. 01 July 2021. Brandman, Mariana. \u201CGertrude \u2018Ma\u2019 Rainey.\u201D National Women\u2019s History Museum, Web. 01 July 2021. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  padding-right: 20px;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-indent: 50px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInAzL3AzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQWM7RUFBZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJwMy9wMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI21haW5Cb2R5e1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNzVweDtcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuI21haW5Cb2R5IHB7XHJcbiAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-p3',
                templateUrl: './p3.component.html',
                styleUrls: ['./p3.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/projects/musi2040-portfolio/p4/p4.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/projects/musi2040-portfolio/p4/p4.component.ts ***!
  \****************************************************************/
/*! exports provided: P4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P4Component", function() { return P4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class P4Component {
    constructor() { }
    ngOnInit() {
    }
}
P4Component.ɵfac = function P4Component_Factory(t) { return new (t || P4Component)(); };
P4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: P4Component, selectors: [["app-p4"]], decls: 31, vars: 0, consts: [["id", "mainBody"], ["src", "..\\..\\..\\assets\\musi2040\\blindWillieJohnson.jpg", "alt", "Ma Rainey", 2, "float", "right", "height", "300px", "margin-left", "20px", "box-shadow", "2px 2px 5px black"], ["src", "https://open.spotify.com/embed/track/2P9nh9pTK96dE0b6NBbTSs", "width", "50%", "height", "80", "frameBorder", "0", "allowtransparency", "true", "allow", "encrypted-media", 2, "box-shadow", "2px 2px 5px black"], ["src", "https://open.spotify.com/embed/track/5UEsyERm7tsNvDDZFylZZf", "width", "50%", "height", "80", "frameBorder", "0", "allowtransparency", "true", "allow", "encrypted-media", 2, "box-shadow", "2px 2px 5px black"], [2, "text-indent", "0px"]], template: function P4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Portfolio 4: Blind Willie Johnson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Blind Willie Johnson was an artist very much known for his slide guitar (though he often played with a pocket knife rather than a bottleneck) and his fusion of gospel and blues. In fact, he was one of the most primere performers of gospel blues to have ever existed. So influential was he, that his work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dark Was the Night, Cold Was the Ground");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " was one of the songs chosen to be enscribed on the the Voyager Golden Records as a representation of human culture on Earth.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Born in a small town just south of Waco, Texas, Johnson lost his birth mother at a very young age. His blindness was later inflicted by a stray lye bottle thrown by his mother-in-law meant for his dad. Due to this blindness, Johnson mostly relied on play music in the streets to earn money. During this time, he played mostly blues before later moving onto gospel as his religious affiliations deepened. Later, Johnson went on to record multiple records with his wife Angeline at Columbia Records and became one of their best-selling race recording artists. After leaving the recording industry in 1930, Johnson continued performing on the streets of Texas before unfortunately succumbing to pneumonia shortly after his house burned down in 1947. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dark Was the Night, Cold Was the Ground");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " This is the fabled song that is now on the payload of both Voyager 1 as well as Voyager 2. The piece itself contains both vocal as well as instrumental sections, but there are no descernable spoken words during any part of the performance. With both its name and its structure beign derived from the English hymn Gethsemane, the song's mournful and languishing moaning featured throughout was meant to draw a powerful image of Christ's grief and sorrow during the eve prior to his Crucifixion. This mood is even further expressed through the inclusion of various blues practices such as note-bending. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "The Soul of a Man");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " The Soul of a Man was performed as a duo between Johnson and Willie B. Harris, with Harris singing the harmony during the refrains. The song itself questions the spiritual nature of Man's soul. It captures and ponders this idea around a tune that is distinctly blues-like in its composition. These factors may have been influenced by the Great Depression, which had gripped the American populace prior to its publishing. Like many of his other works, the only other instrumentation beyond vocals is a guitar playing harmony throughout the piece. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Works Cited ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Layne, Joslyn \"Blind Willie Johnson.\" AllMusic. 08 April 2021. Web. 01 July 2021. Britannica, The Editors of Encyclopaedia. \"Blind Willie Johnson\". Encyclopedia Britannica, 18 Jan. 2021, https://www.britannica.com/biography/Blind-Willie-Johnson. Accessed 5 July 2021. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  padding-right: 20px;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-indent: 50px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInA0L3A0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQWM7RUFBZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJwNC9wNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI21haW5Cb2R5e1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNzVweDtcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuI21haW5Cb2R5IHB7XHJcbiAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-p4',
                templateUrl: './p4.component.html',
                styleUrls: ['./p4.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/projects/musi2040-portfolio/week2/week2.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/projects/musi2040-portfolio/week2/week2.component.ts ***!
  \**********************************************************************/
/*! exports provided: Week2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Week2Component", function() { return Week2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Week2Component {
    constructor() { }
    ngOnInit() {
    }
}
Week2Component.ɵfac = function Week2Component_Factory(t) { return new (t || Week2Component)(); };
Week2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Week2Component, selectors: [["app-week2"]], decls: 11, vars: 0, consts: [["id", "mainBody"]], template: function Week2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Music in My Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " When I was growing up, my mom did quite a lot to ensure that music played part of my life. Back when she was growing up in China, my mom could never afford to buy any musical instruments or a teacher to teach her. She didn't have the time either, as most of her time was spent taking care of my two uncles while my grandparents were at work. Seeing this missed oppurtunity in the past was essentially the reason why my mom encouraged me to become musically literate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Despite there being little formal musical education in my family, there was certainly still a taste for it. My grandparents, for example, always loved to listen to Chinese operas in their free time. My mom on the other hand, always enjoyed 80's mandopop along with some of the artists here in the US like Celine Dion. Beyond that, I also remember her having piles of cds back in the day. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " As for my musical history, I can't say I remember a part of my life that wasn't impacted by music. I've spent years of my life both listening to as well as playing music. I started learning the piano in kindergarten and the violin in first grade. I got into music production in high school, and lately I've been trying to pick up the guitar. I've also spent more money than I'd care to admit buying instruments, hi-fi speakers and headphones, audio systems, and records. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: white;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  color: white;\r\n  font-weight: 200;\r\n  font-size: 30px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]{\r\n  overflow-y: scroll;\r\n  display: flex;\r\n  padding-right: 20px;\r\n  padding-top: 50px;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  max-height: 550px;\r\n}\r\n\r\n#mainBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-indent: 50px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 200;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWsyL3dlZWsyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQWM7RUFBZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoid2VlazIvd2VlazIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG5oMXtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5oMntcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNtYWluQm9keXtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogNzVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDc1cHg7XHJcbiAgbWF4LWhlaWdodDogNTUwcHg7XHJcbn1cclxuXHJcbiNtYWluQm9keSBwe1xyXG4gIHRleHQtaW5kZW50OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Week2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-week2',
                templateUrl: './week2.component.html',
                styleUrls: ['./week2.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/projects/night_light/night-light.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/projects/night_light/night-light.component.ts ***!
  \***************************************************************/
/*! exports provided: NightLightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NightLightComponent", function() { return NightLightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NightLightComponent {
    constructor() { }
    ngOnInit() {
    }
}
NightLightComponent.ɵfac = function NightLightComponent_Factory(t) { return new (t || NightLightComponent)(); };
NightLightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NightLightComponent, selectors: [["app-night-light"]], decls: 37, vars: 0, consts: [["id", "back", "routerLink", "./select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["href", "https://github.com/SuperSkipper/Night-Light"], ["src", "./assets/icons/GitHubWhite.svg", "id", "git"], ["id", "content"], ["id", "content-body"], ["id", "title-block"], ["src", "./assets/Night Light/white_title.png", "alt", "white_title", "id", "title-img"], ["src", "./assets/Night Light/main-character.png", "alt", "Main Character", "id", "title-character"], [1, "content-block"], ["src", "./assets/Night Light/title_screen.jpg", "id", "ts"], ["src", "./assets/Night Light/team_picture.jpg", "id", "team-picture"]], template: function NightLightComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: white; \r\n    -webkit-transition: 1s; \r\n    transition: 1s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    color: white;\r\n    font-weight: 200;\r\n    font-size: 50px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    margin-left: 30px;\r\n    background: none;\r\n    border: none;\r\n    display: inline-flex;\r\n    align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n   width: 25px;\r\n   height: 25px;\r\n   transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    transform: translateX(-5px);\r\n}\r\n\r\n#git[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    float: right;\r\n    margin: 30px;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n#git[_ngcontent-%COMP%]:hover{\r\n    transform: translateY(-5px);\r\n}\r\n\r\n#content[_ngcontent-%COMP%]{\r\n    margin-left: 75px;\r\n    margin-right: 75px;\r\n    max-height: 550px;\r\n    margin-top: 40px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#content-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-indent: 50px;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n\r\n#title-block[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.content-block[_ngcontent-%COMP%]{\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.content-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-left:20px;\r\n    margin-right:20px;\r\n    margin-bottom: 30px;\r\n    text-align: left;\r\n}\r\n\r\n#title-img[_ngcontent-%COMP%]{\r\n    height:150px;\r\n    width: 240px;\r\n    image-rendering: pixelated;\r\n    image-rendering: -moz-crisp-edges;\r\n    image-rendering: crisp-edges;\r\n}\r\n\r\n#title-character[_ngcontent-%COMP%]{\r\n    height:150px;\r\n    image-rendering: pixelated;\r\n    image-rendering: -moz-crisp-edges;\r\n    image-rendering: crisp-edges;\r\n    margin-left: -30px;\r\n}\r\n\r\n#ts[_ngcontent-%COMP%]{\r\n    height: 250px;\r\n    border: 2px solid black;\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\n\r\n#team-picture[_ngcontent-%COMP%]{\r\n    height: 300px;\r\n    box-shadow: 2px 2px 5px black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25pZ2h0X2xpZ2h0L25pZ2h0LWxpZ2h0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQWM7SUFBZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7R0FDRyxXQUFXO0dBQ1gsWUFBWTtHQUNaLDRCQUE0QjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6Ii4uL25pZ2h0X2xpZ2h0L25pZ2h0LWxpZ2h0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7IFxyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jYmFjayBwe1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2JhY2sgaW1ne1xyXG4gICB3aWR0aDogMjVweDtcclxuICAgaGVpZ2h0OiAyNXB4O1xyXG4gICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jYmFjazpob3ZlciBpbWd7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XHJcbn1cclxuXHJcbiNnaXR7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jZ2l0OmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG59XHJcblxyXG4jY29udGVudHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xyXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4jY29udGVudC1ib2R5IHB7XHJcbiAgICB0ZXh0LWluZGVudDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiN0aXRsZS1ibG9ja3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWJsb2Nre1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNvbnRlbnQtYmxvY2sgcHtcclxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4jdGl0bGUtaW1ne1xyXG4gICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IC1tb3otY3Jpc3AtZWRnZXM7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IGNyaXNwLWVkZ2VzO1xyXG59XHJcblxyXG4jdGl0bGUtY2hhcmFjdGVye1xyXG4gICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IC1tb3otY3Jpc3AtZWRnZXM7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IGNyaXNwLWVkZ2VzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG59XHJcblxyXG4jdHN7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcclxufVxyXG5cclxuI3RlYW0tcGljdHVyZXtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NightLightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-night-light',
                templateUrl: './night-light.component.html',
                styleUrls: ['./night-light.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations */ "./src/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ProjectsComponent {
    constructor(router) {
        this.router = router;
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 4, vars: 1, consts: [["id", "backing"], ["id", "routerDiv"], ["outlet", "outlet"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@project", ctx.prepareRoute(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["#backing[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 1000px;\r\n    height: 700px;\r\n    box-shadow: 2px 2px 5px black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6Ii4uL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2luZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"], data: { animation: [
            _animations__WEBPACK_IMPORTED_MODULE_1__["projectSlide"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css'],
                animations: [
                    _animations__WEBPACK_IMPORTED_MODULE_1__["projectSlide"]
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/projects/select/select.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/projects/select/select.component.ts ***!
  \*****************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SelectComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], decls: 35, vars: 0, consts: [["id", "title"], ["routerLink", "../bpoon", 1, "project"], ["src", "./assets/Logo.png", "alt", "Logo", 1, "projectImg"], ["src", "./assets/icons/chevron-right.svg", "alt", "Chevron", 1, "arrow"], ["routerLink", "../spark", 1, "project"], ["src", "./assets/spark/SPark.png", "alt", "SPark", 1, "projectImg", 2, "height", "60px"], ["routerLink", "../night_light", 1, "project"], ["src", "./assets/Night Light/main-character.png", "alt", "SPark", 1, "projectImg", 2, "height", "65px", "width", "65px", "margin-right", "-5px", "image-rendering", "pixelated", "image-rendering", "-moz-crisp-edges", "image-rendering", "crisp-edges"], ["onclick", "location.href='https://soundcloud.com/superskipper';", 1, "projectLast"], ["src", "./assets//icons/icons8-soundcloud.svg", "alt", "SC", 1, "projectImg"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["[_nghost-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border: none;\r\n    text-align: left;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n\r\n#container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    margin-left: 50px;\r\n    margin-bottom: 25px;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 50px;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    border-bottom: 1px solid white;\r\n    transition: .25s ease-in-out;\r\n    padding-bottom: 20px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.projectImg[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    transition: .25s ease-in-out;\r\n    }\r\n\r\n.project[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{\r\ntransform: translateX(5px);\r\n}\r\n\r\n.project[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    order: 2;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{\r\n    transform: translateX(5px);\r\n}\r\n\r\n.project[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 20pt;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 15pt;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding-top: 20px;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 20pt;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 15pt;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    order: 2;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{\r\n    transform: translateX(5px);\r\n}\r\n\r\n.projectLast[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{\r\n    transform: translateX(5px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCOztBQUVKO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoiLi4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5idXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuI2NvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0aXRsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jdGl0bGUgaDF7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wcm9qZWN0e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdEltZ3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdCBkaXZ7XHJcbiAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuLnByb2plY3Q6aG92ZXIgZGl2e1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxufVxyXG5cclxuLnByb2plY3QgLmFycm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBvcmRlcjogMjtcclxuICAgIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0OmhvdmVyIC5hcnJvd3tcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG59XHJcblxyXG4ucHJvamVjdCBkaXYgaDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxufVxyXG5cclxuLnByb2plY3QgZGl2IGgye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVwdDtcclxufVxyXG5cclxuLnByb2plY3RMYXN0e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0TGFzdCBoMXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG59XHJcblxyXG4ucHJvamVjdExhc3QgaDJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB0O1xyXG59XHJcblxyXG4ucHJvamVjdExhc3QgLmFycm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBvcmRlcjogMjtcclxuICAgIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0TGFzdCBkaXZ7XHJcbiAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ucHJvamVjdExhc3Q6aG92ZXIgZGl2e1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi5wcm9qZWN0TGFzdDpob3ZlciAuYXJyb3d7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select',
                templateUrl: './select.component.html',
                styleUrls: ['./select.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/projects/spark/spark.component.ts":
/*!***************************************************!*\
  !*** ./src/app/projects/spark/spark.component.ts ***!
  \***************************************************/
/*! exports provided: SParkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SParkComponent", function() { return SParkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SParkComponent {
    constructor() { }
    ngOnInit() {
    }
}
SParkComponent.ɵfac = function SParkComponent_Factory(t) { return new (t || SParkComponent)(); };
SParkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SParkComponent, selectors: [["app-spark"]], decls: 24, vars: 0, consts: [["id", "back", "routerLink", "../select"], ["src", "./assets/icons/chevron-left.svg", "alt", "backArrow"], ["href", "https://github.com/SuperSkipper/bpoon.com"], ["src", "./assets/icons/PowerPoint.svg", "id", "git"], ["id", "content"], ["id", "title"], ["id", "logo", "src", "./assets/spark/SPark.png", "alt", "SPark Logo"], ["id", "body"], [2, "display", "inline-flex"], [2, "display", "flex", "flex-direction", "column"], [1, "sectionHead"], ["src", "./assets/spark/sparkMap.png", "alt", "sparkUI", 2, "height", "500px", "float", "right"]], template: function SParkComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 3px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: white; \r\n    -webkit-transition: 1s; \r\n    transition: 1s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    margin-left: 30px;\r\n    background: none;\r\n    border: none;\r\n    display: inline-flex;\r\n    align-items: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n   width: 25px;\r\n   height: 25px;\r\n   transition: .25s ease-in-out;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    transform: translateX(-5px);\r\n }\r\n\r\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{  \r\n    height: 40px;\r\n    margin: 30px;\r\n    float: right;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    transform: translateY(-5px);\r\n}\r\n\r\n#content[_ngcontent-%COMP%]{\r\n    margin-left: 75px;\r\n    margin-right: 75px;\r\n    max-height: 550px;\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]{\r\n    height: 200px;\r\n    margin-bottom: -20px;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 65px;\r\n    color: white;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-family: 'open sans', sans-serif;  \r\n    font-weight: 200;\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n\r\n#body[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-indent: 50px;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    color: white;\r\n    text-align: left;\r\n}\r\n\r\n.sectionHead[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    text-align: left;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 30px;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NwYXJrL3NwYXJrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQWM7SUFBZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1osNEJBQTRCO0FBQy9COztBQUVBO0lBQ0ksMkJBQTJCO0NBQzlCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiIuLi9zcGFyay9zcGFyay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogM3B4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlOyBcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG5idXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuI2JhY2t7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jYmFjayBwe1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2JhY2sgaW1ne1xyXG4gICB3aWR0aDogMjVweDtcclxuICAgaGVpZ2h0OiAyNXB4O1xyXG4gICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jYmFjazpob3ZlciBpbWd7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XHJcbiB9XHJcblxyXG5hIGltZ3sgIFxyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbn1cclxuXHJcbiNjb250ZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDc1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbiNsb2dve1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xyXG59XHJcblxyXG4jdGl0bGUgaDF7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3RpdGxlIGgye1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmOyAgXHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jYm9keXtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNib2R5IHB7XHJcbiAgICB0ZXh0LWluZGVudDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2VjdGlvbkhlYWR7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SParkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spark',
                templateUrl: './spark.component.html',
                styleUrls: ['./spark.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 15, vars: 0, consts: [["id", "backing"], ["src", "./assets/resumes/resume.png", "alt", "resume"], ["id", "buttons"], ["download", "Benjamin Poon Resume", "target", "_blank", "href", "./assets/resumes/Public Resume.pdf"], ["ownload", "Benjamin Poon Resume", "target", "_blank", "href", "./assets/resumes/Public Resume.docx"], ["download", "Benjamin Poon Resume", "target", "_blank", "href", "./assets/resumes/resume.png"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 30px;\r\n    font-weight: 200;\r\n    color: white;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 200;\r\n    color: white;\r\n    margin-bottom: 10px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-align: center;\r\n    font-family: 'open sans', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 13px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\n\r\n#backing[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    display: inline-flex;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 1000px;\r\n    height: 850px;\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\n\r\n#backing[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin: 23px;\r\n    width: 635px;\r\n}\r\n\r\n#buttons[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    width: 30%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    text-align: center;\r\n    margin: 20px;\r\n    color: white;\r\n    border: 2px solid white;\r\n    width: 300px;\r\n    line-height: 50px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 200;\r\n    transition: .25s ease-in-out;\r\n}\r\n\r\n#buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    transform: translateY(-1px);\r\n    box-shadow: 2px 2px 5px black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6Ii4uLy4uL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbn1cclxuXHJcbiNiYWNraW5ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogODUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcclxufVxyXG5cclxuI2JhY2tpbmcgaW1ne1xyXG4gICAgbWFyZ2luOiAyM3B4O1xyXG4gICAgd2lkdGg6IDYzNXB4O1xyXG59XHJcblxyXG4jYnV0dG9uc3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jYnV0dG9ucyBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jYnV0dG9ucyBhOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Benjp\Documents\Git\Bpoon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map