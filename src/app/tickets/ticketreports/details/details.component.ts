import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditdetailsdialogueComponent } from './editdetailsdialogue/editdetailsdialogue.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
 public opendetailsdialog(){
  let dialogRef = this.dialog.open(EditdetailsdialogueComponent, {
        height: 'auto',
        width: '500px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
  }
  


}
