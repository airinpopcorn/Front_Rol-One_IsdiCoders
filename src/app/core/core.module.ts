import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CharacterComponent } from './character/character.component';
import { ListCharacterComponent } from './list-character/list-character.component';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    CharacterComponent,
    ListCharacterComponent,
    GameComponent,
  ],
  imports: [CommonModule, RouterModule, CoreRoutingModule],
  exports: [HeaderComponent, MenuComponent, GameComponent],
})
export class CoreModule {}
