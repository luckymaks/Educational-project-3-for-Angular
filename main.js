(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spa_services_spa_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spa/services/spa-config.service */ "./src/spa/services/spa-config.service.ts");
/* harmony import */ var _spa_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spa/services/menu.service */ "./src/spa/services/menu.service.ts");
/* harmony import */ var _app_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.menu */ "./src/app/app.menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(spaConfigService, menuService) {
        this.spaConfigService = spaConfigService;
        this.menuService = menuService;
        var config = {
            socialIcons: [
                { imageFile: 'src/imgs/facebook.png', alt: 'Facebook', url: 'http://facebook.com' },
                { imageFile: 'src/imgs/instagram.png', alt: 'Instargram', url: 'http://www.instagram.com' },
                { imageFile: 'src/imgs/twitter.png', alt: 'Twitter', url: 'http://twitter.com' },
                { imageFile: 'src/imgs/whatsapp.png', alt: 'WhatsApp', url: 'http://www.whatsapp.com' },
            ],
            showUserControls: true
        };
        spaConfigService.configure(config);
        menuService.items = _app_menu__WEBPACK_IMPORTED_MODULE_3__["AppMenuItems"];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_spa_services_spa_config_service__WEBPACK_IMPORTED_MODULE_1__["SpaConfigService"], _spa_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.menu.ts":
/*!*****************************!*\
  !*** ./src/app/app.menu.ts ***!
  \*****************************/
/*! exports provided: AppMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMenuItems", function() { return AppMenuItems; });
var AppMenuItems = [
    { text: 'Cars',
        icon: 'src/imgs/car.png',
        route: null,
        submenu: [
            { text: 'Select',
                icon: 'src/imgs/car.png',
                route: null,
                submenu: [
                    { text: 'Ferrary',
                        icon: 'src/imgs/car.png',
                        route: '/authenticated/car-detail/Ferrary',
                        submenu: null },
                    { text: 'Bugatti',
                        icon: 'src/imgs/car.png',
                        route: '/authenticated/car-detail/Bugatti',
                        submenu: null },
                    { text: 'Lamborghini',
                        icon: 'src/imgs/car.png',
                        route: '/authenticated/car-detail/Lamborghini',
                        submenu: null },
                    { text: 'Mazeratti',
                        icon: 'src/imgs/car.png',
                        route: '/authenticated/car-detail/Mazeratti',
                        submenu: null },
                ] },
            { text: 'Price top',
                icon: 'src/imgs/car.png',
                route: '/authenticated/car-list/1',
                submenu: null },
            { text: 'Top 3',
                icon: 'src/imgs/car.png',
                route: '/authenticated/car-list/3',
                submenu: null },
            { text: 'Top 5',
                icon: 'src/imgs/car.png',
                route: '/authenticated/car-list/5',
                submenu: null }
        ]
    },
    { text: 'Maintenance',
        icon: 'src/imgs/settings.png',
        route: null,
        submenu: [
            { text: 'Car maint',
                icon: 'src/imgs/settings.png',
                route: '/authenticated/car-maint',
                submenu: null },
            { text: 'Settings',
                icon: 'src/imgs/settings.png',
                route: '/authenticated/settings',
                submenu: null }
        ] },
    { text: 'Home',
        icon: 'src/imgs/home.png',
        route: '/authenticated/home',
        submenu: null },
];


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _spa_spa_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spa/spa.module */ "./src/spa/spa.module.ts");
/* harmony import */ var _routes_app_home_app_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/app-home/app-home.component */ "./src/app/routes/app-home/app-home.component.ts");
/* harmony import */ var _routes_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/settings/settings.component */ "./src/app/routes/settings/settings.component.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes_app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/app.routes */ "./src/app/routes/app.routes.ts");
/* harmony import */ var _routes_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/car-detail/car-detail.component */ "./src/app/routes/car-detail/car-detail.component.ts");
/* harmony import */ var _routes_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/car-list/car-list.component */ "./src/app/routes/car-list/car-list.component.ts");
/* harmony import */ var _routes_car_maint_car_maint_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/car-maint/car-maint.component */ "./src/app/routes/car-maint/car-maint.component.ts");
/* harmony import */ var _routes_authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/authenticated/authenticated.component */ "./src/app/routes/authenticated/authenticated.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _spa_users_user_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../spa/users/user-api */ "./src/spa/users/user-api.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_app_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/app-data.service */ "./src/app/services/app-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _routes_app_home_app_home_component__WEBPACK_IMPORTED_MODULE_4__["AppHomeComponent"],
                _routes_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
                _routes_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_8__["CarDetailComponent"],
                _routes_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_9__["CarListComponent"],
                _routes_car_maint_car_maint_component__WEBPACK_IMPORTED_MODULE_10__["CarMaintComponent"],
                _routes_authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_11__["AuthenticatedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _spa_spa_module__WEBPACK_IMPORTED_MODULE_3__["SpaModule"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_routes_app_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"])
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                {
                    provide: _spa_users_user_api__WEBPACK_IMPORTED_MODULE_13__["UserApi"], useExisting: _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]
                },
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"],
                _services_app_data_service__WEBPACK_IMPORTED_MODULE_15__["AppDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/routes/app-home/app-home.component.css":
/*!********************************************************!*\
  !*** ./src/app/routes/app-home/app-home.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/app-home/app-home.component.html":
/*!*********************************************************!*\
  !*** ./src/app/routes/app-home/app-home.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  app-home works!\n</p>\n"

/***/ }),

/***/ "./src/app/routes/app-home/app-home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/app-home/app-home.component.ts ***!
  \*******************************************************/
/*! exports provided: AppHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHomeComponent", function() { return AppHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHomeComponent = /** @class */ (function () {
    function AppHomeComponent() {
    }
    AppHomeComponent.prototype.ngOnInit = function () {
    };
    AppHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-home',
            template: __webpack_require__(/*! ./app-home.component.html */ "./src/app/routes/app-home/app-home.component.html"),
            styles: [__webpack_require__(/*! ./app-home.component.css */ "./src/app/routes/app-home/app-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppHomeComponent);
    return AppHomeComponent;
}());



/***/ }),

/***/ "./src/app/routes/app.routes.ts":
/*!**************************************!*\
  !*** ./src/app/routes/app.routes.ts ***!
  \**************************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _app_home_app_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-home/app-home.component */ "./src/app/routes/app-home/app-home.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/routes/settings/settings.component.ts");
/* harmony import */ var _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-list/car-list.component */ "./src/app/routes/car-list/car-list.component.ts");
/* harmony import */ var _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-detail/car-detail.component */ "./src/app/routes/car-detail/car-detail.component.ts");
/* harmony import */ var _car_maint_car_maint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./car-maint/car-maint.component */ "./src/app/routes/car-maint/car-maint.component.ts");
/* harmony import */ var _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authenticated/authenticated.component */ "./src/app/routes/authenticated/authenticated.component.ts");
/* harmony import */ var _spa_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../spa/users/sign-in/sign-in.component */ "./src/spa/users/sign-in/sign-in.component.ts");
/* harmony import */ var _spa_users_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../spa/users/registration/registration.component */ "./src/spa/users/registration/registration.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");









var appRoutes = [
    { path: 'sign-in', component: _spa_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"] },
    { path: 'register', component: _spa_users_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"] },
    { path: 'authenticated', component: _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_5__["AuthenticatedComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]], children: [
            { path: '', canActivateChild: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]], children: [
                    { path: 'home', component: _app_home_app_home_component__WEBPACK_IMPORTED_MODULE_0__["AppHomeComponent"] },
                    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_1__["SettingsComponent"] },
                    { path: 'car-list/:count', component: _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_2__["CarListComponent"] },
                    { path: 'car-detail/:id/:operation', component: _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_3__["CarDetailComponent"] },
                    { path: 'car-maint', component: _car_maint_car_maint_component__WEBPACK_IMPORTED_MODULE_4__["CarMaintComponent"] }
                ] }
        ] },
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    { path: '**', component: _spa_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"] }
];


