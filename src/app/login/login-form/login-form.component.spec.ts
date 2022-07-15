import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { iUser } from 'src/app/models/user';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';
import { CoreModule } from 'src/app/core/core.module';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs';

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
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        CoreModule,
      ],
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
  describe('When calling handleSubmit method and geting a valid token', () => {
    it('Should called apiUser.loginUser', () => {
      component.dataUser = { email: '', password: '' };
      spyOn(component.apiUser, 'loginUser').and.returnValue(
        of({ user: {} as iUser, token: 'token' })
      );
      spyOn(component.store, 'dispatch');
      spyOn(component.localStorage, 'saveToken');
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.handleSubmit();
      expect(component.apiUser.loginUser).toHaveBeenCalled();
      expect(component.store.dispatch).toHaveBeenCalled();
      expect(component.localStorage.saveToken).toHaveBeenCalled();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
  describe('When calling handleSubmit method with a none valid token', () => {
    it('Should fire sweet alert', () => {
      spyOn(component.apiUser, 'loginUser').and.returnValue(
        new Observable(() => {
          throw new Error();
        })
      );
      spyOn(Swal, 'fire');
      fixture.detectChanges();
      component.handleSubmit();
      expect(Swal.fire).toHaveBeenCalled();
    });
  });
});
