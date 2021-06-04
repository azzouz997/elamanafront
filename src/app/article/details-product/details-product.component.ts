import { ProductService } from './../../services/product.service';
import { ProductModel } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  product: ProductModel;

  constructor(
    protected productService: ProductService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  clear() {
    this.activeModal.dismiss();
  }

}
