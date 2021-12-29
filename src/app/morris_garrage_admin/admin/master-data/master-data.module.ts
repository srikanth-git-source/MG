import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


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
import { ModelComponent } from './model/model.component';


import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

import { MatTabsModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ChartModule } from 'angular-highcharts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ChartsModule } from 'ng2-charts';
import { AddModelComponent } from './model/add-model/add-model.component';
import { VariantComponent } from './variant/variant.component';
import { InteriorTrimComponent } from './interior-trim/interior-trim.component';
import { ColorComponent } from './color/color.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { FuelTypeComponent } from './fuel-type/fuel-type.component';
import { AddColorComponent } from './color/add-color/add-color.component';
import { AddFuelTypeComponent } from './fuel-type/add-fuel-type/add-fuel-type.component';
import { AddInteriorTrimComponent } from './interior-trim/add-interior-trim/add-interior-trim.component';
import { AddTransmissionComponent } from './transmission/add-transmission/add-transmission.component';
import { AddVariantComponent } from './variant/add-variant/add-variant.component';






export const routes = [
  {path:'',component:ModelComponent,data:{breadcrumb:'Master Data'}},
  { path: 'model', component: ModelComponent, data: { breadcrumb: 'Master Data' }},
  { path: 'variant', component: VariantComponent, data: { breadcrumb: 'Master Data' }},
  { path: 'interior-trim', component: InteriorTrimComponent, data: { breadcrumb: 'Master Data' }},
  { path: 'colour', component: ColorComponent, data: { breadcrumb: 'Master Data' }},
  { path: 'transmission', component: TransmissionComponent, data: { breadcrumb: 'Master Data' }},
  { path: 'fuel-type', component: FuelTypeComponent, data: { breadcrumb: 'Master Data' }},
];

@NgModule({
  declarations: [ModelComponent, AddModelComponent, VariantComponent, InteriorTrimComponent, ColorComponent, TransmissionComponent, FuelTypeComponent, AddVariantComponent, AddTransmissionComponent, AddInteriorTrimComponent, AddFuelTypeComponent, AddColorComponent],
  imports: [
     CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,
    ChartModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule,ConfirmationPopoverModule.forRoot({
      confirmButtonType: "danger", // set defaults here
    }),
  ], providers: [DragulaService], entryComponents:[AddModelComponent,AddVariantComponent, AddTransmissionComponent, AddInteriorTrimComponent, AddFuelTypeComponent, AddColorComponent]
})
export class MasterDataModule { }
