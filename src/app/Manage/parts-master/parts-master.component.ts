import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddPartsComponent } from './add-parts/add-parts.component';

@Component({
  selector: 'app-parts-master',
  templateUrl: './parts-master.component.html',
  styleUrls: ['./parts-master.component.scss']
})
export class PartsMasterComponent implements OnInit {

  constructor(private alertService: AlertService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  tableList: Object[] = [
    {"sno":'CONDUCTOR',perLevel:'904-7609', perSetting:'6',userAssigned:'4', phone:'9875896123',role:"In Charge",workHours:8.00,Permissions:'5/20', reporManager: "Ramesh", isverified: true, vcStatus: true, data: '2020/01/03', data2: 'Sam'},
    {"sno":'INSULATION',perLevel:'904-1978B', perSetting:'7',userAssigned:'3', phone:'9988775123',role:"Engineeer",workHours:8.00,Permissions:'5/20' , reporManager: "Madhu", isverified: false, vcStatus: false, data: '2020/01/10', data2: 'Harry'},
    {"sno":'METAL PROTECTION',perLevel:'904-0887B', perSetting:'3',userAssigned:'5', phone:'9988775123',role:"Engineeer",workHours:8.00,Permissions:'5/20' , reporManager: "Madhu", isverified: false, vcStatus: true, data: '2020/01/12',data2: 'Ron'},
    {"sno":'OUTER SHEATH',perLevel:'910-13729', perSetting:'4',userAssigned:'0', phone:'9988775123',role:"Engineeer",workHours:8.00,Permissions:'5/20' , reporManager: "Madhu", isverified: false, vcStatus: true, data: '2020/01/15',data2: 'Roger'},
  ];

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  openClientDialog() {
    let dialogRef = this.dialog.open(AddPartsComponent, {
      data: null,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
}
}
