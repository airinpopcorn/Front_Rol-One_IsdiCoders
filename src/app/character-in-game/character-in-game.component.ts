import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iCharacter } from '../models/character';
import { ApiGame } from '../services/game.api';

@Component({
  selector: 'app-character-in-game',
  templateUrl: './character-in-game.component.html',
  styleUrls: ['./character-in-game.component.css'],
})
export class CharacterInGameComponent implements OnInit {
  idGame!: string;
  charactersGame!: Array<iCharacter>;
  imageGame?: string;
  titleGame!: string;
  constructor(public route: ActivatedRoute, public apiGame: ApiGame) {}

  ngOnInit(): void {
    this.idGame = this.route.snapshot.paramMap.get('id') as string;
    this.apiGame.getOneGame(this.idGame).subscribe({
      next: (data) => {
        this.charactersGame = data.characters;
        this.imageGame = data.img_detail;
        this.titleGame = data.title;
      },
    });
  }
}
