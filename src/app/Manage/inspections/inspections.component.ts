import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddBulkRecordComponent } from './add-bulk-record/add-bulk-record.component';
import { AddInspectionRecordComponent } from './add-inspection-record/add-inspection-record.component';

@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.scss']
})
export class InspectionsComponent implements OnInit {

  constructor(private alertService: AlertService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  filterToggle: boolean;

  tableList: Object[] = [
    {daTi: '12-14-2020, 09:23 PM', customer: 'Scifit', logby: 'Sam', jobNo: 'M45671', insTy: 'Afterwash - PCB', serialNo: 'M45671002 1021', defcts: 'R101, R102, R103, R104, R105, R106',quantity:'1',referenceDesignator:'C1ZCA1'},
    {daTi: '12-17-2020, 11:35 AM', customer: 'Climate Master', logby: 'Harry', jobNo: 'M45672', insTy: 'Coating - PCB', serialNo: 'M45671003 1022', defcts: 'R101, R102, R103, R104, R105, R106',quantity:'3',referenceDesignator:'JSCA1B'},
    {daTi: '12-17-2020, 10:23 PM', customer: 'Civacon',logby: 'Ron', jobNo: 'M45673', insTy: 'Depanel - PCB', serialNo: 'M45671004 1023', defcts: 'R101, R102, R103, R104, R105, R106',quantity:'1',referenceDesignator:'B1XA3Z'},
    {daTi: '12-18-2020, 01:23 PM', customer: 'Mid Continent',logby: 'Roger', jobNo: 'M45674', insTy: 'Final - Box', serialNo: 'M45671005 1024', defcts: 'R101, R102, R103, R104, R105, R106',quantity:'2',referenceDesignator:'B1ACZS'},
    ];

    public openUserDialog(id) {
      let dialogRef = this.dialog.open(AddInspectionRecordComponent, {
          data: id,
          height: 'auto',
          width: '700px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
  }

  public openUserDialog1(id) {
    let dialogRef = this.dialog.open(AddBulkRecordComponent, {
        data: id,
        height: 'auto',
        width: '1000px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

  values = [
    "R101 - Exposed Copper",
    "R102 - Flux",
    "R103 - Tombstoning",
    "R104 - Lead Protrusion",
    "R105 - Masking",
    "R106 - Misaligned Components",
    "R107 - Solder",
    "R108 - Orientation",
    "R109 - Over/Under height",
    "R110 - Paperwork Incomplete"
  ]

}
