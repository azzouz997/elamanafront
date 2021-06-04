"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddFunctionComponent = void 0;
var operators_1 = require("rxjs/operators");
var forms_1 = require("@angular/forms");
var function_1 = require("./../../models/function");
var core_1 = require("@angular/core");
var AddFunctionComponent = /** @class */ (function () {
    function AddFunctionComponent(fb, functionService, activatedRoute) {
        this.fb = fb;
        this.functionService = functionService;
        this.activatedRoute = activatedRoute;
        this.id = 0;
        this.isSaving = false;
        this.addForm = this.fb.group({
            id: ['', []],
            name: [
                '',
                [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50), forms_1.Validators.pattern('^[_.A-Za-z- éè\'çàâêûîô]*$')],
            ],
            description: [
                '',
                [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50), forms_1.Validators.pattern('^[_.A-Za-z- éè\'çàâêûîô]*$')],
            ]
        });
    }
    AddFunctionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.params.id;
        if (this.id) {
            this.functionService.getFunction(this.id).pipe(operators_1.first()).subscribe(function (model) {
                _this.updateForm(model);
            });
        }
    };
    AddFunctionComponent.prototype.updateForm = function (model) {
        this.addForm.patchValue({
            id: model.id,
            name: model.name,
            description: model.description
        });
    };
    AddFunctionComponent.prototype.createFromForm = function () {
        return __assign(__assign({}, new function_1.AddFunctionModel()), { Name: this.addForm.get(['name']).value, Description: this.addForm.get(['description']).value });
    };
    AddFunctionComponent.prototype.addFunction = function () {
        this.isSaving = true;
        var model = this.createFromForm();
        this.subscribeToSaveResponse(this.functionService.create(model));
    };
    AddFunctionComponent.prototype.updateFunction = function () {
        this.isSaving = true;
        var model = this.createFromForm();
        model.Id = this.addForm.get(['id']).value;
        this.subscribeToSaveResponse(this.functionService.update(model));
    };
    AddFunctionComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function () { return _this.onSaveSuccess(); }, function () { return _this.onSaveError(); });
    };
    AddFunctionComponent.prototype.onSaveSuccess = function () {
        this.isSaving = false;
        this.previousState();
    };
    AddFunctionComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    AddFunctionComponent.prototype.previousState = function () {
        window.history.back();
    };
    AddFunctionComponent = __decorate([
        core_1.Component({
            selector: 'app-add-function',
            templateUrl: './add-function.component.html',
            styleUrls: ['./add-function.component.css']
        })
    ], AddFunctionComponent);
    return AddFunctionComponent;
}());
exports.AddFunctionComponent = AddFunctionComponent;
