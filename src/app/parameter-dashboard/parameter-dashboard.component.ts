import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter-dashboard',
  templateUrl: './parameter-dashboard.component.html',
  styleUrls: ['./parameter-dashboard.component.scss']
})
export class ParameterDashboardComponent implements OnInit {
  
  filterToggle = false;
 
  constructor() { }

  ngOnInit() {
  }

}
