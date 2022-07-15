import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iCharacter } from 'src/app/models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  @Input() character!: iCharacter;
  constructor(public router: Router) {}

  ngOnInit(): void {}

  nextPage() {
    this.router.navigate(['char-detail/1234']);
  }
}
