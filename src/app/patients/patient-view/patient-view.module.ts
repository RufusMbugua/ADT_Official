import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { patientviewRouting } from './patient-view.routing';
import { PatientViewComponent } from './patient-view.component';
import { SmartadminModule } from "../../shared/smartadmin.module";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";

@NgModule({
    imports: [
        CommonModule,
        patientviewRouting,
        SmartadminModule,
        SmartadminInputModule
    ],
    exports: [],
    declarations: [PatientViewComponent],
    providers: []
})
export class PatientViewModule { }
