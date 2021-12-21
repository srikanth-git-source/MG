import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-function-dialogue',
  templateUrl: './add-function-dialogue.component.html',
  styleUrls: ['./add-function-dialogue.component.scss']
})
export class AddFunctionDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddFunctionDialogueComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  close(){
    this.dialogRef.close();
  }

}