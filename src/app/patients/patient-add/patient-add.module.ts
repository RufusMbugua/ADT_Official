import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientAddComponent} from "./patient-add.component";
import { formPluginsRouting } from '../../+forms/+form-plugins/form-plugins.routing';
import {XEditableWidgetComponent} from "../../+forms/+form-plugins/x-editable-widget/x-editable-widget.component";
import {DuallistboxWidgetComponent} from "../../+forms/+form-plugins/duallistbox-widget/duallistbox-widget.component";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";

@NgModule({
  imports: [
    CommonModule,
    formPluginsRouting,
    SmartadminModule,
    SmartadminInputModule
  ],
  declarations: [PatientAddComponent, XEditableWidgetComponent, DuallistboxWidgetComponent]
})
export class PatientAddModule { }
