import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddDefectDialogueComponent } from './add-defect-dialogue/add-defect-dialogue.component';

@Component({
  selector: 'app-defect-master',
  templateUrl: './defect-master.component.html',
  styleUrls: ['./defect-master.component.scss']
})
export class DefectMasterComponent implements OnInit {

  
  
  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';

  ngOnInit() {
  }
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

 
           

  values = [
    {status:true,modulename:"BSO",functioname:"Aesthetics",defectname:"Thin Paint"},
    {status:true,modulename:"Door",functioname:"Mutilation",defectname:"Tool / Scuff Marks"},
    {status:true,modulename:"Rear bumper",functioname:"Mutilation",defectname:"Scratch"},
    {status:true,modulename:"Fuel Flap",functioname:"Aesthetics",defectname:"Sink / flow marks"},
    // {status:true,modulename:"Upper trim",functioname:"Mutilation",defectname:"Contamination"},
    // {status:true,modulename:"Tailgate",functioname:"Aesthetics",defectname:"Uneven/Excess Gap/ Flushness"},
    // {status:true,modulename:"Central Console",functioname:"Mutilation",defectname:"Improper assembly"},
    // {status:true,modulename:"C pillar",functioname:"Aesthetics",defectname:"Dent/ Ding / Bump"},
    // {status:true,modulename:"REAR SEAT",functioname:"Mutilation",defectname:"Color / Shade Mismatch"},
  ]
  statusOptions = [
    {value:1, name: 'Prepared Quote', colorCode: '#00ff0040'},
    {value:2, name: 'PM Quote Review', colorCode: '#C0C0C0'},
    {value:3, name: 'Quote Send', colorCode: '#87CEFA'},
    {value:4, name: 'Awarded', colorCode: '#FFA50069'},
    {value:5, name: 'Rejected', colorCode: '#FFFF00'},
    {value:6, name: 'Document Taker Only', colorCode: '#FF00FF'},
  ]
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

  public adddefect(item){
    this.dialog.open(AddDefectDialogueComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }


}




