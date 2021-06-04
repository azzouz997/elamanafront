import { SupplierService } from './../../services/supplier.service';
import { SupplierModel } from './../../models/supplier';
import { Observable } from 'rxjs';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AddSupplierModel } from 'src/app/models/supplier';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  isSaving = false;
  id = 0;
  suppliers: SupplierModel[] = [];
  codeExiste = false;
  supplier: SupplierModel;

  addForm = this.fb.group({
    id: ['', []],
    name: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.A-Za-z- éè\'çàâêûîô]*$')],
    ],
    code: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(50)],
    ],
    phone: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[0-9]*')],
    ],
    address: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(50)],
    ]
  });

  constructor(
    private fb: FormBuilder,
    protected activatedRoute: ActivatedRoute,
    protected supplierService: SupplierService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.supplierService.getSupplier(this.id).pipe(first()).subscribe(model => {
        this.updateForm(model);
        this.supplier = model;
      });
    }

    // Get the list of all suppliers
    this.supplierService.getSuppliers()
      .pipe(first())
      .subscribe(res => {
        this.suppliers = res;
      });
  }

  updateForm(model: SupplierModel): void {
    this.addForm.patchValue({
      id: model.supplierId,
      name: model.name,
      code: model.supplierCode,
      phone: model.phoneNumber,
      address: model.address,
    });
  }

  private createFromForm(): AddSupplierModel {
    return {
      ...new AddSupplierModel(),
      Name: this.addForm.get(['name']).value,
      SupplierCode: this.addForm.get(['code']).value,
      PhoneNumber: this.addForm.get(['phone']).value,
      Address: this.addForm.get(['address']).value
    };
  }

  addSupplier() {
    this.isSaving = true;
    this.codeExiste = false;
    const model = this.createFromForm();
    this.codeDouble(model.SupplierCode, model.SupplierId);

    if (!this.codeExiste) {
      this.subscribeToSaveResponse(this.supplierService.create(model));
    } else {
      this.isSaving = false;
    }
  }

  updateSupplier() {
    this.isSaving = true;
    this.codeExiste = false;
    const model = this.createFromForm();
    model.SupplierId = this.addForm.get(['id']).value;
    model.LastBuyDate = this.supplier.lastBuyDate;
    this.codeDouble(model.SupplierCode, model.SupplierId);

    if (!this.codeExiste) {
      this.subscribeToSaveResponse(this.supplierService.update(model));
    } else {
      this.isSaving = false;
    }
  }

  protected subscribeToSaveResponse(result: Observable<AddSupplierModel>): void {
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

  // check if the code added is duplicated
  codeDouble(code: string, id: number): boolean {
    for (const f of this.suppliers) {
      if (f.supplierId !== id && f.supplierCode !== null) {
        if (f.supplierCode.toLowerCase() === code.toLowerCase()) {
          this.codeExiste = true;
        }
      }
    }
    return this.codeExiste;
  }

}
