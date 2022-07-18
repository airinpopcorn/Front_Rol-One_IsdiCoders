import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iCharacter } from 'src/app/models/character';
import { ApiCharacter } from 'src/app/services/characters.api';
import { AppState } from 'src/app/state/app.state';
import { loadCharacters } from 'src/app/state/character.reducer/character.actions.creators';
import { loadGame } from 'src/app/state/game.reducer/game.action.creators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  idCharacter!: string;
  idGame!: string;
  character!: any;
  constructor(
    public route: ActivatedRoute,
    public apiCharacter: ApiCharacter,
    public router: Router,
    public store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.idCharacter = this.route.snapshot.paramMap.get('id') as string;
    this.apiCharacter.getOneCharacter(this.idCharacter).subscribe({
      next: (data) => {
        this.character = data;
        this.idGame = data.idGame as string;
      },
    });
  }
  handleDelete() {
    this.apiCharacter.deleteCharacter(this.idCharacter).subscribe({
      next: (data) => {
        Swal.fire({
          icon: 'success',
          title: 'Yuhuuu...',
          text: 'You have delete your character correctly',
        });
        // this.store.dispatch(loadGame());
        this.router.navigate(['players']);
      },
    });
  }
  handleUpdate() {
    this.router.navigate(['edit-character/' + this.idCharacter]);
  }
}
