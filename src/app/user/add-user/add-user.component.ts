import { RoleModel } from './../../models/role';
import { RoleService } from './../../services/role.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AddUserModel, UserModel } from './../../models/user';
import { Observable } from 'rxjs';
import { UserService } from './../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  id = 0;
  isSaving = false;
  roles: RoleModel[];
  listUsers: UserModel[];
  loginExiste = false;
  emailExiste = false;
  user: UserModel;

  addForm = this.fb.group({
    id: ['', []],
    name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.A-Za-z- éè\'çàâêûîô]*$')]],
    description: ['', []],
    login: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
    userStatus: ['', []],
    password: ['', []],
    role: ['', []],
    direction: ['', [Validators.required]]
  });

  constructor(
    protected activatedRoute: ActivatedRoute,
    private userservice: UserService,
    private roleservice: RoleService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.userservice.getUser(this.id).pipe(first()).subscribe(user => {
        this.updateForm(user);
        this.user = user;
      });
    } else {
      this.addForm.get(['password']).setValidators(Validators.required);
      // this.addForm.get(['role']).setValidators(Validators.required);
    }

    this.roleservice.getRoles()
      .pipe(first())
      .subscribe(roles => {
        this.roles = roles;
      });

    this.userservice.getUsers()
      .pipe(first())
      .subscribe(users => {
        this.listUsers = users;
      });
  }

  updateForm(user: UserModel): void {
    this.addForm.patchValue({
      id: user.userId,
      name: user.name,
      email: user.email,
      description: user.description,
      login: user.login,
      userStatus: user.userStatus,
      direction: user.direction,
      role: user.role.roleId
    });
  }

  private createFromForm(): AddUserModel {
    return {
      ...new AddUserModel(),
      Name: this.addForm.get(['name']).value,
      Email: this.addForm.get(['email']).value,
      Description: this.addForm.get(['description']).value,
      Login: this.addForm.get(['login']).value,
      UserStatus: this.addForm.get(['userStatus']).value,
      Password: this.addForm.get(['password']).value,
      RoleId: this.addForm.get(['role']).value,
      Direction: this.addForm.get(['direction']).value
    };
  }

  addUser() {
    this.isSaving = true;
    this.loginExiste = false;
    this.emailExiste = false;
    const user = this.createFromForm();
    this.loginDouble(user.Login, user.UserId);
    this.emailDouble(user.Email, user.UserId);

    if (!this.loginExiste && !this.emailExiste) {
      if (this.addForm.get(['userStatus']).value === undefined) {
        user.UserStatus = false;
      }
      this.subscribeToSaveResponse(this.userservice.create(user));
    } else {
      this.isSaving = false;
    }
  }

  updateUser() {
    this.isSaving = true;
    const user = this.createFromForm();
    user.UserId = this.addForm.get(['id']).value;
    user.Password = this.user.password;
    if (this.addForm.get(['userStatus']).value === undefined) {
      user.UserStatus = false;
    }
    this.subscribeToSaveResponse(this.userservice.update(user));
  }

  protected subscribeToSaveResponse(result: Observable<AddUserModel>): void {
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

  loginDouble(login: string, id: number): boolean {
    for (const user of this.listUsers) {
      if (user.userId !== id) {
        if (user.login.toLowerCase() === login.toLowerCase()) {
          this.loginExiste = true;
        }
      }
    }
    return this.loginExiste;
  }

  emailDouble(email: string, id: number): boolean {
    for (const user of this.listUsers) {
      if (user.userId !== id) {
        if (user.email.toLowerCase() === email.toLowerCase()) {
          this.emailExiste = true;
        }
      }
    }
    return this.emailExiste;
  }

}
