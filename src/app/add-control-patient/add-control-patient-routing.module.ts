import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddControlPatientPage } from './add-control-patient.page';

const routes: Routes = [
  {
    path: '',
    component: AddControlPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddControlPatientPageRoutingModule {}
