import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterModel } from 'src/app/models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  @Input() character!: CharacterModel;
  constructor(public router: Router) {}

  ngOnInit(): void {}

  nextPage() {
    this.router.navigate(['char-detail/1234']);
    console.log('Siguiente página');
  }
}
