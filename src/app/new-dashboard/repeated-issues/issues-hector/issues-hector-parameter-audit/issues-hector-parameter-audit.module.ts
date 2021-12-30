import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssuesHectorCratingComponent } from './issues-hector-crating/issues-hector-crating.component';
import { IssuesHectorDratingComponent } from './issues-hector-drating/issues-hector-drating.component';

export const routes = [
  {path:'',component:IssuesHectorCratingComponent,data:{breadcrumb:'Dashboard'}},
  { path:'hector-issues-crating',component:IssuesHectorCratingComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'hector-issues-drating',component:IssuesHectorDratingComponent, data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [IssuesHectorCratingComponent, IssuesHectorDratingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class IssuesHectorParameterAuditModule { }
