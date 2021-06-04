"use strict";
exports.__esModule = true;
exports.appRoutingModule = void 0;
var add_product_component_1 = require("./article/add-product/add-product.component");
var list_product_component_1 = require("./article/list-product/list-product.component");
var edit_supplier_component_1 = require("./supplier/edit-supplier/edit-supplier.component");
var role_function_component_1 = require("./function/role-function/role-function.component");
var add_supplier_component_1 = require("./supplier/add-supplier/add-supplier.component");
var list_supplier_component_1 = require("./supplier/list-supplier/list-supplier.component");
var add_function_component_1 = require("./function/add-function/add-function.component");
var list_function_component_1 = require("./function/list-function/list-function.component");
var add_role_component_1 = require("./role/add-role/add-role.component");
var list_role_component_1 = require("./role/list-role/list-role.component");
var add_user_component_1 = require("./user/add-user/add-user.component");
var list_user_component_1 = require("./user/list-user/list-user.component");
var auth_guard_1 = require("./_helpers/auth.guard");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    // user
    { path: 'user-list', component: list_user_component_1.ListUserComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'user-add', component: add_user_component_1.AddUserComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'user-edit/:id', component: add_user_component_1.AddUserComponent, canActivate: [auth_guard_1.AuthGuard] },
    // role
    { path: 'role-list', component: list_role_component_1.ListRoleComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'role-add', component: add_role_component_1.AddRoleComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'role-edit/:id', component: add_role_component_1.AddRoleComponent, canActivate: [auth_guard_1.AuthGuard] },
    // function
    { path: 'function-list', component: list_function_component_1.ListFunctionComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'function-add', component: add_function_component_1.AddFunctionComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'function-edit/:id', component: add_function_component_1.AddFunctionComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'function-role', component: role_function_component_1.RoleFunctionComponent, canActivate: [auth_guard_1.AuthGuard] },
    // supplier
    { path: 'supplier-list', component: list_supplier_component_1.ListSupplierComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'supplier-add', component: add_supplier_component_1.AddSupplierComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'supplier-edit', component: edit_supplier_component_1.EditSupplierComponent, canActivate: [auth_guard_1.AuthGuard] },
    // product
    { path: 'product-list', component: list_product_component_1.ListProductComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'product-add', component: add_product_component_1.AddProductComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'product-edit', component: add_product_component_1.AddProductComponent, canActivate: [auth_guard_1.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.appRoutingModule = router_1.RouterModule.forRoot(routes);
