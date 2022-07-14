import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCharComponent } from './create-char.component';

const routes: Routes = [{ path: '', component: CreateCharComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCharRoutingModule {}
