import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleMasterComponent } from './module-master/module-master.component';
import { FunctionMasterComponent } from './function-master/function-master.component';
import { DefectMasterComponent } from './defect-master/defect-master.component';
import { IssueMasterComponent } from './issue-master/issue-master.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatIconModule, MatPaginatorModule, MatTreeModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DataTableModule } from 'angular2-datatable';
import { DragulaService } from 'ng2-dragula';
import { ModalModule } from 'ngx-bootstrap';
import { TableModule } from 'primeng/table';
import {MatSelectModule} from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { AddModuleDialogueComponent } from './module-master/add-module-dialogue/add-module-dialogue.component';
import { AddFunctionDialogueComponent } from './function-master/add-function-dialogue/add-function-dialogue.component';
import { AddDefectDialogueComponent } from './defect-master/add-defect-dialogue/add-defect-dialogue.component';
import { AddIssueDialogueComponent } from './issue-master/add-issue-dialogue/add-issue-dialogue.component';
import { AuditTypesComponent } from './audit-types/audit-types.component';
import { AddAuditDialougeComponent } from './audit-types/add-audit-dialouge/add-audit-dialouge.component';
import { MonthlyTargetsComponent } from './monthly-targets/monthly-targets.component';
import { AddTargetDialougeComponent } from './monthly-targets/add-target-dialouge/add-target-dialouge.component';


export const routes = [
  { path: '', redirectTo: 'module-master', pathMatch: 'full' },
  { path: 'module-master', component: ModuleMasterComponent, data: { breadcrumb: 'Audit Bench-Checklists' }},
  { path: 'function-master', component: FunctionMasterComponent, data: { breadcrumb: 'Audit Bench-Checklists' }},
  { path: 'defect-master', component: DefectMasterComponent, data: { breadcrumb: 'Audit Bench-Checklists' }},
  { path: 'issue-master', component: IssueMasterComponent, data: { breadcrumb: 'Audit Bench-Checklists' }},
  { path: 'audit-types', component: AuditTypesComponent, data: { breadcrumb: 'Audit Bench-Checklists' }},
  { path: 'monthly-targets', component: MonthlyTargetsComponent, data: { breadcrumb: 'Audit Bench-Checklists' }}
];

@NgModule({
  imports: [
    CommonModule, ModalModule,ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule,FormsModule,ReactiveFormsModule,TableModule,
    SharedModule,MatTreeModule,CdkTreeModule,MatIconModule ,MatSelectModule,MatCardModule,MatPaginatorModule 



  ],
  providers: [DragulaService],
  declarations: [ModuleMasterComponent, FunctionMasterComponent, DefectMasterComponent,
     IssueMasterComponent, AddModuleDialogueComponent, AddFunctionDialogueComponent, 
     AddDefectDialogueComponent, AddIssueDialogueComponent, AuditTypesComponent, AddAuditDialougeComponent, MonthlyTargetsComponent, AddTargetDialougeComponent],
  entryComponents:[AddModuleDialogueComponent,AddFunctionDialogueComponent,AddDefectDialogueComponent, AddIssueDialogueComponent,AddAuditDialougeComponent,AddTargetDialougeComponent]
})

export class ChecklistModule { }
