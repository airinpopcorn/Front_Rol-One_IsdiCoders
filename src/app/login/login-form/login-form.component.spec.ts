import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { iUser } from 'src/app/models/user';
import { ApiUser } from 'src/app/services/user.api';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let mockInitialState = {
    users: {
      user: {
        name: '',
        email: '',
        password: '',
        role: '',
        characters: [],
        games: [],
      },
      token: '',
    },
    characters: {
      characters: [],
    },
    games: {
      games: [],
    },
  };
  let initialState = mockInitialState;
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [LoginFormComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When calling handleSubmit method', () => {
    it('Should called apiUser.loginUser', () => {
      spyOn(component.apiUser, 'loginUser').and.returnValue(
        of({ user: {} as iUser, token: 'token' })
      );
      // spyOn(component.store, 'dispatch');
      // spyOn(component.localStorage, 'saveToken');
      // spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.handleSubmit();
      expect(component.apiUser.loginUser).toHaveBeenCalled();
    });
  });
});
