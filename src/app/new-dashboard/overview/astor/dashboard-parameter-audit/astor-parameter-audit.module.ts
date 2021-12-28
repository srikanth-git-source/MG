import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstorCratingComponent } from './astor-crating/astor-crating.component';
import { AstorDratingComponent } from './astor-drating/astor-drating.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes = [
  {path:'',component:AstorCratingComponent,data:{breadcrumb:'Dashboard'}},
  { path:'astor-Crating',component:AstorCratingComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'astor-Drating',component:AstorDratingComponent, data: { breadcrumb: 'Dashboard' } },
  
]


@NgModule({
  declarations: [AstorCratingComponent, AstorDratingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgApexchartsModule
  ]
})
export class AstorParameterAuditModule { }
