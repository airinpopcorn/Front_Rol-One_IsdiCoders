import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent, LoginComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule, CoreModule],
})
export class LoginModule {}
