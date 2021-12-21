import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { ChartModule } from 'angular-highcharts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmCoreModule } from '@agm/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DasParAgencyComponent } from './das-par-agency/das-par-agency.component';
import { DasParCategoryComponent } from './das-par-category/das-par-category.component';
import { DasParFueltypeComponent } from './das-par-fueltype/das-par-fueltype.component';
import { DasParModelComponent } from './das-par-model/das-par-model.component';
import { DasParModuleComponent } from './das-par-module/das-par-module.component';
import { DasParSeverityComponent } from './das-par-severity/das-par-severity.component';
import { DasParTransmissionComponent } from './das-par-transmission/das-par-transmission.component';
import { DasParVariantComponent } from './das-par-variant/das-par-variant.component';


export const routes = [
  {path:'',component:DasParCategoryComponent,data:{breadcrumb:'Audits'}},
  {path:'category-par',component:DasParCategoryComponent,data:{breadcrumb:'Audits'}},
  {path:'model-par',component:DasParModelComponent,data:{breadcrumb:'Audits'}},
  {path:'fueltype-par',component:DasParFueltypeComponent,data:{breadcrumb:'Audits'}},
  {path:'transmissions-par',component:DasParTransmissionComponent,data:{breadcrumb:'Audits'}},
  {path:'variant-par',component:DasParVariantComponent,data:{breadcrumb:'Audits'}},
 
];
@NgModule({
  declarations: [ DasParAgencyComponent, DasParCategoryComponent, DasParFueltypeComponent, DasParModelComponent, DasParModuleComponent, DasParSeverityComponent, DasParTransmissionComponent, DasParVariantComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
  ]
})
export class ParameterAuditModule { }
