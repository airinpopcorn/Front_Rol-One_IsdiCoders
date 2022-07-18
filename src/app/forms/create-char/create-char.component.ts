import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iCharacter } from 'src/app/models/character';
import { iGameState } from 'src/app/models/game';
import { iUser } from 'src/app/models/user';
import { ApiCharacter } from 'src/app/services/characters.api';
import { ApiGame } from 'src/app/services/game.api';
import { AppState } from 'src/app/state/app.state';
import { loadUser } from 'src/app/state/user.reducer/user.action.creator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-char',
  templateUrl: './create-char.component.html',
  styleUrls: ['./create-char.component.css'],
})
export class CreateCharComponent implements OnInit {
  allGames!: iGameState;
  token!: string;
  filterGame!: {
    title: string;
    creator: string;
    description: string;
    image: string;
    characters: Array<iCharacter>;
    template: { [key: string]: string };
  };
  fbGroupData: {
    [key: string]: [
      string,
      [(control: AbstractControl<any, any>) => ValidationErrors | null]
    ];
  } = {};
  characterForm!: FormGroup;
  idGame!: string;
  idUser!: string;
  user!: iUser;
  constructor(
    public route: ActivatedRoute,
    public fb: FormBuilder,
    public store: Store<AppState>,
    public router: Router,
    public apiGame: ApiGame,
    public apiCharacter: ApiCharacter
  ) {}

  ngOnInit(): void {
    this.idGame = this.route.snapshot.paramMap.get('id') as string;
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.user = data.user;
          this.idUser = data.user._id as string;
          this.token = data.token;
        },
      });
    this.apiGame.getOneGame(this.idGame).subscribe({
      next: (data) => {
        this.filterGame = data;

        Object.entries(this.filterGame.template).forEach((entry) => {
          this.fbGroupData[entry[0]] = ['', [Validators.required]];
        });
        this.characterForm = this.fb.group(this.fbGroupData);
      },
    });
  }

  handleSubmit() {
    this.characterForm.valid;
    this.characterForm.value.idGame = this.idGame;
    this.characterForm.value.player = this.idUser;
    this.apiCharacter
      .addCharacter(this.characterForm.value, this.token)
      .subscribe({
        next: (data) => {
          let newCharacterArr = this.user.characters;

          newCharacterArr = [...(newCharacterArr as Array<iCharacter>), data];
          const newUser = { ...this.user, characters: newCharacterArr };
          this.store.dispatch(loadUser({ user: newUser, token: this.token }));
          Swal.fire({
            icon: 'success',
            title: 'Yuhuuu...',
            text: 'You create your character correctly',
          });
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Ooops...',
            text: 'Something went wrong',
          });
        },
      });
    this.characterForm.reset();
  }
}
