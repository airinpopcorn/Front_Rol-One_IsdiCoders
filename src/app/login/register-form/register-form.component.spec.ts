import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

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
});
