import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardZsevChecklistAuditComponent } from './dashboard-zsev-checklist-audit/dashboard-zsev-checklist-audit.component';
import { DashboardZsevParameterAuditComponent } from './dashboard-zsev-parameter-audit/dashboard-zsev-parameter-audit.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes = [
  {path:'',component:DashboardZsevChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'dashboard-zsev-checklist-audit',component:DashboardZsevChecklistAuditComponent, loadChildren: './dashboard-zsev-checklist-audit/dashboard-zsev-checklist-audit.module#DashboardZsevChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
  { path:'dashboard-zsev-parameter-audit',component:DashboardZsevParameterAuditComponent, loadChildren: './dashboard-zsev-parameter-audit/dashboard-zsev-parameter-audit.module#DashboardZsevParameterAuditModule', data: { breadcrumb: 'Dashboard' } },
]


@NgModule({
  declarations: [DashboardZsevChecklistAuditComponent, DashboardZsevParameterAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class ZsevModule { }
