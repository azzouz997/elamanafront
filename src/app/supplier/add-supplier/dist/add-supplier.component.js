"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddSupplierComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var AddSupplierComponent = /** @class */ (function () {
    function AddSupplierComponent(fb) {
        this.fb = fb;
        this.isSaving = false;
        this.addForm = this.fb.group({
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
    AddSupplierComponent.prototype.ngOnInit = function () {
    };
    /* private createFromForm(): AddRoleModel {
      return {
        ...new AddRoleModel(),
        Name: this.addForm.get(['name'])!.value,
        Description: this.addForm.get(['description'])!.value
      };
    } */
    AddSupplierComponent.prototype.addSupplier = function () {
        this.isSaving = true;
        // const user = this.createFromForm();
        // miss the service
    };
    /* protected subscribeToSaveResponse(result: Observable<AddRoleModel>): void {
      result.subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    } */
    AddSupplierComponent.prototype.onSaveSuccess = function () {
        this.isSaving = false;
        this.previousState();
    };
    AddSupplierComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    AddSupplierComponent.prototype.previousState = function () {
        window.history.back();
    };
    AddSupplierComponent = __decorate([
        core_1.Component({
            selector: 'app-add-supplier',
            templateUrl: './add-supplier.component.html',
            styleUrls: ['./add-supplier.component.css']
        })
    ], AddSupplierComponent);
    return AddSupplierComponent;
}());
exports.AddSupplierComponent = AddSupplierComponent;
