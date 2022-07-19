import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [ProfileComponent, UserComponent],
  imports: [CommonModule, ProfileRoutingModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
