import { EditDevisPropositionComponent } from './../edit-devis-proposition/edit-devis-proposition.component';
import { UserService } from './../../services/user.service';
import { ProductService } from './../../services/product.service';
import { DetailPropositionComponent } from './../detail-proposition/detail-proposition.component';
import { SupplierService } from './../../services/supplier.service';
import { PropositionService } from './../../services/proposition.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropositionModel } from 'src/app/models/proposition';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-proposition',
  templateUrl: './list-proposition.component.html',
  styleUrls: ['./list-proposition.component.css']
})
export class ListPropositionComponent implements OnInit {

  searchText = '';
  booleanValue = false;
  propositions: PropositionModel[] = [];
  proposition: PropositionModel;
  lstFileDetails: any;
  blob: any;
  p = 0;

  constructor(
    private propostionService: PropositionService,
    private supplierService: SupplierService,
    private productService: ProductService,
    private userService: UserService,
    protected modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.propostionService.getPropositions()
      .pipe(first())
      .subscribe(propositions => {
        this.propositions = propositions;
        propositions.forEach(p => {
          this.supplierService.getSupplier(p.supplierId).pipe(first()).subscribe(supplier => {
            p.supplierName = supplier.name;
            p.supplierCode = supplier.supplierCode;
          });

          this.productService.getProduct(p.productId).pipe(first()).subscribe(product => {
            p.product = product;
          });

          if (p.validatorId) {
            this.userService.getUser(p.validatorId).pipe(first()).subscribe(user => {
              p.validator = user;
            });
          }

        });
      });
  }

  addProposition() {
    this.router.navigate(['/proposition-add']);
  }

  displayFile(idDevis: string) {
    this.propostionService.getFile(idDevis).subscribe(data => {
      this.blob = new Blob([data], { type: 'application/octet-stream' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(this.blob);
      link.download = data.type;
      link.click();
    });
  }

  infoProposition(p: PropositionModel) {
    const modelRef = this.modalService.open(DetailPropositionComponent);
    modelRef.componentInstance.proposition = p;
  }

  editDevisProposition(p: PropositionModel) {
    const modelRef = this.modalService.open(EditDevisPropositionComponent);
    modelRef.componentInstance.proposition = p;
  }

  sortFunction(colName, valBoolean) {
    if (valBoolean === true) {
      this.propositions.sort((a, b) => a[colName].toLowerCase() < b[colName].toLowerCase()
        ? 1 : a[colName].toLowerCase() > b[colName].toLowerCase() ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    } else {
      this.propositions.sort((a, b) => a[colName].toLowerCase() > b[colName].toLowerCase()
        ? 1 : a[colName].toLowerCase() < b[colName].toLowerCase() ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    }
  }

}
