import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddLookupDialogComponent } from './add-lookup-dialog/add-lookup-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
  selector: 'app-lookup-options',
  templateUrl: './lookup-options.component.html',
  styleUrls: ['./lookup-options.component.scss']
})
export class LookupOptionsComponent implements OnInit {

  

  tableList = [
  {vcStatus:true,CodeMasterName:"Side View",LookupName:"LH",},
  {vcStatus:true,CodeMasterName:"Side View",LookupName:"RH",},
  {vcStatus:true,CodeMasterName:"Side View",LookupName:"BH",},
  {vcStatus:true,CodeMasterName:"Face View",LookupName:"FT",},
  {vcStatus:true,CodeMasterName:"Face View",LookupName:"RR",},
  {vcStatus:true,CodeMasterName:"Face View",LookupName:"BH",},
  {vcStatus:true,CodeMasterName:"Demerit",LookupName:"1",},
  {vcStatus:true,CodeMasterName:"Demerit",LookupName:"2",},
  {vcStatus:true,CodeMasterName:"Demerit",LookupName:"10",},
  {vcStatus:true,CodeMasterName:"Demerit",LookupName:"20",},
  {vcStatus:true,CodeMasterName:"Demerit",LookupName:"50"}
  ];




public popoverTitle: string = 'Confirm Delete';
public popoverMessage: string = 'Are you sure you want to delete this.?';
public popoverStatusTitle: string = 'Confirm Status Change';
public popoverStatusMessage: string = 'Are you sure you want to change vcStatus.?';
public cancelClicked: boolean = false;

filterToggle: boolean;

public searchText: string;
public page: any;

constructor(public appSettings: AppSettings,
    public dialog: MatDialog,
    private alertService: AlertService) {
    
}

ngOnInit() {
}



public addlookup(item) {
    let dialogRef = this.dialog.open(AddLookupDialogComponent, {
        data: item,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}


deleteUser(){
    this.alertService.createAlert('Successfully deleted.', 1);
}

saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

}