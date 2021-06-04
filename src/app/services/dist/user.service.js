"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'https://localhost:44332';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.apiUrl + "/api/User/GetUsers");
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.apiUrl + "/api/User/AddUser", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.post(this.apiUrl + "/api/User/UpdateUser", user);
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.apiUrl + "/api/User/GetUser?Id=" + id);
    };
    UserService.prototype["delete"] = function (id) {
        return this.http["delete"](this.apiUrl + "/api/User/DeleteUser?Id=" + id);
    };
    UserService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
