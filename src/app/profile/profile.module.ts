import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserComponent } from './user/user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [ProfileComponent, UserComponent, EditProfileComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
