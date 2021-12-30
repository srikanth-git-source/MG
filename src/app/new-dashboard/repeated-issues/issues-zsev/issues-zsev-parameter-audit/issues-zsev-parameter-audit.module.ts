import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssuesZsevCratingComponent } from './issues-zsev-crating/issues-zsev-crating.component';
import { IssuesZsevDratingComponent } from './issues-zsev-drating/issues-zsev-drating.component';

export const routes = [
  {path:'',component:IssuesZsevCratingComponent,data:{breadcrumb:'Dashboard'}},
  { path:'zsev-issues-crating',component:IssuesZsevCratingComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'zsev-issues-drating',component:IssuesZsevDratingComponent, data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [IssuesZsevCratingComponent, IssuesZsevDratingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class IssuesZsevParameterAuditModule { }
