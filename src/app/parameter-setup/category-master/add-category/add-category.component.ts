import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddCategoryComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
}
