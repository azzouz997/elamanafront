"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListFunctionComponent = void 0;
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var ListFunctionComponent = /** @class */ (function () {
    function ListFunctionComponent(functionservice, modalService, router) {
        this.functionservice = functionservice;
        this.modalService = modalService;
        this.router = router;
        this.functions = [];
        this.searchText = '';
        this.p = 0;
    }
    ListFunctionComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    ListFunctionComponent.prototype.getList = function () {
        var _this = this;
        this.functionservice.getFunctions()
            .pipe(operators_1.first())
            .subscribe(function (functions) {
            _this.functions = functions;
        });
    };
    ListFunctionComponent.prototype.addFunction = function () {
        this.router.navigate(['/function-add']);
    };
    ListFunctionComponent = __decorate([
        core_1.Component({
            selector: 'app-list-function',
            templateUrl: './list-function.component.html',
            styleUrls: ['./list-function.component.css']
        })
    ], ListFunctionComponent);
    return ListFunctionComponent;
}());
exports.ListFunctionComponent = ListFunctionComponent;
