import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import { SmartadminModule } from "../shared/smartadmin.module";
import { HomeComponent } from "./home.component";
import { ChartJsModule } from "../shared/graphs/chart-js/chart-js.module";
import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    ChartJsModule,
    SmartadminDatatableModule,
    SmartadminModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
