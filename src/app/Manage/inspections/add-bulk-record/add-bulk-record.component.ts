import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MatOption, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-add-bulk-record',
  templateUrl: './add-bulk-record.component.html',
  styleUrls: ['./add-bulk-record.component.scss']
})
export class AddBulkRecordComponent implements OnInit {

  FilterForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddBulkRecordComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) { }

  ngOnInit() {
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

  close(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  itemstr: any = ['str'];
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
    console.log(e)
    this.itemstr.splice(e,1);
  }

  saveLookup() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }
  isNoDefects = null;
  showNoDefect = true;
  changeDefects(event){
    this.showNoDefect = !this.showNoDefect
    }

 
    // @ViewChild('allSelected') private allSelected: MatOption;
    // toggleAllSelection() {
    //   if (this.allSelected.selected) {
    //     this.FilterForm.controls.LogDefects
    //       .patchValue([...this.values.map(item => item.), 0]);
    //   } else {
    //     this.FilterForm.controls.LogDefects.patchValue([]);
    //   }
    // }
}

