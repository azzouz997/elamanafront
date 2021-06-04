import { AddProductModel, ProductModel } from './../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'https://localhost:44332';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<ProductModel[]>(`${this.apiUrl}/api/Product/GetProducts`);
  }

  create(product: AddProductModel): Observable<AddProductModel> {
    return this.http.post<AddProductModel>(`${this.apiUrl}/api/Product/AddProduct`, product);
  }

  getProduct(id: number) {
    return this.http.get<ProductModel>(`${this.apiUrl}/api/Product/GetProduct/${id}`);
  }

  update(product: AddProductModel): Observable<AddProductModel> {
    return this.http.put<AddProductModel>(`${this.apiUrl}/api/Product/UpdateProduct`, product);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/api/Product/DeleteProduct/${id}`);
  }

  getProductBySupplier(name: string) {
    return this.http.get<ProductModel[]>(`${this.apiUrl}/api/Product/SearchProductBySupplier/${name}`);
  }
}
