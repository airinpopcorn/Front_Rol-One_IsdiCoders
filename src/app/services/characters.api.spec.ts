import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { iCharacter, iCharacterState } from '../models/character';
import { ApiCharacter } from './characters.api';

describe('ApiCharacter', () => {
  const mockCharacter: iCharacterState = {
    characters: [
      {
        _id: '123',
        name: 'test',
        life: '14',
        strength: '4',
        intelligence: '6',
        constitution: '5',
      },
    ],
  };
  let service: ApiCharacter;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiCharacter);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When calling service.getCharacters', () => {
    it('Should be called httpClient', () => {
      service.getCharacters().subscribe((resp) => {
        expect(resp).not.toBeNull();
        expect(JSON.stringify(resp)).toBe(JSON.stringify(mockCharacter));
      });
    });
  });
  describe('When calling service.getOneCharacter', () => {
    it('Should be called httpClient', () => {
      service.getOneCharacter('123').subscribe((resp) => {
        expect(resp).not.toBeNull();
        expect(JSON.stringify(resp)).toBe(
          JSON.stringify(mockCharacter.characters[0])
        );
      });
    });
  });
  describe('When calling service.addCharacter', () => {
    it('Should be called httpClient', () => {
      service
        .addCharacter(mockCharacter.characters[0], '1f1f1f1')
        .subscribe((resp) => {
          expect(resp).not.toBeNull();
          expect(JSON.stringify(resp)).toBe(
            JSON.stringify(mockCharacter.characters[0])
          );
        });
    });
  });
  describe('When calling service.updateCharacter', () => {
    it('Should be called httpClient', () => {
      service.updateCharacter(mockCharacter.characters[0]).subscribe((resp) => {
        expect(resp).not.toBeNull();
        expect(JSON.stringify(resp)).toBe(
          JSON.stringify(mockCharacter.characters[0])
        );
      });
    });
  });
  describe('When calling service.deleteCharacter', () => {
    it('Should be called httpClient', () => {
      service.deleteCharacter('123').subscribe((resp) => {
        expect(resp).not.toBeNull();
        expect(JSON.stringify(resp)).toBe(
          JSON.stringify(mockCharacter.characters[0])
        );
      });
    });
  });
});
