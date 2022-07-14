import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { iGameModel, iGameState } from 'src/app/models/game';
import { ApiGame } from 'src/app/services/game.api';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent implements OnInit {
  allGames!: iGameState;
  filterGame!: {
    title: string;
    creator: string;
    description: string;
    image: string;
    characters: Array<string>;
    template: Object;
  };
  idGame = this.route.snapshot.paramMap.get('id') as string;
  constructor(
    public route: ActivatedRoute,
    public store: Store<AppState>,
    public apiGame: ApiGame
  ) {}

  ngOnInit(): void {
    // this.store
    //   .select((state) => state.games)
    //   .subscribe({
    //     next: (data) => {
    //       this.allGames = data;
    //     },
    //   });

    this.apiGame.getOneGame(this.idGame).subscribe({
      next: (data) => {
        this.filterGame = data;
      },
    });

    // this.filterGame = this.allGames.games.find(
    //   (game) => game._id === this.idGame
    // ) as iGameModel;
  }
}