/***/ }),

/***/ "./src/app/routes/authenticated/authenticated.component.css":
/*!******************************************************************!*\
  !*** ./src/app/routes/authenticated/authenticated.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/authenticated/authenticated.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/routes/authenticated/authenticated.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<spa-body></spa-body>\n"

/***/ }),

/***/ "./src/app/routes/authenticated/authenticated.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routes/authenticated/authenticated.component.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedComponent", function() { return AuthenticatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticatedComponent = /** @class */ (function () {
    function AuthenticatedComponent() {
    }
    AuthenticatedComponent.prototype.ngOnInit = function () {
    };
    AuthenticatedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authenticated',
            template: __webpack_require__(/*! ./authenticated.component.html */ "./src/app/routes/authenticated/authenticated.component.html"),
            styles: [__webpack_require__(/*! ./authenticated.component.css */ "./src/app/routes/authenticated/authenticated.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthenticatedComponent);
    return AuthenticatedComponent;
}());



/***/ }),

/***/ "./src/app/routes/car-detail/car-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/routes/car-detail/car-detail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/car-detail/car-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/routes/car-detail/car-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"car\">\r\n\r\n  <spa-dynamic-form [vm]='car' [vmDefinition]='carDefinitionInput' [operation]='operation' [errorMessage]='errorMessage' (update)='updateCar($event)' (create)='createCar($event)'>\r\n  </spa-dynamic-form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/car-detail/car-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/car-detail/car-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: CarDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailComponent", function() { return CarDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app-data.service */ "./src/app/services/app-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarDetailComponent = /** @class */ (function () {
    function CarDetailComponent(route, router, appDataService) {
        this.route = route;
        this.router = router;
        this.appDataService = appDataService;
        this.carDefinitionInput = [
            {
                key: 'id',
                type: 'number',
                isId: true,
                label: 'Id',
                required: true
            },
            {
                key: 'name',
                type: 'string',
                isId: false,
                label: 'Car name',
                required: true
            },
            {
                key: 'model',
                type: 'string',
                isId: false,
                label: 'Car model',
                required: true
            },
            {
                key: 'price',
                type: 'number',
                isId: false,
                label: 'Car price value',
                required: true
            }
        ];
    }
    CarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operation = this.route.snapshot.params['operation'];
        if (this.operation === 'create') {
            this.car = { id: 0, name: '', model: '', price: null };
        }
        else {
            // @ts-ignore
            this.appDataService.getCar(+this.route.snapshot.params['id']).subscribe(function (car) { return _this.car = car; });
        }
    };
    CarDetailComponent.prototype.createCar = function (car) {
        var _this = this;
        car.id = 0;
        this.errorMessage = null;
        this.appDataService.createCar(car).subscribe(function (c) { return _this.router.navigate(['/authenticated/car-maint']); }, function (error) { return _this.errorMessage = 'Error creating car'; });
    };
    CarDetailComponent.prototype.updateCar = function (car) {
        var _this = this;
        this.errorMessage = null;
        this.appDataService.updateCar(car).subscribe(function (c) { return _this.router.navigate(['/authenticated/car-maint']); }, function (error) { return _this.errorMessage = 'Error updating car'; });
    };
    CarDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-detail',
            template: __webpack_require__(/*! ./car-detail.component.html */ "./src/app/routes/car-detail/car-detail.component.html"),
            styles: [__webpack_require__(/*! ./car-detail.component.css */ "./src/app/routes/car-detail/car-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_app_data_service__WEBPACK_IMPORTED_MODULE_1__["AppDataService"]])
    ], CarDetailComponent);
    return CarDetailComponent;
}());



/***/ }),

/***/ "./src/app/routes/car-list/car-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/routes/car-list/car-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/car-list/car-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/routes/car-list/car-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  car-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/routes/car-list/car-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/car-list/car-list.component.ts ***!
  \*******************************************************/
/*! exports provided: CarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListComponent", function() { return CarListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarListComponent = /** @class */ (function () {
    function CarListComponent() {
    }
    CarListComponent.prototype.ngOnInit = function () {
    };
    CarListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-list',
            template: __webpack_require__(/*! ./car-list.component.html */ "./src/app/routes/car-list/car-list.component.html"),
            styles: [__webpack_require__(/*! ./car-list.component.css */ "./src/app/routes/car-list/car-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarListComponent);
    return CarListComponent;
}());



/***/ }),

/***/ "./src/app/routes/car-maint/car-maint.component.css":
/*!**********************************************************!*\
  !*** ./src/app/routes/car-maint/car-maint.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n  display: block;\r\n}\r\ntable {\r\n  margin-top: 20px;\r\n}\r\n.btn-sm {\r\n  width: 60px;\r\n  margin-left: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/routes/car-maint/car-maint.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/car-maint/car-maint.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Car Maintenents</h3>\r\n<button class=\"btn btn-primary\" (click)=\"createCar()\">Add new car</button>\r\n<table class=\"table table-hover table-striped\">\r\n  <tr class=\"row\">\r\n    <th class=\"col-lg-3 col-sm-3 col-3\"> Car name</th>\r\n    <th class=\"col-lg-3 col-sm-3 col-3\"> Car model</th>\r\n    <th class=\"col-lg-2 col-sm-2 col-3\">Price</th>\r\n    <th class=\"col-lg-4 col-sm-4 col-3\"></th>\r\n  </tr>\r\n  <tr class=\"row\" *ngFor=\"let item of CarList\">\r\n    <th class=\"col-lg-3 col-sm-3 col-3\">{{item.name}}</th>\r\n    <th class=\"col-lg-3 col-sm-3 col-3\">{{item.model}}</th>\r\n    <th class=\"col-lg-2 col-sm-2 col-3\">{{item.price}}</th>\r\n    <th class=\"col-lg-4 col-sm-4 col-3\" *ngIf=\"item.id != deleteId\">\r\n      <button class=\"btn btn-sm btn-primary\" (click)=\"showCarDetail(item.id)\">Details</button>\r\n      <button class=\"btn btn-sm btn-warning\" (click)=\"editCar(item.id)\">Edit</button>\r\n      <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCarQuestion(item.id)\">Delete</button>\r\n    </th>\r\n    <th class=\"col-lg-4 col-sm-4 col-3\" *ngIf=\"item.id === deleteId && !isDeleting\">\r\n      <button class=\"btn btn-sm btn-light\" (click)=\"cancelDelete(item.id)\">Cancel</button>\r\n      <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCar()\">Delete</button>\r\n      Delete this car?\r\n      <p *ngIf=\"deleteError\">{{deleteError}}</p>\r\n    </th>\r\n    <th class=\"col-lg-4 col-sm-4 col-3\" *ngIf=\"item.id === deleteId && isDeleting\">\r\n      Deleting...\r\n      <img src=\"src/imgs/deleteLoader.gif\">\r\n    </th>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/routes/car-maint/car-maint.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/car-maint/car-maint.component.ts ***!
  \*********************************************************/
/*! exports provided: CarMaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarMaintComponent", function() { return CarMaintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app-data.service */ "./src/app/services/app-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarMaintComponent = /** @class */ (function () {
    function CarMaintComponent(router, appDataService) {
        var _this = this;
        this.router = router;
        this.appDataService = appDataService;
        this.isDeleting = false;
        appDataService.getCars().subscribe(function (data) { _this.CarList = data; });
    }
    CarMaintComponent.prototype.ngOnInit = function () {
    };
    CarMaintComponent.prototype.createCar = function () {
        this.router.navigate(['/authenticated/car-detail', 0, 'create']);
    };
    CarMaintComponent.prototype.showCarDetail = function (id) {
        this.router.navigate(['/authenticated/car-detail', id, 'details']);
    };
    CarMaintComponent.prototype.editCar = function (id) {
        this.router.navigate(['/authenticated/car-detail', id, 'edit']);
    };
    CarMaintComponent.prototype.deleteCarQuestion = function (id) {
        this.deleteError = null;
        this.deleteId = id;
    };
    CarMaintComponent.prototype.cancelDelete = function () {
        this.isDeleting = false;
        this.deleteId = null;
    };
    CarMaintComponent.prototype.deleteCar = function (id) {
        var _this = this;
        this.isDeleting = true;
        this.appDataService.deleteCar(id).subscribe(function (c) { return _this.cancelDelete(); }, function (error) {
            _this.deleteError = error;
            _this.isDeleting = false;
        });
    };
    CarMaintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-maint',
            template: __webpack_require__(/*! ./car-maint.component.html */ "./src/app/routes/car-maint/car-maint.component.html"),
            styles: [__webpack_require__(/*! ./car-maint.component.css */ "./src/app/routes/car-maint/car-maint.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"]])
    ], CarMaintComponent);
    return CarMaintComponent;
}());



