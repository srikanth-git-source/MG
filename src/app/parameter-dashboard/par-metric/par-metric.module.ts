import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParFueltypeComponent } from './par-fueltype/par-fueltype.component';
import { ParModelComponent } from './par-model/par-model.component';

import { ParCategoryComponent } from './par-category/par-category.component';
import { ParTransmissionComponent } from './par-transmission/par-transmission.component';
import { ParVariantComponent } from './par-variant/par-variant.component';

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
import { ParAudittypeComponent } from './par-audittype/par-audittype.component';


export const routes = [
  {path:'',component:ParCategoryComponent,data:{breadcrumb:'Audits'}},
  {path:'audittype-par',component:ParAudittypeComponent,data:{breadcrumb:'Audits'}},
  {path:'category-par',component:ParCategoryComponent,data:{breadcrumb:'Audits'}},
  {path:'model-par',component:ParModelComponent,data:{breadcrumb:'Audits'}},
  {path:'fueltype-par',component:ParFueltypeComponent,data:{breadcrumb:'Audits'}},
  {path:'transmissions-par',component:ParTransmissionComponent,data:{breadcrumb:'Audits'}},
  {path:'variant-par',component:ParVariantComponent,data:{breadcrumb:'Audits'}},
  
];

@NgModule({
  declarations: [ParFueltypeComponent, ParModelComponent, ParCategoryComponent, ParTransmissionComponent, ParVariantComponent, ParAudittypeComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),NgxChartsModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,
    ChartModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ParMetricModule { }
