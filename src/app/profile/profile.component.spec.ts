import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { iCharacter } from '../models/character';
import { iGameModel } from '../models/game';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  const mockCharacter: iCharacter = {
    name: '',
    life: '',
    strength: '',
    intelligence: '',
    constitution: '',
    idGame: '1',
  };
  const mockGame: iGameModel = {
    _id: '1',
    title: '',
    creator: '',
    description: '',
    image: '',
    characters: [],
    template: {},
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
      characters: [],
    },
    games: {
      games: [mockGame],
    },
  };
  let initialState = mockInitialState;
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProfileComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
