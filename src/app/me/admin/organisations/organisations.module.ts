import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location/location.component';
import { DepartmentComponent } from './department/department.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTreeModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { AgencyComponent } from './agency/agency.component';
import { AddAgencyComponent } from './agency/add-agency/add-agency.component';

export const routes = [
  { path: '',  pathMatch: 'full' },
  { path: 'location', component: LocationComponent, data: { breadcrumb: 'Organizations' }},
  // { path: 'department', component: DepartmentComponent, data: { breadcrumb: 'Lookup Options' }},
  { path: 'agency', component: AgencyComponent, data: { breadcrumb: 'Organizations' }},
  
];
@NgModule({
  declarations: [LocationComponent, DepartmentComponent, AddAgencyComponent, AddLocationComponent, AddDepartmentComponent, AgencyComponent],
  imports: [
    CommonModule, ModalModule, SharedModule, DragulaModule,CdkTreeModule ,MatTreeModule,
    RouterModule.forChild(routes), DataTableModule,FormsModule,ReactiveFormsModule,TableModule,ConfirmationPopoverModule.forRoot({
      confirmButtonType: "danger", // set defaults here
    }),
  ], providers: [DragulaService], entryComponents:[AddLocationComponent,AddAgencyComponent,AddDepartmentComponent]
})
export class OrganisationsModule { } 