/***/ }),

/***/ "./src/app/routes/settings/settings.component.css":
/*!********************************************************!*\
  !*** ./src/app/routes/settings/settings.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/settings/settings.component.html":
/*!*********************************************************!*\
  !*** ./src/app/routes/settings/settings.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/routes/settings/settings.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/settings/settings.component.ts ***!
  \*******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/routes/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/routes/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/services/app-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/app-data.service.ts ***!
  \**********************************************/
/*! exports provided: AppDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDataService", function() { return AppDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppDataService = /** @class */ (function () {
    function AppDataService(userServices) {
        this.userServices = userServices;
        this.CarsColection = [
            { id: 1, name: 'Ford', model: 'Focus', price: 2100 },
            { id: 2, name: 'Mazda', model: '626', price: 3200 },
            { id: 3, name: 'Chery', model: 'Amulet', price: 1500 },
            { id: 4, name: 'BMW', model: 'M3', price: 3000 },
            { id: 5, name: 'Audi', model: 'Q7', price: 4300 },
            { id: 6, name: 'Honda', model: 'Civic', price: 2900 },
        ];
    }
    AppDataService.prototype.getCars = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.CarsColection);
    };
    AppDataService.prototype.getCar = function (id) {
        var car = this.CarsColection.find(function (item) { return item.id === id; });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(car);
    };
    AppDataService.prototype.deleteCar = function (id) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.CarsColection.splice(_this.CarsColection.findIndex(function (item) { return item.id === id; }), 1); }));
    };
    AppDataService.prototype.createCar = function (newCar) {
        var id = 0;
        this.CarsColection.forEach(function (item) {
            if (item.id >= id) {
                id = item.id = +1;
            }
        });
        newCar.id = id;
        this.CarsColection.push(newCar);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(newCar);
    };
    AppDataService.prototype.updateCar = function (CarForUpdating) {
        var car = this.CarsColection.find(function (item) { return item.id === CarForUpdating.id; });
        Object.assign(car, CarForUpdating);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(car).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000));
    };
    AppDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AppDataService);
    return AppDataService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.userService.isAuthenticated) {
            this.router.navigate(['/sign-in']);
        }
        else {
            return this.userService.isAuthenticated;
        }
    };
    AuthGuardService.prototype.canActivateChild = function () {
        return this.canActivate();
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(router) {
        this.router = router;
        this.isAuthenticated = true;
    }
    UserService.prototype.signIn = function (email, password) {
        if (email === 'test@gmail.com' && password === '123') {
            this.isAuthenticated = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Invalid email or password');
        }
    };
    UserService.prototype.signOut = function () {
        this.isAuthenticated = false;
        this.router.navigate(['/sign-in']);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserService);
    return UserService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/spa/directives/screen-large.directive.ts":
/*!******************************************************!*\
  !*** ./src/spa/directives/screen-large.directive.ts ***!
  \******************************************************/
/*! exports provided: ScreenLargeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenLargeDirective", function() { return ScreenLargeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/screen.service */ "./src/spa/services/screen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenLargeDirective = /** @class */ (function () {
    function ScreenLargeDirective(template, screenService, viewContainer) {
        var _this = this;
        this.template = template;
        this.screenService = screenService;
        this.viewContainer = viewContainer;
        this.hasView = false;
        screenService.resize$.subscribe(function () {
            _this.onResize();
        });
    }
    ScreenLargeDirective.prototype.onResize = function () {
        this.screenLarge = false;
    };
    ScreenLargeDirective.prototype.ngOnInit = function () {
        this.onResize();
    };
    Object.defineProperty(ScreenLargeDirective.prototype, "screenLarge", {
        set: function (condition) {
            condition = this.screenService.screenWidth >= this.screenService.largePixels[1];
            if (condition && !this.hasView) {
                this.hasView = true;
                this.viewContainer.createEmbeddedView(this.template);
            }
            else if (!condition && this.hasView) {
                this.hasView = false;
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ScreenLargeDirective.prototype, "screenLarge", null);
    ScreenLargeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[screenLarge]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _services_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ScreenLargeDirective);
    return ScreenLargeDirective;
}());



/***/ }),

/***/ "./src/spa/directives/screen-small.directive.ts":
/*!******************************************************!*\
  !*** ./src/spa/directives/screen-small.directive.ts ***!
  \******************************************************/
/*! exports provided: ScreenSmallDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSmallDirective", function() { return ScreenSmallDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/screen.service */ "./src/spa/services/screen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenSmallDirective = /** @class */ (function () {
    function ScreenSmallDirective(template, screenService, viewContainer) {
        var _this = this;
        this.template = template;
        this.screenService = screenService;
        this.viewContainer = viewContainer;
        this.hasView = false;
        screenService.resize$.subscribe(function () {
            _this.onResize();
        });
    }
    ScreenSmallDirective.prototype.ngOnInit = function () {
        this.onResize();
    };
    ScreenSmallDirective.prototype.onResize = function () {
        this.screenLargeMeddium = false;
    };
    Object.defineProperty(ScreenSmallDirective.prototype, "screenLargeMeddium", {
        set: function (maxCondition) {
            maxCondition = this.screenService.screenWidth < this.screenService.largePixels[1];
            if (maxCondition && !this.hasView) {
                this.hasView = true;
                this.viewContainer.createEmbeddedView(this.template);
            }
            else if (!maxCondition && this.hasView) {
                this.hasView = false;
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ScreenSmallDirective.prototype, "screenLargeMeddium", null);
    ScreenSmallDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[screenSmall]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _services_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ScreenSmallDirective);
    return ScreenSmallDirective;
}());



/***/ }),

/***/ "./src/spa/directives/screen-tablet.directive.ts":
/*!*******************************************************!*\
  !*** ./src/spa/directives/screen-tablet.directive.ts ***!
  \*******************************************************/
/*! exports provided: ScreenTabletDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTabletDirective", function() { return ScreenTabletDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/screen.service */ "./src/spa/services/screen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenTabletDirective = /** @class */ (function () {
    function ScreenTabletDirective(template, screenService, viewContainer) {
        var _this = this;
        this.template = template;
        this.screenService = screenService;
        this.viewContainer = viewContainer;
        this.hasView = false;
        screenService.resize$.subscribe(function () {
            _this.onResize();
        });
    }
    ScreenTabletDirective.prototype.ngOnInit = function () {
        this.onResize();
    };
    ScreenTabletDirective.prototype.onResize = function () {
        this.screenLargeMinimum = false;
    };
    Object.defineProperty(ScreenTabletDirective.prototype, "screenLargeMinimum", {
        set: function (minCondition) {
            minCondition = this.screenService.screenWidth < this.screenService.largePixels[0];
            if (minCondition && !this.hasView) {
                this.hasView = true;
                this.viewContainer.createEmbeddedView(this.template);
                console.log('600');
            }
            else if (!minCondition && this.hasView) {
                this.hasView = false;
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ScreenTabletDirective.prototype, "screenLargeMinimum", null);
    ScreenTabletDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ScreenTablet]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _services_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ScreenTabletDirective);
    return ScreenTabletDirective;
}());



/***/ }),

