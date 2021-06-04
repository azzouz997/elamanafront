import { SupplierModel } from 'src/app/models/supplier';
import { SupplierService } from './../../services/supplier.service';
import { ProductService } from './../../services/product.service';
import { ProductModel, HistoryProductModel } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-historique-product',
  templateUrl: './historique-product.component.html',
  styleUrls: ['./historique-product.component.css']
})
export class HistoriqueProductComponent implements OnInit {

  product: ProductModel;
  history: HistoryProductModel[];
  p = 0;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private productservice: ProductService,
    private supplierservice: SupplierService
  ) { }

  ngOnInit() {
    this.productservice.getProduct(this.activatedRoute.snapshot.params.id).pipe(first()).subscribe(product => {
      this.product = product;
      this.supplierservice.getSupplier(product.supplierId).pipe(first()).subscribe(s => {
        this.product.supplierName = s.name;
      });
      this.history = product.productHistory;
      this.history.forEach(h => {
        this.supplierservice.getSupplier(h.supplierId).pipe(first()).subscribe(s => {
          h.supplierName = s.name;
        });
      });
    });
  }
}
