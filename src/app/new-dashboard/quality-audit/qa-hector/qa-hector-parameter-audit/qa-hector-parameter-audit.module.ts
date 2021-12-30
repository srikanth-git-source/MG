import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HectorQaCratingComponent } from './hector-qa-crating/hector-qa-crating.component';
import { HectorQaDratingComponent } from './hector-qa-drating/hector-qa-drating.component';

export const routes = [
  {path:'',component:HectorQaCratingComponent,data:{breadcrumb:'Dashboard'}},
  { path:'hector-qa-crating',component:HectorQaCratingComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'hector-qa-drating',component:HectorQaDratingComponent, data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [HectorQaCratingComponent, HectorQaDratingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class QaHectorParameterAuditModule { }
