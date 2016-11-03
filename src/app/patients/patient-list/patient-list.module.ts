import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { patientlistRouting } from './patient-list.routing';
import { PatientListComponent }   from './patient-list.component';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";

@NgModule({
    imports: [
        CommonModule,
        patientlistRouting,
        SmartadminModule,
        SmartadminDatatableModule
    ],
    exports: [],
    declarations: [PatientListComponent],
    providers: [],
})
export class PatientListModule { }