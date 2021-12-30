import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesHectorPqaComponent } from './issues-hector-pqa/issues-hector-pqa.component';
import { IssuesHectorBodyAuditComponent } from './issues-hector-body-audit/issues-hector-body-audit.component';
import { IssuesHectorPaintAuditComponent } from './issues-hector-paint-audit/issues-hector-paint-audit.component';

@NgModule({
  declarations: [IssuesHectorPqaComponent, IssuesHectorBodyAuditComponent, IssuesHectorPaintAuditComponent],
  imports: [
    CommonModule
  ]
})
export class IssuesHectorChecklistAuditModule { }
