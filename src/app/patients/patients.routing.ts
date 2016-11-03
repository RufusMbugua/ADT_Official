import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  { 
    path: 'add-patient',
    loadChildren: 'app/patients/patient-add/patient-add.module#PatientAddModule',
    data: {pageTitle: 'Add Patient'}
  },
  {
    path: 'list-patients',
    loadChildren: 'app/patients/patient-list/patient-list.module#PatientListModule',
    data: { pageTitle: 'Patient List' }
  }
];

export const routing = RouterModule.forChild(routes);