/***/ "./src/spa/dynamicForms/dynamic-field/dynamic-field.component.css":
/*!************************************************************************!*\
  !*** ./src/spa/dynamicForms/dynamic-field/dynamic-field.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/spa/dynamicForms/dynamic-field/dynamic-field.component.html":
/*!*************************************************************************!*\
  !*** ./src/spa/dynamicForms/dynamic-field/dynamic-field.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"operation === 'create' && field.isId\" [formGroup]=\"form\">\n  <div [ngSwitch]=\"field.type\">\n    <div *ngSwitchCase=\"'string'\" class=\"form-group\">\n      <label [for]=\"field.key\">{{field.label}}</label>\n      <input type=\"text\" class=\"form-control\" autocomplete=\"off\" [formControlName]=\"field.key\" [id]=\"field.key\" [readonly]=\"operation === 'details' || field.isId\" >\n    </div>\n    <div *ngSwitchCase=\"'number'\" class=\"form-group\">\n      <label [for]=\"field.key\">{{field.label}}</label>\n      <input type=\"number\" class=\"form-control\" autocomplete=\"off\" [formControlName]=\"field.key\" [id]=\"field.key\" [readonly]=\"operation === 'details' || field.isId\" >\n    </div>\n    <div *ngIf=\"form.get(field.key).hasError('required') && (submitted || form.get(field.key).touched)\" class=\"alert alert-danger\">\n      {{field.label}} is required\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/spa/dynamicForms/dynamic-field/dynamic-field.component.ts":
/*!***********************************************************************!*\
  !*** ./src/spa/dynamicForms/dynamic-field/dynamic-field.component.ts ***!
  \***********************************************************************/
/*! exports provided: DynamicFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldComponent", function() { return DynamicFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFieldComponent = /** @class */ (function () {
    function DynamicFieldComponent() {
    }
    Object.defineProperty(DynamicFieldComponent.prototype, "isvalid", {
        get: function () {
            return this.form.controls[this.field.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFieldComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicFieldComponent.prototype, "field", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], DynamicFieldComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DynamicFieldComponent.prototype, "operation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DynamicFieldComponent.prototype, "submitted", void 0);
    DynamicFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spa-dynamic-field',
            template: __webpack_require__(/*! ./dynamic-field.component.html */ "./src/spa/dynamicForms/dynamic-field/dynamic-field.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-field.component.css */ "./src/spa/dynamicForms/dynamic-field/dynamic-field.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicFieldComponent);
    return DynamicFieldComponent;
}());



/***/ }),

/***/ "./src/spa/dynamicForms/dynamic-form/dynamic-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/spa/dynamicForms/dynamic-form/dynamic-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n  margin-right: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/spa/dynamicForms/dynamic-form/dynamic-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/spa/dynamicForms/dynamic-form/dynamic-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  <div [ngSwitch]=\"operation\">\r\n    <span *ngSwitchCase=\"'details'\">Reading panel</span>\r\n    <span *ngSwitchCase=\"'create'\">Adding panel</span>\r\n    <span *ngSwitchCase=\"'edit'\">Editing panel</span>\r\n  </div>\r\n</h3>\r\n<div>\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n    <div *ngFor=\"let field of vmDefinition\">\r\n      <spa-dynamic-field [field]=\"field\" [form]=\"form\" [operation]=\"operation\" [submitted]=\"submitted\"></spa-dynamic-field>\r\n    </div>\r\n    <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\r\n      {{errorMessage}}\r\n    </div>\r\n    <div *ngIf=\"status != 'waiting'\">\r\n      <div *ngIf=\"operation === 'details'\">\r\n        <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-primary\">Go back</button>\r\n        <button type=\"button\" (click)=\"onEdit()\" class=\"btn btn-success\">Edit</button>\r\n      </div>\r\n      <div *ngIf=\"operation === 'edit'\">\r\n        <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary\">Cancel</button>\r\n        <button type=\"button\" (click)=\"onSave()\" class=\"btn btn-success\">Save</button>\r\n      </div>\r\n      <div *ngIf=\"operation === 'create'\">\r\n        <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-primary\">Go back</button>\r\n        <button type=\"button\" (click)=\"onCreate()\" class=\"btn btn-success\">Create</button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"status === 'waiting'\">\r\n      Waiting...\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/spa/dynamicForms/dynamic-form/dynamic-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/spa/dynamicForms/dynamic-form/dynamic-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(route, router, location) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.submitted = false;
    }
    DynamicFormComponent.prototype.clearForm = function () {
        var _this = this;
        var group = {};
        this.vmCopy = Object.assign({}, this.vm);
        this.vmDefinition.forEach(function (field) {
            group[field.key] = field.required ?
                new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this.vmCopy[field.key], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required) :
                new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this.vmCopy[field.key]);
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](group);
    };
    DynamicFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clearForm();
        this.route.params.subscribe(function (params) {
            _this.operation = params['operation'];
            _this.clearForm();
        });
    };
    DynamicFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes['errorMessage'].currentValue && this.status === 'waiting') {
            this.status = '';
        }
    };
    DynamicFormComponent.prototype.onBack = function () {
        this.errorMessage = null;
        this.location.back();
    };
    DynamicFormComponent.prototype.onEdit = function () {
        this.router.navigate(['../', 'edit'], { relativeTo: this.route });
    };
    DynamicFormComponent.prototype.onCancel = function () {
        this.onBack();
    };
    DynamicFormComponent.prototype.onSave = function () {
        this.submitted = true;
        if (this.form.valid) {
            this.status = 'waiting';
            this.update.emit(this.form.value);
        }
    };
    DynamicFormComponent.prototype.onCreate = function () {
        this.submitted = true;
        if (this.form.valid) {
            this.status = 'waiting';
            this.create.emit(this.form.value);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "vm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "vmDefinition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DynamicFormComponent.prototype, "operation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DynamicFormComponent.prototype, "errorMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DynamicFormComponent.prototype, "update", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DynamicFormComponent.prototype, "create", void 0);
    DynamicFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spa-dynamic-form',
            template: __webpack_require__(/*! ./dynamic-form.component.html */ "./src/spa/dynamicForms/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-form.component.css */ "./src/spa/dynamicForms/dynamic-form/dynamic-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "./src/spa/icon-bar/icon-bar.component.css":
/*!*************************************************!*\
  !*** ./src/spa/icon-bar/icon-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  /*height: 60px;*/\r\n  text-align: right;\r\n  padding-top: 6px;\r\n  color: #eee;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\ndiv {\r\n  display: inline;\r\n  margin-left: 10px;\r\n  font-size: 22px;\r\n  vertical-align: middle;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.top-img {\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-left: 10px;\r\n}\r\n\r\nspan {\r\n  margin-right: 10px;\r\n}\r\n\r\n.forSmall {\r\n  font-size: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: auto;\r\n  margin-left: 0;\r\n  text-align: center;\r\n}\r\n\r\n.forSmall span {\r\n  margin: 0;\r\n}\r\n\r\n.forSmall button {\r\n  padding: 5px 3px;\r\n}\r\n"

/***/ }),

/***/ "./src/spa/icon-bar/icon-bar.component.html":
/*!**************************************************!*\
  !*** ./src/spa/icon-bar/icon-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showIcons\">\n  <a *ngFor=\"let icon of spaConfigService.socialIcons\" [href]=\"icon.url\" [title]='icon.alt' target='_blank'>\n    <img class='top-img' [src]=\"icon.imageFile\" [alt]=\"icon.alt\"></a>\n</div>\n<div [ngClass]='{\"forSmall\": !showIcons}' *ngIf=\"spaConfigService.showUserControls\">\n  <span>User name</span>\n  <button *ngIf=\"!showLoader\" class=\"btn btn-sm btn-warning\" (click)='signOut()'>Sign out</button>\n  <img src='src/imgs/loaderOut.gif' *ngIf=\"showLoader\">\n</div>\n"

/***/ }),

