import { Component, OnInit } from '@angular/core';
import { iMenuOptions } from '../interfaces/menu-options';

export const MENU_OPTIONS: Array<iMenuOptions> = [
  { path: 'home', label: 'Home' },
  { path: 'players', label: 'Players' },
  { path: 'profile', label: 'Profile' },
  { path: 'detail/:id', label: 'Game-detail' },
  { path: 'char-detail/:id', label: 'Character-detail' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Irene_Alonso_Front-Final-Project-202205-MAD';
  menuOptions: Array<iMenuOptions>;
  constructor() {
    this.menuOptions = MENU_OPTIONS;
  }
  ngOnInit(): void {}
}
