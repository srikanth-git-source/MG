import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddTargetDialougeComponent } from './add-target-dialouge/add-target-dialouge.component';

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
    {target:'100',month:'Oct',year:"2021",model:"Hector",status:true},
    {target:'75',month:'Nov',year:"2021",model:"Astor",status:true},
    {target:'190',month:'Dec',year:"2021",model:"Gloster",status:true},
    {target:'120',month:'Jan',year:"2022",model:"ZSEV",status:true},
    
    ]

  

  ngOnInit() {
  }

  addtarget(item){
    this.dialog.open(AddTargetDialougeComponent,{
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