/***/ "./src/spa/icon-bar/icon-bar.component.ts":
/*!************************************************!*\
  !*** ./src/spa/icon-bar/icon-bar.component.ts ***!
  \************************************************/
/*! exports provided: IconBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBarComponent", function() { return IconBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_spa_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/spa-config.service */ "./src/spa/services/spa-config.service.ts");
/* harmony import */ var _users_user_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/user-api */ "./src/spa/users/user-api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconBarComponent = /** @class */ (function () {
    function IconBarComponent(spaConfigService, userApi) {
        this.spaConfigService = spaConfigService;
        this.userApi = userApi;
    }
    IconBarComponent.prototype.ngOnInit = function () {
        this.showLoader = false;
    };
    IconBarComponent.prototype.signOut = function () {
        var _this = this;
        this.showLoader = true;
        setTimeout(function () { _this.userApi.signOut(); }, 2000);
        console.log('Sing Out');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IconBarComponent.prototype, "showIcons", void 0);
    IconBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'icon-bar',
            template: __webpack_require__(/*! ./icon-bar.component.html */ "./src/spa/icon-bar/icon-bar.component.html"),
            styles: [__webpack_require__(/*! ./icon-bar.component.css */ "./src/spa/icon-bar/icon-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_spa_config_service__WEBPACK_IMPORTED_MODULE_1__["SpaConfigService"], _users_user_api__WEBPACK_IMPORTED_MODULE_2__["UserApi"]])
    ], IconBarComponent);
    return IconBarComponent;
}());



/***/ }),

/***/ "./src/spa/menus/menu-item/menu-item.component.css":
/*!*********************************************************!*\
  !*** ./src/spa/menus/menu-item/menu-item.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: inline-block;\r\n  position: relative;\r\n  margin-top: 0;\r\n  margin-left: 0;\r\n  margin-bottom: 0;\r\n  padding: 0;\r\n  font-size: 16px;\r\n  /*line-height: 6px;*/\r\n  color: #eee;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n}\r\n.menu-item {\r\n  padding: 10px 6px 10px 4px;\r\n  transition: all 0.2s ease;\r\n}\r\n.menu-item:hover {\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n  background-color: rgba(207, 58, 58, 0.8);\r\n}\r\n.icon {\r\n  top: -2px;\r\n  position: relative;\r\n  margin-right: 4px;\r\n}\r\n.icon img {\r\n  width: 22px;\r\n  height: 22px;\r\n}\r\n:host:not(.parent-for-popup) {\r\n  margin-left: 16px;\r\n  width: auto;\r\n}\r\n:host(.vertical-menu) {\r\n  display: block;\r\n  margin-left: 0;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n:host(div.vertical-menu) {\r\n  font-size: 10px;\r\n}\r\n:host(.vertical-menu .menu-item) {\r\n  font-size: 12px;\r\n  padding: 3px 15px 3px 8px;\r\n}\r\n.active {\r\n  outline: none;\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n  background-color: rgba(247, 58, 58, 0.8);\r\n}\r\n:host(.vertical-menu.in-popup) {\r\n  padding-left: 14px;\r\n}\r\nspan span button {\r\n  margin: 3px 0 3px 5px;\r\n  padding: 0;\r\n  background: transparent;\r\n  border: none;\r\n}\r\nspan.dropdown,\r\nspan.dropleft,\r\nspan.dropright {\r\n  float: right;\r\n}\r\nspan.dropdown>button.dropdown-toggle::after {\r\n  border-top-color: #fff;\r\n}\r\nspan.dropright>button.dropdown-toggle::after {\r\n  border-left-color: #fff;\r\n}\r\nspan.dropleft>button.dropdown-toggle::before {\r\n  border-right-color: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/spa/menus/menu-item/menu-item.component.html":
/*!**********************************************************!*\
  !*** ./src/spa/menus/menu-item/menu-item.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='menu-item' [ngClass]=\"{'vertical-menu': menuService.isVertical, 'active': isActiveRoute}\" [routerLink]='item.route'>\n  <span class='icon'><img [src]='item.icon' ></span>\n  <span>{{item.text}}</span>\n  <span *ngIf=\"item.submenu && !menuService.isVertical\">\n    <span [ngClass]='parentIsPopup ? \"dropright\": \"dropdown\"'>\n      <button class=\"dropdown-toggle\"></button>\n    </span>\n  </span>\n  <span *ngIf=\"item.submenu && menuService.isVertical\">\n    <span [ngClass]='(mouseInItem || mouseInPopup) ? \"dropright\": \"dropdown\"'>\n      <button class=\"dropdown-toggle\"></button>\n    </span>\n  </span>\n</div>\n<spa-popup-menu *ngIf=\"mouseInPopup || mouseInItem\" [menu]='item.submenu' [ngClass]='{\"vertical-menu\": menuService.isVertical}' [style.left]='popupLeft+\"px\"' [style.top]='popupTop+\"px\"' (mouseleave)='onPopupMouseLeave($event)' (mouseenter)='onPopupMouseEnter($event)'></spa-popup-menu>\n"

/***/ }),

/***/ "./src/spa/menus/menu-item/menu-item.component.ts":
/*!********************************************************!*\
  !*** ./src/spa/menus/menu-item/menu-item.component.ts ***!
  \********************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/menu.service */ "./src/spa/services/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent(menuService, router, el, renderer) {
        this.menuService = menuService;
        this.router = router;
        this.el = el;
        this.renderer = renderer;
        this.parentIsPopup = true;
        this.mouseInPopup = false;
        this.mouseInItem = false;
        this.popupLeft = 0;
        this.popupTop = 42;
        this.isActiveRoute = false;
    }
    MenuItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkingActiveRoute(this.router.url);
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.checkingActiveRoute(event.url);
            }
        });
    };
    MenuItemComponent.prototype.checkingActiveRoute = function (route) {
        this.isActiveRoute = (route === this.item.route);
    };
    MenuItemComponent.prototype.onPopupMouseLeave = function (event) {
        if (!this.menuService.isVertical) {
            this.mouseInPopup = false;
        }
    };
    MenuItemComponent.prototype.onPopupMouseEnter = function (event) {
        if (!this.menuService.isVertical) {
            this.mouseInPopup = true;
        }
    };
    MenuItemComponent.prototype.onMouseLeave = function (event) {
        if (!this.menuService.isVertical) {
            this.mouseInItem = false;
        }
    };
    MenuItemComponent.prototype.onMouseEnter = function () {
        if (!this.menuService.isVertical) {
            if (this.item.submenu) {
                this.mouseInItem = true;
                if (this.parentIsPopup) {
                    this.popupLeft = 160;
                    this.popupTop = 0;
                }
            }
        }
    };
    MenuItemComponent.prototype.onClick = function (event) {
        event.stopPropagation();
        if (this.item.submenu) {
            if (this.menuService.isVertical) {
                this.mouseInPopup = !this.mouseInPopup;
            }
            else if (this.item.route) {
                var newEvent = new MouseEvent('mouseleave', { bubbles: true });
                this.renderer.invokeElementMethod(this.el.nativeElement, 'dispatchEvent', [newEvent]);
                this.router.navigate([this.item.route]);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.parent-for-popup'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "parentIsPopup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MenuItemComponent.prototype, "onMouseLeave", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MenuItemComponent.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], MenuItemComponent.prototype, "onClick", null);
    MenuItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spa-menu-item',
            template: __webpack_require__(/*! ./menu-item.component.html */ "./src/spa/menus/menu-item/menu-item.component.html"),
            styles: [__webpack_require__(/*! ./menu-item.component.css */ "./src/spa/menus/menu-item/menu-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], MenuItemComponent);
    return MenuItemComponent;
}());



/***/ }),

/***/ "./src/spa/menus/menu/menu.component.css":
/*!***********************************************!*\
  !*** ./src/spa/menus/menu/menu.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: flex-end;\r\n    flex-grow: 1;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    display: inline;\r\n}\r\n\r\n:host(.vertical-menu) {\r\n    display: inline-block;\r\n    max-width: 160px;\r\n    min-width: 160px;\r\n    height: 100vh;\r\n    padding-left: 4px;\r\n    flex-grow: 0;\r\n    background-color: rgb(53, 133, 138);\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n:host(.vertical-menu>span.icon) {\r\n    width: 14px;\r\n    height: 14px;\r\n}\r\n\r\ndiv {\r\n  margin-top: 20px;\r\n}\r\n\r\ndiv button {\r\n  background-color: rgb(225, 224, 243);\r\n}\r\n\r\nbutton.horizontal {\r\n  margin-left: 20px;\r\n  margin-bottom: 7px;\r\n}\r\n"

/***/ }),

