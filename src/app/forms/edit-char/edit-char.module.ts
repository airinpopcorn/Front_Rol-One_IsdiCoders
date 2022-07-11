import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCharRoutingModule } from './edit-char-routing.module';
import { EditCharComponent } from './edit-char.component';


@NgModule({
  declarations: [
    EditCharComponent
  ],
  imports: [
    CommonModule,
    EditCharRoutingModule
  ]
})
export class EditCharModule { }
