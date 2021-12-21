import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-das-module',
  templateUrl: './das-module.component.html',
  styleUrls: ['./das-module.component.scss']
})
export class DasModuleComponent implements OnInit {
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
        name: 'BSO',
        value: 1290
      },
      {
        name: 'Door',
        value: 751
      },
      {
        name: 'Rear Bumper',
        value: 1190
      },
      {
        name: 'Fuel Flap',
        value: 320
      },
      {
        name: 'Upper Trim ',
        value: 78
      }
     
    ];
    const first = [
      {
        name: 'BSO',
        value: 2
      },
      {
        name: 'Door',
        value: 7
      },
      {
        name: 'Rear Bumper',
        value: 11
      },
      {
        name: 'Fuel Flap',
        value: 9
      },
      {
        name: 'Upper Trim ',
        value: 5
      }
     
    ];
    Object.assign(this, {first,three}); 
   }

  ngOnInit() {
  }

  items = [
    {module:'BSO',function:"Aesthetics",defect:"Damage/ Scratch/ Chip",demerit:1290,issues:20}, 
    {module:'Door',function:"Mutilation",defect:"Scratch",demerit:751,issues:7},
    {module:'Rear Bumper',function:"Aesthetics",defect:"Improper assembly",demerit:1190,issues:11},
    {module:'Fuel Flap',function:"Aesthetics",defect:"Ding",demerit:32,issues:9},
    {module:'Upper Trim',function:"Mutilation",defect:"Uneven/Excess Gap/ Flushness",demerit:78,issues:5},
    ];

}
