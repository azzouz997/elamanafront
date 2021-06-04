import { ValidatorModel, UserModel, AddUserModel } from './../../models/user';
import { UserService } from './../../services/user.service';
import { PropositionService } from './../../services/proposition.service';
import { AddPropositionModel, PropositionModel } from './../../models/proposition';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-proposition',
  templateUrl: './detail-proposition.component.html',
  styleUrls: ['./detail-proposition.component.css']
})
export class DetailPropositionComponent implements OnInit {

  proposition: PropositionModel;
  propositionModel: PropositionModel;
  validator: UserModel;

  constructor(
    protected propositionService: PropositionService,
    protected userservice: UserService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.propositionService.getProposition(this.proposition.propositionId).pipe(first()).subscribe(prop => {
      this.propositionModel = prop;
    });

  }

  clear() {
    this.activeModal.dismiss();
  }

  valider() {
    this.userservice.getByLogin(localStorage.getItem('login'))
      .pipe(first())
      .subscribe(user => {
        this.validator = user;
        this.validator.role.functions = [];
        this.subscribeToSaveResponse(this.propositionService.validate(this.proposition.propositionId, this.validator));
        this.activeModal.dismiss();
        location.reload();
      });
  }

  protected subscribeToSaveResponse(result: Observable<AddPropositionModel>): void {
    result.subscribe();
  }

  print(prop: PropositionModel): void {
    let printContents;
    let popupWin;
    this.propositionModel = prop;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Proposition</title>
          <link href="../../../../../assets/css/style.css" rel="stylesheet">
          <link href="../../../../../assets/css/themes/all-themes.css" rel="stylesheet" />
          <link href="../../../../../assets/plugins/animate-css/animate.css" rel="stylesheet" />
          <link href="../../../../../assets/plugins/node-waves/waves.css" rel="stylesheet" />
          <link href="../../../../../assets/plugins/bootstrap/css/bootstrap.css" rel="stylesheet">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-modal/2.2.6/js/bootstrap-modalmanager.min.js"
          rel="stylesheet" type="application/javascript">
        </head>
        <body onload="window.print();window.close()">
          <br>
          <br>
          <br>
          ${printContents}
        </body>
      </html>`
    );
    popupWin.document.close();
  }

}
