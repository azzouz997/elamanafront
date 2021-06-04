import { FunctionModel } from './../../models/function';
import { FunctionService } from './../../services/function.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from './../../services/role.service';
import { Observable } from 'rxjs';
import { AddRoleModel, RoleModel } from './../../models/role';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  id = 0;
  isSaving = false;
  actifFunctions: FunctionModel[];
  functionsList: FunctionModel[] = [];
  roleEdit: RoleModel;
  alreadyExistList: FunctionModel[] = [];
  alreadyExist = false;

  addForm = this.fb.group({
    id: ['', []],
    name: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.A-Za-z- éè\'çàâêûîô]*$')],
    ],
    description: [
      '',
      [Validators.pattern('^[_.A-Za-z- éè\'çàâêûîô]*$')]
    ],
    functions: ['', []]
  });

  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private functionservice: FunctionService,
    protected activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.roleService.getRole(this.id).pipe(first()).subscribe(role => {
        this.updateForm(role);
        this.roleEdit = role;
        this.functionsList = role.functions;

        this.functionservice.getActivateFunction()
          .pipe(first())
          .subscribe(functions => {
            this.actifFunctions = functions;
          });
      });
    }

    this.functionservice.getActivateFunction()
      .pipe(first())
      .subscribe(functions => {
        this.actifFunctions = functions;
      });
  }

  updateForm(role: RoleModel): void {
    this.addForm.patchValue({
      id: role.roleId,
      name: role.name,
      description: role.description,
      functions: role.functions
    });
  }

  private createFromForm(): AddRoleModel {
    return {
      ...new AddRoleModel(),
      Name: this.addForm.get(['name']).value,
      Description: this.addForm.get(['description']).value,
      Functions: this.addForm.get(['functions']).value
    };
  }

  addRole() {
    this.isSaving = true;
    const role = this.createFromForm();
    this.subscribeToSaveResponse(this.roleService.create(role));
  }

  updateRole() {
    this.isSaving = true;
    const role = this.createFromForm();
    role.RoleId = this.addForm.get(['id']).value;
    this.subscribeToSaveResponse(this.roleService.update(role));
  }

  protected subscribeToSaveResponse(result: Observable<AddRoleModel>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  previousState(): void {
    window.history.back();
  }

  addToList(event: FunctionModel) {
    this.alreadyExistList = [];
    this.alreadyExist = false;
    this.functionsList.forEach(element => {
      if (element.functionId === event.functionId) {
        this.alreadyExistList.push(element);
      }
    });

    if (this.alreadyExistList.length > 0) {
      this.alreadyExist = true;
    }
    if (!this.alreadyExist) {
      this.functionsList.push(event);
    }
  }

  removeFromList(f: FunctionModel) {
    this.functionsList.splice(this.functionsList.indexOf(f), 1);
  }

}
