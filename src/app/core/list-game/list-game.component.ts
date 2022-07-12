import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iGameModel } from 'src/app/models/game';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.css'],
})
export class ListGameComponent implements OnInit {
  games!: Array<iGameModel>;
  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.games)
      .subscribe({ next: (data) => (this.games = data.games) });
  }
}
