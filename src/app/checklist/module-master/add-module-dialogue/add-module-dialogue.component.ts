import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-module-dialogue',
  templateUrl: './add-module-dialogue.component.html',
  styleUrls: ['./add-module-dialogue.component.scss']
})
export class AddModuleDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddModuleDialogueComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
