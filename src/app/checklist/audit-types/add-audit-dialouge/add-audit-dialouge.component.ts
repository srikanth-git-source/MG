import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-audit-dialouge',
  templateUrl: './add-audit-dialouge.component.html',
  styleUrls: ['./add-audit-dialouge.component.scss']
})
export class AddAuditDialougeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddAuditDialougeComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
