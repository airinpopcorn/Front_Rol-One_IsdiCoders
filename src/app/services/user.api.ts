import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ApiGame {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:9500/user/';
  }

  getOneUser(id: iUser['id']): Observable<Array<iUser>> {
    return this.http.get(this.apiUrl + id) as Observable<Array<iUser>>;
  }

  addUser(character: iUser): Observable<iUser> {
    return this.http.post(this.apiUrl, character) as Observable<iUser>;
  }

  loginUser(
    email: iUser['email'],
    password: iUser['password']
  ): Observable<{ user: iUser; token: string }> {
    return this.http.post(this.apiUrl + 'login', {
      email,
      password,
    }) as Observable<{ user: iUser; token: string }>;
  }

  updateUser(character: iUser): Observable<iUser> {
    return this.http.patch(
      this.apiUrl + character.id,
      character
    ) as Observable<iUser>;
  }

  deleteUser(id: iUser['id']): Observable<iUser> {
    return this.http.delete(this.apiUrl + id) as Observable<iUser>;
  }
}
