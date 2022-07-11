import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { CharacterDetailComponent } from './character-detail.component';


@NgModule({
  declarations: [
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharacterDetailRoutingModule
  ]
})
export class CharacterDetailModule { }
