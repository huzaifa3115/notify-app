import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendnotificationsPageRoutingModule } from './sendnotifications-routing.module';

import { SendnotificationsPage } from './sendnotifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendnotificationsPageRoutingModule
  ],
  declarations: [SendnotificationsPage]
})
export class SendnotificationsPageModule {}
