import { OrderModel, AddOrderModel } from './../models/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private apiUrl = 'https://localhost:44332';

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<OrderModel[]>(`${this.apiUrl}/api/Order/GetOrders`);
  }

  create(order: AddOrderModel): Observable<AddOrderModel> {
    return this.http.post<AddOrderModel>(`${this.apiUrl}/api/Order/AddOrder`, order);
  }

  getOrder(id: number) {
    return this.http.get<OrderModel>(`${this.apiUrl}/api/Order/GetOrder/${id}`);
  }

  update(order: OrderModel): Observable<OrderModel> {
    return this.http.put<OrderModel>(`${this.apiUrl}/api/Order/UpdateOrder`, order);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/api/Order/DeleteOrder/${id}`);
  }

  getOrdersByCurrentUser(id: number) {
    return this.http.get<OrderModel[]>(`${this.apiUrl}/api/Order/GetOrdersByCreator/${id}`);
  }

  AddOrderWithBonCommande(order: AddOrderModel, file: any): Observable<any> {
    const orderModel = JSON.stringify(order);
    const formData = new FormData();
    formData.append('data', orderModel);
    if (file) {
      formData.append('file', file, file.name);
    }
    return this.http.post(`${this.apiUrl}/api/Order/AddOrder`, formData);
  }

  getFile(id: string) {
    return this.http.get(`${this.apiUrl}/api/Order/GetOrderReceipt/${id}`, { responseType: 'blob' });
  }

}
