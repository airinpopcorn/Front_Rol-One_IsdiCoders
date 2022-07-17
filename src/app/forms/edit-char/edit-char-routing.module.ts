import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCharComponent } from './edit-char.component';

const routes: Routes = [{ path: '', component: EditCharComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCharRoutingModule {}
