import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './localStorage.service';

describe('Given LocalStorageService', () => {
  let service: LocalStorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('When calling service.getToken', () => {
    it('Should be called localStorage.getItem', () => {
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify('token'));

      service.getToken();
      expect(localStorage.getItem).toHaveBeenCalled;
    });
  });
  describe('When calling service.saveToken', () => {
    it('Should be called localStorage.setItem', () => {
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify('token'));
      spyOn(localStorage, 'setItem');

      service.saveToken('token');
      expect(localStorage.getItem).toHaveBeenCalled;
      expect(localStorage.setItem).not.toHaveBeenCalled;
    });
  });
  describe('When calling service.clearToken', () => {
    it('Should be called localStorage.removeItem', () => {
      spyOn(localStorage, 'removeItem');

      service.clearToken();
      expect(localStorage.removeItem).toHaveBeenCalled;
    });
  });
});
