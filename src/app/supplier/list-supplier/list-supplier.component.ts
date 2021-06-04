import { DeleteSupplierComponent } from './../delete-supplier/delete-supplier.component';
import { first } from 'rxjs/operators';
import { SupplierService } from './../../services/supplier.service';
import { SupplierModel } from './../../models/supplier';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-supplier',
  templateUrl: './list-supplier.component.html',
  styleUrls: ['./list-supplier.component.css']
})
export class ListSupplierComponent implements OnInit {

  suppliers: SupplierModel[] = [];
  booleanValue = false;
  searchText = '';
  p = 0;

  constructor(
    private supplierService: SupplierService,
    protected modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.supplierService.getSuppliers()
      .pipe(first())
      .subscribe(res => {
        this.suppliers = res;
      });
  }

  addSupplier() {
    this.router.navigate(['/supplier-add']);
  }

  deleteSupplier(supplier: SupplierModel) {
    const modelRef = this.modalService.open(DeleteSupplierComponent);
    modelRef.componentInstance.supplier = supplier;
  }

  sortFunction(colName, valBoolean) {
    if (valBoolean === true) {
      this.suppliers.sort((a, b) => a[colName].toLowerCase() < b[colName].toLowerCase()
        ? 1 : a[colName].toLowerCase() > b[colName].toLowerCase() ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    } else {
      this.suppliers.sort((a, b) => a[colName].toLowerCase() > b[colName].toLowerCase()
        ? 1 : a[colName].toLowerCase() < b[colName].toLowerCase() ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    }
  }
}
