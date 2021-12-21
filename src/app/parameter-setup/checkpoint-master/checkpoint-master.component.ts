import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddCheckpointComponent } from './add-checkpoint/add-checkpoint.component';

@Component({
  selector: 'app-checkpoint-master',
  templateUrl: './checkpoint-master.component.html',
  styleUrls: ['./checkpoint-master.component.scss']
})
export class CheckpointMasterComponent implements OnInit {
  filterToggle = false;
  constructor(public dialog: MatDialog,private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';

  ngOnInit() {
  }


  values = [
    {category:'Exterior',measurement:'GAP( a )',checkpoint:"1A - HOOD TO FRONT GRILL- GAP( a )",usl:"2",lsl:"1",status:true},
    {category:'Interior',measurement:'GAP( b )',checkpoint:"1A - HOOD TO FRONT GRILL - GAP( b )",usl:"2",lsl:"1",status:true},
    {category:'Exterior',measurement:'FLUSH',checkpoint:"1 -  TAILGATE TRIM TO DECORATIVE PANEL  - FLUSH",usl:"2",lsl:"1",status:true},
    {category:'Interior',measurement:'PARALLELISM',checkpoint:"TAILGATE TRIM to TAILGATE GLASS BLACK EDGE - PARALLELISM ",usl:"2",lsl:"1",status:true},
    {category:'Exterior',measurement:'DIST',checkpoint:"6 - TAILGATE TRIM to TAILGATE GLASS BLACK EDGE - DIST",usl:"2",lsl:"1",status:true},
    ]
  opendashboard(){
    window.open('/#/parameter-dashboard/issuelog-par');
  }

  addcheckpoint(){
    this.dialog.open(AddCheckpointComponent,{
      width:"600px",
      height:"auto"
    })
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}
}
