import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iCharacter } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class ApiGame {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:9500/character/';
  }

  getCharacters(): Observable<Array<iCharacter>> {
    return this.http.get(this.apiUrl) as Observable<Array<iCharacter>>;
  }

  getOneCharacter(id: iCharacter['id']): Observable<Array<iCharacter>> {
    return this.http.get(this.apiUrl + id) as Observable<Array<iCharacter>>;
  }

  addCharacter(character: iCharacter): Observable<iCharacter> {
    return this.http.post(this.apiUrl, character) as Observable<iCharacter>;
  }

  updateCharacter(character: iCharacter): Observable<iCharacter> {
    return this.http.patch(
      this.apiUrl + character.id,
      character
    ) as Observable<iCharacter>;
  }

  deleteCharacter(id: iCharacter['id']): Observable<iCharacter> {
    return this.http.delete(this.apiUrl + id) as Observable<iCharacter>;
  }
}
