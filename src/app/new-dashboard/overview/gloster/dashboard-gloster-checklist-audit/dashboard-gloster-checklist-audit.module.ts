import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlosterPaqAuditComponent } from './gloster-paq-audit/gloster-paq-audit.component';
import { GlosterBodyAuditComponent } from './gloster-body-audit/gloster-body-audit.component';
import { GlosterPaintAuditComponent } from './gloster-paint-audit/gloster-paint-audit.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes = [
  {path:'',component:GlosterPaqAuditComponent,data:{breadcrumb:'Dashboard'}},
  { path:'gloster-pqa',component:GlosterPaqAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'gloster-body',component:GlosterBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'gloster-paint',component:GlosterPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]


@NgModule({
  declarations: [GlosterPaqAuditComponent,GlosterBodyAuditComponent,GlosterPaintAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class DashboardGlosterChecklistAuditModule { }
