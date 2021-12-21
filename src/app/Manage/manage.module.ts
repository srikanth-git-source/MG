import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ConfirmationPopoverModule } from "angular-confirmation-popover";
import { DataTableModule } from "angular2-datatable";
import { ModalModule } from "ngx-bootstrap";
import { TableModule } from "primeng/table";
import { SharedModule } from "src/app/shared/shared.module";
import { CustomersComponent } from "./customers/customers.component";
import { InspectionsComponent } from "./inspections/inspections.component";
import { InstructionsComponent } from "./instructions/instructions.component";
import { PartsMasterComponent } from "./parts-master/parts-master.component";
import { TrainingMaterialComponent } from "./training-material/training-material.component";
import { GridColumnComponent } from './customers/grid-column/grid-column.component';
import { AddClientComponent } from './customers/add-client/add-client.component';
import { AddInspectionRecordComponent } from './inspections/add-inspection-record/add-inspection-record.component';
import { AddPartsComponent } from './parts-master/add-parts/add-parts.component';
import {MatChipsModule} from '@angular/material/chips';
import { AddBulkRecordComponent } from './inspections/add-bulk-record/add-bulk-record.component';


export const routes = [
    { path: '', redirectTo: 'mjobs', pathMatch: 'full' },
    {path: 'minspection', component: InspectionsComponent,  pathMatch: 'full', data: { breadcrumb: 'Inspection' }}, 
    {path: 'mcustomers', component: CustomersComponent,  pathMatch: 'full', data: { breadcrumb: 'Customers' }},
    {path: 'mparts', component: PartsMasterComponent,  pathMatch: 'full', data: { breadcrumb: 'Parts Master' }},   
    {path: 'mtraining', component: TrainingMaterialComponent,  pathMatch: 'full', data: { breadcrumb: 'Training Material' }},   
    {path: 'minstructions', component: InstructionsComponent,  pathMatch: 'full', data: { breadcrumb: 'Instructions' }},   
];

@NgModule({
    declarations: [ InspectionsComponent , CustomersComponent,PartsMasterComponent, TrainingMaterialComponent, InstructionsComponent, GridColumnComponent, AddClientComponent, AddInspectionRecordComponent, AddPartsComponent, AddBulkRecordComponent ],
    imports: [CommonModule, ModalModule, SharedModule,ConfirmationPopoverModule,
        RouterModule.forChild(routes), DataTableModule,FormsModule,ReactiveFormsModule,TableModule,
        SharedModule, MatChipsModule],
    entryComponents: [AddInspectionRecordComponent, GridColumnComponent, AddClientComponent, AddPartsComponent,AddBulkRecordComponent],
})
export class ManageModule1 { };