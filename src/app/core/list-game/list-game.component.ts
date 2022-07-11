import { Component, OnInit } from '@angular/core';
import { GameModel } from 'src/app/models/game';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.css'],
})
export class ListGameComponent implements OnInit {
  games!: Array<GameModel>;
  constructor() {}

  ngOnInit(): void {}
}
