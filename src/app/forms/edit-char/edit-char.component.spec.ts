import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCharComponent } from './edit-char.component';

describe('EditCharComponent', () => {
  let component: EditCharComponent;
  let fixture: ComponentFixture<EditCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
