import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZsevBodyAuditComponent } from './zsev-body-audit/zsev-body-audit.component';
import { ZsevPaintAuditComponent } from './zsev-paint-audit/zsev-paint-audit.component';
import { ZsevPaqAuditComponent } from './zsev-paq-audit/zsev-paq-audit.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes = [
  {path:'',component:ZsevPaqAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'zsev-pqa',component:ZsevPaqAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'zsev-body',component:ZsevBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'zsev-paint',component:ZsevPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]


@NgModule({
  declarations: [ZsevBodyAuditComponent, ZsevPaintAuditComponent, ZsevPaqAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class DashboardZsevChecklistAuditModule { }
