import { UserModel } from './../models/user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete-dialog.component.html'
})
export class UserDeleteDialogComponent implements OnInit {

  user: UserModel;

  constructor(
    protected userService: UserService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
  }

  clear() {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number) {
    this.userService.delete(id).subscribe(() => {
      this.activeModal.close();
      location.reload();
    });
  }

}
