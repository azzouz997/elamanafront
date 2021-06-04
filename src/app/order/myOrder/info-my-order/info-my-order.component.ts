import { OrderService } from 'src/app/services/order.service';
import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-my-order',
  templateUrl: './info-my-order.component.html',
  styleUrls: ['./info-my-order.component.css']
})
export class InfoMyOrderComponent implements OnInit {

  order: OrderModel;

  constructor(
    protected orderService: OrderService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  clear() {
    this.activeModal.dismiss();
  }

}
