import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaAstorCratingComponent } from './qa-astor-crating/qa-astor-crating.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgApexchartsModule } from 'ng-apexcharts';

export const routes = [
  {path:'',component:QaAstorCratingComponent,data:{breadcrumb:'Dashboard'}},
  { path:'astor-qa-crating',component:QaAstorCratingComponent, data: { breadcrumb: 'Dashboard' } },
  // { path:'astor-body',component:AstorBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  // { path:'astor-paint',component:AstorPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [QaAstorCratingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class DashboardQaParameterAuditModule { }
