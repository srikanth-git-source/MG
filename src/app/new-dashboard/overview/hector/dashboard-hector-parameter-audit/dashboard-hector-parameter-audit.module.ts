import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HectorCratingComponent } from './hector-crating/hector-crating.component';
import { HectorDratingComponent } from './hector-drating/hector-drating.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes = [
  {path:'',component:HectorCratingComponent,data:{breadcrumb:'Dashboard'}},
  { path:'hector-Crating',component:HectorCratingComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'hector-Drating',component:HectorDratingComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [HectorCratingComponent, HectorDratingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class DashboardHectorParameterAuditModule { }
