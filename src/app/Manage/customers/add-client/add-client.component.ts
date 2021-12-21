import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddClientComponent> ) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

}
