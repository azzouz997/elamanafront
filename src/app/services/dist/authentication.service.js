"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthenticationService = void 0;
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.apiUrl = 'https://localhost:44332';
        /* this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(JSON.stringify(localStorage.getItem('currentUser'))));
        this.currentUser = this.currentUserSubject.asObservable(); */
        this.token = localStorage.getItem('token');
    }
    /* public get currentUserValue(): User {
        return this.currentUserSubject.value;
    } */
    AuthenticationService.prototype.login = function (login, password) {
        return this.http.post(this.apiUrl + "/api/Authentication", { login: login, password: password })
            .pipe(operators_1.map(function (res) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', res); // JSON.stringify(user)
            localStorage.setItem('token', res.token); // JSON.stringify(user)
            return res;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        // this.currentUserSubject.next(null);
    };
    AuthenticationService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
