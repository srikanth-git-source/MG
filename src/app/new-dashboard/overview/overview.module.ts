import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstorComponent } from './astor/astor.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AstorModule } from './astor/astor.module';
import { NgApexchartsModule } from 'ng-apexcharts';


export const routes = [
  {path:'',component:AstorComponent,data:{breadcrumb:'Dashboard'}},
  { path:'astor', loadChildren: './astor/astor.module#AstorModule', data: { breadcrumb: 'Dashboard' } },
]



@NgModule({
  declarations: [AstorComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,AstorModule,NgApexchartsModule
  ]
})
export class OverviewModule { }
