import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { LookupOptionsComponent } from './lookup-options/lookup-options.component';
import { AddLookupDialogComponent } from './lookup-options/add-lookup-dialog/add-lookup-dialog.component';
import { MatDialogRef, MatTreeModule } from '@angular/material';
import { UsersComponent } from './users/users.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { SettingsComponent } from './settings/settings.component';
import { DragulaModule, DragulaService } from "ng2-dragula";
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CdkTreeModule } from '@angular/cdk/tree';
import { AdduserComponent } from './users/adduser/adduser.component';
import { PermissionsComponent } from './users/permissions/permissions.component';


export const routes = [
  { path: '', redirectTo: 'lookup-options', pathMatch: 'full' },
  { path: 'lookup-options', component: LookupOptionsComponent, data: { breadcrumb: 'Lookup Options' }},
  { path: 'users', component: UsersComponent, data: { breadcrumb: 'Manage Users' }},
  // { path: 'organisation', component: OrganisationsComponent, loadChildren: './organisations/organisations.module#OrganisationsModule', pathMatch: 'full', data: { breadcrumb: 'Organization Setup' } },
  { path: 'settings', component: SettingsComponent, pathMatch: 'full', data: { breadcrumb: 'Settings' } },
  {path:'permissions',component:PermissionsComponent,data:{breadcrumb:'Permissions'}},
];

@NgModule({
  imports: [
    CommonModule, ModalModule, SharedModule, DragulaModule,CdkTreeModule ,MatTreeModule,
    RouterModule.forChild(routes), DataTableModule,FormsModule,ReactiveFormsModule,TableModule,ConfirmationPopoverModule.forRoot({
      confirmButtonType: "danger", // set defaults here
    }),
    


  ], providers: [DragulaService],
  declarations: [
        LookupOptionsComponent,
        AddLookupDialogComponent,
        UsersComponent,
        OrganisationsComponent,
        SettingsComponent,
        AdduserComponent,
        PermissionsComponent,
        
         ],
  entryComponents:[
    AddLookupDialogComponent,AdduserComponent
  ]
})
export class AdminModule { }
