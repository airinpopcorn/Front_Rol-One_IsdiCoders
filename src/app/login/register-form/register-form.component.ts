import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { ApiUser } from 'src/app/services/user.api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  dataUser!: { name: string; email: string; password: string; role: string };
  constructor(
    public store: Store,
    public apiUser: ApiUser,
    public route: Router
  ) {}

  ngOnInit(): void {
    this.dataUser = { name: '', email: '', password: '', role: 'master' };
  }
  handleClick() {
    this.apiUser.addUser(this.dataUser).subscribe({
      next: (data) => {
        Swal.fire({
          icon: 'success',
          title: ':)',
          text: 'Registrado correctamente',
        });
        this.route.navigate(['login']);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: ':(',
          text: 'Error in register',
        });
      },
    });
  }
}
