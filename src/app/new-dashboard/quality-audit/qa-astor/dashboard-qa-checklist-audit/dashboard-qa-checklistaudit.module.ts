import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { QaAstorPqaComponent } from './qa-astor-pqa/qa-astor-pqa.component';
import { QaAstorBodyAuditComponent } from './qa-astor-body-audit/qa-astor-body-audit.component';
import { QaAstorPaintAuditComponent } from './qa-astor-paint-audit/qa-astor-paint-audit.component';

export const routes = [
  {path:'',component:QaAstorPqaComponent,data:{breadcrumb:'Dashboard'}},
  { path:'astor-qa-pqa',component:QaAstorPqaComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'astor-qa-body',component:QaAstorBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'astor-qa-paint',component:QaAstorPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [QaAstorPqaComponent, QaAstorBodyAuditComponent, QaAstorPaintAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class DashboardQaChecklistauditModule { }
