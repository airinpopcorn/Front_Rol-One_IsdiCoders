import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { iGameState } from '../models/game';
import { ApiGame } from './game.api';

describe('Calling ApiGame', () => {
  const mockGames: iGameState = {
    games: [
      {
        _id: '1726',
        title: 'test',
        creator: 'testCreator',
        description: 'testDescription',
        image: 'test.jpg',
        characters: [],
        template: {},
      },
    ],
  };
  let service: ApiGame;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiGame);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('When calling service.getGames', () => {
    it('Should be called httpClient', () => {
      service.getGames().subscribe((resp) => {
        expect(resp).not.toBeNull();
        expect(JSON.stringify(resp)).toBe(JSON.stringify(mockGames.games));
      });
    });
  });
  describe('When calling service.getOneGame', () => {
    it('Should be called httpClient', () => {
      service.getOneGame('id').subscribe((resp) => {
        expect(resp).not.toBeNull();
        expect(JSON.stringify(resp)).toBe(JSON.stringify(mockGames.games[0]));
      });
    });
  });
});
