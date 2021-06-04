import { ProductPipe } from './article/searchProduct.pipe';
import { SupplierPipe } from './supplier/searchSupplier.pipe';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleFunctionComponent } from './function/role-function/role-function.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { ListSupplierComponent } from './supplier/list-supplier/list-supplier.component';
import { AddFunctionComponent } from './function/add-function/add-function.component';
import { ListFunctionComponent } from './function/list-function/list-function.component';
import { ListRoleComponent } from './role/list-role/list-role.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { FunctionPipe } from './function/searchFunction.pipe';
import { RolePipe } from './role/searchRole.pipe';
import { UserPipe } from './user/searchUser.pipe';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { appRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListProductComponent } from './article/list-product/list-product.component';
import { AddProductComponent } from './article/add-product/add-product.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { DeleteRoleComponent } from './role/delete-role/delete-role.component';
import { DeleteFunctionComponent } from './function/delete-function/delete-function.component';
import { UserDeleteDialogComponent } from './user/user-delete-dialog.component';
import { ListMyOrderComponent } from './order/myOrder/list-my-order/list-my-order.component';
import { AddMyOrderComponent } from './order/myOrder/add-my-order/add-my-order.component';
import { InfoMyOrderComponent } from './order/myOrder/info-my-order/info-my-order.component';
import { DeleteSupplierComponent } from './supplier/delete-supplier/delete-supplier.component';
import { HistoriqueUserComponent } from './user/historique-user/historique-user.component';
import { HistoriqueSupplierComponent } from './supplier/historique-supplier/historique-supplier.component';
import { HistoriqueProductComponent } from './article/historique-product/historique-product.component';
import { DetailsProductComponent } from './article/details-product/details-product.component';
import { ListPropositionComponent } from './proposition/list-proposition/list-proposition.component';
import { AddPropositionComponent } from './proposition/add-proposition/add-proposition.component';
import { HistoriquePropositionComponent } from './proposition/historique-proposition/historique-proposition.component';
import { PropositionPipe } from './proposition/searchProposition.pipe';
import { ListOrdersComponent } from './order/orders/list-orders/list-orders.component';
import { EditOrdersComponent } from './order/orders/edit-orders/edit-orders.component';
import { DetailsOrdersComponent } from './order/orders/details-orders/details-orders.component';
import { HistoriquesOrdersComponent } from './order/orders/historiques-orders/historiques-orders.component';
import { ListFunctionRoleComponent } from './role/list-function-role/list-function-role.component';
import { OrderPipe } from './order/searchOrder.pipe';
import { DetailPropositionComponent } from './proposition/detail-proposition/detail-proposition.component';
import { HistoriqueDevisPropositionComponent } from './proposition/historique-devis-proposition/historique-devis-proposition.component';
import { EditDevisPropositionComponent } from './proposition/edit-devis-proposition/edit-devis-proposition.component';


@NgModule({
  declarations: [
    UserPipe,
    RolePipe,
    FunctionPipe,
    SupplierPipe,
    ProductPipe,
    PropositionPipe,
    OrderPipe,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    AddRoleComponent,
    ListRoleComponent,
    ListFunctionComponent,
    AddFunctionComponent,
    ListSupplierComponent,
    AddSupplierComponent,
    RoleFunctionComponent,
    ListProductComponent,
    AddProductComponent,
    ChangePasswordComponent,
    UserDeleteDialogComponent,
    DeleteFunctionComponent,
    DeleteRoleComponent,
    ListMyOrderComponent,
    AddMyOrderComponent,
    InfoMyOrderComponent,
    DeleteSupplierComponent,
    HistoriqueUserComponent,
    HistoriqueSupplierComponent,
    HistoriqueProductComponent,
    DetailsProductComponent,
    ListPropositionComponent,
    AddPropositionComponent,
    HistoriquePropositionComponent,
    ListOrdersComponent,
    EditOrdersComponent,
    DetailsOrdersComponent,
    HistoriquesOrdersComponent,
    ListFunctionRoleComponent,
    DetailPropositionComponent,
    HistoriqueDevisPropositionComponent,
    EditDevisPropositionComponent
  ],
  imports: [
    HttpClientModule,
    appRoutingModule,
    NgxPaginationModule,
    NgbModalModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    UserDeleteDialogComponent,
    DeleteFunctionComponent,
    DeleteRoleComponent,
    DeleteSupplierComponent,
    DetailsProductComponent,
    DetailsOrdersComponent,
    DetailsOrdersComponent,
    DetailPropositionComponent,
    EditDevisPropositionComponent,
    InfoMyOrderComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
