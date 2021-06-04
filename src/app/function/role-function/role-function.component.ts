import { RoleService } from './../../services/role.service';
import { RoleModel } from './../../models/role';
import { FunctionService } from './../../services/function.service';
import { FunctionModel } from './../../models/function';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-role-function',
  templateUrl: './role-function.component.html',
  styleUrls: ['./role-function.component.css']
})
export class RoleFunctionComponent implements OnInit {

  functionModel: FunctionModel;
  roleModel: string[];
  id = 0;

  constructor(
    protected functionService: FunctionService,
    protected roleService: RoleService,
    protected activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.functionService.getFunction(this.id).pipe(first()).subscribe(model => {
        this.functionModel = model;
      });
      /* this.functionService.getRoleByFunction(this.id).pipe(first()).subscribe(model => {
        this.roleModel = model;
      }); */
      this.roleService.getRolesByFunction(this.id).pipe(first()).subscribe(model => {
        this.roleModel = model;
      });
    }
  }

}
