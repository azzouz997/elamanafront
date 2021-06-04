import { OrderModel, HistoryOrderModel } from './../../../models/order';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropositionService } from 'src/app/services/proposition.service';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import { SupplierService } from 'src/app/services/supplier.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-historiques-orders',
  templateUrl: './historiques-orders.component.html',
  styleUrls: ['./historiques-orders.component.css']
})
export class HistoriquesOrdersComponent implements OnInit {

  order: OrderModel;
  history: HistoryOrderModel[] = [];
  p = 0;
  constructor(
    protected activatedRoute: ActivatedRoute,
    private propositionservice: PropositionService,
    private userservice: UserService,
    private orderservice: OrderService
  ) { }

  ngOnInit() {
    this.orderservice.getOrder(this.activatedRoute.snapshot.params.id).pipe(first()).subscribe(o => {
      this.order = o;
      this.history = o.orderHistory;
      this.history.forEach(h => {
        this.propositionservice.getProposition(h.propositionId).pipe(first()).subscribe(p => {
          h.propositionNumber = p.propositionNumber;
        });
        if (h.validatorId) {
          this.userservice.getUser(h.validatorId).pipe(first()).subscribe(v => {
            h.validatorName = v.name;
          });
        }
      });
    });
  }

}
