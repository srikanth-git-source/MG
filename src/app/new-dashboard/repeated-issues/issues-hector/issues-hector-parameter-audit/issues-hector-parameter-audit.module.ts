import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesHectorCratingComponent } from './issues-hector-crating/issues-hector-crating.component';
import { IssuesHectorDratingComponent } from './issues-hector-drating/issues-hector-drating.component';

@NgModule({
  declarations: [IssuesHectorCratingComponent, IssuesHectorDratingComponent],
  imports: [
    CommonModule
  ]
})
export class IssuesHectorParameterAuditModule { }
