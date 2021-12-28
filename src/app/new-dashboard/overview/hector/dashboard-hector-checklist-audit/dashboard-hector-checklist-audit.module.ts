import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HectorBodyAuditComponent } from './hector-body-audit/hector-body-audit.component';
import { HectorPaintAuditComponent } from './hector-paint-audit/hector-paint-audit.component';
import { HectorPaqAuditComponent } from './hector-paq-audit/hector-paq-audit.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes = [
  {path:'',component:HectorPaqAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'hector-pqa',component:HectorPaqAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'hector-body',component:HectorBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'hector-paint',component:HectorPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]


@NgModule({
  declarations: [HectorBodyAuditComponent, HectorPaintAuditComponent, HectorPaqAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class DashboardHectorChecklistAuditModule { }
