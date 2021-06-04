"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListSupplierComponent = void 0;
var core_1 = require("@angular/core");
var ListSupplierComponent = /** @class */ (function () {
    function ListSupplierComponent(router) {
        this.router = router;
    }
    ListSupplierComponent.prototype.ngOnInit = function () {
    };
    ListSupplierComponent.prototype.addSupplier = function () {
        this.router.navigate(['/supplier-add']);
    };
    ListSupplierComponent = __decorate([
        core_1.Component({
            selector: 'app-list-supplier',
            templateUrl: './list-supplier.component.html',
            styleUrls: ['./list-supplier.component.css']
        })
    ], ListSupplierComponent);
    return ListSupplierComponent;
}());
exports.ListSupplierComponent = ListSupplierComponent;
