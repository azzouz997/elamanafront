import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUserName: string;

  constructor(
    private authenticationService: AuthenticationService
  ) { }
  
  ngOnInit(): void {
    this.currentUserName = localStorage.getItem('login');
  }

  logout() {
    this.authenticationService.logout();
    location.reload();
  }

}
