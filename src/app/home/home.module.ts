import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GameComponent } from './game/game.component';
import { ListGameComponent } from './list-game/list-game.component';

@NgModule({
  declarations: [HomeComponent, GameComponent, ListGameComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
