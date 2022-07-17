import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iCharacter } from '../models/character';
import { LocalStorageService } from './localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class ApiCharacter {
  apiUrl: string;
  token!: string;
  constructor(
    public http: HttpClient,
    public localStorage: LocalStorageService
  ) {
    this.apiUrl = 'http://localhost:9500/character/';
    this.token = localStorage.getToken() as string;
  }

  getCharacters(): Observable<Array<iCharacter>> {
    return this.http.get(this.apiUrl) as Observable<Array<iCharacter>>;
  }

  getOneCharacter(id: iCharacter['_id']): Observable<iCharacter> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      }),
    };

    return this.http.get(
      this.apiUrl + id,
      httpOptions
    ) as unknown as Observable<iCharacter>;
  }

  addCharacter(
    character: iCharacter,
    authToken: string
  ): Observable<iCharacter> {
    return this.http.post(this.apiUrl, character, {
      headers: { Authorization: 'Bearer ' + authToken },
    }) as Observable<iCharacter>;
  }

  updateCharacter(character: iCharacter): Observable<iCharacter> {
    return this.http.patch(
      this.apiUrl + character._id,
      character
    ) as Observable<iCharacter>;
  }

  deleteCharacter(id: iCharacter['_id']): Observable<iCharacter> {
    const httpOptions = {
      method: 'DELETE',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      }),
    };
    return this.http.delete(
      this.apiUrl + id,
      httpOptions
    ) as Observable<iCharacter>;
  }
}
