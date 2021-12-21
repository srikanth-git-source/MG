import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddClientComponent } from './add-client/add-client.component';
import { GridColumnComponent } from './grid-column/grid-column.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomersComponent implements OnInit {

  constructor(private alertService: AlertService, public dialog: MatDialog) { }
  
  filterToggle = false;

  tableList : Object[] = [
    {cName: 'Scifit', email: 'scfit@scfit.com', phone: '+1(072) 346-2354', sAdd: '4659  Sunset Drive', city: 'Pine Bluff', poscode: '71601', date: '2020-01-20', status: true},
    {cName: 'Climate Master', email: 'cliMast@cm.com', phone: '+1(123) 123-1231', sAdd: '13 Allegheny Dr, Cherokee Village', city: 'White Hall', poscode: '71801', date: '2020-02-25', status: false},
    {cName: 'Civacon', email: 'civacon@yahoo.com', phone: '+1(723) 462-3548', sAdd: '826 Goose Hollow Rd', city: 'Fountain Hill', poscode: '71523', date: '2020-02-27', status: true},
    {cName: 'Mid Continent', email: 'MidCon@mc.com', phone: '+1(905) 623-2205', sAdd: '211 Hermlee St', city: 'Imboden', poscode: '71967', date: '2020-03-05', status: true},
    {cName: 'Purkeys', email: 'purkeys@gmail.com', phone: '+1(231) 432-4234', sAdd: '7203 Sheridan Rd #D', city: 'Pine Bluff', poscode: '78655', date: '2020-03-10', status: true},
  ];

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  ngOnInit() {
  }

  deleteUser(){
    this.alertService.createAlert('Successfully deleted.', 1);
}

saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

openGridColumn(){
  this.dialog.open(GridColumnComponent,{
    width:"600px",
    height:"auto"
  })
}

openClientDialog(stat) {
  let dialogRef = this.dialog.open(AddClientComponent, {
    data: stat,
    height: 'auto',
    width: '600px',
    autoFocus: false
  });
  
  dialogRef.afterClosed().subscribe(data => {
    if (data != null && data !== undefined) {
    }
  });
}
}
