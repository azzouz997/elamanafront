"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserPipe = void 0;
var core_1 = require("@angular/core");
var UserPipe = /** @class */ (function () {
    function UserPipe() {
    }
    UserPipe.prototype.transform = function (users, searchText) {
        if (!users || !searchText) {
            return users;
        }
        var searchTextToLowerCase = searchText.toLowerCase();
        return users.filter(function (user) {
            var res = user.name.toLowerCase().includes(searchTextToLowerCase);
            return res;
        });
    };
    UserPipe = __decorate([
        core_1.Pipe({
            name: 'userFilter'
        })
    ], UserPipe);
    return UserPipe;
}());
exports.UserPipe = UserPipe;
