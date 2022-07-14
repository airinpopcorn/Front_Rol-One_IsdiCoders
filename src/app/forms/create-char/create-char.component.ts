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
import { ApiGame } from 'src/app/services/game.api';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-create-char',
  templateUrl: './create-char.component.html',
  styleUrls: ['./create-char.component.css'],
})
export class CreateCharComponent implements OnInit {
  allGames!: iGameState;
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
  constructor(
    public route: ActivatedRoute,
    public fb: FormBuilder,
    public store: Store<AppState>,
    public router: Router,
    public apiGame: ApiGame
  ) {}

  handleSubmit() {
    this.characterForm.valid;
    console.log(this.characterForm.value);
  }

  ngOnInit(): void {
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
