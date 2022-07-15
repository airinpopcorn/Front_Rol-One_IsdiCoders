import { Component, Input, OnInit } from '@angular/core';
import { GameModel, iGameModel } from '../../models/game';
import { Router } from '@angular/router';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  @Input() game!: iGameModel;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  nextPage() {
    this.router.navigate(['detail/' + this.game._id]);
  }
}
