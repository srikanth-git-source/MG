import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-par-fueltype',
  templateUrl: './par-fueltype.component.html',
  styleUrls: ['./par-fueltype.component.scss']
})
export class ParFueltypeComponent implements OnInit {

  public three: any[];
  public first: any[];
  public single: any[];
  // view: any[] = [250,300];
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
        name: 'Petrol',
        value: 1290
      },
      {
        name: 'Diesel',
        value: 751
      },
      {
        name: 'EV',
        value: 1190
      },
     
     
    ];
    const first = [
      {
        name: 'Petrol',
        value: 20
      },
      {
        name: 'Diesel',
        value: 7
      },
      {
        name: 'EV',
        value: 11
      },
     
    ];
    Object.assign(this, {first,three}); 
   }

  ngOnInit() {
  }

  items = [
    {fuel_type:'Petrol',demerit:1290,issues:20}, 
    {fuel_type:'Diesel',demerit:751,issues:7},
    {fuel_type:'EV',demerit:1190,issues:11},
    
    ];


}
