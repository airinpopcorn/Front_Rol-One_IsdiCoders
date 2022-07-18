import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { iGameModel } from '../models/game';
import { CharacterInGameComponent } from './character-in-game.component';

describe('CharacterInGameComponent', () => {
  const mockGame: iGameModel = {
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
        characters: [],
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
  let component: CharacterInGameComponent;
  let fixture: ComponentFixture<CharacterInGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterInGameComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        CharacterInGameComponent,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: '1',
              }),
            },
          },
        },
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterInGameComponent);
    component = fixture.componentInstance;
    component.charactersGame = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When character-in-game page is loaded', () => {
    it('Should called getOneGame method from apiGame', () => {
      const fixture = TestBed.createComponent(CharacterInGameComponent);
      const component = fixture.componentInstance;
      spyOn(component.apiGame, 'getOneGame').and.returnValue(of(mockGame));
      fixture.detectChanges();
      expect(component.apiGame.getOneGame).toHaveBeenCalled();
    });
  });
});
