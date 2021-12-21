import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {

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
    {Location:'Hyderabad',Unit:'CTO_1	',Block:'CTO_1 Block A	'},
    {Location:'Vishakapatnam',Unit:'FTO_1	',Block:'FTO_1 Block A	'},
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
back(){
  window.history.back();
}
}

