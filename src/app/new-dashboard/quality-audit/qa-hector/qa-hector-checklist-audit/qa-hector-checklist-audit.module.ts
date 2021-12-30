import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HectorQaBodyAuditComponent } from './hector-qa-body-audit/hector-qa-body-audit.component';
import { HectorQaPqaComponent } from './hector-qa-pqa/hector-qa-pqa.component';
import { HectorPaintAuditComponent } from 'src/app/new-dashboard/overview/hector/dashboard-hector-checklist-audit/hector-paint-audit/hector-paint-audit.component';
import { HectorBodyAuditComponent } from 'src/app/new-dashboard/overview/hector/dashboard-hector-checklist-audit/hector-body-audit/hector-body-audit.component';

export const routes = [
  {path:'',component:HectorQaPqaComponent,data:{breadcrumb:'Dashboard'}},
  { path:'hector-qa-pqa',component:HectorQaPqaComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'hector-qa-body',component:HectorBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'hector-qa-paint',component:HectorPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [HectorQaPqaComponent,HectorBodyAuditComponent,HectorPaintAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class QaHectorChecklistAuditModule { }
