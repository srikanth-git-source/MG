import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddMonthlyTargetsComponent } from './add-monthly-targets/add-monthly-targets.component';

@Component({
  selector: 'app-monthly-targets',
  templateUrl: './monthly-targets.component.html',
  styleUrls: ['./monthly-targets.component.scss']
})
export class MonthlyTargetsComponent implements OnInit {

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

  

  values = [
    {target:'Vehicle',month:'03',year:"2020",model:"X-1",status:true},
    {target:'Vehicle2',month:'04',year:"2020",model:"X-2",status:true},
    {target:'Vehicle3',month:'05',year:"2020",model:"X-3",status:true},
    {target:'Vehicle4',month:'06',year:"2020",model:"X-4",status:true},
    
    ]

  ngOnInit() {
  }

  addtarget(item){
    this.dialog.open(AddMonthlyTargetsComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

openUploadCSV()
{

}

downloadSampleExcel()
{
  
}

}
