import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { LocalStorageService } from 'src/app/services/localStorage.service';
import { AppState } from 'src/app/state/app.state';
import { logoutUser } from 'src/app/state/user.reducer/user.action.creator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  token!: string;
  constructor(
    public router: Router,
    public localStorage: LocalStorageService,
    public store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.token = data.token;
        },
      });
  }

  goHome() {
    this.router.navigate(['home']);
  }
  logout() {
    this.localStorage.clearToken();
    this.store.dispatch(logoutUser());
    this.router.navigate(['home']);
  }
}
