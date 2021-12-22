import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddAuditDialougeComponent } from './add-audit-dialouge/add-audit-dialouge.component';

@Component({
  selector: 'app-audit-types',
  templateUrl: './audit-types.component.html',
  styleUrls: ['./audit-types.component.scss']
})
export class AuditTypesComponent implements OnInit {

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
    {modulename:"Product Quality Audit",status:true},
    {modulename:"Body Audit",status:true},
    {modulename:"Paint Audit",status:true},
    {modulename:"C - Rating",status:true},
    {modulename:"D - Rating",status:true},
  ]

  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
  }

  public addaudit(item){
    this.dialog.open(AddAuditDialougeComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }

}
