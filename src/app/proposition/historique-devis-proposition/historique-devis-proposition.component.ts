import { PropositionModel, QuoteHistoryModel } from './../../models/proposition';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropositionService } from 'src/app/services/proposition.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-historique-devis-proposition',
  templateUrl: './historique-devis-proposition.component.html',
  styleUrls: ['./historique-devis-proposition.component.css']
})
export class HistoriqueDevisPropositionComponent implements OnInit {

  proposition: PropositionModel;
  history: QuoteHistoryModel[];
  p = 0;
  blob: any;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private propositionservice: PropositionService
  ) { }

  ngOnInit() {
    this.propositionservice.getProposition(this.activatedRoute.snapshot.params.id).pipe(first()).subscribe(proposition => {
      this.proposition = proposition;
      this.history = proposition.quoteHistory;
    });
  }

  displayFile(idDevis: string) {
    this.propositionservice.getFile(idDevis).subscribe(data => {
      this.blob = new Blob([data], { type: 'application/octet-stream' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(this.blob);
      link.download = data.type;
      link.click();
    });
  }

}
