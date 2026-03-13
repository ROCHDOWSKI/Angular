import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientCardComponent } from './components/patient-card/patient-card.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';

@NgModule({
  declarations: [
    PatientCardComponent,
    PatientListComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule
  ],
  exports: [
    PatientListComponent
  ]
})
export class PatientsModule { }
