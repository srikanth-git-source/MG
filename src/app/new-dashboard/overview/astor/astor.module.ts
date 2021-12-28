import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstorComponent } from './astor.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardChecklistAuditComponent } from './dashboard-checklist-audit/dashboard-checklist-audit.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardParameterAuditComponent } from './dashboard-parameter-audit/dashboard-parameter-audit.component';
import { ParameterDashboardComponent } from 'src/app/parameter-dashboard/parameter-dashboard.component';


export const routes = [
  {path:'',component:DashboardChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  // { path:'astor',component:AstorComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'dashboard-checklist-audit',component:DashboardChecklistAuditComponent, loadChildren: './dashboard-checklist-audit/dashboard-checklist-audit.module#DashboardChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
  { path:'astor-parameter-audit',component:DashboardParameterAuditComponent, loadChildren: './dashboard-parameter-audit/astor-parameter-audit.module#AstorParameterAuditModule', data: { breadcrumb: 'Dashboard' } },
]



@NgModule({
  declarations: [ DashboardChecklistAuditComponent, DashboardParameterAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class AstorModule { }