/***/ "./src/spa/menus/menu/menu.component.html":
/*!************************************************!*\
  !*** ./src/spa/menus/menu/menu.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <ul>\n        <li *ngFor=\"let item of menuService.items\">\n            <spa-menu-item [item]='item' [ngClass]='{\"vertical-menu\" : menuService.isVertical}'\n            [parentIsPopup]='false'>\n\n            </spa-menu-item>\n        </li>\n    </ul>\n\n</nav>\n<div [ngClass]='menuService.isVertical? \"dropup\": \"dropleft\"'>\n  <button class=\"btn btn-default btn-sm dropdown-toggle\" *ngIf=\"!menuService.showVerticalMenu\" [ngClass]='{\"horizontal\": !menuService.isVertical}' (click)=\"menuService.toggleOrientation()\"></button>\n</div>\n"

/***/ }),

/***/ "./src/spa/menus/menu/menu.component.ts":
/*!**********************************************!*\
  !*** ./src/spa/menus/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/menu.service */ "./src/spa/services/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuService) {
        this.menuService = menuService;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spa-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/spa/menus/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/spa/menus/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/spa/menus/popup-menu/popup-menu.component.css":
/*!***********************************************************!*\
  !*** ./src/spa/menus/popup-menu/popup-menu.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  position: absolute;\r\n  display: inline-block;\r\n  width: 160px;\r\n  background-color: #16484b;\r\n  border: 1px solid black;\r\n  z-index: 1;\r\n  box-shadow: 2px 2px 5px #bcbcbc;\r\n}\r\n\r\n:host(.vertical-menu) {\r\n  position: static;\r\n  display: block;\r\n  width: 100%;\r\n  background-color: transparent;\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n"

/***/ }),

/***/ "./src/spa/menus/popup-menu/popup-menu.component.html":
/*!************************************************************!*\
  !*** ./src/spa/menus/popup-menu/popup-menu.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li *ngFor=\"let item of menu\">\r\n  <spa-menu-item [item]='item' class='in-popup' [ngClass]='{\"vertical-menu\": menuService.isVertical}'></spa-menu-item>\r\n</li>\r\n"

/***/ }),

/***/ "./src/spa/menus/popup-menu/popup-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/spa/menus/popup-menu/popup-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: PopupMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMenuComponent", function() { return PopupMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/menu.service */ "./src/spa/services/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupMenuComponent = /** @class */ (function () {
    function PopupMenuComponent(menuService) {
        this.menuService = menuService;
    }
    PopupMenuComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PopupMenuComponent.prototype, "menu", void 0);
    PopupMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spa-popup-menu',
            template: __webpack_require__(/*! ./popup-menu.component.html */ "./src/spa/menus/popup-menu/popup-menu.component.html"),
            styles: [__webpack_require__(/*! ./popup-menu.component.css */ "./src/spa/menus/popup-menu/popup-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], PopupMenuComponent);
    return PopupMenuComponent;
}());



/***/ }),

/***/ "./src/spa/services/menu.service.ts":
/*!******************************************!*\
  !*** ./src/spa/services/menu.service.ts ***!
  \******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuService = /** @class */ (function () {
    function MenuService() {
        this.isVertical = false;
        this.showVerticalMenu = false;
    }
    MenuService.prototype.toggleMenu = function () {
        this.isVertical = true;
        this.showVerticalMenu = !this.showVerticalMenu;
    };
    MenuService.prototype.toggleOrientation = function () {
        this.isVertical = !this.isVertical;
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/spa/services/screen.service.ts":
/*!********************************************!*\
  !*** ./src/spa/services/screen.service.ts ***!
  \********************************************/
/*! exports provided: ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return ScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenService = /** @class */ (function () {
    function ScreenService() {
        var _this = this;
        this.resizeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.resize$ = this.resizeSource.asObservable();
        this.largePixels = [600, 800];
        try {
            this.screenWidth = window.innerWidth;
            this.srceenHeight = window.innerHeight;
            window.addEventListener('resize', function (event) { return _this.onResize(event); });
        }
        catch (e) {
            console.log(e);
        }
    }
    ScreenService.prototype.onResize = function (event) {
        this.screenWidth = window.innerWidth;
        this.srceenHeight = window.innerHeight;
        this.resizeSource.next();
    };
    ScreenService.prototype.isLarge = function () {
        return this.screenWidth >= this.largePixels[0];
    };
    ScreenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ScreenService);
    return ScreenService;
}());



/***/ }),

/***/ "./src/spa/services/spa-config.service.ts":
/*!************************************************!*\
  !*** ./src/spa/services/spa-config.service.ts ***!
  \************************************************/
/*! exports provided: SpaConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaConfigService", function() { return SpaConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpaConfigService = /** @class */ (function () {
    function SpaConfigService() {
        this.showUserControls = true;
        this.socialIcons = new Array();
    }
    SpaConfigService.prototype.configure = function (settings) {
        Object.assign(this, settings);
    };
    SpaConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SpaConfigService);
    return SpaConfigService;
}());



/***/ }),

/***/ "./src/spa/spa-body/spa-body.component.css":
/*!*************************************************!*\
  !*** ./src/spa/spa-body/spa-body.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/spa/spa-body/spa-body.component.html":
/*!**************************************************!*\
  !*** ./src/spa/spa-body/spa-body.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<spa-header></spa-header>\n<spa-main></spa-main>\n<spa-footer></spa-footer>\n"

/***/ }),

/***/ "./src/spa/spa-body/spa-body.component.ts":
/*!************************************************!*\
  !*** ./src/spa/spa-body/spa-body.component.ts ***!
  \************************************************/
/*! exports provided: SpaBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaBodyComponent", function() { return SpaBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpaBodyComponent = /** @class */ (function () {
    function SpaBodyComponent() {
    }
    SpaBodyComponent.prototype.ngOnInit = function () {
    };
    SpaBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spa-body',
            template: __webpack_require__(/*! ./spa-body.component.html */ "./src/spa/spa-body/spa-body.component.html"),
            styles: [__webpack_require__(/*! ./spa-body.component.css */ "./src/spa/spa-body/spa-body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpaBodyComponent);
    return SpaBodyComponent;
}());



/***/ }),

/***/ "./src/spa/spa-footer/spa-footer.component.css":
/*!*****************************************************!*\
  !*** ./src/spa/spa-footer/spa-footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  min-height: 30px;\r\n  background-color: #16484b;\r\n}\r\n\r\ndiv {\r\n  margin: 5px 10px 0;\r\n  float: right;\r\n  color: #ddd;\r\n}\r\n"

/***/ }),

/***/ "./src/spa/spa-footer/spa-footer.component.html":
/*!******************************************************!*\
  !*** ./src/spa/spa-footer/spa-footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  &copy; {{year}} {{title}}\n</div>\n"

/***/ }),

/***/ "./src/spa/spa-footer/spa-footer.component.ts":
/*!****************************************************!*\
  !*** ./src/spa/spa-footer/spa-footer.component.ts ***!
  \****************************************************/
