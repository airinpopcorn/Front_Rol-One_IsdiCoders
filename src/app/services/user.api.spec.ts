import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { iUser, iUserState } from '../models/user';
import { userReducer } from '../state/user.reducer/user.reducer';
import { ApiUser } from './user.api';

describe('ApiUser', () => {
  const mockUser: iUserState = {
    user: {
      _id: '1726',
      name: 'test',
      email: 'test@test.com',
      password: '12345',
      role: 'master',
      characters: [],
      games: [],
    },
    token: '1f1f1f1f',
  };

  let service: ApiUser;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiUser);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When calling service.getOneUser', () => {
    it('Should be called httpClient', () => {
      service.getOneUser('id').subscribe((resp) => {
        expect(resp).not.toBeNull();
        expect(JSON.stringify(resp)).toBe(JSON.stringify(mockUser));
      });
    });
  });

  describe('When calling service.create', () => {
    it('Should be called httpClient', () => {
      service.addUser(mockUser.user).subscribe((resp) => {
        expect(resp).not.toBeNull();
        expect(JSON.stringify(resp)).toBe(JSON.stringify(mockUser));
      });
      const req = httpTestingController.expectOne({
        url: 'http://localhost:9500/user/',
        method: 'POST',
      });
      expect(req.request.url).toBe('http://localhost:9500/user/');
      req.flush(mockUser);
    });
  });

  describe('When calling service.loginUser with loginData', () => {
    it('Should be called httpClient', () => {
      service
        .loginUser({
          email: mockUser.user.email,
          password: mockUser.user.password,
        })
        .subscribe((resp) => {
          expect(resp).not.toBeNull();
          expect(JSON.stringify(resp)).toBe(JSON.stringify(mockUser));
        });
    });
  });
  describe('When calling service.loginUser with token', () => {
    it('Should be called httpClient', () => {
      service.loginUser(undefined, mockUser.token).subscribe((resp) => {
        expect(resp).not.toBeNull();
        expect(JSON.stringify(resp)).toBe(JSON.stringify(mockUser));
      });
    });
  });
  describe('When calling service.loginUser without arguments', () => {
    it('Should be called httpClient', () => {
      const result = service.loginUser();
      expect(result).toEqual({} as Observable<{ user: iUser; token: string }>);
    });
  });
  describe('When calling service.updateUser', () => {
    it('Should be called httpClient', () => {
      service.updateUser(mockUser.user).subscribe((resp) => {
        expect(resp).not.toBeNull();
        expect(JSON.stringify(resp)).toBe(JSON.stringify(mockUser.user));
      });
    });
  });
  describe('When calling service.deleteUser', () => {
    it('Should be called httpClient', () => {
      service.deleteUser('id').subscribe((resp) => {
        expect(resp).not.toBeNull();
        expect(JSON.stringify(resp)).toBe(JSON.stringify(mockUser.user));
      });
    });
  });
});
