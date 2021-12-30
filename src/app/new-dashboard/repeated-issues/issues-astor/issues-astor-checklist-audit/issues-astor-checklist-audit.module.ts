import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AstorIssuesPqaComponent } from './astor-issues-pqa/astor-issues-pqa.component';
import { AstorIssuesBodyAuditComponent } from './astor-issues-body-audit/astor-issues-body-audit.component';
import { AstorIssuesPaintAuditComponent } from './astor-issues-paint-audit/astor-issues-paint-audit.component';

export const routes = [
  {path:'',component:AstorIssuesPqaComponent,data:{breadcrumb:'Dashboard'}},
  { path:'astor-issues-pqa',component:AstorIssuesPqaComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'astor-issues-body',component:AstorIssuesBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'astor-issues-paint',component:AstorIssuesPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [AstorIssuesPqaComponent, AstorIssuesBodyAuditComponent, AstorIssuesPaintAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class IssuesAstorChecklistAuditModule { }
