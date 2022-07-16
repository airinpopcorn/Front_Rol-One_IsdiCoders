import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iCharacter } from '../models/character';
import { iGameModel, iGameState } from '../models/game';
import { LocalStorageService } from '../services/localStorage.service';
import { ApiUser } from '../services/user.api';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  characters!: Array<iCharacter>;
  arrGames: Array<string> = [];
  gamesWithCharacters!: Array<iGameModel>;
  gamesPlayers: Array<iGameModel> = [];
  token!: string;
  idUser!: string;
  constructor(
    public store: Store<AppState>,
    public localStorage: LocalStorageService,
    public apiUser: ApiUser
  ) {}

  clearDuplicates(arr: Array<string>) {
    const gamesNotDuplicated = [...new Set(arr)];
    return gamesNotDuplicated;
  }

  ngOnInit(): void {
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.characters = data.user.characters as Array<iCharacter>;
        },
      });

    this.characters?.forEach((character) => {
      return this.arrGames.push(character.idGame as string);
    });
    this.arrGames = this.clearDuplicates(this.arrGames);
    this.store
      .select((state) => state.games.games)
      .subscribe({
        next: (data) => {
          this.gamesWithCharacters = data;
        },
      });
    this.gamesWithCharacters.forEach((game) => {
      if (this.arrGames.includes(game._id as string)) {
        this.gamesPlayers.push(game);
      }
    });
  }
}
