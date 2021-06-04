import { FunctionModel } from './../models/function';
import { RoleModel } from './../models/role';
import { RoleService } from './../services/role.service';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FunctionService } from '../services/function.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  role: RoleModel;
  functions: FunctionModel[] = [];
  currentUserRole = '';

  constructor(
    private authenticationService: AuthenticationService,
    private functionService: FunctionService,
    private roleService: RoleService
  ) { }

  ngOnInit() {
    this.currentUserRole = this.authenticationService.role;

    this.roleService.getRoleByName(localStorage.getItem('role'))
      .pipe(first())
      .subscribe(role => {
        this.role = role;

        this.functionService.getFunctionsByRole(this.role.roleId)
          .pipe(first())
          .subscribe(f => {
            this.functions = f;
            // console.log('-*************> ', this.functions);
          });
      });
  }

}
