import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  constructor(public dialog: MatDialog,private alertService: AlertService) { }

  ngOnInit() {
  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  filterForm:FormGroup;
  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';

  
  values = [
    {Checklist:'Warehouse DRL-Demo',Blocks:'15 (2)',Status:true,Questions:'219 (15)'},
    {Checklist:'Warehouse DRL',Blocks:'25 (4)',Status:true,Questions:'285 (15)'},
    {Checklist:'CTO Basic ENG DRL',Blocks:'55 (8)',Status:true,Questions:'215 (18)'},
    {Checklist:'FTO MES DRL',Blocks:'34 (3)',Status:true,Questions:'258 (15)'},
    {Checklist:'HR Process',Blocks:'29 (4)',Status:true,Questions:'215 (13)'},
    {Checklist:'Vendor Management',Blocks:'45 (7)',Status:false,Questions:'275 (14)'},
    {Checklist:'QSR',Blocks:'35 (3)',Status:true,Questions:'125 (24)'},
    {Checklist:'Managers Checklist',Blocks:'41 (7)',Status:true,Questions:'265 (22)'},
    {Checklist:'QA and Health Safety',Blocks:'29 (5)',Status:true,Questions:'219 (24)'},
    {Checklist:'HouseKeeping',Blocks:'31 (7)',Status:false,Questions:'219 (21)'},
  ]

  openGridColumnsDialog(){
    // this.dialog.open(GridColumnsContractorsDialogueComponent,{
    //   width:"600px",
    //   height:"auto"
    // })
  }

  openAddContractorDialog(){
    // this.dialog.open(AddContractorDialogueComponent,{
    //   width:"600px",
    //   height:"auto"
    // })
  }

  openContractsDialog(){
    // this.dialog.open(ContractsDialogueComponent,{
    //   width:"500px",
    //   height:"auto"
    // })
  }

  public openAddCategory2(items){
  //   let dialogRef = this.dialog.open(AddContractorDialogueComponent, {
  //     data:items,
  //     height: 'auto',
  //     width: '600px'
  // });
  // dialogRef.afterClosed().subscribe(data => {
  // });
  }
  saveStatus(data) {
    this.alertService.createAlert('Successfully saved.', 1);
}
}
