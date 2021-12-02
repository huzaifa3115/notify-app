import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendnotificationsPage } from './sendnotifications.page';

const routes: Routes = [
  {
    path: '',
    component: SendnotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendnotificationsPageRoutingModule {}
