import { RoleService } from './../../services/role.service';
import { UserModel } from './../../models/user';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDeleteDialogComponent } from '../user-delete-dialog.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: UserModel[] = [];
  searchText = '';
  p = 0;
  closeResult: string;
  booleanValue: any = false;

  constructor(
    private userservice: UserService,
    private roleservice: RoleService,
    protected modalService: NgbModal,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.userservice.getUsers()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
        this.users.forEach(u => {
          this.roleservice.getRole(u.roleId)
            .pipe(first())
            .subscribe(r => {
              u.roleName = r.name;
            });
        });
      });
  }

  addUser() {
    this.router.navigate(['/user-add']);
  }

  deleteUser(user: UserModel) {
    const modelRef = this.modalService.open(UserDeleteDialogComponent);
    modelRef.componentInstance.user = user;
  }

  desactivateUser(id: number) {
    this.userservice.desactivateUser(id).pipe(first()).subscribe();
    location.reload();
  }

  activateUser(id: number) {
    this.userservice.ActivateUser(id).pipe(first()).subscribe();
    location.reload();
  }

  sortFunction(colName, valBoolean) {
    if (valBoolean === true) {
      this.users.sort((a, b) => a[colName].toLowerCase() < b[colName].toLowerCase()
        ? 1 : a[colName].toLowerCase() > b[colName].toLowerCase() ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    } else {
      this.users.sort((a, b) => a[colName].toLowerCase() > b[colName].toLowerCase()
        ? 1 : a[colName].toLowerCase() < b[colName].toLowerCase() ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    }
  }

}
