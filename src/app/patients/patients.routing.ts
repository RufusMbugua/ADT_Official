import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  { path: 'add-patient',
    loadChildren: 'app/patients/patient-add/patient-add.module#PatientAddModule',
    data: {pageTitle: 'Add Patient'}
  }
];

export const routing = RouterModule.forChild(routes);