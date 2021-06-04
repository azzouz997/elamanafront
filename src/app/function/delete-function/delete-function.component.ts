import { FunctionService } from './../../services/function.service';
import { FunctionModel } from './../../models/function';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-function',
  templateUrl: './delete-function.component.html',
  styleUrls: ['./delete-function.component.css']
})
export class DeleteFunctionComponent implements OnInit {

  functionModel: FunctionModel;

  constructor(
    protected functionService: FunctionService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() { }

  clear() {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number) {
    this.functionService.delete(id).subscribe(() => {
      this.activeModal.close();
      location.reload();
    });
  }
}
