import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CharacterComponent } from './character/character.component';
import { ListCharacterComponent } from './list-character/list-character.component';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { GameComponent } from './game/game.component';
import { ListGameComponent } from './list-game/list-game.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    CharacterComponent,
    ListCharacterComponent,
    GameComponent,
    ListGameComponent,
  ],
  imports: [CommonModule, RouterModule, CoreRoutingModule],
  exports: [
    HeaderComponent,
    MenuComponent,
    GameComponent,
    ListGameComponent,
    CharacterComponent,
  ],
})
export class CoreModule {}
