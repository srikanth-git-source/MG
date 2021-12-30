import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssuesAsstorCratingComponent } from './issues-asstor-crating/issues-asstor-crating.component';
import { IssuesAsstorDratingComponent } from './issues-asstor-drating/issues-asstor-drating.component';

export const routes = [
  {path:'',component:IssuesAsstorCratingComponent,data:{breadcrumb:'Dashboard'}},
  { path:'astor-issues-crating',component:IssuesAsstorCratingComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'astor-issues-drating',component:IssuesAsstorDratingComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [IssuesAsstorCratingComponent, IssuesAsstorDratingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class IssuesAstorParameterAuditModule { }
