import { first } from 'rxjs/operators';
import { RoleService } from './../services/role.service';
import { RoleModel } from './../models/role';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleFilter',
})
export class RolePipe implements PipeTransform {

  AllRoles: RoleModel[] = [];
  constructor(protected roleService: RoleService) {}

  transform(roles: RoleModel[], searchText: string): RoleModel[] {
    if (!roles || !searchText) {
      this.roleService.getRoles()
        .pipe(first())
        .subscribe(res => {
          this.AllRoles = res;
        });
      return roles;
    }
    const searchTextToLowerCase: string = searchText.toLowerCase();
    return roles.filter(role => {
      const res =
        role.name.toLowerCase().includes(searchTextToLowerCase);
      return res;
    });
  }
}
