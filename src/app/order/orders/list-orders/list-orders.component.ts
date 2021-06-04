import { ProductService } from './../../../services/product.service';
import { SupplierService } from './../../../services/supplier.service';
import { PropositionModel } from './../../../models/proposition';
import { PropositionService } from './../../../services/proposition.service';
import { OrderModel } from './../../../models/order';
import { OrderService } from './../../../services/order.service';
import { DetailsOrdersComponent } from './../details-orders/details-orders.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  orders: OrderModel[] = [];
  searchText = '';
  p = 0;
  closeResult: string;
  booleanValue: any = false;

  constructor(
    private orderservice: OrderService,
    private propositionservice: PropositionService,
    private supplierservice: SupplierService,
    private productservice: ProductService,
    private userservice: UserService,
    protected modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.orderservice.getOrders()
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
              o.productCode = product.productCode;
            });
          });
          this.userservice.getUser(o.creatorId).pipe(first()).subscribe(creator => {
            o.creatorName = creator.name;
          });
          if (o.validatorId) {
            this.userservice.getUser(o.validatorId).pipe(first()).subscribe(validator => {
              o.validatorName = validator.name;
            });
          }
        });
      });
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

  detail(order: OrderModel) {
    const modelRef = this.modalService.open(DetailsOrdersComponent);
    modelRef.componentInstance.order = order;
  }

}
