import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [PlayersComponent],
  imports: [CommonModule, PlayersRoutingModule, CoreModule],
})
export class PlayersModule {}
