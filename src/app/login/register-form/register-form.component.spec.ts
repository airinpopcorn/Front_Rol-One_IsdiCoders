import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { iUser } from 'src/app/models/user';
import Swal from 'sweetalert2';

import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
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
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [RegisterFormComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When calling handleSubmit method with correct data', () => {
    it('Should be called apiUser.addUser', () => {
      component.dataUser = {
        name: '',
        email: '',
        password: '',
        role: 'master',
      };
      spyOn(component.apiUser, 'addUser').and.returnValue(
        of({ user: {} as iUser, token: 'token' })
      );
      spyOn(component.route, 'navigate');
      fixture.detectChanges();
      component.handleSubmit();
      expect(component.apiUser.addUser).toHaveBeenCalled();
    });
  });
  describe('When calling handleSubmit method with incorrect data', () => {
    it('Should be called apiUser.addUser and throw and error', () => {
      spyOn(component.apiUser, 'addUser').and.returnValue(
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
