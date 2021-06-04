import { FunctionModel } from './../../models/function';
import { RoleService } from './../../services/role.service';
import { RoleModel } from './../../models/role';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list-function-role',
  templateUrl: './list-function-role.component.html',
  styleUrls: ['./list-function-role.component.css']
})
export class ListFunctionRoleComponent implements OnInit {

  roleModel: RoleModel;
  functions: FunctionModel[];
  id = 0;

  constructor(
    protected roleService: RoleService,
    protected activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.roleService.getRole(this.id).pipe(first()).subscribe(model => {
        this.roleModel = model;
        this.functions = model.functions;
      });
    }
  }

}
