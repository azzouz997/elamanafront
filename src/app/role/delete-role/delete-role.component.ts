import { RoleService } from './../../services/role.service';
import { RoleModel } from './../../models/role';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-role',
  templateUrl: './delete-role.component.html',
  styleUrls: ['./delete-role.component.css']
})
export class DeleteRoleComponent implements OnInit {

  roleModel: RoleModel;

  constructor(
    protected roleService: RoleService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() { }

  clear() {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number) {
    this.roleService.delete(id).subscribe(() => {
      this.activeModal.close();
      location.reload();
    });
  }

}
