import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeverityComponent } from './severity/severity.component';

import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgencyComponent } from './agency/agency.component';
import { FuelTypeComponent } from './fuel-type/fuel-type.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { VariantComponent } from './variant/variant.component';
import { ModuleComponent } from './module/module.component';
import { ModelComponent } from './model/model.component';


export const routes = [
  {path:'',component:SeverityComponent,data:{breadcrumb:'Audits'}},
  {path:'severity',component:SeverityComponent,data:{breadcrumb:'Audits'}},
  {path:'agency',component:AgencyComponent,data:{breadcrumb:'Audits'}},
  {path:'model',component:ModelComponent,data:{breadcrumb:'Audits'}},
  {path:'fuel-type',component:FuelTypeComponent,data:{breadcrumb:'Audits'}},
  {path:'transmissions',component:TransmissionComponent,data:{breadcrumb:'Audits'}},
  {path:'variant',component:VariantComponent,data:{breadcrumb:'Audits'}},
  {path:'module',component:ModuleComponent,data:{breadcrumb:'Audits'}},
];

@NgModule({
  declarations: [SeverityComponent, AgencyComponent, FuelTypeComponent,ModelComponent, TransmissionComponent, VariantComponent, ModuleComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),NgxChartsModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,
    ChartModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class MetricModule { }
