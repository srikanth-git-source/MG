import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-target-dialouge',
  templateUrl: './add-target-dialouge.component.html',
  styleUrls: ['./add-target-dialouge.component.scss']
})
export class AddTargetDialougeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddTargetDialougeComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
