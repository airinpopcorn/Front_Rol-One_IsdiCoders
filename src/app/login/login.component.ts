import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../services/localStorage.service';
import { ApiUser } from '../services/user.api';
import { AppState } from '../state/app.state';
import { loadUser } from '../state/user.reducer/user.action.creator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  viewRegister!: boolean;
  token!: string;
  constructor(
    public store: Store<AppState>,
    public router: Router,
    public apiUser: ApiUser,
    public localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.token = this.localStorage.getToken() as string;

    if (this.token) {
      this.apiUser.loginUser(undefined, this.token).subscribe({
        next: (data) => {
          if (data.token) {
            this.store.dispatch(
              loadUser({ user: data.user, token: data.token })
            );
            this.localStorage.saveToken(data.token);
            this.router.navigate(['home']);
          }
        },
      });
    }
    this.viewRegister = false;
  }

  toggleRegister() {
    this.viewRegister = !this.viewRegister;
  }
}
