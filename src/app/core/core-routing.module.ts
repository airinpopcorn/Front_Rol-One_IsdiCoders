import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from '../details/game-detail/game-detail.component';

const routes: Routes = [{ path: 'detail/:id', component: GameDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
