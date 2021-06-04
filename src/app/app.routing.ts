import { HistoriqueDevisPropositionComponent } from './proposition/historique-devis-proposition/historique-devis-proposition.component';
import { HistoriquesOrdersComponent } from './order/orders/historiques-orders/historiques-orders.component';
import { ListOrdersComponent } from './order/orders/list-orders/list-orders.component';
import { HistoriquePropositionComponent } from './proposition/historique-proposition/historique-proposition.component';
import { AddPropositionComponent } from './proposition/add-proposition/add-proposition.component';
import { ListPropositionComponent } from './proposition/list-proposition/list-proposition.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { AddProductComponent } from './article/add-product/add-product.component';
import { ListProductComponent } from './article/list-product/list-product.component';
import { RoleFunctionComponent } from './function/role-function/role-function.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { ListSupplierComponent } from './supplier/list-supplier/list-supplier.component';
import { AddFunctionComponent } from './function/add-function/add-function.component';
import { ListFunctionComponent } from './function/list-function/list-function.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { ListRoleComponent } from './role/list-role/list-role.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ListMyOrderComponent } from './order/myOrder/list-my-order/list-my-order.component';
import { AddMyOrderComponent } from './order/myOrder/add-my-order/add-my-order.component';
import { InfoMyOrderComponent } from './order/myOrder/info-my-order/info-my-order.component';
import { HistoriqueUserComponent } from './user/historique-user/historique-user.component';
import { HistoriqueSupplierComponent } from './supplier/historique-supplier/historique-supplier.component';
import { HistoriqueProductComponent } from './article/historique-product/historique-product.component';
import { EditOrdersComponent } from './order/orders/edit-orders/edit-orders.component';
import { ListFunctionRoleComponent } from './role/list-function-role/list-function-role.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  // user
  { path: 'user-list', component: ListUserComponent, canActivate: [AuthGuard] },
  { path: 'user-add', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: 'user-edit/:id', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: 'user-historique/:id', component: HistoriqueUserComponent, canActivate: [AuthGuard] },
  { path: 'user-update-password', component: ChangePasswordComponent, canActivate: [AuthGuard] },
  // role
  { path: 'role-list', component: ListRoleComponent, canActivate: [AuthGuard] },
  { path: 'role-add', component: AddRoleComponent, canActivate: [AuthGuard] },
  { path: 'role-edit/:id', component: AddRoleComponent, canActivate: [AuthGuard] },
  { path: 'role-function/:id', component: ListFunctionRoleComponent, canActivate: [AuthGuard] },
  // function
  { path: 'function-list', component: ListFunctionComponent, canActivate: [AuthGuard] },
  { path: 'function-add', component: AddFunctionComponent, canActivate: [AuthGuard] },
  { path: 'function-edit/:id', component: AddFunctionComponent, canActivate: [AuthGuard] },
  { path: 'function-role/:id', component: RoleFunctionComponent, canActivate: [AuthGuard] },
  // supplier
  { path: 'supplier-list', component: ListSupplierComponent, canActivate: [AuthGuard] },
  { path: 'supplier-add', component: AddSupplierComponent, canActivate: [AuthGuard] },
  { path: 'supplier-edit/:id', component: AddSupplierComponent, canActivate: [AuthGuard] },
  { path: 'supplier-historique/:id', component: HistoriqueSupplierComponent, canActivate: [AuthGuard] },
  // product
  { path: 'product-list', component: ListProductComponent, canActivate: [AuthGuard] },
  { path: 'product-add', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'product-edit/:id', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'product-historique/:id', component: HistoriqueProductComponent, canActivate: [AuthGuard] },
  // order
  { path: 'my-order-list', component: ListMyOrderComponent, canActivate: [AuthGuard] },
  { path: 'my-order-add', component: AddMyOrderComponent, canActivate: [AuthGuard] },
  { path: 'orders-list', component: ListOrdersComponent, canActivate: [AuthGuard] },
  { path: 'orders-historique/:id', component: HistoriquesOrdersComponent, canActivate: [AuthGuard] },
  { path: 'orders-edit/:id', component: EditOrdersComponent, canActivate: [AuthGuard] },
  // proposition
  { path: 'proposition-list', component: ListPropositionComponent, canActivate: [AuthGuard] },
  { path: 'proposition-add', component: AddPropositionComponent, canActivate: [AuthGuard] },
  { path: 'proposition-edit/:id', component: AddPropositionComponent, canActivate: [AuthGuard] },
  { path: 'proposition-historique/:id', component: HistoriquePropositionComponent, canActivate: [AuthGuard] },
  { path: 'proposition-devis-historique/:id', component: HistoriqueDevisPropositionComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
