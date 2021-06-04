import { ProductModel } from './../../models/product';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { DetailsProductComponent } from '../details-product/details-product.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: ProductModel[] = [];
  booleanValue = false;
  searchText = '';
  p = 0;

  constructor(
    private productservice: ProductService,
    protected modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.productservice.getProducts()
      .pipe(first())
      .subscribe(products => {
        this.products = products;
        this.products.forEach(p => {
          p.supplierName = p.supplier.name;
        });
      });
  }

  addProduct() {
    this.router.navigate(['/product-add']);
  }

  infoProduct(product: ProductModel) {
    const modelRef = this.modalService.open(DetailsProductComponent);
    modelRef.componentInstance.product = product;
  }

  sortFunction(colName, valBoolean) {
    if (valBoolean === true) {
      this.products.sort((a, b) => a[colName].toLowerCase() < b[colName].toLowerCase()
        ? 1 : a[colName].toLowerCase() > b[colName].toLowerCase() ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    } else {
      this.products.sort((a, b) => a[colName].toLowerCase() > b[colName].toLowerCase()
        ? 1 : a[colName].toLowerCase() < b[colName].toLowerCase() ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    }
  }

}
