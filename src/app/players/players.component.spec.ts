import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { iCharacter } from '../models/character';
import { iGameModel } from '../models/game';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
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
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PlayersComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When players page is loaded', () => {
    it('Should be called users and games state', () => {});
  });
});
