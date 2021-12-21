import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddparameterauditComponent } from './addparameteraudit/addparameteraudit.component';
import { ManageGridComponent } from './manage-grid/manage-grid.component';

@Component({
  selector: 'app-parameter-audit',
  templateUrl: './parameter-audit.component.html',
  styleUrls: ['./parameter-audit.component.scss']
})
export class ParameterAuditComponent implements OnInit {
  filterToggle = false;
  constructor(public dialog: MatDialog,private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';

  ngOnInit() {
  }


  values = [
    {date:'03-12-2021',vin:'HR07 BP0721',checkpoints:'510',compailance:'89%',issues:'68',auditor:'Surya',model:'Hector',variant:'Manual',intercam_trim:'High',color:'White',transmission:'Manual',fuel_type:'Diesel',status:true},
    {date:'13-11-2021',vin:'HR02 BP0421',checkpoints:'620',compailance:'72%',issues:'70',auditor:'Siva',model:'Astor',variant:'Automatic',intercam_trim:'Low',color:'Black',transmission:'AMT',fuel_type:'Petrol',status:true},
    {date:'05-11-2021',vin:'CG07 VP0021',checkpoints:'440',compailance:'91%',issues:'45',auditor:'Ridhma',model:'Gloster',variant:'Manual',intercam_trim:'High',color:'Blue',transmission:'DCT',fuel_type:'Diesel',status:true},
    {date:'29-10-2021',vin:'TN17 EP5021',checkpoints:'300',compailance:'82%',issues:'42',auditor:'Navin',model:'Astor',variant:'Semi-Automatic',intercam_trim:'Medium',color:'White',transmission:'AMT',fuel_type:'Petrol',status:true},
    {date:'01-12-2021',vin:'PN07 AM9021',checkpoints:'326',compailance:'94%',issues:'32',auditor:'Surya',model:'Hector',variant:'Automatic',intercam_trim:'Low',color:'Orange',transmission:'Manual',fuel_type:'Petrol',status:true},
  ]
  opendashboard(){
    window.open('/#/parameter-dashboard/issuelog-par');
  }

  addgrid(){
    this.dialog.open(ManageGridComponent,{
      width:"600px",
      height:"auto"
    })
  }
  addParameter(){
    this.dialog.open(AddparameterauditComponent,{
      width:"600px",
      height:"auto"
    })
  }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

}

