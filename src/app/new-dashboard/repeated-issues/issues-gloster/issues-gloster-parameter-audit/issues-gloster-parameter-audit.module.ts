import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssuesCratingComponent } from './issues-crating/issues-crating.component';
import { IssuesDratingComponent } from './issues-drating/issues-drating.component';

export const routes = [
  {path:'',component:IssuesCratingComponent,data:{breadcrumb:'Dashboard'}},
  { path:'gloster-issues-crating',component:IssuesCratingComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'gloster-issues-drating',component:IssuesDratingComponent, data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [IssuesCratingComponent, IssuesDratingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class IssuesGlosterParameterAuditModule { }
