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
import { RadarStatisticsComponent } from './radar-statistics/radar-statistics.component';
import { RadarChecklistAuditComponent } from './radar-checklist-audit/radar-checklist-audit.component';
import { RadarParameterAuditComponent } from './radar-parameter-audit/radar-parameter-audit.component';
import { AuditTypeTrendComponent } from './radar-checklist-audit/audit-type-trend/audit-type-trend.component';
import { LocationTrendComponent } from './radar-checklist-audit/location-trend/location-trend.component';
import { ModelTrendComponent } from './radar-checklist-audit/model-trend/model-trend.component';
import { AgencyTrendComponent } from './radar-checklist-audit/agency-trend/agency-trend.component';
import { TimeSeriesComponent } from './radar-checklist-audit/time-series/time-series.component';


export const routes = [
  {path:'',component:RadarStatisticsComponent,data:{breadcrumb:'Dashboard'}},
  {path:'radar-statistics',component:RadarStatisticsComponent,data:{breadcrumb:'Dashboard'}},
  {path:'radar-checklist-audit',component:RadarChecklistAuditComponent,loadChildren: './radar-checklist-audit/radar-checklist-audit.module#RadarChecklistAuditModule',data:{breadcrumb:'Dashboard'}},
  {path:'radar-parameter-audit',component:RadarParameterAuditComponent,loadChildren : './radar-parameter-audit/radar-parameter-audit.module#RadarParameterAuditModule',data:{breadcrumb:'Dashboard'}},
];
 
@NgModule({
  declarations: [RadarStatisticsComponent, RadarChecklistAuditComponent, RadarParameterAuditComponent, ],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,OwlDateTimeModule,OwlNativeDateTimeModule
   
  ]
})
export class RadarModule { }
