import { Component, Input, OnInit } from '@angular/core';
import { GameModel } from 'src/app/models/game';
import { Router } from '@angular/router';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  @Input() game!: GameModel;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  nextPage() {
    this.router.navigate(['detail/1234']);
    console.log('Siguiente página');
  }
}
