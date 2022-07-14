import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iCharacter } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class ApiCharacter {
  apiUrl: string;
  constructor(public http: HttpClient) {
    this.apiUrl = 'http://localhost:9500/character/';
  }

  getCharacters(): Observable<Array<iCharacter>> {
    return this.http.get(this.apiUrl) as Observable<Array<iCharacter>>;
  }

  getOneCharacter(id: iCharacter['_id']): Observable<Array<iCharacter>> {
    return this.http.get(this.apiUrl + id) as Observable<Array<iCharacter>>;
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
    return this.http.delete(this.apiUrl + id) as Observable<iCharacter>;
  }
}
