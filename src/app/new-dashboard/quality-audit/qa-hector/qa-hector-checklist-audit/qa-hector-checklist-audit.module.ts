import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HectorQaBodyAuditComponent } from './hector-qa-body-audit/hector-qa-body-audit.component';
import { HectorQaPqaComponent } from './hector-qa-pqa/hector-qa-pqa.component';
import { HectorQaPaintAuditComponent } from './hector-qa-paint-audit/hector-qa-paint-audit.component';

export const routes = [
  {path:'',component:HectorQaPqaComponent,data:{breadcrumb:'Dashboard'}},
  { path:'hector-qa-pqa',component:HectorQaPqaComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'hector-qa-body',component:HectorQaBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'hector-qa-paint',component:HectorQaPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [HectorQaPqaComponent,HectorQaBodyAuditComponent,HectorQaPaintAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class QaHectorChecklistAuditModule { }
