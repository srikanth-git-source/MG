import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardChecklistAuditComponent } from './dashboard-checklist-audit.component';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes = [
  {path:'',component:DashboardChecklistAuditComponent,data:{breadcrumb:'Dashboard'}},
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class DashboardChecklistAuditModule { }
