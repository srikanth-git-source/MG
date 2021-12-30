import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssuesHectorChecklistAuditComponent } from './issues-hector-checklist-audit/issues-hector-checklist-audit.component';
import { IssuesHectorParameterAuditComponent } from './issues-hector-parameter-audit/issues-hector-parameter-audit.component';


export const routes = [
  {path:'',component:IssuesHectorChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'issues-hector-checklist-audit',component:IssuesHectorChecklistAuditComponent, loadChildren: './issues-hector-checklist-audit/issues-hector-checklist-audit.module#IssuesHectorChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
  { path:'issues-hector-parameter-audit',component:IssuesHectorParameterAuditComponent, loadChildren: './issues-hector-parameter-audit/issues-hector-parameter-audit.module#IssuesHectorParameterAuditModule', data: { breadcrumb: 'Dashboard' } },
]


@NgModule({
  declarations: [IssuesHectorChecklistAuditComponent, IssuesHectorParameterAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class IssuesHectorModule { }
