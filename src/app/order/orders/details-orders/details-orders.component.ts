import { UserService } from './../../../services/user.service';
import { UserModel } from './../../../models/user';
import { PropositionModel } from 'src/app/models/proposition';
import { PropositionService } from './../../../services/proposition.service';
import { OrderModel } from './../../../models/order';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/app/services/order.service';
import { first } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-orders',
  templateUrl: './details-orders.component.html',
  styleUrls: ['./details-orders.component.css']
})
export class DetailsOrdersComponent implements OnInit {

  order: OrderModel;
  isSaving = false;
  blob: any;

  editForm = this.fb.group({
    id: ['', []],
    etat: ['', [Validators.required]]
  });

  constructor(
    protected orderService: OrderService,
    protected userservice: UserService,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.updateForm(this.order);
  }

  clear() {
    this.activeModal.dismiss();
  }

  displayFile(idBonCommande: string) {
    this.orderService.getFile(idBonCommande).subscribe(data => {
      this.blob = new Blob([data], { type: 'application/octet-stream' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(this.blob);
      link.download = data.type;
      link.click();
    });
  }

  updateForm(order: OrderModel): void {
    this.editForm.patchValue({
      id: order.orderId,
      etat: order.orderStatus
    });
  }

  valider() {
    this.userservice.getByLogin(localStorage.getItem('login'))
      .pipe(first())
      .subscribe(user => {
        this.isSaving = true;
        const o = this.order;
        o.orderStatus = this.editForm.get(['etat']).value;
        o.validatorId = user.userId;
        this.subscribeToSaveResponse(this.orderService.update(o));
        this.activeModal.dismiss();
        location.reload();
      });
  }

  protected subscribeToSaveResponse(result: Observable<OrderModel>): void {
    result.subscribe();
  }

}
