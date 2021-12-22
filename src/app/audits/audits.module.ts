import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistAuditComponent } from './checklist-audit/checklist-audit.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ChartsModule } from 'ng2-charts';
import { ParameterAuditComponent } from './parameter-audit/parameter-audit.component';
import { SharedModule } from '../shared/shared.module';
import { ManageGridComponent } from './parameter-audit/manage-grid/manage-grid.component';
import { AddparameterauditComponent } from './parameter-audit/addparameteraudit/addparameteraudit.component';
import { AddchecklistauditComponent } from './checklist-audit/addchecklistaudit/addchecklistaudit.component';

export const routes = [
  {path:'',component:ChecklistAuditComponent,data:{breadcrumb:'Audits'}},
  {path:'checklistaudit',component:ChecklistAuditComponent,data:{breadcrumb:'Audits'}},
  {path:'parameteraudit',component:ParameterAuditComponent,data:{breadcrumb:'Audits'}},
];



@NgModule({
  declarations: [ChecklistAuditComponent, ParameterAuditComponent, ManageGridComponent, AddparameterauditComponent, AddchecklistauditComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule, MatTabsModule, ChartModule, NgMultiSelectDropDownModule.forRoot(),
    AgmJsMarkerClustererModule, AgmCoreModule,
    ChartModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule,
  ],entryComponents: [ManageGridComponent,AddparameterauditComponent,AddchecklistauditComponent]
})
export class AuditsModule { }
