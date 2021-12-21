import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

 
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
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


  values = [
    {sno:'1',module:'BSO',function:'Aesthetics',defect:'Thin Paint',issue:'Fuel filler hinge area/Fuel flap edge - Thin Paint & Paint Run down',side:'LH',face:'FT',Indicative:'GA'},
    {sno:'2',module:'Door',function:'Mutilation',defect:'Ding',issue:'RHR BSO Ding',side:'RH',face:'RR',Indicative:'Paint'},
    {sno:'3',module:'Rear bumper',function:'Aesthetics',defect:'Scratch ',issue:'LHR Door outer scratch',side:'BH',face:'BH',Indicative:'Body'},
    {sno:'4',module:'Upper trim',function:'Mutilation',defect:'Sink / flow marks',issue:'Roof rail - Sink marks / Waviness',side:'LH',face:'FT',Indicative:'SQE'},
  ]
}

