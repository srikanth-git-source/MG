import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { QaZsevChecklistAuditComponent } from './qa-zsev-checklist-audit/qa-zsev-checklist-audit.component';
import { QaZsevParameterAuditComponent } from './qa-zsev-parameter-audit/qa-zsev-parameter-audit.component';

export const routes = [
  {path:'',component:QaZsevChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'qa-zsev-checklist-audit',component:QaZsevChecklistAuditComponent, loadChildren: './qa-zsev-checklist-audit/qa-zsev-checklist-audit.module#QaZsevChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
  { path:'qa-zsev-parameter-audit',component:QaZsevParameterAuditComponent, loadChildren: './qa-zsev-parameter-audit/qa-zsev-parameter-audit.module#QaZsevParameterAuditModule', data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [QaZsevChecklistAuditComponent, QaZsevParameterAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class QaZsevModule { }
