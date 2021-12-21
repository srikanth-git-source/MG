import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tableList: Object[] = [
    {"sno":1,perLevel:'Afterwash - PCB', perSetting:'86',userAssigned:'4', phone:'9875896123',role:"In Charge",workHours:8.00,Permissions:'5/20', reporManager: "Ramesh", isverified: true, vcStatus: true},
    {"sno":2,perLevel:'Coating - PCB', perSetting:'67',userAssigned:'3', phone:'9988775123',role:"Engineeer",workHours:8.00,Permissions:'5/20' , reporManager: "Madhu", isverified: false, vcStatus: false},
    {"sno":3,perLevel:'Depanel - PCB', perSetting:'30',userAssigned:'5', phone:'9988775123',role:"Engineeer",workHours:8.00,Permissions:'5/20' , reporManager: "Madhu", isverified: false, vcStatus: true},
    {"sno":4,perLevel:'Final - Box', perSetting:'9',userAssigned:'0', phone:'9988775123',role:"Engineeer",workHours:8.00,Permissions:'5/20' , reporManager: "Madhu", isverified: false, vcStatus: true},
    {"sno":5,perLevel:'RMA', perSetting:'55',userAssigned:'6', phone:'9988775123',role:"Engineeer",workHours:8.00,Permissions:'5/20' , reporManager: "Madhu", isverified: false, vcStatus: true},
    {"sno":6,perLevel:'Test - PCB', perSetting:23,userAssigned:'1', phone:'9988775123',role:"Engineeer",workHours:8.00,Permissions:'5/20' , reporManager: "Madhu", isverified: false, vcStatus: false}
  ];
}
