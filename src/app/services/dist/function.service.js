"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FunctionService = void 0;
var core_1 = require("@angular/core");
var FunctionService = /** @class */ (function () {
    function FunctionService(http) {
        this.http = http;
        this.apiUrl = 'https://localhost:44332';
    }
    FunctionService.prototype.getFunctions = function () {
        return this.http.get(this.apiUrl + "/api/Function/GetFunctions");
    };
    FunctionService.prototype.create = function (model) {
        return this.http.post(this.apiUrl + "/api/Function/AddFunction", model);
    };
    FunctionService.prototype.update = function (model) {
        return this.http.post(this.apiUrl + "/api/Function/UpdateFunction", model);
    };
    FunctionService.prototype.getFunction = function (id) {
        return this.http.get(this.apiUrl + "/api/Function/GetFunction?Id=" + id);
    };
    FunctionService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], FunctionService);
    return FunctionService;
}());
exports.FunctionService = FunctionService;
