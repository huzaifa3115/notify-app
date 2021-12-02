import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcribersPage } from './subcribers.page';

const routes: Routes = [
  {
    path: '',
    component: SubcribersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcribersPageRoutingModule {}
