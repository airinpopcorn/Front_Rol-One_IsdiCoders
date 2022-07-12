import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iUserState } from 'src/app/models/user';
import { AppState } from 'src/app/state/app.state';
import { iMenuOptions } from 'src/interfaces/menu-options';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  token!: string;
  constructor(public router: Router, public store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.token = data.token;
        },
      });
  }

  homePage() {
    this.router.navigate(['home']);
  }
  playersPage() {
    if (this.token) {
      this.router.navigate(['players']);
    } else {
      this.router.navigate(['login']);
    }
  }
  profilePage() {
    if (this.token) {
      this.router.navigate(['profile']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
