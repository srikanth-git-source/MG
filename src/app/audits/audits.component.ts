import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.scss']
})
export class AuditsComponent implements OnInit {

  filterToggle = false;
  constructor(public dialog: MatDialog) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';

  ngOnInit() {
  }


  items=[
    {auditid:'AU00264',location:'Hyderabad',unit:'CTO_1',block:"Block A",checklist:"Warehouse DRL-Demo",audittype:"Site Surveyor",surveyor:"Navin"},
    {auditid:'AU00262',location:'Mumbai',unit:'CTO_2',block:"Block B",checklist:"Warehouse DRL-Demo",audittype:"Central Surveyor",surveyor:"Praveen"},
    {auditid:'AU00262',location:'Srinivasa nagar',unit:'CTO_3',block:"Block A",checklist:"FTO MES DRL",audittype:"Site Surveyor",surveyor:"Radhakrishna"},
    {auditid:'AU00262',location:'mahabubnagar',unit:'CTO_4',block:"Block C",checklist:"CTO Basic ENG DRL",audittype:"Central Surveyor",surveyor:"Surya"},
    {auditid:'AU00262',location:'Koti',unit:'CTO_5',block:"Block D",checklist:"Warehouse DRL",audittype:"Site Surveyor",surveyor:"Sachin"},
    
  ]

  // openBrandDialog(item) {
  //   let dialogRef = this.dialog.open(AddBrandComponent, {
  //     data: item,
  //     height: 'auto',
  //     width: '600px'
  //   }); 
  // }
}
