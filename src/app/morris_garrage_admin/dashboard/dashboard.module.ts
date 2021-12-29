import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ChartModule } from 'angular-highcharts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmCoreModule } from '@agm/core';
import { StatisticsComponent } from './statistics/statistics.component';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { TicketDistributionComponent } from './ticket-distribution/ticket-distribution.component';
import { UnitTrendsComponent } from './unit-trends/unit-trends.component';
import { BlockTrendsComponent } from './block-trends/block-trends.component';
import { SectionTrendsComponent } from './section-trends/section-trends.component';
import { RankingTableComponent } from './ranking-table/ranking-table.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgencyTrendComponent } from './agency-trend/agency-trend.component';
import { ModelTrendCaComponent } from './model-trend-ca/model-trend-ca.component';
import { ModelTrendPaComponent } from './model-trend-pa/model-trend-pa.component';
import { LocationTrendCaComponent } from './location-trend-ca/location-trend-ca.component';
import { TimeSeriesPaComponent } from './time-series-pa/time-series-pa.component';
import { TimeSeriesCaComponent } from './time-series-ca/time-series-ca.component';
import { ParameterAuditComponent } from './parameter-audit/parameter-audit.component';
import { ChecklistAuditComponent } from './checklist-audit/checklist-audit.component';
import { LocationTrendPaComponent } from './location-trend-pa/location-trend-pa.component';




export const routes = [
    {path:'',component:StatisticsComponent,data:{breadcrumb:'Dashboard'}},
    {path:'statistics',component:StatisticsComponent,data:{breadcrumb:'Dashboard'}},
    {path:'agency-trend',component:AgencyTrendComponent,data:{breadcrumb:'Dashboard'}},
    {path:'model-trend-ca',component:ModelTrendCaComponent,data:{breadcrumb:'Dashboard'}},
    {path:'model-trend-pa',component:ModelTrendPaComponent,data:{breadcrumb:'Dashboard'}},
    { path:'parameter-audit',component:ParameterAuditComponent, loadChildren: './parameter-audit/parameter-audit.module#ParameterAuditModule', data: { breadcrumb: 'Dashboard' } },
    { path:'checklist-audit',component:ChecklistAuditComponent, loadChildren: './checklist-audit/checklist-audit.module#ChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
    {path:'time-series-ca',component:TimeSeriesCaComponent,data:{breadcrumb:'Dashboard'}},
    {path:'time-series-pa',component:TimeSeriesPaComponent,data:{breadcrumb:'Dashboard'}},
    {path:'location-trend-ca',component:LocationTrendCaComponent,data:{breadcrumb:'Dashboard'}},
    {path:'location-trend-pa',component:LocationTrendPaComponent,data:{breadcrumb:'Dashboard'}},
    {path:'quickview',component:QuickViewComponent,data:{breadcrumb:'Dashboard'}},
    {path:'ticketdistribution',component:TicketDistributionComponent,data:{breadcrumb:'Dashboard'}},
    {path:'unittrends',component:UnitTrendsComponent,data:{breadcrumb:'Dashboard'}},
    {path:'blocktrends',component:BlockTrendsComponent,data:{breadcrumb:'Dashboard'}},
    {path:'sectiontrends',component:SectionTrendsComponent,data:{breadcrumb:'Dashboard'}},
    {path:'rankingtable',component:RankingTableComponent,data:{breadcrumb:'Dashboard'}},
];

@NgModule({
  declarations: [StatisticsComponent,ParameterAuditComponent,RankingTableComponent,SectionTrendsComponent,BlockTrendsComponent, QuickViewComponent,TicketDistributionComponent,UnitTrendsComponent, AgencyTrendComponent, ModelTrendCaComponent, ModelTrendPaComponent, LocationTrendCaComponent, TimeSeriesPaComponent, TimeSeriesCaComponent, ChecklistAuditComponent, LocationTrendPaComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,
    ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: []
})
export class DashboardModule { }

