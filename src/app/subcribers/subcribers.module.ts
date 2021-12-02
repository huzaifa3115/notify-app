import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcribersPageRoutingModule } from './subcribers-routing.module';

import { SubcribersPage } from './subcribers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubcribersPageRoutingModule
  ],
  declarations: [SubcribersPage]
})
export class SubcribersPageModule {}
