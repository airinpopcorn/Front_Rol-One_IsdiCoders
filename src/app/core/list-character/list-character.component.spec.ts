import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharacterComponent } from './list-character.component';

describe('ListCharacterComponent', () => {
  let component: ListCharacterComponent;
  let fixture: ComponentFixture<ListCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
