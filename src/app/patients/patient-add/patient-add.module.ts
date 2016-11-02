import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { patientaddRouting } from './patient-add.routing';
import { PatientAddComponent }   from './patient-add.component';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";

@NgModule({
    imports: [
        patientaddRouting,
        SmartadminModule,
        SmartadminInputModule
    ],
    exports: [],
    declarations: [PatientAddComponent],
    providers: [],
})
export class PatientAddModule { }