import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { CoreModule } from '../core.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
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
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, CoreModule],
      declarations: [HeaderComponent],
      providers: [provideMockStore({ initialState }), LocalStorageService],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When calling goHome method', () => {
    it('Should router.navigate be called', () => {
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.goHome();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
  describe('When calling logout method', () => {
    it('Should call localStorage.clearToken, sotore.dispatch and router.navigate', () => {
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.logout();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
});
