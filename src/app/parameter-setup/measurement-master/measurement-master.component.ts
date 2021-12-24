import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddMeasurementComponent } from './add-measurement/add-measurement.component';

@Component({
  selector: 'app-measurement-master',
  templateUrl: './measurement-master.component.html',
  styleUrls: ['./measurement-master.component.scss']
})
export class MeasurementMasterComponent implements OnInit {
  filterToggle = false;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
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
    {category:'Exterior',measurement:'GAP( a )',status:true},
    {category:'Interior',measurement:'GAP( b )',status:true},
    {category:'Exterior',measurement:'FLUSH',status:true},
    {category:'Interior',measurement:'PARALLELISM',status:true},
    {category:'Exterior',measurement:'DIST',status:true},
    ]
  opendashboard(){
    window.open('/#/parameter-dashboard/issuelog-par');
  }

  addmeasurement(item){
    this.dialog.open(AddMeasurementComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}
}
