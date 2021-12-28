import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHectorChecklistAuditComponent } from './dashboard-hector-checklist-audit/dashboard-hector-checklist-audit.component';
import { DashboardHectorParameterAuditComponent } from './dashboard-hector-parameter-audit/dashboard-hector-parameter-audit.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';


export const routes = [
  {path:'',component:DashboardHectorChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  // { path:'astor',component:AstorComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'dashboard-hector-checklist-audit',component:DashboardHectorChecklistAuditComponent, loadChildren: './dashboard-hector-checklist-audit/dashboard-hector-checklist-audit.module#DashboardHectorChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
  { path:'dashboard-hector-parameter-audit',component:DashboardHectorParameterAuditComponent, loadChildren: './dashboard-hector-parameter-audit/dashboard-hector-parameter-audit.module#DashboardHectorParameterAuditModule', data: { breadcrumb: 'Dashboard' } },
]


@NgModule({
  declarations: [DashboardHectorChecklistAuditComponent,DashboardHectorParameterAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class HectorModule { }
