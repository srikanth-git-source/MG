import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardGlosterChecklistAuditComponent } from './dashboard-gloster-checklist-audit/dashboard-gloster-checklist-audit.component';
import { DashboardGlosterParameterAuditComponent } from './dashboard-gloster-parameter-audit/dashboard-gloster-parameter-audit.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes = [
  {path:'',component:DashboardGlosterChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'dashboard-gloster-checklist-audit',component:DashboardGlosterChecklistAuditComponent, loadChildren: './dashboard-gloster-checklist-audit/dashboard-gloster-checklist-audit.module#DashboardGlosterChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
  { path:'dashboard-gloster-parameter-audit',component:DashboardGlosterParameterAuditComponent, loadChildren: './dashboard-gloster-parameter-audit/dashboard-gloster-parameter-audit.module#DashboardGlosterParameterAuditModule', data: { breadcrumb: 'Dashboard' } },
]


@NgModule({
  declarations: [DashboardGlosterChecklistAuditComponent,DashboardGlosterParameterAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class GlosterModule { }
