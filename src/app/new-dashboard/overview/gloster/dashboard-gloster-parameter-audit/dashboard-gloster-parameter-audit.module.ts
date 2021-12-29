import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlosterCratingComponent } from './gloster-crating/gloster-crating.component';
import { GlosterDratingComponent } from './gloster-drating/gloster-drating.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes = [
  {path:'',component:GlosterCratingComponent,data:{breadcrumb:'Dashboard'}},
  { path:'gloster-Crating',component:GlosterCratingComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'gloster-Drating',component:GlosterDratingComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [GlosterCratingComponent, GlosterDratingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class DashboardGlosterParameterAuditModule { }
