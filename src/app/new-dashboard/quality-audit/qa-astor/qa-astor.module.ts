import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardQaChecklistAuditComponent } from './dashboard-qa-checklist-audit/dashboard-qa-checklist-audit.component';
import { DashboardQaParameterAuditComponent } from './dashboard-qa-parameter-audit/dashboard-qa-parameter-audit.component';

export const routes = [
  {path:'',component:DashboardQaChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'dashboard-qa-checklist-audit',component:DashboardQaChecklistAuditComponent, loadChildren: './dashboard-qa-checklist-audit/dashboard-qa-checklistaudit.module#DashboardQaChecklistauditModule', data: { breadcrumb: 'Dashboard' } },
  { path:'dashboard-qa-parameter-audit',component:DashboardQaParameterAuditComponent, loadChildren: './dashboard-qa-parameter-audit/dashboard-qa-parameter-audit.module#DashboardQaParameterAuditModule', data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [DashboardQaChecklistAuditComponent, DashboardQaParameterAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class QAAstorModule { }
