import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { QaHectorParameterAuditComponent } from './qa-hector-parameter-audit/qa-hector-parameter-audit.component';
import { QaHectorChecklistAuditComponent } from './qa-hector-checklist-audit/qa-hector-checklist-audit.component';

export const routes = [
  {path:'',component:QaHectorChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'qa-hector-checklist-audit',component:QaHectorChecklistAuditComponent, loadChildren: './qa-hector-checklist-audit/qa-hector-checklist-audit.module#QaHectorChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
  { path:'qa-hector-parameter-audit',component:QaHectorParameterAuditComponent, loadChildren: './qa-hector-parameter-audit/qa-hector-parameter-audit.module#QaHectorParameterAuditModule', data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [QaHectorParameterAuditComponent, QaHectorChecklistAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class QaHectorModule { }
