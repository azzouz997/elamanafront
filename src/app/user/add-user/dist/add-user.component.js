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
exports.AddUserComponent = void 0;
var operators_1 = require("rxjs/operators");
var user_1 = require("./../../models/user");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(activatedRoute, userservice, roleservice, fb) {
        this.activatedRoute = activatedRoute;
        this.userservice = userservice;
        this.roleservice = roleservice;
        this.fb = fb;
        this.id = 0;
        this.isSaving = false;
        this.myDate = new Date();
        this.addForm = this.fb.group({
            id: ['', []],
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50), forms_1.Validators.pattern('^[_.A-Za-z- éè\'çàâêûîô]*$')]],
            description: ['', []],
            login: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email, forms_1.Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
            userStatus: ['', []],
            password: ['', []],
            role: ['', [forms_1.Validators.required]]
        });
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.params.id;
        if (this.id) {
            this.userservice.getUser(this.id).pipe(operators_1.first()).subscribe(function (user) {
                _this.updateForm(user);
            });
        }
        else {
            this.addForm.get(['password']).setValidators(forms_1.Validators.required);
        }
        this.roleservice.getRoles()
            .pipe(operators_1.first())
            .subscribe(function (roles) {
            _this.roles = roles;
        });
    };
    AddUserComponent.prototype.updateForm = function (user) {
        this.addForm.patchValue({
            id: user.id,
            name: user.name,
            email: user.email,
            description: user.description,
            login: user.login,
            userStatus: user.userStatus,
            role: user.role
        });
    };
    AddUserComponent.prototype.createFromForm = function () {
        return __assign(__assign({}, new user_1.AddUserModel()), { Name: this.addForm.get(['name']).value, Email: this.addForm.get(['email']).value, Description: this.addForm.get(['description']).value, Login: this.addForm.get(['login']).value, UserStatus: this.addForm.get(['userStatus']).value, Password: this.addForm.get(['password']).value, Role: this.addForm.get(['role']).value });
    };
    AddUserComponent.prototype.addUser = function () {
        this.isSaving = true;
        var user = this.createFromForm();
        console.log('---------------------------> ', user);
        if (this.addForm.get(['userStatus']).value === undefined) {
            user.UserStatus = false;
        }
        this.subscribeToSaveResponse(this.userservice.create(user));
    };
    AddUserComponent.prototype.updateUser = function () {
        this.isSaving = true;
        var user = this.createFromForm();
        user.Id = this.addForm.get(['id']).value;
        if (this.addForm.get(['userStatus']).value === undefined) {
            user.UserStatus = false;
        }
        this.subscribeToSaveResponse(this.userservice.update(user));
    };
    AddUserComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function () { return _this.onSaveSuccess(); }, function () { return _this.onSaveError(); });
    };
    AddUserComponent.prototype.onSaveSuccess = function () {
        this.isSaving = false;
        this.previousState();
    };
    AddUserComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    AddUserComponent.prototype.previousState = function () {
        window.history.back();
    };
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'app-add-user',
            templateUrl: './add-user.component.html',
            styleUrls: ['./add-user.component.css']
        })
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
