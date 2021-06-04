import { UserService } from './../../services/user.service';
import { PropositionService } from './../../services/proposition.service';
import { HistoryPropositionModel, PropositionModel } from './../../models/proposition';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier.service';
import { ProductService } from 'src/app/services/product.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-historique-proposition',
  templateUrl: './historique-proposition.component.html',
  styleUrls: ['./historique-proposition.component.css']
})
export class HistoriquePropositionComponent implements OnInit {

  proposition: PropositionModel;
  history: HistoryPropositionModel[];
  p = 0;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private propositionservice: PropositionService,
    private productservice: ProductService,
    private userservice: UserService,
    private supplierservice: SupplierService
  ) { }

  ngOnInit() {
    this.propositionservice.getProposition(this.activatedRoute.snapshot.params.id).pipe(first()).subscribe(proposition => {
      this.proposition = proposition;
      this.supplierservice.getSupplier(proposition.supplierId).pipe(first()).subscribe(s => {
        this.proposition.supplierName = s.name;
      });

      this.history = proposition.propositionHistory;
      this.history.forEach(h => {
        this.supplierservice.getSupplier(h.supplierId).pipe(first()).subscribe(s => {
          h.supplierName = s.name;
        });
        this.productservice.getProduct(h.productId).pipe(first()).subscribe(p => {
          h.productName = p.productName;
        });
        if (h.validatorId) {
          this.userservice.getUser(h.validatorId).pipe(first()).subscribe(u => {
            h.validatorName = u.name;
          });
        }

      });
    });
  }

}
