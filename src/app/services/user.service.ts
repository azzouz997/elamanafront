import { Observable } from 'rxjs';
import { AddUserModel, UserModel } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://localhost:44332';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<UserModel[]>(`${this.apiUrl}/api/User/GetUsers`);
  }

  create(user: AddUserModel): Observable<AddUserModel> {
    return this.http.post<AddUserModel>(`${this.apiUrl}/api/User/AddUser`, user);
  }

  update(user: AddUserModel): Observable<AddUserModel> {
    return this.http.put<AddUserModel>(`${this.apiUrl}/api/User/UpdateUser`, user);
  }

  getUser(id: number) {
    return this.http.get<UserModel>(`${this.apiUrl}/api/User/GetUser/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/api/User/DeleteUser/${id}`);
  }

  changePassword(user: AddUserModel, oldPassword: string): Observable<AddUserModel> {
    return this.http.put<AddUserModel>(`${this.apiUrl}/api/User/UpdatePassword/${oldPassword}`, user);
  }

  desactivateUser(id: number) {
    return this.http.put<AddUserModel>(`${this.apiUrl}/api/User/DeactivateUser/${id}`, null);
  }

  ActivateUser(id: number) {
    return this.http.put<AddUserModel>(`${this.apiUrl}/api/User/ActivateUser/${id}`, null);
  }

  getUserByLogin(login: string) {
    return this.http.get<AddUserModel>(`${this.apiUrl}/api/User/GetUserByLogin/${login}`);
  }

  getByLogin(login: string) {
    return this.http.get<UserModel>(`${this.apiUrl}/api/User/GetUserByLogin/${login}`);
  }

}
