"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AppDataService = /** @class */ (function () {
    function AppDataService(http, baseUrl) {
        this.http = http;
        this.base_Url = '';
        this.headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json;charset=utf-8'
        });
        this.base_Url = baseUrl;
    }
    AppDataService.prototype.getCurrentTime = function () {
        return this.http.get('https://afternoon-temple-16530.herokuapp.com/currenttime');
    };
    AppDataService.prototype.SendDataToDB = function (data) {
        return this.http.post(this.base_Url + 'api/data', JSON.stringify(data), { headers: this.headers });
    };
    AppDataService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject("BASE_URL")),
        __metadata("design:paramtypes", [http_1.HttpClient, String])
    ], AppDataService);
    return AppDataService;
}());
exports.AppDataService = AppDataService;
//# sourceMappingURL=app-date.service.js.map