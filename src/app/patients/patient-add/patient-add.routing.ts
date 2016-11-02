import { Routes, RouterModule } from '@angular/router';
import {PatientAddComponent} from "./patient-add.component";

export const patientaddRoutes: Routes = [{
  path: '',
  component: PatientAddComponent
}];

export const patientaddRouting = RouterModule.forChild(patientaddRoutes);

