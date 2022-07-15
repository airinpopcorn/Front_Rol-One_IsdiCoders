import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { initialState } from 'src/app/state/character.reducer/character.reducer';
import { iGameModel } from 'src/app/models/game';

import { GameDetailComponent } from './game-detail.component';
import Swal from 'sweetalert2';

describe('GameDetailComponent', () => {
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
          _id: '',
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
  let component: GameDetailComponent;
  let fixture: ComponentFixture<GameDetailComponent>;
  let initialState = mockInitialState;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [GameDetailComponent],
      providers: [
        GameDetailComponent,
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

    fixture = TestBed.createComponent(GameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When loaded gameComponent', () => {
    it('Should called apiGame.getOneGame', () => {
      spyOn(component.apiGame, 'getOneGame');
      fixture.detectChanges();
      expect(component.apiGame.getOneGame).toHaveBeenCalled();
    });
  });
  describe('When goCreateCharacter method is called', () => {
    it('Should navigate to create-character page if token exists', () => {
      component.token = 'token';
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.goCreateCharacter();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
  describe('When goCreateCharacter method is called', () => {
    it('Should show a sweet alert and navigate to login page if token not exist', () => {
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.goCreateCharacter();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
});
