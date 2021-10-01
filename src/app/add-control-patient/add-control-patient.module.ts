import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddControlPatientPageRoutingModule } from './add-control-patient-routing.module';

import { AddControlPatientPage } from './add-control-patient.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddControlPatientPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddControlPatientPage]
})
export class AddControlPatientPageModule {}
