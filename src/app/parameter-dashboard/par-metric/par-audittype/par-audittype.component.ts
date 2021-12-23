import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-par-audittype',
  templateUrl: './par-audittype.component.html',
  styleUrls: ['./par-audittype.component.scss']
})
export class ParAudittypeComponent implements OnInit {

  public three: any[];
  public single: any[];
  public showLegend = true;
  public explodeSlices = false;
  public showLabels = true;
  public doughnut = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  constructor() {
    const three = [
      {
        name: 'C - Rating',
        value: 20
      },
      {
        name: 'D - Rating',
        value: 7
      },
      
     
    ];
    Object.assign(this, {three}); 
   }


 

  ngOnInit() {
  }

  items = [
    {audtitype:"C - Rating",issues:20}, 
    {audtitype:"D - Rating",issues:7}
    
    ];


}
