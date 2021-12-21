import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMasterComponent } from './category-master/category-master.component';
import { MeasurementMasterComponent } from './measurement-master/measurement-master.component';
import { CheckpointMasterComponent } from './checkpoint-master/checkpoint-master.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatPaginatorModule, MatSelectModule, MatTabsModule, MatTreeModule } from '@angular/material';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ModalModule } from 'ngx-bootstrap';
import { DataTableModule } from 'angular2-datatable';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ChartModule } from 'primeng/primeng';
import { AddCategoryComponent } from './category-master/add-category/add-category.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { ChartsModule } from 'ng2-charts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../shared/shared.module';
import { AddCheckpointComponent } from './checkpoint-master/add-checkpoint/add-checkpoint.component';
import { AddMeasurementComponent } from './measurement-master/add-measurement/add-measurement.component';
export const routes = [
  { path: '', redirectTo: 'category-master', pathMatch: 'full' },
  { path: 'category-master', component: CategoryMasterComponent, data: { breadcrumb: 'Audit Bench-Parameters' }},
  { path: 'checkpoint-master', component: CheckpointMasterComponent, data: { breadcrumb: 'Audit Bench-Parameters' }},
  { path: 'measurement-master', component: MeasurementMasterComponent, data: { breadcrumb: 'Audit Bench-Parameters' }},
 
];

@NgModule({
  declarations: [CategoryMasterComponent, MeasurementMasterComponent, CheckpointMasterComponent, AddCategoryComponent, AddCheckpointComponent, AddMeasurementComponent],
  imports: [
     ModalModule,
    RouterModule.forChild(routes), DataTableModule,TableModule,MatDialogModule ,
    MatTreeModule,CdkTreeModule,MatIconModule ,MatSelectModule,MatCardModule,MatPaginatorModule ,
    CommonModule,NgxChartsModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,
    ChartModule,OwlDateTimeModule,OwlNativeDateTimeModule,
  ],
  entryComponents:[AddCategoryComponent,AddCheckpointComponent,AddMeasurementComponent]
})
export class ParameterSetupModule { }
