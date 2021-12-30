import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssuesZsevPqaComponent } from './issues-zsev-pqa/issues-zsev-pqa.component';
import { IssuesZsevBodyAuditComponent } from './issues-zsev-body-audit/issues-zsev-body-audit.component';
import { IssuesZsevPaintAuditComponent } from './issues-zsev-paint-audit/issues-zsev-paint-audit.component';

export const routes = [
  {path:'',component:IssuesZsevPqaComponent,data:{breadcrumb:'Dashboard'}},
  { path:'zsev-issues-pqa',component:IssuesZsevPqaComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'zsev-issues-body',component:IssuesZsevBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'zsev-issues-paint',component:IssuesZsevPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [IssuesZsevPqaComponent, IssuesZsevBodyAuditComponent, IssuesZsevPaintAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class IssuesZsevChecklistAuditModule { }
