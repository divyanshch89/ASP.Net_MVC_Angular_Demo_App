"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var changedate_component_1 = require("./changedate/changedate.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpClientModule],
            providers: [
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ],
            declarations: [app_component_1.AppComponent, changedate_component_1.ChangeDateComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function getBaseUrl() {
    return document.getElementById('base_path').value;
}
exports.getBaseUrl = getBaseUrl;
//# sourceMappingURL=app.module.js.map