import { SupplierService } from './../../services/supplier.service';
import { SupplierModel, SupplierHistoryModel } from './../../models/supplier';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-historique-supplier',
  templateUrl: './historique-supplier.component.html',
  styleUrls: ['./historique-supplier.component.css']
})
export class HistoriqueSupplierComponent implements OnInit {

  supplier: SupplierModel;
  history: SupplierHistoryModel[];
  p = 0;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private supplierservice: SupplierService
  ) { }

  ngOnInit() {
    this.supplierservice.getSupplier(this.activatedRoute.snapshot.params.id).pipe(first()).subscribe(supplier => {
      this.supplier = supplier;
      this.history = supplier.supplierHistory;
    });
  }

}
