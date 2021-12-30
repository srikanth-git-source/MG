import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssuesAstorChecklistAuditComponent } from './issues-astor-checklist-audit/issues-astor-checklist-audit.component';
import { IssuesAstorParameterAuditComponent } from './issues-astor-parameter-audit/issues-astor-parameter-audit.component';

export const routes = [
  {path:'',component:IssuesAstorChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'issues-astor-checklist-audit',component:IssuesAstorChecklistAuditComponent, loadChildren: './issues-astor-checklist-audit/issues-astor-checklist-audit.module#IssuesAstorChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
  { path:'issues-astor-parameter-audit',component:IssuesAstorParameterAuditComponent, loadChildren: './issues-astor-parameter-audit/issues-astor-parameter-audit.module#IssuesAstorParameterAuditModule', data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [IssuesAstorChecklistAuditComponent, IssuesAstorParameterAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class IssuesAstorModule { }
