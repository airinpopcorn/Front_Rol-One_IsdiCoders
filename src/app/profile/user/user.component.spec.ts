import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { iUser } from 'src/app/models/user';
import Swal from 'sweetalert2';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  const mockUser: iUser = {
    name: '',
    email: '',
    password: '',
    role: '',
    characters: [],
  };
  const mockCharacter = {
    _id: '1',
    name: '',
    life: '',
    strength: '',
    intelligence: '',
    constitution: '',
    image: '',
  };
  let mockInitialState = {
    users: {
      user: {
        name: '',
        email: '',
        password: '',
        role: '',
        characters: [mockCharacter],
        games: [],
      },
      token: '',
    },
    characters: {
      characters: [
        {
          _id: '1',
          name: '',
          life: '',
          strength: '',
          intelligence: '',
          constitution: '',
        },
      ],
    },
    games: {
      games: [
        {
          _id: '1',
          title: '',
          creator: '',
          description: '',
          image: '',
          characters: [],
          template: {},
        },
      ],
    },
  };
  let initialState = mockInitialState;
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [UserComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When calling handleEdit method', () => {
    it('Should be called router.navigate', () => {
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.handleEdit();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
  describe('When calling handleDelete method', () => {
    it('Should be called apiUser.deleteUser', () => {
      component.user = mockUser;
      spyOn(component.apiUser, 'deleteUser').and.returnValue(of(mockUser));
      spyOn(component.localStorage, 'clearToken');
      spyOn(component.store, 'dispatch');
      spyOn(Swal, 'fire');
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.handleDelete();
      expect(component.apiUser.deleteUser).toHaveBeenCalled();
    });
  });
  describe('When calling handleDelete method and user don`t exist', () => {
    it('Should throw an error', () => {
      component.user = mockUser;
      spyOn(component.apiUser, 'deleteUser').and.returnValue(
        new Observable(() => {
          throw new Error();
        })
      );
      // spyOn(component.localStorage, 'clearToken');
      // spyOn(component.store, 'dispatch');
      spyOn(Swal, 'fire');

      fixture.detectChanges();
      component.handleDelete();
      expect(Swal.fire).toHaveBeenCalled();
    });
  });
});
