import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstorComponent } from './astor/astor.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AstorModule } from './astor/astor.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OverviewComponent } from './overview.component';
import { HectorComponent } from './hector/hector.component';
import { HectorModule } from './hector/hector.module';
import { GlosterComponent } from './gloster/gloster.component';
import { GlosterModule } from './gloster/gloster.module';
import { ZsevComponent } from './zsev/zsev.component';
import { ZsevModule } from './zsev/zsev.module';


export const routes = [
  {path:'',component:OverviewComponent,data:{breadcrumb:'Dashboard'}},
  { path:'astor',component:AstorComponent, loadChildren: './astor/astor.module#AstorModule', data: { breadcrumb: 'Dashboard' } },
  { path:'hector',component:HectorComponent, loadChildren: './hector/hector.module#HectorModule', data: { breadcrumb: 'Dashboard' } },
  { path:'gloster',component:GlosterComponent, loadChildren: './gloster/gloster.module#GlosterModule', data: { breadcrumb: 'Dashboard' } },
  { path:'zsev',component:ZsevComponent, loadChildren: './zsev/zsev.module#ZsevModule', data: { breadcrumb: 'Dashboard' } },


]



@NgModule({
  declarations: [OverviewComponent,AstorComponent, HectorComponent, GlosterComponent, ZsevComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,AstorModule,NgApexchartsModule,HectorModule,GlosterModule,ZsevModule
  ]
})
export class OverviewModule { }
