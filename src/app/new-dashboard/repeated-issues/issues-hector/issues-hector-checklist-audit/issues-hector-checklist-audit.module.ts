import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssuesHectorPqaComponent } from './issues-hector-pqa/issues-hector-pqa.component';
import { IssuesHectorBodyAuditComponent } from './issues-hector-body-audit/issues-hector-body-audit.component';
import { IssuesHectorPaintAuditComponent } from './issues-hector-paint-audit/issues-hector-paint-audit.component';

export const routes = [
  {path:'',component:IssuesHectorPqaComponent,data:{breadcrumb:'Dashboard'}},
  { path:'hector-issues-pqa',component:IssuesHectorPqaComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'hector-issues-body',component:IssuesHectorBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'hector-issues-paint',component:IssuesHectorPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [IssuesHectorPqaComponent, IssuesHectorBodyAuditComponent, IssuesHectorPaintAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class IssuesHectorChecklistAuditModule { }
