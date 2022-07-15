import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When calling homePage method', () => {
    it('Should navigate to page home', () => {
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.homePage();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
  describe('When calling playersPage method', () => {
    it('Should navigate to page players if token exists', () => {
      component.token = 'token';
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.playersPage();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
  describe('When calling playersPage method', () => {
    it('Should navigate to page players if token not exist', () => {
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.playersPage();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
  describe('When calling profilePage method', () => {
    it('Should navigate to page profile if token exists', () => {
      component.token = 'token';
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.profilePage();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
  describe('When calling playersPage method', () => {
    it('Should navigate to page players if token not exist', () => {
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.profilePage();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
});
