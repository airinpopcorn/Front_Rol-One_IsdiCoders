import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

describe('AppComponent', () => {
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('When loading the app', () => {
    it('Should fetch games data from the apiGame', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;
      spyOn(component.game, 'getGames').and.returnValue(of([]));
      spyOn(component.apiUser, 'loginUser').and.returnValue(
        of({
          user: { name: '', email: '', password: '', role: '' },
          token: 'token',
        })
      );
      spyOn(component.store, 'dispatch');

      fixture.detectChanges();

      expect(component.store.dispatch).toHaveBeenCalled();
    });
  });
});
