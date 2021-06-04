import { first } from 'rxjs/operators';
import { AddUserModel, UserModel } from './../models/user';
import { UserService } from './../services/user.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter',
})
export class UserPipe implements PipeTransform {

  AllUsers: UserModel[] = [];
  constructor(protected userService: UserService) {}

  transform(users: UserModel[], searchText: string): UserModel[] {
    if (!users || !searchText) {
      this.userService.getUsers()
      .pipe(first())
      .subscribe(res => {
        this.AllUsers = res;
      });
      return users;
    }
    const searchTextToLowerCase: string = searchText.toLowerCase();
    return this.AllUsers.filter(user => {
      const res =
        user.name.toLowerCase().includes(searchTextToLowerCase);
      return res;
    });
  }
}
