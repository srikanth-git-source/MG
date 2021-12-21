import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addparameteraudit',
  templateUrl: './addparameteraudit.component.html',
  styleUrls: ['./addparameteraudit.component.scss']
})
export class AddparameterauditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddparameterauditComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
