import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iUserState } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { ApiUser } from 'src/app/services/user.api';
import { loadUser } from 'src/app/state/user.reducer/user.action.creator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  dataUser!: { email: string; password: string };
  constructor(
    public store: Store<{ user: iUserState }>,
    public apiUser: ApiUser,
    public router: Router,
    public localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.dataUser = { email: '', password: '' };
  }

  handleSubmit() {
    this.apiUser.loginUser(this.dataUser).subscribe({
      next: (data) => {
        this.store.dispatch(loadUser(data));
        this.localStorage.saveToken(data.token);
        this.router.navigate(['home']);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email o Password incorrect!',
        });
      },
    });
  }
}
