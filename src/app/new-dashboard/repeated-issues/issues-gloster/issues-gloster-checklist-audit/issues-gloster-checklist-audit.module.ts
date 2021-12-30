import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssuesGlosterPqaComponent } from './issues-gloster-pqa/issues-gloster-pqa.component';
import { IssuesGlosterBodyAuditComponent } from './issues-gloster-body-audit/issues-gloster-body-audit.component';
import { IssuesGlosterPaintAuditComponent } from './issues-gloster-paint-audit/issues-gloster-paint-audit.component';

export const routes = [
  {path:'',component:IssuesGlosterPqaComponent,data:{breadcrumb:'Dashboard'}},
  { path:'gloster-issues-pqa',component:IssuesGlosterPqaComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'gloster-issues-body',component:IssuesGlosterBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'gloster-issues-paint',component:IssuesGlosterPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [IssuesGlosterPqaComponent, IssuesGlosterBodyAuditComponent, IssuesGlosterPaintAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class IssuesGlosterChecklistAuditModule { }
