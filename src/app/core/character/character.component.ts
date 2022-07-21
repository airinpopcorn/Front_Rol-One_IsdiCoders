import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iCharacter } from 'src/app/models/character';
import { iUser } from 'src/app/models/user';
import { ApiUser } from 'src/app/services/user.api';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  @Input() character!: iCharacter;
  userName!: string;
  constructor(public router: Router, public apiUser: ApiUser) {}

  ngOnInit(): void {
    this.userName = this.character.player?.name as string;
  }

  detailCharPage() {
    this.router.navigate(['char-detail/' + this.character._id]);
  }
}