/*! exports provided: SpaFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaFooterComponent", function() { return SpaFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpaFooterComponent = /** @class */ (function () {
    function SpaFooterComponent() {
        this.title = 'Учебный проект';
        this.year = new Date().getFullYear();
    }
    SpaFooterComponent.prototype.ngOnInit = function () {
    };
    SpaFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spa-footer',
            template: __webpack_require__(/*! ./spa-footer.component.html */ "./src/spa/spa-footer/spa-footer.component.html"),
            styles: [__webpack_require__(/*! ./spa-footer.component.css */ "./src/spa/spa-footer/spa-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpaFooterComponent);
    return SpaFooterComponent;
}());



/***/ }),

/***/ "./src/spa/spa-header/spa-header.component.css":
/*!*****************************************************!*\
  !*** ./src/spa/spa-header/spa-header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  background-color: #16484b;\r\n}\r\n.title-bar {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  min-height: 120px;\r\n  padding: 10px 0;\r\n}\r\n.title-bar img {\r\n  height: 120px;\r\n}\r\n.menu-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  padding-right: 20px;\r\n}\r\n.title-bar-small {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  min-height: 60px;\r\n}\r\n.small-icon-holder {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.small-icon-holder a {\r\n  border: 2px solid #bcbcbc;\r\n  border-radius: 20%;\r\n  opacity: 0.5;\r\n  margin: 0 10px;\r\n  cursor: pointer;\r\n}\r\n.small-image-holder {\r\n  flex-grow: 1;\r\n  padding: 10px 0;\r\n  display: flex;\r\n}\r\na > .small-image {\r\n  height: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/spa/spa-header/spa-header.component.html":
/*!******************************************************!*\
  !*** ./src/spa/spa-header/spa-header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *screenLarge class=\"title-bar\">\n  <img src=\"src/imgs/logo.png\" alt=\"Cars fest logo\">\n  <div class=\"menu-area\">\n    <icon-bar [showIcons]='flagForIcons'></icon-bar>\n    <spa-menu *ngIf=\"!menuService.isVertical\"></spa-menu>\n  </div>\n</div>\n<div *screenSmall class=\"title-bar\">\n  <div class=\"small-icon-holder\">\n    <a>\n      <img class=\"small-image\" src=\"src/imgs/menu.png\" (click)=\"menuService.toggleMenu()\">\n    </a>\n  </div>\n  <icon-bar [showIcons]='!flagForIcons'></icon-bar>\n  <div class=\"small-image-holder\">\n    <img src=\"src/imgs/logo.png\" alt=\"Cars fest logo\">\n  </div>\n</div>\n<div *ScreenTablet></div>\n"

/***/ }),

/***/ "./src/spa/spa-header/spa-header.component.ts":
/*!****************************************************!*\
  !*** ./src/spa/spa-header/spa-header.component.ts ***!
  \****************************************************/
/*! exports provided: SpaHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaHeaderComponent", function() { return SpaHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/screen.service */ "./src/spa/services/screen.service.ts");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/menu.service */ "./src/spa/services/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpaHeaderComponent = /** @class */ (function () {
    function SpaHeaderComponent(screeService, menuService) {
        this.screeService = screeService;
        this.menuService = menuService;
        this.flagForIcons = true;
    }
    SpaHeaderComponent.prototype.ngOnInit = function () {
    };
    SpaHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spa-header',
            template: __webpack_require__(/*! ./spa-header.component.html */ "./src/spa/spa-header/spa-header.component.html"),
            styles: [__webpack_require__(/*! ./spa-header.component.css */ "./src/spa/spa-header/spa-header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"], _services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], SpaHeaderComponent);
    return SpaHeaderComponent;
}());



/***/ }),

/***/ "./src/spa/spa-main/spa-main.component.css":
/*!*************************************************!*\
  !*** ./src/spa/spa-main/spa-main.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  background-color: #bcbcbc;\r\n  flex-shrink: 1;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  height: 100vh;\r\n}\r\n.body-style {\r\n  padding: 22px;\r\n  flex-grow: 1;\r\n}\r\n"

/***/ }),

/***/ "./src/spa/spa-main/spa-main.component.html":
/*!**************************************************!*\
  !*** ./src/spa/spa-main/spa-main.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<spa-menu *ngIf=\"menuService.isVertical && screenService.isLarge() ||\nmenuService.showVerticalMenu && !screenService.isLarge()\" class='vertical-menu'></spa-menu>\n<div class='body-style'>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/spa/spa-main/spa-main.component.ts":
/*!************************************************!*\
  !*** ./src/spa/spa-main/spa-main.component.ts ***!
  \************************************************/
/*! exports provided: SpaMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaMainComponent", function() { return SpaMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/screen.service */ "./src/spa/services/screen.service.ts");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/menu.service */ "./src/spa/services/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpaMainComponent = /** @class */ (function () {
    function SpaMainComponent(screenService, menuService) {
        this.screenService = screenService;
        this.menuService = menuService;
    }
    SpaMainComponent.prototype.ngOnInit = function () {
    };
    SpaMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spa-main',
            template: __webpack_require__(/*! ./spa-main.component.html */ "./src/spa/spa-main/spa-main.component.html"),
            styles: [__webpack_require__(/*! ./spa-main.component.css */ "./src/spa/spa-main/spa-main.component.css")]
        }),
        __metadata("design:paramtypes", [_services_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"], _services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], SpaMainComponent);
    return SpaMainComponent;
}());



/***/ }),

/***/ "./src/spa/spa.module.ts":
/*!*******************************!*\
  !*** ./src/spa/spa.module.ts ***!
  \*******************************/
/*! exports provided: SpaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaModule", function() { return SpaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _spa_body_spa_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spa-body/spa-body.component */ "./src/spa/spa-body/spa-body.component.ts");
/* harmony import */ var _spa_header_spa_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spa-header/spa-header.component */ "./src/spa/spa-header/spa-header.component.ts");
/* harmony import */ var _spa_footer_spa_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spa-footer/spa-footer.component */ "./src/spa/spa-footer/spa-footer.component.ts");
/* harmony import */ var _spa_main_spa_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spa-main/spa-main.component */ "./src/spa/spa-main/spa-main.component.ts");
/* harmony import */ var _services_spa_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/spa-config.service */ "./src/spa/services/spa-config.service.ts");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/screen.service */ "./src/spa/services/screen.service.ts");
/* harmony import */ var _icon_bar_icon_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon-bar/icon-bar.component */ "./src/spa/icon-bar/icon-bar.component.ts");
/* harmony import */ var _directives_screen_small_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/screen-small.directive */ "./src/spa/directives/screen-small.directive.ts");
/* harmony import */ var _directives_screen_large_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/screen-large.directive */ "./src/spa/directives/screen-large.directive.ts");
/* harmony import */ var _directives_screen_tablet_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/screen-tablet.directive */ "./src/spa/directives/screen-tablet.directive.ts");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/menu.service */ "./src/spa/services/menu.service.ts");
/* harmony import */ var _menus_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menus/menu/menu.component */ "./src/spa/menus/menu/menu.component.ts");
/* harmony import */ var _menus_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menus/menu-item/menu-item.component */ "./src/spa/menus/menu-item/menu-item.component.ts");
/* harmony import */ var _menus_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./menus/popup-menu/popup-menu.component */ "./src/spa/menus/popup-menu/popup-menu.component.ts");
/* harmony import */ var _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./users/sign-in/sign-in.component */ "./src/spa/users/sign-in/sign-in.component.ts");
/* harmony import */ var _users_registration_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./users/registration/registration.component */ "./src/spa/users/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dynamicForms_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dynamicForms/dynamic-form/dynamic-form.component */ "./src/spa/dynamicForms/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _dynamicForms_dynamic_field_dynamic_field_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dynamicForms/dynamic-field/dynamic-field.component */ "./src/spa/dynamicForms/dynamic-field/dynamic-field.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var SpaModule = /** @class */ (function () {
    function SpaModule() {
    }
    SpaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]
            ],
            declarations: [
                _spa_body_spa_body_component__WEBPACK_IMPORTED_MODULE_3__["SpaBodyComponent"],
                _spa_header_spa_header_component__WEBPACK_IMPORTED_MODULE_4__["SpaHeaderComponent"],
                _spa_footer_spa_footer_component__WEBPACK_IMPORTED_MODULE_5__["SpaFooterComponent"],
                _spa_main_spa_main_component__WEBPACK_IMPORTED_MODULE_6__["SpaMainComponent"],
                _icon_bar_icon_bar_component__WEBPACK_IMPORTED_MODULE_9__["IconBarComponent"],
                _directives_screen_small_directive__WEBPACK_IMPORTED_MODULE_10__["ScreenSmallDirective"],
                _directives_screen_large_directive__WEBPACK_IMPORTED_MODULE_11__["ScreenLargeDirective"],
                _directives_screen_tablet_directive__WEBPACK_IMPORTED_MODULE_12__["ScreenTabletDirective"],
                _menus_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _menus_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_15__["MenuItemComponent"],
                _menus_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_16__["PopupMenuComponent"],
                _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__["SignInComponent"],
                _users_registration_registration_component__WEBPACK_IMPORTED_MODULE_18__["RegistrationComponent"],
                _dynamicForms_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_20__["DynamicFormComponent"],
                _dynamicForms_dynamic_field_dynamic_field_component__WEBPACK_IMPORTED_MODULE_21__["DynamicFieldComponent"]
            ],
            exports: [
                _spa_body_spa_body_component__WEBPACK_IMPORTED_MODULE_3__["SpaBodyComponent"],
                _dynamicForms_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_20__["DynamicFormComponent"]
            ],
            providers: [
                _services_spa_config_service__WEBPACK_IMPORTED_MODULE_7__["SpaConfigService"],
                _services_screen_service__WEBPACK_IMPORTED_MODULE_8__["ScreenService"],
                _services_menu_service__WEBPACK_IMPORTED_MODULE_13__["MenuService"]
            ]
        })
    ], SpaModule);
    return SpaModule;
}());



