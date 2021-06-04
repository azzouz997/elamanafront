"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListProductComponent = void 0;
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var ListProductComponent = /** @class */ (function () {
    function ListProductComponent(productservice, modalService, router) {
        this.productservice = productservice;
        this.modalService = modalService;
        this.router = router;
        this.products = [];
        this.searchText = '';
        this.p = 0;
    }
    ListProductComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    ListProductComponent.prototype.getList = function () {
        var _this = this;
        this.productservice.getProducts()
            .pipe(operators_1.first())
            .subscribe(function (products) {
            _this.products = products;
        });
    };
    ListProductComponent.prototype.addProduct = function () {
        this.router.navigate(['/product-add']);
    };
    ListProductComponent = __decorate([
        core_1.Component({
            selector: 'app-list-product',
            templateUrl: './list-product.component.html',
            styleUrls: ['./list-product.component.css']
        })
    ], ListProductComponent);
    return ListProductComponent;
}());
exports.ListProductComponent = ListProductComponent;
