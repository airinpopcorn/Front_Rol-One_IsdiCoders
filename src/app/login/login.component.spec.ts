import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from '../core/core.module';
import { iUser } from '../models/user';
import { LocalStorageService } from '../services/localStorage.service';
import { ApiUser } from '../services/user.api';
import { LoginFormComponent } from './login-form/login-form.component';

import { LoginComponent } from './login.component';
import { RegisterFormComponent } from './register-form/register-form.component';

describe('LoginComponent', () => {
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
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        CoreModule,
      ],
      declarations: [LoginComponent, LoginFormComponent, RegisterFormComponent],
      providers: [
        provideMockStore({ initialState }),
        LocalStorageService,
        ApiUser,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When login page is loaded', () => {
    it('should be call store.dispatch, saveToken and navigate', () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const component = fixture.componentInstance;
      spyOn(component.localStorage, 'getToken').and.returnValue('token');
      spyOn(component.apiUser, 'loginUser').and.returnValue(
        of({ user: {} as iUser, token: 'token' })
      );
      spyOn(component.store, 'dispatch');
      fixture.detectChanges();

      expect(component.store.dispatch).toHaveBeenCalled();
    });
  });
  describe('When calling toggleRegister method', () => {
    it('Should change viewRegister value', () => {
      component.viewRegister = false;
      component.toggleRegister();
      expect(component.viewRegister).toBeTrue();
    });
  });
});
