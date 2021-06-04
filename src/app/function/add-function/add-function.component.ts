import { UserModel } from './../../models/user';
import { UserService } from './../../services/user.service';
import { RoleModel } from './../../models/role';
import { RoleService } from './../../services/role.service';
import { first } from 'rxjs/operators';
import { FunctionService } from './../../services/function.service';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { AddFunctionModel, FunctionModel } from './../../models/function';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-function',
  templateUrl: './add-function.component.html',
  styleUrls: ['./add-function.component.css']
})
export class AddFunctionComponent implements OnInit {

  id = 0;
  isSaving = false;
  rolesList: RoleModel[] = [];
  usersList: UserModel[] = [];
  functions: FunctionModel[] = [];
  nameExiste = false;
  isRole = false;
  isUser = false;

  // formulaire
  addForm = this.fb.group({
    id: ['', []],
    name: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.A-Za-z- éè\'çàâêûîô]*$')],
    ],
    description: [
      '', []
    ],
    // functionType: ['', [Validators.required]],
    // roles: ['', []],
    // user: ['', []],
    route: ['', []]
  });

  constructor(
    private fb: FormBuilder,
    private functionService: FunctionService,
    private roleservice: RoleService,
    private userservice: UserService,
    protected activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.functionService.getFunction(this.id).pipe(first()).subscribe(model => {
        /* if (model.functionType === 'user') {
          this.isUser = true;
        } else if (model.functionType === 'role') {
          this.isRole = true;
        } */
        this.updateForm(model);
      });
    }

    // Get the list of all roles
    this.roleservice.getRoles()
      .pipe(first())
      .subscribe(roles => {
        this.rolesList = roles;
      });

    // Get the list of all users
    this.userservice.getUsers()
      .pipe(first())
      .subscribe(users => {
        this.usersList = users;
      });

    // Get the list of all functions
    this.functionService.getFunctions()
      .pipe(first())
      .subscribe(functions => {
        this.functions = functions;
      });
  }

  updateForm(model: FunctionModel): void {
    this.addForm.patchValue({
      id: model.functionId,
      name: model.name,
      description: model.description,
      // functionType: model.functionType,
      // roles: model.roles,
      // user: model.userId
    });
  }

  private createFromForm(): AddFunctionModel {
    return {
      ...new AddFunctionModel(),
      Name: this.addForm.get(['name']).value,
      Description: this.addForm.get(['description']).value,
      // FunctionType: this.addForm.get(['functionType']).value,
      // Roles: this.addForm.get(['roles']).value,
      // UserId: this.addForm.get(['user']).value,
      Route: this.addForm.get(['route']).value
    };
  }

  addFunction() {
    this.isSaving = true;
    this.nameExiste = false;
    const model = this.createFromForm();
    this.nameDouble(model.Name, model.FunctionId);
    console.log('-----------------> ', model)
    if (!this.nameExiste) {
      // this.verified();
      this.subscribeToSaveResponse(this.functionService.create(model));
    } else {
      this.isSaving = false;
    }

  }

  updateFunction() {
    this.isSaving = true;
    this.nameExiste = false;
    const model = this.createFromForm();
    model.FunctionId = this.addForm.get(['id']).value;
    this.nameDouble(model.Name, model.FunctionId);

    if (!this.nameExiste) {
      // this.verified();
      this.subscribeToSaveResponse(this.functionService.update(model));
    } else {
      this.isSaving = false;
    }
  }

  protected subscribeToSaveResponse(result: Observable<AddFunctionModel>): void {
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

  // check if the name added is duplicated
  nameDouble(name: string, id: number): boolean {
    for (const f of this.functions) {
      if (f.functionId !== id) {
        if (f.name.toLowerCase() === name.toLowerCase()) {
          this.nameExiste = true;
        }
      }
    }
    return this.nameExiste;
  }

  onItemChange(value) {
    if (value === 'user') {
      this.isUser = true;
      this.isRole = false;
    } else if (value === 'role') {
      this.isRole = true;
      this.isUser = false;
    }
  }

  verified() {
    if (this.isUser) {
      this.addForm.get(['roles']).setValue('');
    } else if (this.isRole) {
      this.addForm.get(['user']).setValue('');
    }
  }

}
