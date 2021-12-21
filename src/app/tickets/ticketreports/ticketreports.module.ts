import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description/description.component';
import { DetailsComponent } from './details/details.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { HistoryComponent } from './history/history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/theme/pipes/pipes.module';
import { EditdetailsdialogueComponent } from './details/editdetailsdialogue/editdetailsdialogue.component';


export const routes = [
  { path: '', redirectTo: 'Description', pathMatch: 'full' },
  { path: 'Description', component:DescriptionComponent , data: { breadcrumb: 'Ticket Report' } },
  { path: 'Details', component: DetailsComponent, data: { breadcrumb: 'Ticket Report' } }, 
  { path: 'Attachments', component: AttachmentsComponent, data: { breadcrumb: 'Ticket Report' } },
  { path: 'History', component: HistoryComponent, data: { breadcrumb: 'Ticket Report' } },  
  
];

@NgModule({
  declarations: [DescriptionComponent, DetailsComponent, AttachmentsComponent, HistoryComponent, EditdetailsdialogueComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule, ColorPickerModule
  ],
  entryComponents:[EditdetailsdialogueComponent]
})
export class TicketreportsModule { }

