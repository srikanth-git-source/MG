import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardChecklistAuditComponent } from './dashboard-checklist-audit.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AstorPaqAuditComponent } from './astor-paq-audit/astor-paq-audit.component';
import { AstorBodyAuditComponent } from './astor-body-audit/astor-body-audit.component';
import { AstorPaintAuditComponent } from './astor-paint-audit/astor-paint-audit.component';

export const routes = [
  {path:'',component:AstorPaqAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'astor-pqa',component:AstorPaqAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'astor-body',component:AstorBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'astor-paint',component:AstorPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [AstorPaqAuditComponent, AstorBodyAuditComponent, AstorPaintAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class DashboardChecklistAuditModule { }
