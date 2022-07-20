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
import { ApiCharacter } from 'src/app/services/characters.api';
import { AppState } from 'src/app/state/app.state';
import { updateCharacter } from 'src/app/state/character.reducer/character.actions.creators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-char',
  templateUrl: './edit-char.component.html',
  styleUrls: ['./edit-char.component.css'],
})
export class EditCharComponent implements OnInit {
  idCharacter!: string;
  character!: any;
  fbGroupData: {
    [key: string]: [
      string,
      [(control: AbstractControl<any, any>) => ValidationErrors | null]
    ];
  } = {};
  characterForm!: FormGroup;
  constructor(
    public apiCharacter: ApiCharacter,
    public store: Store<AppState>,
    public route: ActivatedRoute,
    public fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.idCharacter = this.route.snapshot.paramMap.get('id') as string;
    this.apiCharacter.getOneCharacter(this.idCharacter).subscribe({
      next: (data) => {
        this.character = data;
        Object.entries(this.character).forEach((entry) => {
          this.fbGroupData[entry[0]] = ['', [Validators.required]];
        });
        this.characterForm = this.fb.group(this.fbGroupData);
        this.characterForm.setValue(this.character);
      },
    });
  }

  handleEdit() {
    this.characterForm.valid;
    this.apiCharacter.updateCharacter(this.characterForm.value).subscribe({
      next: (data) => {
        Swal.fire({
          icon: 'success',
          title: 'Yuhuuu...',
          text: 'You edit your character correctly',
        });
        this.store.dispatch(
          updateCharacter({
            id: this.idCharacter,
            updatedCharacter: this.character,
          })
        );
        this.router.navigate(['char-detail/' + this.idCharacter]);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops...',
          text: 'Something went wrong',
        });
      },
    });
  }
}
