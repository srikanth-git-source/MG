import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HectorCratingComponent } from './hector-crating/hector-crating.component';
import { HectorDratingComponent } from './hector-drating/hector-drating.component';

@NgModule({
  declarations: [HectorCratingComponent, HectorDratingComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardHectorParameterAuditModule { }
