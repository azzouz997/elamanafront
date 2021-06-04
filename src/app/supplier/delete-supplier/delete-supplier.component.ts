import { SupplierService } from './../../services/supplier.service';
import { SupplierModel } from './../../models/supplier';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-supplier',
  templateUrl: './delete-supplier.component.html',
  styleUrls: ['./delete-supplier.component.css']
})
export class DeleteSupplierComponent implements OnInit {

  supplier: SupplierModel;

  constructor(
    protected supplierService: SupplierService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() { }

  clear() {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number) {
    this.supplierService.delete(id).subscribe(() => {
      this.activeModal.close();
      location.reload();
    });
  }

}
