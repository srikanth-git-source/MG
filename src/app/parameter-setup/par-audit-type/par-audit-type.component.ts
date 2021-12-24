import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddParAuditComponent } from './add-par-audit/add-par-audit.component';

@Component({
  selector: 'app-par-audit-type',
  templateUrl: './par-audit-type.component.html',
  styleUrls: ['./par-audit-type.component.scss']
})
export class ParAuditTypeComponent implements OnInit {

  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

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
    {modulename:"C - Rating",status:true},
    {modulename:"D - Rating",status:true},
  ]

  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
  }

  public addaudit(item){
    this.dialog.open(AddParAuditComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }

}
