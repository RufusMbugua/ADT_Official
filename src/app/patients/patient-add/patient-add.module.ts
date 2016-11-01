import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {PatientAddComponent} from "./patient-add.component";

@NgModule({
  imports: [
    CommonModule,
    
      SmartadminModule
  ],
  declarations: [PatientAddComponent]
})
export class PatientAddModule { }
