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
import { AuditLogComponent } from './audit-log/audit-log.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { OverviewComponent } from './overview/overview.component';
import { SharedModule } from '../shared/shared.module';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { NotesComponent } from './notes/notes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNotesComponent } from './notes/add-notes/add-notes.component';





export const routes = [
  {path:'',component:AuditLogComponent,data:{breadcrumb:'Audits'}},
  {path:'issuelog',component:AuditLogComponent,data:{breadcrumb:'Audits'}},
  {path:'analytics',component:AnalyticsComponent,data:{breadcrumb:'Audits'}},
  {path:'overview',component:OverviewComponent,data:{breadcrumb:'Audits'}},
  {path:'notes',component:NotesComponent,data:{breadcrumb:'Audits'}},
];

@NgModule({
  declarations: [AuditLogComponent, AnalyticsComponent, OverviewComponent, NotesComponent, AddNotesComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,MglTimelineModule,
    ChartModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule,
  ],entryComponents: [AddNotesComponent]
})
export class ChecklistDashboardModule { }
