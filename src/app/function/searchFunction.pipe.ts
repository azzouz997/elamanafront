import { FunctionModel } from './../models/function';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'functionFilter',
})
export class FunctionPipe implements PipeTransform {

  constructor() { }
  transform(functions: FunctionModel[], searchText: string): FunctionModel[] {
    if (!functions || !searchText) {
      return functions;
    }
    const searchTextToLowerCase: string = searchText.toLowerCase();
    return functions.filter(model => {
      const res =
        model.name.toLowerCase().includes(searchTextToLowerCase);
      return res;
    });
  }
}
