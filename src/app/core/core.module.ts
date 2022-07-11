import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CharacterComponent } from './character/character.component';
import { ListCharacterComponent } from './list-character/list-character.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    CharacterComponent,
    ListCharacterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
