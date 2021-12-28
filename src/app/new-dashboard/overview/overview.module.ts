import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstorComponent } from './astor/astor.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AstorModule } from './astor/astor.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OverviewComponent } from './overview.component';


export const routes = [
  {path:'',component:AstorComponent,data:{breadcrumb:'Dashboard'}},
  { path:'astor',component:AstorComponent, loadChildren: './astor/astor.module#AstorModule', data: { breadcrumb: 'Dashboard' } },
]



@NgModule({
  declarations: [OverviewComponent,AstorComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,AstorModule,NgApexchartsModule
  ]
})
export class OverviewModule { }
