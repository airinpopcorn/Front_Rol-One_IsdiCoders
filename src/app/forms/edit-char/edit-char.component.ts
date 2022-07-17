import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiCharacter } from 'src/app/services/characters.api';

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
    public route: ActivatedRoute,
    public fb: FormBuilder
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
      },
    });
  }
}
