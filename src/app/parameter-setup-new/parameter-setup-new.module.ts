import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ParameterSetupNewComponent } from './parameter-setup-new.component';

import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule, MatIconModule, MatPaginatorModule, MatSelectModule, MatTabsModule, MatTreeModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from 'primeng/primeng';
import { CategoryMasterComponent } from './category-master/category-master.component';
import { CdkTreeModule } from '@angular/cdk/tree';


export const routes = [
  {path:'',component:CategoryMasterComponent,data:{breadcrumb:'Audits'}},
  
];
@NgModule({
  declarations: [CategoryMasterComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,
    ChartModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,MatTreeModule,CdkTreeModule,MatIconModule ,MatSelectModule,MatCardModule,MatPaginatorModule ,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ParameterSetupNewModule { }
