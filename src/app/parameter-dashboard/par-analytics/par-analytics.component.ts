import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-par-analytics',
  templateUrl: './par-analytics.component.html',
  styleUrls: ['./par-analytics.component.scss']
})
export class ParAnalyticsComponent implements OnInit {

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
    {sno:'1',Category:'Exterior',Check:'1A - HOOD TO FRONT GRILL - GAP( a )',Measure:'GAP( a )',LSL:'1',USL:'2'},
    {sno:'2',Category:'Interior',Check:'1 -  TAILGATE TRIM TO DECORATIVE PANEL  - GAP',Measure:'GAP( b )',LSL:'1',USL:'2'},
    {sno:'3',Category:'Exterior',Check:'1 -  TAILGATE TRIM TO DECORATIVE PANEL  - FLUSH',Measure:'FLUSH',LSL:'1',USL:'2'},
    {sno:'4',Category:'Interior',Check:'1A - HOOD TO FRONT GRILL - GAP( b )',Measure:'GAP',LSL:'1',USL:'2'},


  ]
}

