"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RoleService = void 0;
var core_1 = require("@angular/core");
var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.apiUrl = 'https://localhost:44332';
    }
    RoleService.prototype.getRoles = function () {
        return this.http.get(this.apiUrl + "/api/Role/GetRoles");
    };
    RoleService.prototype.create = function (role) {
        return this.http.post(this.apiUrl + "/api/Role/AddRole", role);
    };
    RoleService.prototype.getRole = function (id) {
        return this.http.get(this.apiUrl + "/api/Role/GetRole?Id=" + id);
    };
    RoleService.prototype.update = function (role) {
        return this.http.post(this.apiUrl + "/api/Role/UpdateRole", role);
    };
    RoleService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], RoleService);
    return RoleService;
}());
exports.RoleService = RoleService;
