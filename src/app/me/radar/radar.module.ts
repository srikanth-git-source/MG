import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';


export const routes = [
  {path:'',component:StatisticsComponent,data:{breadcrumb:'Dashboard'}},
  {path:'statistics',component:StatisticsComponent,data:{breadcrumb:'Dashboard'}},
 
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RadarModule { }
