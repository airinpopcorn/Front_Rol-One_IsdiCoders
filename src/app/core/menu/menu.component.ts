import { Component, Input, OnInit } from '@angular/core';
import { iMenuOptions } from 'src/interfaces/menu-options';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() options!: Array<iMenuOptions>;
  constructor() {}

  ngOnInit(): void {}
}
