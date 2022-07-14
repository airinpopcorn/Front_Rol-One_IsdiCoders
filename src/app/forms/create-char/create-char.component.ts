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
import { filter } from 'rxjs';
import { iGameModel, iGameState } from 'src/app/models/game';
import { ApiCharacter } from 'src/app/services/characters.api';
import { ApiGame } from 'src/app/services/game.api';
import { AppState } from 'src/app/state/app.state';
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
    characters: Array<string>;
    template: Object;
  };
  fbGroupData: {
    [key: string]: [
      string,
      [(control: AbstractControl<any, any>) => ValidationErrors | null]
    ];
  } = {};
  formControlNameList: string[] = [];
  characterForm!: FormGroup;
  idGame = this.route.snapshot.paramMap.get('id') as string;
  idUser!: string;
  constructor(
    public route: ActivatedRoute,
    public fb: FormBuilder,
    public store: Store<AppState>,
    public router: Router,
    public apiGame: ApiGame,
    public apiCharacter: ApiCharacter
  ) {}

  handleSubmit() {
    this.characterForm.valid;
    this.characterForm.value.idGame = this.idGame;
    this.characterForm.value.player = this.idUser;
    this.apiCharacter
      .addCharacter(this.characterForm.value, this.token)
      .subscribe({
        next: (data) => {
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

  ngOnInit(): void {
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.idUser = data.user._id as string;
          this.token = data.token;
        },
      });
    this.apiGame.getOneGame(this.idGame).subscribe({
      next: (data) => {
        this.filterGame = data;

        Object.entries(this.filterGame.template).forEach((entry) => {
          this.fbGroupData[entry[0]] = ['', [Validators.required]];
          this.formControlNameList.push(entry[0]);
        });
        this.characterForm = this.fb.group(this.fbGroupData);
      },
    });
  }
}
