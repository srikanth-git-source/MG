import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss']
})
export class GridColumnComponent implements OnInit {

  constructor(public dilaogRef:MatDialogRef<GridColumnComponent>) { }
  ngOnInit() {
  }

  close(){
    this.dilaogRef.close();
  }

}
