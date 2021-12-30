import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaAstorCratingComponent } from './qa-astor-crating/qa-astor-crating.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { QaAstorDratingComponent } from './qa-astor-drating/qa-astor-drating.component';

export const routes = [
  {path:'',component:QaAstorCratingComponent,data:{breadcrumb:'Dashboard'}},
  { path:'astor-qa-crating',component:QaAstorCratingComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'astor-qa-drating',component:QaAstorDratingComponent, data: { breadcrumb: 'Dashboard' } },
  // { path:'astor-paint',component:AstorPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [QaAstorCratingComponent, QaAstorDratingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class DashboardQaParameterAuditModule { }
