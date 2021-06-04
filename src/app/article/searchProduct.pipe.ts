
import { ProductModel } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
})
export class ProductPipe implements PipeTransform {

  constructor() { }
  transform(products: ProductModel[], searchText: string): ProductModel[] {
    if (!products || !searchText) {
      return products;
    }
    const searchTextToLowerCase: string = searchText.toLowerCase();
    return products.filter(product => {
      const res =
        product.productCode.toLowerCase().includes(searchTextToLowerCase) ||
        product.productName.toLowerCase().includes(searchTextToLowerCase) ||
        product.supplier.name.toLowerCase().includes(searchTextToLowerCase);
      return res;
    });
  }
}
