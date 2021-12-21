import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent implements OnInit {

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
    {sno:'1',module:'BSO',function:'Aesthetics',defect:'Thin Paint',issue:'Fuel filler hinge area/Fuel flap edge - Thin Paint & Paint Run down',side:'LH',face:'FT',agency:'GA', demerit:'1'},
    {sno:'2',module:'Door',function:'Mutilation',defect:'Ding',issue:'RHR BSO Ding',side:'RH',face:'RR',agency:'Paint', demerit:'4'},
    {sno:'3',module:'Rear bumper',function:'Aesthetics',defect:'Scratch ',issue:'LHR Door outer scratch',side:'BH',face:'BH',agency:'Body', demerit:'3'},
    {sno:'4',module:'Tailgate',function:'Mutilation',defect:'Sink / flow marks',issue:'Roof rail - Sink marks / Waviness',side:'LH',face:'BH',agency:'SQE', demerit:'10'},
    {sno:'5',module:'Central Console',function:'Mutilation',defect:'Dirty',issue:'RHR 60 seat dirty',side:'LH',face:'FT',agency:'SQE', demerit:'13'},
    {sno:'6',module:'C pillar',function:'Aesthetics',defect:'Color / Shade Mismatch',issue:'Roof rail - Sink marks / Waviness',side:'RH',face:'FT',agency:'Body', demerit:'17'},
    {sno:'7',module:'Rear Seat',function:'Mutilation',defect:'Tool / Scuff Marks',issue:'Roof rail - Sink marks / Waviness',side:'BH',face:'BH',agency:'SQE', demerit:'4'},
    {sno:'8',module:'Door',function:'Aesthetics',defect:'Damage/ Scratch/ Chip',issue:'RH rocker panel scratch',side:'RR',face:'FT',agency:'Paint', demerit:'6'},
    {sno:'9',module:'BSO',function:'Aesthetics',defect:'Uneven/Excess Gap/ Flushness',issue:'Door apeture / BSO color mismatch- G red',side:'RH',face:'FT',agency:'Body', demerit:'2'},
    {sno:'10',module:'Tailgate',function:'Mutilation',defect:'Dent/ Ding / Bump',issue:'Fuel flap - Reinforcement Panel Spot Exposed',side:'RR',face:'RR',agency:'Paint', demerit:'5'},
 
  ]
}

