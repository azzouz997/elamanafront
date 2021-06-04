import { OrderModel } from './../models/order';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderFilter',
})
export class OrderPipe implements PipeTransform {

  constructor() { }
  transform(orders: OrderModel[], searchText: string): OrderModel[] {
    if (!orders || !searchText) {
      return orders;
    }
    const searchTextToLowerCase: string = searchText.toLowerCase();
    return orders.filter(model => {
      const res =
        model.orderNumber.toString().includes(searchTextToLowerCase);
      return res;
    });
  }
}
