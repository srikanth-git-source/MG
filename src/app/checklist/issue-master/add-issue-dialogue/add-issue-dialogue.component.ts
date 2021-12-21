import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-issue-dialogue',
  templateUrl: './add-issue-dialogue.component.html',
  styleUrls: ['./add-issue-dialogue.component.scss']
})
export class AddIssueDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddIssueDialogueComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  close(){
    this.dialogRef.close();
  }

}