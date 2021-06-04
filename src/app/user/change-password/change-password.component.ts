import { first } from 'rxjs/operators';
import { AddUserModel } from './../../models/user';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  OldPassword = '';
  user: AddUserModel;
  isSaving = false;

  updateForm = this.fb.group({
    id: ['', []],
    oldPassword: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });

  constructor(
    private userservice: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userservice.getUserByLogin(localStorage.getItem('login'))
    .pipe(first())
    .subscribe( user => {
      this.user = user;
    });
  }

  checkPasswords() {
    const password = this.updateForm.get('password').value;
    const confirmPassword = this.updateForm.get('confirmPassword').value;

    return password === confirmPassword ? null : { notSame: true };
  }

  changePassword() {
    this.isSaving = true;
    if (!this.checkPasswords()) {
      this.OldPassword = this.updateForm.get(['oldPassword']).value;
      this.user.Password = this.updateForm.get('password').value;
      this.subscribeToSaveResponse(this.userservice.changePassword(this.user, this.OldPassword));
    } else {
      this.isSaving = false;
    }
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

}
