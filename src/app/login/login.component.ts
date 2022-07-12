import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiUser } from '../services/user.api';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  viewRegister!: boolean;
  constructor(
    public store: Store<AppState>,
    public router: Router,
    public apiUser: ApiUser
  ) {}

  ngOnInit(): void {}

  toggleRegister() {}
}
