import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssuesGlosterChecklistAuditComponent } from './issues-gloster-checklist-audit/issues-gloster-checklist-audit.component';
import { IssuesGlosterParameterAuditComponent } from './issues-gloster-parameter-audit/issues-gloster-parameter-audit.component';

export const routes = [
  {path:'',component:IssuesGlosterChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'issues-gloster-checklist-audit',component:IssuesGlosterChecklistAuditComponent, loadChildren: './issues-gloster-checklist-audit/issues-gloster-checklist-audit.module#IssuesGlosterChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
  { path:'issues-gloster-parameter-audit',component:IssuesGlosterParameterAuditComponent, loadChildren: './issues-gloster-parameter-audit/issues-gloster-parameter-audit.module#IssuesGlosterParameterAuditModule', data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [IssuesGlosterChecklistAuditComponent, IssuesGlosterParameterAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class IssuesGlosterModule { }
 