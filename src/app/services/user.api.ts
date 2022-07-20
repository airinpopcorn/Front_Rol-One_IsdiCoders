import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iUser } from '../models/user';
import { LocalStorageService } from './localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class ApiUser {
  apiUrl: string;
  token!: string;
  constructor(
    public http: HttpClient,
    public localStorage: LocalStorageService
  ) {
    this.apiUrl = 'http://localhost:9500/user/';
    this.token = localStorage.getToken() as string;
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
    const httpOptions = {
      method: 'PATCH',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      }),
    };
    return this.http.patch(
      this.apiUrl + user._id,
      user,
      httpOptions
    ) as Observable<iUser>;
  }

  deleteUser(id: iUser['_id']): Observable<iUser> {
    const httpOptions = {
      method: 'DELETE',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      }),
    };
    return this.http.delete(this.apiUrl + id, httpOptions) as Observable<iUser>;
  }
}
