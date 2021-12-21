import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-editdetailsdialogue',
  templateUrl: './editdetailsdialogue.component.html',
  styleUrls: ['./editdetailsdialogue.component.scss']
})
export class EditdetailsdialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditdetailsdialogueComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
