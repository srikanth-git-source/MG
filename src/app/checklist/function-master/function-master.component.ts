import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddFunctionDialogueComponent } from './add-function-dialogue/add-function-dialogue.component';

@Component({
  selector: 'app-function-master',
  templateUrl: './function-master.component.html',
  styleUrls: ['./function-master.component.scss']
})
export class FunctionMasterComponent implements OnInit {

  
  gridCmp: any;

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
    {status:true,modulename:"BSO",functioname:"Aesthetics"},
    {status:true,modulename:"Door",functioname:"Mutilation"},
    {status:true,modulename:"Rear bumper",functioname:"Mutilation"},
    {status:true,modulename:"Fuel Flap",functioname:"Aesthetics"},
    {status:true,modulename:"Upper trim",functioname:"Mutilation"},
    {status:true,modulename:"Tailgate",functioname:"Aesthetics"},
    {status:true,modulename:"Central Console",functioname:"Mutilation"},
    {status:true,modulename:"C pillar",functioname:"Aesthetics"},
    {status:true,modulename:"REAR SEAT",functioname:"Mutilation"},
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

  public addfunction(item){
    this.dialog.open(AddFunctionDialogueComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }


}




