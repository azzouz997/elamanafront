import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: string;
  currentUserName: string;

    constructor(
    ) {
        // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.currentUser = localStorage.getItem('token');
        this.currentUserName = localStorage.getItem('login');
    }

}
