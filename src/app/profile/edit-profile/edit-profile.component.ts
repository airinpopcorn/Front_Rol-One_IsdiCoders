import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iCharacter } from 'src/app/models/character';
import { iUser } from 'src/app/models/user';
import { ApiUser } from 'src/app/services/user.api';
import { AppState } from 'src/app/state/app.state';
import { updateUser } from 'src/app/state/user.reducer/user.action.creator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  token!: string;
  newUpdateUser!: iUser;
  dataUser!: iUser;
  updateUser!: {
    name: string;
    email: string;
    password: string;
    role: string;
    characters: Array<iCharacter>;
  };
  constructor(
    public store: Store<AppState>,
    public apiUser: ApiUser,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.updateUser = {
      name: '',
      email: '',
      password: '',
      role: 'master',
      characters: [],
    };
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.dataUser = data.user;
          this.token = data.token;
        },
      });
  }
  handleEdit() {
    this.apiUser.updateUser(this.dataUser._id, this.newUpdateUser).subscribe({
      next: (data) => {
        console.log(data);
        this.store.dispatch(
          updateUser({
            data: {
              user: this.updateUser as iUser,
              token: this.token,
            },
          })
        );
        Swal.fire({
          icon: 'success',
          title: 'Yuhuuu...',
          text: 'You edit your profile correctly',
        });
        this.router.navigate(['profile']);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops...',
          text: 'Something went wrong',
        });
      },
    });
  }
}
