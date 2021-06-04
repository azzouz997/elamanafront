"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListUserComponent = void 0;
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var ListUserComponent = /** @class */ (function () {
    function ListUserComponent(userservice, modalService, router) {
        this.userservice = userservice;
        this.modalService = modalService;
        this.router = router;
        this.users = [];
        this.searchText = '';
        this.p = 0;
    }
    ListUserComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    ListUserComponent.prototype.getList = function () {
        var _this = this;
        this.userservice.getUsers()
            .pipe(operators_1.first())
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    ListUserComponent.prototype.addUser = function () {
        this.router.navigate(['/user-add']);
    };
    ListUserComponent.prototype.deleteUser = function () {
        // const modalRef =
        // this.modalService.open(DeleteModalComponent, { size: 'lg', backdrop: 'static' });
        // modalRef.componentInstance.user = user;
        // modalRef.afterClosed
    };
    ListUserComponent.prototype.editUser = function () {
    };
    ListUserComponent = __decorate([
        core_1.Component({
            selector: 'app-list-user',
            templateUrl: './list-user.component.html',
            styleUrls: ['./list-user.component.css']
        })
    ], ListUserComponent);
    return ListUserComponent;
}());
exports.ListUserComponent = ListUserComponent;
