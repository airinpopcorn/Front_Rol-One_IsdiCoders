import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iGameModel } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class ApiGame {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:9500/game/';
  }

  getGames(): Observable<Array<iGameModel>> {
    return this.http.get(this.apiUrl) as Observable<Array<iGameModel>>;
  }

  getOneGame(id: iGameModel['_id']): Observable<Array<iGameModel>> {
    return this.http.get(this.apiUrl + id) as Observable<Array<iGameModel>>;
  }
}
