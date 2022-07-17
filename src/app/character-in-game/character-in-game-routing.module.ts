import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterInGameComponent } from './character-in-game.component';

const routes: Routes = [{ path: '', component: CharacterInGameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterInGameRoutingModule {}
