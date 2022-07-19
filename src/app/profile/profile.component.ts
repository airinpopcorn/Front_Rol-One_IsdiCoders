import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iUser } from '../models/user';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-profile',
  template: '<app-user [user]="user"></app-user>',
  styleUrls: [],
})
export class ProfileComponent implements OnInit {
  user!: iUser;
  token!: string;
  constructor(public store: Store<AppState>, public router: Router) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.user = data.user;
          this.token = data.token;
        },
      });
  }
}
