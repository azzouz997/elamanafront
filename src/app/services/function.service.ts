import { RoleModel } from './../models/role';
import { Observable } from 'rxjs';
import { AddFunctionModel, FunctionModel } from './../models/function';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FunctionService {
  private apiUrl = 'https://localhost:44332';

  constructor(private http: HttpClient) { }

  getFunctions() {
    return this.http.get<FunctionModel[]>(`${this.apiUrl}/api/Function/GetFunctions`);
  }

  create(model: AddFunctionModel): Observable<AddFunctionModel> {
    return this.http.post<AddFunctionModel>(`${this.apiUrl}/api/Function/AddFunction`, model);
  }

  update(model: AddFunctionModel): Observable<AddFunctionModel> {
    return this.http.post<AddFunctionModel>(`${this.apiUrl}/api/Function/UpdateFunction`, model);
  }

  getFunction(id: number) {
    return this.http.get<FunctionModel>(`${this.apiUrl}/api/Function/GetFunction/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/api/Function/DeleteFunction/${id}`);
  }

  desactivate(id: number) {
    return this.http.put<AddFunctionModel>(`${this.apiUrl}/api/Function/DeactivateFunction/${id}`, null);
  }

  Activate(id: number) {
    return this.http.put<AddFunctionModel>(`${this.apiUrl}/api/Function/ActivateFunction/${id}`, null);
  }

  getFunctionsByRole(roleId: number) {
    return this.http.get<FunctionModel[]>(`${this.apiUrl}/api/Function/GetFunctionsByRole/${roleId}`);
  }

  getActivateFunction() {
    return this.http.get<FunctionModel[]>(`${this.apiUrl}/api/Function/GetActiveFunctions`);
  }

  getRoleByFunction(id: number) {
    return this.http.get<any>(`${this.apiUrl}/api/Function/GetListOfRoles/${id}`);
  }

}
