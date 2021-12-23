import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { ParAuditlogComponent } from './par-auditlog/par-auditlog.component';
import { ParAnalyticsComponent } from './par-analytics/par-analytics.component';
import { ParOverviewComponent } from './par-overview/par-overview.component';
import { ParAuditlogGridComponent } from './par-auditlog/par-auditlog-grid/par-auditlog-grid.component';
import { ParNotesComponent } from './par-notes/par-notes.component';
import { AddParnotesComponent } from './par-notes/add-parnotes/add-parnotes.component';
import { MglTimelineModule } from 'angular-mgl-timeline';

export const routes = [
  {path:'',component:ParAuditlogComponent,data:{breadcrumb:'Parameter Issuelog'}},
  {path:'issuelog-par',component:ParAuditlogComponent,data:{breadcrumb:'Parameter Issuelog'}},
  {path:'notes-par',component:ParNotesComponent,data:{breadcrumb:'Parameter Issuelog'}},
  {path:'analytics-par',component:ParAnalyticsComponent,data:{breadcrumb:'Parameter Issuelog'}},
  {path:'overview-par',component:ParOverviewComponent,data:{breadcrumb:'Parameter Issuelog'}},
];

@NgModule({
  declarations: [ParAuditlogComponent, ParAnalyticsComponent,ParOverviewComponent, ParAuditlogGridComponent, ParNotesComponent, AddParnotesComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,MglTimelineModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,
    ChartModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [ParAuditlogGridComponent,AddParnotesComponent]
})

export class ParameterDashboardModule { }
