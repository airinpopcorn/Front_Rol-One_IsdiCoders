import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCharRoutingModule } from './create-char-routing.module';
import { CreateCharComponent } from './create-char.component';


@NgModule({
  declarations: [
    CreateCharComponent
  ],
  imports: [
    CommonModule,
    CreateCharRoutingModule
  ]
})
export class CreateCharModule { }
