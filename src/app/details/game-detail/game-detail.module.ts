import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDetailRoutingModule } from './game-detail-routing.module';
import { GameDetailComponent } from './game-detail.component';
import { CoreModule } from 'src/app/core/core.module';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [GameDetailComponent],
  imports: [CommonModule, GameDetailRoutingModule, CoreModule],
})
export class GameDetailModule implements OnInit {
  idGame = this.route.snapshot.paramMap.get('id') as string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.idGame);
  }
}
