import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { iUser } from 'src/app/models/user';
import { ApiUser } from 'src/app/services/user.api';
import { AppState } from 'src/app/state/app.state';
import * as ac from '../../state/user.reducer/user.action.creator';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user!: iUser;
  constructor(
    public router: Router,
    public apiUser: ApiUser,
    public store: Store<AppState>,
    public localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {}

  handleEdit() {
    this.router.navigate(['edit-profile']);
  }
  handleDelete() {
    this.apiUser.deleteUser(this.user._id).subscribe({
      next: (data) => {
        this.localStorage.clearToken();
        this.store.dispatch(ac.logoutUser());

        Swal.fire({
          icon: 'success',
          title: 'Yuhuuu...',
          text: 'You have delete your account',
        });
        this.router.navigate(['home']);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Can`t delete account',
        });
      },
    });
  }
}
