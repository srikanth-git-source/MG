import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addchecklistissuelineitem',
  templateUrl: './addchecklistissuelineitem.component.html',
  styleUrls: ['./addchecklistissuelineitem.component.scss']
})
export class AddchecklistissuelineitemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddchecklistissuelineitemComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }

}
