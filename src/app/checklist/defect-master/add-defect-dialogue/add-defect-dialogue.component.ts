import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-defect-dialogue',
  templateUrl: './add-defect-dialogue.component.html',
  styleUrls: ['./add-defect-dialogue.component.scss']
})
export class AddDefectDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDefectDialogueComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  close(){
    this.dialogRef.close();
  }

}