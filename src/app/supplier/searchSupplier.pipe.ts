import { Pipe, PipeTransform } from '@angular/core';
import { SupplierModel } from '../models/supplier';

@Pipe({
  name: 'supplierFilter',
})
export class SupplierPipe implements PipeTransform {

  constructor() { }
  transform(suppliers: SupplierModel[], searchText: string): SupplierModel[] {
    if (!suppliers || !searchText) {
      return suppliers;
    }
    const searchTextToLowerCase: string = searchText.toLowerCase();
    return suppliers.filter(model => {
      const res =
        model.name.toLowerCase().includes(searchTextToLowerCase) ||
        model.supplierCode.toLowerCase().includes(searchTextToLowerCase);
      return res;
    });
  }
}
