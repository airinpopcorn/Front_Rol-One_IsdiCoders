import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { iGameModel } from 'src/app/models/game';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [GameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    component.game = {
      image: '',
      title: '',
      creator: '',
      description: '',
      characters: [],
      template: {},
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When calling nextPage method', () => {
    it('Should be navigate to detail page', () => {
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.nextPage();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
});
