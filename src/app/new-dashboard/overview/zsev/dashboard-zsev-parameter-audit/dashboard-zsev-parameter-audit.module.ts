import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZsevCratingComponent } from './zsev-crating/zsev-crating.component';
import { ZsevDratingComponent } from './zsev-drating/zsev-drating.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes = [
  {path:'',component:ZsevCratingComponent,data:{breadcrumb:'Dashboard'}},
  { path:'zsev-Crating',component:ZsevCratingComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'zsev-Drating',component:ZsevDratingComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [ZsevCratingComponent, ZsevDratingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class DashboardZsevParameterAuditModule { }
