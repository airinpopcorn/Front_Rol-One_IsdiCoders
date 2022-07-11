import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterInGameRoutingModule } from './character-in-game-routing.module';
import { CharacterInGameComponent } from './character-in-game.component';


@NgModule({
  declarations: [
    CharacterInGameComponent
  ],
  imports: [
    CommonModule,
    CharacterInGameRoutingModule
  ]
})
export class CharacterInGameModule { }
