import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { QualityAuditComponent } from './quality-audit/quality-audit.component';
import { AgencyReportComponent } from './agency-report/agency-report.component';
import { RepeatedIssuesComponent } from './repeated-issues/repeated-issues.component';


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

import { SharedModule } from '../shared/shared.module';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { OverviewModule } from './overview/overview.module';


export const routes = [
  {path:'',component:OverviewComponent,data:{breadcrumb:'Dashboard'}},
  {path:'overview',component:OverviewComponent,loadChildren: './overview/overview.module#OverviewModule', data:{breadcrumb:'Dashboard'}},
  
  {path:'quality-audit',component:QualityAuditComponent,data:{breadcrumb:'Dashboard'}},
  {path:'agency-report',component:AgencyReportComponent,data:{breadcrumb:'Dashboard'}},
  {path:'repeated-issues',component:RepeatedIssuesComponent,data:{breadcrumb:'Dashboard'}},
];

@NgModule({
  declarations: [ QualityAuditComponent, AgencyReportComponent, RepeatedIssuesComponent,],
  imports: [
    OverviewModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,MglTimelineModule,
    ChartModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class NewDashboardModule { }
