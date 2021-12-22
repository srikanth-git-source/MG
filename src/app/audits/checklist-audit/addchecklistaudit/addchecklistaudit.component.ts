import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChecklistAuditComponent } from '../checklist-audit.component';

@Component({
  selector: 'app-addchecklistaudit',
  templateUrl: './addchecklistaudit.component.html',
  styleUrls: ['./addchecklistaudit.component.scss']
})
export class AddchecklistauditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChecklistAuditComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }


}
