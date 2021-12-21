import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-parts',
  templateUrl: './add-parts.component.html',
  styleUrls: ['./add-parts.component.scss']
})
export class AddPartsComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddPartsComponent> ) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

}
