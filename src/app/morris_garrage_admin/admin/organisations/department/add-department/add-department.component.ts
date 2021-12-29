import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddDepartmentComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  close(){
    this.dialogRef.close();
  }

}
