import { SupplierService } from './../../services/supplier.service';
import { AddProductModel, ProductModel } from './../../models/product';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SupplierModel } from 'src/app/models/supplier';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  id = 0;
  isSaving = false;
  listSuppliers: SupplierModel[] = [];

  addForm = this.fb.group({
    id: ['', []],
    productCode: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(50)],
    ],
    productName: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(50)],
    ],
    quantityInStock: ['', [Validators.required]],
    supplier: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private supplierService: SupplierService,
    protected activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.productService.getProduct(this.id).pipe(first()).subscribe(product => {
        this.updateForm(product);
      });
    }

    this.supplierService.getSuppliers()
      .pipe(first())
      .subscribe(res => {
        this.listSuppliers = res;
      });
  }

  updateForm(product: ProductModel): void {
    this.addForm.patchValue({
      id: product.productId,
      productCode: product.productCode,
      productName: product.productName,
      quantityInStock: product.quantityInStock,
      supplier: product.supplier.supplierId
    });
  }

  private createFromForm(): AddProductModel {
    return {
      ...new AddProductModel(),
      ProductCode: this.addForm.get(['productCode']).value,
      ProductName: this.addForm.get(['productName']).value,
      QuantityInStock: this.addForm.get(['quantityInStock']).value,
      SupplierId: this.addForm.get(['supplier']).value
    };
  }

  addProduct() {
    this.isSaving = true;
    const product = this.createFromForm();
    this.subscribeToSaveResponse(this.productService.create(product));
  }

  updateProduct() {
    this.isSaving = true;
    const product = this.createFromForm();
    product.ProductId = this.addForm.get(['id']).value;
    console.log('---------------> ', product)
    this.subscribeToSaveResponse(this.productService.update(product));
  }

  protected subscribeToSaveResponse(result: Observable<AddProductModel>): void {
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

}
