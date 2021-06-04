import { SupplierModel, AddSupplierModel } from './../models/supplier';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class SupplierService {
  private apiUrl = 'https://localhost:44332';

  constructor(private http: HttpClient) { }

  getSuppliers() {
    return this.http.get<SupplierModel[]>(`${this.apiUrl}/api/Supplier/GetSuppliers`);
  }

  create(supplier: AddSupplierModel): Observable<AddSupplierModel> {
    return this.http.post<AddSupplierModel>(`${this.apiUrl}/api/Supplier/AddSupplier`, supplier);
  }

  getSupplier(id: number) {
    return this.http.get<SupplierModel>(`${this.apiUrl}/api/Supplier/GetSupplier/${id}`);
  }

  update(supplier: AddSupplierModel): Observable<AddSupplierModel> {
    return this.http.put<AddSupplierModel>(`${this.apiUrl}/api/Supplier/UpdateSupplier`, supplier);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/api/Supplier/DeleteSupplier/${id}`);
  }
}
