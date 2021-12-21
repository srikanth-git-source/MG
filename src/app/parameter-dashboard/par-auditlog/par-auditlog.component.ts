import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ParAuditlogGridComponent } from './par-auditlog-grid/par-auditlog-grid.component';

@Component({
  selector: 'app-par-auditlog',
  templateUrl: './par-auditlog.component.html',
  styleUrls: ['./par-auditlog.component.scss']
})
export class ParAuditlogComponent implements OnInit {


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
    {sno:'1',category:'Exterior',checkpoint:'1A - HOOD TO FRONT GRILL - GAP( a )',measure:'GAP',lsl:1,usl:'2',value:'1.5',compilance:'25%'},
    {sno:'1',category:'Interior',checkpoint:'1 B - FRONT DASHBOARD TO LEATHER - GAP(a)',measure:'GAP',lsl:1,usl:'2',value:'1.8',compilance:'68%'},
    {sno:'1',category:'Exterior',checkpoint:'1 -  TAILGATE TRIM TO DECORATIVE PANEL  - GAP',measure:'GAP',lsl:1,usl:'2',value:'1',compilance:'74%'},
    {sno:'1',category:'Interior',checkpoint:'LEATHER SEATS SIDE TRIM to LEATHER SEATS LOWER TRIM - FLUSH',measure:'FLUSH',lsl:1,usl:'2',value:'1.9',compilance:'69%'},
    {sno:'1',category:'Exterior',checkpoint:'TAILGATE TRIM to TAILGATE GLASS - PARALLELISM ',measure:'PARALLELISM',lsl:1,usl:2,value:'2',compilance:'54%'},

     ]
     addgrid(){
      this.dialog.open(ParAuditlogGridComponent,{
        width:"600px",
        height:"auto"
      })
    }
}

