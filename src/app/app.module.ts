import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {SmartadminModule} from './shared/smartadmin.module'
import {AppComponent} from './app.component';

import {routing} from './app.routing';
import {BrowserModule} from "@angular/platform-browser";
import {UserModule} from "./shared/user/user.module";
import {UserService} from "./shared/user/user.service";
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientAddComponent } from './patients/patient-add/patient-add.component';
import { PatientViewComponent } from './patients/patient-view/patient-view.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientAddComponent,
    PatientListComponent,
    PatientViewComponent
  ],
  imports: [

    BrowserModule,

    routing,

    SmartadminModule.forRoot(),
    UserModule.forRoot(),
  ],
  providers: [UserService],
  // entryComponents: [AppComponent],
  bootstrap: [AppComponent],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {

}
