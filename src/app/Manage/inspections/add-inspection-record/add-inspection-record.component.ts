import { Component, Inject, OnInit } from '@angular/core';
import { DISABLED } from '@angular/forms/src/model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-add-inspection-record',
  templateUrl: './add-inspection-record.component.html',
  styleUrls: ['./add-inspection-record.component.scss'],
  providers: [AlertService]
})
export class AddInspectionRecordComponent implements OnInit {

  serial: boolean = false;
  serialNumber: any;
  jobNumber: any;
  defect: number;

  constructor(public dialogRef: MatDialogRef<AddInspectionRecordComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) {  }

  ngOnInit() {
  }

  quantity:number

  //values =['R101', 'R102', 'R103', 'R104', 'R105', 'R106', 'R107', 'R108', 'R109', 'R109', 'R110']

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

  close(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  itemstr: HTMLElement[] = [];
  agestr: HTMLElement[] = [];
  responsestr: HTMLElement[] = [];
  str: HTMLElement = <HTMLElement>document.getElementById("new_text");
  copy(type) {
    if(type=='lookup')
      this.itemstr.push(this.str);
    else if(type=='age')
      this.agestr.push(this.str);
    else
      this.responsestr.push(this.str);
  }
  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }

  saveLookup() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }
  isSerialNumber = null;
  changeQuantity(event){
    console.log(event.target.checked)
    this.isSerialNumber = event.target.checked == true? event.target.checked:null
    if(event.target.checked){
      this.quantity = 1
      this.serialNumber = "M45671002 1021"
      this.jobNumber = "M45671"
    }
    else{
      this.quantity = null
      this.serialNumber = null
      this.jobNumber = null
    }
  }
  isNoDefects = null;
  showNoDefect = true;
  changeDefects(event){
    this.showNoDefect = !this.showNoDefect
    }
  
}
