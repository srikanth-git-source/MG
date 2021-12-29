import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-trend-ca',
  templateUrl: './location-trend-ca.component.html',
  styleUrls: ['./location-trend-ca.component.scss']
})
export class LocationTrendCaComponent implements OnInit {

  public three: any[];
  public single: any[];
  public first: any[];
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
        name: 'GA',
        value: 1290
      },
      {
        name: 'Body',
        value: 751
      },
      {
        name: 'Paint',
        value: 1190
      },
      {
        name: 'Press',
        value: 32
      },
      {
        name: 'SQE',
        value: 78
      }
     
    ];
    const first = [
      {
        name: 'GA',
        value: 20
      },
      {
        name: 'Body',
        value: 7
      },
      {
        name: 'Paint',
        value: 11
      },
      {
        name: 'Press',
        value: 9
      },
      {
        name: 'SQE',
        value: 5
      }
     
    ];
    Object.assign(this, {first,three}); 
   }
   ngOnInit() {
  }
  items = [
    {model:'Hector',demerit:1290,issues:20}, 
    {model:'Astor',demerit:751,issues:7},
    {model:'Gloster',demerit:1190,issues:11},
    {model:'EV',demerit:320,issues:13},
 
    ];
}
