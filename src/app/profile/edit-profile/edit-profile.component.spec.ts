import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { iUser } from 'src/app/models/user';
import Swal from 'sweetalert2';

import { EditProfileComponent } from './edit-profile.component';

describe('EditProfileComponent', () => {
  const mockUser: iUser = {
    name: '',
    email: '',
    password: '',
    role: '',
    characters: [],
  };
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
  let component: EditProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProfileComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(EditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When calling handleEdit method', () => {
    it('Should called apiUser.updateUser and show a Swal alert', () => {
      component.updateUser = {
        name: '',
        email: '',
        password: '',
        role: 'master',
        characters: [],
      };
      component.dataUser._id = '1';
      spyOn(component.apiUser, 'updateUser').and.returnValue(of(mockUser));
      spyOn(component.store, 'dispatch');
      spyOn(Swal, 'fire');
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.handleEdit();
      expect(component.apiUser.updateUser).toHaveBeenCalled();
    });
  });
  describe('When calling handleEdit method with wrong data', () => {
    it('Should called apiUser.updateUser and throw a error', () => {
      spyOn(component.apiUser, 'updateUser').and.returnValue(
        new Observable(() => {
          throw new Error();
        })
      );
      spyOn(Swal, 'fire');
      fixture.detectChanges();
      component.handleEdit();
      expect(Swal.fire).toHaveBeenCalled();
    });
  });
});
