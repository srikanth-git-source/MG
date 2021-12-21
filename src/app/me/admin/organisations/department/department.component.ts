import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddDepartmentComponent } from './add-department/add-department.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  
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
    {status:true,department:"BSO",location:"Hyderabad"},
    {status:true,department:"Door",location:"Hyderabad"},
    {status:true,department:"Rear bumper",location:"Mumbai"},
    {status:true,department:"Fuel Flap",location:"Mumbai"},
    {status:true,department:"Upper trim",location:"Banglore"},
    {status:true,department:"Tailgate",location:"Pune"},
    {status:true,department:"Central Console",location:"Raipur"},
    {status:true,department:"C pillar",location:"Delhi"},
    {status:true,department:"REAR SEAT",location:"Delhi"},
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
    this.dialog.open(AddDepartmentComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }
}
