import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstorComponent } from './astor.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChecklistAuditComponent } from './checklist-audit/checklist-audit.component';
import { NgApexchartsModule } from 'ng-apexcharts';


export const routes = [
  {path:'',component:AstorComponent,data:{breadcrumb:'Dashboard'}},
  { path:'astor',component:AstorComponent, data: { breadcrumb: 'Dashboard' } },
  { path:'checklist-audit',component:ChecklistAuditComponent, loadChildren: './checklist-audit/checklist-audit.module#ChecklistAuditModule', data: { breadcrumb: 'Dashboard' } },
]



@NgModule({
  declarations: [ChecklistAuditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class AstorModule { }
