import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssuesAstorComponent } from './issues-astor/issues-astor.component';
import { IssuesGlosterComponent } from './issues-gloster/issues-gloster.component';
import { IssuesHectorComponent } from './issues-hector/issues-hector.component';
import { IssuesZsevComponent } from './issues-zsev/issues-zsev.component';

export const routes = [
  {path:'',component:IssuesAstorComponent,data:{breadcrumb:'Dashboard'}},
  { path:'issues-astor',component:IssuesAstorComponent, loadChildren: './issues-astor/issues-astor.module#IssuesAstorModule', data: { breadcrumb: 'Dashboard' } },
  { path:'issues-hector',component:IssuesHectorComponent, loadChildren: './issues-hector/issues-hector.module#IssuesHectorModule', data: { breadcrumb: 'Dashboard' } },
  { path:'issues-gloster',component:IssuesGlosterComponent, loadChildren: './issues-gloster/issues-gloster.module#IssuesGlosterModule', data: { breadcrumb: 'Dashboard' } },
  { path:'issues-zsev',component:IssuesZsevComponent, loadChildren: './issues-zsev/issues-zsev.module#IssuesZsevModule', data: { breadcrumb: 'Dashboard' } },
]

@NgModule({
  declarations: [IssuesAstorComponent, IssuesGlosterComponent, IssuesHectorComponent, IssuesZsevComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class DashboardRepeatedIssuesModule { }
