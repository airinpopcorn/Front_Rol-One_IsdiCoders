import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iMenuOptions } from '../interfaces/menu-options';
import * as gameActions from './state/game.reducer/game.action.creators';
import { ApiGame } from './services/game.api';

import { AppState } from './state/app.state';

export const MENU_OPTIONS: Array<iMenuOptions> = [
  { path: 'home', label: 'Home' },
  { path: 'players', label: 'Players' },
  { path: 'profile', label: 'Profile' },
  { path: 'detail/:id', label: 'Game-detail' },
  { path: 'char-detail/:id', label: 'Character-detail' },
  { path: 'login', label: 'Login' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  menuOptions: Array<iMenuOptions>;
  constructor(public store: Store<AppState>, public game: ApiGame) {
    this.menuOptions = MENU_OPTIONS;
  }
  ngOnInit(): void {
    this.game
      .getGames()
      .subscribe((data) =>
        this.store.dispatch(gameActions.loadGame({ games: data }))
      );
  }
}
