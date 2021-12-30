import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ZsevQaCratingComponent } from './zsev-qa-crating/zsev-qa-crating.component';
import { ZsevQaDratingComponent } from './zsev-qa-drating/zsev-qa-drating.component';

export const routes = [
  {path:'',component:ZsevQaCratingComponent,data:{breadcrumb:'Dashboard'}},
  { path:'zsev-qa-crating',component:ZsevQaCratingComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'zsev-qa-drating',component:ZsevQaDratingComponent, data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [ZsevQaCratingComponent, ZsevQaDratingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class QaZsevParameterAuditModule { }
