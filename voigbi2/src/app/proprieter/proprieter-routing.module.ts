import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProprieterPage } from './proprieter.page';

const routes: Routes = [
  {
    path: '',
    component: ProprieterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProprieterPageRoutingModule {}
