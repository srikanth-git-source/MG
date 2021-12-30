import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GlosterQaCratingComponent } from './gloster-qa-crating/gloster-qa-crating.component';
import { GlosterQaDratingComponent } from './gloster-qa-drating/gloster-qa-drating.component';

export const routes = [
  {path:'',component:GlosterQaCratingComponent,data:{breadcrumb:'Dashboard'}},
  { path:'gloster-qa-crating',component:GlosterQaCratingComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'gloster-qa-drating',component:GlosterQaDratingComponent, data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [GlosterQaCratingComponent, GlosterQaDratingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class QaGlosterParameterAuditModule { }
