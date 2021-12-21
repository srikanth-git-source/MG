import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-par-auditlog-grid',
  templateUrl: './par-auditlog-grid.component.html',
  styleUrls: ['./par-auditlog-grid.component.scss']
})
export class ParAuditlogGridComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<ParAuditlogGridComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
