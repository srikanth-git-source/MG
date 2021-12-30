import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssuesZsevChecklistAuditComponent } from './issues-zsev-checklist-audit/issues-zsev-checklist-audit.component';
import { IssuesZsevParameterAuditComponent } from './issues-zsev-parameter-audit/issues-zsev-parameter-audit.component';
 
export const routes = [
  {path:'',component:IssuesZsevChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'issues-zsev-checklist-audit',component:IssuesZsevChecklistAuditComponent, loadChildren: './issues-zsev-checklist-audit/issues-zsev-checklist-audit.module#IssuesZsevChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
  { path:'issues-zsev-parameter-audit',component:IssuesZsevParameterAuditComponent, loadChildren: './issues-zsev-parameter-audit/issues-zsev-parameter-audit.module#IssuesZsevParameterAuditModule', data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [IssuesZsevChecklistAuditComponent, IssuesZsevParameterAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class IssuesZsevModule { }
