import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePackagePageRoutingModule } from './profile-package-routing.module';

import { ProfilePackagePage } from './profile-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePackagePageRoutingModule
  ],
  declarations: [ProfilePackagePage]
})
export class ProfilePackagePageModule {}
