"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var delete_modal_component_1 = require("./user/delete-modal/delete-modal.component");
var edit_supplier_component_1 = require("./supplier/edit-supplier/edit-supplier.component");
var role_function_component_1 = require("./function/role-function/role-function.component");
var add_supplier_component_1 = require("./supplier/add-supplier/add-supplier.component");
var list_supplier_component_1 = require("./supplier/list-supplier/list-supplier.component");
var add_function_component_1 = require("./function/add-function/add-function.component");
var list_function_component_1 = require("./function/list-function/list-function.component");
var list_role_component_1 = require("./role/list-role/list-role.component");
var add_role_component_1 = require("./role/add-role/add-role.component");
var add_user_component_1 = require("./user/add-user/add-user.component");
var list_user_component_1 = require("./user/list-user/list-user.component");
var searchFunction_pipe_1 = require("./function/searchFunction.pipe");
var searchRole_pipe_1 = require("./role/searchRole.pipe");
var searchUser_pipe_1 = require("./user/searchUser.pipe");
var error_interceptor_1 = require("./_helpers/error.interceptor");
var jwt_interceptor_1 = require("./_helpers/jwt.interceptor");
var app_routing_1 = require("./app.routing");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var navbar_component_1 = require("./shared/navbar/navbar.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var login_component_1 = require("./login/login.component");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var ngx_pagination_1 = require("ngx-pagination");
var list_product_component_1 = require("./article/list-product/list-product.component");
var add_product_component_1 = require("./article/add-product/add-product.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                searchUser_pipe_1.UserPipe,
                searchRole_pipe_1.RolePipe,
                searchFunction_pipe_1.FunctionPipe,
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                navbar_component_1.NavbarComponent,
                sidebar_component_1.SidebarComponent,
                login_component_1.LoginComponent,
                list_user_component_1.ListUserComponent,
                add_user_component_1.AddUserComponent,
                add_role_component_1.AddRoleComponent,
                list_role_component_1.ListRoleComponent,
                list_function_component_1.ListFunctionComponent,
                add_function_component_1.AddFunctionComponent,
                list_supplier_component_1.ListSupplierComponent,
                add_supplier_component_1.AddSupplierComponent,
                role_function_component_1.RoleFunctionComponent,
                edit_supplier_component_1.EditSupplierComponent,
                delete_modal_component_1.DeleteModalComponent,
                list_product_component_1.ListProductComponent,
                add_product_component_1.AddProductComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                app_routing_1.appRoutingModule,
                ngx_pagination_1.NgxPaginationModule,
                forms_1.FormsModule
            ],
            entryComponents: [
                delete_modal_component_1.DeleteModalComponent
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: jwt_interceptor_1.JwtInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: error_interceptor_1.ErrorInterceptor, multi: true },
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
