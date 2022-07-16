import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterInGameRoutingModule } from './character-in-game-routing.module';
import { CharacterInGameComponent } from './character-in-game.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [CharacterInGameComponent],
  imports: [CommonModule, CharacterInGameRoutingModule, CoreModule],
})
export class CharacterInGameModule {}
