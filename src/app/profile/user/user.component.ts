import { Component, Input, OnInit } from '@angular/core';
import { iUser } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user!: iUser;
  constructor() {}

  ngOnInit(): void {}
}
