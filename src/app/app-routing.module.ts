import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MENU_OPTIONS } from './app.component';

const routes: Routes = [
  {
    path: MENU_OPTIONS[0].path,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: MENU_OPTIONS[1].path,
    loadChildren: () =>
      import('./players/players.module').then((m) => m.PlayersModule),
  },
  {
    path: MENU_OPTIONS[2].path,
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
