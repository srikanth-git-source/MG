import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddModuleDialogueComponent } from './add-module-dialogue/add-module-dialogue.component';

@Component({
  selector: 'app-module-master',
  templateUrl: './module-master.component.html',
  styleUrls: ['./module-master.component.scss']
})
export class ModuleMasterComponent implements OnInit {

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
    {modulename:"BSO",status:true},
    {modulename:"Door",status:true},
    {modulename:"Rear bumper",status:true},
    {modulename:"Fuel Flap",status:true},
    {modulename:"Upper trim",status:true},
    {modulename:"Tailgate",status:true},
    {modulename:"Central Console",status:true},
    {modulename:"C pillar",status:true},
    {modulename:"REAR SEAT",status:true},
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

  public addmodule(item){
    this.dialog.open(AddModuleDialogueComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }


}






  
