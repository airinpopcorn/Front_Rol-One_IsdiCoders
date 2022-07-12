import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<app-list-game></app-list-game>`,
  styleUrls: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
