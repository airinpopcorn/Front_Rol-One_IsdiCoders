import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iCharacter } from 'src/app/models/character';
import { iGameState } from 'src/app/models/game';
import { ApiGame } from 'src/app/services/game.api';
import { AppState } from 'src/app/state/app.state';
import Swal from 'sweetalert2';

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
    img_detail?: string;
    characters: Array<iCharacter>;
    template: Object;
  };
  token!: string;
  idGame!: string;
  constructor(
    public route: ActivatedRoute,
    public store: Store<AppState>,
    public apiGame: ApiGame,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.idGame = this.route.snapshot.paramMap.get('id') as string;
    this.apiGame.getOneGame(this.idGame).subscribe({
      next: (data) => {
        this.filterGame = data;
      },
    });
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.token = data.token;
        },
      });
  }

  goCreateCharacter() {
    if (this.token) {
      this.router.navigate(['create-character/' + this.idGame]);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to login',
      });
      this.router.navigate(['login']);
    }
  }
}
