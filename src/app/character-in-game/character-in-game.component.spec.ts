import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInGameComponent } from './character-in-game.component';

describe('CharacterInGameComponent', () => {
  let component: CharacterInGameComponent;
  let fixture: ComponentFixture<CharacterInGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterInGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterInGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
