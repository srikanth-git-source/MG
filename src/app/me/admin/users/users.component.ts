import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AdduserComponent } from './adduser/adduser.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
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
    {full_name:"Navin malik",email:'navin@gmail.com',username:'navin',location:'Hyderabad',office:'Hyderabad',Role:'Admin',status:true,PermissionsCount :'21/80'},
    {full_name:"Surya Teja",email:'surya@gmail.com',username:'surya',location:'Hyderabad',office:'Hyderabad',Role:'Manager',status:true,PermissionsCount :'56/80'},
    {full_name:"Siva Kumar",email:'siva@gmail.com',username:'siva',location:'Banglore',office:'Banglore',Role:'Staff',status:true,PermissionsCount :'42/80'},
    {full_name:"Amit Kumar",email:'ridhma@gmail.com',username:'ridhima',location:'Mumbai',office:'Mumbai',Role:'Staff',status:true,PermissionsCount :'80/80'},
  ]
  opendashboard(){
    window.open('/#/parameter-dashboard/issuelog-par');
  }

  // addUser(){
  //   this.dialog.open(AdduserComponent,{
  //     width:"600px",
  //     height:"auto"
  //   })
  // }
  public addUser(item){
    this.dialog.open(AdduserComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }
  // addParameter(){
  //   this.dialog.open(AddparameterauditComponent,{
  //     width:"600px",
  //     height:"auto"
  //   })
  // }
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

}
