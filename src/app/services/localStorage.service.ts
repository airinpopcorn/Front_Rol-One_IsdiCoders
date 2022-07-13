import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getToken(): string | null {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      return userToken;
    }
    return null;
  }

  saveToken(data: string) {
    return localStorage.setItem('token', data);
  }

  clearToken() {
    localStorage.removeItem('token');
  }
}
