import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AddPropositionModel, PropositionModel } from 'src/app/models/proposition';
import { PropositionService } from 'src/app/services/proposition.service';

@Component({
  selector: 'app-edit-devis-proposition',
  templateUrl: './edit-devis-proposition.component.html',
  styleUrls: ['./edit-devis-proposition.component.css']
})
export class EditDevisPropositionComponent implements OnInit {

  proposition: PropositionModel;
  fileToUpload: File = null;
  isSaving = false;

  editForm = this.fb.group({
    devis: ['', [Validators.required]]
  });

  constructor(
    protected propositionService: PropositionService,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  clear() {
    this.activeModal.dismiss();
  }

  valider() {
    this.isSaving = true;
    this.subscribeToSaveResponse(this.propositionService.updateDevis(this.proposition, this.fileToUpload));
    this.activeModal.dismiss();
    location.reload();
  }

  protected subscribeToSaveResponse(result: Observable<PropositionModel>): void {
    result.subscribe();
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
