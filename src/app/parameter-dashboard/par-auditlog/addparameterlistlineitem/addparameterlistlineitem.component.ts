import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addparameterlistlineitem',
  templateUrl: './addparameterlistlineitem.component.html',
  styleUrls: ['./addparameterlistlineitem.component.scss']
})
export class AddparameterlistlineitemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddparameterlistlineitemComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
