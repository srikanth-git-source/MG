import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddchecklistauditComponent } from './addchecklistaudit/addchecklistaudit.component';

@Component({
  selector: 'app-checklist-audit',
  templateUrl: './checklist-audit.component.html',
  styleUrls: ['./checklist-audit.component.scss']
})
export class ChecklistAuditComponent implements OnInit {
  
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
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
    {Date:'1-11-2021',VIN:'HR07 BP0721',AuditType:'Produsct Quality Audit',Issues:'51',Demerits:'1891',Location:'Hyderabad',Auditor:'Surya',Model:'Hector',Variant:'Manual',Interior_Trim:'High',Colour:'White',Transmission:'Manual',Fuel_Type:'Diesel', Status: true },
    {Date:'12-11-2021',VIN:'HR02 BP0421',AuditType:'Body Audit',Issues:'12',Demerits:'1771',Location:'Banglore',Auditor:'Siva',Model:'Astor',Variant:'Automatic',Interior_Trim:'Low',Colour:'Black',Transmission:'AMT',Fuel_Type:'Petrol', Status: true },
    {Date:'15-11-2021',VIN:'HR07 EP0021',AuditType:'Paint Audit',Issues:'69',Demerits:'1261',Location:'Mumbai',Auditor:'Navin',Model:'Gloster',Variant:'Manual',Interior_Trim:'High',Colour:'Blue',Transmission:'DCT',Fuel_Type:'Petrol', Status: true },
    {Date:'23-10-2021',VIN:'HR07 RG7218',AuditType:'Body Audit',Issues:'14',Demerits:'1001',Location:'Pune',Auditor:'Ridhima',Model:'Astor',Variant:'Automatic',Interior_Trim:'Medium',Colour:'White',Transmission:'AMT',Fuel_Type:'Petrol', Status: true },
    {Date:'5-08-2021',VIN:'HR07 FK0770',AuditType:'Paint Audit',Issues:'28',Demerits:'1491',Location:'Raipur',Auditor:'Siva',Model:'Hector',Variant:'Manual',Interior_Trim:'Low',Colour:'Orange',Transmission:'Manual',Fuel_Type:'Hybrid', Status: true },
  ]
  opendashboard(){
    window.open('/#/checklist-dashboard/issuelog');
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}
public addchecklistaudit(auditdata) {
  let dialogRef = this.dialog.open(AddchecklistauditComponent, {
      data: auditdata,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
}

