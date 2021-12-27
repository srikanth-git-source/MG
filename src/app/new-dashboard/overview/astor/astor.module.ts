import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstorComponent } from './astor.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardChecklistAuditComponent } from './dashboard-checklist-audit/dashboard-checklist-audit.component';
import { NgApexchartsModule } from 'ng-apexcharts';


export const routes = [
  {path:'',component:DashboardChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  // { path:'astor',component:AstorComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'dashboard-checklist-audit',component:DashboardChecklistAuditComponent, loadChildren: './dashboard-checklist-audit/dashboard-checklist-audit.module#DashboardChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
]



@NgModule({
  declarations: [ DashboardChecklistAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class AstorModule { }
