import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasSeverityComponent } from './das-severity/das-severity.component';
import { DasAgencyComponent } from './das-agency/das-agency.component';
import { DasModelComponent } from './das-model/das-model.component';
import { DasFuelTypeComponent } from './das-fuel-type/das-fuel-type.component';
import { DasTransmissionComponent } from './das-transmission/das-transmission.component';
import { DasVariantComponent } from './das-variant/das-variant.component';
import { DasModuleComponent } from './das-module/das-module.component';

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



export const routes = [
  {path:'',component:DasSeverityComponent,data:{breadcrumb:'Audits'}},
  {path:'severity',component:DasSeverityComponent,data:{breadcrumb:'Audits'}},
  {path:'agency',component:DasAgencyComponent,data:{breadcrumb:'Audits'}},
  {path:'model',component:DasModelComponent,data:{breadcrumb:'Audits'}},
  {path:'fuel-type',component:DasFuelTypeComponent,data:{breadcrumb:'Audits'}},
  {path:'transmissions',component:DasTransmissionComponent,data:{breadcrumb:'Audits'}},
  {path:'variant',component:DasVariantComponent,data:{breadcrumb:'Audits'}},
  {path:'module',component:DasModuleComponent,data:{breadcrumb:'Audits'}},
];
@NgModule({
  declarations: [DasSeverityComponent, DasAgencyComponent, DasModelComponent, DasFuelTypeComponent, DasTransmissionComponent, DasVariantComponent, DasModuleComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),NgxChartsModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
    
  ]
})
export class ChecklistAuditModule { }
