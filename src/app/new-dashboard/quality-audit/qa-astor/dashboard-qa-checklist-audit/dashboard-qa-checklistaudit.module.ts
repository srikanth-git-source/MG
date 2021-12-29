import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { QaAstorPqaComponent } from './qa-astor-pqa/qa-astor-pqa.component';

export const routes = [
  {path:'',component:QaAstorPqaComponent,data:{breadcrumb:'Dashboard'}},
  { path:'astor-qa-pqa',component:QaAstorPqaComponent, data: { breadcrumb: 'Dashboard' } },
  // { path:'astor-body',component:AstorBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  // { path:'astor-paint',component:AstorPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [QaAstorPqaComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class DashboardQaChecklistauditModule { }
