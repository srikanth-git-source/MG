import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ZsevQaPqaComponent } from './zsev-qa-pqa/zsev-qa-pqa.component';
import { ZsevQaBodyAuditComponent } from './zsev-qa-body-audit/zsev-qa-body-audit.component';
import { ZsevQaPaintAuditComponent } from './zsev-qa-paint-audit/zsev-qa-paint-audit.component';

export const routes = [
  {path:'',component:ZsevQaPqaComponent,data:{breadcrumb:'Dashboard'}},
  { path:'zsev-qa-pqa',component:ZsevQaPqaComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'zsev-qa-body',component:ZsevQaBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'zsev-qa-paint',component:ZsevQaPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [ZsevQaPqaComponent, ZsevQaBodyAuditComponent, ZsevQaPaintAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class QaZsevChecklistAuditModule { }
