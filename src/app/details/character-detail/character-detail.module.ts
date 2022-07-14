import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { CharacterDetailComponent } from './character-detail.component';
import { CoreModule } from 'src/app/core/core.module';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [CommonModule, CharacterDetailRoutingModule, CoreModule],
})
export class CharacterDetailModule implements OnInit {
  idCharacter = this.route.snapshot.paramMap.get('id') as string;
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.idCharacter);
  }
}
