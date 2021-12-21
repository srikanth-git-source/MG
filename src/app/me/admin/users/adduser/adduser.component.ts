import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdduserComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
  //constructor(public dialogRef: MatDialogRef<AddAgencyComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }


  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
