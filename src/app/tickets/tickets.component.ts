import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  filterToggle = false;
  constructor(public dialog: MatDialog) { }

  
  ngOnInit() {
  }

  items=[
    {ticketid:'TKT000798',audit:'AU00264-1',unit:'CTO_1',block:"Block A",question:"Lux Levels verification...",audittype:"Site Surveyor",createdon:"17-06-2019",duedate:"18-06-2019",overdue:"Yes",chronic:"No",priority:"High",status:"Assigned"},
    {ticketid:'TKT000797',audit:'AU00262-1',unit:'CTO_2',block:"Block B",question:"Building shall be covered...",audittype:"Central Surveyor",createdon:"16-06-2019",duedate:"17-06-2019",overdue:"Yes",chronic:"No",priority:"Low",status:"Resolved"},
    {ticketid:'TKT000796',audit:'AU00262-1',unit:'CTO_3',block:"Block A",question:"Tanker unloading area sha...",audittype:"Site Surveyor",createdon:"16-06-2019",duedate:"16-06-2019",overdue:"No",chronic:"Yes",priority:"Medium",status:"Closed"},
    {ticketid:'TKT000795',audit:'AU00262-1',unit:'CTO_4',block:"Block C",question:"Rain water run off at ter...",audittype:"Central Surveyor",createdon:"16-06-2019",duedate:"18-06-2019",overdue:"Yes",chronic:"No",priority:"High",status:"Rejected"},
    {ticketid:'TKT000794',audit:'AU00262-1',unit:'CTO_5',block:"Block D",question:"Building External Closure...",audittype:"Site Surveyor",createdon:"17-06-2019",duedate:"15-06-2019",overdue:"No",chronic:"Yes",priority:"Low",status:"Cancelled"},
    
  ]

  // openBrandDialog(item) {
  //   let dialogRef = this.dialog.open(AddBrandComponent, {
  //     data: item,
  //     height: 'auto',
  //     width: '600px'
  //   }); 
  // }

  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
}