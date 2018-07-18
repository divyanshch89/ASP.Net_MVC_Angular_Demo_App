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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_date_service_1 = require("../app-date.service");
var ChangeDateComponent = /** @class */ (function () {
    function ChangeDateComponent(dataservice) {
        this.dataservice = dataservice;
        this.postDataStatus = '';
    }
    ChangeDateComponent.prototype.GetCurrentTime = function () {
        var _this = this;
        this.dataservice.getCurrentTime().subscribe(function (data) {
            _this.currentTimeObj = JSON.parse(JSON.stringify(data));
            _this.currTime = _this.currentTimeObj.time;
            // post data to server
            _this.PostDataToServer(_this.currentTimeObj);
        });
    };
    ChangeDateComponent.prototype.PostDataToServer = function (data) {
        var _this = this;
        this.dataservice.SendDataToDB(data).subscribe(function (data) {
            _this.postDataStatus = 'Data updated to SQL DB successfully';
            console.log(_this.postDataStatus);
        });
    };
    ChangeDateComponent = __decorate([
        core_1.Component({
            selector: 'app-changedate',
            templateUrl: './changedate.component.html',
            providers: [app_date_service_1.AppDataService]
        }),
        __metadata("design:paramtypes", [app_date_service_1.AppDataService])
    ], ChangeDateComponent);
    return ChangeDateComponent;
}());
exports.ChangeDateComponent = ChangeDateComponent;
//# sourceMappingURL=changedate.component.js.map