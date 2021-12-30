import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GlosterQaPqaComponent } from './gloster-qa-pqa/gloster-qa-pqa.component';
import { GlosterQaBodyAuditComponent } from './gloster-qa-body-audit/gloster-qa-body-audit.component';
import { GlosterQaPaintAuditComponent } from './gloster-qa-paint-audit/gloster-qa-paint-audit.component';

export const routes = [
  {path:'',component:GlosterQaPqaComponent,data:{breadcrumb:'Dashboard'}},
  { path:'gloster-qa-pqa',component:GlosterQaPqaComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'gloster-qa-body',component:GlosterQaBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'gloster-qa-paint',component:GlosterQaPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [GlosterQaPqaComponent, GlosterQaBodyAuditComponent, GlosterQaPaintAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class QaGlosterChecklistAuditModule { }
