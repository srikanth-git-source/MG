import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-manage-grid',
  templateUrl: './manage-grid.component.html',
  styleUrls: ['./manage-grid.component.scss']
})
export class ManageGridComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ManageGridComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
