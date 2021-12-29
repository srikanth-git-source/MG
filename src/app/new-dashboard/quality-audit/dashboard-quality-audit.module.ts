import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { QAAstorComponent } from './qa-astor/qa-astor.component';


export const routes = [
  {path:'',component:QAAstorComponent,data:{breadcrumb:'Dashboard'}},
  { path:'qa-astor',component:QAAstorComponent, loadChildren: './qa-astor/qa-astor.module#QAAstorModule', data: { breadcrumb: 'Dashboard' } },
  // { path:'hector',component:HectorComponent, loadChildren: './hector/hector.module#HectorModule', data: { breadcrumb: 'Dashboard' } },
  // { path:'gloster',component:GlosterComponent, loadChildren: './gloster/gloster.module#GlosterModule', data: { breadcrumb: 'Dashboard' } },
  // { path:'zsev',component:ZsevComponent, loadChildren: './zsev/zsev.module#ZsevModule', data: { breadcrumb: 'Dashboard' } },


]

@NgModule({
  declarations: [QAAstorComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class DashboardQualityAuditModule { }
