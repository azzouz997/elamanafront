import { RoleModel } from './../../models/role';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleService } from './../../services/role.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DeleteRoleComponent } from '../delete-role/delete-role.component';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  roles: RoleModel[] = [];
  booleanValue = false;
  searchText = '';
  p = 0;

  constructor(
    private roleservice: RoleService,
    protected modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.roleservice.getRoles()
      .pipe(first())
      .subscribe(roles => {
        this.roles = roles;
      });
  }

  addRole() {
    this.router.navigate(['/role-add']);
  }

  deleteRole(role: RoleModel) {
    const modelRef = this.modalService.open(DeleteRoleComponent);
    modelRef.componentInstance.roleModel = role;
  }

  sortFunction(colName, valBoolean) {
    if (valBoolean === true) {
      this.roles.sort((a, b) => a[colName].toLowerCase() < b[colName].toLowerCase()
        ? 1 : a[colName].toLowerCase() > b[colName].toLowerCase() ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    } else {
      this.roles.sort((a, b) => a[colName].toLowerCase() > b[colName].toLowerCase()
        ? 1 : a[colName].toLowerCase() < b[colName].toLowerCase() ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    }
  }
}
