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
import { AuditTypeTrendComponent } from './audit-type-trend/audit-type-trend.component';
import { LocationTrendComponent } from './location-trend/location-trend.component';
import { ModelTrendComponent } from './model-trend/model-trend.component';
import { AgencyTrendComponent } from './agency-trend/agency-trend.component';
import { TimeSeriesComponent } from './time-series/time-series.component';



export const routes = [
  {path:'',component:AuditTypeTrendComponent,data:{breadcrumb:'Dashboard'}},
  {path:'radar-ca-audittype-trend',component:AuditTypeTrendComponent,data:{breadcrumb:'Dashboard'}},
  {path:'radar-ca-location-trend',component:LocationTrendComponent,data:{breadcrumb:'Dashboard'}},
  {path:'radar-ca-model-trend',component:ModelTrendComponent,data:{breadcrumb:'Dashboard'}},
  {path:'radar-agency-trend',component:AgencyTrendComponent,data:{breadcrumb:'Dashboard'}},
  {path:'radar-ca-time-series',component:TimeSeriesComponent,data:{breadcrumb:'Dashboard'}},
];

@NgModule({
  declarations: [AuditTypeTrendComponent, LocationTrendComponent, ModelTrendComponent, AgencyTrendComponent, TimeSeriesComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,OwlDateTimeModule,OwlNativeDateTimeModule
  ]
})
export class RadarChecklistAuditModule { }
