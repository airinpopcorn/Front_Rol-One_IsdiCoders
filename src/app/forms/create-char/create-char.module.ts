import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCharRoutingModule } from './create-char-routing.module';
import { CreateCharComponent } from './create-char.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateCharComponent],
  imports: [CommonModule, CreateCharRoutingModule, ReactiveFormsModule],
})
export class CreateCharModule {}
