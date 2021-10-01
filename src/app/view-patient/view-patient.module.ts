import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPatientPageRoutingModule } from './view-patient-routing.module';

import { ViewPatientPage } from './view-patient.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPatientPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewPatientPage]
})
export class ViewPatientPageModule {}
