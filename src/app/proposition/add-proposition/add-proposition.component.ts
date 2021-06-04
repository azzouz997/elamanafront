import { PropositionModel } from 'src/app/models/proposition';
import { AddPropositionModel } from './../../models/proposition';
import { ProductService } from './../../services/product.service';
import { ProductModel } from './../../models/product';
import { SupplierModel } from 'src/app/models/supplier';
import { SupplierService } from './../../services/supplier.service';
import { PropositionService } from './../../services/proposition.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-proposition',
  templateUrl: './add-proposition.component.html',
  styleUrls: ['./add-proposition.component.css']
})
export class AddPropositionComponent implements OnInit {

  id = 0;
  isSaving = false;
  numeroExiste = false;
  suppliersList: SupplierModel[] = [];
  productsList: ProductModel[] = [];
  propositions: PropositionModel[] = [];
  proposition: PropositionModel;
  fileToUpload: File = null;

  addForm = this.fb.group({
    id: ['', []],
    propositionNumber: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    endDate: ['', [Validators.required]],
    amountTTC: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    amountHT: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    quantity: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    direction: ['', [Validators.required]],
    product: ['', [Validators.required]],
    supplier: ['', [Validators.required]],
    devis: ['', []]
  });

  constructor(
    private propositionservice: PropositionService,
    protected activatedRoute: ActivatedRoute,
    private supplierservice: SupplierService,
    private productservice: ProductService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.propositionservice.getProposition(this.id).pipe(first()).subscribe(p => {
        this.updateForm(p);
        this.proposition = p;
        const dateString = p.endDate;
        const newDate = new Date(dateString);
        this.addForm.get(['endDate']).setValue(formatDate(newDate, 'yyyy-MM-dd', 'en_US'));
      });
    } else {
      this.addForm.get(['devis']).setValidators(Validators.required);
    }

    this.supplierservice.getSuppliers()
      .pipe(first())
      .subscribe(suppliers => {
        this.suppliersList = suppliers;
      });

    this.propositionservice.getPropositions()
      .pipe(first())
      .subscribe(propositions => {
        this.propositions = propositions;
      });

    this.productservice.getProducts()
      .pipe(first())
      .subscribe(products => {
        this.productsList = products;
      });
  }

  updateForm(prop: PropositionModel): void {
    this.addForm.patchValue({
      id: prop.propositionId,
      propositionNumber: prop.propositionNumber,
      // endDate: prop.endDate,
      amountTTC: prop.amountTTC,
      amountHT: prop.amountHT,
      quantity: prop.quantity,
      direction: prop.direction,
      product: prop.productId,
      supplier: prop.supplierId
    });
  }

  private createFromForm(): AddPropositionModel {
    return {
      ...new AddPropositionModel(),
      PropositionNumber: this.addForm.get(['propositionNumber']).value,
      EndDate: this.addForm.get(['endDate']).value,
      AmountTTC: this.addForm.get(['amountTTC']).value,
      AmountHT: this.addForm.get(['amountHT']).value,
      Quantity: this.addForm.get(['quantity']).value,
      Direction: this.addForm.get(['direction']).value,
      ProductId: this.addForm.get(['product']).value,
      SupplierId: this.addForm.get(['supplier']).value
    };
  }

  addProposition() {
    this.isSaving = true;
    this.numeroExiste = false;
    const prop = this.createFromForm();
    this.numerDouble(prop.PropositionNumber, prop.PropositionId);
    if (!this.numeroExiste) {
      this.subscribeToSaveResponse(this.propositionservice.AddPropositionWithDevis(prop, this.fileToUpload));
    } else {
      this.isSaving = false;
    }
  }

  updateProposition() {
    this.isSaving = true;
    this.numeroExiste = false;
    const prop = this.createFromForm();
    prop.PropositionId = this.addForm.get(['id']).value;
    this.numerDouble(prop.PropositionNumber, prop.PropositionId);

    if (!this.numeroExiste) {
      this.subscribeToSaveResponse(this.propositionservice.update(prop));
    } else {
      this.isSaving = false;
    }
  }

  protected subscribeToSaveResponse(result: Observable<AddPropositionModel>): void {
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

  numerDouble(numero: number, id: number): boolean {
    for (const proposition of this.propositions) {
      if (proposition.propositionId !== id) {
        if (proposition.propositionNumber === numero) {
          this.numeroExiste = true;
        }
      }
    }
    return this.numeroExiste;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  /* onChange(value) {
    this.supplierservice.getSupplier(value.toString().substring(value.indexOf(' ')))
      .pipe(first())
      .subscribe(supplier => {
        this.productservice.getProductBySupplier(supplier.name)
          .pipe(first())
          .subscribe(products => {
            this.productsList = products;
          });
      });

  } */

}