/***/ }),

/***/ "./src/spa/users/registration/registration.component.css":
/*!***************************************************************!*\
  !*** ./src/spa/users/registration/registration.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-image: url('/src/imgs/signinlogo.jpg');\r\n  background-position: center center;\r\n  background-size: cover;\r\n}\r\n.register-form {\r\n  min-width: 290px;\r\n  background-color: rgb(194, 204, 207);\r\n  opacity: 0.9;\r\n  padding: 20px;\r\n  margin: 5px 10px;\r\n  border-radius: 10% 0;\r\n}\r\nbutton.btn-primary {\r\n  float: right;\r\n}\r\nspan>img {\r\n  margin-left: 5%;\r\n}\r\n"

/***/ }),

/***/ "./src/spa/users/registration/registration.component.html":
/*!****************************************************************!*\
  !*** ./src/spa/users/registration/registration.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-form\">\n  <h4>Register for new account</h4>\n  <form novalidate (ngSubmit)=\"onSubmit(registerForm)\" #registerForm=\"ngForm\">\n    <div class=\"form-group\">\n      <input type=\"text\" autocomplete=\"off\" name=\"name\" required placeholder=\"User name\" ngModel #name = 'ngModel' class=\"form-control\">\n      <div class=\"alert alert-danger\" [hidden]=\"name.valid || name.pristine\">Please enter your name</div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"email\" autocomplete=\"off\" name=\"email\" required placeholder=\"User Email\" ngModel #email = 'ngModel' class=\"form-control\">\n      <div class=\"alert alert-danger\" [hidden]=\"email.valid || email.pristine\">Please enter your email</div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" autocomplete=\"off\" name=\"password\" required ngModel #password = 'ngModel' placeholder=\"Password\" class=\"form-control\">\n      <div class=\"alert alert-danger\" [hidden]=\"password.valid || password.pristine\">Password is required</div>\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"formError\">{{formError}}</div>\n    <div *ngIf=\"!registering || !hasAdded\">\n      <button routerLink=\"/sing-in\" class=\"btn btn-success\">Cancel</button>\n      <button [disabled]=\"registerForm.invalid\" type=\"submit\" class=\"btn btn-primary\">Register</button>\n    </div>\n    <div *ngIf=\"registering && !hasAdded\">\n      <span class=\"message\">\n        Registering new user ...\n      </span>\n      <span>\n        <img src=\"src/imgs/loaderIn.gif\">\n      </span>\n    </div>\n    <div *ngIf=\"hasAdded\">\n      <span class=\"message\">\n        New user has added to database\n      </span>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/spa/users/registration/registration.component.ts":
/*!**************************************************************!*\
  !*** ./src/spa/users/registration/registration.component.ts ***!
  \**************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spa-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/spa/users/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/spa/users/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/spa/users/sign-in/sign-in.component.css":
/*!*****************************************************!*\
  !*** ./src/spa/users/sign-in/sign-in.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-image: url('/src/imgs/signinlogo.jpg');\r\n  background-position: center center;\r\n  background-size: cover;\r\n}\r\n.sign-in-form {\r\n  min-width: 290px;\r\n  background-color: rgb(194, 204, 207);\r\n  opacity: 0.9;\r\n  padding: 20px;\r\n  margin: 5px 10px;\r\n  border-radius: 10% 0;\r\n}\r\nh4 {\r\n  text-align: center;\r\n}\r\nspan>img,\r\n.message,\r\nbutton[type=submit] {\r\n  float: right;\r\n}\r\n.message {\r\n  margin-right: 5%;\r\n}\r\n"

/***/ }),

/***/ "./src/spa/users/sign-in/sign-in.component.html":
/*!******************************************************!*\
  !*** ./src/spa/users/sign-in/sign-in.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in-form\">\n  <h4>Sign in</h4>\n  <form novalidate (ngSubmit)=\"onSubmit(signInForm)\" #signInForm=\"ngForm\">\n    <div class=\"form-group\">\n      <input type=\"text\" autocomplete=\"off\" name=\"email\" required placeholder=\"User email\" ngModel #email = 'ngModel' class=\"form-control\">\n      <div class=\"alert alert-danger\" [hidden]=\"email.valid || email.pristine\">Please enter your email</div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" autocomplete=\"off\" name=\"password\" required ngModel #password = 'ngModel' placeholder=\"Password\" class=\"form-control\">\n      <div class=\"alert alert-danger\" [hidden]=\"password.valid || password.pristine\">Password is required</div>\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"formError\">{{formError}}</div>\n    <div *ngIf=\"!submitting\">\n      <button routerLink='/register' class='btn btn-success'>Register</button>\n      <button [disabled]='signInForm.invalid' type='submit' class='btn btn-primary'>Sign in</button>\n    </div>\n    <div *ngIf=\"submitting\">\n      <span>\n        <img src=\"src/imgs/loaderIn.gif\">\n      </span>\n      <span class=\"message\">\n        Signing in ...\n      </span>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/spa/users/sign-in/sign-in.component.ts":
/*!****************************************************!*\
  !*** ./src/spa/users/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-api */ "./src/spa/users/user-api.ts");
/* harmony import */ var _app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInComponent = /** @class */ (function () {
    function SignInComponent(userApi, userService, router) {
        this.userApi = userApi;
        this.userService = userService;
        this.router = router;
        this.submitting = false;
    }
    SignInComponent.prototype.onSubmit = function (signInForm) {
        var _this = this;
        if (signInForm.valid) {
            this.submitting = true;
            this.formError = null;
            this.userApi.signIn(signInForm.value.email, signInForm.value.password).subscribe(function (data) {
                console.log(data);
                _this.router.navigate(['/authenticated']);
            }, function (error) {
                _this.submitting = false;
                _this.formError = error;
            });
        }
    };
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spa-sing-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/spa/users/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/spa/users/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_user_api__WEBPACK_IMPORTED_MODULE_1__["UserApi"], _app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/spa/users/user-api.ts":
/*!***********************************!*\
  !*** ./src/spa/users/user-api.ts ***!
  \***********************************/
/*! exports provided: UserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return UserApi; });
var UserApi = /** @class */ (function () {
    function UserApi() {
    }
    return UserApi;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\site\www\newProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map