import { PropositionModel } from './../models/proposition';
import { Pipe, PipeTransform } from '@angular/core';
import { SupplierService } from '../services/supplier.service';
import { first } from 'rxjs/operators';

@Pipe({
  name: 'propositionFilter',
})
export class PropositionPipe implements PipeTransform {

  constructor(
    private supplierService: SupplierService
  ) { }
  transform(propositions: PropositionModel[], searchText: string): PropositionModel[] {
    if (!propositions || !searchText) {
      propositions.forEach(p => {
        this.supplierService.getSupplier(p.supplierId).pipe(first()).subscribe(supplier => {
          p.supplierName = supplier.name;
          p.supplierCode = supplier.supplierCode;
        });
      });
      return propositions;
    }
    const searchTextToLowerCase: string = searchText.toLowerCase();
    return propositions.filter(model => {
      const res =
        model.propositionNumber.toString().includes(searchText) ||
        model.supplierName.toLowerCase().includes(searchTextToLowerCase) ||
        model.supplierCode.toLowerCase().includes(searchTextToLowerCase) ||
        model.endDate.toLowerCase().includes(searchTextToLowerCase) ||
        model.startDate.toLowerCase().includes(searchTextToLowerCase);
      return res;
    });
  }
}
