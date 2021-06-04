import { Observable } from 'rxjs';
import { AddRoleModel, RoleModel } from './../models/role';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RoleService {
  private apiUrl = 'https://localhost:44332';

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get<RoleModel[]>(`${this.apiUrl}/api/Role/GetRoles`);
  }

  create(role: AddRoleModel): Observable<AddRoleModel> {
    return this.http.post<AddRoleModel>(`${this.apiUrl}/api/Role/AddRole`, role);
  }

  getRole(id: number) {
    return this.http.get<RoleModel>(`${this.apiUrl}/api/Role/GetRole/${id}`);
  }

  update(role: AddRoleModel): Observable<AddRoleModel> {
    return this.http.put<AddRoleModel>(`${this.apiUrl}/api/Role/UpdateRole`, role);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/api/Role/DeleteRole/${id}`);
  }

  getRoleByName(name: string) {
    return this.http.get<RoleModel>(`${this.apiUrl}/api/Role/GetRoleByName/${name}`);
  }

  getRolesByFunction(id: number) {
    return this.http.get<string[]>(`${this.apiUrl}/api/Role/GetRolesByFunction/${id}`);
  }

}
