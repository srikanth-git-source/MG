import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddroleComponent } from './addrole/addrole.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  filterToggle = false;
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
    { Role: 'Admin', status: true, PermissionsCount: '49/49' ,users:"2"},
    {  Role: 'Staff', status: true, PermissionsCount: '42/49',users:"3" },
    {  Role: 'Manager', status: true, PermissionsCount: '30/49',users:"5" },
  ]

  opendashboard() {
    window.open('/#/parameter-dashboard/issuelog-par');
  }

  public addUser(item) {
    this.dialog.open(AddroleComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }

  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
  }
  permissions() {
    window.open('/#/admin/permissions');

  }

}
