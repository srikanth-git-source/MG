import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { QaGlosterChecklistAuditComponent } from './qa-gloster-checklist-audit/qa-gloster-checklist-audit.component';
import { QaGlosterParameterAuditComponent } from './qa-gloster-parameter-audit/qa-gloster-parameter-audit.component';

export const routes = [
  {path:'',component:QaGlosterChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'qa-gloster-checklist-audit',component:QaGlosterChecklistAuditComponent, loadChildren: './qa-gloster-checklist-audit/qa-gloster-checklist-audit.module#QaGlosterChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
  { path:'qa-gloster-parameter-audit',component:QaGlosterParameterAuditComponent, loadChildren: './qa-gloster-parameter-audit/qa-gloster-parameter-audit.module#QaGlosterParameterAuditModule', data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [QaGlosterChecklistAuditComponent, QaGlosterParameterAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class QaGlosterModule { }
