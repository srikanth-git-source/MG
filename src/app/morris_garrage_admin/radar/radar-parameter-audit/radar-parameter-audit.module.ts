import { RadarPaAgencyTrendComponent } from './radar-pa-agency-trend/radar-pa-agency-trend.component';
import { RadarPaLocationTrendComponent } from './radar-pa-location-trend/radar-pa-location-trend.component';
import { RadarPaCategoryTrendComponent } from './radar-pa-category-trend/radar-pa-category-trend.component';
import { RadarPaModelTrendComponent } from './radar-pa-model-trend/radar-pa-model-trend.component';
import { RadarPaTimeSeriesComponent } from './radar-pa-time-series/radar-pa-time-series.component';
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
import { RadarPaAudittypeTrendComponent } from './radar-pa-audittype-trend/radar-pa-audittype-trend.component';



export const routes = [
  {path:'',component:RadarPaAudittypeTrendComponent,data:{breadcrumb:'Dashboard'}},
  {path:'radar-pa-audittype-trend',component:RadarPaAudittypeTrendComponent,data:{breadcrumb:'Dashboard'}},
  {path:'radar-pa-location-trend',component:RadarPaLocationTrendComponent,data:{breadcrumb:'Dashboard'}},
  {path:'radar-pa-model-trend',component:RadarPaModelTrendComponent,data:{breadcrumb:'Dashboard'}},
  {path:'radar-pa-category-trend',component:RadarPaCategoryTrendComponent,data:{breadcrumb:'Dashboard'}},
  {path:'radar-pa-time-series',component:RadarPaTimeSeriesComponent,data:{breadcrumb:'Dashboard'}},
];


@NgModule({
  declarations: [RadarPaAudittypeTrendComponent,RadarPaAgencyTrendComponent, RadarPaLocationTrendComponent, RadarPaCategoryTrendComponent, RadarPaModelTrendComponent, RadarPaTimeSeriesComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,OwlDateTimeModule,OwlNativeDateTimeModule
  ]
})
export class RadarParameterAuditModule { }
