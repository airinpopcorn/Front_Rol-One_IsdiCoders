import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCharRoutingModule } from './edit-char-routing.module';
import { EditCharComponent } from './edit-char.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditCharComponent],
  imports: [CommonModule, EditCharRoutingModule, ReactiveFormsModule],
})
export class EditCharModule {}
