import { UserService } from './../../../services/user.service';
import { SupplierService } from './../../../services/supplier.service';
import { ProductService } from './../../../services/product.service';
import { PropositionModel } from './../../../models/proposition';
import { PropositionService } from './../../../services/proposition.service';
import { OrderService } from 'src/app/services/order.service';
import { AddOrderModel } from './../../../models/order';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-my-order',
  templateUrl: './add-my-order.component.html',
  styleUrls: ['./add-my-order.component.css']
})
export class AddMyOrderComponent implements OnInit {

  isSaving = false;
  propositions: PropositionModel[] = [];
  fileToUpload: File = null;

  addForm = this.fb.group({
    id: ['', []],
    proposition: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    product: ['', []],
    supplier: ['', []],
    quantity: ['', []],
    bonComande: ['', [Validators.required]]
  });

  constructor(
    private propositionService: PropositionService,
    private productService: ProductService,
    private supplierService: SupplierService,
    private orderService: OrderService,
    private userservice: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.propositionService.getPropositions()
      .pipe(first())
      .subscribe(propositions => {
        this.propositions = propositions;
      });
  }

  private createFromForm(): AddOrderModel {
    return {
      ...new AddOrderModel(),
      PropositionId: this.addForm.get(['proposition']).value
    };
  }

  addOrder() {
    this.userservice.getByLogin(localStorage.getItem('login'))
      .pipe(first())
      .subscribe(user => {
        this.isSaving = true;
        const order = this.createFromForm();
        order.CreatorId = user.userId;
        order.Quantity = this.addForm.get(['quantity']).value;
        this.subscribeToSaveResponse(this.orderService.AddOrderWithBonCommande(order, this.fileToUpload));
      });
  }

  protected subscribeToSaveResponse(result: Observable<AddOrderModel>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  previousState(): void {
    window.history.back();
  }

  onChange(value) {
    this.propositionService.getProposition(value.toString().substring(value.indexOf(' ')))
      .pipe(first())
      .subscribe(proposition => {
        this.addForm.get(['quantity']).setValue(proposition.quantity);
        this.supplierService.getSupplier(proposition.supplierId).pipe(first()).subscribe(supplier => {
          this.addForm.get(['supplier']).setValue(supplier.name);
        });
        this.productService.getProduct(proposition.productId).pipe(first()).subscribe(product => {
          this.addForm.get(['product']).setValue(product.productName);
        });
      });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
