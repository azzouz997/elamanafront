import { ProductService } from 'src/app/services/product.service';
import { SupplierService } from 'src/app/services/supplier.service';
import { PropositionService } from 'src/app/services/proposition.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user';
import { OrderModel } from 'src/app/models/order';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoMyOrderComponent } from '../info-my-order/info-my-order.component';

@Component({
  selector: 'app-list-my-order',
  templateUrl: './list-my-order.component.html',
  styleUrls: ['./list-my-order.component.css']
})
export class ListMyOrderComponent implements OnInit {

  p = 0;
  searchText = '';
  currentUser: UserModel;
  orders: OrderModel[] = [];
  blob: any;
  booleanValue = false;

  constructor(
    private userservice: UserService,
    private orderservice: OrderService,
    private productservice: ProductService,
    private propositionservice: PropositionService,
    private supplierservice: SupplierService,
    protected modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.userservice.getByLogin(localStorage.getItem('login'))
      .pipe(first())
      .subscribe(user => {
        this.currentUser = user;
        this.orderservice.getOrdersByCurrentUser(this.currentUser.userId)
          .pipe(first())
          .subscribe(orders => {
            this.orders = orders;
            orders.forEach(o => {
              this.propositionservice.getProposition(o.propositionId).pipe(first()).subscribe(p => {
                o.propositionNumber = p.propositionNumber;
                this.supplierservice.getSupplier(p.supplierId).pipe(first()).subscribe(s => {
                  o.supplierName = s.name;
                });
                this.productservice.getProduct(p.productId).pipe(first()).subscribe(product => {
                  o.productName = product.productName;
                });
              });
            });
          });
      });
  }

  displayFile(idBonCommande: string) {
    this.orderservice.getFile(idBonCommande).subscribe(data => {
      this.blob = new Blob([data], { type: 'application/octet-stream' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(this.blob);
      link.download = data.type;
      link.click();
    });
  }

  addOrder() {
    this.router.navigate(['/my-order-add']);
  }

  infoOder(order: OrderModel) {
    const modelRef = this.modalService.open(InfoMyOrderComponent);
    modelRef.componentInstance.order = order;
  }

  sortFunction(colName, valBoolean) {
    if (valBoolean === true) {
      this.orders.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    } else {
      this.orders.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    }
  }

}
