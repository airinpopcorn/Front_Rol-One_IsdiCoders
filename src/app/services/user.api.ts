import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ApiUser {
  apiUrl: string;
  constructor(public http: HttpClient) {
    this.apiUrl = 'http://localhost:9500/user/';
  }

  getOneUser(id: iUser['_id']): Observable<iUser> {
    return this.http.get(this.apiUrl + id) as Observable<iUser>;
  }

  addUser(user: iUser): Observable<{
    user: iUser;
  }> {
    return this.http.post(this.apiUrl, user) as Observable<{
      user: iUser;
      token: string;
    }>;
  }

  loginUser(
    loginData?: {
      email: iUser['email'];
      password: iUser['password'];
    },
    token?: string
  ): Observable<{ user: iUser; token: string }> {
    if (loginData) {
      return this.http.post(this.apiUrl + 'login', loginData) as Observable<{
        user: iUser;
        token: string;
      }>;
    } else if (token) {
      return this.http.post(
        this.apiUrl + 'login',
        {},
        { headers: { Authorization: 'Bearer ' + token } }
      ) as Observable<{ user: iUser; token: string }>;
    } else {
      return {} as Observable<{
        user: iUser;
        token: string;
      }>;
    }
  }

  updateUser(user: iUser): Observable<iUser> {
    return this.http.patch(this.apiUrl + user._id, user) as Observable<iUser>;
  }

  deleteUser(id: iUser['_id']): Observable<iUser> {
    return this.http.delete(this.apiUrl + id) as Observable<iUser>;
  }
}
