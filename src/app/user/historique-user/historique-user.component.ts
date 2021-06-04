import { first } from 'rxjs/operators';
import { UserModel, PasswordHistoryModel } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historique-user',
  templateUrl: './historique-user.component.html',
  styleUrls: ['./historique-user.component.css']
})
export class HistoriqueUserComponent implements OnInit {

  user: UserModel;
  history: PasswordHistoryModel[];

  constructor(
    protected activatedRoute: ActivatedRoute,
    private userservice: UserService
  ) { }

  ngOnInit() {
    this.userservice.getUser(this.activatedRoute.snapshot.params.id).pipe(first()).subscribe(user => {
      this.user = user;
      this.history = user.passwordsHistory;
    });
  }

}
